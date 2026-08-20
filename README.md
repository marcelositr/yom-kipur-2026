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
- SVG próprio para ambientações vetoriais
- Playwright / Chromium para renderização dos cards
- GitHub Actions para validação e build
- GitHub Pages futuramente

## Requisito de ambiente

Este projeto usa Astro 7 e exige **Node.js 22.19.0 ou superior dentro da série 22.x**.

A versão está registrada em `.nvmrc` e o `npm` está configurado para falhar cedo quando o Node não for compatível.

## Atalho `yk`

O projeto possui um launcher único para evitar a necessidade de lembrar os comandos internos.

Depois de clonar ou atualizar o projeto:

```bash
bash yk setup
```

No dia a dia:

```bash
bash yk dev --open
bash yk open
bash yk test
bash yk render 1
bash yk doctor
bash yk help
```

Comandos disponíveis:

- `bash yk setup` — prepara Node, dependências npm e Chromium e roda uma validação completa.
- `bash yk dev` — sobe o site local com Astro.
- `bash yk dev --open` — sobe o Astro e abre o navegador quando o servidor responder.
- `bash yk open [CAMINHO]` — abre no navegador o localhost que já estiver rodando.
- `bash yk test` — valida conteúdo, Astro/TypeScript e build.
- `bash yk render N` — gera o PNG do marco `N`; sem número, usa o Marco 01.
- `bash yk doctor` — mostra branch, Node, npm, fnm e estado básico do ambiente.
- `bash yk help` — mostra ajuda detalhada, parâmetros e exemplos.

## Estrutura

```text
.
├── yk                    # launcher principal
├── cards/
│   ├── templates/       # composição 9:16 determinística
│   └── rendered/        # PNGs gerados localmente, não versionados
├── docs/                # regras editoriais e sistema visual
├── public/
│   └── assets/          # ambientações e recursos públicos
├── scripts/             # setup, dev, open, testes, diagnóstico e renderização
├── src/
│   ├── components/      # componentes visuais reutilizáveis
│   ├── data/            # fonte estruturada dos marcos
│   ├── layouts/
│   ├── pages/
│   └── styles/          # design system do site e do card
└── .github/workflows/   # CI, sem deploy público
```

## Desenvolvimento manual

Os comandos abaixo continuam disponíveis caso seja necessário trabalhar sem o launcher:

```bash
fnm install
fnm use
npm install
npm run dev
```

O Astro abre localmente em:

```text
http://localhost:4321/yom-kipur-2026/
```

O laboratório do Marco 01 fica em:

```text
http://localhost:4321/yom-kipur-2026/marcos/01-o-rei-esta-no-campo/
```

Para iniciar e abrir automaticamente:

```bash
bash yk dev --open
```

Se o servidor já estiver rodando:

```bash
bash yk open
```

Também é possível abrir uma rota específica:

```bash
bash yk open marcos/01-o-rei-esta-no-campo/
```

## Teste completo

Via launcher:

```bash
bash yk test
```

Manualmente:

```bash
npm test
```

Esse comando valida o conteúdo, executa a checagem do Astro/TypeScript e gera o build estático.

## Renderização do card

Via launcher:

```bash
bash yk render 1
```

Manualmente:

```bash
npx playwright install chromium
npm run card:render -- 1
```

Saída esperada:

```text
cards/rendered/01-o-rei-esta-no-campo.png
```

## Card visual

O card é composto em HTML/CSS e capturado pelo Chromium em **1080 × 1920**.

O preview exibido pelo site e o PNG exportado usam a mesma fonte de estilos (`src/styles/card.css`). Isso evita divergência entre o que é revisado no navegador e o material final.

A ambientação do Marco 01 é um SVG próprio do projeto (`public/assets/backgrounds/marco01-proximidade.svg`) com campo, caminho, oliveiras e luz de entardecer. O renderizador incorpora esse recurso no PNG final, portanto o export não depende de servidor web nem de conexão externa.

Hebraico, niqqud, datas, referências e créditos permanecem texto real. Isso evita erros gráficos em conteúdo que precisa de precisão textual.

## Primeiro marco

**9 Elul 5786 · 22 de agosto de 2026**

**הַמֶּלֶךְ בַּשָּׂדֶה · HaMelech BaSadeh · O Rei está no campo**

O primeiro marco está registrado como `draft` e possui uma página de laboratório para revisão visual e factual. O devocional ainda não é tratado como conteúdo publicado.

## Documentação

- [`docs/EDITORIAL.md`](docs/EDITORIAL.md) — limites, fontes e regras editoriais.
- [`docs/VISUAL.md`](docs/VISUAL.md) — identidade gráfica e regras dos cards.

## Crédito editorial

Marcelo Trindade  
@marcelositr  
devnux.com.br
