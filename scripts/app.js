/* ---------- DATA ---------- */
const STAGES = [
  {
    id:"s1", emoji:"🌱", theme:"sage", age:"5,5–6 месяцев", animal:"🐰",
    goal:"К концу 6 месяцев желательно познакомить малыша с овощами, безглютеновыми кашами и несколькими фруктами.",
    items:[
      {n:"Кабачок", f:"🥒", t:"Идеальный первый овощ: гипоаллергенный и нежный. Отварите или на пару, взбейте в гладкое пюре без соли."},
      {n:"Цветная капуста", f:"🥬", t:"Лёгкая и редко вызывает реакцию. Готовьте на пару до мягкости и пюрируйте."},
      {n:"Брокколи", f:"🥦", t:"Богата витамином C и клетчаткой. Берите только соцветия, готовьте на пару."},
      {n:"Гречневая каша", f:"🥣", t:"Безглютеновая, богата железом. Варите на воде до консистенции жидкого пюре."},
      {n:"Яблоко", f:"🍎", t:"Начните с зелёного печёного яблока — оно мягче для животика. Пюре без сахара."},
      {n:"Рисовая каша", f:"🍚", t:"Безглютеновая, мягко обволакивает. Не давайте слишком часто — рис может крепить."},
      {n:"Груша", f:"🍐", t:"Сладкая и нежная, но может слабить. Лучше запечь и сделать пюре."},
      {n:"Кукурузная каша", f:"🌽", t:"Безглютеновая, хорошо усваивается. Разваривайте до гладкости."},
      {n:"Тыква", f:"🎃", t:"Сладковатая, богата бета-каротином. Готовьте на пару и пюрируйте."},
      {n:"Овсяная каша", f:"🥣", t:"Содержит глютен — вводите после безглютеновых круп. Нежная и питательная."},
      {n:"Морковь", f:"🥕", t:"Сладкий вкус нравится малышам. Давайте 2–3 раза в неделю из-за каротина."},
      {n:"Банан", f:"🍌", t:"Удобный «фрукт на бегу»: просто разомните вилкой. Питательный и сытный."},
      {n:"Чернослив", f:"🍇", t:"Мягко помогает при запорах. Давайте понемногу в виде пюре."},
      {n:"Растительное масло (по несколько капель в овощное пюре)", f:"🫗", t:"Пара капель в овощное пюре помогает усвоению жирорастворимых витаминов."},
      {n:"Вода после прикорма", f:"💧", t:"С началом прикорма предлагайте немного чистой воды из ложки или кружки."}
    ]
  },
  {
    id:"s2", emoji:"🥩", theme:"rust", age:"6–7 месяцев", animal:"🐻",
    goal:"После введения мяса предлагайте его регулярно небольшими порциями.",
    items:[
      {n:"Индейка", f:"🦃", t:"Нежное гипоаллергенное мясо — отличный старт белка. Отварите и дважды пюрируйте."},
      {n:"Батат", f:"🍠", t:"Сладкий картофель, богат бета-каротином. На пару и в пюре — малыши обожают."},
      {n:"Кролик", f:"🍖", t:"Диетическое гипоаллергенное мясо, много железа. Хорошо разварите и измельчите."},
      {n:"Персик", f:"🍑", t:"Сочный и сладкий. Снимите кожицу, начните с небольшого пюре."},
      {n:"Курица", f:"🍗", t:"Доступный источник белка. Берите грудку, отваривайте и тщательно измельчайте."},
      {n:"Абрикос", f:"🍑", t:"Богат калием и бета-каротином. Спелый, без кожицы, в виде пюре."},
      {n:"Говядина", f:"🥩", t:"Много железа и цинка. Долго варите и измельчайте до однородности."},
      {n:"Телятина", f:"🥩", t:"Нежнее говядины. Отваривайте и пюрируйте, вводите отдельно от молочного."},
      {n:"Зелёный горошек", f:"🫛", t:"Растительный белок и клетчатка. Протрите через сито, чтобы убрать шкурки."},
      {n:"Слива", f:"🍑", t:"Помогает при запорах. Спелая, без кожицы, понемногу."},
      {n:"Кабачок кусочками (если готова)", f:"🥒", t:"Если малыш готов к текстуре — предложите мягкие паровые кусочки для жевания."},
      {n:"Брокколи кусочками", f:"🥦", t:"Мягкие соцветия на пару размером с горошину — удобно брать ручками."},
      {n:"Цветная капуста кусочками", f:"🥬", t:"Отличная еда руками: мягкие кусочки на пару."},
      {n:"Сливочное масло (в кашу)", f:"🧈", t:"Небольшой кусочек в кашу добавляет калорий и приятный вкус."}
    ]
  },
  {
    id:"s3", emoji:"🥚", theme:"butter", age:"7–8 месяцев", animal:"🐱",
    items:[
      {n:"Желток", f:"🥚", t:"Начните с 1/4 варёного желтка, следите за реакцией. Источник холина и железа."},
      {n:"Картофель", f:"🥔", t:"Вводите после других овощей. На пару и в пюре, можно смешать с кабачком."},
      {n:"Натуральный йогурт без сахара", f:"🥛", t:"Цельномолочный, без добавок. Знакомит с полезными бактериями."},
      {n:"Творог", f:"🧀", t:"Кальций и белок. Начните с чайной ложки, выбирайте детский без сахара."},
      {n:"Пшеничная каша", f:"🥣", t:"Содержит глютен. Вводите постепенно, наблюдая за переносимостью."},
      {n:"Пшённая каша", f:"🥣", t:"Безглютеновая, богата магнием. Хорошо разваривайте."},
      {n:"Многозерновая каша", f:"🥣", t:"Только когда каждая крупа в составе уже введена по отдельности."},
      {n:"Стручковая фасоль", f:"🫛", t:"Нежный растительный белок. Готовьте на пару и пюрируйте."},
      {n:"Свёкла", f:"🥬", t:"Сладкая, помогает пищеварению. Немного и не каждый день; может окрашивать стул."}
    ]
  },
  {
    id:"s4", emoji:"🐟", theme:"sky", age:"8–9 месяцев", animal:"🐧",
    goal:"Рыбу предлагать 1–2 раза в неделю.",
    items:[
      {n:"Хек", f:"🐟", t:"Нежирная белая рыба — лёгкий старт. Тщательно проверьте на кости."},
      {n:"Авокадо", f:"🥑", t:"Полезные жиры для мозга. Просто разомните спелый — готовить не нужно."},
      {n:"Минтай", f:"🐟", t:"Постная белая рыба, гипоаллергеннее красной. Отварите и разберите на волокна."},
      {n:"Черника", f:"🫐", t:"Антиоксиданты для зрения. Разомните, чтобы избежать риска подавиться."},
      {n:"Треска", f:"🐟", t:"Богата белком и йодом. Отварите и тщательно уберите кости."},
      {n:"Малина", f:"🍓", t:"Ароматная и полезная. Разомните и протрите от косточек."},
      {n:"Судак", f:"🐟", t:"Нежная речная рыба. Отваривайте и внимательно выбирайте кости."},
      {n:"Клубника", f:"🍓", t:"Частый аллерген — вводите осторожно, спелую и размятую."},
      {n:"Киви", f:"🥝", t:"Много витамина C. Начните с маленькой порции, следите за кожей."},
      {n:"Форель или лосось", f:"🐟", t:"Красная рыба с омега-3. Раз в неделю, тщательно от костей."}
    ]
  },
  {
    id:"s5", emoji:"🍝", theme:"wheat", age:"9–10 месяцев", animal:"🐹",
    items:[
      {n:"Макароны", f:"🍝", t:"Мелкие или хорошо разваренные, из твёрдых сортов. Хорошая еда руками."},
      {n:"Манго", f:"🥭", t:"Сладкий, много витамина A. Спелый, кусочками или пюре."},
      {n:"Хлеб", f:"🍞", t:"Небольшой кусочек подсушенного пшеничного хлеба без соли и сахара."},
      {n:"Чечевица", f:"🫘", t:"Растительный белок и железо. Хорошо разварите и разомните."},
      {n:"Нут", f:"🫘", t:"Питательные бобовые. Разварите до мягкости, сделайте пюре (основа хумуса)."},
      {n:"Фасоль", f:"🫘", t:"Белок и клетчатка. Долго варите и разминайте; вводите понемногу из-за газообразования."},
      {n:"Кукуруза", f:"🌽", t:"Сладкая, но шкурки тяжелы для животика — протирайте через сито."},
      {n:"Обычная гречневая крупа", f:"🌾", t:"Более грубая, чем детская. Хорошо разваривайте."},
      {n:"Овсяные хлопья", f:"🥣", t:"Варите до мягкости. Клетчатка помогает пищеварению."}
    ]
  },
  {
    id:"s6", emoji:"🍳", theme:"coral", age:"10–11 месяцев", animal:"🐣",
    items:[
      {n:"Целое яйцо", f:"🥚", t:"После желтка добавьте белок. Только полностью сваренное, следите за реакцией."},
      {n:"Сыр", f:"🧀", t:"Мягкий и несолёный. Тёртый или маленькими кусочками — кальций и белок."},
      {n:"Омлет", f:"🍳", t:"На пару или без масла, хорошо прожаренный, порезанный на полоски."},
      {n:"Томат (без кожицы)", f:"🍅", t:"Снимите кожицу и уберите семена. Немного — может давать реакцию на коже."},
      {n:"Огурец (без кожуры)", f:"🥒", t:"Освежающий, очистите от кожуры. Полоски приятно грызть при прорезывании зубов."},
      {n:"Болгарский перец", f:"🫑", t:"Снимите кожицу и тушите до мягкости. Много витамина C."}
    ]
  },
  {
    id:"s7", emoji:"🍽️", theme:"plum", age:"11–12 месяцев", animal:"🐨",
    items:[
      {n:"Семейные супы без соли", f:"🍲", t:"Малыш переходит к общему столу — варите без соли и специй."},
      {n:"Овощные рагу", f:"🥘", t:"Мягко тушёные овощи кусочками развивают жевание."},
      {n:"Паровые котлеты", f:"🍖", t:"Из нежирного мяса, на пару. Мягкие и сочные."},
      {n:"Тефтели", f:"🧆", t:"С рисом или овощами, отварные. Режьте на кусочки по возрасту."},
      {n:"Фрикадельки", f:"🧆", t:"Маленькие, в супе или на пару. Удобно брать ручками."},
      {n:"Запеканки", f:"🥧", t:"Творожные или овощные без сахара — вкусно и питательно."},
      {n:"Запечённая рыба", f:"🐟", t:"Без костей, мягкими кусочками. Полезные жиры."},
      {n:"Домашние оладьи без сахара", f:"🥞", t:"На банане или яблоке вместо сахара. Мягкие, для еды руками."},
      {n:"Каши из обычной крупы", f:"🥣", t:"Переходите с детских на обычные, хорошо разваренные каши."},
      {n:"Фрукты кусочками", f:"🍎", t:"Мягкие спелые кусочки развивают самостоятельность."},
      {n:"Овощи кусочками", f:"🥕", t:"Отварные или паровые кусочки тренируют жевание."},
      {n:"Самостоятельно есть ложкой", f:"🥄", t:"Дайте ложку и не бойтесь беспорядка — это важный навык."},
      {n:"Пить из кружки", f:"🥤", t:"Предлагайте воду из открытой кружки или поильника-непроливайки."}
    ]
  },
  {
    id:"s8", emoji:"🌰", theme:"hazel", age:"Основные аллергены", animal:"🦔",
    subtitle:"Ввести в течение первого года",
    items:[
      {n:"Яйцо", f:"🥚", t:"Один из главных аллергенов. Вводите рано и регулярно, начиная с малого."},
      {n:"Рыба", f:"🐟", t:"Частый аллерген. Начните с белой рыбы, наблюдайте за реакцией."},
      {n:"Пшеница", f:"🌾", t:"Источник глютена. Вводите постепенно небольшими порциями."},
      {n:"Молочные продукты", f:"🥛", t:"Йогурт, творог, сыр — да; цельное молоко как напиток — после года."},
      {n:"Соя", f:"🫘", t:"Встречается во многих продуктах. Вводите осознанно и следите за реакцией."},
      {n:"Кунжут", f:"🌰", t:"Аллерген; удобно в виде тахини (пасты), добавленной в еду."},
      {n:"Арахис (только в виде пасты, а не цельных орехов)", f:"🥜", t:"Только гладкая паста, разведённая в пюре — никогда цельные орехи."}
    ]
  }
];

const WARN_SECTION = {
  id:"w1", emoji:"🚫", theme:"warn", age:"До года не рекомендуется",
  list:["Мёд","Цельное коровье молоко как основной напиток","Соль и сахар в блюда","Цельные орехи","Попкорн","Целые виноградины и другие продукты с высоким риском поперхнуться"]
};

const PRAISES = [
  "Ням-ням! 🎉","Ещё один вкус открыт 🌟","Отлично получается! 👏",
  "Малыш растёт 🌱","Вкусный прогресс! 😋","Так держать! 💪",
  "Новый продукт покорён 🏆","Здорово! 🥰"
];

const STORAGE_KEY = "prikorm-checked-v2"; // совместимо со старой версией
const R_KEY = "prikorm-reactions-v1";
const D_KEY = "prikorm-dates-v1";
const O_KEY = "prikorm-open-v1"; // какие категории раскрыты
const N_KEY = "prikorm-notes-v1"; // заметки к продуктам
const C_KEY = "prikorm-custom-v1"; // свои продукты пользователя
const T_KEY = "prikorm-theme";
const CH_KEY = "prikorm-children-v1";  // список детей
const ACT_KEY = "prikorm-active-v1";   // активный ребёнок
const BASE_KEYS = [STORAGE_KEY, R_KEY, D_KEY, O_KEY, N_KEY, C_KEY]; // данные на каждого ребёнка
let state = {}, reactions = {}, dates = {}, openState = {}, notes = {}, customItems = {};
let children = [], activeChild = "c1", editingKid = null;
function k(base){ return base + "__" + activeChild; }
let eatSide = 0;
let filterMode = "all";
let lastResetBackup = null;
let addStage = null;
const EMOJI_PALETTE = ["🥕","🥦","🥬","🥒","🍅","🥔","🌽","🫑","🍆","🥑","🍎","🍐","🍌","🍓","🫐","🍑","🍒","🥝","🍇","🍉","🍊","🥭","🍗","🥩","🍖","🐟","🦐","🥚","🧀","🥛","🍚","🥣","🍝","🍞","🫘","🥜","🍠","🎃","🥯","🧆","🍲","🍽️"];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isDesktop = () => window.matchMedia("(min-width:981px)").matches;

const REMOJI = {love:"😋", meh:"😐", no:"🤢"};
const MONTHS = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];
function fmtDate(iso){ const d = new Date(iso); return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`; }
function esc(s){ return (s||"").replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }

/* ---------- ДЕТИ (профили) ---------- */
function saveChildren(){ try{ localStorage.setItem(CH_KEY, JSON.stringify(children)); }catch(e){} }
function saveActive(){ try{ localStorage.setItem(ACT_KEY, activeChild); }catch(e){} }
function loadChildrenMeta(){
  try{ const c = localStorage.getItem(CH_KEY); if(c) children = JSON.parse(c); }catch(e){ children = []; }
  try{ const a = localStorage.getItem(ACT_KEY); if(a) activeChild = a; }catch(e){}
  if(!children.length){
    // первый запуск новой версии: переносим существующие отметки в первого ребёнка
    children = [{ id:"c1", name:"Малыш" }];
    activeChild = "c1";
    BASE_KEYS.forEach(base=>{
      const old = localStorage.getItem(base);
      if(old != null && localStorage.getItem(base+"__c1") == null){
        localStorage.setItem(base+"__c1", old);
        localStorage.removeItem(base);
      }
    });
    saveChildren(); saveActive();
  }
  if(!children.find(c=> c.id===activeChild)) activeChild = children[0].id;
}

/* ---------- STATE (данные активного ребёнка) ---------- */
function loadState(){
  state={}; reactions={}; dates={}; openState={}; notes={}; customItems={};
  try{ const v = localStorage.getItem(k(STORAGE_KEY)); if(v) state = JSON.parse(v); }catch(e){}
  try{ const r = localStorage.getItem(k(R_KEY)); if(r) reactions = JSON.parse(r); }catch(e){}
  try{ const d = localStorage.getItem(k(D_KEY)); if(d) dates = JSON.parse(d); }catch(e){}
  try{ const o = localStorage.getItem(k(O_KEY)); if(o) openState = JSON.parse(o); }catch(e){}
  try{ const n = localStorage.getItem(k(N_KEY)); if(n) notes = JSON.parse(n); }catch(e){}
  try{ const c = localStorage.getItem(k(C_KEY)); if(c) customItems = JSON.parse(c); }catch(e){}
}
function saveState(){ try{ localStorage.setItem(k(STORAGE_KEY), JSON.stringify(state)); }catch(e){} }
function saveReactions(){ try{ localStorage.setItem(k(R_KEY), JSON.stringify(reactions)); }catch(e){} }
function saveDates(){ try{ localStorage.setItem(k(D_KEY), JSON.stringify(dates)); }catch(e){} }
function saveOpen(){ try{ localStorage.setItem(k(O_KEY), JSON.stringify(openState)); }catch(e){} }
function saveNotes(){ try{ localStorage.setItem(k(N_KEY), JSON.stringify(notes)); }catch(e){} }
function saveCustom(){ try{ localStorage.setItem(k(C_KEY), JSON.stringify(customItems)); }catch(e){} }
function customFor(stId){ return customItems[stId] || []; }

/* ---------- переключение / управление детьми ---------- */
function switchChild(id){
  if(id === activeChild) return;
  activeChild = id; saveActive();
  loadState();
  if(typeof dLoad==="function") dLoad();
  if(typeof dyLoad==="function") dyLoad();
  if(typeof dcLoad==="function") dcLoad();
  if(typeof vacMod!=="undefined") vacMod.load();
  if(typeof pregMod!=="undefined") pregMod.load();
  render();
  if(currentView==="dev") renderDev();
  if(currentView==="diary") renderDiary();
  if(currentView==="docs") renderDocs();
  if(currentView==="vac") vacMod.render();
  if(currentView==="preg") pregMod.render();
  renderKids(); updateHero();
}
function renderKidChips(el, withManage){
  el.innerHTML =
    children.map(c=> `<button class="kid ${c.id===activeChild?'active':''}" data-id="${c.id}" type="button">${esc(c.name)}</button>`).join("") +
    (withManage ? `<button class="kid kid-edit" data-act="edit" type="button" aria-label="Изменить имя">✏️</button><button class="kid kid-add" data-act="add" type="button">＋ ребёнок</button>` : "");
  el.querySelectorAll(".kid[data-id]").forEach(b=> b.addEventListener("click", ()=> switchChild(b.dataset.id)));
  const e=el.querySelector('[data-act="edit"]'); if(e) e.addEventListener("click", ()=> openKidModal(activeChild));
  const a=el.querySelector('[data-act="add"]'); if(a) a.addEventListener("click", ()=> openKidModal(null));
}
function renderKids(){
  const main=document.getElementById("kids"); if(main) renderKidChips(main, true);
  const dk=document.getElementById("devKids"); if(dk) renderKidChips(dk, false);
  const yk=document.getElementById("diaryKids"); if(yk) renderKidChips(yk, false);
  const ck=document.getElementById("docsKids"); if(ck) renderKidChips(ck, false);
  const vk=document.getElementById("vacKids"); if(vk) renderKidChips(vk, false);
  const pk=document.getElementById("pregKids"); if(pk) renderKidChips(pk, false);
}
function openKidModal(id){
  editingKid = id;
  const isEdit = !!id;
  document.getElementById("kidTitle").textContent = isEdit ? "Имя ребёнка" : "Новый ребёнок";
  document.getElementById("kidName").value = isEdit ? (children.find(c=>c.id===id)?.name || "") : "";
  const del = document.getElementById("kidDelete");
  del.style.display = (isEdit && children.length>1) ? "block" : "none";
  document.getElementById("kidModal").classList.add("open");
  document.getElementById("kidBackdrop").classList.add("open");
  setTimeout(()=> document.getElementById("kidName").focus(), 80);
}
function closeKidModal(){
  document.getElementById("kidModal").classList.remove("open");
  document.getElementById("kidBackdrop").classList.remove("open");
}
function saveKid(){
  const name = document.getElementById("kidName").value.trim();
  if(!name){ document.getElementById("kidName").focus(); return; }
  if(editingKid){
    const c = children.find(c=> c.id===editingKid);
    if(c) c.name = name;
    saveChildren();
    closeKidModal(); renderKids(); toast("Имя сохранили ✅");
  } else {
    const id = "c" + Date.now().toString(36);
    children.push({ id, name });
    saveChildren();
    activeChild = id; saveActive();
    loadState(); dLoad(); dyLoad(); dcLoad(); vacMod.load(); pregMod.load();
    closeKidModal(); render();
    if(currentView==="dev") renderDev();
    if(currentView==="diary") renderDiary();
    if(currentView==="docs") renderDocs();
    if(currentView==="vac") vacMod.render();
    if(currentView==="preg") pregMod.render();
    renderKids(); updateHero();
    toast("Профиль добавлен 🎉");
  }
}
function deleteKid(){
  if(children.length <= 1 || !editingKid) return;
  if(!confirm("Удалить ребёнка и все его отметки?")) return;
  const id = editingKid;
  BASE_KEYS.forEach(base=> localStorage.removeItem(base+"__"+id));
  children = children.filter(c=> c.id !== id);
  saveChildren();
  if(activeChild === id){ activeChild = children[0].id; saveActive(); loadState(); dLoad(); dyLoad(); dcLoad(); vacMod.load(); pregMod.load(); }
  closeKidModal(); render();
  if(currentView==="dev") renderDev();
  if(currentView==="diary") renderDiary();
  if(currentView==="docs") renderDocs();
  if(currentView==="vac") vacMod.render();
  if(currentView==="preg") pregMod.render();
  renderKids(); updateHero();
  toast("Профиль удалили");
}
function customKey(stId, id){ return stId+"-c"+id; }
function stageCounts(st){
  let total=0, checked=0;
  st.items.forEach((_,i)=>{ total++; if(state[st.id+"-"+i]) checked++; });
  customFor(st.id).forEach(ci=>{ total++; if(state[customKey(st.id, ci.id)]) checked++; });
  return {total, checked};
}
function stageAllDone(st){ const c=stageCounts(st); return c.total>0 && c.checked===c.total; }
function totalCounts(){
  let total=0, checked=0;
  STAGES.forEach(st=>{ const c=stageCounts(st); total+=c.total; checked+=c.checked; });
  return {total, checked};
}

/* ---------- HERO ---------- */
function updateHero(){
  const {total, checked} = totalCounts();
  const pct = total? Math.round(checked/total*100) : 0;
  document.getElementById("stemFill").style.width = pct+"%";
  document.getElementById("heroCount").innerHTML = `<b>${checked}</b> из ${total} продуктов`;
  const plant = document.getElementById("heroPlant");
  plant.style.fontSize = (28 + (pct/100)*34) + "px";
  let e = "🌱";
  if(pct>=90) e="🌳"; else if(pct>=60) e="🌿"; else if(pct>=25) e="🌾";
  plant.textContent = e;
  updateGuideDefault();
}
function updateStageProgress(stEl, st){
  const {total, checked} = stageCounts(st);
  stEl.querySelector(".stage-progress-text").textContent = `${checked} из ${total}`;
  stEl.querySelector(".stage-bar-fill").style.width = (total? checked/total*100:0)+"%";
  stEl.classList.toggle("done", checked===total && total>0);
}

/* ---------- GUIDE PANEL ---------- */
function motivateLine(){
  const {total, checked} = totalCounts();
  const pct = total? checked/total*100 : 0;
  if(checked===0) return "Впереди целое вкусное приключение! Отметьте первый продукт 🍽️";
  if(pct>=100) return "Все продукты введены — поздравляем! Огромная работа 🎉🏆";
  if(pct>=75) return "Почти всё! Финишная прямая 🏁";
  if(pct>=50) return "Половина пути позади — вы большие молодцы! 🌳";
  if(pct>=25) return "Уже четверть пройдена, вкусовой мир растёт 🌿";
  return "Отличное начало! Малыш открывает новые вкусы 🌱";
}
function guideDefaultHTML(){
  const {checked, total} = totalCounts();
  return `
    <h2>Как проходит прикорм 🌱</h2>
    <p>Прикорм — знакомство малыша с новой едой в дополнение к грудному молоку или смеси. Начинают обычно в 5,5–6 месяцев при признаках готовности.</p>
    <ul class="guide-rules">
      <li data-ic="🍽️">Один новый продукт раз в 3–5 дней</li>
      <li data-ic="🥄">Начинайте с 1/2–1 ложки, увеличивая постепенно</li>
      <li data-ic="🌅">Новое — в первой половине дня</li>
      <li data-ic="🧂">Без соли и сахара до года</li>
      <li data-ic="👀">Наблюдайте за реакцией кожи и животика</li>
    </ul>
    <div class="guide-motivate">${motivateLine()}<br><span style="font-weight:700;opacity:.75">Отмечено ${checked} из ${total}</span></div>
    <div class="guide-disclaimer"><span>ℹ️</span><span>Это ориентир, а не назначение. Схему прикорма согласуй с педиатром.</span></div>
    <div class="guide-hint">👆 Наведите на продукт, чтобы увидеть совет</div>`;
}
function productCardHTML(st, item, key){
  const dateHtml = (key && dates[key]) ? `<div class="pcard-date">📅 Введён: ${fmtDate(dates[key])}</div>` : "";
  const cur = (key && reactions[key]) || "";
  const rb = (r,em,lbl)=>`<button class="react-btn ${cur===r?'active':''}" data-r="${r}" type="button">${em}<small>${lbl}</small></button>`;
  return `
    <div class="pcard theme-${st.theme}">
      <div class="pcard-hero"><span class="pcard-animal">${st.animal||"🐰"}</span><span class="pcard-food">${item.f}</span></div>
      <span class="pcard-badge">${st.age}</span>
      <div class="pcard-name">${esc(item.n.replace(/\s*\(.*?\)\s*/g," ").trim())}</div>
      <p class="pcard-tip">${esc(item.t)}</p>
      ${dateHtml}
      <div class="pcard-react">
        <div class="pcard-react-title">Как малышу продукт?</div>
        <div class="react-btns">
          ${rb("love","😋","Нравится")}
          ${rb("meh","😐","Нейтрально")}
          ${rb("no","🤢","Не пошло")}
        </div>
      </div>
      <div class="pcard-notes">
        <label>Моя заметка</label>
        <textarea class="note-input" placeholder="Например: давали 3 дня, всё хорошо">${esc(key && notes[key] || "")}</textarea>
      </div>
      <div class="guide-disclaimer"><span>ℹ️</span><span>Ориентир. Вводите с учётом рекомендаций вашего педиатра.</span></div>
      ${item.id ? `<button class="pcard-del" data-del="${item.id}" data-st="${st.id}" type="button">🗑 Удалить продукт</button>` : ""}
    </div>`;
}
function renderCard(container, st, item, key){
  container.innerHTML = productCardHTML(st, item, key);
  container.querySelectorAll(".react-btn").forEach(b=>{
    b.addEventListener("click", e=>{
      e.stopPropagation();
      const r = b.dataset.r;
      if(reactions[key]===r) delete reactions[key]; else reactions[key] = r;
      saveReactions();
      renderCard(container, st, item, key);
      updateRowReact(key);
      if(navigator.vibrate) navigator.vibrate(12);
    });
  });
  const ta = container.querySelector(".note-input");
  if(ta){
    ta.addEventListener("click", e=> e.stopPropagation());
    ta.addEventListener("input", ()=>{
      const v = ta.value;
      if(v.trim()) notes[key] = v; else delete notes[key];
      saveNotes();
      updateRowReact(key);
    });
  }
  const del = container.querySelector(".pcard-del");
  if(del){
    del.addEventListener("click", e=>{
      e.stopPropagation();
      if(confirm("Удалить этот продукт?")) deleteCustom(del.dataset.st, del.dataset.del);
    });
  }
}
function deleteCustom(stId, id){
  customItems[stId] = customFor(stId).filter(c=> c.id !== id);
  const k = customKey(stId, id);
  delete state[k]; delete reactions[k]; delete dates[k]; delete notes[k];
  saveCustom(); saveState(); saveReactions(); saveDates(); saveNotes();
  closeSheet();
  const gc = document.getElementById("guideCard");
  if(gc){ delete gc.dataset.locked; }
  render();
  toast("Убрали из списка");
}
function openAddProduct(st){
  addStage = st;
  document.getElementById("addName").value = "";
  document.getElementById("addEmoji").value = "";
  document.getElementById("addDesc").value = "";
  const grid = document.getElementById("emojiGrid");
  if(!grid.dataset.filled){
    grid.innerHTML = EMOJI_PALETTE.map(e=>`<button type="button" class="emoji-pick">${e}</button>`).join("");
    grid.dataset.filled = "1";
    grid.querySelectorAll(".emoji-pick").forEach(b=> b.addEventListener("click", ()=>{ document.getElementById("addEmoji").value = b.textContent; }));
  }
  document.getElementById("addTitle").textContent = "Новый продукт · " + st.age;
  document.getElementById("addModal").classList.add("open");
  document.getElementById("addBackdrop").classList.add("open");
  setTimeout(()=> document.getElementById("addName").focus(), 80);
}
function closeAddProduct(){
  document.getElementById("addModal").classList.remove("open");
  document.getElementById("addBackdrop").classList.remove("open");
}
function submitAddProduct(){
  if(!addStage) return;
  const name = document.getElementById("addName").value.trim();
  const emoji = (document.getElementById("addEmoji").value.trim() || "🍽️");
  const desc = document.getElementById("addDesc").value.trim();
  if(!name){ document.getElementById("addName").focus(); return; }
  const id = Date.now().toString(36) + Math.random().toString(36).slice(2,6);
  const stId = addStage.id;
  if(!customItems[stId]) customItems[stId] = [];
  customItems[stId].push({ id, n:name, f:emoji, t: desc || "Ваш продукт. Отметьте, когда введёте, и добавьте заметку." });
  saveCustom();
  closeAddProduct();
  render();
  const el = document.querySelector(`#main .stage[data-stage="${stId}"]`);
  if(el){ el.classList.remove("collapsed"); openState[stId] = true; saveOpen(); el.scrollIntoView({behavior:"smooth", block:"center"}); }
  toast("Добавили в список");
}
function updateRowReact(key){
  const el = document.querySelector(`.item[data-key="${CSS.escape(key)}"] .row-react`);
  if(el) el.textContent = reactions[key] ? REMOJI[reactions[key]] : (notes[key] ? "📝" : "");
}
let guideDefaultTimer = null;
function updateGuideDefault(){
  const gc = document.getElementById("guideCard");
  if(gc && !gc.dataset.locked) gc.innerHTML = guideDefaultHTML();
}
function showProductInGuide(st, item, key){
  if(!isDesktop()) return;
  clearTimeout(guideDefaultTimer);
  const gc = document.getElementById("guideCard");
  gc.dataset.locked = "1";
  renderCard(gc, st, item, key);
}
function clearGuideSoon(){
  clearTimeout(guideDefaultTimer);
  guideDefaultTimer = setTimeout(()=>{
    const gc = document.getElementById("guideCard");
    delete gc.dataset.locked;
    gc.innerHTML = guideDefaultHTML();
  }, 400);
}

