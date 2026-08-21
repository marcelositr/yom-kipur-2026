#!/usr/bin/env bash
set -euo pipefail

source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_common.sh"

use_project_node
print_versions

if [[ ! -f package-lock.json ]]; then
  fail "package-lock.json ausente. Rode 'bash yk setup' antes do pré-lançamento."
fi

if [[ ! -d node_modules ]]; then
  fail "node_modules ausente. Rode 'bash yk setup' antes do pré-lançamento."
fi

say "Garantindo Chromium do Playwright"
npx playwright install chromium

say "Executando gate completo de pré-lançamento"
exec npm run release:check
