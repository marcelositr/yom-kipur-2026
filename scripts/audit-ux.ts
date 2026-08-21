import { chromium } from '@playwright/test';
import { createServer, type Server } from 'node:http';
import { access, readFile, readdir, stat } from 'node:fs/promises';
import { extname, relative, resolve, sep } from 'node:path';

const distDir = resolve('dist');
const errors: string[] = [];

const fail = (message: string) => {
  errors.push(message);
  console.error(`ERRO UX: ${message}`);
};

const exists = async (path: string) => {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
};

const walk = async (dir: string): Promise<string[]> => {
  const entries = await readdir(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const path = resolve(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path));
    else files.push(path);
  }
  return files;
};

const toPosix = (path: string) => path.split(sep).join('/');

const routeForHtml = (file: string) => {
  const rel = toPosix(relative(distDir, file));
  if (rel === 'index.html') return '/';
  if (rel.endsWith('/index.html')) return `/${rel.slice(0, -'index.html'.length)}`;
  return `/${rel}`;
};

const targetForPathname = async (pathname: string) => {
  const decoded = decodeURIComponent(pathname);
  const clean = decoded.replace(/^\/+/, '');
  const direct = resolve(distDir, clean);
  if (!direct.startsWith(distDir)) return undefined;

  if (pathname.endsWith('/')) {
    const index = resolve(direct, 'index.html');
    return await exists(index) ? index : undefined;
  }

  if (await exists(direct)) {
    const info = await stat(direct);
    if (info.isFile()) return direct;
    if (info.isDirectory()) {
      const index = resolve(direct, 'index.html');
      return await exists(index) ? index : undefined;
    }
  }

  if (!extname(direct)) {
    const index = resolve(direct, 'index.html');
    if (await exists(index)) return index;
  }

  return undefined;
};

const extractLocalRefs = (html: string) => {
  const refs: string[] = [];
  const regex = /\b(?:href|src)\s*=\s*["']([^"']+)["']/gi;
  for (const match of html.matchAll(regex)) refs.push(match[1]);
  return refs;
};

if (!(await exists(distDir))) {
  console.error('ERRO UX: diretório dist ausente. Execute npm run build antes da auditoria.');
  process.exit(1);
}

const allFiles = await walk(distDir);
const htmlFiles = allFiles.filter((file) => file.endsWith('.html'));
const htmlCache = new Map<string, string>();
let checkedInternalRefs = 0;

for (const file of htmlFiles) {
  const sourceRoute = routeForHtml(file);
  const html = await readFile(file, 'utf8');
  htmlCache.set(file, html);

  for (const rawRef of extractLocalRefs(html)) {
    if (!rawRef || rawRef.startsWith('#')) continue;
    if (/^(?:https?:|mailto:|tel:|data:|javascript:)/i.test(rawRef)) continue;

    let parsed: URL;
    try {
      parsed = new URL(rawRef, `http://audit.local${sourceRoute}`);
    } catch {
      fail(`${sourceRoute}: referência inválida: ${rawRef}`);
      continue;
    }

    if (parsed.hostname !== 'audit.local') continue;
    checkedInternalRefs += 1;
    const target = await targetForPathname(parsed.pathname);
    if (!target) {
      fail(`${sourceRoute}: destino interno inexistente: ${rawRef}`);
      continue;
    }

    if (parsed.hash && target.endsWith('.html')) {
      const id = decodeURIComponent(parsed.hash.slice(1));
      const targetHtml = htmlCache.get(target) ?? await readFile(target, 'utf8');
      htmlCache.set(target, targetHtml);
      const escaped = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const idRegex = new RegExp(`\\bid=["']${escaped}["']`);
      if (!idRegex.test(targetHtml)) {
        fail(`${sourceRoute}: âncora interna não encontrada: ${rawRef}`);
      }
    }
  }
}

const mimeTypes: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.txt': 'text/plain; charset=utf-8',
  '.ico': 'image/x-icon'
};