/* ---------- SHEET (mobile) ---------- */
function openSheet(st, item, key){
  renderCard(document.getElementById("sheetContent"), st, item, key);
  document.getElementById("sheet").classList.add("open");
  document.getElementById("sheetBackdrop").classList.add("open");
}
function closeSheet(){
  document.getElementById("sheet").classList.remove("open");
  document.getElementById("sheetBackdrop").classList.remove("open");
}

/* ---------- TOAST ---------- */
let toastTimer=null;
function toast(msg){
  const t = document.getElementById("toast");
  t.textContent = msg; t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> t.classList.remove("show"), 1400);
}

/* ---------- EAT ANIMATION (food only, in the gap before the "i" button) ---------- */
function playEat(rowEl, item, st){
  if(reduceMotion){ return; }
  const layer = document.getElementById("fxLayer");
  const info = rowEl.querySelector(".info-btn");
  const ir = info.getBoundingClientRect();
  const cx = ir.left - 30;              // свободное место между текстом и кнопкой «i»
  const cy = ir.top + ir.height/2;

  const food = document.createElement("div");
  food.className = "fx-item";
  food.textContent = item.f;
  food.style.cssText = `left:${cx}px; top:${cy}px; font-size:26px; transform:translate(-50%,-50%) scale(0);`;
  layer.appendChild(food);

  const a = food.animate([
    {transform:"translate(-50%,-50%) scale(0) rotate(-20deg)", opacity:0, offset:0},
    {transform:"translate(-50%,-64%) scale(1.4) rotate(10deg)", opacity:1, offset:0.18},
    {transform:"translate(-50%,-60%) scale(1.08) rotate(-6deg)", opacity:1, offset:0.32},
    {transform:"translate(-50%,-62%) scale(1.12) rotate(4deg)", opacity:1, offset:0.72},
    {transform:"translate(-50%,-84%) scale(0) rotate(14deg)", opacity:0, offset:1}
  ], {duration:1500, easing:"cubic-bezier(.34,1.4,.6,1)", fill:"forwards"});
  a.onfinish = ()=> food.remove();

  // крошки-звёздочки вокруг продукта
  setTimeout(()=> spawnCrumbs(layer, cx, cy - 6), 260);
}
function spawnCrumbs(layer, x, y){
  const colors = ["#E2793D","#6FA25C","#E8AC2E","#E0708A","#3E8FC4"];
  for(let i=0;i<6;i++){
    const c = document.createElement("div");
    c.className = "fx-item";
    const size = 5 + Math.random()*4;
    c.style.cssText = `left:${x}px; top:${y}px; width:${size}px; height:${size}px; border-radius:50%; background:${colors[i%colors.length]};`;
    layer.appendChild(c);
    const ang = Math.random()*Math.PI*2;
    const dist = 22 + Math.random()*24;
    const dx = Math.cos(ang)*dist, dy = Math.sin(ang)*dist - 6;
    const a = c.animate([
      {transform:"translate(-50%,-50%) scale(1)", opacity:1},
      {transform:`translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(0)`, opacity:0}
    ], {duration:500+Math.random()*220, easing:"cubic-bezier(.2,.6,.4,1)", fill:"forwards"});
    a.onfinish = ()=> c.remove();
  }
}

/* ---------- CONFETTI ---------- */
function confetti(big){
  if(reduceMotion) return;
  const layer = document.getElementById("fxLayer");
  const colors = ["#E2793D","#6FA25C","#E8AC2E","#E0708A","#3E8FC4","#A6567A"];
  const n = big ? 46 : 22;
  for(let i=0;i<n;i++){
    const p = document.createElement("div");
    p.className = "fx-item";
    const size = 7 + Math.random()*7;
    const x = window.innerWidth*(0.2+Math.random()*0.6);
    p.style.cssText = `left:${x}px; top:-14px; width:${size}px; height:${size*0.6}px; background:${colors[i%colors.length]}; border-radius:2px;`;
    layer.appendChild(p);
    const dur = 1200 + Math.random()*1100;
    const dx = (Math.random()-0.5)*220;
    const rot = (Math.random()-0.5)*720;
    const a = p.animate([
      {transform:"translate(0,0) rotate(0deg)", opacity:1},
      {transform:`translate(${dx}px, ${window.innerHeight+40}px) rotate(${rot}deg)`, opacity:.9}
    ], {duration:dur, easing:"cubic-bezier(.3,.5,.5,1)", fill:"forwards"});
    a.onfinish = ()=> p.remove();
  }
}

/* ---------- RENDER ---------- */
function render(){
  const main = document.getElementById("main");
  main.innerHTML = "";

  STAGES.forEach(st=>{
    const stEl = document.createElement("div");
    stEl.className = `stage theme-${st.theme}`;
    stEl.dataset.stage = st.id;

    const head = document.createElement("div");
    head.className = "stage-head";
    head.setAttribute("role","button");
    head.setAttribute("tabindex","0");
    head.setAttribute("aria-expanded","true");
    head.innerHTML = `
      <div class="stage-emoji">${st.emoji}</div>
      <div class="stage-title-wrap">
        <p class="stage-title">${st.age}</p>
        <div class="stage-progress-text">0 из ${st.items.length}</div>
      </div>
      <span class="stage-medal" title="Этап пройден">🏅</span>
      <div class="stage-chevron">▾</div>`;
    const toggle = ()=>{
      const c = stEl.classList.toggle("collapsed");
      head.setAttribute("aria-expanded", String(!c));
      openState[st.id] = !c; saveOpen();
    };
    head.addEventListener("click", toggle);
    head.addEventListener("keydown", e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); toggle(); }});
    stEl.appendChild(head);

    const barTrack = document.createElement("div");
    barTrack.className = "stage-bar-track";
    barTrack.innerHTML = `<div class="stage-bar-fill"></div>`;
    stEl.appendChild(barTrack);

    const body = document.createElement("div");
    body.className = "stage-body";

    if(st.subtitle){
      const sub = document.createElement("div");
      sub.className = "subtitle-note";
      sub.textContent = st.subtitle;
      body.appendChild(sub);
    }

    const buildRow = (item, key, isCustom)=>{
      const row = document.createElement("div");
      row.className = "item" + (isCustom ? " custom" : "");
      row.dataset.name = item.n.toLowerCase();
      row.setAttribute("role","checkbox");
      row.setAttribute("tabindex","0");
      row.setAttribute("aria-label", item.n);
      row.dataset.key = key;
      row.innerHTML = `
        <div class="checkbox">✓</div>
        <div class="item-label">${esc(item.n)}${isCustom ? '<span class="own-badge">своё</span>' : ''}</div>
        <span class="row-react"></span>
        <button class="info-btn" aria-label="Совет: ${esc(item.n)}" tabindex="-1">i</button>`;
      const box = row.querySelector(".checkbox");
      const label = row.querySelector(".item-label");
      const info = row.querySelector(".info-btn");

      const applyState = ()=>{
        const on = !!state[key];
        box.classList.toggle("checked", on);
        label.classList.toggle("checked", on);
        row.setAttribute("aria-checked", String(on));
      };
      applyState();
      updateRowReact(key);

      const toggleItem = ()=>{
        const turningOn = !state[key];
        state[key] = turningOn;
        applyState();
        updateStageProgress(stEl, st);
        updateHero();
        saveState();
        if(turningOn){
          if(!dates[key]){ dates[key] = new Date().toISOString(); saveDates(); }
          playEat(row, item, st);
          toast(PRAISES[Math.floor(Math.random()*PRAISES.length)]);
          if(navigator.vibrate) navigator.vibrate(18);
          if(stageAllDone(st)){
            confetti(false);
            const {total,checked}=totalCounts();
            if(total===checked){ setTimeout(()=>confetti(true),150); toast("Весь список пройден — вы большие молодцы 🏆"); }
          }
        } else {
          delete dates[key]; saveDates();
        }
      };

      row.addEventListener("click", e=>{
        if(e.target.closest(".info-btn")) return;
        toggleItem();
      });
      row.addEventListener("keydown", e=>{
        if(e.key==="Enter"||e.key===" "){ e.preventDefault(); toggleItem(); }
        if(e.key==="i"){ isDesktop()? showProductInGuide(st,item,key) : openSheet(st,item,key); }
      });
      row.addEventListener("mouseenter", ()=> showProductInGuide(st, item, key));
      row.addEventListener("mouseleave", clearGuideSoon);
      info.addEventListener("click", e=>{
        e.stopPropagation();
        if(isDesktop()) showProductInGuide(st, item, key);
        else openSheet(st, item, key);
      });

      body.appendChild(row);
    };

    st.items.forEach((item,i)=> buildRow(item, st.id+"-"+i, false));
    customFor(st.id).forEach(ci=> buildRow(ci, customKey(st.id, ci.id), true));

    const addBtn = document.createElement("button");
    addBtn.className = "add-product";
    addBtn.innerHTML = `<span class="ap-plus">+</span> Добавить продукт`;
    addBtn.addEventListener("click", ()=> openAddProduct(st));
    body.appendChild(addBtn);

    if(st.goal){
      const note = document.createElement("div");
      note.className = "goal-note";
      note.innerHTML = `<span class="ic">🎯</span><span>${st.goal}</span>`;
      body.appendChild(note);
    }

    stEl.appendChild(body);
    main.appendChild(stEl);
    updateStageProgress(stEl, st);
  });

  // warning section
  const warnEl = document.createElement("div");
  warnEl.className = `stage theme-${WARN_SECTION.theme}`;
  warnEl.dataset.stage = "w1";
  warnEl.innerHTML = `
    <div class="stage-head" role="button" tabindex="0" aria-expanded="true">
      <div class="stage-emoji">${WARN_SECTION.emoji}</div>
      <div class="stage-title-wrap">
        <p class="stage-title">${WARN_SECTION.age}</p>
        <div class="stage-progress-text">Важно помнить</div>
      </div>
      <div class="stage-chevron">▾</div>
    </div>
    <div class="stage-body">
      <ul class="plain-list warn-list">
        ${WARN_SECTION.list.map(t=>`<li data-name="${t.toLowerCase()}">${t}</li>`).join("")}
      </ul>
    </div>`;
  const wHead = warnEl.querySelector(".stage-head");
  const wToggle = ()=>{ const c=warnEl.classList.toggle("collapsed"); wHead.setAttribute("aria-expanded",String(!c)); openState["w1"]=!c; saveOpen(); };
  wHead.addEventListener("click", wToggle);
  wHead.addEventListener("keydown", e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); wToggle(); }});
  main.appendChild(warnEl);

  const resetBtn = document.createElement("button");
  resetBtn.className = "reset-btn";
  resetBtn.textContent = "Сбросить отметки";
  resetBtn.addEventListener("click", ()=>{
    lastResetBackup = JSON.stringify(state);
    state = {}; saveState(); render(); updateHero();
    showUndo();
  });
  main.appendChild(resetBtn);

  // Восстановить, какие категории были раскрыты в прошлый раз.
  // Если это первый заход (ничего не сохранено) — свернуть все и раскрыть текущую (первую незавершённую).
  const stageEls = [...document.querySelectorAll("#main .stage")];
  const hasSaved = Object.keys(openState).length > 0;
  stageEls.forEach(el=>{
    const sid = el.dataset.stage;
    const open = hasSaved ? !!openState[sid] : false;
    el.classList.toggle("collapsed", !open);
    const h = el.querySelector(".stage-head");
    if(h) h.setAttribute("aria-expanded", String(open));
  });
  if(!hasSaved){
    const firstOpen = STAGES.find(st=> !stageAllDone(st));
    const openEl = firstOpen ? document.querySelector(`#main .stage[data-stage="${firstOpen.id}"]`) : stageEls[0];
    if(openEl){
      openEl.classList.remove("collapsed");
      const h = openEl.querySelector(".stage-head");
      if(h) h.setAttribute("aria-expanded","true");
    }
  }

  updateHero();
  document.getElementById("guideCard").innerHTML = guideDefaultHTML();
}

/* ---------- SEARCH + FILTERS ---------- */
function applyFilters(){
  const q = (document.getElementById("search").value||"").trim().toLowerCase();
  document.getElementById("searchClear").classList.toggle("show", q.length>0);
  const active = q.length>0 || filterMode!=="all";
  let anyVisible = false;

  document.querySelectorAll("#main .stage").forEach(stEl=>{
    const sid = stEl.dataset.stage;
    const isWarn = sid==="w1";
    const isAllergen = sid==="s8";

    if(filterMode==="allergens" && !isAllergen){ stEl.classList.add("hide"); return; }

    if(isWarn){
      if(filterMode!=="all"){ stEl.classList.add("hide"); return; }
      let vis=0;
      stEl.querySelectorAll(".warn-list li").forEach(li=>{
        const m = !q || li.dataset.name.includes(q);
        li.style.display = m? "flex":"none"; if(m) vis++;
      });
      const show = vis>0;
      stEl.classList.toggle("hide", !show);
      if(show){ anyVisible=true; if(active) stEl.classList.remove("collapsed"); }
      return;
    }

    let vis=0;
    stEl.querySelectorAll(".item").forEach(row=>{
      const key = row.dataset.key;
      let m = (!q || row.dataset.name.includes(q));
      if(filterMode==="todo" && state[key]) m=false;
      row.classList.toggle("hidden", !m); if(m) vis++;
    });
    const show = vis>0;
    stEl.classList.toggle("hide", !show);
    if(show){ anyVisible=true; if(active) stEl.classList.remove("collapsed"); }
  });

  document.getElementById("noResults").classList.toggle("show", active && !anyVisible);
}

/* ---------- INIT ---------- */
loadChildrenMeta();
loadState();
render();
renderKids();

document.getElementById("kidClose").addEventListener("click", closeKidModal);
document.getElementById("kidBackdrop").addEventListener("click", closeKidModal);
document.getElementById("kidSave").addEventListener("click", saveKid);
document.getElementById("kidDelete").addEventListener("click", deleteKid);
document.getElementById("kidName").addEventListener("keydown", e=>{ if(e.key==="Enter"){ e.preventDefault(); saveKid(); }});

document.getElementById("search").addEventListener("input", applyFilters);
document.getElementById("searchClear").addEventListener("click", ()=>{
  const s=document.getElementById("search"); s.value=""; applyFilters(); s.focus();
});
document.querySelectorAll("#chips .chip").forEach(c=>{
  c.addEventListener("click", ()=>{
    document.querySelectorAll("#chips .chip").forEach(x=> x.classList.remove("active"));
    c.classList.add("active");
    filterMode = c.dataset.f;
    applyFilters();
  });
});
// держим панель-подсказку, пока курсор на ней (десктоп)
const gc = document.getElementById("guideCard");
gc.addEventListener("mouseenter", ()=> clearTimeout(guideDefaultTimer));
gc.addEventListener("mouseleave", clearGuideSoon);
document.getElementById("sheetBackdrop").addEventListener("click", closeSheet);
document.getElementById("sheetClose").addEventListener("click", closeSheet);
document.getElementById("sheetGrip").addEventListener("click", closeSheet);
document.getElementById("addClose").addEventListener("click", closeAddProduct);
document.getElementById("addBackdrop").addEventListener("click", closeAddProduct);
document.getElementById("addSubmit").addEventListener("click", submitAddProduct);
document.getElementById("addName").addEventListener("keydown", e=>{ if(e.key==="Enter"){ e.preventDefault(); submitAddProduct(); }});
document.addEventListener("keydown", e=>{ if(e.key==="Escape"){ closeSheet(); closeAddProduct(); closeKidModal(); closeDrawer(); sCloseAdd(); bCloseAdd(); closeDyEdit(); } });

// свайп вниз, чтобы закрыть шторку
(function(){
  const sheet = document.getElementById("sheet");
  const inner = document.getElementById("sheetInner");
  let startY = 0, delta = 0, dragging = false;
  sheet.addEventListener("touchstart", e=>{
    if(inner && inner.scrollTop > 0) return;     // если контент прокручен — обычный скролл
    if(e.target.closest(".react-btn")) return;   // не мешаем нажатию на реакции
    startY = e.touches[0].clientY; delta = 0; dragging = true;
    sheet.style.transition = "none";
  }, {passive:true});
  sheet.addEventListener("touchmove", e=>{
    if(!dragging) return;
    delta = e.touches[0].clientY - startY;
    if(delta > 0) sheet.style.transform = `translateY(${delta}px)`;
  }, {passive:true});
  sheet.addEventListener("touchend", ()=>{
    if(!dragging) return;
    dragging = false;
    sheet.style.transition = "";
    sheet.style.transform = "";
    if(delta > 80) closeSheet();
  });
})();

/* ---------- ТЁМНАЯ ТЕМА ---------- */
function currentTheme(){ return document.documentElement.getAttribute("data-theme")==="dark" ? "dark" : "light"; }
function applyThemeIcon(){
  const b = document.getElementById("themeToggle");
  const dark = currentTheme()==="dark";
  b.textContent = dark ? "☀️" : "🌙";
  b.setAttribute("aria-label", dark ? "Светлая тема" : "Тёмная тема");
  const meta = document.querySelector('meta[name="theme-color"]');
  if(meta) meta.setAttribute("content", dark ? "#17140F" : "#FFF9F0");
}
applyThemeIcon();
document.getElementById("themeToggle").addEventListener("click", ()=>{
  if(currentTheme()==="dark") document.documentElement.removeAttribute("data-theme");
  else document.documentElement.setAttribute("data-theme","dark");
  try{ localStorage.setItem(T_KEY, currentTheme()); }catch(e){}
  applyThemeIcon();
});

/* ---------- НАВЕРХ ---------- */
const fabTop = document.getElementById("fabTop");
window.addEventListener("scroll", ()=>{ fabTop.classList.toggle("show", window.scrollY > 500); }, {passive:true});
fabTop.addEventListener("click", ()=> window.scrollTo({top:0, behavior:"smooth"}));

/* ---------- СВЕРНУТЬ / РАЗВЕРНУТЬ ВСЁ ---------- */
document.getElementById("collapseAllBtn").addEventListener("click", ()=>{
  const stages = [...document.querySelectorAll("#main .stage")];
  const anyOpen = stages.some(el=> !el.classList.contains("collapsed"));
  stages.forEach(el=>{
    el.classList.toggle("collapsed", anyOpen);
    const h = el.querySelector(".stage-head"); if(h) h.setAttribute("aria-expanded", String(!anyOpen));
    openState[el.dataset.stage] = !anyOpen;
  });
  saveOpen();
  document.getElementById("collapseAllBtn").textContent = anyOpen ? "🔼 Развернуть всё" : "🔽 Свернуть всё";
});

/* ---------- ПОДЕЛИТЬСЯ ПРОГРЕССОМ ---------- */
document.getElementById("shareBtn").addEventListener("click", async ()=>{
  const {total, checked} = totalCounts();
  const pct = total ? Math.round(checked/total*100) : 0;
  const lines = STAGES.map(st=>{
    let c=0; st.items.forEach((_,i)=>{ if(state[st.id+"-"+i]) c++; });
    return `${st.emoji} ${st.age}: ${c}/${st.items.length}`;
  });
  const text = `🌱 Мой прогресс прикорма: ${checked} из ${total} (${pct}%)\n\n` + lines.join("\n") + `\n\nprikorm.dverizapeli.ru`;
  try{
    if(navigator.share){ await navigator.share({title:"Трекер прикорма", text}); }
    else { await navigator.clipboard.writeText(text); toast("Скопировали 📋"); }
  }catch(e){}
});

/* ---------- РЕЗЕРВНАЯ КОПИЯ ---------- */
document.getElementById("exportBtn").addEventListener("click", ()=>{
  const data = {};
  for(let i=0;i<localStorage.length;i++){
    const key = localStorage.key(i);
    if(key && key.indexOf("prikorm-")===0) data[key] = localStorage.getItem(key);
  }
  const blob = new Blob([JSON.stringify({app:"prikorm", version:2, data}, null, 2)], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = "prikorm-backup.json"; a.click();
  setTimeout(()=> URL.revokeObjectURL(url), 1000);
  toast("Резервная копия готова 💾");
});
document.getElementById("importBtn").addEventListener("click", ()=> document.getElementById("importFile").click());
document.getElementById("importFile").addEventListener("change", e=>{
  const file = e.target.files[0]; if(!file) return;
  const r = new FileReader();
  r.onload = ()=>{
    try{
      const parsed = JSON.parse(r.result);
      const data = parsed.data || parsed;
      Object.keys(data).forEach(key=>{ if(key.indexOf("prikorm-")===0) localStorage.setItem(key, data[key]); });
      toast("Данные восстановили ✅");
      setTimeout(()=> location.reload(), 600);
    }catch(err){ toast("Не смогли открыть файл. Проверь формат и попробуй снова"); }
  };
  r.readAsText(file);
  e.target.value = "";
});

/* ---------- ОТМЕНА СБРОСА ---------- */
function showUndo(){
  let u = document.getElementById("undoBar");
  if(!u){
    u = document.createElement("div"); u.id = "undoBar"; u.className = "toast";
    u.style.pointerEvents = "auto"; document.body.appendChild(u);
  }
  u.innerHTML = `Отметки сброшены &nbsp; <b style="cursor:pointer;text-decoration:underline">Отменить</b>`;
  u.classList.add("show");
  clearTimeout(u._t); u._t = setTimeout(()=> u.classList.remove("show"), 6000);
  u.querySelector("b").onclick = ()=>{
    if(lastResetBackup){ state = JSON.parse(lastResetBackup); saveState(); render(); updateHero(); }
    u.classList.remove("show");
  };
}

/* ===================== СУМКА В РОДДОМ ===================== */
const SK_CHECK="prikorm-sumka-checked-v1", SK_NOTES="prikorm-sumka-notes-v1", SK_CUSTOM="prikorm-sumka-custom-v1", SK_OPEN="prikorm-sumka-open-v1", VIEW_KEY="prikorm-view";
let sState={}, sNotes={}, sCustom={}, sOpen={}, sAddCtx=null;
let currentView = (function(){ try{ return localStorage.getItem(VIEW_KEY) || "prikorm"; }catch(e){ return "prikorm"; } })();

const SUMKA = [
  { id:"m", emoji:"👜", name:"Для мамы", theme:"coral",
    subs:[
      { name:"Одежда и быт", items:["Маска — 2 шт.","Халат","Ночная рубашка / сорочка","Тапочки","Носки","Нижнее бельё (10 шт.)","Послеродовые прокладки (10 шт.)","Впитывающие пелёнки 60×90 (10 шт.)","Компрессионные чулки","Вода без газа 1–1,5 л","Кружка","Приборы"] },
      { name:"Документы и мелочи", items:["Зарядка","Наушники","Беруши","Документы: паспорт, полис, СНИЛС, обменная карта, УЗИ/КТГ","Бритвенный станок","Расчёска","Резинка для волос","Гигиеническая помада","Перекус","Пакет для вещей / мусора","Накладки на туалет","Портативное биде-бутылочка"] }
    ]},
  { id:"g", emoji:"🧴", name:"Гигиена", theme:"sky",
    subs:[
      { name:"Для тела", items:["Мыло","Зубная паста","Зубная щётка","Полотенце","Туалетная бумага","Шампунь","Бальзам для волос","Гель для душа"] },
      { name:"Уход и салфетки", items:["Крем для тела","Крем для рук","Дезодорант","Ватные диски","Ватные палочки","Сухие салфетки","Влажные салфетки","Влажная туалетная бумага"] }
    ]},
  { id:"f", emoji:"🤱", name:"Кормление и одежда малыша", theme:"butter",
    tip:"Уточните в роддоме, разрешено ли приносить свою одежду — иногда выдают комплект на месте.",
    subs:[
      { name:"Для груди и кормления", items:["Вкладыши для груди","Ланолин","Топ для кормления","Накладки на сосок (по необходимости)"] },
      { name:"Одежда для малыша", items:["Боди — 2 шт.","Слип — 2 шт.","Пелёнки для пеленания"] }
    ]},
  { id:"b", emoji:"👶", name:"Для малыша — гигиена", theme:"sage",
    tip:"Держите под рукой 2–3 запасные пелёнки и шапочку — новорождённые быстро пачкаются и мёрзнут.",
    subs:[
      { name:"Основной уход", items:["Подгузники (10 шт.)","Влажные салфетки","Сухие салфетки","Детское мыло для подмывания","Крем под подгузник"] },
      { name:"Пелёнки и мелочи", items:["Пелёнки","Шапочка","Носочки","Царапки (антицарапки)"] }
    ]}
];

function sLoad(){
  try{ const v=localStorage.getItem(SK_CHECK); if(v) sState=JSON.parse(v); }catch(e){}
  try{ const v=localStorage.getItem(SK_NOTES); if(v) sNotes=JSON.parse(v); }catch(e){}
  try{ const v=localStorage.getItem(SK_CUSTOM); if(v) sCustom=JSON.parse(v); }catch(e){}
  try{ const v=localStorage.getItem(SK_OPEN); if(v) sOpen=JSON.parse(v); }catch(e){}
}
function sSaveCheck(){ try{ localStorage.setItem(SK_CHECK, JSON.stringify(sState)); }catch(e){} }
function sSaveNotes(){ try{ localStorage.setItem(SK_NOTES, JSON.stringify(sNotes)); }catch(e){} }
function sSaveCustom(){ try{ localStorage.setItem(SK_CUSTOM, JSON.stringify(sCustom)); }catch(e){} }
function sSaveOpen(){ try{ localStorage.setItem(SK_OPEN, JSON.stringify(sOpen)); }catch(e){} }
function subKeyOf(catId, si){ return catId+"|"+si; }
function sCustomFor(sk){ return sCustom[sk] || []; }

function catCounts(cat){
  let total=0, checked=0;
  cat.subs.forEach((sub,si)=>{
    sub.items.forEach((_,ii)=>{ total++; if(sState[cat.id+"-"+si+"-"+ii]) checked++; });
    sCustomFor(subKeyOf(cat.id,si)).forEach(ci=>{ total++; if(sState[cat.id+"-"+si+"-c"+ci.id]) checked++; });
  });
  return {total, checked};
}
function sTotals(){ let t=0,c=0; SUMKA.forEach(cat=>{ const cc=catCounts(cat); t+=cc.total; c+=cc.checked; }); return {total:t, checked:c}; }
function updateSumkaHead(){
  const {total, checked} = sTotals();
  const pct = total? Math.round(checked/total*100):0;
  document.getElementById("sumkaFill").style.width = pct+"%";
  document.getElementById("sumkaCount").innerHTML = `<b>${checked}</b> из ${total} собрано`;
}
function updateCatProgress(catEl, cat){
  const {total, checked} = catCounts(cat);
  catEl.querySelector(".stage-progress-text").textContent = `${checked} из ${total}`;
  catEl.querySelector(".stage-bar-fill").style.width = (total? checked/total*100:0)+"%";
  catEl.classList.toggle("done", total>0 && checked===total);
}

function sBuildRow(cat, name, key, isCustom, sk, customId){
  const wrap = document.createElement("div");
  wrap.className = "s-row"; wrap.dataset.key = key; wrap.dataset.name = name.toLowerCase();
  const row = document.createElement("div");
  row.className = "item" + (isCustom ? " custom" : "");
  row.setAttribute("role","checkbox"); row.setAttribute("tabindex","0"); row.setAttribute("aria-label", name);
  row.innerHTML = `
    <div class="checkbox">✓</div>
    <div class="item-label">${esc(name)}${isCustom ? '<span class="own-badge">своё</span>' : ''}</div>
    <button class="note-btn" aria-label="Заметка" tabindex="-1">✎</button>`;
  const box = row.querySelector(".checkbox"), label = row.querySelector(".item-label"), nbtn = row.querySelector(".note-btn");
  const apply = ()=>{ const on=!!sState[key]; box.classList.toggle("checked",on); label.classList.toggle("checked",on); row.setAttribute("aria-checked",String(on)); };
  apply();
  const toggle = ()=>{
    sState[key] = !sState[key]; apply();
    updateCatProgress(wrap.closest(".stage"), cat); updateSumkaHead(); sSaveCheck();
    if(sState[key]){
      if(navigator.vibrate) navigator.vibrate(14);
      const cc = catCounts(cat);
      if(cc.checked===cc.total){ confetti(false); const t=sTotals(); if(t.checked===t.total){ setTimeout(()=>confetti(true),150); toast("Сумка собрана — можно выдохнуть 🧳"); } }
    }
  };
  row.addEventListener("click", e=>{ if(e.target.closest(".note-btn")) return; toggle(); });
  row.addEventListener("keydown", e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); toggle(); }});

  const note = document.createElement("div");
  note.className = "s-note";
  note.innerHTML = `<textarea placeholder="Например: забрать с WB, заехать в Детский мир">${esc(sNotes[key]||"")}</textarea>${isCustom ? '<button class="s-del" type="button">🗑 удалить пункт</button>' : ''}`;
  const ta = note.querySelector("textarea");
  ta.addEventListener("input", ()=>{ const v=ta.value; if(v.trim()) sNotes[key]=v; else delete sNotes[key]; sSaveNotes(); nbtn.classList.toggle("has", !!sNotes[key]); });
  nbtn.classList.toggle("has", !!sNotes[key]);
  nbtn.addEventListener("click", e=>{ e.stopPropagation(); const opening=!note.classList.contains("open"); note.classList.toggle("open", opening); if(opening) setTimeout(()=>ta.focus(),60); });
  const del = note.querySelector(".s-del");
  if(del) del.addEventListener("click", ()=>{
    if(confirm("Удалить пункт?")){
      sCustom[sk] = sCustomFor(sk).filter(c=> c.id!==customId);
      delete sState[key]; delete sNotes[key];
      sSaveCustom(); sSaveCheck(); sSaveNotes(); renderSumka();
    }
  });
  wrap.appendChild(row); wrap.appendChild(note);
  return wrap;
}

function renderSumka(){
  const main = document.getElementById("sumkaMain");
  main.innerHTML = "";
  SUMKA.forEach(cat=>{
    const catEl = document.createElement("div");
    catEl.className = `stage theme-${cat.theme}`; catEl.dataset.cat = cat.id;
    const head = document.createElement("div");
    head.className = "stage-head"; head.setAttribute("role","button"); head.setAttribute("tabindex","0");
    head.innerHTML = `
      <div class="stage-emoji">${cat.emoji}</div>
      <div class="stage-title-wrap"><p class="stage-title">${cat.name}</p><div class="stage-progress-text">0</div></div>
      <span class="stage-medal" title="Собрано">🏅</span>
      <div class="stage-chevron">▾</div>`;
    const toggle = ()=>{ const c=catEl.classList.toggle("collapsed"); head.setAttribute("aria-expanded",String(!c)); sOpen[cat.id]=!c; sSaveOpen(); };
    head.addEventListener("click", toggle);
    head.addEventListener("keydown", e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); toggle(); }});
    catEl.appendChild(head);
    const bar = document.createElement("div"); bar.className="stage-bar-track"; bar.innerHTML=`<div class="stage-bar-fill"></div>`; catEl.appendChild(bar);
    const body = document.createElement("div"); body.className="stage-body";
    cat.subs.forEach((sub,si)=>{
      const sh = document.createElement("div"); sh.className="sub-head"; sh.textContent=sub.name; body.appendChild(sh);
      sub.items.forEach((name,ii)=> body.appendChild(sBuildRow(cat, name, cat.id+"-"+si+"-"+ii, false, subKeyOf(cat.id,si))));
      sCustomFor(subKeyOf(cat.id,si)).forEach(ci=> body.appendChild(sBuildRow(cat, ci.n, cat.id+"-"+si+"-c"+ci.id, true, subKeyOf(cat.id,si), ci.id)));
      const add = document.createElement("button"); add.className="add-product"; add.innerHTML=`<span class="ap-plus">+</span> Добавить своё`;
      add.addEventListener("click", ()=> sOpenAdd(cat, si)); body.appendChild(add);
    });
    if(cat.tip){ const t=document.createElement("div"); t.className="goal-note"; t.innerHTML=`<span class="ic">✔</span><span>${esc(cat.tip)}</span>`; body.appendChild(t); }
    catEl.appendChild(body);
    main.appendChild(catEl);
    updateCatProgress(catEl, cat);
  });
  const els = [...main.querySelectorAll(".stage")];
  const hasSaved = Object.keys(sOpen).length>0;
  els.forEach(el=>{ const open = hasSaved ? !!sOpen[el.dataset.cat] : false; el.classList.toggle("collapsed", !open); const h=el.querySelector(".stage-head"); if(h) h.setAttribute("aria-expanded", String(open)); });
  if(!hasSaved){
    const fc = SUMKA.find(c=>{ const cc=catCounts(c); return cc.checked<cc.total; }) || SUMKA[0];
    const el = main.querySelector(`.stage[data-cat="${fc.id}"]`);
    if(el){ el.classList.remove("collapsed"); const h=el.querySelector(".stage-head"); if(h) h.setAttribute("aria-expanded","true"); }
  }
  updateSumkaHead();
}

