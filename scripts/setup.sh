#!/usr/bin/env bash
set -euo pipefail

source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_common.sh"

say "Ajustando permissão dos atalhos"
chmod +x "$PROJECT_ROOT/yk" "$PROJECT_ROOT"/scripts/*.sh

ensure_fnm

say "Instalando/ativando o Node definido em .nvmrc"
fnm install
fnm use
print_versions

say "Instalando dependências npm"
npm install

say "Instalando Chromium para o renderizador de cards"
npx playwright install chromium

say "Validando o projeto"
npm test

printf '\nTudo pronto. Daqui pra frente use: ./yk dev\n'
