/** Base-aware href. `base` is '/website' on Pages, so links must not be bare. */
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

export const href = (path: string) =>
  path.startsWith('#') ? path : `${BASE}${path.startsWith('/') ? path : `/${path}`}`;

export const site = {
  name: 'זמורוד חסן',
  legal: 'זמורוד חסן — הנדסת מבנים בע"מ',
  tagline: 'תכנון קונסטרוקציה, בקרת תכן מבנים וייעוץ הנדסי',
  phone: '04-6116777',
  phoneHref: 'tel:+97246116777',
  whatsapp: 'https://wa.me/97246116777',
  email: 'eng.zmorod@gmail.com',
  address: 'גוליס, ת.ד 1183, מיקוד 24980',
  facebook: 'https://www.facebook.com/Eng.zmorod',
  instagram: 'https://www.instagram.com/Eng.zmorod',
  since: 2008,
} as const;

export const nav = [
  { label: 'אודות', hash: '#about' },
  { label: 'שירותים', hash: '#services' },
  { label: 'פרויקטים', hash: '#projects' },
  { label: 'הצטיינות', hash: '#awards' },
  { label: 'יצירת קשר', hash: '#contact' },
] as const;

/** Headline figures. The old site had these three counters stuck at 0. */
export const stats = [
  { value: 400, suffix: '+', unit: '', label: 'פרויקטים' },
  { value: 100, suffix: '+', unit: '', label: 'לקוחות' },
  { value: 17, suffix: '', unit: 'שנים', label: 'ניסיון' },
] as const;

/** Credentials, stepped through one at a time as the About section scrolls. */
export const credentials = [
  {
    year: '2008',
    title: 'הטכניון — בהצטיינות',
    body: 'בוגרת הפקולטה להנדסה אזרחית וסביבתית, בהתמחות תכנון מבנים לרעידות אדמה.',
  },
  {
    year: '2018',
    title: 'RICS לונדון',
    body: 'בקרית תכן מבנים מורשית, בוגרת הארגון הבריטי RICS.',
  },
  {
    year: '2019',
    title: 'מהנדס צעיר מצטיין בתחום התכנון',
    body: 'פרס מטעם איגוד המהנדסים והתשתיות בישראל.',
  },
  {
    year: '2020',
    title: '40 הצעירים המבטיחים',
    body: 'בנדל"ן ובהתחדשות עירונית.',
  },
] as const;

export const about = {
  kicker: 'מי אנחנו',
  headingTop: 'אישה אחת,',
  headingBottom: 'רזומה ארוך.',
  lead: 'בעלת המניות הבלעדית בחברה הינה מהנדסת זמורוד חסן. כל פרויקט עובר תחת ידיה — מהתכנון הראשוני ועד הפיקוח באתר.',
} as const;
