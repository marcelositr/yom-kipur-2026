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
    biblicalReference: 'Isaías 55:6 • ACF',
    practice: 'Reservar alguns minutos para reconhecer a proximidade de Hashem e iniciar a caminhada com intenção.',
    status: 'draft'
  }
];