function sOpenAdd(cat, si){
  sAddCtx = { catId:cat.id, si };
  document.getElementById("sAddName").value = "";
  document.getElementById("sAddTitle").textContent = "Добавить в «" + cat.name + "»";
  document.getElementById("sAddModal").classList.add("open");
  document.getElementById("sAddBackdrop").classList.add("open");
  setTimeout(()=> document.getElementById("sAddName").focus(), 80);
}
function sCloseAdd(){
  document.getElementById("sAddModal").classList.remove("open");
  document.getElementById("sAddBackdrop").classList.remove("open");
}
function sSaveAdd(){
  if(!sAddCtx) return;
  const name = document.getElementById("sAddName").value.trim();
  if(!name){ document.getElementById("sAddName").focus(); return; }
  const sk = subKeyOf(sAddCtx.catId, sAddCtx.si);
  if(!sCustom[sk]) sCustom[sk] = [];
  sCustom[sk].push({ id: Date.now().toString(36)+Math.random().toString(36).slice(2,5), n:name });
  sSaveCustom(); sCloseAdd(); renderSumka();
  const el = document.querySelector(`#sumkaMain .stage[data-cat="${sAddCtx.catId}"]`);
  if(el){ el.classList.remove("collapsed"); sOpen[sAddCtx.catId]=true; sSaveOpen(); el.scrollIntoView({behavior:"smooth", block:"center"}); }
  toast("Добавили 🎉");
}
function sApplySearch(){
  const q = (document.getElementById("sumkaSearch").value||"").trim().toLowerCase();
  document.getElementById("sumkaSearchClear").classList.toggle("show", q.length>0);
  let any=false;
  document.querySelectorAll("#sumkaMain .stage").forEach(catEl=>{
    let vis=0;
    catEl.querySelectorAll(".s-row").forEach(r=>{ const m=!q||r.dataset.name.includes(q); r.style.display=m?"":"none"; if(m)vis++; });
    catEl.querySelectorAll(".add-product,.sub-head,.goal-note").forEach(x=> x.style.display = q ? "none" : "");
    const show = !q || vis>0;
    catEl.classList.toggle("hide", !show);
    if(show){ any=true; if(q) catEl.classList.remove("collapsed"); }
  });
  document.getElementById("sumkaNoResults").classList.toggle("show", q.length>0 && !any);
}
function sCollapseAll(){
  const els = [...document.querySelectorAll("#sumkaMain .stage")];
  const anyOpen = els.some(el=> !el.classList.contains("collapsed"));
  els.forEach(el=>{ el.classList.toggle("collapsed", anyOpen); const h=el.querySelector(".stage-head"); if(h) h.setAttribute("aria-expanded", String(!anyOpen)); sOpen[el.dataset.cat]=!anyOpen; });
  sSaveOpen();
  document.getElementById("sumkaCollapseBtn").textContent = anyOpen ? "🔼 Развернуть всё" : "🔽 Свернуть всё";
}

/* ===================== ПОКУПКИ К РОЖДЕНИЮ ===================== */
const BK_CHECK="prikorm-buy-checked-v1", BK_NOTES="prikorm-buy-notes-v1", BK_CUSTOM="prikorm-buy-custom-v1", BK_OPEN="prikorm-buy-open-v1";
let bState={}, bNotes={}, bCustom={}, bOpen={}, bAddCtx=null;

const PURCHASE = [
  { id:"home", emoji:"🏠", name:"Дом — комод и кроватка", theme:"plum",
    subs:[
      { name:"Комод и сон", items:["Корзиночки","Органайзеры","Матрасик","Ночник","Увлажнитель","Люлька","Матрас для люльки","Фитбол"] },
      { name:"Кроватка", items:["Кроватка-люлька Terra Light","Матрас","Простынь — 2 шт.","Наматрасник","Бортики","Плед — 2 шт.","Органайзер","Ночник с белым шумом","Мобиль"] }
    ]},
  { id:"stroll", emoji:"🧺", name:"Пелёнки и коляска", theme:"sky",
    tip:"Коляска 3-в-1: блок для новорождённых, прогулочный блок и автолюлька — очень выгодное решение!",
    subs:[
      { name:"Пелёнки", items:["Тонкие хлопковые Mjolk","Муслиновые 2–3 шт. 90×120","Непромокаемые 1–2 шт.","Одноразовые 60×60 — 2 шт.","Одноразовые 60×90 — 1 шт."] },
      { name:"Коляска", items:["Коляска Anex iQ Premium 3-в-1","Подстаканник","Сумка на коляску","Наматрасник"] }
    ]},
  { id:"bath", emoji:"🛁", name:"Для купания", theme:"sage",
    tip:"Средства WELEDA и LIBREDERM — мягкие, гипоаллергенные, идеально подходят для нежной кожи новорождённых.",
    subs:[
      { name:"Ванна и принадлежности", items:["Ванночка на подставке","Термометр для воды","Полотенце — 2 шт.","Ковшик"] },
      { name:"Средства и уход", items:["Гель WELEDA Calendula Baby Wash","Крем-гель для подмывания LIBREDERM baby","Расчёска"] }
    ]},
  { id:"cloth", emoji:"👶", name:"Одежда", theme:"coral",
    tip:"Бренды: Mjolk, Rokakids, Emocia, Child-friendly, Супер Пупс.",
    subs:[
      { name:"Размеры 50–62", items:["Слипы 50–56 — 2–3 шт.","Слипы 62 — 1–2 шт.","Боди 56 короткий — 4–5 шт.","Боди 56 длинный — 1–2 шт.","Боди 62 короткий — 2–3 шт.","Боди 62 длинный — 1 шт.","Штанишки 56 — 1–2 шт.","Штанишки 62 — 1 шт.","Песочник — 2–3 шт."] },
      { name:"Аксессуары и выход", items:["Шапочки лёгкие — 2–3 шт.","Носки 0–3 мес. — 3–4 пары","Антицарапки — 2–3 шт.","Кокон на липучке","Кокон на молнии","Слюнявчики — 4 шт.","Платочки","Костюм на выход — 1–2 шт."] }
    ]},
  { id:"feed", emoji:"🍼", name:"Кормление", theme:"butter",
    tip:"При грудном вскармливании молокоотсос и бутылочки могут не понадобиться сразу — лучше купить после консультации с неонатологом.",
    subs:[
      { name:"Бутылочки и соски", items:["Бутылочки Avent Philips","Бутылочка Thyseed","Соски","Щётка для бутылочки","Держатель для сосок","Контейнер для соски"] },
      { name:"Техника и аксессуары", items:["Молокоотсос","Стерилизатор","Сушка для бутылочек","Средство для мытья бутылок","Подогреватель для бутылочки","Подушка для кормления","Стульчик Carrello Comfort"] }
    ]},
  { id:"hyg", emoji:"🧴", name:"Гигиена", theme:"sky",
    subs:[
      { name:"Уход за малышом", items:["Подгузники","Влажные салфетки","Сухие салфетки","Аспиратор","Ушные палочки","Ушные палочки с липким слоем для носа","Маникюрные ножницы","Тример"] },
      { name:"Уход за кожей", items:["Крем под подгузник WELEDA","Молочко WELEDA White Mallow","Масло WELEDA Calendula Oil","Ватные диски","Гель для стирки"] }
    ]},
  { id:"med", emoji:"💊", name:"Аптечка и прочее", theme:"rust",
    tip:"Аптечку можно формировать постепенно. Обязательный минимум: термометр, Бепантен и Аквамарис. Остальное — по рекомендации педиатра.",
    subs:[
      { name:"Аптечка", items:["Аквамарис","Бепантен","Витамин Д","Мочеприёмники","Градусник","Эспумизан"] },
      { name:"Прочее", items:["Гигрометр","Неваляшка","Грелка","Карточки Ч/Б","Кокон","Шезлонг","Видеоняня","Развивающий коврик","Автолюлька Joie I-Snug 2","Дуга с игрушками"] }
    ]},
  { id:"mama", emoji:"💛", name:"Для мамы", theme:"wheat",
    subs:[
      { name:"В роддом и ГВ", items:["Лиф для кормления","Сумка в роддом (набор 3 шт.)","Вкладыши для груди","Трусы 3–4 пачки","Пелёнки 60×90","Бандаж","Сорочки + халат 2–3 шт.","Чулки","Накладки на грудь","Биде для подмывания"] },
      { name:"Уход и комфорт", items:["Прокладки ночные","Крем с ланолином","Тапочки","Микролакс","Влажная туалетная бумага","Костюм на выписку","Масло WELEDA Schwangerschafts","Подушка для беременных"] }
    ]}
];

function bLoad(){
  try{ const v=localStorage.getItem(BK_CHECK); if(v) bState=JSON.parse(v); }catch(e){}
  try{ const v=localStorage.getItem(BK_NOTES); if(v) bNotes=JSON.parse(v); }catch(e){}
  try{ const v=localStorage.getItem(BK_CUSTOM); if(v) bCustom=JSON.parse(v); }catch(e){}
  try{ const v=localStorage.getItem(BK_OPEN); if(v) bOpen=JSON.parse(v); }catch(e){}
}
function bSaveCheck(){ try{ localStorage.setItem(BK_CHECK, JSON.stringify(bState)); }catch(e){} }
function bSaveNotes(){ try{ localStorage.setItem(BK_NOTES, JSON.stringify(bNotes)); }catch(e){} }
function bSaveCustom(){ try{ localStorage.setItem(BK_CUSTOM, JSON.stringify(bCustom)); }catch(e){} }
function bSaveOpen(){ try{ localStorage.setItem(BK_OPEN, JSON.stringify(bOpen)); }catch(e){} }
function bSubKey(catId, si){ return catId+"|"+si; }
function bCustomFor(sk){ return bCustom[sk] || []; }
function bCatCounts(cat){
  let total=0, checked=0;
  cat.subs.forEach((sub,si)=>{
    sub.items.forEach((_,ii)=>{ total++; if(bState[cat.id+"-"+si+"-"+ii]) checked++; });
    bCustomFor(bSubKey(cat.id,si)).forEach(ci=>{ total++; if(bState[cat.id+"-"+si+"-c"+ci.id]) checked++; });
  });
  return {total, checked};
}
function bTotals(){ let t=0,c=0; PURCHASE.forEach(cat=>{ const cc=bCatCounts(cat); t+=cc.total; c+=cc.checked; }); return {total:t, checked:c}; }
function updateBuyHead(){
  const {total, checked} = bTotals();
  const pct = total? Math.round(checked/total*100):0;
  document.getElementById("buyFill").style.width = pct+"%";
  document.getElementById("buyCount").innerHTML = `<b>${checked}</b> из ${total} куплено`;
}
function updateBuyCat(catEl, cat){
  const {total, checked} = bCatCounts(cat);
  catEl.querySelector(".stage-progress-text").textContent = `${checked} из ${total}`;
  catEl.querySelector(".stage-bar-fill").style.width = (total? checked/total*100:0)+"%";
  catEl.classList.toggle("done", total>0 && checked===total);
}
function bBuildRow(cat, name, key, isCustom, sk, customId){
  const wrap = document.createElement("div");
  wrap.className = "s-row"; wrap.dataset.key = key; wrap.dataset.name = name.toLowerCase();
  const row = document.createElement("div");
  row.className = "item" + (isCustom ? " custom" : "");
  row.setAttribute("role","checkbox"); row.setAttribute("tabindex","0"); row.setAttribute("aria-label", name);
  row.innerHTML = `
    <div class="checkbox">✓</div>
    <div class="item-label">${esc(name)}${isCustom ? '<span class="own-badge">своё</span>' : ''}</div>
    <button class="note-btn" aria-label="Заметка" tabindex="-1">✎</button>`;
  const box = row.querySelector(".checkbox"), label = row.querySelector(".item-label"), nbtn = row.querySelector(".note-btn");
  const apply = ()=>{ const on=!!bState[key]; box.classList.toggle("checked",on); label.classList.toggle("checked",on); row.setAttribute("aria-checked",String(on)); };
  apply();
  const toggle = ()=>{
    bState[key] = !bState[key]; apply();
    updateBuyCat(wrap.closest(".stage"), cat); updateBuyHead(); bSaveCheck();
    if(bState[key]){
      if(navigator.vibrate) navigator.vibrate(14);
      const cc = bCatCounts(cat);
      if(cc.checked===cc.total){ confetti(false); const t=bTotals(); if(t.checked===t.total){ setTimeout(()=>confetti(true),150); toast("Всё куплено — к встрече готовы 🛍️"); } }
    }
  };
  row.addEventListener("click", e=>{ if(e.target.closest(".note-btn")) return; toggle(); });
  row.addEventListener("keydown", e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); toggle(); }});
  const note = document.createElement("div");
  note.className = "s-note";
  note.innerHTML = `<textarea placeholder="Например: забрать с WB, заехать в Детский мир">${esc(bNotes[key]||"")}</textarea>${isCustom ? '<button class="s-del" type="button">🗑 удалить пункт</button>' : ''}`;
  const ta = note.querySelector("textarea");
  ta.addEventListener("input", ()=>{ const v=ta.value; if(v.trim()) bNotes[key]=v; else delete bNotes[key]; bSaveNotes(); nbtn.classList.toggle("has", !!bNotes[key]); });
  nbtn.classList.toggle("has", !!bNotes[key]);
  nbtn.addEventListener("click", e=>{ e.stopPropagation(); const opening=!note.classList.contains("open"); note.classList.toggle("open", opening); if(opening) setTimeout(()=>ta.focus(),60); });
  const del = note.querySelector(".s-del");
  if(del) del.addEventListener("click", ()=>{
    if(confirm("Удалить пункт?")){
      bCustom[sk] = bCustomFor(sk).filter(c=> c.id!==customId);
      delete bState[key]; delete bNotes[key];
      bSaveCustom(); bSaveCheck(); bSaveNotes(); renderBuy();
    }
  });
  wrap.appendChild(row); wrap.appendChild(note);
  return wrap;
}
function renderBuy(){
  const main = document.getElementById("buyMain");
  main.innerHTML = "";
  PURCHASE.forEach(cat=>{
    const catEl = document.createElement("div");
    catEl.className = `stage theme-${cat.theme}`; catEl.dataset.cat = cat.id;
    const head = document.createElement("div");
    head.className = "stage-head"; head.setAttribute("role","button"); head.setAttribute("tabindex","0");
    head.innerHTML = `
      <div class="stage-emoji">${cat.emoji}</div>
      <div class="stage-title-wrap"><p class="stage-title">${cat.name}</p><div class="stage-progress-text">0</div></div>
      <span class="stage-medal" title="Куплено">🏅</span>
      <div class="stage-chevron">▾</div>`;
    const toggle = ()=>{ const c=catEl.classList.toggle("collapsed"); head.setAttribute("aria-expanded",String(!c)); bOpen[cat.id]=!c; bSaveOpen(); };
    head.addEventListener("click", toggle);
    head.addEventListener("keydown", e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); toggle(); }});
    catEl.appendChild(head);
    const bar = document.createElement("div"); bar.className="stage-bar-track"; bar.innerHTML=`<div class="stage-bar-fill"></div>`; catEl.appendChild(bar);
    const body = document.createElement("div"); body.className="stage-body";
    cat.subs.forEach((sub,si)=>{
      const sh = document.createElement("div"); sh.className="sub-head"; sh.textContent=sub.name; body.appendChild(sh);
      sub.items.forEach((name,ii)=> body.appendChild(bBuildRow(cat, name, cat.id+"-"+si+"-"+ii, false, bSubKey(cat.id,si))));
      bCustomFor(bSubKey(cat.id,si)).forEach(ci=> body.appendChild(bBuildRow(cat, ci.n, cat.id+"-"+si+"-c"+ci.id, true, bSubKey(cat.id,si), ci.id)));
      const add = document.createElement("button"); add.className="add-product"; add.innerHTML=`<span class="ap-plus">+</span> Добавить своё`;
      add.addEventListener("click", ()=> bOpenAdd(cat, si)); body.appendChild(add);
    });
    if(cat.tip){ const t=document.createElement("div"); t.className="goal-note"; t.innerHTML=`<span class="ic">✔</span><span>${esc(cat.tip)}</span>`; body.appendChild(t); }
    catEl.appendChild(body);
    main.appendChild(catEl);
    updateBuyCat(catEl, cat);
  });
  const els = [...main.querySelectorAll(".stage")];
  const hasSaved = Object.keys(bOpen).length>0;
  els.forEach(el=>{ const open = hasSaved ? !!bOpen[el.dataset.cat] : false; el.classList.toggle("collapsed", !open); const h=el.querySelector(".stage-head"); if(h) h.setAttribute("aria-expanded", String(open)); });
  if(!hasSaved){
    const fc = PURCHASE.find(c=>{ const cc=bCatCounts(c); return cc.checked<cc.total; }) || PURCHASE[0];
    const el = main.querySelector(`.stage[data-cat="${fc.id}"]`);
    if(el){ el.classList.remove("collapsed"); const h=el.querySelector(".stage-head"); if(h) h.setAttribute("aria-expanded","true"); }
  }
  updateBuyHead();
}
function bOpenAdd(cat, si){
  bAddCtx = { catId:cat.id, si };
  document.getElementById("bAddName").value = "";
  document.getElementById("bAddTitle").textContent = "Добавить в «" + cat.name + "»";
  document.getElementById("bAddModal").classList.add("open");
  document.getElementById("bAddBackdrop").classList.add("open");
  setTimeout(()=> document.getElementById("bAddName").focus(), 80);
}
function bCloseAdd(){
  document.getElementById("bAddModal").classList.remove("open");
  document.getElementById("bAddBackdrop").classList.remove("open");
}
function bSaveAdd(){
  if(!bAddCtx) return;
  const name = document.getElementById("bAddName").value.trim();
  if(!name){ document.getElementById("bAddName").focus(); return; }
  const sk = bSubKey(bAddCtx.catId, bAddCtx.si);
  if(!bCustom[sk]) bCustom[sk] = [];
  bCustom[sk].push({ id: Date.now().toString(36)+Math.random().toString(36).slice(2,5), n:name });
  bSaveCustom(); bCloseAdd(); renderBuy();
  const el = document.querySelector(`#buyMain .stage[data-cat="${bAddCtx.catId}"]`);
  if(el){ el.classList.remove("collapsed"); bOpen[bAddCtx.catId]=true; bSaveOpen(); el.scrollIntoView({behavior:"smooth", block:"center"}); }
  toast("Добавили 🎉");
}
function bApplySearch(){
  const q = (document.getElementById("buySearch").value||"").trim().toLowerCase();
  document.getElementById("buySearchClear").classList.toggle("show", q.length>0);
  let any=false;
  document.querySelectorAll("#buyMain .stage").forEach(catEl=>{
    let vis=0;
    catEl.querySelectorAll(".s-row").forEach(r=>{ const m=!q||r.dataset.name.includes(q); r.style.display=m?"":"none"; if(m)vis++; });
    catEl.querySelectorAll(".add-product,.sub-head,.goal-note").forEach(x=> x.style.display = q ? "none" : "");
    const show = !q || vis>0;
    catEl.classList.toggle("hide", !show);
    if(show){ any=true; if(q) catEl.classList.remove("collapsed"); }
  });
  document.getElementById("buyNoResults").classList.toggle("show", q.length>0 && !any);
}
function bCollapseAll(){
  const els = [...document.querySelectorAll("#buyMain .stage")];
  const anyOpen = els.some(el=> !el.classList.contains("collapsed"));
  els.forEach(el=>{ el.classList.toggle("collapsed", anyOpen); const h=el.querySelector(".stage-head"); if(h) h.setAttribute("aria-expanded", String(!anyOpen)); bOpen[el.dataset.cat]=!anyOpen; });
  bSaveOpen();
  document.getElementById("buyCollapseBtn").textContent = anyOpen ? "🔼 Развернуть всё" : "🔽 Свернуть всё";
}

/* ===================== РАЗВИТИЕ ПО МЕСЯЦАМ ===================== */
const DV_CHECK="prikorm-dev-checked", DV_NOTES="prikorm-dev-notes", DV_OPEN="prikorm-dev-open";
let dState={}, dNotes={}, dOpen={};

const DEV = [
  { id:"mo1", m:"1 месяц", emoji:"1️⃣", theme:"sage",
    skills:["Фокусирует взгляд на лице на расстоянии 20–30 см","Вздрагивает и замирает на резкий звук","Крепко сжимает вложенный в ладонь палец","Лёжа на животе, на секунды приподнимает голову","Успокаивается на руках и от голоса мамы","Издаёт первые горловые звуки"],
    games:["Разговаривайте и пойте — малыш узнаёт ваш голос","Показывайте лицо близко и меняйте мимику","Выкладывайте на живот по 1–2 минуты несколько раз в день","Показывайте контрастные чёрно-белые картинки","Делайте лёгкие поглаживания ручек и ножек"],
    flags:["Не реагирует на громкие звуки","Совсем не фиксирует взгляд","Вялое сосание, плохо набирает вес"] },
  { id:"mo2", m:"2 месяца", emoji:"2️⃣", theme:"sky",
    skills:["Улыбается в ответ на ваше лицо (социальная улыбка)","Удерживает голову под углом лёжа на животе","Следит взглядом за движущимся предметом","Гулит — тянет гласные «а-а», «гу»","Поворачивает голову на звук","Подолгу рассматривает свои руки и лица"],
    games:["Улыбайтесь и «разговаривайте» по очереди, делая паузы","Медленно водите яркой погремушкой в стороны — пусть следит","Продолжайте выкладывать на живот","Пойте потешки, меняя интонацию","Носите «столбиком», показывая мир вокруг"],
    flags:["Не улыбается к 2–3 месяцам","Совсем не удерживает голову","Не следит за предметом"] },
  { id:"mo3", m:"3 месяца", emoji:"3️⃣", theme:"coral",
    skills:["Уверенно держит голову вертикально","Лёжа на животе, опирается на предплечья","Тянется рукой к игрушке","Смеётся вслух","Рассматривает и играет со своими руками","Певуче гулит, «отвечает» на разговор"],
    games:["Повесьте мобиль/игрушки на расстоянии вытянутой руки","Вкладывайте лёгкие погремушки в ручку","«Разговаривайте» с паузами, повторяйте его звуки","Покажите малыша в зеркале","Делайте гимнастику и лёгкий массаж"],
    flags:["Не держит голову","Не тянется и не реагирует на игрушки","Не гулит и не улыбается"] },
  { id:"mo4", m:"4 месяца", emoji:"4️⃣", theme:"butter",
    skills:["Переворачивается со спины на бок/живот (начинает)","Хватает предметы и тянет их в рот","Хорошо держит голову и приподнимает грудь на руках","Громко смеётся, радуется общению","Узнаёт близких людей","Лепечет разные звуки, тянется к игрушке двумя руками"],
    games:["Дайте прорезыватели и игрушки разной фактуры","Перекликайтесь звуками — «поговорите»","Помогайте переворачиваться, мотивируя игрушкой","Рассматривайте книжки-контрасты","Играйте в потешки с движениями ручек"],
    flags:["Не переворачивается и не пытается","Не берёт игрушку в руку","Не смеётся, не гулит"] },
  { id:"mo5", m:"5 месяцев", emoji:"5️⃣", theme:"plum",
    skills:["Уверенно переворачивается со спины на живот","Перекладывает игрушку из руки в руку","Тянет предметы и свои ноги в рот","Сидит с поддержкой","Различает интонации, отзывается на своё имя (начинает)","Активно лепечет с повторами звуков"],
    games:["Давайте игрушки разной фактуры и формы","Играйте в «ку-ку» / прятки с платком","Катайте мяч, называйте предметы","Поддерживайте в положении сидя","Читайте книжки с крупными картинками"],
    flags:["Не переворачивается","Не тянется к предметам","Не реагирует на звуки и своё имя"] },
  { id:"mo6", m:"6 месяцев", emoji:"6️⃣", theme:"rust",
    skills:["Сидит с опорой, недолго — самостоятельно","Уверенно берёт и удерживает предметы","Лепечет слоги «ба», «ма», «па»","Точно тянется и хватает игрушку","Настораживается к незнакомцам","Проявляет интерес к еде (готовность к прикорму)"],
    games:["Кубики, стаканчики-вкладыши, пирамидка","«Ладушки», «сорока-ворона»","Книжки с яркими картинками, зеркало","Давайте безопасные предметы исследовать","Называйте всё, что делаете и показываете"],
    flags:["Не сидит даже с поддержкой","Не лепечет","Не тянется к игрушкам и не удерживает их"] },
  { id:"mo7", m:"7 месяцев", emoji:"7️⃣", theme:"wheat",
    skills:["Сидит самостоятельно без поддержки","Ползает по-пластунски или раскачивается на четвереньках","Перекладывает и стучит предметами друг о друга","Отзывается на имя","Понимает «нельзя» по интонации","Активно лепечет цепочки слогов"],
    games:["Мотивируйте ползти, отодвигая игрушку","Сортеры, пирамидка, коробочки","Играйте в «дай» и «на»","Читайте книжки, показывая пальцем","Создайте безопасное пространство для движения"],
    flags:["Не сидит без поддержки","Не лепечет слоги","Не интересуется окружающими и игрушками"] },
  { id:"mo8", m:"8 месяцев", emoji:"8️⃣", theme:"hazel",
    skills:["Уверенно ползает","Садится сам и встаёт у опоры","Берёт мелкое «пинцетным» захватом (двумя пальцами)","Ищет спрятанную на глазах игрушку","Машет «пока-пока» (начинает)","Повторяет слоги за взрослым"],
    games:["Прячьте игрушку под платок — пусть ищет","Учите жестам «пока-пока», «дай»","Крупные пазлы, сортеры","Пальчиковые игры и потешки","Дайте безопасные ящики, чтобы «разбирать»"],
    flags:["Не ползает и не перемещается","Не сидит самостоятельно","Не берёт мелкие предметы","Не реагирует на имя"] },
  { id:"mo9", m:"9 месяцев", emoji:"9️⃣", theme:"sage",
    skills:["Встаёт и стоит у опоры","Переступает вдоль опоры (начинает)","Уверенный пинцетный захват","Понимает простые слова и жесты","Показывает пальцем на предметы (начинает)","Хорошо ест кусочки, пьёт из кружки с помощью"],
    games:["Толкающие игрушки и каталки","«Где мама?», показывайте части тела","Книжки-потешки, пирамидки, стаканчики","Поощряйте вставать и переступать","Комментируйте действия простыми словами"],
    flags:["Не встаёт у опоры","Не использует жесты","Не лепечет","Утратил ранее приобретённые навыки"] },
  { id:"mo10", m:"10 месяцев", emoji:"🔟", theme:"sky",
    skills:["Уверенно стоит у опоры, переступает","Садится из положения стоя","Понимает «дай», «нельзя»","Говорит «мама/папа» осмысленно (начинает)","Повторяет действия за взрослым («ладушки»)","Складывает предметы в ёмкость"],
    games:["Каталки и толкалки","«Положи в коробку — достань обратно»","Причинно-следственные игрушки (нажал — звук)","Называйте и показывайте предметы","Читайте вместе, показывайте картинки"],
    flags:["Не стоит у опоры","Нет жестов и лепета","Не откликается на имя"] },
  { id:"mo11", m:"11 месяцев", emoji:"👶", theme:"coral",
    skills:["Стоит без опоры несколько секунд","Ходит за обе руки и вдоль опоры уверенно","Выполняет простые просьбы («дай мяч»)","Произносит несколько лепетных слов","Пьёт из кружки, пытается есть ложкой","Показывает пальцем на желаемое"],
    games:["Водите за руки, поощряйте шаги","Сортеры, пирамидки, простые ролевые игры","«Покажи, где…» части тела и предметы","Ролевые игры: покормить/уложить куклу","Музыкальные игрушки и танцы"],
    flags:["Не стоит у опоры","Нет простых слов и указательного жеста","Не понимает простых просьб"] },
  { id:"mo12", m:"12 месяцев", emoji:"🎂", theme:"plum",
    skills:["Делает первые самостоятельные шаги (или вот-вот)","Говорит 1–3 простых слова осмысленно","Выполняет простые просьбы","Показывает пальцем на желаемое","Пьёт из кружки, ест ложкой (учится)","Машет «пока», хлопает, знает близких по именам"],
    games:["Поощряйте самостоятельную ходьбу","Книжки с называнием предметов","Пирамидки, башни из кубиков","Ролевые игры и прогулки-исследования","«Где носик/глазки?», простые поручения"],
    flags:["Не стоит и не пытается ходить у опоры","Нет ни одного слова и указательного жеста","Не выполняет простых просьб","Утрата ранее приобретённых навыков"] }
];

