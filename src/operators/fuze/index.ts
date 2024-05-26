import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import {
  BARRELS_PRECISION,
  BARRELS_NO_EXTENDED_BARREL,
  GRIPS,
  MAGNIFYING_SIGHTS,
  NON_MAGNIFYING_SIGHTS_COMMON
} from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/fuze.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/cluster_charge.svg';
import notes from './notes.md?raw';

export const fuze = {
  slug: 'fuze',
  name: 'Fuze',
  side: 'attack',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/fuze.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1wkdQ0viuTEguji14qXMJG/5858418baa8cca04a6e42a2d6256c093/Y0R6_BADGE_Fuze_L.png',
  card: getOperatorAssetURL('/cards/fuze.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/BsiNYFp7htro1mOEgiKf1/eef48a78d9a7c1cb2dcac07e1d06edb1/r6-operators-list-fuze.png',
  figure: getOperatorAssetURL('/figures/fuze.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/pzeHydBjAc16X63nQH6Sm/33adb500a2abe9fbcaf368fa601ef59b/R6-operator-fuze.png',
  body: getOperatorAssetURL('/bodies/fuze.png'),
  ratings: { health: 3, speed: 1 },
  specialties: ['anti-gadget'],
  season: { id: 0 },
  weapons: {
    primary: [
      {
        slug: 'ballistic_shield',
        sights: null,
        barrels: null,
        grips: null,
        underBarrels: null
      },
      {
        slug: '6p41',
        sights: [...NON_MAGNIFYING_SIGHTS_COMMON, ...MAGNIFYING_SIGHTS],
        barrels: BARRELS_NO_EXTENDED_BARREL,
        grips: GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'ak-12',
        sights: [...NON_MAGNIFYING_SIGHTS_COMMON, ...MAGNIFYING_SIGHTS],
        barrels: BARRELS_NO_EXTENDED_BARREL,
        grips: GRIPS,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'pmm',
        sights: null,
        barrels: BARRELS_PRECISION,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'gsh-18',
        sights: null,
        barrels: BARRELS_PRECISION,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: {
    secondary: ['breach_charge', 'hard_breach_charge', 'smoke_grenade']
  },
  uniqueAbility: {
    slug: 'cluster_charge',
    name: 'Cluster Charge',
    type: 'count',
    startingAmount: 4,
    description:
      'Charge that\'s deployed on breakable and reinforced surfaces to injure opponents and clear devices on the other side.',
    info: 'Each charge releases 4 sub-grenades.',
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/cluster_charge.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3YaoPPUbFYeVSCemdj57EL/a4a4a8c0a935640f7d9a1d1ea82bc48c/Cluster-Charge.png'
  },
  notes
} satisfies Operator;
