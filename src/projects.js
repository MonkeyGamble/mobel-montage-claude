export const CAT_KEYS = ['all', 'PAX', 'Küche', 'Büro', 'Kinderzimmer', 'Custom'];

export const PROJECTS = [
  {
    id: 'MM.241',
    title: 'PAX 300 / 236',
    loc: 'Bonn-Endenich',
    dur: '4 h',
    year: '2025',
    cat: 'PAX',
    rooms: '1',
  },
  {
    id: 'MM.238',
    title: 'METOD',
    loc: 'Bad Godesberg',
    dur: '2 T.',
    year: '2025',
    cat: 'Küche',
    rooms: '—',
  },
  {
    id: 'MM.234',
    title: 'Walk-in PLATSA',
    loc: 'Bonn-Südstadt',
    dur: '6 h',
    year: '2025',
    cat: 'PAX',
    rooms: '1',
  },
  {
    id: 'MM.231',
    title: 'BEKANT Doppel',
    loc: 'Bonn-Zentrum',
    dur: '3 h',
    year: '2025',
    cat: 'Büro',
    rooms: '1',
  },
  {
    id: 'MM.228',
    title: 'STUVA Set',
    loc: 'Beuel',
    dur: '5 h',
    year: '2024',
    cat: 'Kinderzimmer',
    rooms: '1',
  },
  {
    id: 'MM.225',
    title: 'Custom Eiche',
    loc: 'Bonn-Poppelsdorf',
    dur: '8 h',
    year: '2024',
    cat: 'Custom',
    rooms: '—',
  },
  {
    id: 'MM.222',
    title: 'BESTÅ TV',
    loc: 'Hennef',
    dur: '3 h',
    year: '2024',
    cat: 'Custom',
    rooms: '1',
  },
  {
    id: 'MM.219',
    title: 'KALLAX × 4',
    loc: 'Siegburg',
    dur: '2 h',
    year: '2024',
    cat: 'Büro',
    rooms: '1',
  },
  {
    id: 'MM.214',
    title: 'Eck-PAX 4-türig',
    loc: 'Köln-Sülz',
    dur: '5 h',
    year: '2024',
    cat: 'PAX',
    rooms: '1',
  },
];

export const PH_HEIGHTS = [200, 240, 180, 220, 200, 260, 200, 180, 240];

// Static data is grouped once, rather than filtered for every render and count.
export const PROJECTS_BY_CATEGORY = Object.fromEntries(
  CAT_KEYS.map((category) => [
    category,
    category === 'all' ? PROJECTS : PROJECTS.filter((project) => project.cat === category),
  ]),
);
