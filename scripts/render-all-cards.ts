import { spawnSync } from 'node:child_process';
import { marcos } from '../src/data/marcos.js';

const ordered = [...marcos].sort((a, b) => a.id - b.id);

for (const marco of ordered) {
  console.log(`\n==> Renderizando Marco ${String(marco.id).padStart(2, '0')} · ${marco.title}`);
  const result = spawnSync(
    process.execPath,
    ['--import', 'tsx', 'scripts/render-card.ts', String(marco.id)],
    { stdio: 'inherit' }
  );

  if (result.error) throw result.error;
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

console.log(`\n${ordered.length} cards renderizados com sucesso.`);
