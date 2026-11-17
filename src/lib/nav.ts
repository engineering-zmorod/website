// Site navigation, shared by the header and footer.
// About, Services and Contact are sections of the homepage; Projects and Press are pages.
// `desktop: false` hides an item in the desktop header (the header button covers it).
export const navItems = [
  { label: 'דף הבית', href: '/' },
  { label: 'אודות', href: '/#about' },
  { label: 'שירותים', href: '/#services' },
  { label: 'פרויקטים', href: '/projects' },
  { label: 'מן העיתונות', href: '/press' },
  { label: 'יצירת קשר', href: '/#contact', desktop: false },
];

export const contact = {
  phone: '04-6116777',
  phoneHref: 'tel:+97246116777',
  email: 'eng.zmorod@gmail.com',
  address: "ג'וליס, ת.ד 1183, מיקוד 24980",
  facebook: 'https://www.facebook.com/Eng.zmorod',
  instagram: 'https://www.instagram.com/Eng.zmorod',
};
