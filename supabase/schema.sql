-- "Мама рядом": схема семейного пространства для Supabase PostgreSQL.
-- Файл идемпотентный: выполняйте его целиком в SQL Editor и при первой
-- установке, и при обновлении — он безопасно доводит существующий проект
-- до актуального состояния.

create extension if not exists pgcrypto with schema extensions;

/* ============================== таблицы ================================= */

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  created_at timestamptz not null default now()
);

create table if not exists public.families (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 80),
  owner_id uuid not null references auth.users(id) on delete restrict,
  created_at timestamptz not null default now()
);

create table if not exists public.family_members (
  family_id uuid not null references public.families(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null check (role in ('owner', 'editor')),
  created_at timestamptz not null default now(),
  primary key (family_id, user_id)
);

create table if not exists public.app_state (
  family_id uuid not null references public.families(id) on delete cascade,
  storage_key text not null check (char_length(storage_key) between 1 and 180),
  value text not null,
  updated_at timestamptz not null default now(),
  updated_by uuid not null references auth.users(id) on delete restrict,
  primary key (family_id, storage_key)
);

-- Ограничение размера значения: одна запись не должна съедать базу.
do $$
begin
  if not exists (
    select 1 from pg_constraint where conname = 'app_state_value_size'
  ) then
    alter table public.app_state
      add constraint app_state_value_size check (char_length(value) <= 200000);
  end if;
end
$$;

create table if not exists public.family_invitations (
  id uuid primary key default gen_random_uuid(),
  family_id uuid not null references public.families(id) on delete cascade,
  email text,
  token_hash text not null unique,
  created_by uuid not null references auth.users(id) on delete cascade,
  expires_at timestamptz not null default now() + interval '7 days',
  accepted_at timestamptz,
  accepted_by uuid references auth.users(id) on delete set null,
  revoked_at timestamptz,
  created_at timestamptz not null default now(),
  check (email is null or email = lower(email))
);

create index if not exists app_state_family_updated_idx on public.app_state (family_id, updated_at desc);
create index if not exists family_invitations_family_idx on public.family_invitations (family_id, created_at desc);
create index if not exists family_members_user_idx on public.family_members (user_id);

/* ---- updated_at должен реально обновляться при upsert ----
   Раньше колонка получала значение только при вставке, поэтому
   индекс по updated_at и любое сравнение «что свежее» были бесполезны. */
create or replace function public.touch_app_state()
returns trigger language plpgsql as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists app_state_touch on public.app_state;
create trigger app_state_touch before insert or update on public.app_state
for each row execute procedure public.touch_app_state();

/* ============================== функции ================================= */

create or replace function public.is_family_member(target_family uuid)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.family_members
    where family_id = target_family and user_id = auth.uid()
  );
$$;

create or replace function public.is_family_owner(target_family uuid)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.families where id = target_family and owner_id = auth.uid()
  );
$$;

-- Семья у пользователя одна: повторный вызов возвращает существующую,
-- а не плодит новые записи.
create or replace function public.create_family(family_name text)
returns uuid language plpgsql security definer set search_path = public as $$
declare created_id uuid;
begin
  if auth.uid() is null then raise exception 'Authentication required'; end if;

  select family_id into created_id from public.family_members
  where user_id = auth.uid() limit 1;
  if created_id is not null then return created_id; end if;

  insert into public.families(name, owner_id) values (trim(family_name), auth.uid()) returning id into created_id;
  insert into public.family_members(family_id, user_id, role) values (created_id, auth.uid(), 'owner');
  return created_id;
end;
$$;

-- Не больше 20 действующих приглашений на семью: защита от массовой рассылки
-- с чужого аккаунта и от разрастания таблицы.
create or replace function public.create_family_invitation(invited_email text, raw_token text)
returns uuid language plpgsql security definer set search_path = public as $$
declare invitation_id uuid; target_family uuid; normalized_email text; active_count int;
begin
  select family_id into target_family from public.family_members where user_id = auth.uid() and role = 'owner' limit 1;
  if target_family is null then raise exception 'Only a family owner can invite people'; end if;

  if char_length(coalesce(raw_token, '')) < 24 then raise exception 'Invitation token is too short'; end if;

  select count(*) into active_count from public.family_invitations
  where family_id = target_family and accepted_at is null and revoked_at is null and expires_at > now();
  if active_count >= 20 then raise exception 'Too many active invitations'; end if;

  normalized_email := nullif(lower(trim(invited_email)), '');
  insert into public.family_invitations(family_id, email, token_hash, created_by)
  values (target_family, normalized_email, encode(extensions.digest(raw_token, 'sha256'), 'hex'), auth.uid())
  returning id into invitation_id;
  return invitation_id;
end;
$$;

create or replace function public.accept_family_invitation(raw_token text)
returns uuid language plpgsql security definer set search_path = public as $$
declare invitation public.family_invitations; user_email text;
begin
  if auth.uid() is null then raise exception 'Authentication required'; end if;
  select * into invitation from public.family_invitations
  where token_hash = encode(extensions.digest(raw_token, 'sha256'), 'hex')
    and accepted_at is null and revoked_at is null and expires_at > now()
  for update;
  if invitation.id is null then raise exception 'Invitation is invalid or expired'; end if;
  user_email := lower(coalesce(auth.jwt() ->> 'email', ''));
  if invitation.email is not null and invitation.email <> user_email then raise exception 'This invitation belongs to another email'; end if;
  insert into public.family_members(family_id, user_id, role)
  values (invitation.family_id, auth.uid(), 'editor') on conflict do nothing;
  update public.family_invitations set accepted_at = now(), accepted_by = auth.uid() where id = invitation.id;
  return invitation.family_id;