function dLoad(){
  dState={}; dNotes={}; dOpen={};
  try{ const v=localStorage.getItem(k(DV_CHECK)); if(v) dState=JSON.parse(v); }catch(e){}
  try{ const v=localStorage.getItem(k(DV_NOTES)); if(v) dNotes=JSON.parse(v); }catch(e){}
  try{ const v=localStorage.getItem(k(DV_OPEN)); if(v) dOpen=JSON.parse(v); }catch(e){}
}
function dSaveCheck(){ try{ localStorage.setItem(k(DV_CHECK), JSON.stringify(dState)); }catch(e){} }
function dSaveNotes(){ try{ localStorage.setItem(k(DV_NOTES), JSON.stringify(dNotes)); }catch(e){} }
function dSaveOpen(){ try{ localStorage.setItem(k(DV_OPEN), JSON.stringify(dOpen)); }catch(e){} }
function devCounts(mo){ let t=0,c=0; mo.skills.forEach((_,i)=>{ t++; if(dState[mo.id+"-"+i]) c++; }); return {total:t, checked:c}; }
function devTotals(){ let t=0,c=0; DEV.forEach(mo=>{ const cc=devCounts(mo); t+=cc.total; c+=cc.checked; }); return {total:t, checked:c}; }
function updateDevHead(){
  const {total, checked} = devTotals();
  const pct = total? Math.round(checked/total*100):0;
  document.getElementById("devFill").style.width = pct+"%";
  document.getElementById("devCount").innerHTML = `<b>${checked}</b> из ${total} освоено`;
}
function updateDevCat(el, mo){
  const {total, checked} = devCounts(mo);
  el.querySelector(".stage-progress-text").textContent = `${checked} из ${total}`;
  el.querySelector(".stage-bar-fill").style.width = (total? checked/total*100:0)+"%";
  el.classList.toggle("done", total>0 && checked===total);
}
function dBuildRow(mo, name, key){
  const wrap = document.createElement("div");
  wrap.className = "s-row"; wrap.dataset.key = key; wrap.dataset.name = name.toLowerCase();
  const row = document.createElement("div");
  row.className = "item"; row.setAttribute("role","checkbox"); row.setAttribute("tabindex","0"); row.setAttribute("aria-label", name);
  row.innerHTML = `<div class="checkbox">✓</div><div class="item-label">${esc(name)}</div><button class="note-btn" aria-label="Заметка" tabindex="-1">✎</button>`;
  const box=row.querySelector(".checkbox"), label=row.querySelector(".item-label"), nbtn=row.querySelector(".note-btn");
  const apply=()=>{ const on=!!dState[key]; box.classList.toggle("checked",on); label.classList.toggle("checked",on); row.setAttribute("aria-checked",String(on)); };
  apply();
  const toggle=()=>{
    dState[key]=!dState[key]; apply();
    updateDevCat(wrap.closest(".stage"), mo); updateDevHead(); dSaveCheck();
    if(dState[key]){ if(navigator.vibrate) navigator.vibrate(14); const cc=devCounts(mo); if(cc.checked===cc.total){ confetti(false); toast("Все умения месяца освоены 🎉"); } }
  };
  row.addEventListener("click", e=>{ if(e.target.closest(".note-btn")) return; toggle(); });
  row.addEventListener("keydown", e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); toggle(); }});
  const note=document.createElement("div"); note.className="s-note";
  note.innerHTML = `<textarea placeholder="Например: освоил в 3 месяца">${esc(dNotes[key]||"")}</textarea>`;
  const ta=note.querySelector("textarea");
  ta.addEventListener("input", ()=>{ const v=ta.value; if(v.trim()) dNotes[key]=v; else delete dNotes[key]; dSaveNotes(); nbtn.classList.toggle("has", !!dNotes[key]); });
  nbtn.classList.toggle("has", !!dNotes[key]);
  nbtn.addEventListener("click", e=>{ e.stopPropagation(); const o=!note.classList.contains("open"); note.classList.toggle("open",o); if(o) setTimeout(()=>ta.focus(),60); });
  wrap.appendChild(row); wrap.appendChild(note);
  return wrap;
}
function renderDev(){
  const main = document.getElementById("devMain"); main.innerHTML="";
  DEV.forEach(mo=>{
    const el=document.createElement("div"); el.className=`stage theme-${mo.theme}`; el.dataset.cat=mo.id;
    const head=document.createElement("div"); head.className="stage-head"; head.setAttribute("role","button"); head.setAttribute("tabindex","0");
    head.innerHTML=`<div class="stage-emoji">${mo.emoji}</div><div class="stage-title-wrap"><p class="stage-title">${mo.m}</p><div class="stage-progress-text">0</div></div><span class="stage-medal" title="Освоено">🏅</span><div class="stage-chevron">▾</div>`;
    const toggle=()=>{ const c=el.classList.toggle("collapsed"); head.setAttribute("aria-expanded",String(!c)); dOpen[mo.id]=!c; dSaveOpen(); };
    head.addEventListener("click", toggle); head.addEventListener("keydown", e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); toggle(); }});
    el.appendChild(head);
    const bar=document.createElement("div"); bar.className="stage-bar-track"; bar.innerHTML=`<div class="stage-bar-fill"></div>`; el.appendChild(bar);
    const body=document.createElement("div"); body.className="stage-body";
    const sh=document.createElement("div"); sh.className="sub-head"; sh.textContent="✅ Что уже умеет"; body.appendChild(sh);
    mo.skills.forEach((s,i)=> body.appendChild(dBuildRow(mo, s, mo.id+"-"+i)));
    if(mo.games&&mo.games.length){ const g=document.createElement("div"); g.className="dev-info"; g.innerHTML=`<h4>🎲 Во что играть и как помочь</h4><ul>${mo.games.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`; body.appendChild(g); }
    if(mo.flags&&mo.flags.length){ const f=document.createElement("div"); f.className="dev-info flags"; f.innerHTML=`<h4>⚠️ Когда обратиться к врачу</h4><ul>${mo.flags.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`; body.appendChild(f); }
    el.appendChild(body); main.appendChild(el); updateDevCat(el, mo);
  });
  const els=[...main.querySelectorAll(".stage")]; const hasSaved=Object.keys(dOpen).length>0;
  els.forEach(el=>{ const open=hasSaved?!!dOpen[el.dataset.cat]:false; el.classList.toggle("collapsed",!open); const h=el.querySelector(".stage-head"); if(h) h.setAttribute("aria-expanded",String(open)); });
  if(!hasSaved){ const fc=DEV.find(m=>{ const cc=devCounts(m); return cc.checked<cc.total; })||DEV[0]; const el=main.querySelector(`.stage[data-cat="${fc.id}"]`); if(el){ el.classList.remove("collapsed"); const h=el.querySelector(".stage-head"); if(h) h.setAttribute("aria-expanded","true"); } }
  updateDevHead();
}
function devApplySearch(){
  const q=(document.getElementById("devSearch").value||"").trim().toLowerCase();
  document.getElementById("devSearchClear").classList.toggle("show", q.length>0);
  let any=false;
  document.querySelectorAll("#devMain .stage").forEach(el=>{
    let vis=0; el.querySelectorAll(".s-row").forEach(r=>{ const m=!q||r.dataset.name.includes(q); r.style.display=m?"":"none"; if(m)vis++; });
    el.querySelectorAll(".sub-head,.dev-info").forEach(x=> x.style.display = q ? "none" : "");
    const show=!q||vis>0; el.classList.toggle("hide",!show); if(show){ any=true; if(q) el.classList.remove("collapsed"); }
  });
  document.getElementById("devNoResults").classList.toggle("show", q.length>0 && !any);
}
function devCollapseAll(){
  const els=[...document.querySelectorAll("#devMain .stage")];
  const anyOpen=els.some(el=> !el.classList.contains("collapsed"));
  els.forEach(el=>{ el.classList.toggle("collapsed",anyOpen); const h=el.querySelector(".stage-head"); if(h) h.setAttribute("aria-expanded",String(!anyOpen)); dOpen[el.dataset.cat]=!anyOpen; });
  dSaveOpen();
  document.getElementById("devCollapseBtn").textContent = anyOpen ? "🔼 Развернуть всё" : "🔽 Свернуть всё";
}

/* ===================== ДНЕВНИК ДНЯ ===================== */
const DY_KEY="prikorm-diary";
let dyData={}, dySelDate=new Date(), dyEditCtx=null;
const DY_TYPES=[
  {type:"feed",   ic:"🍼", label:"Кормление"},
  {type:"sleep",  ic:"😴", label:"Сон"},
  {type:"diaper", ic:"💧", label:"Подгузник"},
  {type:"bath",   ic:"🛁", label:"Купание"},
  {type:"meds",   ic:"💊", label:"Лекарство"}
];
function dyLoad(){ dyData={}; try{ const v=localStorage.getItem(k(DY_KEY)); if(v) dyData=JSON.parse(v); }catch(e){} }
function dySave(){ try{ localStorage.setItem(k(DY_KEY), JSON.stringify(dyData)); }catch(e){} }
function dyDateKey(d){ return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); }
function dyIsToday(d){ return dyDateKey(d)===dyDateKey(new Date()); }
function dyFmtDate(d){
  if(dyIsToday(d)) return "Сегодня";
  const y=new Date(); y.setDate(y.getDate()-1);
  if(dyDateKey(d)===dyDateKey(y)) return "Вчера";
  const MM=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];
  const WD=["вс","пн","вт","ср","чт","пт","сб"][d.getDay()];
  return `${d.getDate()} ${MM[d.getMonth()]}, ${WD}`;
}
function dyFmtTime(iso){ const d=new Date(iso); return String(d.getHours()).padStart(2,"0")+":"+String(d.getMinutes()).padStart(2,"0"); }
function dyAddEntry(type){
  const key=dyDateKey(dySelDate);
  if(!dyData[key]) dyData[key]=[];
  const now=new Date();
  const dt=new Date(dySelDate); dt.setHours(now.getHours(), now.getMinutes(), now.getSeconds(), 0);
  dyData[key].push({ id:Date.now().toString(36)+Math.random().toString(36).slice(2,4), time:dt.toISOString(), type });
  dySave(); renderDiary();
  if(navigator.vibrate) navigator.vibrate(12);
  const tt=DY_TYPES.find(x=>x.type===type);
  if(tt) toast(`${tt.ic} ${tt.label} — записано`);
}
function dyChangeDay(delta){
  const d=new Date(dySelDate); d.setDate(d.getDate()+delta);
  if(dyDateKey(d) > dyDateKey(new Date())) return; // не уходим в будущее
  dySelDate=d; renderDiary();
}
function renderDiary(){
  document.getElementById("dyDate").textContent = dyFmtDate(dySelDate);
  document.getElementById("dyNext").disabled = dyIsToday(dySelDate);
  const addC=document.getElementById("dyAdd");
  addC.innerHTML = DY_TYPES.map(t=>`<button data-type="${t.type}" type="button"><span class="qi">${t.ic}</span>${t.label}</button>`).join("");
  addC.querySelectorAll("button").forEach(b=> b.addEventListener("click", ()=> dyAddEntry(b.dataset.type)));
  const key=dyDateKey(dySelDate);
  const entries=(dyData[key]||[]).slice().sort((a,b)=> a.time<b.time?-1:(a.time>b.time?1:0));
  const counts={}; entries.forEach(e=> counts[e.type]=(counts[e.type]||0)+1);
  document.getElementById("dySum").innerHTML = DY_TYPES.filter(t=>counts[t.type]).map(t=>`<span>${t.ic} ${counts[t.type]}</span>`).join("") || `<span style="opacity:.55">За день пока пусто</span>`;
  const list=document.getElementById("dyList");
  if(!entries.length){ list.innerHTML=`<div class="diary-empty">Пока тихо. Отметь первое кормление или сон — и день начнёт собираться 🌙<br>Нажмите кнопку выше, чтобы добавить.</div>`; return; }
  list.innerHTML = entries.map(e=>{ const t=DY_TYPES.find(x=>x.type===e.type)||{ic:"•",label:e.type}; return `<li class="diary-entry" data-id="${e.id}"><span class="de-time">${dyFmtTime(e.time)}</span><span class="de-ic">${t.ic}</span><span class="de-label">${esc(t.label)}${e.note?`<span class="de-note">${esc(e.note)}</span>`:''}</span><button class="de-del" aria-label="Удалить">✕</button></li>`; }).join("");
  list.querySelectorAll(".diary-entry").forEach(li=>{
    li.addEventListener("click", ()=> openDyEdit(key, li.dataset.id));
    li.querySelector(".de-del").addEventListener("click", ev=>{
      ev.stopPropagation();
      dyData[key]=(dyData[key]||[]).filter(x=> x.id!==li.dataset.id);
      if(!dyData[key].length) delete dyData[key];
      dySave(); renderDiary();
    });
  });
}
function openDyEdit(dateKey, id){
  const arr=dyData[dateKey]||[]; const e=arr.find(x=> x.id===id); if(!e) return;
  dyEditCtx={dateKey, id};
  const t=DY_TYPES.find(x=>x.type===e.type)||{ic:"•", label:e.type};
  document.getElementById("dyEditTitle").textContent = `${t.ic} ${t.label}`;
  const d=new Date(e.time);
  document.getElementById("dyEditTime").value = String(d.getHours()).padStart(2,"0")+":"+String(d.getMinutes()).padStart(2,"0");
  document.getElementById("dyEditNote").value = e.note||"";
  document.getElementById("dyEditModal").classList.add("open");
  document.getElementById("dyEditBackdrop").classList.add("open");
}
function closeDyEdit(){
  document.getElementById("dyEditModal").classList.remove("open");
  document.getElementById("dyEditBackdrop").classList.remove("open");
}
function saveDyEdit(){
  if(!dyEditCtx) return;
  const {dateKey, id}=dyEditCtx; const e=(dyData[dateKey]||[]).find(x=> x.id===id);
  if(!e){ closeDyEdit(); return; }
  const tv=document.getElementById("dyEditTime").value;
  if(tv){ const p=tv.split(":"); const d=new Date(e.time); d.setHours(+p[0]||0, +p[1]||0, 0, 0); e.time=d.toISOString(); }
  const nv=document.getElementById("dyEditNote").value.trim();
  if(nv) e.note=nv; else delete e.note;
  dySave(); closeDyEdit(); renderDiary(); toast("Сохранили ✅");
}
function delDyEdit(){
  if(!dyEditCtx) return;
  const {dateKey, id}=dyEditCtx;
  dyData[dateKey]=(dyData[dateKey]||[]).filter(x=> x.id!==id);
  if(!dyData[dateKey].length) delete dyData[dateKey];
  dySave(); closeDyEdit(); renderDiary();
}

/* ===================== ДОКУМЕНТЫ И ВЫПЛАТЫ ===================== */
const DOC_CHECK="prikorm-docs-checked", DOC_NOTES="prikorm-docs-notes", DOC_OPEN="prikorm-docs-open";
let dcState={}, dcNotes={}, dcOpen={};

const DOCS = [
  { id:"papers", emoji:"📄", name:"Документы малышу", theme:"sky",
    tip:"Многое оформляется автоматически: после регистрации рождения СНИЛС создаётся сам, а полис ОМС и маткапитал часто приходят проактивно на Госуслуги.",
    items:[
      { n:"Свидетельство о рождении", info:"Срок: желательно в течение 1 месяца. Где: ЗАГС или Госуслуги (сервис «Рождение ребёнка»). Нужно: паспорта родителей, справка из роддома, свид. о браке (при наличии)." },
      { n:"Регистрация по месту жительства (прописка)", info:"Где: МВД / Госуслуги / МФЦ. Нужно: свид. о рождении, паспорт родителя, документы на жильё. Часто требуется для пособий и прикрепления к поликлинике." },
      { n:"СНИЛС", info:"Оформляется автоматически после регистрации рождения — данные передаёт ЗАГС в СФР. Проверить и скачать можно на Госуслугах." },
      { n:"Полис ОМС", info:"Где: страховая медицинская организация или Госуслуги. Нужен для педиатра, прививок и бесплатной медпомощи. Часто оформляется проактивно." },
      { n:"Отметка о гражданстве РФ", info:"Понадобится для загранпаспорта и некоторых выплат. Проставляется в МВД по вопросам миграции по обращению." },
      { n:"ИНН (по необходимости)", info:"Нужен не всем и не сразу. Оформить можно в ФНС или на Госуслугах." }
    ]},
  { id:"med", emoji:"🏥", name:"Медицина и прикрепление", theme:"sage",
    items:[
      { n:"Прикрепление к детской поликлинике", info:"По месту жительства или фактического проживания. Нужно: полис ОМС, свид. о рождении, СНИЛС." },
      { n:"Первый патронаж (педиатр и медсестра)", info:"Врач и медсестра приходят на дом в первые дни после выписки — по данным из роддома, отдельно вызывать не нужно." },
      { n:"Плановые осмотры и скрининги 1-го месяца", info:"Аудиоскрининг, неонатальный скрининг, первые осмотры специалистов. Запись — через Госуслуги или регистратуру." }
    ]},
  { id:"pay", emoji:"💰", name:"Выплаты и пособия", theme:"coral",
    tip:"Суммы индексируются 1 февраля каждого года. Актуальные размеры и условия — на Госуслугах и в СФР.",
    items:[
      { n:"Единовременное пособие при рождении", info:"28 450,45 ₽ (с 1 февраля 2026; зависит от даты рождения). Срок подачи: в течение 6 месяцев. Работающим — через работодателя/СФР, неработающим — СФР или Госуслуги." },
      { n:"Материнский (семейный) капитал", info:"Сертификат оформляется проактивно и приходит на Госуслуги. 2026: на 1-го ребёнка — 728 921,90 ₽; на 2-го — 963 243,17 ₽ (или доплата 234 321,17 ₽, если уже получали на первого)." },
      { n:"Единое пособие (по нуждаемости)", info:"Семьям с детьми до 17 лет и беременным, если среднедушевой доход ≤ прожиточного минимума в регионе. Размер: 50 / 75 / 100% детского ПМ региона. Подать: СФР или Госуслуги." },
      { n:"Пособие по уходу за ребёнком до 1,5 лет", info:"40% среднего заработка (в 2026 мин ≈ 10 837 ₽, макс ≈ 83 021 ₽ в месяц). Работающим — через работодателя, остальным — единое пособие/СФР." },
      { n:"Пособие по беременности и родам (декретные)", info:"Работающим — 100% среднего заработка за отпуск по БиР, по больничному листу. Оформляется через работодателя/СФР." },
      { n:"Региональные и губернаторские выплаты", info:"Зависят от региона (например, выплата при рождении, поддержка молодых семей). Уточните в соцзащите или на региональном портале." }
    ]},
  { id:"extra", emoji:"🏦", name:"Полезное и сервисы", theme:"wheat",
    items:[
      { n:"Суперсервис «Рождение ребёнка» на Госуслугах", info:"Свидетельство о рождении, СНИЛС, прописка, полис ОМС и маткапитал во многом оформляются онлайн и проактивно." },
      { n:"Детская карта / счёт для выплат (по желанию)", info:"Удобно для зачисления пособий. Оформляется в банке." },
      { n:"Загранпаспорт ребёнку (по необходимости)", info:"Для поездок за границу. Через Госуслуги или МВД. Нужна отметка о гражданстве." }
    ]}
];

function dcLoad(){
  dcState={}; dcNotes={}; dcOpen={};
  try{ const v=localStorage.getItem(k(DOC_CHECK)); if(v) dcState=JSON.parse(v); }catch(e){}
  try{ const v=localStorage.getItem(k(DOC_NOTES)); if(v) dcNotes=JSON.parse(v); }catch(e){}
  try{ const v=localStorage.getItem(k(DOC_OPEN)); if(v) dcOpen=JSON.parse(v); }catch(e){}
}
function dcSaveCheck(){ try{ localStorage.setItem(k(DOC_CHECK), JSON.stringify(dcState)); }catch(e){} }
function dcSaveNotes(){ try{ localStorage.setItem(k(DOC_NOTES), JSON.stringify(dcNotes)); }catch(e){} }
function dcSaveOpen(){ try{ localStorage.setItem(k(DOC_OPEN), JSON.stringify(dcOpen)); }catch(e){} }
function docCounts(cat){ let t=0,c=0; cat.items.forEach((_,i)=>{ t++; if(dcState[cat.id+"-"+i]) c++; }); return {total:t, checked:c}; }
function docTotals(){ let t=0,c=0; DOCS.forEach(cat=>{ const cc=docCounts(cat); t+=cc.total; c+=cc.checked; }); return {total:t, checked:c}; }
function updateDocsHead(){
  const {total, checked} = docTotals();
  const pct = total? Math.round(checked/total*100):0;
  document.getElementById("docFill").style.width = pct+"%";
  document.getElementById("docCount").innerHTML = `<b>${checked}</b> из ${total} оформлено`;
}
function updateDocsCat(el, cat){
  const {total, checked} = docCounts(cat);
  el.querySelector(".stage-progress-text").textContent = `${checked} из ${total}`;
  el.querySelector(".stage-bar-fill").style.width = (total? checked/total*100:0)+"%";
  el.classList.toggle("done", total>0 && checked===total);
}
function docsBuildRow(cat, item, key){
  const wrap=document.createElement("div"); wrap.className="s-row"; wrap.dataset.key=key; wrap.dataset.name=(item.n+" "+(item.info||"")).toLowerCase();
  const row=document.createElement("div"); row.className="item"; row.setAttribute("role","checkbox"); row.setAttribute("tabindex","0"); row.setAttribute("aria-label",item.n);
  row.innerHTML=`<div class="checkbox">✓</div><div class="item-label">${esc(item.n)}${item.info?`<span class="doc-sub">${esc(item.info)}</span>`:''}</div><button class="note-btn" aria-label="Заметка" tabindex="-1">✎</button>`;
  const box=row.querySelector(".checkbox"), label=row.querySelector(".item-label"), nbtn=row.querySelector(".note-btn");
  const apply=()=>{ const on=!!dcState[key]; box.classList.toggle("checked",on); label.classList.toggle("checked",on); row.setAttribute("aria-checked",String(on)); };
  apply();
  const toggle=()=>{
    dcState[key]=!dcState[key]; apply();
    updateDocsCat(wrap.closest(".stage"), cat); updateDocsHead(); dcSaveCheck();
    if(dcState[key]){ if(navigator.vibrate) navigator.vibrate(14); const cc=docCounts(cat); if(cc.checked===cc.total){ confetti(false); } }
  };
  row.addEventListener("click", e=>{ if(e.target.closest(".note-btn")) return; toggle(); });
  row.addEventListener("keydown", e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); toggle(); }});
  const note=document.createElement("div"); note.className="s-note";
  note.innerHTML=`<textarea placeholder="Например: подали 5 июля, готово 12-го">${esc(dcNotes[key]||"")}</textarea>`;
  const ta=note.querySelector("textarea");
  ta.addEventListener("input", ()=>{ const v=ta.value; if(v.trim()) dcNotes[key]=v; else delete dcNotes[key]; dcSaveNotes(); nbtn.classList.toggle("has", !!dcNotes[key]); });
  nbtn.classList.toggle("has", !!dcNotes[key]);
  nbtn.addEventListener("click", e=>{ e.stopPropagation(); const o=!note.classList.contains("open"); note.classList.toggle("open",o); if(o) setTimeout(()=>ta.focus(),60); });
  wrap.appendChild(row); wrap.appendChild(note);
  return wrap;
}
function renderDocs(){
  const main=document.getElementById("docsMain"); main.innerHTML="";
  DOCS.forEach(cat=>{
    const el=document.createElement("div"); el.className=`stage theme-${cat.theme}`; el.dataset.cat=cat.id;
    const head=document.createElement("div"); head.className="stage-head"; head.setAttribute("role","button"); head.setAttribute("tabindex","0");
    head.innerHTML=`<div class="stage-emoji">${cat.emoji}</div><div class="stage-title-wrap"><p class="stage-title">${cat.name}</p><div class="stage-progress-text">0</div></div><span class="stage-medal" title="Готово">🏅</span><div class="stage-chevron">▾</div>`;
    const toggle=()=>{ const c=el.classList.toggle("collapsed"); head.setAttribute("aria-expanded",String(!c)); dcOpen[cat.id]=!c; dcSaveOpen(); };
    head.addEventListener("click", toggle); head.addEventListener("keydown", e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); toggle(); }});
    el.appendChild(head);
    const bar=document.createElement("div"); bar.className="stage-bar-track"; bar.innerHTML=`<div class="stage-bar-fill"></div>`; el.appendChild(bar);
    const body=document.createElement("div"); body.className="stage-body";
    cat.items.forEach((it,i)=> body.appendChild(docsBuildRow(cat, it, cat.id+"-"+i)));
    if(cat.tip){ const t=document.createElement("div"); t.className="goal-note"; t.innerHTML=`<span class="ic">💡</span><span>${esc(cat.tip)}</span>`; body.appendChild(t); }
    el.appendChild(body); main.appendChild(el); updateDocsCat(el, cat);
  });
  const els=[...main.querySelectorAll(".stage")]; const hasSaved=Object.keys(dcOpen).length>0;
  els.forEach(el=>{ const open=hasSaved?!!dcOpen[el.dataset.cat]:false; el.classList.toggle("collapsed",!open); const h=el.querySelector(".stage-head"); if(h) h.setAttribute("aria-expanded",String(open)); });
  if(!hasSaved){ const fc=DOCS.find(c=>{ const cc=docCounts(c); return cc.checked<cc.total; })||DOCS[0]; const el=main.querySelector(`.stage[data-cat="${fc.id}"]`); if(el){ el.classList.remove("collapsed"); const h=el.querySelector(".stage-head"); if(h) h.setAttribute("aria-expanded","true"); } }
  updateDocsHead();
}
function docsApplySearch(){
  const q=(document.getElementById("docsSearch").value||"").trim().toLowerCase();
  document.getElementById("docsSearchClear").classList.toggle("show", q.length>0);
  let any=false;
  document.querySelectorAll("#docsMain .stage").forEach(el=>{
    let vis=0; el.querySelectorAll(".s-row").forEach(r=>{ const m=!q||r.dataset.name.includes(q); r.style.display=m?"":"none"; if(m)vis++; });
    el.querySelectorAll(".goal-note").forEach(x=> x.style.display = q ? "none" : "");
    const show=!q||vis>0; el.classList.toggle("hide",!show); if(show){ any=true; if(q) el.classList.remove("collapsed"); }
  });
  document.getElementById("docsNoResults").classList.toggle("show", q.length>0 && !any);
}
function docsCollapseAll(){
  const els=[...document.querySelectorAll("#docsMain .stage")];
  const anyOpen=els.some(el=> !el.classList.contains("collapsed"));
  els.forEach(el=>{ el.classList.toggle("collapsed",anyOpen); const h=el.querySelector(".stage-head"); if(h) h.setAttribute("aria-expanded",String(!anyOpen)); dcOpen[el.dataset.cat]=!anyOpen; });
  dcSaveOpen();
  document.getElementById("docsCollapseBtn").textContent = anyOpen ? "🔼 Развернуть всё" : "🔽 Свернуть всё";
}

/* ===================== ОБЩИЙ ДВИЖОК ЧЕК-ЛИСТА (инфо + галочка + заметка) ===================== */
function makeInfoChecklist(cfg){
  let state={}, notes={}, open={};
  const K=cfg.keys;
  function load(){
    state={}; notes={}; open={};
    try{ const v=localStorage.getItem(k(K.check)); if(v) state=JSON.parse(v); }catch(e){}
    try{ const v=localStorage.getItem(k(K.notes)); if(v) notes=JSON.parse(v); }catch(e){}
    try{ const v=localStorage.getItem(k(K.open)); if(v) open=JSON.parse(v); }catch(e){}
  }
  const saveCheck=()=>{ try{ localStorage.setItem(k(K.check), JSON.stringify(state)); }catch(e){} };
  const saveNotes=()=>{ try{ localStorage.setItem(k(K.notes), JSON.stringify(notes)); }catch(e){} };
  const saveOpen=()=>{ try{ localStorage.setItem(k(K.open), JSON.stringify(open)); }catch(e){} };
  function catCounts(cat){ let t=0,c=0; cat.items.forEach((_,i)=>{ t++; if(state[cat.id+"-"+i]) c++; }); return {total:t, checked:c}; }
  function totals(){ let t=0,c=0; cfg.data.forEach(cat=>{ const cc=catCounts(cat); t+=cc.total; c+=cc.checked; }); return {total:t, checked:c}; }
  function updateHead(){ const {total,checked}=totals(); const pct=total?Math.round(checked/total*100):0; const f=document.getElementById(cfg.ids.fill); if(f) f.style.width=pct+"%"; const cnt=document.getElementById(cfg.ids.count); if(cnt) cnt.innerHTML=`<b>${checked}</b> из ${total} ${cfg.countWord}`; }
  function updateCat(el,cat){ const {total,checked}=catCounts(cat); el.querySelector(".stage-progress-text").textContent=`${checked} из ${total}`; el.querySelector(".stage-bar-fill").style.width=(total?checked/total*100:0)+"%"; el.classList.toggle("done",total>0&&checked===total); }
  function buildRow(cat,item,key){
    const wrap=document.createElement("div"); wrap.className="s-row"; wrap.dataset.key=key; wrap.dataset.name=(item.n+" "+(item.info||"")).toLowerCase();
    const row=document.createElement("div"); row.className="item"; row.setAttribute("role","checkbox"); row.setAttribute("tabindex","0"); row.setAttribute("aria-label",item.n);
    row.innerHTML=`<div class="checkbox">✓</div><div class="item-label">${esc(item.n)}${item.info?`<span class="doc-sub">${esc(item.info)}</span>`:''}</div><button class="note-btn" aria-label="Заметка" tabindex="-1">✎</button>`;
    const box=row.querySelector(".checkbox"),label=row.querySelector(".item-label"),nbtn=row.querySelector(".note-btn");
    const apply=()=>{ const on=!!state[key]; box.classList.toggle("checked",on); label.classList.toggle("checked",on); row.setAttribute("aria-checked",String(on)); };
    apply();
    const toggle=()=>{ state[key]=!state[key]; apply(); updateCat(wrap.closest(".stage"),cat); updateHead(); saveCheck(); if(state[key]){ if(navigator.vibrate) navigator.vibrate(14); const cc=catCounts(cat); if(cc.checked===cc.total) confetti(false); } };
    row.addEventListener("click",e=>{ if(e.target.closest(".note-btn")) return; toggle(); });
    row.addEventListener("keydown",e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); toggle(); }});
    const note=document.createElement("div"); note.className="s-note";
    note.innerHTML=`<textarea placeholder="${esc(cfg.notePlaceholder||'Заметка / дата')}">${esc(notes[key]||"")}</textarea>`;
    const ta=note.querySelector("textarea");
    ta.addEventListener("input",()=>{ const v=ta.value; if(v.trim()) notes[key]=v; else delete notes[key]; saveNotes(); nbtn.classList.toggle("has",!!notes[key]); });
    nbtn.classList.toggle("has",!!notes[key]);
    nbtn.addEventListener("click",e=>{ e.stopPropagation(); const o=!note.classList.contains("open"); note.classList.toggle("open",o); if(o) setTimeout(()=>ta.focus(),60); });
    wrap.appendChild(row); wrap.appendChild(note); return wrap;
  }
  function render(){
    const main=document.getElementById(cfg.ids.main); main.innerHTML="";
    cfg.data.forEach(cat=>{
      const el=document.createElement("div"); el.className=`stage theme-${cat.theme}`; el.dataset.cat=cat.id;
      const head=document.createElement("div"); head.className="stage-head"; head.setAttribute("role","button"); head.setAttribute("tabindex","0");
      head.innerHTML=`<div class="stage-emoji">${cat.emoji}</div><div class="stage-title-wrap"><p class="stage-title">${cat.name}</p><div class="stage-progress-text">0</div></div><span class="stage-medal" title="Готово">🏅</span><div class="stage-chevron">▾</div>`;
      const toggle=()=>{ const c=el.classList.toggle("collapsed"); head.setAttribute("aria-expanded",String(!c)); open[cat.id]=!c; saveOpen(); };
      head.addEventListener("click",toggle); head.addEventListener("keydown",e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); toggle(); }});
      el.appendChild(head);
      const bar=document.createElement("div"); bar.className="stage-bar-track"; bar.innerHTML=`<div class="stage-bar-fill"></div>`; el.appendChild(bar);
      const body=document.createElement("div"); body.className="stage-body";
      cat.items.forEach((it,i)=> body.appendChild(buildRow(cat,it,cat.id+"-"+i)));
      if(cat.tip){ const t=document.createElement("div"); t.className="goal-note"; t.innerHTML=`<span class="ic">💡</span><span>${esc(cat.tip)}</span>`; body.appendChild(t); }
      el.appendChild(body); main.appendChild(el); updateCat(el,cat);
    });
    const els=[...main.querySelectorAll(".stage")]; const hasSaved=Object.keys(open).length>0;
    els.forEach(el=>{ const o=hasSaved?!!open[el.dataset.cat]:false; el.classList.toggle("collapsed",!o); const h=el.querySelector(".stage-head"); if(h) h.setAttribute("aria-expanded",String(o)); });
    if(!hasSaved){ const fc=cfg.data.find(c=>{ const cc=catCounts(c); return cc.checked<cc.total; })||cfg.data[0]; const el=main.querySelector(`.stage[data-cat="${fc.id}"]`); if(el){ el.classList.remove("collapsed"); const h=el.querySelector(".stage-head"); if(h) h.setAttribute("aria-expanded","true"); } }
    updateHead();
  }
  function applySearch(){
    const q=(document.getElementById(cfg.ids.search).value||"").trim().toLowerCase();
    document.getElementById(cfg.ids.searchClear).classList.toggle("show",q.length>0);
    let any=false;
    document.querySelectorAll("#"+cfg.ids.main+" .stage").forEach(el=>{
      let vis=0; el.querySelectorAll(".s-row").forEach(r=>{ const m=!q||r.dataset.name.includes(q); r.style.display=m?"":"none"; if(m)vis++; });
      el.querySelectorAll(".goal-note").forEach(x=> x.style.display = q ? "none" : "");
      const show=!q||vis>0; el.classList.toggle("hide",!show); if(show){ any=true; if(q) el.classList.remove("collapsed"); }
    });
    document.getElementById(cfg.ids.noResults).classList.toggle("show",q.length>0&&!any);
  }
  function collapseAll(){
    const els=[...document.querySelectorAll("#"+cfg.ids.main+" .stage")];
    const anyOpen=els.some(el=> !el.classList.contains("collapsed"));
    els.forEach(el=>{ el.classList.toggle("collapsed",anyOpen); const h=el.querySelector(".stage-head"); if(h) h.setAttribute("aria-expanded",String(!anyOpen)); open[el.dataset.cat]=!anyOpen; });
    saveOpen();
    document.getElementById(cfg.ids.collapseBtn).textContent = anyOpen ? "🔼 Развернуть всё" : "🔽 Свернуть всё";
  }
  return { load, render, applySearch, collapseAll };
}

