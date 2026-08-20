# Sistema visual

Este documento fixa o DNA gráfico da série **Caminho para Yom Kipur 5787**.

## Formato

- Card vertical 9:16.
- Render final: 1080 × 1920 px.
- O mesmo componente visual deve alimentar a prévia do site e o PNG exportado.
- Texto crítico nunca deve ser rasterizado por gerador de imagem: hebraico, niqqud, datas, referências e créditos permanecem texto real.

## Princípio

A identidade permanece; a ambientação muda conforme o marco.

Cada card deve parecer parte da mesma série sem repetir mecanicamente Jerusalém, shofar ou qualquer outro símbolo.

## Paleta-base

- Verde profundo: `#173d32`
- Azul/verde noturno: `#183d4c`
- Marfim: `#f5f0e5`
- Dourado envelhecido: `#b99a62`
- Fundo profundo: `#071814`

A paleta pode variar em luminosidade conforme o marco, preservando esse eixo cromático.

## Tipografia

- Títulos: serifada clássica, sóbria.
- Texto funcional: sans-serif limpa.
- Hebraico: fonte com suporte completo a niqqud; priorizar Noto Serif Hebrew quando disponível e manter fallbacks seguros.
- Hierarquia deve sobreviver à leitura em tela pequena.

## Estrutura do card

1. Data hebraica e civil.
2. Classificação do conceito, quando necessária.
3. Hebraico.
4. Título.
5. Transliteração e tradução.
6. Explicação curta.
7. `PARA VIVER ESTE MARCO` com uma prática concreta.
8. Referência bíblica, quando couber.
9. Crédito editorial discreto.

## Ambientação por fase

- Elul / proximidade: campo, estrada, oliveiras, luz dourada.
- Teshuvá: retorno, caminho, porta, deslocamento.
- Cheshbon HaNefesh: mesa, caderno, lamparina, introspecção.
- Tzedaká: gesto de assistência e responsabilidade.
- Selichot: noite, livro de orações, luz baixa.
- Rosh Hashaná: realeza, majestade, shofar quando pertinente.
- Aseret Yemei Teshuvá: tensão contida, responsabilidade, abertura.
- Erev Yom Kipur: simplicidade, branco, água, preparação.
- Yom Kipur: composição mais minimalista e solene.
- Ne'ilá: portas e luz final, sem apresentar a metáfora como descrição literal do céu.

## Marco 01

A arte-base `public/assets/backgrounds/marco01-proximidade.svg` é deliberadamente vetorial e própria do projeto.

Elementos:

- campo ao entardecer;
- caminho aberto;
- oliveiras;
- luz dourada distante;
- ausência de figura humana dominante;
- sensação de proximidade antes de julgamento.

O objetivo visual é apresentar primeiro a ideia: **existe para Quem retornar**.

## Regra de revisão

Antes de congelar um card como versão final:

- verificar o hebraico visualmente no PNG;
- conferir se nenhum niqqud foi deslocado ou cortado;
- testar leitura em tela de celular;
- confirmar contraste sobre a imagem;
- conferir datas e referências novamente;
- evitar excesso de texto;
- comparar com cards anteriores para preservar identidade sem repetição.
