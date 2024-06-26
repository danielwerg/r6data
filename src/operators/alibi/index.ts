import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import {
  NON_MAGNIFYING_SIGHTS_COMMON,
  BARRELS,
  BARRELS_PRECISION,
  GRIPS,
  MAGNIFYING_SIGHTS
} from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/alibi.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/prisma.svg';
import notes from './notes.md?raw';

export const alibi = {
  slug: 'alibi',
  name: 'Alibi',
  side: 'defense',
  icon: {
    svg: parseSvgString(iconSvg),
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
        sights: NON_MAGNIFYING_SIGHTS_COMMON,
        barrels: BARRELS,
        grips: GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'acs12',
        sights: [...NON_MAGNIFYING_SIGHTS_COMMON, ...MAGNIFYING_SIGHTS],
        barrels: null,
        grips: GRIPS,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'keratos_.357',
        sights: null,
        barrels: BARRELS_PRECISION,
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
  gadgets: { secondary: ['proximity_alarm', 'observation_blocker'] },
  uniqueAbility: {
    slug: 'prisma',
    name: 'Prisma',
    type: 'count',
    startingAmount: 3,
    description:
      'Deploys holograms of Alibi that reveal an opponent\'s location when fired upon or interacted with.',
    info: null,
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/prisma.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7sJYir66zAPq2omSvYeT2u/8fbe3370d32fb5433fb6d3a86d46a1b9/Prisma.png'
  },
  notes
} satisfies Operator;
