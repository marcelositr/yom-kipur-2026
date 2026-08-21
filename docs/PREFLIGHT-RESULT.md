# Preflight result

- Result: **PASS**
- Source commit: `eba3d3494a12306eb095c6805304582f17069c4a`
- Runner: `Linux`
- Node: `v22.19.0`
- npm: `10.9.3`

## Log tail

```text

> yom-kipur-2026@0.1.0 test
> npm run content:validate && npm run check && npm run build


> yom-kipur-2026@0.1.0 content:validate
> tsx scripts/validate-content.ts

Conteúdo válido: 15 marco(s).

> yom-kipur-2026@0.1.0 check
> astro check

[2m00:24:38[22m [34m[types][39m Generated [2m151ms[22m
[2m00:24:38[22m [34m[check][39m Getting diagnostics for Astro files in /home/runner/work/yom-kipur-2026/yom-kipur-2026...
Result (25 files): 
- 0 errors
- 0 warnings
- 0 hints


> yom-kipur-2026@0.1.0 build
> astro check && astro build

[2m00:24:46[22m [34m[types][39m Generated [2m57ms[22m
[2m00:24:46[22m [34m[check][39m Getting diagnostics for Astro files in /home/runner/work/yom-kipur-2026/yom-kipur-2026...
Result (25 files): 
- 0 errors
- 0 warnings
- 0 hints

[2m00:24:53[22m [34m[types][39m Generated [2m54ms[22m
[2m00:24:53[22m [34m[build][39m output: [34m"static"[39m
[2m00:24:53[22m [34m[build][39m mode: [34m"static"[39m
[2m00:24:53[22m [34m[build][39m directory: [34m/home/runner/work/yom-kipur-2026/yom-kipur-2026/dist/[39m
[2m00:24:53[22m [34m[build][39m Collecting build info...
[2m00:24:53[22m [34m[build][39m [32m✓ Completed in 151ms.[39m
[2m00:24:53[22m [34m[build][39m Building static entrypoints...
[2m00:24:53[22m [34m[vite][39m [32m✓ built in 311ms[39m
[2m00:24:53[22m [34m[vite][39m [32m✓ built in 22ms[39m
[2m00:24:53[22m [34m[build][39m Rearranging server assets...

[42m[30m generating static routes [39m[49m
[2m00:24:53[22m   [34m├─[39m [2m/marcos/01-o-rei-esta-no-campo/index.html[22m [2m(+13ms)[22m 
[2m00:24:53[22m   [34m├─[39m [2m/marcos/02-confiar-e-permanecer/index.html[22m [2m(+12ms)[22m 
[2m00:24:53[22m   [34m├─[39m [2m/marcos/03-voltar-comeca-com-um-passo/index.html[22m [2m(+5ms)[22m 
[2m00:24:53[22m   [34m├─[39m [2m/marcos/04-olhe-com-verdade-para-o-caminho/index.html[22m [2m(+3ms)[22m 
[2m00:24:53[22m   [34m├─[39m [2m/marcos/05-voltar-tambem-e-reparar/index.html[22m [2m(+3ms)[22m 
[2m00:24:53[22m   [34m├─[39m [2m/marcos/06-abra-a-mao/index.html[22m [2m(+3ms)[22m 
[2m00:24:53[22m   [34m├─[39m [2m/marcos/07-quando-o-retorno-vira-oracao/index.html[22m [2m(+3ms)[22m 
[2m00:24:53[22m   [34m├─[39m [2m/marcos/08-diante-do-rei/index.html[22m [2m(+3ms)[22m 
[2m00:24:53[22m   [34m├─[39m [2m/marcos/09-o-que-fazemos-importa/index.html[22m [2m(+4ms)[22m 
[2m00:24:53[22m   [34m├─[39m [2m/marcos/10-nao-adie-o-retorno/index.html[22m [2m(+3ms)[22m 
[2m00:24:53[22m   [34m├─[39m [2m/marcos/11-retorne-ao-seu-deus/index.html[22m [2m(+2ms)[22m 
[2m00:24:53[22m   [34m├─[39m [2m/marcos/12-prepare-se-para-entrar/index.html[22m [2m(+2ms)[22m 
[2m00:24:53[22m   [34m├─[39m [2m/marcos/13-a-vida-vem-primeiro/index.html[22m [2m(+2ms)[22m 
[2m00:24:53[22m   [34m├─[39m [2m/marcos/14-volte-por-inteiro/index.html[22m [2m(+2ms)[22m 
[2m00:24:53[22m   [34m├─[39m [2m/marcos/15-permaneca-ate-o-fim/index.html[22m [2m(+9ms)[22m 
[2m00:24:53[22m   [34m├─[39m [2m/index.html[22m [2m(+3ms)[22m 
[2m00:24:53[22m [32m✓ Completed in 84ms.
[39m
[2m00:24:53[22m [34m[build][39m [32m✓ Completed in 460ms.[39m
[2m00:24:53[22m [34m[build][39m 16 page(s) built in [1m612ms[22m
[2m00:24:53[22m [34m[build][39m [1mComplete![22m

> yom-kipur-2026@0.1.0 card:render:all
> tsx scripts/render-all-cards.ts


==> Renderizando Marco 01 · O Rei está no campo
/home/runner/work/yom-kipur-2026/yom-kipur-2026/cards/rendered/01-o-rei-esta-no-campo.png

==> Renderizando Marco 02 · Confiar é permanecer
/home/runner/work/yom-kipur-2026/yom-kipur-2026/cards/rendered/02-confiar-e-permanecer.png

==> Renderizando Marco 03 · Voltar começa com um passo
/home/runner/work/yom-kipur-2026/yom-kipur-2026/cards/rendered/03-voltar-comeca-com-um-passo.png

==> Renderizando Marco 04 · Olhe com verdade para o caminho
/home/runner/work/yom-kipur-2026/yom-kipur-2026/cards/rendered/04-olhe-com-verdade-para-o-caminho.png

==> Renderizando Marco 05 · Voltar também é reparar
/home/runner/work/yom-kipur-2026/yom-kipur-2026/cards/rendered/05-voltar-tambem-e-reparar.png

==> Renderizando Marco 06 · Abra a mão
/home/runner/work/yom-kipur-2026/yom-kipur-2026/cards/rendered/06-abra-a-mao.png

==> Renderizando Marco 07 · Quando o retorno vira oração
/home/runner/work/yom-kipur-2026/yom-kipur-2026/cards/rendered/07-quando-o-retorno-vira-oracao.png

==> Renderizando Marco 08 · Diante do Rei
/home/runner/work/yom-kipur-2026/yom-kipur-2026/cards/rendered/08-diante-do-rei.png

==> Renderizando Marco 09 · O que fazemos importa
/home/runner/work/yom-kipur-2026/yom-kipur-2026/cards/rendered/09-o-que-fazemos-importa.png

==> Renderizando Marco 10 · Não adie o retorno
/home/runner/work/yom-kipur-2026/yom-kipur-2026/cards/rendered/10-nao-adie-o-retorno.png

==> Renderizando Marco 11 · Retorne ao seu Deus
/home/runner/work/yom-kipur-2026/yom-kipur-2026/cards/rendered/11-retorne-ao-seu-deus.png

==> Renderizando Marco 12 · Prepare-se para entrar
/home/runner/work/yom-kipur-2026/yom-kipur-2026/cards/rendered/12-prepare-se-para-entrar.png

==> Renderizando Marco 13 · A vida vem primeiro
/home/runner/work/yom-kipur-2026/yom-kipur-2026/cards/rendered/13-a-vida-vem-primeiro.png

==> Renderizando Marco 14 · Volte por inteiro
/home/runner/work/yom-kipur-2026/yom-kipur-2026/cards/rendered/14-volte-por-inteiro.png

==> Renderizando Marco 15 · Permaneça até o fim
/home/runner/work/yom-kipur-2026/yom-kipur-2026/cards/rendered/15-permaneca-ate-o-fim.png

15 cards renderizados com sucesso.

> yom-kipur-2026@0.1.0 preflight:release
> tsx scripts/preflight-release.ts

Pré-lançamento válido: 15 Marcos, páginas, TXTs, fundos e PNGs 1080x1920 conferidos.
```
