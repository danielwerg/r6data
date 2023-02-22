import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';

export const mira = {
  slug: 'mira',
  name: 'Mira',
  side: 'defense',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/mira.svg'),
    png: getOperatorAssetURL('/icons/pngs/mira.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/u1KR6aogjLncAtaVOciTc/ba730583f9c20cad6d3ca996d366a707/Y2S1_BADGE_Mira_L.png',
  card: getOperatorAssetURL('/cards/mira.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2Q9Y4UXzkQfECOw5fX3QrI/bfd6532c840cb06a22e0196f2acfc462/r6-operators-list-mira.png',
  figure: getOperatorAssetURL('/figures/mira.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6wZplm8r956WXGrSYlULTU/0f9c0a33abfd42d9102723886850b8ca/R6-operator-mira.png',
  body: getOperatorAssetURL('/bodies/mira.png'),
  ratings: { health: 3, speed: 1 },
  specialties: ['intel', 'support'],
  season: { id: 5 },
  weapons: {
    primary: ['vector_.45_acp', 'ita12l'],
    secondary: ['usp40', 'ita12s']
  },
  gadgets: { secondary: ['proximity_alarm', 'nitro_cell'] },
  uniqueAbility: {
    slug: 'black_mirror',
    name: 'Black Mirror',
    type: 'count',
    startingAmount: 2,
    description:
      'Device that\'s deployed on breakable or reinforced walls to create a bulletproof one-way window.',
    info: null,
    icon: {
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/black_mirror.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1a1w8epOhWE8VtzvvCJG9d/b20cbb221f7d45e5838f839ce042f409/Black-mirror.png'
  }
} satisfies Operator;
