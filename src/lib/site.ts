/** Base-aware href. `base` is '/website' on Pages, so links must not be bare. */
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

export const href = (path: string) =>
  path.startsWith('#') ? path : `${BASE}${path.startsWith('/') ? path : `/${path}`}`;

export const site = {
  name: 'זמורוד חסן',
  legal: 'זמורוד חסן — הנדסת מבנים בע"מ',
  tagline: 'תכנון קונסטרוקציה למגדלי מגורים ומשרדים, בקרת תכן, יציבות ומיגון וייעוץ הנדסי',
  /** Hero paragraph, set as two deliberate lines. `tagline` stays short
      because the footer sets it under the company name. */
  heroLead: [
    'תכנון קונסטרוקטיבי, בקרת תכן, יציבות ומיגון למגוון מבנים מורכבים — ממבני בוטיק, ציבור, תעשייה ומסחר ועד מגדלי מגורים ומשרדים המתנשאים לגובה של 30 קומות.',
    'בנוסף, החברה מספקת ליווי הנדסי, שיפור תהליכי תכנון וגיבוש פתרונות הנדסיים יעילים ואופטימליים.',
  ],
  phone: '04-6116777',
  // E.164 so it dials from abroad too; domestic handsets resolve it to 046116777.
  phoneHref: 'tel:+97246116777',
  email: 'eng.zmorod@gmail.com',
  address: 'גוליס, ת.ד 1183, מיקוד 24980',
  facebook: 'https://www.facebook.com/Eng.zmorod',
  instagram: 'https://www.instagram.com/Eng.zmorod',
  since: 2008,
} as const;

/** Absolute so the nav works from any page, not just the homepage. */
export const nav = [
  { label: 'דף הבית', href: href('/#top') },
  { label: 'אודות', href: href('/about') },
  { label: 'שירותים', href: href('/#services') },
  { label: 'פרויקטים', href: href('/projects') },
  { label: 'מן העיתונות', href: href('/press') },
  { label: 'יצירת קשר', href: href('/#contact') },
] as const;

/** Headline figures. The old site had these three counters stuck at 0. */
export const stats = [
  { value: 400, suffix: '+', unit: '', label: 'פרויקטים' },
  { value: 200, suffix: '+', unit: '', label: 'לקוחות' },
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
  {
    year: '2022',
    title: 'בקרית מיגון מורשית',
    body: 'הסמכה מטעם פיקוד העורף.',
  },
] as const;

export const about = {
  kicker: 'מי אנחנו',
  headingTop: 'אישה אחת,',
  headingBottom: 'רזומה עשיר.',

  body: [
    'זמורוד חסן — הנדסת מבנים בע"מ היא חברה בעלת ניסיון מקצועי של 17 שנים, המתמחה בתכנון קונסטרוקציה, בקרת תכן, בדיקות יציבות ומיגון. החברה עוסקת בתכנון קונסטרוקטיבי של מגוון רחב של מבנים מורכבים, בהם מגדלי מגורים ומשרדים בגובה של עד 30 קומות, מבנים מעל חניונים תת־קרקעיים, פרויקטים של בנייה רוויה, מבני בוטיק, מבני ציבור, מבני תעשייה ומסחר. בנוסף, החברה מספקת שירותי ייעוץ וליווי הנדסי, חוות דעת מקצועיות וגיבוש פתרונות הנדסיים לשיפור תהליכי התכנון ולהתייעלות כלכלית.',
  ],

  /** The services the company provides, split out as bullets under the body. */
  bodyServicesTitle: 'תחומי הפעילות והשירותים',
  bodyServicesLead:
    'החברה מספקת מגוון שירותים הנדסיים, תוך הקפדה על מקצועיות, איכות התכנון, יעילות הנדסית והתייעלות כלכלית:',
  bodyServices: [
    {
      title: 'תכנון קונסטרוקטיבי',
      body: 'תכנון מגדלי מגורים ומשרדים, מבני ציבור, תעשייה ומסחר, מבני בוטיק ופרויקטים הנדסיים מורכבים.',
    },
    {
      title: 'בקרת תכן מבנים',
      body: 'בדיקה ובקרה של תכנונים קונסטרוקטיביים, בחינת חלופות תכנון ושיפור היעילות והכדאיות הכלכלית של הפרויקט.',
    },
    {
      title: 'בקרת יציבות ומיגון',
      body: 'בקרת יציבות מבנים והתאמתם לדרישות התקינה והמיגון, לרבות במסגרת הליכי רישוי ובקרת תוכניות ביצוע.',
    },
    {
      title: 'ליווי הנדסי וחוות דעת מקצועיות',
      body: 'ליווי פרויקטים ומתן חוות דעת מקצועיות לצורך בחינת פתרונות הנדסיים ושיפור תהליכי התכנון והביצוע.',
    },
    {
      title: 'ייעוץ הנדסי והתייעלות כלכלית',
      body: 'גיבוש פתרונות הנדסיים יעילים ואופטימליים, תוך בחינת היבטים הנדסיים וכלכליים.',
    },
  ],
} as const;

