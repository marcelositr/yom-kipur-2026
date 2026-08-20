#!/usr/bin/env bash
set -euo pipefail

source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_common.sh"

use_project_node
print_versions

say "Executando validação completa"
exec npm test
