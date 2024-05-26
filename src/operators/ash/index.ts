import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import {
  BARRELS,
  BARRELS_PRECISION,
  GRIPS,
  MAGNIFYING_SIGHTS,
  NON_MAGNIFYING_SIGHTS_COMMON
} from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/ash.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/breaching_rounds.svg';
import notes from './notes.md?raw';

export const ash = {
  slug: 'ash',
  name: 'Ash',
  side: 'attack',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/ash.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/58Y4Q2x7msL8uQUoiA7LGM/b204acc9c5a015029140723ef2e435bb/Y0R6_BADGE_Ash_L.png',
  card: getOperatorAssetURL('/cards/ash.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/QOEBDfqjtUxVBc31l8L9f/4d9b112565baf81d56d69279b95cd463/r6-operators-list-ash_317253.png',
  figure: getOperatorAssetURL('/figures/ash.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4uyWdmCF6zI9vcn4vKp9zx/1b9393a63e1071daeccb95732e530d40/r6-operator-ash_229846.png',
  body: getOperatorAssetURL('/bodies/ash.png'),
  ratings: { health: 1, speed: 3 },
  specialties: ['breach', 'front-line'],
  season: { id: 0 },
  weapons: {
    primary: [
      {
        slug: 'g36c',
        sights: [...NON_MAGNIFYING_SIGHTS_COMMON, ...MAGNIFYING_SIGHTS],
        barrels: BARRELS,
        grips: GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'r4-c',
        sights: [...NON_MAGNIFYING_SIGHTS_COMMON, ...MAGNIFYING_SIGHTS],
        barrels: BARRELS,
        grips: GRIPS,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: '5.7_usg',
        sights: null,
        barrels: BARRELS_PRECISION,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'm45_meusoc',
        sights: null,
        barrels: BARRELS_PRECISION,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['breach_charge', 'claymore'] },
  uniqueAbility: {
    slug: 'breaching_rounds',
    name: 'Breaching Rounds',
    type: 'count',
    startingAmount: 2,
    description:
      'Launcher with explosive rounds that destroy utility and create entryways in breakable surfaces.',
    info: null,
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/breaching_rounds.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/0114WqhzsMsnvaKc4FypkN/5ebb9b86e216a2d9e6b2ea01eb3346e8/Breaching-Rounds.png'
  },
  notes
} satisfies Operator;
