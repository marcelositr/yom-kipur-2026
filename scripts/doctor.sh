#!/usr/bin/env bash
set -euo pipefail

source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_common.sh"

printf 'Projeto: %s\n' "$PROJECT_ROOT"
printf 'Branch:  %s\n' "$(git branch --show-current 2>/dev/null || printf 'não disponível')"
printf 'fnm:     %s\n' "$(command -v fnm 2>/dev/null || printf 'não encontrado')"
printf 'node:    %s\n' "$(command -v node 2>/dev/null || printf 'não encontrado')"
printf 'npm:     %s\n' "$(command -v npm 2>/dev/null || printf 'não encontrado')"
printf '.nvmrc:  %s\n' "$(cat .nvmrc 2>/dev/null || printf 'ausente')"

if [[ -f package-lock.json ]]; then
  printf 'lockfile: presente\n'
else
  printf 'lockfile: AUSENTE\n'
fi

printf '\n'
print_versions

if have fnm; then
  printf '\nNode via fnm:\n'
  fnm current 2>/dev/null || true
fi

if [[ -d node_modules ]]; then
  printf '\nnode_modules: presente\n'
else
  printf '\nnode_modules: ausente (rode bash yk setup)\n'
fi

if [[ -d "$HOME/.cache/ms-playwright" ]] || [[ -d "$HOME/.cache/ms-playwright-go" ]]; then
  printf 'Playwright cache: presente\n'
else
  printf 'Playwright cache: não detectado (rode bash yk setup se precisar renderizar cards)\n'
fi
