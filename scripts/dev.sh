#!/usr/bin/env bash
set -euo pipefail

source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/_common.sh"

use_project_node
print_versions

say "Subindo o Astro em modo desenvolvimento"
exec npm run dev
