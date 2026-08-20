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
  }
];
