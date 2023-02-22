import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';

export const hibana = {
  slug: 'hibana',
  name: 'Hibana',
  side: 'attack',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/hibana.svg'),
    png: getOperatorAssetURL('/icons/pngs/hibana.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1TSA4pMR58vgfrEai69REl/f82b1eba6694b4aa77259d3d0fe8cc08/Y1S4_BADGE_Hibana_L.png',
  card: getOperatorAssetURL('/cards/hibana.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7mAs4mz2zA4wjPZsNg6tys/e4fbdbfe20406c2655b56ba420b839aa/r6-operators-list-hibana.png',
  figure: getOperatorAssetURL('/figures/hibana.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4a3bXHSd7wz9vRZzRC8Kzq/98dac79c29394be7f5ff4d363fce5140/R6-operator-hibana.png',
  body: getOperatorAssetURL('/bodies/hibana.png'),
  ratings: { health: 1, speed: 3 },
  specialties: ['breach', 'front-line'],
  season: { id: 4 },
  weapons: {
    primary: ['type-89', 'supernova'],
    secondary: ['p229', 'bearing_9']
  },
  gadgets: { secondary: ['stun_grenade', 'breach_charge'] },
  uniqueAbility: {
    slug: 'x-kairos',
    name: 'X-Kairos',
    type: 'count',
    startingAmount: 18,
    description:
      'Fires pellets that are manually detonated to create line of sight or entryways in breakable and reinforced surfaces.',
    info: 'Fires 6, 4 or 2 pellets at a time.',
    icon: {
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/x-kairos.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1QSzVxpGhswXix3vn8XGKj/c4f64fa0895bdaf164448e3ae49950a0/X-Kairos.png'
  }
} satisfies Operator;
