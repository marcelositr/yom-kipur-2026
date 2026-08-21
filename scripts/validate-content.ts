import { marcos } from '../src/data/marcos.js';

const required = [
  'id', 'slug', 'title', 'hebrew', 'transliteration', 'translation',
  'hebrewDate', 'civilDate', 'publicationDate', 'theme', 'summary',
  'classification', 'practice', 'status'
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

  if (!/[\u0590-\u05FF]/u.test(marco.hebrew)) {
    console.error(`Marco ${marco.id}: o campo hebrew não contém caracteres hebraicos.`);
    failed = true;
  }

  if (!/^\d{1,2} [A-Za-z]+ 57\d{2}$/.test(marco.hebrewDate)) {
    console.warn(`Marco ${marco.id}: revise manualmente a data hebraica: ${marco.hebrewDate}`);
  }

  if (/metáfora|tradição|costume/i.test(marco.classification) && !marco.traditionSource) {
    console.error(`Marco ${marco.id}: classificação tradicional exige traditionSource.`);
    failed = true;
  }

  for (const [label, url] of [
    ['conceptSourceUrl', marco.conceptSourceUrl],
    ['traditionSourceUrl', marco.traditionSourceUrl],
    ['calendarSourceUrl', marco.calendarSourceUrl]
  ] as const) {
    if (!url) continue;
    try {
      new URL(url);
    } catch {
      console.error(`Marco ${marco.id}: URL inválida em ${label}: ${url}`);
      failed = true;
    }
  }

  if (marco.status === 'published' && !marco.calendarSourceUrl) {
    console.error(`Marco ${marco.id}: conteúdo publicado exige fonte de validação de calendário.`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log(`Conteúdo válido: ${marcos.length} marco(s).`);
