import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import {
  COMMON_SIGHTS_1X,
  COMMON_BARRELS_ALL,
  COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
  COMMON_GRIPS
} from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/valkyrie.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/black_eye.svg';
import notes from './notes.md?raw';

export const valkyrie = {
  slug: 'valkyrie',
  name: 'Valkyrie',
  side: 'defense',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/valkyrie.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/44qXJmZmAwaD4w44JnPuOx/c54c8b9d3a6813ab8ce3e3f1dd4ef408/Y1S2_BADGE_Valkyrie_L.png',
  card: getOperatorAssetURL('/cards/valkyrie.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7xN3HJXPLVEmWA9PDnQzTV/613b19a897503161f2cf6fe7bbe3408e/r6-operators-list-valkyrie.png',
  figure: getOperatorAssetURL('/figures/valkyrie.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5q1yIrIxoddG5pds2Nq3mz/7dc46a59bbfb6959296d01469916f44c/R6-operator-valkyrie.png',
  body: getOperatorAssetURL('/bodies/valkyrie.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['intel', 'support'],
  season: { id: 2 },
  weapons: {
    primary: [
      {
        slug: 'mpx',
        sights: COMMON_SIGHTS_1X,
        barrels: COMMON_BARRELS_ALL,
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'spas-12',
        sights: COMMON_SIGHTS_1X,
        barrels: null,
        grips: null,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'd-50',
        sights: null,
        barrels: COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['impact_grenade', 'nitro_cell'] },
  uniqueAbility: {
    slug: 'black_eye',
    name: 'Black Eye',
    type: 'count',
    startingAmount: 3,
    description:
      'Throwable cameras that stick to surfaces and can be used by Valkyrie and her team to gather intel.',
    info: null,
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/black_eye.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1EPfd4xeuMpt5nItOYm2Eb/b59223248a508d205264ece3c3553d36/Black-Eye.png'
  },
  notes
} satisfies Operator;
