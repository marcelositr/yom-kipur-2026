export interface CardCopy {
  classification: string;
  summary: string;
  practice: string;
  source: string;
}

export const cardCopyByMarco: Record<number, CardCopy> = {
  1: {
    classification: 'Metáfora chassídica de Elul',
    summary: 'Em Elul, a parábola do “Rei no campo” ensina proximidade: este é um tempo propício para se aproximar de Hashem.',
    practice: 'Escolha uma área da vida em que deseja começar a retornar e dê hoje um primeiro passo.',
    source: 'Likkutei Torah, Re’eh 32 · Rabi Shneur Zalman de Liadi'
  },
  2: {
    classification: 'Conceito bíblico hebraico',
    summary: 'Emuná é mais que aceitar uma ideia: é fidelidade, lealdade e compromisso vivido.',
    practice: 'Cumpra hoje uma decisão correta mesmo sem depender do ânimo do momento.',
    source: 'Habacuque 2:4 · Rabi Jonathan Sacks'
  },
  3: {
    classification: 'Teshuvá · retorno',
    summary: 'Teshuvá é retorno: reconhecer a distância e mudar conscientemente a direção do caminho.',
    practice: 'Escolha uma área concreta e dê hoje um primeiro passo de retorno.',
    source: 'Deuteronômio 30:2 · tradição judaica'
  },
  4: {
    classification: 'Prática ética judaica de introspecção',
    summary: 'Cheshbon HaNefesh é um balanço honesto da vida para reconhecer o que precisa permanecer e o que precisa mudar.',
    practice: 'Anote: o que manter, o que corrigir e qual será o próximo passo.',
    source: 'Cheshbon HaNefesh · prática de Elul · cf. Lamentações 3:40'
  },
  5: {
    classification: 'Responsabilidade entre pessoas',
    summary: 'Teshuvá diante de Hashem não substitui reparar o dano causado ao próximo.',
    practice: 'Identifique uma reparação concreta e dê o primeiro passo com humildade.',
    source: 'Mishná Yoma 8:9 · Rambam, Hilchot Teshuvá 2:9'
  },
  6: {
    classification: 'Mitzvá de Israel · prática voluntária neste percurso para não judeus',
    summary: 'Tzedaká transforma responsabilidade em ação concreta diante de quem precisa.',
    practice: 'Ajude hoje uma necessidade real dentro das suas possibilidades, com discrição.',
    source: 'Deuteronômio 15:8 · Rambam, Matnot Aniyim 7:1'
  },
  7: {
    classification: 'Liturgia penitencial judaica',
    summary: 'Selichot são súplicas judaicas de perdão e misericórdia na preparação para os Yamim Noraim.',
    practice: 'Leia Êxodo 34:6–7 e faça uma oração breve, em suas próprias palavras, por misericórdia e Teshuvá.',
    source: 'Êxodo 34:6–7 · Rosh Hashaná 17b'
  },
  8: {
    classification: 'Rosh Hashaná · 1 Tishrei',
    summary: 'Em 5787, o primeiro dia cai em Shabbat e o shofar não é tocado nesse dia. Rosh Hashaná chama à realeza de Hashem, memória e julgamento.',
    practice: 'Escolha uma palavra que oriente como você deseja viver diante de Hashem no novo ano.',
    source: 'Levítico 23:24 · Rosh Hashaná 16a'
  },
  9: {
    classification: 'Imagem talmúdica de julgamento e responsabilidade',
    summary: 'O Talmud usa a imagem de três livros abertos em Rosh Hashaná para ensinar julgamento e responsabilidade.',
    practice: 'Escolha uma decisão em aberto e dê hoje o primeiro passo na direção que considera correta diante de Hashem.',
    source: 'Talmud Bavli · Rosh Hashaná 16b:12'
  },
  10: {
    classification: 'Aseret Yemei Teshuvá',
    summary: 'Os Dez Dias de Teshuvá são um período especialmente propício ao retorno entre Rosh Hashaná e Yom Kipur.',
    practice: 'Pare de adiar uma mudança que você já reconheceu e faça hoje uma ação pequena e concreta.',
    source: 'Rosh Hashaná 18a · Rambam, Hilchot Teshuvá 2:6'
  },
  11: {
    classification: 'Shabbat especial dos Dez Dias de Teshuvá',
    summary: 'Shabbat Shuvah recebe seu nome do chamado da Haftarah: “Shuvah Yisrael”, retorna, Israel.',
    practice: 'Leia Oséias 14 e escreva do que precisa se afastar e para onde deseja retornar.',
    source: 'Oséias 14:2, numeração judaica · Haftarah de Shabbat Shuvah'
  },
  12: {
    classification: 'Erev Yom Kipur · dia de preparação',
    summary: 'A tradição judaica ensina a comer e beber no nono dia, preparando o corpo para Yom Kipur.',
    practice: 'Prepare corpo e rotina com responsabilidade: alimentação, hidratação, descanso e pendências. Questões de saúde não se improvisam.',
    source: 'Levítico 23:32 · Yoma 81b'
  },
  13: {
    classification: 'Pikuach Nefesh · princípio haláchico',
    summary: 'Quando o jejum traz risco real à vida, preservar a pessoa precede o jejum. Em Yom Kipur, isso não é concessão: é halachá.',
    practice: 'Doença, medicação ou dúvida de segurança exigem orientação médica; se judeu, também rabínica. Este projeto não emite psak.',
    source: 'Yoma 85b · Shulchan Aruch, Orach Chaim 618'
  },
  14: {
    classification: 'Yom Kipur · mitzvá de Israel',
    summary: 'Yom Kipur é tempo de Teshuvá, confissão, expiação e purificação. O jejum é parte do dia, não seu objetivo isolado.',
    practice: 'Entre com Teshuvá e oração. Se você não é judeu, acompanhe o sentido do dia sem assumir o jejum de Yom Kipur como obrigação ou observância religiosa própria.',
    source: 'Levítico 16:29–30 · Rambam, Hilchot Teshuvá 2:7'
  },
  15: {
    classification: 'Liturgia conclusiva de Yom Kipur',
    summary: 'Ne’ilá é a quinta e última oração de Yom Kipur, recitada nas horas finais do dia. Seu nome significa “fechamento”.',
    practice: 'Releia uma decisão desta caminhada e escolha o próximo passo que levará para depois de Yom Kipur.',
    source: 'Yoma 87b · Rambam, Hilchot Tefilá 1:7–8'
  }
};

export function cardCopyFor(id: number): CardCopy {
  const copy = cardCopyByMarco[id];
  if (!copy) throw new Error(`Cópia de card ausente para o Marco ${id}.`);
  return copy;
}