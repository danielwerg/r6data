import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import {
  COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
  COMMON_BARRELS_NO_EXTENDED_BARREL,
  COMMON_GRIPS,
  COMMON_SIGHTS_1X
} from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/lion.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/ee-one-d.svg';
import notes from './notes.md?raw';

export const lion = {
  slug: 'lion',
  name: 'Lion',
  side: 'attack',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/lion.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3gfdjXFezusaerCakMpfQ2/4565b28edd241b7fd3b0eba9c97d54f2/Y3S1_BADGE_Lion_L.png',
  card: getOperatorAssetURL('/cards/lion.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4wYSIOO4AKq0nw1GbulGns/fcd32bda72facd7062a25ad3764f21e9/r6-operators-list-lion.png',
  figure: getOperatorAssetURL('/figures/lion.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/O1pBwXRND1RV2WN5OrEr7/787e4d31e1b74ae9700ffac675205de3/R6-operator-lion.png',
  body: getOperatorAssetURL('/bodies/lion.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['intel', 'map_control'],
  season: { id: 9 },
  weapons: {
    primary: [
      {
        slug: 'v308',
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
        slug: '417',
        sights: [
          ...COMMON_SIGHTS_1X,
          'scope_1.5x',
          'scope_2.0x',
          'scope_2.5x_a',
          'scope_2.5x_b',
          'scope_3.0x'
        ],
        barrels: COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'sg-cqb',
        sights: COMMON_SIGHTS_1X,
        barrels: null,
        grips: ['vertical_grip'],
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'lfp586',
        sights: null,
        barrels: null,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'p9',
        sights: null,
        barrels: COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'gonne-6',
        sights: null,
        barrels: null,
        grips: null,
        underBarrels: null
      }
    ]
  },
  gadgets: { secondary: ['stun_grenade', 'claymore', 'impact_emp_grenade'] },
  uniqueAbility: {
    slug: 'ee-one-d',
    name: 'EE-ONE-D',
    type: 'count',
    startingAmount: 3,
    description:
      'Drone that hovers above the map and scans it for movement to reveal opponent locations.',
    info: 'The drone has a cooldown time between scans.',
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/ee-one-d.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7fRknnWl2K2qjKle1t79j/0506d25798aeb0691c8a576665050f7d/EE-ONE-D.png'
  },
  notes
} satisfies Operator;
