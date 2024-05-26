import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import {
  BARRELS,
  BARRELS_PRECISION,
  GRIPS,
  MAGNIFYING_SIGHTS,
  NON_MAGNIFYING_SIGHTS_COMMON,
  TELESCOPIC_SIGHTS_COMMON
} from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/sens.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/r.o.u._projector_system.svg';
import notes from './notes.md?raw';

export const sens = {
  slug: 'sens',
  name: 'Sens',
  side: 'attack',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/sens.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7pqZFaPgQwaLi1pFKuAv7e/d3d9af214737fe6a069e5346c50bfd20/r6s-operators-badge-sens.png',
  card: getOperatorAssetURL('/cards/sens.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1ieRqIy6e47QH48sTp1W4a/59f8188d94ae610bf76da26b4fef0b92/r6s-operators-list-sens.png',
  figure: getOperatorAssetURL('/figures/sens.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5jnAuLrtadxfg1XOieDnL0/4694dde0c71e3e9998a1e5fd6cb1a7d2/r6s-operator-sens.png',
  body: getOperatorAssetURL('/bodies/sens.png'),
  ratings: { health: 1, speed: 3 },
  specialties: ['support', 'map_control'],
  season: { id: 26 },
  weapons: {
    primary: [
      {
        slug: 'pof-9',
        sights: [...NON_MAGNIFYING_SIGHTS_COMMON, ...MAGNIFYING_SIGHTS],
        barrels: BARRELS,
        grips: GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: '417',
        sights: [
          ...NON_MAGNIFYING_SIGHTS_COMMON,
          ...MAGNIFYING_SIGHTS,
          ...TELESCOPIC_SIGHTS_COMMON
        ],
        barrels: BARRELS_PRECISION,
        grips: GRIPS,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'sdp_9mm',
        sights: null,
        barrels: BARRELS_PRECISION,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['hard_breach_charge', 'claymore', 'frag_grenade'] },
  uniqueAbility: {
    slug: 'r.o.u._projector_system',
    name: 'R.O.U. Projector System',
    type: 'count',
    startingAmount: 4,
    description:
      'Throwable device that rolls and drops projectors to create a screen that blocks line of sight.',
    info: 'Each R.O.U. device drops projectors that stay active for 13 seconds.',
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/r.o.u._projector_system.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4iEpghBKHF6bcQxAxRKsYU/0291dc89b6f7730720d1ea5650392a81/r6s-operator-ability-sens.png'
  },
  notes
} satisfies Operator;
