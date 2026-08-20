export interface Marco {
  id: number;
  slug: string;
  title: string;
  hebrew: string;
  transliteration: string;
  translation: string;
  hebrewDate: string;
  civilDate: string;
  publicationDate: string;
  theme: string;
  summary: string;
  classification: string;
  traditionSource?: string;
  traditionSourceUrl?: string;
  conceptSource?: string;
  conceptSourceUrl?: string;
  calendarSourceUrl?: string;
  calendarNote?: string;
  parasha?: string;
  biblicalReference?: string;
  backgroundAsset?: string;
  practice: string;
  status: 'draft' | 'review' | 'published';
}

export const marcos: Marco[] = [
  {
    id: 1,
    slug: 'o-rei-esta-no-campo',
    title: 'O Rei está no campo',
    hebrew: 'הַמֶּלֶךְ בַּשָּׂדֶה',
    transliteration: 'HaMelech BaSadeh',
    translation: 'O Rei está no campo',
    hebrewDate: '9 Elul 5786',
    civilDate: '22 de agosto de 2026',
    publicationDate: '21 de agosto de 2026',
    theme: 'proximidade',
    summary: 'Em Elul, uma metáfora chassídica descreve Hashem como o Rei que sai ao campo: próximo, acessível e acolhedor.',
    classification: 'Metáfora chassídica posterior',
    traditionSource: 'Rabi Shneur Zalman de Liadi · Likkutei Torah, Re’eh 32b',
    traditionSourceUrl: 'https://www.chabad.org/library/article_cdo/aid/289243/jewish/King-in-the-Field.htm',
    calendarSourceUrl: 'https://www.hebcal.com/converter?h2g=1&hd=9&hm=Elul&hy=5786',
    calendarNote: '9 Elul 5786 começa ao pôr do sol de sexta-feira, 21 de agosto. O dia civil de 22 de agosto cai em Shabbat, Parashat Ki Teitzei.',
    parasha: 'Ki Teitzei',
    biblicalReference: 'Isaías 55:6 • ACF',
    backgroundAsset: '/assets/backgrounds/marco01-proximidade.svg',
    practice: 'Reserve alguns minutos em silêncio para reconhecer a proximidade de Hashem e escolher uma área da vida na qual você deseja iniciar um retorno consciente.',
    status: 'draft'
  },
  {
    id: 2,
    slug: 'confiar-e-permanecer',
    title: 'Confiar é permanecer',
    hebrew: 'אֱמוּנָה',
    transliteration: 'Emuná',
    translation: 'Firmeza, fidelidade, confiança',
    hebrewDate: '12 Elul 5786',
    civilDate: '25 de agosto de 2026',
    publicationDate: '24 de agosto de 2026',
    theme: 'emuna',
    summary: 'Depois de reconhecer a proximidade de Hashem, começamos a responder. Emuná não fica apenas na ideia: ela aprende a permanecer, caminhar e agir com fidelidade.',
    classification: 'Conceito bíblico hebraico',
    conceptSource: 'Habacuque 2:4 · וְצַדִּיק בֶּאֱמוּנָתוֹ יִחְיֶה',
    conceptSourceUrl: 'https://www.sefaria.org/Habakkuk.2.4?with=Commentary',
    traditionSource: 'Rabi Jonathan Sacks · Emuná como fidelidade, lealdade e compromisso',
    traditionSourceUrl: 'https://www.chabad.org/parshah/article_cdo/aid/3488054/jewish/What-is-the-theme-of-the-stories-of-Genesis.htm',
    calendarSourceUrl: 'https://www.hebcal.com/converter?h2g=1&hd=12&hm=Elul&hy=5786',
    calendarNote: '12 Elul 5786 começa ao pôr do sol de segunda-feira, 24 de agosto. A publicação nessa noite já entra no próprio 12 Elul.',
    biblicalReference: 'Habacuque 2:4 • ACF',
    backgroundAsset: '/assets/backgrounds/marco02-emuna.svg',
    practice: 'Escolha hoje uma pequena decisão que você sabe ser correta e cumpra-a com fidelidade, sem depender do ânimo do momento.',
    status: 'draft'
  },
  {
    id: 3,
    slug: 'voltar-comeca-com-um-passo',
    title: 'Voltar começa com um passo',
    hebrew: 'תְּשׁוּבָה',
    transliteration: 'Teshuvá',
    translation: 'Retorno',
    hebrewDate: '15 Elul 5786',
    civilDate: '28 de agosto de 2026',
    publicationDate: '27 de agosto de 2026',
    theme: 'teshuva',
    summary: 'Teshuvá é retorno. Depois de reconhecer a proximidade de Hashem e aprender a permanecer em confiança, começamos a mudar conscientemente a direção da caminhada.',
    classification: 'Conceito bíblico e tradição judaica',
    conceptSource: 'Deuteronômio 30:2 · וְשַׁבְתָּ עַד־יְהוָה אֱלֹהֶיךָ',
    conceptSourceUrl: 'https://www.sefaria.org/Deuteronomy.30.2',
    traditionSource: 'Teshuvá · retorno a Hashem',
    traditionSourceUrl: 'https://www.chabad.org/library/article_cdo/aid/361890/jewish/Teshuvah.htm',
    calendarSourceUrl: 'https://www.hebcal.com/converter?h2g=1&hd=15&hm=Elul&hy=5786',
    calendarNote: '15 Elul 5786 começa ao pôr do sol de quinta-feira, 27 de agosto. A publicação nessa noite já entra no próprio 15 Elul.',
    biblicalReference: 'Deuteronômio 30:2 • ACF',
    backgroundAsset: '/assets/backgrounds/marco03-teshuva.svg',
    practice: 'Escolha uma área concreta em que você percebe distância entre o que sabe e o que vive. Defina um primeiro passo pequeno e possível de retorno e cumpra-o hoje.',
    status: 'draft'
  },
  {
    id: 4,
    slug: 'olhe-com-verdade-para-o-caminho',
    title: 'Olhe com verdade para o caminho',
    hebrew: 'חֶשְׁבּוֹן הַנֶּפֶשׁ',
    transliteration: 'Cheshbon HaNefesh',
    translation: 'Balanço da alma',
    hebrewDate: '19 Elul 5786',
    civilDate: '1º de setembro de 2026',
    publicationDate: '31 de agosto de 2026',
    theme: 'cheshbon-hanefesh',
    summary: 'Teshuvá muda a direção. Cheshbon HaNefesh pede uma pausa honesta para examinar o caminho, reconhecer o que precisa permanecer e enxergar o que ainda precisa ser corrigido.',
    classification: 'Prática ética judaica de introspecção',
    conceptSource: 'Lamentações 3:40 · נַחְפְּשָׂה דְרָכֵינוּ וְנַחְקֹרָה וְנָשׁוּבָה עַד־יְהוָה',
    conceptSourceUrl: 'https://www.sefaria.org/Lamentations.3.40',
    traditionSource: 'Cheshbon HaNefesh · balanço espiritual no mês de Elul',
    traditionSourceUrl: 'https://www.chabad.org/holidays/JewishNewYear/template_cdo/aid/971407/jewish/Soul-Accounting-in-5-Steps.htm',
    calendarSourceUrl: 'https://www.hebcal.com/converter?h2g=1&hd=19&hm=Elul&hy=5786',
    calendarNote: '19 Elul 5786 começa ao pôr do sol de segunda-feira, 31 de agosto. A publicação nessa noite já entra no próprio 19 Elul.',
    biblicalReference: 'Lamentações 3:40 • ACF',
    backgroundAsset: '/assets/backgrounds/marco04-cheshbon-hanefesh.svg',
    practice: 'Separe dez minutos e faça um balanço simples em uma folha: o que precisa continuar, o que precisa mudar e qual é o próximo passo concreto. Escreva com honestidade, sem se justificar e sem se condenar.',
    status: 'draft'
  },
  {
    id: 5,
    slug: 'voltar-tambem-e-reparar',
    title: 'Voltar também é reparar',
    hebrew: 'בֵּין אָדָם לַחֲבֵרוֹ',
    transliteration: 'Bein Adam LaChavero',
    translation: 'Entre a pessoa e seu próximo',
    hebrewDate: '22 Elul 5786',
    civilDate: '4 de setembro de 2026',
    publicationDate: '3 de setembro de 2026',
    theme: 'reparacao',
    summary: 'O exame da própria vida também revela dívidas relacionais. Na tradição judaica, Teshuvá diante de Hashem não substitui a responsabilidade de reparar o dano causado a outra pessoa.',
    classification: 'Princípio ético-haláchico rabínico',
    conceptSource: 'Mishná Yoma 8:9 / Yoma 85b · עבירות שבין אדם לחבירו',
    conceptSourceUrl: 'https://www.sefaria.org/Yoma.85b.7',
    traditionSource: 'Rambam · Mishneh Torah, Hilchot Teshuvá 2:9',
    traditionSourceUrl: 'https://www.sefaria.org/Mishneh_Torah%2C_Repentance.2.9',
    calendarSourceUrl: 'https://www.hebcal.com/converter?h2g=1&hd=22&hm=Elul&hy=5786',
    calendarNote: '22 Elul 5786 começa ao pôr do sol de quinta-feira, 3 de setembro. O marco antecede Leil Selichot, que em 5786 ocorre após o anoitecer de sábado, 5 de setembro, na tradição ashkenazi.',
    biblicalReference: 'Levítico 19:18 • ACF',
    backgroundAsset: '/assets/backgrounds/marco05-reparacao.svg',
    practice: 'Identifique uma relação em que você causou dano, ficou devendo algo ou precisa pedir perdão. Defina uma reparação concreta e dê o primeiro passo com humildade, sem transformar o pedido em nova pressão sobre a outra pessoa.',
    status: 'draft'
  },
  {
    id: 6,
    slug: 'abra-a-mao',
    title: 'Abra a mão',
    hebrew: 'צְדָקָה',
    transliteration: 'Tzedaká',
    translation: 'Justiça, retidão e generosidade responsável',
    hebrewDate: '24 Elul 5786',
    civilDate: '6 de setembro de 2026',
    publicationDate: '5 de setembro de 2026',
    theme: 'tzedaka',
    summary: 'Depois de examinar, retornar e reparar, a mudança começa a alcançar quem está fora de nós. Tzedaká transforma consciência em responsabilidade concreta diante da necessidade do próximo.',
    classification: 'Mitzvá bíblica no judaísmo · prática voluntária para não judeus',
    conceptSource: 'Deuteronômio 15:8 · כִּי פָתֹחַ תִּפְתַּח אֶת יָדְךָ לוֹ',
    conceptSourceUrl: 'https://www.sefaria.org/Deuteronomy.15.8',
    traditionSource: 'Rambam · Mishneh Torah, Gifts to the Poor 7:1',
    traditionSourceUrl: 'https://www.sefaria.org/Mishneh_Torah%2C_Gifts_to_the_Poor.7.1',
    calendarSourceUrl: 'https://www.hebcal.com/converter?h2g=1&hd=24&hm=Elul&hy=5786',
    calendarNote: '24 Elul 5786 começa ao pôr do sol de sábado, 5 de setembro. A publicação está prevista após o encerramento do Shabbat, já na entrada de 24 Elul.',
    biblicalReference: 'Deuteronômio 15:8 • ACF',
    backgroundAsset: '/assets/backgrounds/marco06-tzedaka.svg',
    practice: 'Escolha uma necessidade real e contribua de modo responsável com algo que você possa oferecer. Faça com discrição, sem esperar reconhecimento e sem transformar a ajuda em palco.',
    status: 'draft'
  },
  {
    id: 7,
    slug: 'quando-o-retorno-vira-oracao',
    title: 'Quando o retorno vira oração',
    hebrew: 'סְלִיחוֹת',
    transliteration: 'Selichot',
    translation: 'Súplicas por perdão',
    hebrewDate: '26 Elul 5786',
    civilDate: '8 de setembro de 2026',
    publicationDate: '7 de setembro de 2026',
    theme: 'selichot',
    summary: 'Depois de retornar, reparar e agir com justiça, a caminhada ganha voz. Selichot é a tradição litúrgica judaica de súplicas por perdão e misericórdia na preparação para os Yamim Noraim.',
    classification: 'Liturgia penitencial judaica · tradição comunitária',
    conceptSource: 'Êxodo 34:6-7 · atributos de misericórdia',
    conceptSourceUrl: 'https://www.sefaria.org/Exodus.34.6-7',
    traditionSource: 'Talmud Bavli · Rosh Hashaná 17b · os atributos de misericórdia',
    traditionSourceUrl: 'https://www.sefaria.org/Rosh_Hashanah.17b.6',
    calendarSourceUrl: 'https://www.hebcal.com/converter?h2g=1&hd=26&hm=Elul&hy=5786',
    calendarNote: '26 Elul 5786 começa ao pôr do sol de segunda-feira, 7 de setembro. Comunidades sefarditas já recitam Selichot desde o início de Elul; no costume ashkenazi de 5786, Leil Selichot ocorreu após o anoitecer de sábado, 5 de setembro.',
    biblicalReference: 'Êxodo 34:6-7 • ACF',
    backgroundAsset: '/assets/backgrounds/marco07-selichot.svg',
    practice: 'Leia Êxodo 34:6-7 lentamente. Depois, em suas próprias palavras, faça uma oração breve pedindo misericórdia e força para continuar a Teshuvá que você já começou, sem tentar reproduzir uma liturgia que pertence a uma comunidade específica.',
    status: 'draft'
  },
  {
    id: 8,
    slug: 'diante-do-rei',
    title: 'Diante do Rei',
    hebrew: 'רֹאשׁ הַשָּׁנָה',
    transliteration: 'Rosh Hashaná',
    translation: 'Cabeça do ano',
    hebrewDate: '1 Tishrei 5787',
    civilDate: '12 de setembro de 2026',
    publicationDate: '11 de setembro de 2026',
    theme: 'rosh-hashana',
    summary: 'A caminhada de Elul chega a Rosh Hashaná. A tradição judaica desloca o foco para a realeza de Hashem, memória e julgamento: não apenas “o que quero para o novo ano?”, mas diante de Quem escolho viver.',
    classification: 'Festividade bíblica de 1 Tishrei · Rosh Hashaná na tradição rabínica e litúrgica',
    conceptSource: 'Levítico 23:24 · זִכְרוֹן תְּרוּעָה',
    conceptSourceUrl: 'https://www.sefaria.org/Leviticus.23.24',
    traditionSource: 'Talmud Bavli · Rosh Hashaná 16a · Malchuyot, Zichronot e Shofarot',
    traditionSourceUrl: 'https://www.sefaria.org/Rosh_Hashanah.16a.15',
    calendarSourceUrl: 'https://www.hebcal.com/converter?h2g=1&hd=1&hm=Tishrei&hy=5787',
    calendarNote: '1 Tishrei 5787 começa ao pôr do sol de sexta-feira, 11 de setembro. Como o primeiro dia de Rosh Hashaná coincide com Shabbat, a publicação está prevista para a tarde de sexta-feira, antes do pôr do sol, como preparação para a entrada de Yom Tov.',
    biblicalReference: 'Levítico 23:24 • ACF',
    backgroundAsset: '/assets/backgrounds/marco08-rosh-hashana.svg',
    practice: 'Antes do pôr do sol, releia o caminho percorrido desde Elul e escreva uma frase simples: “Neste novo ano, quero viver diante de Hashem com ______.” Não transforme isso em promessa grandiosa; escolha uma palavra que possa orientar decisões concretas.',
    status: 'draft'
  }
];
