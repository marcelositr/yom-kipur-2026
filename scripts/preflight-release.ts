import { access, readFile, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { marcos } from '../src/data/marcos.js';
import { studyFiles } from '../src/data/studies.js';

const expectedCount = 15;
let failed = false;

const fail = (message: string) => {
  console.error(`ERRO: ${message}`);
  failed = true;
};

const exists = async (path: string) => {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
};

const ordered = [...marcos].sort((a, b) => a.id - b.id);

if (ordered.length !== expectedCount) {
  fail(`esperados ${expectedCount} Marcos, encontrados ${ordered.length}.`);
}

if (Object.keys(studyFiles).length !== expectedCount) {
  fail(`esperados ${expectedCount} estudos mapeados, encontrados ${Object.keys(studyFiles).length}.`);
}

const studyReaderSource = resolve('src/pages/estudos/[slug].astro');
if (!(await exists(studyReaderSource))) {
  fail(`página dinâmica de leitura dos estudos ausente: ${studyReaderSource}`);
}

for (let index = 0; index < ordered.length; index += 1) {
  const marco = ordered[index];
  const expectedId = index + 1;
  if (marco.id !== expectedId) {
    fail(`sequência inválida: esperado Marco ${expectedId}, encontrado ${marco.id}.`);
  }

  const nn = String(marco.id).padStart(2, '0');
  const pagePath = resolve(`src/pages/marcos/${nn}-${marco.slug}.astro`);
  if (!(await exists(pagePath))) {
    fail(`Marco ${nn}: página ausente: ${pagePath}`);
    continue;
  }

  const page = await readFile(pagePath, 'utf8');
  const downloadMatch = page.match(/downloads\/([^'"`]+\.txt)/);
  if (!downloadMatch) {
    fail(`Marco ${nn}: página não referencia um TXT em public/downloads/.`);
  } else {
    const txtPath = resolve(`public/downloads/${downloadMatch[1]}`);
    if (!(await exists(txtPath))) {
      fail(`Marco ${nn}: TXT referenciado não existe: ${txtPath}`);
    }
  }

  const studyFile = studyFiles[marco.id];
  if (!studyFile) {
    fail(`Marco ${nn}: estudo complementar não mapeado.`);
  } else {
    if (!studyFile.includes(`_marco${nn}_estudo_`)) {
      fail(`Marco ${nn}: nome do estudo não segue o padrão esperado: ${studyFile}`);
    }
    const studyPath = resolve(`public/estudos/${studyFile}`);
    if (!(await exists(studyPath))) {
      fail(`Marco ${nn}: estudo complementar ausente: ${studyPath}`);
    } else {
      const study = await readFile(studyPath, 'utf8');
      if (!study.includes(`Marco ${nn}`)) {
        fail(`Marco ${nn}: estudo não identifica corretamente o próprio Marco.`);
      }
    }

    const builtStudyPage = resolve(`dist/estudos/${nn}-${marco.slug}/index.html`);
    if (!(await exists(builtStudyPage))) {
      fail(`Marco ${nn}: página HTML do estudo não foi gerada: ${builtStudyPage}`);
    } else {
      const studyPageHtml = await readFile(builtStudyPage, 'utf8');
      for (const requiredText of ['Ouvir estudo', 'Copiar para WhatsApp', 'Baixar .TXT']) {
        if (!studyPageHtml.includes(requiredText)) {
          fail(`Marco ${nn}: página do estudo não contém o controle esperado: ${requiredText}.`);
        }
      }
      if (!studyPageHtml.includes(studyFile)) {
        fail(`Marco ${nn}: página do estudo não referencia o TXT correspondente.`);
      }
    }
  }

  if (!page.includes('<MarcoCard {marco} />')) {
    fail(`Marco ${nn}: página não contém o componente MarcoCard esperado.`);
  }

  if (!marco.backgroundAsset) {
    fail(`Marco ${nn}: backgroundAsset ausente.`);
  } else {
    const backgroundPath = resolve('public', marco.backgroundAsset.replace(/^\//, ''));
    if (!(await exists(backgroundPath))) {
      fail(`Marco ${nn}: fundo ausente: ${backgroundPath}`);
    }
  }

  const pngPath = resolve(`cards/rendered/${nn}-${marco.slug}.png`);
  if (!(await exists(pngPath))) {
    fail(`Marco ${nn}: PNG renderizado ausente: ${pngPath}`);
  } else {
    const png = await readFile(pngPath);
    const signature = png.subarray(0, 8).toString('hex');
    if (signature !== '89504e470d0a1a0a') {
      fail(`Marco ${nn}: arquivo renderizado não é PNG válido.`);
    } else if (png.length < 24) {
      fail(`Marco ${nn}: PNG inválido ou truncado.`);
    } else {
      const width = png.readUInt32BE(16);
      const height = png.readUInt32BE(20);
      if (width !== 1080 || height !== 1920) {
        fail(`Marco ${nn}: dimensão ${width}x${height}; esperado 1080x1920.`);
      }
    }
  }
}

const pageFiles = (await readdir(resolve('src/pages/marcos')))
  .filter((name) => /^\d{2}-.*\.astro$/.test(name));
if (pageFiles.length !== expectedCount) {
  fail(`diretório de páginas contém ${pageFiles.length} páginas de Marcos; esperado ${expectedCount}.`);
}

const txtFiles = (await readdir(resolve('public/downloads')))
  .filter((name) => /_marco\d{2}_.*\.txt$/.test(name));
if (txtFiles.length !== expectedCount) {
  fail(`public/downloads contém ${txtFiles.length} TXTs de Marcos; esperado ${expectedCount}.`);
}

const studyTxtFiles = (await readdir(resolve('public/estudos')))
  .filter((name) => /_marco\d{2}_estudo_.*\.txt$/.test(name));
if (studyTxtFiles.length !== expectedCount) {
  fail(`public/estudos contém ${studyTxtFiles.length} estudos; esperado ${expectedCount}.`);
}

const uniqueStudyFiles = new Set(Object.values(studyFiles));
if (uniqueStudyFiles.size !== expectedCount) {
  fail(`esperados ${expectedCount} estudos exclusivos, encontrados ${uniqueStudyFiles.size}.`);
}

const uniqueBackgrounds = new Set(ordered.map((marco) => marco.backgroundAsset).filter(Boolean));
if (uniqueBackgrounds.size !== expectedCount) {
  fail(`esperados ${expectedCount} fundos exclusivos, encontrados ${uniqueBackgrounds.size}.`);
}

if (failed) process.exit(1);
console.log(`Pré-lançamento válido: ${expectedCount} Marcos, páginas, TXTs, estudos com leitor acessível, fundos e PNGs 1080x1920 conferidos.`);