/** Featured work. `image` stays null until real photography arrives. */
/** Featured work — placeholder copy until the client picks the four. */
export const projects = [
  {
    name: 'פרויקט 1',
    place: 'כותרת משנה 1',
    body: 'תיאור קצר של הפרויקט הראשון.',
    facts: ['נתון 1', 'נתון 2', 'נתון 3'],
    image: null,
  },
  {
    name: 'פרויקט 2',
    place: 'כותרת משנה 2',
    body: 'תיאור קצר של הפרויקט השני.',
    facts: ['נתון 1', 'נתון 2', 'נתון 3'],
    image: null,
  },
  {
    name: 'פרויקט 3',
    place: 'כותרת משנה 3',
    body: 'תיאור קצר של הפרויקט השלישי.',
    facts: ['נתון 1', 'נתון 2'],
    image: null,
  },
  {
    name: 'פרויקט 4',
    place: 'כותרת משנה 4',
    body: 'תיאור קצר של הפרויקט הרביעי.',
    facts: ['נתון 1', 'נתון 2'],
    image: null,
  },
  {
    name: 'פרויקט 5',
    place: 'כותרת משנה 5',
    body: 'תיאור קצר של הפרויקט.',
    facts: ['נתון 1', 'נתון 2'],
    image: null,
  },
  {
    name: 'פרויקט 6',
    place: 'כותרת משנה 6',
    body: 'תיאור קצר של הפרויקט.',
    facts: ['נתון 1', 'נתון 2'],
    image: null,
  },
  {
    name: 'פרויקט 7',
    place: 'כותרת משנה 7',
    body: 'תיאור קצר של הפרויקט.',
    facts: ['נתון 1', 'נתון 2'],
    image: null,
  },
  {
    name: 'פרויקט 8',
    place: 'כותרת משנה 8',
    body: 'תיאור קצר של הפרויקט.',
    facts: ['נתון 1', 'נתון 2'],
    image: null,
  },
] as const;

/** The three pillars, with the sub-items the old services page listed. */
export const services = [
  {
    name: 'תכנון מגדלים',
    lead: 'תכנון קונסטרוקטיבי של מגדלי מגורים ומשרדים רבי־קומות, משלב היסודות ועד להשלמת המבנה.',
    items: [
      'תכנון מגדלי מגורים ומשרדים בגובה של עד 30 קומות',
      'תכנון חניונים תת־קרקעיים משותפים למספר מגדלים',
      'תכנון קירות דיפון וקירות תמך לחפירות עמוקות',
      'תכנון סיסמי למבנים רבי־קומות',
    ],
  },
  {
    name: 'תכנון קונסטרוקציה',
    lead: 'תכנון קונסטרוקטיבי למגוון רחב של מבנים ופרויקטים הנדסיים מורכבים.',
    items: [
      'תכנון מבני מגורים, בנייה רוויה ומבנים תת־קרקעיים',
      'תכנון מבני ציבור, משרדים, תעשייה ומסחר',
      'שדרוג סיסמי וחיזוק מבנים קיימים, לרבות במסגרת תמ"א 38',
      'תכנון קירות דיפון וקירות תמך',
    ],
  },
  {
    name: 'בקרת תכן מבנים',
    lead: 'בקרת תכן קונסטרוקטיבית למבנים מורכבים, תוך בחינת איכות התכנון, יעילותו והכדאיות הכלכלית של הפרויקט.',
    items: [
      'בקרת תכן קונסטרוקטיבית למבנים מורכבים',
      'בחינת חלופות תכנון לשיפור היעילות ההנדסית',
      'איתור הזדמנויות להפחתת עלויות הבנייה',
      'שיפור הכדאיות הכלכלית של הפרויקט',
      'מתן חוות דעת מקצועיות בתחום הקונסטרוקציה',
    ],
  },
  {
    name: 'בקרת יציבות ומיגון',
    lead: 'בקרת יציבות ומיגון למבנים במסגרת פעילות מכוני בקרה, בהתאם לדרישות התקינה והרגולציה.',
    items: [
      'בקרת יציבות מבנים לצורך מתן המלצה להיתר בנייה',
      'בקרת תוכניות ביצוע לצורך אישור תחילת עבודות',
      'בקרת תכן ויציבות במסגרת פעילות מכוני בקרה',
      'בדיקת התאמת המבנים לדרישות יציבות ומיגון',
    ],
  },
] as const;

