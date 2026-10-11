#!/usr/bin/env bash
# Копирует файлы веб-приложения в директорию WebApp внутри ios/
# Запускать из корня репозитория: bash ios/sync-webapp.sh

set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
DEST="$SCRIPT_DIR/WebApp"

echo "Синхронизирую веб-файлы в $DEST ..."

rm -rf "$DEST"
mkdir -p "$DEST"

rsync -av \
  --exclude='.git' \
  --exclude='node_modules' \
  --exclude='tests' \
  --exclude='tools' \
  --exclude='supabase' \
  --exclude='ios' \
  --exclude='.github' \
  --exclude='eslint.config.js' \
  --exclude='package.json' \
  --exclude='package-lock.json' \
  --exclude='README.md' \
  --exclude='CNAME' \
  "$REPO_ROOT/" "$DEST/"

echo "Готово. Файлы в $DEST"
