#!/usr/bin/env bash
set -euo pipefail

source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_common.sh"

use_project_node

id="${1:-1}"
[[ "$id" =~ ^[0-9]+$ ]] || fail "o número do marco precisa ser inteiro. Exemplo: bash yk render 1"

say "Renderizando o Marco $id"
npm run card:render -- "$id"

file="$(find cards/rendered -maxdepth 1 -type f -name "$(printf '%02d' "$id")-*.png" -print -quit 2>/dev/null || true)"

if [[ -n "$file" ]]; then
  printf '\nCard gerado: %s\n' "$file"
  if have xdg-open && [[ -n "${DISPLAY:-}${WAYLAND_DISPLAY:-}" ]]; then
    printf 'Abrindo a imagem...\n'
    xdg-open "$file" >/dev/null 2>&1 || true
  fi
else
  printf '\nRender concluído. Verifique cards/rendered/.\n'
fi
