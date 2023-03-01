import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';
import {
  COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
  COMMON_BARRELS_NO_EXTENDED_BARREL,
  COMMON_GRIPS,
  COMMON_SIGHTS_1X
} from '../constants';

export const fuze = {
  slug: 'fuze',
  name: 'Fuze',
  side: 'attack',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/fuze.svg'),
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
        slug: 'ak-12',
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
      }
    ],
    secondary: [
      {
        slug: 'pmm',
        sights: null,
        barrels: COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'gsh-18',
        sights: null,
        barrels: COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
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
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/cluster_charge.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3YaoPPUbFYeVSCemdj57EL/a4a4a8c0a935640f7d9a1d1ea82bc48c/Cluster-Charge.png'
  }
} satisfies Operator;
