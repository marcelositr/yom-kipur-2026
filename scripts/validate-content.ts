import { marcos } from '../src/data/marcos.js';

const required = [
  'id', 'slug', 'title', 'hebrew', 'transliteration', 'translation',
  'hebrewDate', 'civilDate', 'publicationDate', 'theme', 'practice', 'status'
] as const;

let failed = false;
const ids = new Set<number>();
const slugs = new Set<string>();

for (const marco of marcos) {
  for (const field of required) {
    const value = marco[field];
    if (value === undefined || value === null || value === '') {
      console.error(`Marco ${marco.id ?? '?'}: campo obrigatório ausente: ${field}`);
      failed = true;
    }
  }

  if (ids.has(marco.id)) {
    console.error(`ID duplicado: ${marco.id}`);
    failed = true;
  }
  if (slugs.has(marco.slug)) {
    console.error(`Slug duplicado: ${marco.slug}`);
    failed = true;
  }

  ids.add(marco.id);
  slugs.add(marco.slug);

  if (!/^\d{1,2} [A-Za-z]+ 57\d{2}$/.test(marco.hebrewDate)) {
    console.warn(`Marco ${marco.id}: revise manualmente a data hebraica: ${marco.hebrewDate}`);
  }
}

if (failed) process.exit(1);
console.log(`Conteúdo válido: ${marcos.length} marco(s).`);
