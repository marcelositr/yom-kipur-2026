#!/usr/bin/env bash
set -euo pipefail

source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_common.sh"

open_after_start=false

while (($#)); do
  case "$1" in
    --open|-o)
      open_after_start=true
      ;;
    -h|--help)
      cat <<'EOF'
Uso:
  bash yk dev [--open]

Parâmetros:
  --open, -o   abre o projeto no navegador assim que o Astro responder
  --help, -h   mostra esta ajuda
EOF
      exit 0
      ;;
    *)
      fail "parâmetro desconhecido para dev: $1. Use 'bash yk help'."
      ;;
  esac
  shift
done

use_project_node
print_versions

if "$open_after_start"; then
  url="$(local_url)"
  say "O navegador será aberto em $url assim que o servidor responder"
  (
    if wait_for_url "$url" 60; then
      open_browser "$url"
    else
      printf '\nAVISO: o Astro não respondeu a tempo em %s\n' "$url" >&2
    fi
  ) &
fi

say "Subindo o Astro em modo desenvolvimento"
exec npm run dev