/** The remaining work, shown as a carousel under the featured projects. */
export const moreProjects = [
  { name: 'בייליס 4', place: 'חיפה', fact: '5,730 מ"ר', images: ['baylis.png'] },
  { name: 'סימולנסקין 6', place: 'חיפה', fact: '3,731 מ"ר', images: ['smolenskin.png'] },
  { name: 'העלייה 36‑38', place: 'נהריה', fact: '30 יח"ד', images: ['haaliya.png'] },
  { name: 'ויתקין 16', place: 'חיפה', fact: 'מבנה בוטיק', images: ['vitkin.png'] },
  {
    name: 'מגרשים 7 ו‑8',
    place: 'נהריה',
    fact: '4 מבני מגורים',
    images: [
      'nahariya-7-8.jpg',
      'nahariya-7-8-2.jpg',
      'nahariya-7-8-3.jpg',
      'nahariya-7-8-4.jpg',
      'nahariya-7-8-5.png',
    ],
  },
  { name: 'שמעייה 1‑3', place: 'הרצליה', fact: 'מבני מגורים', images: ['shimaya.png'] },
  { name: 'משה רינת, מגרש 208', place: 'חולון', fact: 'מבני מגורים', images: ['holon.png'] },
  { name: '6 גני ילדים', place: 'נהריה', fact: 'מבני ציבור', images: ['kindergartens.png'] },
  { name: 'בית חולים סעודי', place: 'הוד השרון', fact: 'מבנה ציבור', images: ['hod-hasharon.png'] },
] as const;

/** Everything the old אודות page carried beyond the homepage summary. */
export const aboutExtra = {
  vision:
    'מתן שירות מקצועי מאוד, תכנון ותוכניות ברמה גבוהה מאוד, עמידה בלוחות זמנים ותכנון כדאי כלכלי ליזם.',

  training: [
    'קורס מתן חוות דעת מקצועית',
    'קורס תכן עגורנים',
    'קורס עריכת מכרזים',
    'קורס חיזוק מבנים לרעידות אדמה במסגרת תמ"א 38',
  ],

  awards: [
    {
      year: '2020',
      title: '40 הצעירים המבטיחים',
      body: 'בנדל"ן ובהתחדשות עירונית.',
      image: 'award-2020.jpg',
      // Square clipping, so this column runs short next to the portrait one —
      // the video fills it rather than leaving dead space.
      video: true,
    },
    {
      year: '2019',
      title: 'פרס מהנדס צעיר מצטיין',
      body: 'בתחום התכנון, מטעם איגוד המהנדסים והתשתיות בישראל.',
      image: 'award-2019.jpg',
    },
  ],

  press: [
    {
      year: '2016',
      quote: 'אני אגיע רחוק',
      source: 'ידיעות צפון',
    },
  ],
} as const;

/**
 * Press and media. Fields marked TODO are placeholders awaiting the client —
 * publication names, dates, and the podcast URL.
 */
export const press = {
  video: {
    title: '40 הצעירים המבטיחים',
    subtitle: 'בנדל"ן ובהתחדשות עירונית',
    date: '2020',
  },

  podcast: {
    title: 'תכנון נכון',
    show: 'הטכניוניסטים',
    date: 'אוגוסט 2026',
    // Spotify's /embed/ path, minus the share-tracking query string.
    url: 'https://open.spotify.com/embed/episode/7JzfwKmQNoTFV0somVUNf8',

    body: [
      'זמורוד חסן היא מהנדסת קונסטרוקציה, בקרית תכן מבנים, יציבות ומיגון, ובוגרת גאה של הפקולטה להנדסה אזרחית וסביבתית בטכניון.',
      'היא המייסדת והבעלים של חברה לתכנון והנדסת מבנים הנושאת את שמה, ומובילה מגה-פרוייקטים ברחבי הארץ.',
      'בשיחה פתוחה ומרגשת היא מספרת על האומץ ״לקפוץ למים״ ולהקים חברה משלה, על הכניסה לתחום גברי מאוד, על השאיפה להמשיך להתקדם — וגם על המקומות שבהם היא לא מוכנה להתפשר, אפילו אם המשמעות היא לעצור עבודה באמצע.',
      'בפרק תוכלו לשמוע איך נראה יום בחייה של מהנדסת, בעלת חברה ואשת משפחה, מה מניע אותה להמשיך קדימה ולמה חשוב לה לקדם תעסוקה, לפתוח דלתות וליצור הזדמנויות לנשים נוספות בחברה הדרוזית ובכלל.',
    ],

    credits: [
      'הפרק הוקלט בבית הסטודנט. תודה לאס"ט על האירוח.',
      'מראיינת: רותי דונג, מנכ״לית ארגון בוגרי הטכניון.',
    ],
  },
} as const;
