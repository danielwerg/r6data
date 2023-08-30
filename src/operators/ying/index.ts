import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import {
  COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
  COMMON_BARRELS_NO_EXTENDED_BARREL,
  COMMON_GRIPS,
  COMMON_SIGHTS_1X
} from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/ying.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/candela.svg';
import notes from './notes.md?raw';

export const ying = {
  slug: 'ying',
  name: 'Ying',
  side: 'attack',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/ying.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6ZVB1OJxNgs0pR0Fd7Kzt0/74721fe9fd743167508f98dc280a17a3/Y2S2_BADGE_Ying_L.png',
  card: getOperatorAssetURL('/cards/ying.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/36BxtuVTQFrNh2OPyJ2px3/6db32fa8151b9a925acdd65d289bcf0f/r6-operators-list-ying.png',
  figure: getOperatorAssetURL('/figures/ying.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4Oyf6w5rI0u9j4zMcWBSGz/ef22bcaca06cba29fdfa41e5ec921f7d/R6-operator-ying.png',
  body: getOperatorAssetURL('/bodies/ying.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['front-line', 'map_control'],
  season: { id: 7 },
  weapons: {
    primary: [
      {
        slug: 't-95_lsw',
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
        slug: 'six12',
        sights: COMMON_SIGHTS_1X,
        barrels: null,
        grips: null,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'q-929',
        sights: null,
        barrels: COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['hard_breach_charge', 'smoke_grenade'] },
  uniqueAbility: {
    slug: 'candela',
    name: 'Candela',
    type: 'count',
    startingAmount: 4,
    description:
      'Device that deploys a cluster of flash charges to temporarily blind Operators.',
    info: 'Each Candela releases 3 flash charges.',
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/candela.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4vpN9vu5wD9dyb2knMosTy/430796de3c0c2a5c2eb2ac6f4217eba0/Candela.png'
  },
  notes
} satisfies Operator;
