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
  calendarSourceUrl?: string;
  calendarNote?: string;
  parasha?: string;
  biblicalReference?: string;
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
    traditionSource: 'Rabi Shneur Zalman de Liadi · Likkutei Torah, Re’eh 32',
    traditionSourceUrl: 'https://www.chabad.org/library/article_cdo/aid/289243/jewish/King-in-the-Field.htm',
    calendarSourceUrl: 'https://www.hebcal.com/converter?h2g=1&hd=9&hm=Elul&hy=5786',
    calendarNote: '9 Elul 5786 começa ao pôr do sol de sexta-feira, 21 de agosto. O dia civil de 22 de agosto cai em Shabbat, Parashat Ki Teitzei.',
    parasha: 'Ki Teitzei',
    biblicalReference: 'Isaías 55:6 • ACF',
    practice: 'Reserve alguns minutos em silêncio para reconhecer a proximidade de Hashem e escolher uma área da vida na qual você deseja iniciar um retorno consciente.',
    status: 'draft'
  }
];