const server: Server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url ?? '/', 'http://127.0.0.1');
    const target = await targetForPathname(url.pathname);
    if (!target) {
      res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
      res.end('Not Found');
      return;
    }
    const body = await readFile(target);
    res.writeHead(200, {
      'content-type': mimeTypes[extname(target).toLowerCase()] ?? 'application/octet-stream',
      'cache-control': 'no-store'
    });
    res.end(body);
  } catch (error) {
    res.writeHead(500, { 'content-type': 'text/plain; charset=utf-8' });
    res.end('Internal Server Error');
    console.error(error);
  }
});

await new Promise<void>((resolveListen) => server.listen(0, '127.0.0.1', resolveListen));
const address = server.address();
if (!address || typeof address === 'string') {
  server.close();
  throw new Error('Não foi possível iniciar o servidor local de auditoria.');
}
const origin = `http://127.0.0.1:${address.port}`;

const routes = htmlFiles
  .map(routeForHtml)
  .filter((route) => !route.endsWith('/404.html'))
  .sort();

const viewports = [
  { name: 'phone-320', width: 320, height: 800 },
  { name: 'phone-375', width: 375, height: 812 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'desktop-1024', width: 1024, height: 768 },
  { name: 'desktop-1366', width: 1366, height: 768 },
  { name: 'full-hd', width: 1920, height: 1080 },
  { name: '4k-tv', width: 3840, height: 2160 }
];

const browser = await chromium.launch({ headless: true });
let renderedPages = 0;

try {
  const page = await browser.newPage();

  for (const viewport of viewports) {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    for (const route of routes) {
      const response = await page.goto(`${origin}${route}`, { waitUntil: 'load', timeout: 10_000 });
      if (!response?.ok()) {
        fail(`${viewport.name} ${route}: HTTP ${response?.status() ?? 'sem resposta'}`);
        continue;
      }

      const result = await page.evaluate(() => {
        const doc = document.documentElement;
        const body = document.body;
        const scrollWidth = Math.max(doc.scrollWidth, body?.scrollWidth ?? 0);
        return {
          viewportWidth: window.innerWidth,
          scrollWidth,
          hasMain: Boolean(document.querySelector('main')),
          hasHeading: Boolean(document.querySelector('h1')),
          title: document.title.trim()
        };
      });

      if (result.scrollWidth > result.viewportWidth + 1) {
        fail(`${viewport.name} ${route}: overflow horizontal de ${result.scrollWidth - result.viewportWidth}px.`);
      }
      if (!result.hasMain) fail(`${viewport.name} ${route}: elemento <main> ausente.`);
      if (!result.hasHeading) fail(`${viewport.name} ${route}: título <h1> ausente.`);
      if (!result.title) fail(`${viewport.name} ${route}: <title> vazio.`);
      renderedPages += 1;
    }
  }

  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(`${origin}/`, { waitUntil: 'load' });
  await page.keyboard.press('Tab');
  const focusState = await page.evaluate(() => {
    const element = document.activeElement as HTMLElement | null;
    if (!element || element === document.body) return { visible: false, description: 'nenhum elemento interativo' };
    const style = getComputedStyle(element);
    const outlineVisible = style.outlineStyle !== 'none' && Number.parseFloat(style.outlineWidth) > 0;
    const shadowVisible = style.boxShadow !== 'none';
    return {
      visible: outlineVisible || shadowVisible,
      description: `${element.tagName.toLowerCase()}${element.id ? `#${element.id}` : ''}`
    };
  });
  if (!focusState.visible) {
    fail(`navegação por teclado: foco visual não detectado em ${focusState.description}.`);
  }
} finally {
  await browser.close();
  await new Promise<void>((resolveClose) => server.close(() => resolveClose()));
}

if (errors.length > 0) {
  console.error(`\nAuditoria UX falhou com ${errors.length} problema(s).`);
  process.exit(1);
}

console.log(`Auditoria UX válida: ${htmlFiles.length} páginas HTML, ${checkedInternalRefs} referências internas e ${renderedPages} renderizações responsivas verificadas em 7 larguras.`);
