import { chromium } from '@playwright/test';
import { readFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { marcos } from '../src/data/marcos.js';

const id = Number(process.argv[2] ?? 1);
const marco = marcos.find((item) => item.id === id);
if (!marco) throw new Error(`Marco ${id} não encontrado.`);

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

let html = await readFile(templatePath, 'utf8');
const styles = await readFile(stylesPath, 'utf8');

const replacements: Record<string, string> = {
  styles,
  theme: escapeHtml(marco.theme),
  hebrewDate: escapeHtml(marco.hebrewDate),
  civilDate: escapeHtml(marco.civilDate),
  classification: escapeHtml(marco.classification),
  hebrew: escapeHtml(marco.hebrew),
  title: escapeHtml(marco.title),
  transliteration: escapeHtml(marco.transliteration),
  translation: escapeHtml(marco.translation),
  summary: escapeHtml(marco.summary),
  practice: escapeHtml(marco.practice),
  reference: escapeHtml(marco.biblicalReference ?? '')
};

for (const [key, value] of Object.entries(replacements)) {
  html = html.replaceAll(`{{${key}}}`, value);
}

await mkdir(outputDir, { recursive: true });
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: 'networkidle' });
await page.screenshot({ path: outputPath, fullPage: false });
await browser.close();

console.log(outputPath);
