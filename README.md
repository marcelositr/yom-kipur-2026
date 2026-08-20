# Caminho para Yom Kipur 5787

Projeto editorial e visual de preparação para Yom Kipur 5787 / 2026.

A proposta é construir uma caminhada gradual de estudo, reflexão e prática, apresentando raízes judaicas, Escrituras, conceitos e tradições de forma responsável e acessível a um público majoritariamente cristão que conhece a Bíblia, mas pouco o Judaísmo.

> Este repositório está em desenvolvimento privado. GitHub Pages ainda não está configurado para publicação.

## Princípio editorial

Não existe obrigação de publicar diariamente.

Cada novo marco precisa acrescentar:

- uma compreensão nova;
- uma prática concreta.

O ritmo é determinado pelo calendário judaico, pela progressão espiritual e pelo tempo necessário para viver cada etapa.

## Stack

- Astro 7
- TypeScript
- HTML/CSS
- Playwright / Chromium para renderização dos cards
- GitHub Actions para validação e build
- GitHub Pages futuramente

## Requisito de ambiente

Este projeto usa Astro 7 e exige **Node.js 22.12.0 ou superior dentro da série 22.x**.

A versão está registrada em `.nvmrc` e o `npm` está configurado para falhar cedo quando o Node não for compatível.

Com `fnm`:

```bash
fnm install
fnm use
node -v
```

A versão esperada é `v22.12.0` ou superior dentro da série 22.x.

## Estrutura

```text
.
├── cards/
│   ├── templates/       # composição 9:16 determinística
│   └── rendered/        # PNGs gerados localmente, não versionados
├── docs/                # regras e documentação editorial
├── scripts/             # validação e renderização
├── src/
│   ├── data/            # fonte estruturada dos marcos
│   ├── layouts/
│   ├── pages/
│   └── styles/
└── .github/workflows/   # CI, sem deploy público
```

## Desenvolvimento

```bash
npm install
npm run dev
```

Validação:

```bash
npm run content:validate
npm run check
npm run build
```

Para instalar o Chromium usado na renderização dos cards:

```bash
npx playwright install chromium
```

Renderizar um marco em PNG:

```bash
npm run card:render -- 1
```

Saída esperada:

```text
cards/rendered/01-o-rei-esta-no-campo.png
```

## Card visual

O card é composto em HTML/CSS e capturado pelo Chromium em **1080 × 1920**.

A imagem de fundo pode ser produzida separadamente, inclusive com geração de imagem, mas hebraico, niqqud, datas, referências e créditos permanecem texto real. Isso evita erros gráficos em conteúdo que precisa de precisão textual.

## Primeiro marco

**9 Elul 5786 · 22 de agosto de 2026**

**הַמֶּלֶךְ בַּשָּׂדֶה · HaMelech BaSadeh · O Rei está no campo**

O primeiro marco está registrado apenas como `draft`. Conteúdo visual e devocional devem passar por revisão factual antes da publicação.

## Documentação editorial

Leia [`docs/EDITORIAL.md`](docs/EDITORIAL.md) antes de criar ou alterar conteúdo.

## Crédito editorial

Marcelo Trindade  
@marcelositr  
devnux.com.br