/* ---------- Данные: календарь прививок (нац. календарь РФ) ---------- */
const VAC = [
  { id:"rd", emoji:"🏥", name:"В роддоме (первые дни)", theme:"sky",
    tip:"Прививки по национальному календарю бесплатны по ОМС. Точные сроки — по графику педиатра; при медотводах схема сдвигается.",
    items:[
      { n:"Гепатит B — 1-я вакцинация", info:"В первые 24 часа жизни. Схема для всех детей: 0–1–6 месяцев." },
      { n:"Туберкулёз (БЦЖ / БЦЖ-М)", info:"На 3–7 день жизни, ещё в роддоме." }
    ]},
  { id:"h1", emoji:"👶", name:"До полугода", theme:"sage",
    items:[
      { n:"1 мес — Гепатит B (2-я)", info:"Вторая вакцинация по схеме 0–1–6." },
      { n:"2 мес — Пневмококковая инфекция (1-я)", info:"Первая вакцинация против пневмококка." },
      { n:"3 мес — АКДС: дифтерия, коклюш, столбняк (1-я)", info:"Первая вакцинация. Часто в комбинации с полиомиелитом и гемофильной." },
      { n:"3 мес — Полиомиелит (1-я)", info:"Первая вакцинация (инактивированная вакцина, ИПВ)." },
      { n:"3 мес — Гемофильная инфекция (группы риска)", info:"Для детей из групп риска — по назначению врача." },
      { n:"4,5 мес — АКДС (2-я)", info:"Вторая вакцинация." },
      { n:"4,5 мес — Полиомиелит (2-я)", info:"Вторая вакцинация (ИПВ)." },
      { n:"4,5 мес — Пневмококковая (2-я)", info:"Вторая вакцинация." }
    ]},
  { id:"h2", emoji:"🎂", name:"Полгода — год", theme:"coral",
    items:[
      { n:"6 мес — АКДС (3-я)", info:"Третья вакцинация." },
      { n:"6 мес — Гепатит B (3-я)", info:"Третья вакцинация по схеме 0–1–6." },
      { n:"6 мес — Полиомиелит (3-я)", info:"Третья вакцинация." },
      { n:"12 мес — Корь, краснуха, паротит (КПК)", info:"Вакцинация одной комбинированной прививкой." },
      { n:"12 мес — Гепатит B (4-я, группы риска)", info:"Для детей из групп риска — по схеме 0–1–2–12." }
    ]},
  { id:"after", emoji:"🧒", name:"После года (ревакцинации)", theme:"butter",
    items:[
      { n:"15 мес — Пневмококковая (ревакцинация)", info:"Ревакцинация против пневмококка." },
      { n:"18 мес — АКДС (1-я ревакцинация)", info:"Первая ревакцинация." },
      { n:"18 мес — Полиомиелит (1-я ревакцинация)", info:"Первая ревакцинация." },
      { n:"20 мес — Полиомиелит (2-я ревакцинация)", info:"Вторая ревакцинация." },
      { n:"6 лет — Корь, краснуха, паротит (ревакцинация)", info:"Ревакцинация КПК." },
      { n:"6–7 лет — Дифтерия, столбняк (АДС-М)", info:"Ревакцинация." },
      { n:"6–7 лет — Туберкулёз (БЦЖ, ревакцинация)", info:"При отрицательной пробе Манту." }
    ]},
  { id:"year", emoji:"💉", name:"Ежегодно и по показаниям", theme:"plum",
    items:[
      { n:"Грипп — ежегодно", info:"С 6 месяцев, каждый сезон (осенью)." },
      { n:"Ротавирусная инфекция", info:"По национальному календарю/региональным программам, курс в первые месяцы жизни. Уточните у педиатра." },
      { n:"Ветряная оспа", info:"По рекомендации и региональным программам. Уточните у педиатра." }
    ]}
];

/* ---------- Данные: до родов по триместрам ---------- */
const PREG = [
  { id:"t1", emoji:"🌱", name:"1 триместр (до 13 недель)", theme:"sage",
    tip:"Встать на учёт лучше до 12 недель — это важно для здоровья и для единого пособия беременным (при ранней постановке).",
    items:[
      { n:"Встать на учёт в женской консультации", info:"Оптимально до 12 недель (лучше в 7–8). Заводят обменную карту, назначают анализы и наблюдение." },
      { n:"Первый скрининг (11–14 недель)", info:"УЗИ + анализ крови (ХГЧ и PAPP-A). Оценка рисков хромосомных патологий." },
      { n:"Базовые анализы", info:"Кровь (ОАК, группа и резус, ВИЧ, гепатиты, сифилис, TORCH, глюкоза, коагулограмма), моча, мазки." },
      { n:"Осмотры специалистов", info:"Терапевт, стоматолог, ЛОР, окулист — при постановке на учёт." },
      { n:"Фолиевая кислота и йод", info:"Приём по назначению врача (фолиевая — с планирования и в 1 триместре)." }
    ]},
  { id:"t2", emoji:"🤰", name:"2 триместр (14–27 недель)", theme:"coral",
    items:[
      { n:"Второй скрининг УЗИ (18–21 неделя)", info:"Оценка анатомии плода, плаценты; можно узнать пол ребёнка." },
      { n:"Глюкозотолерантный тест (24–28 недель)", info:"Обязателен для всех (оптимально 24–26 недель) — исключение гестационного диабета." },
      { n:"Повторные анализы и наблюдение", info:"ОАК, ОАМ и другие по назначению; контроль давления, веса, шевелений (с ~18–20 недель)." },
      { n:"Обменная карта на руки", info:"Ведётся весь срок; носите с собой — понадобится в роддоме." }
    ]},
  { id:"t3", emoji:"🎒", name:"3 триместр (28–40 недель)", theme:"sky",
    tip:"В 30 недель оформляются больничный по беременности и родам (декрет) и родовой сертификат. При многоплодной беременности — с 28 недель.",
    items:[
      { n:"Третий скрининг УЗИ (30–34 недели)", info:"Оценка роста и положения плода, плаценты; часто с допплерометрией." },
      { n:"КТГ плода (с 32–34 недель)", info:"Оценка сердцебиения и состояния малыша, регулярно ближе к родам." },
      { n:"Декрет и родовой сертификат (30 недель)", info:"Больничный по БиР и родовой сертификат оформляются в 30 недель (28 — при двойне)." },
      { n:"Выбрать роддом", info:"Определиться с роддомом; при желании — заключить контракт или познакомиться заранее." },
      { n:"Собрать сумку в роддом", info:"См. раздел «Сумка в роддом». Держите готовой к 36–37 неделям." },
      { n:"Анализы перед родами", info:"Повторные мазки, кровь и другие исследования по назначению врача." }
    ]}
];

const vacMod = makeInfoChecklist({ data:VAC, countWord:"сделано", notePlaceholder:"Например: сделали 5 июля",
  keys:{ check:"prikorm-vac-checked", notes:"prikorm-vac-notes", open:"prikorm-vac-open" },
  ids:{ main:"vacMain", fill:"vacFill", count:"vacCount", search:"vacSearch", searchClear:"vacSearchClear", noResults:"vacNoResults", collapseBtn:"vacCollapseBtn" } });
const pregMod = makeInfoChecklist({ data:PREG, countWord:"выполнено", notePlaceholder:"Например: сделала на 12 неделе",
  keys:{ check:"prikorm-preg-checked", notes:"prikorm-preg-notes", open:"prikorm-preg-open" },
  ids:{ main:"pregMain", fill:"pregFill", count:"pregCount", search:"pregSearch", searchClear:"pregSearchClear", noResults:"pregNoResults", collapseBtn:"pregCollapseBtn" } });

/* ---------- переключение разделов ---------- */
function setView(v){
  currentView = v; try{ localStorage.setItem(VIEW_KEY, v); }catch(e){}
  document.getElementById("viewPrikorm").hidden = (v!=="prikorm");
  document.getElementById("viewSumka").hidden = (v!=="sumka");
  document.getElementById("viewBuy").hidden = (v!=="buy");
  document.getElementById("viewDev").hidden = (v!=="dev");
  document.getElementById("viewDiary").hidden = (v!=="diary");
  document.getElementById("viewDocs").hidden = (v!=="docs");
  document.getElementById("viewVac").hidden = (v!=="vac");
  document.getElementById("viewPreg").hidden = (v!=="preg");
  document.querySelectorAll(".drawer-item").forEach(b=> b.classList.toggle("active", b.dataset.view===v));
  if(v==="sumka") renderSumka();
  if(v==="buy") renderBuy();
  if(v==="dev") renderDev();
  if(v==="diary") renderDiary();
  if(v==="docs") renderDocs();
  if(v==="vac") vacMod.render();
  if(v==="preg") pregMod.render();
  window.scrollTo(0,0);
}
function openDrawer(){ document.getElementById("drawer").classList.add("open"); document.getElementById("drawerBackdrop").classList.add("open"); }
function closeDrawer(){ document.getElementById("drawer").classList.remove("open"); document.getElementById("drawerBackdrop").classList.remove("open"); }

sLoad();
bLoad();
dLoad();
dyLoad();
dcLoad();
vacMod.load();
pregMod.load();
document.getElementById("menuBtn").addEventListener("click", openDrawer);
document.getElementById("drawerBackdrop").addEventListener("click", closeDrawer);
document.querySelectorAll(".drawer-item[data-view]").forEach(b=> b.addEventListener("click", ()=>{ setView(b.dataset.view); closeDrawer(); }));
document.getElementById("sAddClose").addEventListener("click", sCloseAdd);
document.getElementById("sAddBackdrop").addEventListener("click", sCloseAdd);
document.getElementById("sAddSave").addEventListener("click", sSaveAdd);
document.getElementById("sAddName").addEventListener("keydown", e=>{ if(e.key==="Enter"){ e.preventDefault(); sSaveAdd(); }});
document.getElementById("sumkaSearch").addEventListener("input", sApplySearch);
document.getElementById("sumkaSearchClear").addEventListener("click", ()=>{ const s=document.getElementById("sumkaSearch"); s.value=""; sApplySearch(); s.focus(); });
document.getElementById("sumkaCollapseBtn").addEventListener("click", sCollapseAll);
document.getElementById("bAddClose").addEventListener("click", bCloseAdd);
document.getElementById("bAddBackdrop").addEventListener("click", bCloseAdd);
document.getElementById("bAddSave").addEventListener("click", bSaveAdd);
document.getElementById("bAddName").addEventListener("keydown", e=>{ if(e.key==="Enter"){ e.preventDefault(); bSaveAdd(); }});
document.getElementById("buySearch").addEventListener("input", bApplySearch);
document.getElementById("buySearchClear").addEventListener("click", ()=>{ const s=document.getElementById("buySearch"); s.value=""; bApplySearch(); s.focus(); });
document.getElementById("buyCollapseBtn").addEventListener("click", bCollapseAll);
document.getElementById("devSearch").addEventListener("input", devApplySearch);
document.getElementById("devSearchClear").addEventListener("click", ()=>{ const s=document.getElementById("devSearch"); s.value=""; devApplySearch(); s.focus(); });
document.getElementById("devCollapseBtn").addEventListener("click", devCollapseAll);
document.getElementById("dyPrev").addEventListener("click", ()=> dyChangeDay(-1));
document.getElementById("dyNext").addEventListener("click", ()=> dyChangeDay(1));
document.getElementById("dyEditClose").addEventListener("click", closeDyEdit);
document.getElementById("dyEditBackdrop").addEventListener("click", closeDyEdit);
document.getElementById("dyEditSave").addEventListener("click", saveDyEdit);
document.getElementById("dyEditDel").addEventListener("click", delDyEdit);
document.getElementById("docsSearch").addEventListener("input", docsApplySearch);
document.getElementById("docsSearchClear").addEventListener("click", ()=>{ const s=document.getElementById("docsSearch"); s.value=""; docsApplySearch(); s.focus(); });
document.getElementById("docsCollapseBtn").addEventListener("click", docsCollapseAll);
document.getElementById("vacSearch").addEventListener("input", ()=> vacMod.applySearch());
document.getElementById("vacSearchClear").addEventListener("click", ()=>{ const s=document.getElementById("vacSearch"); s.value=""; vacMod.applySearch(); s.focus(); });
document.getElementById("vacCollapseBtn").addEventListener("click", ()=> vacMod.collapseAll());
document.getElementById("pregSearch").addEventListener("input", ()=> pregMod.applySearch());
document.getElementById("pregSearchClear").addEventListener("click", ()=>{ const s=document.getElementById("pregSearch"); s.value=""; pregMod.applySearch(); s.focus(); });
document.getElementById("pregCollapseBtn").addEventListener("click", ()=> pregMod.collapseAll());
setView(currentView);

/* ---------- SERVICE WORKER (офлайн) ---------- */
if("serviceWorker" in navigator && location.protocol === "https:"){
  window.addEventListener("load", ()=>{ navigator.serviceWorker.register("sw.js").catch(()=>{}); });
}

;

/* v27: replace interface emoji with inline SVG icons */
(function(){
  var A='fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"';
  function s(i){return '<svg viewBox="0 0 24 24" '+A+'>'+i+'</svg>';}
  var ICONS={
    "\u2715":s('<path d="M6 6l12 12M18 6L6 18"/>'),
    "\u2716":s('<path d="M6 6l12 12M18 6L6 18"/>'),
    "\u{1F53D}":s('<path d="M6 9l6 6 6-6"/>'),
    "\u{1F53C}":s('<path d="M6 15l6-6 6 6"/>'),
    "\u25BE":s('<path d="M6 9l6 6 6-6"/>'),
    "\u25B4":s('<path d="M6 15l6-6 6 6"/>'),
    "\u{1F50D}":s('<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>'),
    "\u{1F5D1}":s('<path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13"/>'),
    "\u270E":s('<path d="M4 20h4L18.5 9.5a2.12 2.12 0 0 0-3-3L5 17v3z"/><path d="M13.5 6.5l3 3"/>'),
    "\u2713":s('<path d="M5 13l4 4L19 7"/>'),
    "\u2714":s('<path d="M5 13l4 4L19 7"/>'),
    "\u2705":s('<path d="M5 13l4 4L19 7"/>'),
    "\u{1F4BE}":s('<path d="M5 3h11l3 3v15H5z"/><path d="M8 3v6h7"/><path d="M8 21v-6h8v6"/>'),
    "\u{1F4E4}":s('<path d="M12 15V4M8 8l4-4 4 4"/><path d="M4 15v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4"/>'),
    "\u{1F4E5}":s('<path d="M12 4v11M8 11l4 4 4-4"/><path d="M4 15v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4"/>'),
    "\u2795":s('<path d="M12 5v14M5 12h14"/>'),
    "\u2191":s('<path d="M12 20V5M6 11l6-6 6 6"/>'),
    "\u25A6":s('<path d="M4 7h16M4 12h16M4 17h16"/>'),
    "\u2600":s('<circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5 5l1.4 1.4M17.6 17.6L19 19M19 5l-1.4 1.4M6.4 17.6L5 19"/>'),
    "\u{1F319}":s('<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>'),
    "\u{1F331}":s('<path d="M12 21V11"/><path d="M12 11c0-3 2.4-5.2 5.4-5.2C17.4 8.8 15 11 12 11z"/><path d="M12 12.5C12 9.8 9.7 7.7 6.8 7.7 6.8 10.5 9 12.5 12 12.5z"/>'),
    "\u{1F6CD}":s('<path d="M6 8h12l1 12.5H5z"/><path d="M9 8V6.2a3 3 0 0 1 6 0V8"/>'),
    "\u{1F6D2}":s('<circle cx="9.5" cy="20" r="1.3"/><circle cx="17" cy="20" r="1.3"/><path d="M3 4h2l2.4 11.5h10L20 7H6.4"/>'),
    "\u{1F463}":s('<path d="M7 4.5c1.8 0 3 1.4 3 3.2 0 1.3-.6 2.4-1.6 3L5 14.3c-1.2 1.2-.4 3.2 1.3 3.2H10"/><path d="M17 19.5c-1.8 0-3-1.4-3-3.2 0-1.3.6-2.4 1.6-3l3.4-3.6c1.2-1.2.4-3.2-1.3-3.2H14"/>'),
    "\u{1F634}":s('<circle cx="12" cy="12" r="9"/><path d="M7 10h3M14 10h3M8.5 15c1 .8 2.2 1.2 3.5 1.2s2.5-.4 3.5-1.2"/>'),
    "\u{1F4C4}":s('<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/><path d="M9 13h6M9 16.5h6"/>'),
    "\u{1F489}":s('<path d="M4 14l6-6 6 6-6 6z"/><path d="M14 8l3-3 3 3-3 3z"/><path d="M6.5 16.5l-2.5 2.5"/>'),
    "\u{1F930}":s('<circle cx="12" cy="6" r="3"/><path d="M7 21c0-4.2 2.2-7 5-7s5 2.8 5 7"/><path d="M8.5 14.5c1.1 1 2.3 1.5 3.5 1.5s2.4-.5 3.5-1.5"/>'),
    "\u{1F464}":s('<circle cx="12" cy="8" r="3.3"/><path d="M5.5 20c.4-3.8 3-6.3 6.5-6.3s6.1 2.5 6.5 6.3"/>'),
    "\u{1F3E0}":s('<path d="M4 11l8-7 8 7"/><path d="M6 10v9h12v-9"/>')
  };
  var st=document.createElement("style");
  st.textContent=".svgi{display:inline-flex;width:1em;height:1em;vertical-align:-0.14em;line-height:1;flex:0 0 auto}.svgi>svg{width:100%;height:100%;display:block}";
  document.head.appendChild(st);
  function mk(ch){var sp=document.createElement("span");sp.className="svgi";sp.setAttribute("data-e",ch);sp.innerHTML=ICONS[ch];return sp;}
  function proc(node){var txt=node.nodeValue; if(!txt) return; var hit=false; for(var ch in ICONS){ if(txt.indexOf(ch)>=0){hit=true;break;} } if(!hit) return;
    var frag=document.createDocumentFragment(), buf="";
    for(var c of txt){ if(ICONS[c]){ if(buf){frag.appendChild(document.createTextNode(buf));buf="";} frag.appendChild(mk(c)); } else if(c!=="\uFE0F"){ buf+=c; } }
    if(buf) frag.appendChild(document.createTextNode(buf));
    if(node.parentNode) node.parentNode.replaceChild(frag,node); }
  function walk(n){ if(n.nodeType===3){proc(n);return;} if(n.nodeType!==1) return; var tg=n.tagName;
    if(tg==="SCRIPT"||tg==="STYLE"||tg==="svg"||(n.classList&&n.classList.contains("svgi"))) return;
    var k=[]; for(var x=n.firstChild;x;x=x.nextSibling) k.push(x); for(var i=0;i<k.length;i++) walk(k[i]); }
  function run(){ walk(document.body);
    var mo=new MutationObserver(function(ms){ for(var i=0;i<ms.length;i++){ var m=ms[i]; if(m.type==="characterData") proc(m.target); else { for(var j=0;j<m.addedNodes.length;j++) walk(m.addedNodes[j]); } } });
    mo.observe(document.body,{childList:true,subtree:true,characterData:true}); }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",run); else run();
})();

;

/* ============================================================
   Motion layer — Apple-style springs & gestures (v29)
   Self-contained. Enhances existing DOM without touching core logic.
   Springs: default damping 1.0 / response ~0.34; momentum damping ~0.8.
   ============================================================ */
