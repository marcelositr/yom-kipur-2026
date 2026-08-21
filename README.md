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
- GitHub Actions para validação e gate de release
- GitHub Pages futuramente

## Requisito de ambiente

Este projeto usa Astro 7 e exige **Node.js 22.19.0 ou superior dentro da série 22.x**.

A versão está registrada em `.nvmrc`, o `npm` está configurado para falhar cedo quando o Node não for compatível e as dependências são travadas por `package-lock.json`.

Instalações locais e no CI usam `npm ci` para reproduzir o mesmo conjunto de dependências.

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

Antes de qualquer publicação:

```bash
bash yk preflight
```

Comandos disponíveis:

- `bash yk setup` — prepara Node, instala as dependências pelo lockfile, instala Chromium e roda a validação normal.
- `bash yk dev` — sobe o site local com Astro.
- `bash yk dev --open` — sobe o Astro e abre o navegador quando o servidor responder.
- `bash yk open [CAMINHO]` — abre no navegador o localhost que já estiver rodando.
- `bash yk test` — valida conteúdo, Astro/TypeScript e build.
- `bash yk preflight` — executa o gate completo de pré-lançamento, incluindo os 15 renders e a conferência dos artefatos.
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
├── docs/                # regras, cronograma, release e sistema visual
├── public/
│   ├── assets/          # ambientações e recursos públicos
│   └── downloads/       # 15 textos devocionais em TXT
├── scripts/             # setup, dev, open, testes, diagnóstico, render e preflight
├── src/
│   ├── components/      # componentes visuais reutilizáveis
│   ├── data/            # fonte estruturada dos Marcos
│   ├── layouts/
│   ├── pages/           # homepage + 15 páginas dos Marcos
│   └── styles/          # design system do site e do card
├── package-lock.json    # dependências travadas para builds reproduzíveis
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

## Validação durante o desenvolvimento

Via launcher:

```bash
bash yk test
```

Manualmente:

```bash
npm test
```

Esse comando valida o conteúdo, executa a checagem do Astro/TypeScript e gera o build estático.

## Gate de pré-lançamento

O gate final é:

```bash
bash yk preflight
```

Equivalente, depois de o ambiente estar preparado:

```bash
npm run release:check
```

O gate:

1. valida os dados dos 15 Marcos;
2. executa Astro/TypeScript e gera o build estático;
3. renderiza os 15 cards;
4. exige exatamente 15 páginas de Marcos;
5. exige exatamente 15 TXTs devocionais;
6. confere os 15 fundos vinculados aos Marcos;
7. confere os nomes dos PNGs renderizados;
8. valida assinatura PNG e dimensão **1080 × 1920** de cada card.

O mesmo gate é executado pelo GitHub Actions. Não existe deploy automático neste estágio.

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

Todos os cards podem ser renderizados com:

```bash
npm run card:render:all
```

Saída esperada para o primeiro Marco:

```text
cards/rendered/01-o-rei-esta-no-campo.png
```

O card é composto em HTML/CSS e capturado pelo Chromium em **1080 × 1920**. A prévia do site e o PNG exportado usam `src/styles/card.css`, reduzindo divergências entre revisão e material final.

O renderizador incorpora a ambientação SVG no PNG final, portanto o export não depende de servidor web nem de conexão externa. Hebraico, niqqud, datas, referências e créditos permanecem texto real.

## Documentação

- [`docs/EDITORIAL.md`](docs/EDITORIAL.md) — limites, fontes e regras editoriais.
- [`docs/VISUAL.md`](docs/VISUAL.md) — identidade gráfica e regras dos cards.
- [`docs/CRONOGRAMA.md`](docs/CRONOGRAMA.md) — ordem, datas e janelas editoriais dos 15 Marcos.
- [`docs/RELEASE.md`](docs/RELEASE.md) — critérios de congelamento e gate de pré-lançamento.

## Antes da publicação

Nenhum merge, GitHub Pages, domínio ou publicação pública deve ocorrer enquanto o gate de pré-lançamento não estiver verde.

Depois do congelamento editorial, mudanças de conteúdo devem ser limitadas a correções factuais, de segurança, ortografia ou defeitos técnicos claramente identificados.

## Crédito editorial

Marcelo Trindade  
@marcelositr  
devnux.com.br
