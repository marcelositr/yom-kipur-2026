import { chromium } from '@playwright/test';
import { readFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { marcos } from '../src/data/marcos.js';

const id = Number(process.argv[2] ?? 1);
const marco = marcos.find((item) => item.id === id);
if (!marco) throw new Error(`Marco ${id} não encontrado.`);

const templatePath = resolve('cards/templates/card.html');
const outputDir = resolve('cards/rendered');
const outputPath = resolve(outputDir, `${String(marco.id).padStart(2, '0')}-${marco.slug}.png`);

let html = await readFile(templatePath, 'utf8');
const replacements: Record<string, string> = {
  hebrewDate: marco.hebrewDate,
  civilDate: marco.civilDate,
  hebrew: marco.hebrew,
  title: marco.title,
  transliteration: marco.transliteration,
  translation: marco.translation,
  summary: `Tema: ${marco.theme}.`,
  practice: marco.practice,
  reference: marco.biblicalReference ?? ''
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
