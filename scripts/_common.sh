#!/usr/bin/env bash
set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_ROOT"

LOCAL_BASE_URL="${YK_LOCAL_BASE_URL:-http://localhost:4321/yom-kipur-2026/}"

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

local_url() {
  local path="${1:-}"
  path="${path#/}"
  printf '%s%s' "$LOCAL_BASE_URL" "$path"
}

url_is_up() {
  local url="$1"
  if have curl; then
    curl -fsS --max-time 1 "$url" >/dev/null 2>&1
  elif have wget; then
    wget -q --timeout=1 --spider "$url" >/dev/null 2>&1
  else
    return 1
  fi
}

wait_for_url() {
  local url="$1"
  local attempts="${2:-40}"
  local i

  if ! have curl && ! have wget; then
    sleep 2
    return 0
  fi

  for ((i = 1; i <= attempts; i++)); do
    if url_is_up "$url"; then
      return 0
    fi
    sleep 0.25
  done

  return 1
}

open_browser() {
  local url="$1"

  if have xdg-open; then
    nohup xdg-open "$url" >/dev/null 2>&1 &
  elif have gio; then
    nohup gio open "$url" >/dev/null 2>&1 &
  elif have open; then
    nohup open "$url" >/dev/null 2>&1 &
  else
    fail "não encontrei xdg-open, gio ou open para abrir o navegador. URL: $url"
  fi
}
