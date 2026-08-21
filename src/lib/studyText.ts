const escapeHtml = (value: string) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const inlineFormat = (value: string) => {
  const escaped = escapeHtml(value);
  return escaped
    .replace(/\*([^*]+)\*/g, '<strong>$1</strong>')
    .replace(/_([^_]+)_/g, '<em>$1</em>');
};

const isSectionHeading = (value: string) => {
  const plain = value.trim();
  if (/^\d+\.\s+/.test(plain)) return true;
  const letters = plain.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ]/g, '');
  return letters.length >= 5 && letters === letters.toUpperCase();
};

const stripDocumentHeader = (lines: string[]) => {
  let index = 0;

  if (lines[index]?.includes('CAMINHO PARA YOM KIPUR')) index += 1;
  while (lines[index]?.trim() === '') index += 1;
  if (lines[index]?.includes('Estudo complementar')) index += 1;
  while (lines[index]?.trim() === '') index += 1;
  if (/^\*?\d{1,2}\s+[^·]+·/.test(lines[index]?.trim() ?? '')) index += 1;
  while (lines[index]?.trim() === '') index += 1;

  return lines.slice(index);
};

export const renderStudyText = (source: string) => {
  const lines = stripDocumentHeader(source.replace(/\r\n/g, '\n').split('\n'));
  const html: string[] = [];
  let listItems: string[] = [];
  let quoteLines: string[] = [];

  const flushList = () => {
    if (!listItems.length) return;
    html.push(`<ul class="study-list">${listItems.map((item) => `<li data-speech-chunk>${inlineFormat(item)}</li>`).join('')}</ul>`);
    listItems = [];
  };

  const flushQuote = () => {
    if (!quoteLines.length) return;
    html.push(`<blockquote data-speech-chunk>${quoteLines.map((line) => `<p>${inlineFormat(line)}</p>`).join('')}</blockquote>`);
    quoteLines = [];
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushList();
      flushQuote();
      continue;
    }

    if (/^━+$/.test(line)) {
      flushList();
      flushQuote();
      html.push('<hr />');
      continue;
    }

    const listMatch = line.match(/^(?:-|•)\s+(.+)$/);
    if (listMatch) {
      flushQuote();
      listItems.push(listMatch[1]);
      continue;
    }

    const quoteMatch = line.match(/^>\s?(.*)$/);
    if (quoteMatch) {
      flushList();
      quoteLines.push(quoteMatch[1]);
      continue;
    }

    flushList();
    flushQuote();

    const boldOnly = line.match(/^\*([^*]+)\*$/);
    if (boldOnly && isSectionHeading(boldOnly[1])) {
      html.push(`<h2 data-speech-chunk>${escapeHtml(boldOnly[1])}</h2>`);
      continue;
    }

    if (boldOnly) {
      html.push(`<p data-speech-chunk><strong>${escapeHtml(boldOnly[1])}</strong></p>`);
      continue;
    }

    html.push(`<p data-speech-chunk>${inlineFormat(line)}</p>`);
  }

  flushList();
  flushQuote();

  return html.join('\n');
};