end;
$$;

create or replace function public.revoke_family_invitation(invitation_id uuid)
returns void language sql security definer set search_path = public as $$
  update public.family_invitations set revoked_at = now()
  where id = invitation_id and public.is_family_owner(family_id) and accepted_at is null;
$$;

-- Выйти из семьи. Владелец выйти не может: сначала передайте семью или
-- удалите её данные, иначе общее пространство останется без хозяина.
create or replace function public.leave_family()
returns void language plpgsql security definer set search_path = public as $$
declare target_family uuid;
begin
  if auth.uid() is null then raise exception 'Authentication required'; end if;
  select family_id into target_family from public.family_members where user_id = auth.uid() limit 1;
  if target_family is null then return; end if;
  if public.is_family_owner(target_family) then
    raise exception 'Owner cannot leave the family; transfer ownership or delete the family data';
  end if;
  delete from public.family_members where family_id = target_family and user_id = auth.uid();
end;
$$;

-- Убрать участника (только владелец, и не самого себя).
create or replace function public.remove_family_member(member_id uuid)
returns void language plpgsql security definer set search_path = public as $$
declare target_family uuid;
begin
  select family_id into target_family from public.family_members
  where user_id = auth.uid() and role = 'owner' limit 1;
  if target_family is null then raise exception 'Only a family owner can remove members'; end if;
  if member_id = auth.uid() then raise exception 'Owner cannot remove themselves'; end if;
  delete from public.family_members where family_id = target_family and user_id = member_id;
end;
$$;

-- Удалить все данные семьи с сервера (право на забвение).
-- Копии на устройствах остаются у их владельцев.
create or replace function public.delete_family_data()
returns void language plpgsql security definer set search_path = public as $$
declare target_family uuid;
begin
  select family_id into target_family from public.family_members
  where user_id = auth.uid() and role = 'owner' limit 1;
  if target_family is null then raise exception 'Only a family owner can delete family data'; end if;
  delete from public.app_state where family_id = target_family;
  delete from public.family_invitations where family_id = target_family;
end;
$$;

-- Полное удаление семьи вместе с участниками (для удаления аккаунта).
create or replace function public.delete_family()
returns void language plpgsql security definer set search_path = public as $$
declare target_family uuid;
begin
  select family_id into target_family from public.family_members
  where user_id = auth.uid() and role = 'owner' limit 1;
  if target_family is null then raise exception 'Only a family owner can delete the family'; end if;
  delete from public.app_state where family_id = target_family;
  delete from public.family_invitations where family_id = target_family;
  delete from public.family_members where family_id = target_family;
  delete from public.families where id = target_family;
end;
$$;

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles(id, display_name) values (new.id, null)
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
for each row execute procedure public.handle_new_user();

/* ============================== политики ================================ */

alter table public.profiles enable row level security;
alter table public.families enable row level security;
alter table public.family_members enable row level security;
alter table public.app_state enable row level security;
alter table public.family_invitations enable row level security;

-- Профили: свой и только сородственники по семье.
-- Раньше политика была using (true) — любой зарегистрированный видел всех.
drop policy if exists "profiles visible to signed in users" on public.profiles;
drop policy if exists "profiles visible to family" on public.profiles;
create policy "profiles visible to family" on public.profiles for select to authenticated
using (
  id = auth.uid()
  or exists (
    select 1
    from public.family_members mine
    join public.family_members theirs on theirs.family_id = mine.family_id
    where mine.user_id = auth.uid() and theirs.user_id = public.profiles.id
  )
);

drop policy if exists "users update own profile" on public.profiles;
create policy "users update own profile" on public.profiles for update to authenticated
using (id = auth.uid()) with check (id = auth.uid());

drop policy if exists "members read families" on public.families;
create policy "members read families" on public.families for select to authenticated
using (public.is_family_member(id));

drop policy if exists "members read family members" on public.family_members;
create policy "members read family members" on public.family_members for select to authenticated
using (public.is_family_member(family_id));

drop policy if exists "members read app state" on public.app_state;
create policy "members read app state" on public.app_state for select to authenticated
using (public.is_family_member(family_id));

drop policy if exists "members insert app state" on public.app_state;
create policy "members insert app state" on public.app_state for insert to authenticated
with check (public.is_family_member(family_id) and updated_by = auth.uid());

drop policy if exists "members update app state" on public.app_state;
create policy "members update app state" on public.app_state for update to authenticated
using (public.is_family_member(family_id))
with check (public.is_family_member(family_id) and updated_by = auth.uid());

-- Удаление: без этой политики семейные данные нельзя было стереть в принципе.
drop policy if exists "members delete app state" on public.app_state;
create policy "members delete app state" on public.app_state for delete to authenticated
using (public.is_family_member(family_id));

drop policy if exists "owners read invitations" on public.family_invitations;
create policy "owners read invitations" on public.family_invitations for select to authenticated
using (public.is_family_owner(family_id));

/* ================================ гранты ================================ */

grant usage on schema public to authenticated;
grant select, update on public.profiles to authenticated;
grant select on public.families, public.family_members to authenticated;
grant select, insert, update, delete on public.app_state to authenticated;
grant select on public.family_invitations to authenticated;
grant execute on function
  public.create_family(text),
  public.create_family_invitation(text, text),
  public.accept_family_invitation(text),
  public.revoke_family_invitation(uuid),
  public.leave_family(),
  public.remove_family_member(uuid),
  public.delete_family_data(),
  public.delete_family()
to authenticated;

/* ============================== realtime ================================ */

do $$
begin
  alter publication supabase_realtime add table public.app_state;
exception
  when duplicate_object then null;
end
$$;
