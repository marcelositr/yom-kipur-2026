# Caminho para Yom Kipur 5787

Projeto editorial e visual de preparação para Yom Kipur 5787 / 2026.

A proposta é oferecer uma caminhada gradual de estudo, reflexão e prática, apresentando Escrituras, conceitos e tradições judaicas de forma responsável e acessível a um público majoritariamente cristão que conhece a Bíblia, mas pouco o Judaísmo.

> O repositório continua privado e em pré-lançamento. GitHub Pages ainda não está configurado para publicação.

## Estado atual

O arco principal está completo em **15 Marcos**, de Elul até Ne’ilá.

Cada Marco possui:

- dados estruturados em `src/data/marcos.ts`;
- card vertical 9:16;
- ambientação SVG própria;
- página Astro individual;
- TXT devocional para distribuição e leitura no WhatsApp;
- fontes e notas de calendário quando necessárias.

A sequência editorial percorre:

`proximidade → Emuná → Teshuvá → Cheshbon HaNefesh → reparação → Tzedaká → Selichot → Rosh Hashaná → responsabilidade → Aseret Yemei Teshuvá → Shabbat Shuvah → Erev Yom Kipur → Pikuach Nefesh → Yom Kipur → Ne’ilá`

## Princípio editorial

Não existe obrigação de publicar diariamente.

Cada Marco precisa acrescentar:

- uma compreensão nova;
- uma prática concreta.

O ritmo é determinado pelo calendário judaico, pela progressão espiritual e pelo tempo necessário para viver cada etapa.

As fontes são identificadas conforme sua natureza: bíblica, rabínica, haláchica, litúrgica, costume ou metáfora posterior. O projeto apresenta a tradição judaica sem transformar participação educativa de não judeus em obrigação haláchica.

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
- `bash yk render N` — gera o PNG do Marco `N`; sem número, usa o Marco 01.
- `bash yk doctor` — mostra branch, Node, npm, fnm e estado básico do ambiente.
- `bash yk help` — mostra ajuda detalhada, parâmetros e exemplos.

## Estrutura

```text
.
├── yk                    # launcher principal
├── cards/
│   ├── templates/       # composição 9:16 determinística
│   └── rendered/        # PNGs gerados localmente, não versionados
├── docs/                # regras, cronograma e sistema visual
├── public/
│   ├── assets/          # ambientações e recursos públicos
│   └── downloads/       # 15 textos devocionais em TXT
├── scripts/             # setup, dev, open, testes, diagnóstico e renderização
├── src/
│   ├── components/      # componentes visuais reutilizáveis
│   ├── data/            # fonte estruturada dos Marcos
│   ├── layouts/
│   ├── pages/           # homepage + 15 páginas dos Marcos
│   └── styles/          # design system do site e do card
└── .github/workflows/   # CI, sem deploy público
```

## Site local

O Astro abre em:

```text
http://localhost:4321/yom-kipur-2026/
```

A homepage funciona como guia do projeto e reúne:

- apresentação;
- instruções de uso;
- cronograma mestre;
- coleção completa dos 15 Marcos.

As páginas dos Marcos possuem navegação sequencial com **Anterior / Todos os Marcos / Próximo**.

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

## Renderização dos cards

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

O card é composto em HTML/CSS e capturado pelo Chromium em **1080 × 1920**. A prévia do site e o PNG exportado usam `src/styles/card.css`, reduzindo divergências entre revisão e material final.

O renderizador incorpora a ambientação SVG no PNG final, portanto o export não depende de servidor web nem de conexão externa. Hebraico, niqqud, datas, referências e créditos permanecem texto real.

## Documentação

- [`docs/EDITORIAL.md`](docs/EDITORIAL.md) — limites, fontes e regras editoriais.
- [`docs/VISUAL.md`](docs/VISUAL.md) — identidade gráfica e regras dos cards.
- [`docs/CRONOGRAMA.md`](docs/CRONOGRAMA.md) — ordem, datas e janelas editoriais dos 15 Marcos.

## Antes da publicação

A etapa seguinte é o pré-lançamento técnico: instalação reprodutível, validação completa, renderização dos 15 PNGs e simulação integral do site antes de qualquer merge, Pages ou publicação pública.

## Crédito editorial

Marcelo Trindade  
@marcelositr  
devnux.com.br
