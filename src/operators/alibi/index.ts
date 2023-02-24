import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';
import {
  COMMON_1X_SIGHTS,
  COMMON_BARRELS,
  COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
  COMMON_GRIPS
} from '../constants';

export const alibi = {
  slug: 'alibi',
  name: 'Alibi',
  side: 'defense',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/alibi.svg'),
    png: getOperatorAssetURL('/icons/pngs/alibi.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3DgGV3hETnXiEvVFOYZrbm/55a6be47761b5cf2c7ff8aaa7991cc7f/Y3S2_BADGE_Alibi_L.png',
  card: getOperatorAssetURL('/cards/alibi.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/11nzEgSwdAXLow3kPl0wom/3fdf2b0aa1c1af7ef785d28cf5d80114/r6-operators-list-alibi.png',
  figure: getOperatorAssetURL('/figures/alibi.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7ufK1h05Bv9FA19SpIACoJ/b3017cfc3836340861a11fc3fe82bef2/R6-operator-alibi.png',
  body: getOperatorAssetURL('/bodies/alibi.png'),
  ratings: { health: 1, speed: 3 },
  specialties: ['intel', 'trapper'],
  season: { id: 10 },
  weapons: {
    primary: [
      {
        slug: 'mx4_storm',
        sights: COMMON_1X_SIGHTS,
        barrels: COMMON_BARRELS,
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'acs12',
        sights: [...COMMON_1X_SIGHTS, 'scope_1.5x', 'scope_2.0x'],
        barrels: null,
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'keratos_.357',
        sights: null,
        barrels: COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'bailiff_410',
        // NOTE: Forced red_dot_handgun
        sights: null,
        barrels: null,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['impact_grenade', 'deployable_shield'] },
  uniqueAbility: {
    slug: 'prisma',
    name: 'Prisma',
    type: 'count',
    startingAmount: 3,
    description:
      'Deploys holograms of Alibi that reveal an opponent\'s location when fired upon or intera ted with.',
    info: null,
    icon: {
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/prisma.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7sJYir66zAPq2omSvYeT2u/8fbe3370d32fb5433fb6d3a86d46a1b9/Prisma.png'
  }
} satisfies Operator;