(function(){
  "use strict";
  var RM = matchMedia('(prefers-reduced-motion: reduce)');
  function reduced(){ return RM.matches; }

  /* ---------- mini spring engine (rAF, mass=1) ---------- */
  function spring(o){
    var ratio = o.damping!=null ? o.damping : 1.0;
    var resp  = o.response || 0.34;
    var k = Math.pow(2*Math.PI/resp, 2);
    var c = 2*ratio*Math.sqrt(k);
    var x = o.from||0, v = o.velocity||0, raf=0, last=0, stopped=false;
    function to(){ return o.to||0; }
    if(reduced()){ o.onUpdate&&o.onUpdate(to(),0); o.onComplete&&o.onComplete(); return {stop:function(){},retarget:function(t){o.to=t;}}; }
    function frame(ts){
      if(stopped) return; if(!last) last=ts;
      var dt=(ts-last)/1000; last=ts; if(dt>0.032) dt=0.032;
      var steps=Math.max(1,Math.ceil(dt/0.008)), h=dt/steps;
      for(var i=0;i<steps;i++){ var a=-k*(x-to())-c*v; v+=a*h; x+=v*h; }
      if(Math.abs(x-to())<0.15 && Math.abs(v)<1){ x=to(); o.onUpdate&&o.onUpdate(x,0); o.onComplete&&o.onComplete(); return; }
      o.onUpdate&&o.onUpdate(x,v); raf=requestAnimationFrame(frame);
    }
    raf=requestAnimationFrame(frame);
    return { stop:function(){stopped=true;cancelAnimationFrame(raf);}, retarget:function(t,nv){o.to=t;if(nv!=null)v=nv;if(stopped){stopped=false;last=0;raf=requestAnimationFrame(frame);}} };
  }
  function project(vel, decel){ decel=decel||0.998; return (vel/1000)*decel/(1-decel); }
  function rgbToRgba(c,a){ var m=c&&c.match(/(\d+),\s*(\d+),\s*(\d+)/); return m?('rgba('+m[1]+','+m[2]+','+m[3]+','+a+')'):c; }

  /* ---------- styles ---------- */
  var css=document.createElement('style'); css.id='__motion_css';
  css.textContent=[
    '.stage-head,.item,.chip,.kid,.info-btn,.theme-toggle,.menu-btn,.drawer-item,.sheet-close{transition:transform .11s ease-out;}',
    '.stage-head:active,.item:active,.chip:active,.kid:active,.info-btn:active,.theme-toggle:active,.menu-btn:active,.drawer-item:active,.sheet-close:active{transform:scale(.97);}',
    '.checkbox{transition:transform .11s ease-out;} .checkbox:active{transform:scale(.86);}',
    '.chips,.kids{position:relative;}',
    '.m-pill{position:absolute;top:0;left:0;border-radius:999px;z-index:0;pointer-events:none;box-sizing:border-box;will-change:transform,width;}',
    '.chips>.chip,.kids>.kid{position:relative;z-index:1;}',
    '.m-pilled>.chip.active,.m-pilled>.kid.active{background:transparent !important;border-color:transparent !important;box-shadow:none !important;color:#fff !important;}',
    '.m-reveal{opacity:0;transform:translateY(14px);}',
    '.m-reveal.m-in{opacity:1;transform:none;transition:opacity .5s ease, transform .5s cubic-bezier(.22,.9,.3,1);}',
    '.sheet,.drawer,.modal{will-change:transform,backdrop-filter;}',
    '@media (prefers-reduced-motion: reduce){.m-reveal,.m-reveal.m-in{transition:opacity .25s ease;transform:none;}}'
  ].join('');
  (document.head||document.documentElement).appendChild(css);

  function ready(fn){ if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',fn); else fn(); }

  ready(function(){
    /* ===== 1. SLIDING PILL (chips + profile kids) ===== */
    function initPill(group){
      if(group.__pill) return;
      function activeEl(){ return group.querySelector('.active'); }
      var a0=activeEl(); if(!a0) return;
      var cs=getComputedStyle(a0);
      var accent=cs.borderColor; if(!accent || /rgba\(0, 0, 0, 0\)/.test(accent)) accent=cs.color;
      group.__accent=accent;
      var pill=document.createElement('div'); pill.className='m-pill'; pill.style.background=accent;
      group.insertBefore(pill, group.firstChild); group.__pill=pill; group.__sp=null;
      group.classList.add('m-pilled');   // add AFTER reading accent
      function measure(el){ if(!el) return null; var gr=group.getBoundingClientRect(), r=el.getBoundingClientRect(); return {x:r.left-gr.left,w:r.width,h:r.height,y:r.top-gr.top,radius:getComputedStyle(el).borderRadius}; }
      function place(m, animate){ if(!m) return; pill.style.height=m.h+'px'; pill.style.borderRadius=m.radius;
        if(!animate||reduced()||pill.__x==null){ pill.__x=m.x;pill.__w=m.w;pill.__y=m.y; pill.style.width=m.w+'px'; pill.style.transform='translate('+m.x+'px,'+m.y+'px)'; return; }
        if(group.__sp) group.__sp.stop(); var sx=pill.__x,sw=pill.__w,tx=m.x,tw=m.w,ty=m.y; pill.__y=ty;
        group.__sp=spring({from:0,to:1,damping:0.8,response:0.34,onUpdate:function(p){ var cx=sx+(tx-sx)*p,cw=sw+(tw-sw)*p; pill.__x=cx;pill.__w=cw; pill.style.width=cw+'px'; pill.style.transform='translate('+cx+'px,'+ty+'px)'; }});
      }
      group.__relayout=function(animate){ place(measure(activeEl()), animate); };
      group.__relayout(false);
      new MutationObserver(function(){ group.__relayout(true); }).observe(group,{subtree:true,attributes:true,attributeFilter:['class']});
      window.addEventListener('resize', function(){ group.__relayout(false); });
    }
    function scanPills(){ [].forEach.call(document.querySelectorAll('.chips,.kids'), initPill); }
    scanPills();

    /* ===== SECTION transitions (fade + translateY) ===== */
    var views=[].slice.call(document.querySelectorAll('[id^="view"]')).filter(function(v){ return v.querySelector && v.querySelector('.hero-sub'); });
    function playEnter(v){ if(reduced()) return; spring({from:0,to:1,damping:1.0,response:0.4,onUpdate:function(p){ v.style.opacity=String(p); v.style.transform='translateY('+((1-p)*8)+'px)'; }, onComplete:function(){ v.style.opacity=''; v.style.transform=''; }}); }
    function relayoutPillsIn(v){ requestAnimationFrame(function(){ [].forEach.call(v.querySelectorAll('.chips,.kids'), function(gr){ if(gr.__relayout) gr.__relayout(false); }); }); }
    views.forEach(function(v){ var shown=getComputedStyle(v).display!=='none';
      new MutationObserver(function(){ var now=getComputedStyle(v).display!=='none'; if(now&&!shown){ playEnter(v); relayoutPillsIn(v); } shown=now; }).observe(v,{attributes:true,attributeFilter:['style','class']}); });

    /* ===== 4. GLASS materialize (sheet / drawer) ===== */
    function materialize(el, blurPx){ if(reduced()) return; blurPx=blurPx||26;
      spring({from:0,to:1,damping:1.0,response:0.36,onUpdate:function(p){ var b=(0.55+0.45*p)*blurPx; el.style.backdropFilter='blur('+b+'px) saturate(180%)'; el.style.webkitBackdropFilter='blur('+b+'px) saturate(180%)'; }, onComplete:function(){ el.style.backdropFilter=''; el.style.webkitBackdropFilter=''; }}); }

    /* ===== 5. BOTTOM SHEET physics ===== */
    var sheet=document.querySelector('.sheet'), grip=document.querySelector('.sheet-grip');
    if(sheet){
      var wasOpen=sheet.classList.contains('open');
      function sheetH(){ return sheet.getBoundingClientRect().height||1; }
      function setY(px){ sheet.style.transform='translateY('+px+'px)'; }
      function openAnim(){ materialize(sheet); }
      new MutationObserver(function(){ var o=sheet.classList.contains('open'); if(o&&!wasOpen){ openAnim(); } wasOpen=o; }).observe(sheet,{attributes:true,attributeFilter:['class']});
      if(grip){
        var dragging=false,startY=0,curY=0,hist=[],hh=sheetH();
        function vel(){ if(hist.length<2) return 0; var a=hist[0],b=hist[hist.length-1],dt=(b.t-a.t)/1000; return dt>0?(b.y-a.y)/dt:0; }
        grip.style.touchAction='none';
        grip.addEventListener('pointerdown',function(e){ dragging=true;hh=sheetH();startY=e.clientY;curY=0;hist=[{y:0,t:performance.now()}]; sheet.style.transition='none'; try{grip.setPointerCapture(e.pointerId);}catch(_){} e.preventDefault(); });
        grip.addEventListener('pointermove',function(e){ if(!dragging) return; var dy=e.clientY-startY; if(dy<0){ dy=-(function(x,d,c){c=c||0.55;return (x*d*c)/(d+c*Math.abs(x));})(-dy,hh); } curY=dy; setY(dy); hist.push({y:dy,t:performance.now()}); if(hist.length>6)hist.shift(); e.preventDefault(); });
        function settle(target, close){
          sheet.style.transition='transform .32s cubic-bezier(0.34,1.1,0.5,1)';
          setY(target);
          var done=function(){ sheet.style.transition=''; sheet.style.transform=''; sheet.removeEventListener('transitionend',done);
            if(close){ try{(window.closeSheet||function(){sheet.classList.remove('open');})();}catch(_){sheet.classList.remove('open');} } };
          sheet.addEventListener('transitionend',done); setTimeout(done,380);
        }
        function endDrag(e){ if(!dragging) return; dragging=false; try{grip.releasePointerCapture(e.pointerId);}catch(_){}
          var v=vel(), projected=curY+project(v);
          if(projected>hh*0.4){ settle(hh, true); } else { settle(0, false); }
        }
        grip.addEventListener('pointerup',endDrag); grip.addEventListener('pointercancel',endDrag);
      }
    }
    var drawer=document.querySelector('.drawer');
    if(drawer){ var wasD=drawer.classList.contains('open'); new MutationObserver(function(){ var o=drawer.classList.contains('open'); if(o&&!wasD){ materialize(drawer,26); } wasD=o; }).observe(drawer,{attributes:true,attributeFilter:['class']}); }

    /* ===== 6. SCROLL reveal — FIRST render only ===== */
    if('IntersectionObserver' in window){
      var io=new IntersectionObserver(function(ents){ ents.forEach(function(en){ if(en.isIntersecting){ var el=en.target,d=(el.__stag||0); setTimeout(function(){ el.classList.add('m-in'); }, d); io.unobserve(el); } }); },{threshold:0.06, rootMargin:'0px 0px -5% 0px'});
      var cards=[].slice.call(document.querySelectorAll('.stage'));
      cards.forEach(function(c,i){ c.__rev=true; c.classList.add('m-reveal'); c.__stag=Math.min(i,6)*45; io.observe(c); });
    }

    /* ===== 7. SUCCESS sound + haptics (settings toggle) ===== */
    var SND_KEY='prikorm-sound';
    function soundOn(){ try{ return localStorage.getItem(SND_KEY)==='1'; }catch(_){ return false; } }
    var actx=null;
    function ding(kind){ if(!soundOn()) return; try{ actx=actx||new (window.AudioContext||window.webkitAudioContext)(); if(actx.state==='suspended') actx.resume(); var t0=actx.currentTime; var notes=kind==='big'?[880,1174.7,1568]:[1318.5]; notes.forEach(function(f,i){ var o=actx.createOscillator(),g=actx.createGain(); o.type='sine'; o.frequency.value=f; var st=t0+i*0.07; g.gain.setValueAtTime(0.0001,st); g.gain.exponentialRampToValueAtTime(0.09,st+0.012); g.gain.exponentialRampToValueAtTime(0.0001,st+0.22); o.connect(g);g.connect(actx.destination);o.start(st);o.stop(st+0.24); }); }catch(_){} }
    function buzz(ms){ try{ if(navigator.vibrate) navigator.vibrate(ms); }catch(_){} }
    function watchChecks(root){ [].forEach.call((root||document).querySelectorAll('.checkbox'),function(cb){ if(cb.__sw) return; cb.__sw=true; var was=cb.classList.contains('checked'); new MutationObserver(function(){ var now=cb.classList.contains('checked'); if(now&&!was){ ding('tick'); buzz(10); } was=now; }).observe(cb,{attributes:true,attributeFilter:['class']}); }); }
    watchChecks(document);
    function watchMedals(){ [].forEach.call(document.querySelectorAll('.stage-medal'),function(m){ if(m.__sw) return; m.__sw=true; var vis=function(){ return getComputedStyle(m).display!=='none'; }; var was=vis(); new MutationObserver(function(){ var now=vis(); if(now&&!was){ ding('big'); buzz([12,40,18]); } was=now; }).observe(m,{attributes:true,attributeFilter:['style','class']}); }); }
    watchMedals();
    function injectSoundToggle(){ var dr=document.querySelector('.drawer'); if(!dr || dr.querySelector('.m-sound-row')) return; var row=document.createElement('button'); row.type='button'; row.className='drawer-item m-sound-row'; function label(){ return (soundOn()?'🔔':'🔕')+' Звук успеха: '+(soundOn()?'вкл':'выкл'); } row.textContent=label(); row.addEventListener('click',function(e){ e.stopPropagation(); try{ localStorage.setItem(SND_KEY, soundOn()?'0':'1'); }catch(_){}; row.textContent=label(); if(soundOn()) ding('tick'); }); dr.appendChild(row); }
    injectSoundToggle();

    /* ===== 8. THEME toggle spring (icon pop on switch) ===== */
    var tt=document.querySelector('.theme-toggle');
    if(tt){ var html=document.documentElement, lastTheme=html.getAttribute('data-theme');
      new MutationObserver(function(){ var now=html.getAttribute('data-theme'); if(now!==lastTheme){ lastTheme=now; if(reduced()) return; var ico=tt.querySelector('.svgi')||tt; spring({from:0,to:1,damping:0.6,response:0.4,onUpdate:function(p){ var s=0.6+0.4*p, rot=(1-p)*-40; ico.style.transform='scale('+s+') rotate('+rot+'deg)'; }, onComplete:function(){ ico.style.transform=''; }}); } }).observe(html,{attributes:true,attributeFilter:['data-theme']}); }

    /* ===== dynamic rescans (new content) — NO reveal re-add ===== */
    new MutationObserver(function(muts){ var need=false; muts.forEach(function(m){ if(m.addedNodes&&m.addedNodes.length) need=true; }); if(need){ scanPills(); watchChecks(document); watchMedals(); injectSoundToggle(); } }).observe(document.body,{childList:true,subtree:true});
  });
})()

;

(function(){
  function fillHero(h){
    if(h.querySelector('.hero-aurora')) return;
    var au=document.createElement('div'); au.className='hero-aurora';
    au.innerHTML='<b class="b1"></b><b class="b2"></b><b class="b3"></b>';
    h.insertBefore(au, h.firstChild);
    for(var i=0;i<4;i++){ var s=document.createElement('span'); s.className='hero-spark';
      s.style.left=(12+i*22+Math.random()*8)+'%'; s.style.bottom=(10+Math.random()*20)+'%';
      s.style.animation='heroFloatUp '+(7+Math.random()*4)+'s ease-in-out '+(i*1.4)+'s infinite';
      h.appendChild(s);
    }
  }
  function scan(){ [].forEach.call(document.querySelectorAll('.hero'), fillHero); }
  function ready(fn){ if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',fn); else fn(); }
  ready(function(){
    scan();
    new MutationObserver(function(){ scan(); }).observe(document.body,{childList:true,subtree:true});
  });
})();

;

(function(){
  "use strict";
  function ready(fn){ if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',fn); else fn(); }
  ready(function(){

    /* checkbox draw+bounce only when it actually becomes checked */
    function watchCb(cb){
      if(cb.__pw) return; cb.__pw=true;
      var was=cb.classList.contains('checked');
      new MutationObserver(function(){
        var now=cb.classList.contains('checked');
        if(now&&!was){ cb.classList.add('m-just-checked'); setTimeout(function(){ cb.classList.remove('m-just-checked'); }, 480); }
        was=now;
      }).observe(cb,{attributes:true,attributeFilter:['class']});
    }
    function scanCb(){ [].forEach.call(document.querySelectorAll('.checkbox'), watchCb); }
    scanCb();

    /* glass toast: prepend a type icon based on message text */
    var SW='fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"';
    var ICO={
      ok:'<svg viewBox="0 0 24 24" '+SW+' stroke="#5fae5f"><circle cx="12" cy="12" r="9" stroke-opacity=".35"/><path d="M8 12.5l2.5 2.5L16 9"/></svg>',
      err:'<svg viewBox="0 0 24 24" '+SW+' stroke="#e0a33a"><circle cx="12" cy="12" r="9" stroke-opacity=".35"/><path d="M12 7v6M12 16.5v.01"/></svg>',
      info:'<svg viewBox="0 0 24 24" '+SW+' stroke="#3e8fc4"><circle cx="12" cy="12" r="9" stroke-opacity=".35"/><path d="M12 11v5M12 7.5v.01"/></svg>'
    };
    function decorate(toast){
      if(toast.querySelector('.m-toast-ico')) return;
      var txt=toast.textContent||'';
      var t=/не удал|ошибк|не смог|не получ|неверн/i.test(txt) ? 'err' : (/ориентир|уточн|инфо/i.test(txt) ? 'info' : 'ok');
      var ic=document.createElement('span'); ic.className='m-toast-ico'; ic.innerHTML=ICO[t];
      toast.insertBefore(ic, toast.firstChild);
    }
    function watchToast(toast){
      if(toast.__pw) return; toast.__pw=true;
      new MutationObserver(function(){
        if(toast.classList.contains('show')) decorate(toast);
        else { var i=toast.querySelector('.m-toast-ico'); if(i) i.remove(); }
      }).observe(toast,{attributes:true,attributeFilter:['class']});
      if(toast.classList.contains('show')) decorate(toast);
    }
    [].forEach.call(document.querySelectorAll('.toast'), watchToast);

    /* accordion: cooperative measured max-height (node persists across collapse) */
    function watchStage(stage){
      if(stage.__pw) return; stage.__pw=true;
      var b=stage.querySelector('.stage-body'); if(!b) return;
      var was=stage.classList.contains('collapsed');
      b.style.maxHeight = was ? '0px' : 'none'; if(was) b.style.opacity='0';
      new MutationObserver(function(){
        var isCol=stage.classList.contains('collapsed');
        if(isCol===was) return; was=isCol;
        if(isCol){ b.style.maxHeight=b.scrollHeight+'px'; b.offsetHeight; b.style.maxHeight='0px'; b.style.opacity='0'; }
        else { b.style.opacity='1'; b.style.maxHeight=b.scrollHeight+'px';
          var done=function(){ if(!stage.classList.contains('collapsed')) b.style.maxHeight='none'; b.removeEventListener('transitionend',done); };
          b.addEventListener('transitionend',done); setTimeout(done,520); }
      }).observe(stage,{attributes:true,attributeFilter:['class']});
    }
    function scanStages(){ [].forEach.call(document.querySelectorAll('.stage'), watchStage); }
    

    /* rescan on new content */
    new MutationObserver(function(muts){ var need=false; muts.forEach(function(m){ if(m.addedNodes&&m.addedNodes.length) need=true; });
      if(need){ scanCb();  [].forEach.call(document.querySelectorAll('.toast'), watchToast); }
    }).observe(document.body,{childList:true,subtree:true});
  });
})();

;

(function(){
  "use strict";
  function has(n){ try{ return typeof window[n]==='function' || typeof eval(n)!=='undefined'; }catch(e){ return false; } }
  var TKEY='prikorm-diary-timer';
  function kk(key){ try{ return (typeof k==='function')?k(key):key; }catch(e){ return key; } }
  function getTimer(){ try{ return JSON.parse(localStorage.getItem(kk(TKEY))||'null'); }catch(e){ return null; } }
  function setTimer(o){ try{ if(o) localStorage.setItem(kk(TKEY),JSON.stringify(o)); else localStorage.removeItem(kk(TKEY)); }catch(e){} }
  function pad(n){ return String(n).padStart(2,'0'); }
  function liveDur(ms){ var s=Math.max(0,Math.floor(ms/1000)); var h=Math.floor(s/3600), m=Math.floor((s%3600)/60), ss=s%60; return (h? h+':':'')+pad(m)+':'+pad(ss); }
  function durText(ms){ var mins=Math.round(ms/60000); if(mins<1) return 'меньше минуты'; if(mins<60) return mins+' мин'; var h=Math.floor(mins/60), m=mins%60; return h+' ч'+(m? ' '+m+' мин':''); }
  function toMin(t){ var p=(t||'').split(':'); return (+p[0]||0)*60+(+p[1]||0); }
  function hhmm(iso){ if(!iso) return ''; var d=new Date(iso); return pad(d.getHours())+':'+pad(d.getMinutes()); }
  function E(s){ return (typeof esc==='function')? esc(s) : String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];}); }
  function say(m){ if(typeof toast==='function') toast(m); }
  var TYPE_LABEL={feed:'Кормление',sleep:'Сон',diaper:'Подгузник',bath:'Купание',meds:'Лекарство'};
  var TYPE_IC={feed:'🍼',sleep:'😴',diaper:'💧',bath:'🛁',meds:'💊'};
  function srcLabel(s){ return {left:'левая грудь',right:'правая грудь',both:'обе груди',formula:'смесь',expressed:'сцеженное'}[s]||''; }
  function diaperLabel(d){ return {wet:'пописал',dirty:'покакал',both:'и то, и другое'}[d]||''; }
  function computeNote(e){
    var parts=[];
    if(e.type==='sleep'){ if(e.end){ parts.push(durText(new Date(e.end)-new Date(e.time))); parts.push(hhmm(e.time)+'–'+hhmm(e.end)); } }
    else if(e.type==='feed'){ if(e.src) parts.push(srcLabel(e.src)); if(e.vol) parts.push(e.vol+' мл'); if(e.durMin) parts.push(e.durMin+' мин'); }
    else if(e.type==='diaper'){ if(e.diaper) parts.push(diaperLabel(e.diaper)); }
    else if(e.type==='meds'){ if(e.medName) parts.push(e.medName); if(e.medDose) parts.push(e.medDose); }
    if(e.freeNote) parts.push(e.freeNote);
    return parts.join(' · ');
  }

  var tick=null;
  function startTimer(type){
    if(getTimer()){ say('Уже идёт таймер — сначала остановите его'); return; }
    setTimer({type:type,start:new Date().toISOString()});
    if(navigator.vibrate) navigator.vibrate(12);
    if(typeof renderDiary==='function') renderDiary();
  }
  function stopTimer(){
    var t=getTimer(); if(!t) return;
    var start=new Date(t.start), end=new Date();
    if(typeof dyData==='undefined') return;
    var key=dyDateKey(start);
    if(!dyData[key]) dyData[key]=[];
    var e={ id:Date.now().toString(36)+Math.random().toString(36).slice(2,4), time:start.toISOString(), end:end.toISOString(), type:t.type, durMin:Math.max(0,Math.round((end-start)/60000)) };
    e.note=computeNote(e);
    dyData[key].push(e);
    if(typeof dySave==='function') dySave();
    setTimer(null);
    if(navigator.vibrate) navigator.vibrate([10,40,10]);
    if(typeof renderDiary==='function') renderDiary();
    if(t.type==='feed') openStruct(key,e.id); else say('😴 Сон записан: '+durText(end-start));
  }

  function enhance(){
    var vd=document.getElementById('viewDiary'); if(!vd) return;
    var card=document.getElementById('dyTimerCard');
    if(!card){
      card=document.createElement('div'); card.id='dyTimerCard'; card.className='dy-timer';
      var sum=document.getElementById('dySum');
      if(sum&&sum.parentNode){ sum.parentNode.insertBefore(card, sum.nextSibling); }
      else { var wrap=vd.querySelector('.diary-wrap'); if(wrap) wrap.insertBefore(card, wrap.firstChild); else return; }
    }
    renderCard(card);
    var add=document.getElementById('dyAdd');
    if(add){ ['sleep','feed'].forEach(function(tp){ var b=add.querySelector('button[data-type="'+tp+'"]'); if(b && !b.querySelector('.tmr-b')){ var s=document.createElement('span'); s.className='tmr-b'; s.textContent='⏱'; b.appendChild(s); } }); }
  }
  function renderCard(card){
    var t=getTimer();
    if(tick){ clearInterval(tick); tick=null; }
    if(t){
      card.classList.add('run');
      card.innerHTML='<div class="dt-l"><span class="dt-ic">'+TYPE_IC[t.type]+'</span><div><div class="dt-t">Идёт: '+TYPE_LABEL[t.type]+'</div><div class="dt-time" id="dtLive">00:00</div></div></div><button class="dt-stop" type="button">Стоп</button>';
      card.querySelector('.dt-stop').addEventListener('click', stopTimer);
      var upd=function(){ var el=document.getElementById('dtLive'); if(!el){ if(tick){clearInterval(tick);tick=null;} return; } el.textContent=liveDur(new Date()-new Date(t.start)); };
      upd(); tick=setInterval(upd,1000);
    } else {
      card.classList.remove('run');
      card.innerHTML='<div class="dt-idle"><span class="dt-ic">⏱</span><div class="dt-t">Таймер сна и кормления</div></div><div class="dt-start"><button type="button" data-start="sleep">😴 Начать сон</button><button type="button" data-start="feed">🍼 Начать кормление</button></div>';
      card.querySelectorAll('[data-start]').forEach(function(b){ b.addEventListener('click', function(){ startTimer(b.getAttribute('data-start')); }); });
    }
  }

  /* structured modal */
  var modal=null, ctx=null;
  function ensureModal(){
    if(modal) return;
    modal=document.createElement('div'); modal.id='dyStruct';
    modal.innerHTML='<div class="ds-back"></div><div class="ds-card"><div class="ds-h"><h3 id="dsTitle"></h3><button class="ds-x" type="button" aria-label="Закрыть">✕</button></div><div class="ds-body" id="dsBody"></div><div class="ds-foot"><button class="ds-del" type="button">Удалить</button><button class="ds-save" type="button">Сохранить</button></div></div>';
    document.body.appendChild(modal);
    modal.querySelector('.ds-back').addEventListener('click', closeStruct);
    modal.querySelector('.ds-x').addEventListener('click', closeStruct);
    modal.querySelector('.ds-save').addEventListener('click', saveStruct);
    modal.querySelector('.ds-del').addEventListener('click', delStruct);
  }
  function chip(g,v,label,cur){ return '<button type="button" class="ds-chip'+(cur===v?' on':'')+'" data-g="'+g+'" data-v="'+v+'">'+label+'</button>'; }
  function tf(id,label,val){ return '<label class="ds-fl">'+label+'</label><input type="time" id="'+id+'" value="'+(val||'')+'">'; }
  function openStruct(dateKey,id){
    if(typeof dyData==='undefined') return;
    var arr=dyData[dateKey]||[]; var e=arr.find(function(x){return x.id===id;}); if(!e) return;
    ensureModal(); ctx={dateKey:dateKey,id:id};
    document.getElementById('dsTitle').textContent=(TYPE_IC[e.type]||'•')+' '+(TYPE_LABEL[e.type]||e.type);
    var h='';
    h+=tf('dsTime','Время'+(e.type==='sleep'?' начала':''),hhmm(e.time));
    if(e.type==='sleep'){ h+=tf('dsEnd','Время конца',hhmm(e.end)); h+='<div class="ds-hint" id="dsDur"></div>'; }
    if(e.type==='feed'){
      h+='<label class="ds-fl">Чем кормили</label><div class="ds-chips">'+chip('src','left','Левая грудь',e.src)+chip('src','right','Правая грудь',e.src)+chip('src','both','Обе',e.src)+chip('src','formula','Смесь',e.src)+chip('src','expressed','Сцеженное',e.src)+'</div>';
      h+='<div class="ds-two"><div><label class="ds-fl">Объём, мл</label><input type="number" id="dsVol" inputmode="numeric" value="'+(e.vol||'')+'" placeholder="120"></div><div><label class="ds-fl">Длительность, мин</label><input type="number" id="dsDurMin" inputmode="numeric" value="'+(e.durMin||'')+'" placeholder="15"></div></div>';
    }
    if(e.type==='diaper'){ h+='<label class="ds-fl">Что было</label><div class="ds-chips">'+chip('diaper','wet','💧 Пописал',e.diaper)+chip('diaper','dirty','💩 Покакал',e.diaper)+chip('diaper','both','И то, и другое',e.diaper)+'</div>'; }
    if(e.type==='meds'){ h+='<div class="ds-two"><div><label class="ds-fl">Название</label><input type="text" id="dsMedName" value="'+E(e.medName||'')+'" placeholder="Витамин D"></div><div><label class="ds-fl">Доза</label><input type="text" id="dsMedDose" value="'+E(e.medDose||'')+'" placeholder="1 капля"></div></div>'; }
    h+='<label class="ds-fl">Заметка</label><textarea id="dsNote" placeholder="любые детали">'+E(e.freeNote||'')+'</textarea>';
    document.getElementById('dsBody').innerHTML=h;
    document.getElementById('dsBody').querySelectorAll('.ds-chip').forEach(function(c){ c.addEventListener('click',function(){ var g=c.getAttribute('data-g'); modal.querySelectorAll('.ds-chip[data-g="'+g+'"]').forEach(function(x){x.classList.remove('on');}); c.classList.add('on'); }); });
    if(e.type==='sleep'){ var updDur=function(){ var a=document.getElementById('dsTime').value, b=document.getElementById('dsEnd').value, el=document.getElementById('dsDur'); if(a&&b){ var mm=toMin(b)-toMin(a); if(mm<0)mm+=1440; el.textContent='Длительность: '+durText(mm*60000); } else el.textContent=''; }; document.getElementById('dsTime').addEventListener('input',updDur); document.getElementById('dsEnd').addEventListener('input',updDur); updDur(); }
    modal.classList.add('open');
  }
  function selChip(g){ var el=modal.querySelector('.ds-chip.on[data-g="'+g+'"]'); return el?el.getAttribute('data-v'):''; }
  function saveStruct(){
    if(!ctx || typeof dyData==='undefined') return;
    var arr=dyData[ctx.dateKey]||[]; var e=arr.find(function(x){return x.id===ctx.id;}); if(!e){ closeStruct(); return; }
    var tv=document.getElementById('dsTime').value; if(tv){ var d=new Date(e.time); var p=tv.split(':'); d.setHours(+p[0]||0,+p[1]||0,0,0); e.time=d.toISOString(); }
    if(e.type==='sleep'){ var ev=document.getElementById('dsEnd').value; if(ev){ var d2=new Date(e.time); var p2=ev.split(':'); d2.setHours(+p2[0]||0,+p2[1]||0,0,0); if(d2<new Date(e.time)) d2.setDate(d2.getDate()+1); e.end=d2.toISOString(); e.durMin=Math.round((new Date(e.end)-new Date(e.time))/60000); } else { delete e.end; delete e.durMin; } }
    if(e.type==='feed'){ var s=selChip('src'); if(s)e.src=s; else delete e.src; var vol=parseInt(document.getElementById('dsVol').value,10); if(vol>0)e.vol=vol; else delete e.vol; var dm=parseInt(document.getElementById('dsDurMin').value,10); if(dm>0)e.durMin=dm; else delete e.durMin; }
    if(e.type==='diaper'){ var dp=selChip('diaper'); if(dp)e.diaper=dp; else delete e.diaper; }
    if(e.type==='meds'){ var mn=document.getElementById('dsMedName').value.trim(); if(mn)e.medName=mn; else delete e.medName; var md=document.getElementById('dsMedDose').value.trim(); if(md)e.medDose=md; else delete e.medDose; }
    var fn=document.getElementById('dsNote').value.trim(); if(fn)e.freeNote=fn; else delete e.freeNote;
    e.note=computeNote(e);
    if(typeof dySave==='function') dySave();
    closeStruct();
    if(typeof renderDiary==='function') renderDiary();
    say('Сохранено ✅');
  }
  function delStruct(){ if(!ctx || typeof dyData==='undefined') return; dyData[ctx.dateKey]=(dyData[ctx.dateKey]||[]).filter(function(x){return x.id!==ctx.id;}); if(!dyData[ctx.dateKey].length) delete dyData[ctx.dateKey]; if(typeof dySave==='function') dySave(); closeStruct(); if(typeof renderDiary==='function') renderDiary(); }
  function closeStruct(){ if(modal) modal.classList.remove('open'); ctx=null; }
  window.__dyOpenStruct=openStruct;

  function wrapAll(){
    if(typeof renderDiary==='function' && !renderDiary.__w){ var r=renderDiary; window.renderDiary=function(){ var out=r.apply(this,arguments); try{ enhance(); }catch(e){} return out; }; window.renderDiary.__w=1; }
    if(typeof dyAddEntry==='function' && !dyAddEntry.__w){ var a=dyAddEntry; window.dyAddEntry=function(type){ if(type==='sleep'){ startTimer('sleep'); return; } a.call(this,type); if(type==='feed'||type==='meds'||type==='diaper'){ try{ var key=dyDateKey(dySelDate); var arr=dyData[key]||[]; var last=arr[arr.length-1]; if(last && last.type===type && !last.note) openStruct(key,last.id); }catch(e){} } }; window.dyAddEntry.__w=1; }
    if(typeof openDyEdit==='function' && !openDyEdit.__w){ window.openDyEdit=function(dateKey,id){ openStruct(dateKey,id); }; window.openDyEdit.__w=1; }
  }
  function init(){ wrapAll(); try{ enhance(); }catch(e){} }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();

;

(function(){
  "use strict";
  function pad(n){ return String(n).padStart(2,'0'); }
  function durText(min){ if(!min||min<1) return '0 мин'; if(min<60) return min+' мин'; var h=Math.floor(min/60), m=min%60; return h+' ч'+(m? ' '+m+' мин':''); }
  function hhmm(iso){ if(!iso) return ''; var d=new Date(iso); return pad(d.getHours())+':'+pad(d.getMinutes()); }
  function sleepMinOf(e){ if(e.durMin) return e.durMin; if(e.end) return Math.round((new Date(e.end)-new Date(e.time))/60000); return 0; }
  function dayStats(entries){
    var s={sleepMin:0,sleepCount:0,feedCount:0,feedMl:0,diaperCount:0,wet:0,dirty:0,medsCount:0,lastFeed:null};
    (entries||[]).forEach(function(e){
      if(e.type==='sleep'){ s.sleepCount++; s.sleepMin+=sleepMinOf(e); }
      else if(e.type==='feed'){ s.feedCount++; if(e.vol) s.feedMl+=e.vol; if(!s.lastFeed || e.time>s.lastFeed) s.lastFeed=e.time; }
      else if(e.type==='diaper'){ s.diaperCount++; if(e.diaper==='wet') s.wet++; else if(e.diaper==='dirty') s.dirty++; else if(e.diaper==='both'){ s.wet++; s.dirty++; } }
      else if(e.type==='meds'){ s.medsCount++; }
    });
    return s;
  }
  function timelineSvg(entries){
    var W=100, H=26;
    var svg='<svg viewBox="0 0 '+W+' '+H+'" preserveAspectRatio="none" style="width:100%;height:26px">';
    svg+='<rect x="0" y="9" width="'+W+'" height="8" rx="4" fill="rgba(0,0,0,.06)"/>';
    for(var hh=0;hh<=24;hh+=6){ var x=hh/24*W; svg+='<line x1="'+x+'" y1="7" x2="'+x+'" y2="19" stroke="rgba(0,0,0,.12)" stroke-width="0.4"/>'; }
    (entries||[]).forEach(function(e){
      var d=new Date(e.time); var startH=d.getHours()+d.getMinutes()/60;
      if(e.type==='sleep'){ var mins=sleepMinOf(e); var x=startH/24*W; var w=Math.max(0.6,(mins/60)/24*W); svg+='<rect x="'+x.toFixed(2)+'" y="9" width="'+w.toFixed(2)+'" height="8" rx="3" fill="#3E8FC4"/>'; }
      else if(e.type==='feed'){ var xf=startH/24*W; svg+='<circle cx="'+xf.toFixed(2)+'" cy="13" r="1.6" fill="#6FA25C"/>'; }
      else if(e.type==='diaper'){ var xd=startH/24*W; svg+='<line x1="'+xd.toFixed(2)+'" y1="17" x2="'+xd.toFixed(2)+'" y2="20.5" stroke="#E8AC2E" stroke-width="0.9"/>'; }
    });
    svg+='</svg>';
    return svg;
  }
  function renderSummary(){
    var wrap=document.querySelector('#viewDiary .diary-wrap'); if(!wrap) return;
    var card=document.getElementById('dySummary2');
    if(!card){ card=document.createElement('div'); card.id='dySummary2'; card.className='dy-sum2';
      var tc=document.getElementById('dyTimerCard');
      if(tc && tc.parentNode){ tc.parentNode.insertBefore(card, tc.nextSibling); } else { wrap.insertBefore(card, wrap.firstChild); }
    }
    var key, entries;
    try{ key=dyDateKey(dySelDate); entries=(dyData[key]||[]).slice(); }catch(e){ entries=[]; }
    if(!entries.length){ card.innerHTML='<div class="s2-empty">Итоги дня появятся, когда добавите записи.</div>'; return; }
    var s=dayStats(entries);
    var cells='';
    cells+='<div class="s2-cell"><span class="s2-k">Сон</span><span class="s2-v">'+durText(s.sleepMin)+'</span><span class="s2-sub">'+s.sleepCount+' '+plural(s.sleepCount,'раз','раза','раз')+'</span></div>';
    cells+='<div class="s2-cell"><span class="s2-k">Кормления</span><span class="s2-v">'+s.feedCount+'</span><span class="s2-sub">'+(s.feedMl? s.feedMl+' мл':'&nbsp;')+'</span></div>';
    cells+='<div class="s2-cell"><span class="s2-k">Подгузники</span><span class="s2-v">'+s.diaperCount+'</span><span class="s2-sub">'+(s.diaperCount? ('💧 '+s.wet+' · 💩 '+s.dirty):'&nbsp;')+'</span></div>';
    cells+='<div class="s2-cell"><span class="s2-k">Лекарства</span><span class="s2-v">'+s.medsCount+'</span><span class="s2-sub">&nbsp;</span></div>';
    var last='';
    var isToday=false; try{ isToday=dyIsToday(dySelDate); }catch(e){}
    if(isToday && s.lastFeed){ var mins=Math.round((Date.now()-new Date(s.lastFeed))/60000); last='<div class="s2-last">С последнего кормления: '+durText(mins)+' (в '+hhmm(s.lastFeed)+')</div>'; }
    var tl='<div class="s2-tl">'+timelineSvg(entries)+'<div class="s2-tl-lab"><span>0</span><span>6</span><span>12</span><span>18</span><span>24</span></div></div>';
    card.innerHTML='<div class="s2-grid">'+cells+'</div>'+last+tl+'<button class="s2-export" type="button" id="dyExportBtn"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="M8 11l4 4 4-4"/><path d="M5 21h14"/></svg>Показать врачу</button>';
    var b=document.getElementById('dyExportBtn'); if(b) b.addEventListener('click', openReport);
  }
  function plural(n,a,b,c){ n=Math.abs(n)%100; var n1=n%10; if(n>10&&n<20) return c; if(n1>1&&n1<5) return b; if(n1===1) return a; return c; }

  /* ---- doctor export report ---- */
  function lastDays(count){
    var out=[]; var d=new Date(); try{ d=new Date(dySelDate); }catch(e){}
    for(var i=0;i<count;i++){ var dd=new Date(d); dd.setDate(dd.getDate()-i); out.push(dd); }
    return out;
  }
  function fmtRuDate(d){ var MM=['янв','фев','мар','апр','мая','июн','июл','авг','сен','окт','ноя','дек']; var WD=['вс','пн','вт','ср','чт','пт','сб'][d.getDay()]; return d.getDate()+' '+MM[d.getMonth()]+', '+WD; }
  function esc2(s){ return String(s==null?'':s).replace(/[&<>]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;'}[c]; }); }
  function childLabel(){
    try{ var onb=JSON.parse(localStorage.getItem('mama-onb')||'null'); var kid=document.querySelector('.kids .kid.active'); var name=(onb&&onb.name)||(kid?kid.textContent.trim():'Малыш'); return name; }catch(e){ return 'Малыш'; }
  }
  function buildReportSvg(){
    var days=lastDays(7);
    var W=680, pad=28, rowH=34, headH=118, footH=54;
    var H=headH+rowH*(days.length+1)+footH;
    var A='font-family="-apple-system,Segoe UI,Roboto,Arial,sans-serif"';
    var s='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+W+' '+H+'" width="'+W+'" height="'+H+'">';
    s+='<rect x="0" y="0" width="'+W+'" height="'+H+'" fill="#FDF8EF"/>';
    s+='<text x="'+pad+'" y="42" '+A+' font-size="22" font-weight="700" fill="#2A2620">Дневник малыша — для врача</text>';
    s+='<text x="'+pad+'" y="68" '+A+' font-size="14" fill="#6b6355">'+esc2(childLabel())+' · за последние 7 дней</text>';
    var gen=new Date(); s+='<text x="'+pad+'" y="88" '+A+' font-size="12" fill="#8a8073">Сформировано: '+pad(gen.getDate())+'.'+pad(gen.getMonth()+1)+'.'+gen.getFullYear()+'</text>';
    var cols=[pad, 190, 320, 430, 545];
    var heads=['Дата','Сон','Кормления','Подгузники','Лекарства'];
    var y=headH;
    s+='<line x1="'+pad+'" y1="'+(y-8)+'" x2="'+(W-pad)+'" y2="'+(y-8)+'" stroke="#EDE4D5" stroke-width="1"/>';
    heads.forEach(function(h,i){ s+='<text x="'+cols[i]+'" y="'+(y+14)+'" '+A+' font-size="12" font-weight="700" fill="#8a8073">'+h+'</text>'; });
    y+=rowH;
    days.forEach(function(d){
      var key; try{ key=dyDateKey(d); }catch(e){ key=''; }
      var st=dayStats(dyData[key]||[]);
      s+='<line x1="'+pad+'" y1="'+(y-rowH+8)+'" x2="'+(W-pad)+'" y2="'+(y-rowH+8)+'" stroke="#F2EBDD" stroke-width="1"/>';
      s+='<text x="'+cols[0]+'" y="'+y+'" '+A+' font-size="13" fill="#2A2620">'+esc2(fmtRuDate(d))+'</text>';
      s+='<text x="'+cols[1]+'" y="'+y+'" '+A+' font-size="13" fill="#2A2620">'+esc2(st.sleepCount? durText(st.sleepMin):'—')+'</text>';
      s+='<text x="'+cols[2]+'" y="'+y+'" '+A+' font-size="13" fill="#2A2620">'+(st.feedCount? (st.feedCount+(st.feedMl? ' · '+st.feedMl+' мл':'')):'—')+'</text>';
      s+='<text x="'+cols[3]+'" y="'+y+'" '+A+' font-size="13" fill="#2A2620">'+(st.diaperCount? st.diaperCount:'—')+'</text>';
      s+='<text x="'+cols[4]+'" y="'+y+'" '+A+' font-size="13" fill="#2A2620">'+(st.medsCount? st.medsCount:'—')+'</text>';
      y+=rowH;
    });
    s+='<text x="'+pad+'" y="'+(y+22)+'" '+A+' font-size="10.5" fill="#8a8073">Данные внесены родителем в приложении «Мама рядом». Справочно, не является мед. документом.</text>';
    s+='</svg>';
    return {svg:s, w:W, h:H};
  }
  var reportEl=null, curSvg=null;
  function ensureReport(){
    if(reportEl) return;
    reportEl=document.createElement('div'); reportEl.id='dyReport';
    reportEl.innerHTML='<div class="rp-card"><div class="rp-head"><h3>Отчёт для врача</h3><button class="rp-x" type="button" aria-label="Закрыть">✕</button></div><div class="rp-preview" id="rpPreview"></div><div class="rp-actions"><button class="rp-btn rp-png" type="button">Скачать картинку</button><button class="rp-btn rp-print" type="button">Печать / PDF</button></div></div>';
    document.body.appendChild(reportEl);
    reportEl.querySelector('.rp-x').addEventListener('click', closeReport);
    reportEl.addEventListener('click', function(e){ if(e.target===reportEl) closeReport(); });
    reportEl.querySelector('.rp-png').addEventListener('click', downloadPng);
    reportEl.querySelector('.rp-print').addEventListener('click', printReport);
  }
  function openReport(){ ensureReport(); var r=buildReportSvg(); curSvg=r; document.getElementById('rpPreview').innerHTML=r.svg; reportEl.classList.add('open'); }
  function closeReport(){ if(reportEl) reportEl.classList.remove('open'); }
  function downloadPng(){
    if(!curSvg) return;
    var img=new Image();
    var blob=new Blob([curSvg.svg],{type:'image/svg+xml;charset=utf-8'});
    var url=URL.createObjectURL(blob);
    img.onload=function(){
      var sc=2; var c=document.createElement('canvas'); c.width=curSvg.w*sc; c.height=curSvg.h*sc;
      var ctx=c.getContext('2d'); ctx.fillStyle='#FDF8EF'; ctx.fillRect(0,0,c.width,c.height); ctx.drawImage(img,0,0,c.width,c.height);
      URL.revokeObjectURL(url);
      try{ c.toBlob(function(b){ var a=document.createElement('a'); a.href=URL.createObjectURL(b); a.download='dnevnik-dlya-vracha.png'; document.body.appendChild(a); a.click(); a.remove(); if(typeof toast==='function') toast('Картинка сохранена 📷'); }); }
      catch(e){ var a2=document.createElement('a'); a2.href=c.toDataURL('image/png'); a2.download='dnevnik-dlya-vracha.png'; a2.click(); }
    };
    img.onerror=function(){ if(typeof toast==='function') toast('Не удалось сделать картинку'); };
    img.src=url;
  }
  function printReport(){
    if(!curSvg) return;
    var w=window.open('','_blank');
    if(!w){ if(typeof toast==='function') toast('Разрешите всплывающие окна для печати'); return; }
    w.document.write('<!doctype html><html><head><meta charset="utf-8"><title>Дневник для врача</title><style>body{margin:0;padding:16px;background:#fff}svg{width:100%;height:auto}</style></head><body>'+curSvg.svg+'<script>window.onload=function(){setTimeout(function(){window.print();},250);}<\/script></body></html>');
    w.document.close();
  }

  function wrapSummary(){
    if(typeof renderDiary==='function' && !renderDiary.__w2){ var r=renderDiary; window.renderDiary=function(){ var o=r.apply(this,arguments); try{ renderSummary(); }catch(e){} return o; }; window.renderDiary.__w2=1; }
  }
  function init(){ wrapSummary(); try{ if(document.getElementById('viewDiary')) renderSummary(); }catch(e){} }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();

;

(function(){
  "use strict";
  var T={
    feed:{ic:'🤱',label:'Кормление грудью',c:'--sage'},
    bottle:{ic:'🍼',label:'Бутылочка',c:'--sage'},
    solids:{ic:'🥣',label:'Прикорм',c:'--sage'},
    pump:{ic:'🥛',label:'Сцеживание',c:'--sage'},
    diaper:{ic:'💧',label:'Подгузник',c:'--sky'},
    sleep:{ic:'😴',label:'Сон',c:'--sky'},
    walk:{ic:'🚼',label:'Прогулка',c:'--sky'},
    bath:{ic:'🛁',label:'Купание',c:'--sky'},
    doctor:{ic:'🩺',label:'Визит врача',c:'--sage'},
    vaccine:{ic:'💉',label:'Прививка',c:'--sage'},
    temp:{ic:'🌡',label:'Температура',c:'--rust'},
    illness:{ic:'🤒',label:'Болезнь',c:'--rust'},
    meds:{ic:'💊',label:'Лекарство',c:'--sage'},
    mood:{ic:'🙂',label:'Настроение',c:'--butter'}
  };
  var PICK=[
    {cat:'Еда', c:'--sage', items:[{t:'feed'},{t:'bottle'},{t:'solids'},{t:'pump'}]},
    {cat:'Активность', c:'--sky', items:[{t:'diaper'},{t:'sleep'},{t:'walk'},{t:'bath'}]},
    {cat:'Здоровье', c:'--sage', items:[{t:'doctor'},{t:'vaccine'},{t:'temp'},{t:'illness'},{t:'meds'}]},
    {cat:'Настроение', c:'--butter', items:[
      {t:'mood',v:'happy',ic:'😄',label:'Весёлый'},
      {t:'mood',v:'normal',ic:'🙂',label:'Нормальный'},
      {t:'mood',v:'sad',ic:'😔',label:'Грустный'},
      {t:'mood',v:'cry',ic:'😭',label:'Плач'}
    ]}
  ];
  function pad(n){ return String(n).padStart(2,'0'); }
  function hhmm(iso){ if(!iso) return ''; var d=new Date(iso); return pad(d.getHours())+':'+pad(d.getMinutes()); }
  function durText(min){ if(!min||min<1) return '0 мин'; if(min<60) return min+' мин'; var h=Math.floor(min/60), m=min%60; return h+' ч'+(m? ' '+m+' мин':''); }
  function toMin(t){ var p=(t||'').split(':'); return (+p[0]||0)*60+(+p[1]||0); }
  function E(s){ return (typeof esc==='function')? esc(s) : String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];}); }
  function say(m){ if(typeof toast==='function') toast(m); }
  function sideLabel(s){ return {left:'левая грудь',right:'правая грудь',both:'обе груди',formula:'смесь',expressed:'сцеженное'}[s]||''; }
  function contentLabel(s){ return {formula:'смесь',expressed:'сцеженное',water:'вода',juice:'сок'}[s]||''; }
  function moodLabel(s){ return {happy:'весёлый',normal:'нормальный',sad:'грустный',cry:'плач'}[s]||''; }
  function diaperLabel(d){ return {wet:'пописал',dirty:'покакал',both:'и то, и другое'}[d]||''; }
  function computeNote(e){
    var p=[];
    switch(e.type){
      case 'feed': if(e.src)p.push(sideLabel(e.src)); if(e.vol)p.push(e.vol+' мл'); if(e.durMin)p.push(e.durMin+' мин'); break;
      case 'bottle': if(e.content)p.push(contentLabel(e.content)); if(e.vol)p.push(e.vol+' мл'); break;
      case 'solids': if(e.product)p.push(e.product); break;
      case 'pump': if(e.src)p.push(sideLabel(e.src)); if(e.vol)p.push(e.vol+' мл'); if(e.durMin)p.push(e.durMin+' мин'); break;
      case 'sleep': if(e.end){ p.push(durText(Math.round((new Date(e.end)-new Date(e.time))/60000))); p.push(hhmm(e.time)+'–'+hhmm(e.end)); } break;
      case 'walk': if(e.durMin)p.push(e.durMin+' мин'); break;
      case 'diaper': if(e.diaper)p.push(diaperLabel(e.diaper)); break;
      case 'vaccine': if(e.vname)p.push(e.vname); break;
      case 'temp': if(e.temp)p.push(e.temp+' °'); break;
      case 'meds': if(e.medName)p.push(e.medName); if(e.medDose)p.push(e.medDose); break;
      case 'mood': if(e.mood)p.push(moodLabel(e.mood)); break;
    }
    if(e.freeNote) p.push(e.freeNote);
    return p.join(' · ');
  }

  /* ---- picker ---- */
  var picker=null;
  function ensurePicker(){
    if(picker) return;
    picker=document.createElement('div'); picker.id='dyPicker';
    var body='<div class="pk-card"><div class="pk-h"><h3>Добавить событие</h3><button class="pk-x" type="button" aria-label="Закрыть">✕</button></div>';
    PICK.forEach(function(g){
      body+='<div class="pk-cat">'+g.cat+'</div><div class="pk-grid">';
      g.items.forEach(function(it,idx){
        var ic=it.ic||T[it.t].ic; var lab=it.label||T[it.t].label; var col=g.c;
        body+='<button class="pk-item" type="button" data-cat="'+PICK.indexOf(g)+'" data-idx="'+idx+'"><span class="pk-ic" style="background:color-mix(in srgb, var('+col+') 20%, transparent)">'+ic+'</span><span class="pk-lab">'+lab+'</span></button>';
      });
      body+='</div>';
    });
    body+='</div>';
    picker.innerHTML=body;
    document.body.appendChild(picker);
    picker.querySelector('.pk-x').addEventListener('click', closePicker);
    picker.addEventListener('click', function(e){ if(e.target===picker) closePicker(); });
    picker.querySelectorAll('.pk-item').forEach(function(b){
      b.addEventListener('click', function(){ var g=PICK[+b.getAttribute('data-cat')]; var it=g.items[+b.getAttribute('data-idx')]; addEvent(it); });
    });
  }
  function openPicker(){ ensurePicker(); picker.classList.add('open'); }
  function closePicker(){ if(picker) picker.classList.remove('open'); }

  function addEvent(it){
    if(typeof dyData==='undefined') return;
    var key=dyDateKey(dySelDate); if(!dyData[key]) dyData[key]=[];
    var now=new Date(); var dt=new Date(dySelDate); dt.setHours(now.getHours(),now.getMinutes(),0,0);
    var e={ id:Date.now().toString(36)+Math.random().toString(36).slice(2,4), time:dt.toISOString(), type:it.t };
    if(it.v) e.mood=it.v;
    e.note=computeNote(e);
    dyData[key].push(e);
    if(typeof dySave==='function') dySave();
    if(navigator.vibrate) navigator.vibrate(12);
    closePicker();
    if(typeof renderDiary==='function') renderDiary();
    if(it.t==='mood'){ say((T.mood.ic)+' Настроение записано'); }
    else openStruct(key, e.id);
  }

  /* ---- struct modal (all types) ---- */
  var modal=null, ctx=null;
  function ensureModal(){
    if(modal) return;
    modal=document.createElement('div'); modal.id='dyStruct3';
    modal.innerHTML='<div class="d3-back"></div><div class="d3-card"><div class="d3-h"><h3 id="d3Title"></h3><button class="d3-x" type="button" aria-label="Закрыть">✕</button></div><div class="d3-body" id="d3Body"></div><div class="d3-foot"><button class="d3-del" type="button">Удалить</button><button class="d3-save" type="button">Сохранить</button></div></div>';
    document.body.appendChild(modal);
    modal.querySelector('.d3-back').addEventListener('click', closeStruct);
    modal.querySelector('.d3-x').addEventListener('click', closeStruct);
    modal.querySelector('.d3-save').addEventListener('click', saveStruct);
    modal.querySelector('.d3-del').addEventListener('click', delStruct);
  }
  function chip(g,v,label,cur){ return '<button type="button" class="d3-chip'+(cur===v?' on':'')+'" data-g="'+g+'" data-v="'+v+'">'+label+'</button>'; }
  function tf(id,label,val){ return '<label class="d3-fl">'+label+'</label><input type="time" id="'+id+'" value="'+(val||'')+'">'; }
  function chips(g,arr,cur){ var h='<div class="d3-chips">'; arr.forEach(function(o){ h+=chip(g,o[0],o[1],cur); }); return h+'</div>'; }
  function openStruct(dateKey,id){
    if(typeof dyData==='undefined') return;
    var arr=dyData[dateKey]||[]; var e=arr.find(function(x){return x.id===id;}); if(!e) return;
    ensureModal(); ctx={dateKey:dateKey,id:id};
    var t=T[e.type]||{ic:'•',label:e.type};
    document.getElementById('d3Title').innerHTML='<span>'+t.ic+'</span> '+t.label;
    var h='';
    h+=tf('d3Time','Время'+(e.type==='sleep'?' начала':''),hhmm(e.time));
    if(e.type==='sleep'){ h+=tf('d3End','Время конца',hhmm(e.end)); h+='<div class="d3-hint" id="d3Dur"></div>'; }
    if(e.type==='feed'){ h+='<label class="d3-fl">Грудь</label>'+chips('side',[['left','Левая'],['right','Правая'],['both','Обе'],['formula','Смесь'],['expressed','Сцеженное']],e.src);
      h+='<div class="d3-two"><div><label class="d3-fl">Объём, мл</label><input type="number" id="d3Vol" inputmode="numeric" value="'+(e.vol||'')+'" placeholder="120"></div><div><label class="d3-fl">Длительность, мин</label><input type="number" id="d3Dm" inputmode="numeric" value="'+(e.durMin||'')+'" placeholder="15"></div></div>'; }
    if(e.type==='bottle'){ h+='<label class="d3-fl">Содержимое</label>'+chips('content',[['formula','Смесь'],['expressed','Сцеженное'],['water','Вода'],['juice','Сок']],e.content);
      h+='<label class="d3-fl">Объём, мл</label><input type="number" id="d3Vol" inputmode="numeric" value="'+(e.vol||'')+'" placeholder="120">'; }
    if(e.type==='solids'){ h+='<label class="d3-fl">Продукт</label><input type="text" id="d3Prod" value="'+E(e.product||'')+'" placeholder="напр. брокколи"><div class="d3-hint">Полный дневник прикорма — в разделе «Прикорм».</div>'; }
    if(e.type==='pump'){ h+='<label class="d3-fl">Грудь</label>'+chips('side',[['left','Левая'],['right','Правая'],['both','Обе']],e.src);
      h+='<div class="d3-two"><div><label class="d3-fl">Объём, мл</label><input type="number" id="d3Vol" inputmode="numeric" value="'+(e.vol||'')+'" placeholder="80"></div><div><label class="d3-fl">Длительность, мин</label><input type="number" id="d3Dm" inputmode="numeric" value="'+(e.durMin||'')+'" placeholder="15"></div></div>'; }
    if(e.type==='diaper'){ h+='<label class="d3-fl">Что было</label>'+chips('diaper',[['wet','💧 Пописал'],['dirty','💩 Покакал'],['both','И то, и другое']],e.diaper); }
    if(e.type==='walk'){ h+='<label class="d3-fl">Длительность, мин</label><input type="number" id="d3Dm" inputmode="numeric" value="'+(e.durMin||'')+'" placeholder="40">'; }
    if(e.type==='vaccine'){ h+='<label class="d3-fl">Название</label><input type="text" id="d3Vn" value="'+E(e.vname||'')+'" placeholder="напр. АКДС"><div class="d3-hint">Календарь прививок — в разделе «Прививки».</div>'; }
    if(e.type==='temp'){ h+='<label class="d3-fl">Температура, °C</label><input type="number" id="d3Tv" inputmode="decimal" step="0.1" value="'+(e.temp||'')+'" placeholder="37.2">'; }
    if(e.type==='meds'){ h+='<div class="d3-two"><div><label class="d3-fl">Название</label><input type="text" id="d3Mn" value="'+E(e.medName||'')+'" placeholder="Витамин D"></div><div><label class="d3-fl">Доза</label><input type="text" id="d3Md" value="'+E(e.medDose||'')+'" placeholder="1 капля"></div></div>'; }
    if(e.type==='mood'){ h+='<label class="d3-fl">Настроение</label>'+chips('mood',[['happy','😄 Весёлый'],['normal','🙂 Нормальный'],['sad','😔 Грустный'],['cry','😭 Плач']],e.mood); }
    h+='<label class="d3-fl">Заметка</label><textarea id="d3Note" placeholder="любые детали">'+E(e.freeNote||'')+'</textarea>';
    document.getElementById('d3Body').innerHTML=h;
    document.getElementById('d3Body').querySelectorAll('.d3-chip').forEach(function(c){ c.addEventListener('click',function(){ var g=c.getAttribute('data-g'); modal.querySelectorAll('.d3-chip[data-g="'+g+'"]').forEach(function(x){x.classList.remove('on');}); c.classList.add('on'); }); });
    if(e.type==='sleep'){ var upd=function(){ var a=document.getElementById('d3Time').value,b=document.getElementById('d3End').value,el=document.getElementById('d3Dur'); if(a&&b){ var mm=toMin(b)-toMin(a); if(mm<0)mm+=1440; el.textContent='Длительность: '+durText(mm); } else el.textContent=''; }; document.getElementById('d3Time').addEventListener('input',upd); document.getElementById('d3End').addEventListener('input',upd); upd(); }
    modal.classList.add('open');
  }
  function selChip(g){ var el=modal.querySelector('.d3-chip.on[data-g="'+g+'"]'); return el?el.getAttribute('data-v'):''; }
  function val(id){ var el=document.getElementById(id); return el?el.value:''; }
  function numOf(id){ var n=parseFloat(val(id)); return isNaN(n)?0:n; }
  function saveStruct(){
    if(!ctx || typeof dyData==='undefined') return;
    var arr=dyData[ctx.dateKey]||[]; var e=arr.find(function(x){return x.id===ctx.id;}); if(!e){ closeStruct(); return; }
    var tv=val('d3Time'); if(tv){ var d=new Date(e.time); var p=tv.split(':'); d.setHours(+p[0]||0,+p[1]||0,0,0); e.time=d.toISOString(); }
    if(e.type==='sleep'){ var ev=val('d3End'); if(ev){ var d2=new Date(e.time); var p2=ev.split(':'); d2.setHours(+p2[0]||0,+p2[1]||0,0,0); if(d2<new Date(e.time)) d2.setDate(d2.getDate()+1); e.end=d2.toISOString(); e.durMin=Math.round((new Date(e.end)-new Date(e.time))/60000); } else { delete e.end; delete e.durMin; } }
    if(e.type==='feed'||e.type==='pump'){ var s=selChip('side'); if(s)e.src=s; else delete e.src; var v=Math.round(numOf('d3Vol')); if(v>0)e.vol=v; else delete e.vol; var dm=Math.round(numOf('d3Dm')); if(dm>0)e.durMin=dm; else delete e.durMin; }
    if(e.type==='bottle'){ var ct=selChip('content'); if(ct)e.content=ct; else delete e.content; var v2=Math.round(numOf('d3Vol')); if(v2>0)e.vol=v2; else delete e.vol; }
    if(e.type==='solids'){ var pr=val('d3Prod').trim(); if(pr)e.product=pr; else delete e.product; }
    if(e.type==='walk'){ var wd=Math.round(numOf('d3Dm')); if(wd>0)e.durMin=wd; else delete e.durMin; }
    if(e.type==='diaper'){ var dp=selChip('diaper'); if(dp)e.diaper=dp; else delete e.diaper; }
    if(e.type==='vaccine'){ var vn=val('d3Vn').trim(); if(vn)e.vname=vn; else delete e.vname; }
    if(e.type==='temp'){ var tv2=numOf('d3Tv'); if(tv2>0)e.temp=tv2; else delete e.temp; }
    if(e.type==='meds'){ var mn=val('d3Mn').trim(); if(mn)e.medName=mn; else delete e.medName; var md=val('d3Md').trim(); if(md)e.medDose=md; else delete e.medDose; }
    if(e.type==='mood'){ var mo=selChip('mood'); if(mo)e.mood=mo; else delete e.mood; }
    var fn=val('d3Note').trim(); if(fn)e.freeNote=fn; else delete e.freeNote;
    e.note=computeNote(e);
    if(typeof dySave==='function') dySave();
    closeStruct();
    if(typeof renderDiary==='function') renderDiary();
    say('Сохранено ✅');
  }
  function delStruct(){ if(!ctx||typeof dyData==='undefined') return; dyData[ctx.dateKey]=(dyData[ctx.dateKey]||[]).filter(function(x){return x.id!==ctx.id;}); if(!dyData[ctx.dateKey].length) delete dyData[ctx.dateKey]; if(typeof dySave==='function') dySave(); closeStruct(); if(typeof renderDiary==='function') renderDiary(); }
  function closeStruct(){ if(modal) modal.classList.remove('open'); ctx=null; }

  /* ---- diary integration ---- */
  function enhance(){
    var wrap=document.querySelector('#viewDiary .diary-wrap'); if(!wrap) return;
    if(!document.getElementById('dyAddBtn2')){
      var b=document.createElement('button'); b.id='dyAddBtn2'; b.type='button'; b.className='dy-addbtn'; b.textContent='＋ Добавить событие';
      b.addEventListener('click', openPicker);
      var list=document.getElementById('dyList');
      if(list && list.parentNode) list.parentNode.insertBefore(b, list); else wrap.appendChild(b);
    }
    fixList();
  }
  function fixList(){
    var key; try{ key=dyDateKey(dySelDate); }catch(e){ return; }
    var arr=dyData[key]||[]; var map={}; arr.forEach(function(e){ map[e.id]=e; });
    document.querySelectorAll('#dyList .diary-entry').forEach(function(li){
      var e=map[li.getAttribute('data-id')]; if(!e) return; var t=T[e.type]; if(!t) return;
      var icon=(e.type==='mood') ? ({happy:'😄',normal:'🙂',sad:'😔',cry:'😭'}[e.mood]||t.ic) : t.ic;
      var ic=li.querySelector('.de-ic'); if(ic) ic.textContent=icon;
      var lab=li.querySelector('.de-label'); if(lab){ lab.innerHTML=E(t.label)+(e.note?'<span class="de-note">'+E(e.note)+'</span>':''); }
    });
  }
  function wrapAll(){
    if(typeof renderDiary==='function' && !renderDiary.__w3){ var r=renderDiary; window.renderDiary=function(){ var o=r.apply(this,arguments); try{ enhance(); }catch(e){} return o; }; window.renderDiary.__w3=1; }
    if(typeof openDyEdit==='function' && !openDyEdit.__w3){ window.openDyEdit=function(dateKey,id){ openStruct(dateKey,id); }; window.openDyEdit.__w3=1; }
  }
  function init(){ wrapAll(); try{ if(document.getElementById('viewDiary')) enhance(); }catch(e){} }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();

;

(function(){
  "use strict";
  var GKEY='mama-growth';
  var METRICS=[
    {k:'weight', label:'Вес', short:'Вес', unit:'кг', step:'0.01'},
    {k:'height', label:'Рост', short:'Рост', unit:'см', step:'0.1'},
    {k:'head', label:'Окр. головы', short:'Голова', unit:'см', step:'0.1'}
  ];
  function M(k){ for(var i=0;i<METRICS.length;i++) if(METRICS[i].k===k) return METRICS[i]; return METRICS[0]; }
  function kk(key){ try{ return (typeof k==='function')?k(key):key; }catch(e){ return key; } }
  function getG(){ try{ var o=JSON.parse(localStorage.getItem(kk(GKEY))||'null'); if(!o||typeof o!=='object') o={}; ['weight','height','head'].forEach(function(m){ if(!Array.isArray(o[m])) o[m]=[]; }); return o; }catch(e){ return {weight:[],height:[],head:[]}; } }
  function setG(o){ try{ localStorage.setItem(kk(GKEY), JSON.stringify(o)); }catch(e){} }
  function say(m){ if(typeof toast==='function') toast(m); }
  function pad(n){ return String(n).padStart(2,'0'); }
  function todayStr(){ var d=new Date(); return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate()); }
  function fmtD(s){ if(!s) return ''; var p=s.split('-'); var MM=['янв','фев','мар','апр','мая','июн','июл','авг','сен','окт','ноя','дек']; return (+p[2])+' '+MM[(+p[1])-1]; }
  function fmtV(v){ return (Math.round(v*100)/100).toString().replace('.',','); }
  function sorted(arr){ return (arr||[]).slice().sort(function(a,b){ return a.d<b.d?-1:(a.d>b.d?1:0); }); }

  var cur='weight', card=null;
  function chartSvg(pts, color){
    var W=320,H=120,padX=14,padTop=14,padBot=18;
    if(!pts.length) return '';
    if(pts.length===1){ return '<svg viewBox="0 0 '+W+' '+H+'"><circle cx="'+(W/2)+'" cy="'+(H/2)+'" r="5" fill="var('+color+')"/><text x="'+(W/2)+'" y="'+(H/2-12)+'" text-anchor="middle" font-size="13" fill="#8a8073" font-family="sans-serif">одно измерение</text></svg>'; }
    var vals=pts.map(function(p){return p.v;});
    var mn=Math.min.apply(null,vals), mx=Math.max.apply(null,vals); var rng=(mx-mn)||1;
    var n=pts.length;
    function X(i){ return padX + i/(n-1)*(W-2*padX); }
    function Y(v){ return padTop + (1-(v-mn)/rng)*(H-padTop-padBot); }
    var d=''; pts.forEach(function(p,i){ d+=(i?'L':'M')+X(i).toFixed(1)+' '+Y(p.v).toFixed(1)+' '; });
    var area='M'+X(0).toFixed(1)+' '+(H-padBot)+' '+pts.map(function(p,i){return 'L'+X(i).toFixed(1)+' '+Y(p.v).toFixed(1);}).join(' ')+' L'+X(n-1).toFixed(1)+' '+(H-padBot)+' Z';
    var dots=pts.map(function(p,i){ return '<circle cx="'+X(i).toFixed(1)+'" cy="'+Y(p.v).toFixed(1)+'" r="3" fill="var('+color+')"/>'; }).join('');
    return '<svg viewBox="0 0 '+W+' '+H+'"><path d="'+area+'" fill="var('+color+')" opacity="0.10"/><path d="'+d+'" fill="none" stroke="var('+color+')" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"/>'+dots+'</svg>';
  }
  function render(){
    if(!card) return;
    var g=getG(); var m=M(cur); var pts=sorted(g[cur]);
    var tabs=METRICS.map(function(x){ return '<button class="g-tab'+(x.k===cur?' on':'')+'" type="button" data-m="'+x.k+'">'+x.short+'</button>'; }).join('');
    var head='<div class="g-t">📏 Показатели роста</div><div class="g-tabs">'+tabs+'</div>';
    var body;
    if(!pts.length){
      body='<div class="g-empty">Нет измерений «'+m.label.toLowerCase()+'». Добавьте первое.</div>';
    } else {
      var last=pts[pts.length-1]; var prev=pts.length>1?pts[pts.length-2]:null;
      var delta=''; if(prev){ var dv=last.v-prev.v; var cls=dv>=0?'up':'down'; delta='<span class="g-delta '+cls+'">'+(dv>=0?'+':'−')+fmtV(Math.abs(dv))+' '+m.unit+'</span>'; }
      var cur1='<div class="g-cur"><span class="g-val">'+fmtV(last.v)+'</span><span class="g-unit">'+m.unit+'</span>'+delta+'</div><div class="g-date">последнее: '+fmtD(last.d)+'</div>';
      var chart='<div class="g-chart">'+chartSvg(pts, m.k==='weight'?'--rust':(m.k==='height'?'--sky':'--sage'))+'</div><div class="g-xlab"><span>'+fmtD(pts[0].d)+'</span><span>'+fmtD(last.d)+'</span></div>';
      var hist='<div class="g-hist">'+pts.slice().reverse().slice(0,6).map(function(p){ return '<div class="g-row"><span>'+fmtD(p.d)+'</span><span><b>'+fmtV(p.v)+'</b> '+m.unit+' <button class="g-del" data-d="'+p.d+'" aria-label="Удалить">✕</button></span></div>'; }).join('')+'</div>';
      body=cur1+chart+hist;
    }
    card.innerHTML=head+body+'<button class="g-add" type="button">＋ Добавить измерение</button>';
    card.querySelectorAll('.g-tab').forEach(function(b){ b.addEventListener('click', function(){ cur=b.getAttribute('data-m'); render(); }); });
    card.querySelector('.g-add').addEventListener('click', function(){ openAdd(); });
    card.querySelectorAll('.g-del').forEach(function(b){ b.addEventListener('click', function(){ var dd=b.getAttribute('data-d'); var gg=getG(); gg[cur]=gg[cur].filter(function(p){ return p.d!==dd; }); setG(gg); render(); }); });
  }
  var addEl=null;
  function openAdd(){
    var m=M(cur);
    if(!addEl){ addEl=document.createElement('div'); addEl.id='gAdd'; addEl.innerHTML='<div class="ga-back"></div><div class="ga-card"><h3 id="gaTitle"></h3><label id="gaVl"></label><input type="number" id="gaVal" inputmode="decimal"><label>Дата</label><input type="date" id="gaDate"><button class="ga-save" type="button">Сохранить</button></div>'; document.body.appendChild(addEl);
      addEl.querySelector('.ga-back').addEventListener('click', function(){ addEl.classList.remove('open'); });
      addEl.querySelector('.ga-save').addEventListener('click', saveAdd);
    }
    document.getElementById('gaTitle').textContent=m.label;
    document.getElementById('gaVl').textContent='Значение, '+m.unit;
    var vi=document.getElementById('gaVal'); vi.value=''; vi.step=m.step; vi.placeholder=(m.k==='weight'?'напр. 6,2':'напр. 62');
    document.getElementById('gaDate').value=todayStr();
    addEl.classList.add('open');
    setTimeout(function(){ vi.focus(); },50);
  }
  function saveAdd(){
    var raw=(document.getElementById('gaVal').value||'').replace(',','.'); var v=parseFloat(raw); var d=document.getElementById('gaDate').value||todayStr();
    if(!(v>0)){ document.getElementById('gaVal').focus(); return; }
    var g=getG(); g[cur]=g[cur].filter(function(p){ return p.d!==d; }); g[cur].push({d:d, v:v}); setG(g);
    addEl.classList.remove('open'); render(); say('Сохранено ✅');
  }

  function enhance(){
    var wrap=document.querySelector('#viewDiary .diary-wrap'); if(!wrap) return;
    if(!card){
      card=document.createElement('div'); card.id='dyGrowth';
      var anchor=document.getElementById('dySummary2')||document.getElementById('dyTimerCard');
      if(anchor && anchor.parentNode){ anchor.parentNode.insertBefore(card, anchor.nextSibling); } else { wrap.appendChild(card); }
      render();
    }
  }
  window.__openGrowthAdd=openAdd;
  if(typeof renderDiary==='function' && !renderDiary.__wg){ var r=renderDiary; window.renderDiary=function(){ var o=r.apply(this,arguments); try{ enhance(); if(card) render(); }catch(e){} return o; }; window.renderDiary.__wg=1; }
  function init(){ try{ if(document.getElementById('viewDiary')) enhance(); }catch(e){} }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();

;

(function(){
  "use strict";
  var MKEY='mama-milestones';
  var PRESETS=[
    {e:'😊', t:'Первая улыбка'},
    {e:'🙆', t:'Держит голову'},
    {e:'🔄', t:'Перевернулся'},
    {e:'🪑', t:'Сел сам'},
    {e:'🦷', t:'Первый зуб'},
    {e:'🐛', t:'Пополз'},
    {e:'🧍', t:'Встал у опоры'},
    {e:'👏', t:'Хлопает в ладоши'},
    {e:'🗣️', t:'Первое слово'},
    {e:'👣', t:'Первый шаг'},
    {e:'🥄', t:'Первый прикорм'},
    {e:'🎂', t:'Первый год'}
  ];
  function kk(key){ try{ return (typeof k==='function')?k(key):key; }catch(e){ return key; } }
  function getM(){ try{ var a=JSON.parse(localStorage.getItem(kk(MKEY))||'null'); return Array.isArray(a)?a:[]; }catch(e){ return []; } }
  function setM(a){ try{ localStorage.setItem(kk(MKEY), JSON.stringify(a)); }catch(e){} }
  function say(m){ if(typeof toast==='function') toast(m); }
  function ec(s){ try{ return (typeof esc==='function')?esc(s):String(s); }catch(e){ return String(s); } }
  function pad(n){ return String(n).padStart(2,'0'); }
  function todayStr(){ var d=new Date(); return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate()); }
  var MM=['янв','фев','мар','апр','мая','июн','июл','авг','сен','окт','ноя','дек'];
  function fmtD(s){ if(!s) return ''; var p=s.split('-'); if(p.length<3) return s; return (+p[2])+' '+MM[(+p[1])-1]+' '+p[0]; }
  function parseD(s){ if(!s) return null; var p=s.split('-'); if(p.length<3) return null; return new Date(+p[0], (+p[1])-1, (+p[2])); }
  function birthDate(){
    try{ var o=JSON.parse(localStorage.getItem('mama-onb')||'null'); if(o&&o.mode==='baby'&&o.date) return o.date; }catch(e){}
    return null;
  }
  function ageAt(birthStr, evStr){
    var b=parseD(birthStr), e=parseD(evStr); if(!b||!e||e<b) return '';
    var months=(e.getFullYear()-b.getFullYear())*12+(e.getMonth()-b.getMonth());
    var days=e.getDate()-b.getDate();
    if(days<0){ months--; var pm=new Date(e.getFullYear(), e.getMonth(), 0).getDate(); days+=pm; }
    if(months<=0){ return days+' дн'; }
    if(days<=0){ return months+' мес'; }
    return months+' мес '+days+' дн';
  }

  var card=null, addEl=null, pick=null;
  function render(){
    if(!card) return;
    var list=getM().slice().sort(function(a,b){ return a.d<b.d?1:(a.d>b.d?-1:0); });
    var bd=birthDate();
    var head='<div class="m-t">⭐ Важные события</div><div class="m-sub">Капсула воспоминаний: первый зуб, первое слово, первые шаги…</div>';
    var body;
    if(!list.length){
      body='<div class="m-empty">Пока нет вех.<br>Отметьте первую — например, первую улыбку 😊</div>';
    } else {
      body='<div class="m-list">'+list.map(function(m){
        var age=bd?ageAt(bd, m.d):'';
        var meta='<span>'+fmtD(m.d)+'</span>'+(age?'<span class="m-age">в '+age+'</span>':'');
        var note=m.note?'<div class="m-note">'+ec(m.note)+'</div>':'';
        return '<div class="m-row"><div class="m-emo">'+(m.e||'⭐')+'</div><div class="m-body"><div class="m-name">'+ec(m.t||'Событие')+'</div><div class="m-meta">'+meta+'</div>'+note+'</div><button class="m-del" data-id="'+m.id+'" aria-label="Удалить">✕</button></div>';
      }).join('')+'</div>';
    }
    card.innerHTML=head+body+'<button class="m-add" type="button">＋ Добавить веху</button>';
    card.querySelector('.m-add').addEventListener('click', openAdd);
    card.querySelectorAll('.m-del').forEach(function(b){
      b.addEventListener('click', function(){
        var id=b.getAttribute('data-id');
        setM(getM().filter(function(x){ return String(x.id)!==String(id); }));
        render();
      });
    });
  }

  function buildAdd(){
    addEl=document.createElement('div'); addEl.id='msAdd';
    var grid=PRESETS.map(function(p,i){ return '<button class="ms-chip" type="button" data-i="'+i+'"><span class="e">'+p.e+'</span>'+p.t+'</button>'; }).join('')
      + '<button class="ms-chip" type="button" data-i="custom"><span class="e">✏️</span>Своё</button>';
    addEl.innerHTML='<div class="ms-back"></div><div class="ms-card">'
      +'<h3>Новая веха</h3><p class="ms-hint">Выберите событие или добавьте своё.</p>'
      +'<div class="ms-grid">'+grid+'</div>'
      +'<div class="ms-custom"><label>Название события</label><input type="text" id="msTitle" placeholder="напр. Впервые засмеялся"></div>'
      +'<label>Заметка (по желанию)</label><textarea id="msNote" placeholder="Как это было…"></textarea>'
      +'<label>Дата</label><input type="date" id="msDate">'
      +'<button class="ms-save" type="button">Сохранить</button></div>';
    document.body.appendChild(addEl);
    addEl.querySelector('.ms-back').addEventListener('click', close);
    addEl.querySelector('.ms-save').addEventListener('click', save);
    addEl.querySelectorAll('.ms-chip').forEach(function(b){
      b.addEventListener('click', function(){
        addEl.querySelectorAll('.ms-chip').forEach(function(x){ x.classList.remove('on'); });
        b.classList.add('on');
        var i=b.getAttribute('data-i');
        var cust=addEl.querySelector('.ms-custom');
        if(i==='custom'){ pick={e:'⭐', custom:true}; cust.classList.add('show'); setTimeout(function(){ addEl.querySelector('#msTitle').focus(); },50); }
        else { pick={e:PRESETS[+i].e, t:PRESETS[+i].t, custom:false}; cust.classList.remove('show'); }
      });
    });
  }
  function openAdd(){
    if(!addEl) buildAdd();
    pick=null;
    addEl.querySelectorAll('.ms-chip').forEach(function(x){ x.classList.remove('on'); });
    addEl.querySelector('.ms-custom').classList.remove('show');
    addEl.querySelector('#msTitle').value='';
    addEl.querySelector('#msNote').value='';
    addEl.querySelector('#msDate').value=todayStr();
    addEl.classList.add('open');
  }
  function close(){ if(addEl) addEl.classList.remove('open'); }
  function save(){
    if(!pick){ say('Выберите событие'); return; }
    var title, emo=pick.e;
    if(pick.custom){ title=(addEl.querySelector('#msTitle').value||'').trim(); if(!title){ addEl.querySelector('#msTitle').focus(); return; } }
    else { title=pick.t; }
    var note=(addEl.querySelector('#msNote').value||'').trim();
    var d=addEl.querySelector('#msDate').value||todayStr();
    var arr=getM();
    arr.push({ id:Date.now()+'-'+Math.random().toString(36).slice(2,6), d:d, e:emo, t:title, note:note });
    setM(arr);
    close(); render(); say('Веха сохранена ⭐');
  }

  function enhance(){
    var wrap=document.querySelector('#viewDiary .diary-wrap'); if(!wrap) return;
    if(!card){
      card=document.createElement('div'); card.id='dyMiles';
      var anchor=document.getElementById('dyGrowth')||document.getElementById('dySummary2')||document.getElementById('dyTimerCard');
      if(anchor && anchor.parentNode){ anchor.parentNode.insertBefore(card, anchor.nextSibling); } else { wrap.appendChild(card); }
      render();
    }
  }
  window.__openMilestoneAdd=openAdd;
  if(typeof renderDiary==='function' && !renderDiary.__wm){ var r=renderDiary; window.renderDiary=function(){ var o=r.apply(this,arguments); try{ enhance(); if(card) render(); }catch(e){} return o; }; window.renderDiary.__wm=1; }
  function init(){ try{ if(document.getElementById('viewDiary')) enhance(); }catch(e){} }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();

;

(function(){
  "use strict";
  function say(m){ if(typeof toast==='function') toast(m); }
  function pad(n){ return String(n).padStart(2,'0'); }
  function dateStr(){ var d=new Date(); return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate()); }

  // Collect EVERY localStorage key (this origin = this app's data only)
  function collectAll(){
    var o={};
    for(var i=0;i<localStorage.length;i++){ var key=localStorage.key(i); if(key!=null) o[key]=localStorage.getItem(key); }
    return o;
  }
  function doExport(){
    try{
      var data=collectAll();
      var n=Object.keys(data).length;
      var payload={ app:'mama-ryadom', version:3, exportedAt:new Date().toISOString(), count:n, data:data };
      var blob=new Blob([JSON.stringify(payload,null,2)], {type:'application/json'});
      var url=URL.createObjectURL(blob);
      var a=document.createElement('a'); a.href=url; a.download='mama-ryadom-backup-'+dateStr()+'.json';
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(function(){ URL.revokeObjectURL(url); }, 1200);
      say('Резервная копия готова 💾 ('+n+' записей)');
    }catch(e){ say('Не удалось создать копию'); }
  }
  function doImportFile(file){
    if(!file) return;
    var r=new FileReader();
    r.onload=function(){
      try{
        var parsed=JSON.parse(r.result);
        var data=(parsed && typeof parsed==='object' && parsed.data && typeof parsed.data==='object') ? parsed.data : parsed;
        if(!data || typeof data!=='object' || Array.isArray(data)) throw 0;
        var keys=Object.keys(data);
        if(!keys.length) throw 0;
        if(!window.confirm('Восстановить '+keys.length+' записей из копии?\nТекущие данные с такими же ключами будут заменены.')) return;
        var ok=0;
        keys.forEach(function(key){ try{ if(typeof data[key]==='string'){ localStorage.setItem(key, data[key]); ok++; } }catch(e){} });
        say('Восстановлено ✅ ('+ok+' записей)');
        setTimeout(function(){ location.reload(); }, 800);
      }catch(e){ say('Не смогли открыть файл. Проверь формат.'); }
    };
    r.readAsText(file);
  }

  // 1) Upgrade the native "Копия"/"Восстановить" buttons in the prikorm tools bar
  //    (they previously backed up only prikorm-* keys, losing mama-* data).
  function rebindNative(){
    var ex=document.getElementById('exportBtn');
    if(ex && !ex.__wb){ var n=ex.cloneNode(true); n.__wb=1; ex.parentNode.replaceChild(n, ex); n.addEventListener('click', doExport); }
    var im=document.getElementById('importBtn'), imf=document.getElementById('importFile');
    if(im && imf && !im.__wb){
      var ni=im.cloneNode(true); ni.__wb=1; im.parentNode.replaceChild(ni, im);
      var nf=imf.cloneNode(true); imf.parentNode.replaceChild(nf, imf);
      ni.addEventListener('click', function(){ nf.click(); });
      nf.addEventListener('change', function(e){ var f=e.target.files&&e.target.files[0]; doImportFile(f); e.target.value=''; });
    }
  }

  // 2) Compact backup card in the diary, reachable from the daily screen
  var card=null;
  function enhance(){
    var wrap=document.querySelector('#viewDiary .diary-wrap'); if(!wrap) return;
    if(!card){
      card=document.createElement('div'); card.id='dyBackup';
      card.innerHTML='<div class="b-t">💾 Резервная копия</div>'
        +'<div class="b-sub">Сохрани все данные приложения — прикорм, дневник, рост, вехи, настройки — в один файл на этом устройстве. Пригодится при смене телефона или очистке браузера.</div>'
        +'<div class="b-row"><button class="b-btn b-exp" type="button">⬇ Скачать копию</button><button class="b-btn b-imp" type="button">⬆ Восстановить</button></div>'
        +'<input type="file" class="b-file" accept="application/json,.json" hidden>'
        +'<div class="b-note">Данные хранятся только на устройстве, копия — ваш способ их не потерять.</div>';
      var f=card.querySelector('.b-file');
      card.querySelector('.b-exp').addEventListener('click', doExport);
      card.querySelector('.b-imp').addEventListener('click', function(){ f.click(); });
      f.addEventListener('change', function(e){ var file=e.target.files&&e.target.files[0]; doImportFile(file); e.target.value=''; });
      var anchor=document.getElementById('dyMiles')||document.getElementById('dyGrowth')||document.getElementById('dySummary2');
      if(anchor && anchor.parentNode){ anchor.parentNode.insertBefore(card, anchor.nextSibling); } else { wrap.appendChild(card); }
    }
  }
  window.__mamaExport=doExport;

  if(typeof renderDiary==='function' && !renderDiary.__wb2){ var r=renderDiary; window.renderDiary=function(){ var o=r.apply(this,arguments); try{ enhance(); }catch(e){} return o; }; window.renderDiary.__wb2=1; }
  function init(){ try{ rebindNative(); if(document.getElementById('viewDiary')) enhance(); }catch(e){} }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', init); else init();
})();

;

(function(){
  "use strict";
  var A='fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"';
  function svg(i){return '<svg viewBox="0 0 24 24" '+A+'>'+i+'</svg>';}
  var IC={
    sprout:svg('<path d="M12 21V11"/><path d="M12 11c0-3 2.4-5.2 5.4-5.2C17.4 8.8 15 11 12 11z"/><path d="M12 12.5C12 9.8 9.7 7.7 6.8 7.7 6.8 10.5 9 12.5 12 12.5z"/>'),
    moon:svg('<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>'),
    sun:svg('<circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5 5l1.4 1.4M17.6 17.6L19 19M19 5l-1.4 1.4M6.4 17.6L5 19"/>'),
    shield:svg('<path d="M12 3l7 3v5c0 4.6-3 7.6-7 9-4-1.4-7-4.4-7-9V6z"/><path d="M9 12l2 2 4-4"/>'),
    steps:svg('<path d="M4 19h4v-4H4zM10 15h4v-4h-4zM16 11h4V7h-4z"/>'),
    doc:svg('<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/><path d="M9 13h6M9 16.5h6"/>'),
    cart:svg('<circle cx="9.5" cy="20" r="1.3"/><circle cx="17" cy="20" r="1.3"/><path d="M3 4h2l2.4 11.5h10L20 7H6.4"/>'),
    bag:svg('<path d="M6 8h12l1 12.5H5z"/><path d="M9 8V6.2a3 3 0 0 1 6 0V8"/>'),
    heart:svg('<path d="M12 20s-6.8-4.4-6.8-9.3A3.4 3.4 0 0 1 12 7.2a3.4 3.4 0 0 1 6.8 3.5C18.8 15.6 12 20 12 20z"/>'),
    home:svg('<path d="M4 11l8-7 8 7"/><path d="M6 10v9h12v-9"/>'),
    arrow:svg('<path d="M5 12h13M13 6l6 6-6 6"/>'),
    baby:svg('<circle cx="12" cy="7" r="3"/><path d="M6 21c0-4 2.7-7 6-7s6 3 6 7"/>'),
    list:svg('<path d="M4 7h16M4 12h16M4 17h16"/>'),
    journal:svg('<path d="M5 4h11a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2z"/><path d="M9 8h6M9 12h6"/>'),
    check:svg('<circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.5 2.5L16 9"/>'),
    face:svg('<circle cx="12" cy="12" r="9"/><path d="M9 10h.01M15 10h.01"/><path d="M8.5 14.5c1 1 2.4 1.5 3.5 1.5s2.5-.5 3.5-1.5"/>'),
    dots:svg('<circle cx="6" cy="12" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="18" cy="12" r="1.3"/>'),
    gear:svg('<circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1.2l2-1.6-2-3.4-2.4 1a7 7 0 0 0-2-1.2l-.4-2.6H8.9l-.4 2.6a7 7 0 0 0-2 1.2l-2.4-1-2 3.4 2 1.6A7 7 0 0 0 4 12a7 7 0 0 0 .1 1.2l-2 1.6 2 3.4 2.4-1a7 7 0 0 0 2 1.2l.4 2.6h4.2l.4-2.6a7 7 0 0 0 2-1.2l2.4 1 2-3.4-2-1.6A7 7 0 0 0 19 12z"/>'),
    plus:svg('<path d="M12 5v14M5 12h14"/>')
  };
  var MODS={
    prikorm:{v:'prikorm', n:'Прикорм', d:'что и когда вводить', ic:'sprout', c:'--sage'},
    diary:{v:'diary', n:'Дневник дня', d:'кормления, сон, уход', ic:'journal', c:'--sky'},
    vac:{v:'vac', n:'Прививки', d:'нацкалендарь РФ', ic:'shield', c:'--butter'},
    dev:{v:'dev', n:'Развитие', d:'навыки по месяцам', ic:'steps', c:'--sage'},
    docs:{v:'docs', n:'Документы', d:'и выплаты', ic:'doc', c:'--rust'},
    buy:{v:'buy', n:'Покупки', d:'к рождению', ic:'cart', c:'--sky'},
    sumka:{v:'sumka', n:'Сумка в роддом', d:'ничего не забыть', ic:'bag', c:'--sage'},
    preg:{v:'preg', n:'Беременность', d:'по триместрам', ic:'heart', c:'--butter'}
  };
  var ORDER=['prikorm','diary','vac','dev','docs','buy','sumka','preg'];
  var ONB_KEY='mama-onb';
  function getOnb(){ try{ return JSON.parse(localStorage.getItem(ONB_KEY)||'null'); }catch(_){ return null; } }
  function setOnb(o){ try{ localStorage.setItem(ONB_KEY, JSON.stringify(o)); }catch(_){} }
  var TILES_KEY='mama-tiles-hidden';
  function getHidden(){ try{ var a=JSON.parse(localStorage.getItem(TILES_KEY)||'[]'); return Array.isArray(a)?a:[]; }catch(_){ return []; } }
  function setHidden(a){ try{ localStorage.setItem(TILES_KEY, JSON.stringify(a)); }catch(_){} }
  function monthsBetween(d1,d2){ var m=(d2.getFullYear()-d1.getFullYear())*12+(d2.getMonth()-d1.getMonth()); if(d2.getDate()<d1.getDate()) m--; return m; }
  function ageInfo(o){ if(!o||o.mode==='skip'||!o.date) return null; var now=new Date(); var d=new Date(o.date+'T00:00:00');
    if(o.mode==='preg'){ var dt=Math.round((d-now)/86400000); var g=280-dt; var w=Math.max(1,Math.min(42,Math.floor(g/7))); return {mode:'preg',week:w,label:w+'-я неделя'}; }
    var days=Math.floor((now-d)/86400000); if(days<0)days=0; var months=Math.max(0,monthsBetween(d,now));
    var label=days<14?days+' дн':(months<2?Math.floor(days/7)+' нед':months+' мес'); return {mode:'baby',months:months,days:days,label:label}; }
  function focusOf(info){ if(!info) return {v:'prikorm',title:'Прикорм без паники',d:'Отмечай продукты и открывай совет по каждому.'};
    if(info.mode==='preg'){ if(info.week>=36) return {v:'sumka',title:'Собери сумку в роддом',d:'Роды близко — проверь, что всё готово к встрече.'}; return {v:'preg',title:'Беременность по неделям',d:'Скрининги, анализы и подготовка по твоему сроку.'}; }
    var m=info.months; if(info.days<45) return {v:'docs',title:'Оформить документы',d:'После рождения: свидетельство, полис ОМС и выплаты.'};
    if(m<4) return {v:'diary',title:'Дневник дня',d:'Кормления, сон и подгузники — всё под рукой.'};
    if(m<5) return {v:'dev',title:'Развитие по месяцам',d:'Скоро прикорм — а пока следим за новыми навыками.'};
    if(m<=12) return {v:'prikorm',title:'Прикорм без паники',d:'Что и когда вводить — по шагам, с советом на каждый продукт.'};
    return {v:'dev',title:'Развитие по месяцам',d:'Новые умения месяц за месяцем.'}; }
  function greetSub(info,name){ if(!info) return 'Всё для беременности и первого года · для «'+name+'»'; if(info.mode==='preg') return 'Беременность · '+info.label; return name+' · '+info.label; }

  function ready(fn){ if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',fn); else fn(); }
  ready(function(){
    if(document.getElementById('homeHub')) return;
    var hub=document.createElement('div'); hub.id='homeHub'; document.body.appendChild(hub);
    var curFocusV='prikorm';

    function appMenu(){ var b=document.querySelector('.menu-btn'); if(b) b.click(); }
    function appTheme(){ var b=document.querySelector('.theme-toggle'); if(b) b.click(); }
    function themeIcon(){ return (document.documentElement.getAttribute('data-theme')==='dark') ? IC.sun : IC.moon; }

    function tileHTML(m){ return '<div class="tile" data-v="'+m.v+'"><div class="ic" style="background:color-mix(in srgb, var('+m.c+') 18%, transparent);color:var('+m.c+')">'+IC[m.ic]+'</div><div><div class="n">'+m.n+'</div><div class="d">'+m.d+'</div></div></div>'; }
    function renderHub(){
      var onb=getOnb(); var info=ageInfo(onb);
      var kid=document.querySelector('.kids .kid.active'); var kidName=(onb&&onb.name)||(kid?kid.textContent.trim():'малыш');
      var h=new Date().getHours(); var greet=h<5?'Доброй ночи':h<12?'Доброе утро':h<18?'Добрый день':'Добрый вечер';
      var f=focusOf(info); curFocusV=f.v;
      var prog=''; if(f.v==='prikorm'){ prog=((document.querySelector('#viewPrikorm .hero-count')||{}).textContent||'').replace(/\s+/g,' ').trim(); }
      var feat='<div class="tile feat" data-v="'+f.v+'"><div><div class="k">Фокус сегодня</div><div class="n">'+f.title+'</div><div class="d">'+f.d+'</div></div><div style="display:flex;align-items:center"><span class="cta">Открыть '+IC.arrow+'</span><span class="prog">'+prog+'</span></div></div>';
      var hidden=getHidden();
      var rest=ORDER.filter(function(k){return k!==f.v && hidden.indexOf(k)<0;}).map(function(k){return tileHTML(MODS[k]);}).join('');
      var addTile='<button class="tile tile-add" data-customize="1"><div class="ic">'+IC.gear+'</div><div><div class="n">Настроить плитки</div><div class="d">выбрать, что показывать</div></div></button>';
      var editLink=info?'<span class="edit" data-edit="1">изменить</span>':'';
      hub.innerHTML='<div class="wrap"><div class="htop"><button class="tbtn" data-menu aria-label="Разделы">'+IC.list+'</button><div class="brand">Мама рядом</div><button class="tbtn" data-theme aria-label="Тема">'+themeIcon()+'</button></div><div class="hhead"><div class="hsprout">'+IC.sprout+'</div><div><div class="hgreet">'+greet+'</div><div class="hsub">'+greetSub(info,kidName)+editLink+'</div></div></div><div class="hgrid">'+feat+rest+addTile+'</div>'+'<div class="hub-trust"><span class="ht-ic">'+IC.shield+'</span><span class="ht-tx"><b>Проверенная информация.</b> Опираемся на нацкалендарь РФ, рекомендации ВОЗ и Минздрава РФ. Это справочник — он не заменяет консультацию врача. Регион: Россия · Обновлено: 2026.</span></div>'+'</div>';
    }
    function hideHub(){ hub.style.display='none'; syncTabs(); }
    function showHub(){ renderHub(); hub.style.display='block'; window.scrollTo(0,0); syncTabs(); }
    window.__showHub=showHub;
    renderHub();

    hub.addEventListener('click',function(e){
      if(e.target.closest('[data-menu]')){ hideHub(); appMenu(); return; }
      if(e.target.closest('[data-theme]')){ appTheme(); setTimeout(function(){ var b=hub.querySelector('[data-theme]'); if(b) b.innerHTML=themeIcon(); },30); return; }
      if(e.target.closest('[data-edit]')){ openOnb(); return; }
      if(e.target.closest('[data-customize]')){ openTiles(); return; }
      var t=e.target.closest('[data-v]'); if(!t) return; var v=t.getAttribute('data-v'); hideHub(); try{ window.setView(v); }catch(_){}
    });

    /* customize tiles */
    var tilesEl=null;
    function openTiles(){
      if(tilesEl) tilesEl.remove();
      var hidden=getHidden();
      tilesEl=document.createElement('div'); tilesEl.id='tilesOverlay';
      var rows=ORDER.map(function(k){ var m=MODS[k]; var on=hidden.indexOf(k)<0;
        return '<button class="trow'+(on?' on':'')+'" data-k="'+k+'"><div class="ti" style="background:color-mix(in srgb, var('+m.c+') 16%, transparent);color:var('+m.c+')">'+IC[m.ic]+'</div><div class="tt"><div class="tn">'+m.n+'</div><div class="td">'+m.d+'</div></div><div class="tsw"><div class="knob"></div></div></button>';
      }).join('');
      tilesEl.innerHTML='<div class="card"><div class="chead"><div><h2>Настроить плитки</h2><p class="csub">Оставьте только то, что важно вам сейчас.</p></div></div><div class="tlist">'+rows+'</div><button class="tdone">Готово</button></div>';
      document.body.appendChild(tilesEl);
      tilesEl.querySelectorAll('.trow').forEach(function(b){ b.addEventListener('click',function(){ b.classList.toggle('on'); }); });
      tilesEl.querySelector('.tdone').addEventListener('click',function(){
        var hid=[]; tilesEl.querySelectorAll('.trow').forEach(function(b){ if(!b.classList.contains('on')) hid.push(b.getAttribute('data-k')); });
        setHidden(hid); tilesEl.remove(); tilesEl=null; renderHub();
      });
    }

    /* onboarding */
    var onbEl=null;
    function openOnb(){
      if(onbEl) onbEl.remove();
      var cur=getOnb()||{}; var mode=(cur.mode==='preg')?'preg':'baby';
      onbEl=document.createElement('div'); onbEl.id='onbOverlay';
      onbEl.innerHTML='<div class="card">'+
        '<div class="osprout">'+IC.sprout+'</div>'+
        '<h2>Давайте настроим под вас</h2>'+
        '<p class="osub">Покажем то, что важно именно сейчас — по возрасту малыша или сроку.</p>'+
        '<div class="opt">'+
          '<button class="obtn'+(mode==='baby'?' sel':'')+'" data-mode="baby"><div class="oi" style="background:color-mix(in srgb, var(--sage) 18%, transparent);color:var(--sage)">'+IC.baby+'</div><div><div class="ot">Малыш родился</div><div class="od">покажем по возрасту</div></div></button>'+
          '<button class="obtn'+(mode==='preg'?' sel':'')+'" data-mode="preg"><div class="oi" style="background:color-mix(in srgb, var(--butter) 18%, transparent);color:var(--butter)">'+IC.heart+'</div><div><div class="ot">Жду малыша</div><div class="od">покажем по сроку</div></div></button>'+
        '</div>'+
        '<label class="fl" id="onbDateLbl">Дата рождения</label>'+
        '<input type="date" id="onbDate" value="'+(cur.date||'')+'">'+
        '<label class="fl">Имя малыша (по желанию)</label>'+
        '<input type="text" id="onbName" placeholder="Малыш" value="'+((cur.name||'').replace(/"/g,'&quot;'))+'">'+
        '<button class="odone" id="onbDone">Готово</button>'+
        '<button class="oskip" id="onbSkip">Пропустить</button>'+
      '</div>';
      document.body.appendChild(onbEl);
      var sel=mode;
      function syncLbl(){ document.getElementById('onbDateLbl').textContent = sel==='preg'?'Предполагаемая дата родов':'Дата рождения'; }
      syncLbl();
      onbEl.querySelectorAll('.obtn').forEach(function(b){ b.addEventListener('click',function(){ sel=b.getAttribute('data-mode'); onbEl.querySelectorAll('.obtn').forEach(function(x){x.classList.remove('sel');}); b.classList.add('sel'); syncLbl(); }); });
      onbEl.querySelector('#onbDone').addEventListener('click',function(){ var date=document.getElementById('onbDate').value; var name=document.getElementById('onbName').value.trim(); if(!date){document.getElementById('onbDate').focus();return;} setOnb({mode:sel,date:date,name:name||undefined}); onbEl.remove(); onbEl=null; showHub(); });
      onbEl.querySelector('#onbSkip').addEventListener('click',function(){ setOnb({mode:'skip'}); onbEl.remove(); onbEl=null; showHub(); });
    }
    window.__openOnb=openOnb;

    /* drawer "home" item */
    var dr=document.querySelector('.drawer');
    if(dr && !dr.querySelector('.m-home-row')){
      var row=document.createElement('button'); row.type='button'; row.className='drawer-item m-home-row'; row.style.marginBottom='6px'; row.textContent='🏠 Главная';
      row.addEventListener('click',function(e){ e.stopPropagation(); dr.classList.remove('open'); var bd=document.querySelector('.drawer-backdrop'); if(bd) bd.classList.remove('show','open'); showHub(); });
      var first=dr.querySelector('.drawer-item'); if(first) dr.insertBefore(row, first); else dr.appendChild(row);
    }

    /* bottom tab bar */
    var TABS=[
      {k:'home', ic:'home', l:'Сегодня'},
      {k:'diary', ic:'journal', l:'Дневник'},
      {k:'plan', ic:'check', l:'План'},
      {k:'child', ic:'face', l:'Ребёнок'},
      {k:'more', ic:'dots', l:'Ещё'}
    ];
    var tabsEl=document.createElement('div'); tabsEl.id='mamaTabs';
    tabsEl.innerHTML=TABS.map(function(t){ return '<button class="tab" data-tab="'+t.k+'">'+IC[t.ic]+'<span>'+t.l+'</span></button>'; }).join('');
    document.body.appendChild(tabsEl);
    function hubVisible(){ return getComputedStyle(hub).display!=='none'; }
    function syncTabs(){
      var active = hubVisible() ? 'home' : (tabsEl.__last||'home');
      tabsEl.querySelectorAll('.tab').forEach(function(b){ b.classList.toggle('on', b.getAttribute('data-tab')===active); });
    }
    tabsEl.addEventListener('click',function(e){ var b=e.target.closest('[data-tab]'); if(!b) return; var k=b.getAttribute('data-tab'); tabsEl.__last=k;
      if(k==='home'){ showHub(); }
      else if(k==='diary'){ hideHub(); try{ window.setView('diary'); }catch(_){} }
      else if(k==='plan'){ hideHub(); try{ window.setView(curFocusV); }catch(_){} }
      else if(k==='child'){ openOnb(); }
      else if(k==='more'){ hideHub(); appMenu(); }
      syncTabs();
    });
    /* hide tabs while an overlay (sheet/drawer/modal) is open */
    function overlayOpen(){ var s=document.querySelector('.sheet.open'), d=document.querySelector('.drawer.open'), m=document.querySelector('.modal'); return !!(s||d||(m&&getComputedStyle(m).display!=='none'&&getComputedStyle(m).opacity!=='0'&&m.offsetParent!==null)); }
    function syncTabsVis(){ var want=overlayOpen(); if(tabsEl.classList.contains('hidden')!==want) tabsEl.classList.toggle('hidden', want); }
    new MutationObserver(syncTabsVis).observe(document.body,{subtree:true,attributes:true,attributeFilter:['class','style']});
    syncTabsVis();

    showHub();
    if(getOnb()==null) openOnb();
  });
})();
