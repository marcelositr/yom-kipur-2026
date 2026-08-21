# Pré-lançamento e congelamento

Este documento define o gate técnico e editorial antes de qualquer publicação do projeto **Caminho para Yom Kipur 5787**.

## Estado esperado antes de publicar

O branch de trabalho deve conter:

- 15 Marcos, numerados de 01 a 15;
- 15 páginas Astro correspondentes;
- 15 TXTs devocionais correspondentes;
- 15 fundos visuais exclusivos vinculados aos Marcos;
- `package-lock.json` versionado;
- build estático válido;
- 15 PNGs renderizados com 1080 × 1920;
- nenhum deploy automático habilitado.

## Instalação reproduzível

O projeto usa a versão de Node registrada em `.nvmrc` e dependências travadas em `package-lock.json`.

Instalação:

```bash
bash yk setup
```

O setup utiliza `npm ci`.

## Gate final

Antes de qualquer PR de publicação, merge em `main`, configuração de GitHub Pages ou domínio:

```bash
bash yk preflight
```

O comando executa `npm run release:check`, que faz:

1. validação do conteúdo estruturado;
2. `astro check` / TypeScript;
3. build estático;
4. renderização sequencial dos 15 cards;
5. validação dos artefatos de release.

A validação final exige:

- IDs dos Marcos exatamente de 1 a 15;
- página `src/pages/marcos/NN-slug.astro` para cada Marco;
- TXT realmente existente para cada link de download das páginas;
- componente `MarcoCard` presente em cada página;
- fundo indicado por `backgroundAsset` realmente existente;
- PNG `cards/rendered/NN-slug.png` realmente existente;
- assinatura PNG válida;
- largura de 1080 px;
- altura de 1920 px;
- exatamente 15 páginas de Marcos;
- exatamente 15 TXTs de Marcos;
- exatamente 15 fundos vinculados e exclusivos.

## CI

O GitHub Actions executa o mesmo gate em cada push e pull request:

```text
npm ci
→ instalar Chromium
→ npm run release:check
```

O CI desta fase é somente de validação. Não existe deploy público automático.

## Congelamento editorial

Depois de o gate final ficar verde, o conteúdo entra em freeze.

Mudanças permitidas durante o freeze:

- correção factual comprovada;
- correção de hebraico, transliteração ou referência;
- correção de calendário;
- correção de segurança, especialmente jejum e Pikuach Nefesh;
- ortografia ou gramática;
- defeito técnico ou visual objetivo.

Mudanças que devem esperar nova decisão editorial:

- novo Marco;
- troca de tema apenas por gosto;
- reescrita ampla de devocionais já aprovados;
- adição de nova doutrina, prática ou obrigação;
- alteração da sequência 01 → 15.

## Limite de publicação

O gate verde significa **pronto para decidir a publicação**, não publicação automática.

Mesmo com o preflight aprovado, continuam exigindo decisão explícita:

- abrir PR;
- merge em `main`;
- habilitar GitHub Pages;
- configurar domínio;
- tornar o repositório público;
- anunciar ou distribuir o site.
