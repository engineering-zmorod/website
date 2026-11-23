// Project photos from the client. Only the name and the place are shown,
// on hover (desktop) or tap (phone). `focus` sets which part of the photo stays in view when cropped.
import type { ImageMetadata } from 'astro';

import kiryatAta from '../assets/projects/kiryat-ata.jpg';
import feichman from '../assets/projects/feichman-haifa.jpg';
import medical from '../assets/projects/medical-beer-sheva.jpg';
import orYam from '../assets/projects/or-yam.jpg';
import haaliya from '../assets/projects/haaliya-nahariya.jpg';
import mulArbel from '../assets/projects/mul-arbel.jpg';
import alzheimer from '../assets/projects/alzheimer-beer-sheva.jpg';
import shmaya from '../assets/projects/shmaya-herzliya.jpg';
import ahadHaam from '../assets/projects/ahad-haam-nahariya.jpg';
import szold from '../assets/projects/szold-nahariya.jpg';
import vitkin from '../assets/projects/vitkin-haifa.jpg';
import naomiShemer from '../assets/projects/naomi-shemer-haifa.jpg';
import givatZemer from '../assets/projects/givat-zemer-haifa.jpg';
import haganim from '../assets/projects/haganim-haifa.jpg';
import beilis from '../assets/projects/beilis-haifa.jpg';
import ehud from '../assets/projects/ehud-haifa.jpg';
import moriya from '../assets/projects/moriya-haifa.jpg';
import smolenskin from '../assets/projects/smolenskin-haifa.jpg';
import pinsker from '../assets/projects/pinsker-haifa.jpg';
import harofe from '../assets/projects/harofe-haifa.jpg';
import remez from '../assets/projects/remez-nahariya.jpg';
import yitzhakShamir from '../assets/projects/yitzhak-shamir-afula.jpg';
import hodHasharon from '../assets/projects/hod-hasharon.jpg';
import galeiYam from '../assets/projects/galei-yam.jpg';
import greenPark from '../assets/projects/green-park-akko.jpg';
import kiryatSefer from '../assets/projects/kiryat-sefer-haifa.jpg';
import nofHagalil from '../assets/projects/nof-hagalil.jpg';
import afula from '../assets/projects/afula.jpg';
import nofeiMonfort from '../assets/projects/nofei-monfort.jpg';

export interface Project {
  img: ImageMetadata;
  name: string;
  place?: string;
  focus?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  { img: kiryatAta, name: 'שכונת מגורים', place: 'קרית אתא', featured: true },
  { img: feichman, name: 'פייכמן', place: 'חיפה', featured: true },
  { img: medical, name: 'מרכז רפואי', place: 'באר שבע', focus: '62% 50%', featured: true },
  { img: orYam, name: 'אור ים', place: 'אור עקיבא', focus: '30% 50%', featured: true },
  { img: haaliya, name: 'העליה', place: 'נהריה' },
  { img: mulArbel, name: 'מול ארבל', place: 'נוף הגליל' },
  { img: alzheimer, name: 'מרכז רפואי אלצהיימר', place: 'באר שבע' },
  { img: shmaya, name: 'שמעיה', place: 'הרצליה' },
  { img: ahadHaam, name: 'אחד העם', place: 'נהריה' },
  { img: szold, name: 'סולד', place: 'נהריה' },
  { img: vitkin, name: 'ויתקין', place: 'חיפה' },
  { img: naomiShemer, name: 'נעמי שמר', place: 'חיפה' },
  { img: givatZemer, name: 'גבעת זמר', place: 'חיפה' },
  { img: haganim, name: 'הגנים', place: 'חיפה' },
  { img: beilis, name: 'בייליס', place: 'חיפה' },
  { img: ehud, name: 'אהוד', place: 'חיפה' },
  { img: moriya, name: 'מוריה', place: 'חיפה' },
  { img: smolenskin, name: 'סמולנסקין', place: 'חיפה' },
  { img: pinsker, name: 'פינסקר', place: 'חיפה' },
  { img: harofe, name: 'הרופא', place: 'חיפה' },
  { img: remez, name: 'רמז', place: 'נהריה' },
  { img: yitzhakShamir, name: 'יצחק שמיר', place: 'עפולה' },
  { img: hodHasharon, name: 'הוד השרון' },
  { img: galeiYam, name: 'גלי ים', place: 'קרית ים' },
  { img: greenPark, name: 'גרין פארק', place: 'עכו' },
  { img: kiryatSefer, name: 'קרית ספר', place: 'חיפה' },
  { img: nofHagalil, name: 'נוף הגליל' },
  { img: afula, name: 'עפולה' },
  { img: nofeiMonfort, name: 'נופי מונפורט' },
];

export const featuredProjects = projects.filter((p) => p.featured);
