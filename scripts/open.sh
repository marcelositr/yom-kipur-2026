#!/usr/bin/env bash
set -euo pipefail

source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_common.sh"

path="${1:-}"

if [[ "$path" == "-h" || "$path" == "--help" ]]; then
  cat <<'EOF'
Uso:
  bash yk open [CAMINHO]

Parâmetros:
  CAMINHO      rota relativa dentro do projeto local
               padrão: página inicial

Exemplos:
  bash yk open
  bash yk open marcos/01-o-rei-esta-no-campo/
EOF
  exit 0
fi

if (($# > 1)); then
  fail "open aceita no máximo um caminho. Use 'bash yk help'."
fi

url="$(local_url "$path")"

if ! url_is_up "$url"; then
  printf 'AVISO: o servidor local não respondeu em %s\n' "$url" >&2
  printf 'Se necessário, inicie com: bash yk dev\n\n' >&2
fi

printf 'Abrindo: %s\n' "$url"
open_browser "$url"
