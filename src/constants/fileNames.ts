interface fileNamesProps {
  id: string;
  imageUrl: string[];
}

export const FILENAMES: fileNamesProps[] = [
  {
    id: 'FACESHAPE_ROUND',
    imageUrl: ['/rnd_tassel.png', '/rnd_shortcut.png', '/rnd_straight.png'],
  },
  {
    id: 'FACESHAPE_SQUARE',
    imageUrl: ['/sq_charm.png', '/sq_hush.png', '/sq_layp_short.png'],
  },
  {
    id: 'FACESHAPE_OVAL',
    imageUrl: ['/oval_build.png', '/oval_c_long.png', '/oval_side.png'],
  },
  {
    id: 'FACESHAPE_OBLONG',
    imageUrl: [
      '/oblong_hipi.png',
      '/oblong_laycut.png',
      '/oblong_layp_mid.png',
    ],
  },
  {
    id: 'FACESHAPE_HEART',
    imageUrl: ['/heart_iron.png', '/heart_bob.png', '/heart_c_short.png'],
  },
];
