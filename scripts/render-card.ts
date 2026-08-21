import { chromium } from '@playwright/test';
import { readFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { marcos } from '../src/data/marcos.js';
import { cardCopyFor } from '../src/data/cardCopy.js';

const id = Number(process.argv[2] ?? 1);
const marco = marcos.find((item) => item.id === id);
if (!marco) throw new Error(`Marco ${id} não encontrado.`);
const card = cardCopyFor(marco.id);

const templatePath = resolve('cards/templates/card.html');
const stylesPath = resolve('src/styles/card.css');
const outputDir = resolve('cards/rendered');
const outputPath = resolve(outputDir, `${String(marco.id).padStart(2, '0')}-${marco.slug}.png`);

const escapeHtml = (value: string) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const loadBackground = async () => {
  if (!marco.backgroundAsset) return '';

  const assetPath = resolve('public', marco.backgroundAsset.replace(/^\//, ''));
  const bytes = await readFile(assetPath);
  const mime = marco.backgroundAsset.endsWith('.svg') ? 'image/svg+xml' : 'image/png';
  return `data:${mime};base64,${bytes.toString('base64')}`;
};

let html = await readFile(templatePath, 'utf8');
const styles = await readFile(stylesPath, 'utf8');
const background = await loadBackground();

const replacements: Record<string, string> = {
  styles,
  theme: escapeHtml(marco.theme),
  background,
  id: String(marco.id).padStart(2, '0'),
  hebrewDate: escapeHtml(marco.hebrewDate),
  civilDate: escapeHtml(marco.civilDate),
  cardClassification: escapeHtml(card.classification),
  hebrew: escapeHtml(marco.hebrew),
  title: escapeHtml(marco.title),
  transliteration: escapeHtml(marco.transliteration),
  translation: escapeHtml(marco.translation),
  cardSummary: escapeHtml(card.summary),
  cardPractice: escapeHtml(card.practice),
  cardSource: escapeHtml(card.source)
};

for (const [key, value] of Object.entries(replacements)) {
  html = html.replaceAll(`{{${key}}}`, value);
}

await mkdir(outputDir, { recursive: true });
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);

const layout = await page.evaluate(() => {
  const cardElement = document.querySelector('.yk-card');
  const body = document.querySelector('.yk-card__body');
  const footer = document.querySelector('.yk-card__footer');
  const summary = document.querySelector('.yk-card__summary');
  const practice = document.querySelector('.yk-card__practice p');
  const source = document.querySelector('.yk-card__source');

  if (!cardElement || !body || !footer || !summary || !practice || !source) {
    throw new Error('Estrutura obrigatória do card não encontrada.');
  }

  const cardRect = cardElement.getBoundingClientRect();
  const bodyRect = body.getBoundingClientRect();
  const footerRect = footer.getBoundingClientRect();
  const root = document.documentElement;

  return {
    bodyBottom: bodyRect.bottom,
    footerTop: footerRect.top,
    footerBottom: footerRect.bottom,
    cardBottom: cardRect.bottom,
    scrollWidth: root.scrollWidth,
    clientWidth: root.clientWidth,
    summaryFont: Number.parseFloat(getComputedStyle(summary).fontSize),
    practiceFont: Number.parseFloat(getComputedStyle(practice).fontSize),
    sourceFont: Number.parseFloat(getComputedStyle(source).fontSize)
  };
});

if (layout.bodyBottom > layout.footerTop + 0.5) {
  throw new Error(`Marco ${id}: conteúdo invade o rodapé (${layout.bodyBottom.toFixed(1)} > ${layout.footerTop.toFixed(1)}).`);
}
if (layout.footerBottom > layout.cardBottom + 0.5) {
  throw new Error(`Marco ${id}: rodapé ultrapassa o card.`);
}
if (layout.scrollWidth > layout.clientWidth) {
  throw new Error(`Marco ${id}: overflow horizontal (${layout.scrollWidth}px > ${layout.clientWidth}px).`);
}
if (layout.summaryFont < 38) {
  throw new Error(`Marco ${id}: fonte do resumo pequena demais (${layout.summaryFont.toFixed(1)}px).`);
}
if (layout.practiceFont < 35) {
  throw new Error(`Marco ${id}: fonte da prática pequena demais (${layout.practiceFont.toFixed(1)}px).`);
}
if (layout.sourceFont < 24) {
  throw new Error(`Marco ${id}: fonte da fonte/proveniência pequena demais (${layout.sourceFont.toFixed(1)}px).`);
}

await page.screenshot({ path: outputPath, fullPage: false });
await browser.close();

console.log(outputPath);
