#!/usr/bin/env bash
set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_ROOT"

say() {
  printf '\n==> %s\n' "$*"
}

fail() {
  printf '\nERRO: %s\n' "$*" >&2
  exit 1
}

have() {
  command -v "$1" >/dev/null 2>&1
}

ensure_fnm() {
  have fnm || fail "fnm não encontrado no PATH. Abra um novo terminal ou carregue o fnm antes de continuar."
}

use_project_node() {
  ensure_fnm
  say "Ativando a versão de Node definida pelo projeto"
  fnm use --install-if-missing >/dev/null

  have node || fail "node não ficou disponível após 'fnm use'."
  have npm || fail "npm não ficou disponível após 'fnm use'."
}

print_versions() {
  printf 'Node: %s\n' "$(node -v 2>/dev/null || printf 'não encontrado')"
  printf 'npm:  %s\n' "$(npm -v 2>/dev/null || printf 'não encontrado')"
}
