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
import iconSvg from '../../assets/operators/icons/svgs/aruni.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/surya_gate.svg';
import notes from './notes.md?raw';

export const aruni = {
  slug: 'aruni',
  name: 'Aruni',
  side: 'defense',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/aruni.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5rOLCYQOh5HH0Nv6NHe38H/29681f901ff71ae5decb5ccb1b9f8a29/Y5S4_BADGE_Aruni_L.png',
  card: getOperatorAssetURL('/cards/aruni.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4yfuWCW8O4ja2VqR9tXqaE/c8dd123a6405959cf4f091c3854c9d96/r6s-operators-list-aruni.png',
  figure: getOperatorAssetURL('/figures/aruni.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/xIH5tc98YOO1Juf1cRcJC/779f61650fac17e6e79e7b0f618c83e5/r6s-operator-aruni.png',
  body: getOperatorAssetURL('/bodies/aruni.png'),
  ratings: { health: 3, speed: 1 },
  specialties: ['anti-entry', 'anti-gadget'],
  season: { id: 20 },
  weapons: {
    primary: [
      {
        slug: 'p10_roni',
        sights: NON_MAGNIFYING_SIGHTS_COMMON,
        barrels: BARRELS,
        grips: GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'mk_14_ebr',
        sights: [...NON_MAGNIFYING_SIGHTS_COMMON, ...MAGNIFYING_SIGHTS],
        barrels: BARRELS_PRECISION,
        grips: GRIPS,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'prb92',
        sights: null,
        barrels: BARRELS_PRECISION,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['barbed_wire', 'bulletproof_camera'] },
  uniqueAbility: {
    slug: 'surya_gate',
    name: 'Surya Gate',
    type: 'count',
    startingAmount: 3,
    description:
      'Laser gate that denies entry and intel by injuring opponents and destroying devices that pass through it.',
    info: null,
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/surya_gate.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4hLJAAVKrf50wosG0471od/cde1867daf863c03754969f159ac00de/r6s-operator-ability-aruni.png'
  },
  notes
} satisfies Operator;
