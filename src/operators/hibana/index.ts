import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import {
  COMMON_BARRELS_ALL,
  COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
  COMMON_BARRELS_NO_EXTENDED_BARREL,
  COMMON_GRIPS,
  COMMON_SIGHTS_1X
} from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/hibana.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/x-kairos.svg';
import notes from './notes.md?raw';

export const hibana = {
  slug: 'hibana',
  name: 'Hibana',
  side: 'attack',
  icon: {
    svg: parseSvgString(iconSvg),
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
    primary: [
      {
        slug: 'type-89',
        sights: [
          ...COMMON_SIGHTS_1X,
          'scope_1.5x',
          'scope_2.0x',
          'scope_2.5x_a',
          'scope_2.5x_b'
        ],
        barrels: COMMON_BARRELS_NO_EXTENDED_BARREL,
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'supernova',
        sights: COMMON_SIGHTS_1X,
        barrels: ['suppressor'],
        grips: null,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'p229',
        sights: null,
        barrels: COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'bearing_9',
        sights: COMMON_SIGHTS_1X,
        barrels: COMMON_BARRELS_ALL,
        grips: null,
        underBarrels: ['laser']
      }
    ]
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
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/x-kairos.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1QSzVxpGhswXix3vn8XGKj/c4f64fa0895bdaf164448e3ae49950a0/X-Kairos.png'
  },
  notes
} satisfies Operator;
