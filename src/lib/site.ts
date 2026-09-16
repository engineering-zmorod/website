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

/** Featured work. `image` stays null until real photography arrives. */
export const projects = [
  {
    name: 'מגדלי גלי ים',
    place: 'קרית ים · מגרש 102 ו‑104',
    body: 'תכנון שלושה מגדלי מגורים — שניים בני 30 קומות ואחד בן 10 — מעל קומת חנייה תת־קרקעית משותפת.',
    facts: ['40,965 מ"ר', '3 מגדלים', '30 קומות'],
    image: null,
  },
  {
    name: 'בית חולים סעודי',
    place: 'קרית מוצקין · רחוב שניאורסון',
    body: 'בית אבות בן 5 קומות, עם 5 קומות עתידיות, מעל שני מפלסי חנייה תת־קרקעיים.',
    facts: ['10,000 מ"ר', '5+5 קומות', '2 מפלסי חנייה'],
    image: null,
  },
  {
    name: 'ווטסון 11',
    place: 'חיפה',
    body: 'שני מבני מגורים מעל שתי קומות חנייה תת־קרקעיות.',
    facts: ['8,250 מ"ר', '2 מבנים'],
    image: null,
  },
  {
    name: 'שכונת האירוסים',
    place: 'מעלות',
    body: 'תכנון שכונת מגורים שלמה — 24 מבנים ובהם 79 יחידות דיור.',
    facts: ['79 יח"ד', '24 מבנים'],
    image: null,
  },
] as const;

/** The three pillars, with the sub-items the old services page listed. */
export const services = [
  {
    name: 'תכנון קונסטרוקציה',
    lead: 'ניסיון רב ועשיר בתכנון קונסטרוקציה למגדלי מגורים.',
    items: [
      'בנייה רוויה ובנייה תת־קרקעית',
      'מבני ציבור, משרדים, תעשייה ומסחר',
      'שדרוג סיסמי למבנים קיימים וחיזוק במסגרת תמ"א 38',
      'תכנון קירות דיפון ותמך',
    ],
  },
  {
    name: 'בקרת תכן מבנים',
    lead: 'בקרת תכן קונסטרוקטיבית למבנים מורכבים.',
    items: [
      'בקרה להוזלת עלויות',
      'שיפור הכדאיות הכלכלית של הפרויקט',
      'חוות דעת מקצועיות',
    ],
  },
  {
    name: 'ניהול ופיקוח',
    lead: 'ניהול פרויקטים ופיקוח צמוד, מהתכנון ועד המסירה.',
    items: [
      'מבני מגורים, מבני ציבור וחיזוק לרעידות אדמה',
      'ניהול תכנון ועריכת מכרזים',
      'אישור חשבונות קבלנים',
      'חישובי כמויות',
    ],
  },
] as const;
