import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import {
  COMMON_BARRELS_ALL,
  COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
  COMMON_GRIPS,
  COMMON_SIGHTS_1X
} from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/glaz.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/flip_sight.svg';
import notes from './notes.md?raw';

export const glaz = {
  slug: 'glaz',
  name: 'Glaz',
  side: 'attack',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/glaz.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5UAZVgyOutPh6bLTV3fGXf/c59d484fd599d09a947ec423b2119620/Y0R6_BADGE_Glaz_L.png',
  card: getOperatorAssetURL('/cards/glaz.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6R6uQlUmkh7KYoFYeeGpvj/fb92cfe1a0501d63a0ffa417c004e84e/r6-operators-list-glaz.png',
  figure: getOperatorAssetURL('/figures/glaz.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1xYMcXH9CNiKHI5Wqoxw8y/ac8414157d7647ea8377dd5c7ce6d2bb/R6-operator-glaz.png',
  body: getOperatorAssetURL('/bodies/glaz.png'),
  ratings: { health: 1, speed: 3 },
  specialties: ['intel', 'support'],
  season: { id: 0 },
  weapons: {
    primary: [
      {
        slug: 'ots-03',
        sights: [
          'red_dot_a',
          'red_dot_b',
          'red_dot_c',
          'holo_a',
          'holo_b',
          'holo_c',
          'holo_d',
          'reflex_a',
          'reflex_b'
        ],
        barrels: COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
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
        slug: 'gonne-6',
        sights: null,
        barrels: null,
        grips: null,
        underBarrels: null
      },
      {
        slug: 'bearing_9',
        sights: COMMON_SIGHTS_1X,
        barrels: COMMON_BARRELS_ALL,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['smoke_grenade', 'frag_grenade', 'claymore'] },
  uniqueAbility: {
    slug: 'flip_sight',
    name: 'Flip Sight',
    type: 'none',
    startingAmount: null,
    description:
      'Magnifying scope that\'s equipped onto the primary weapon to outline opponents and see through smoke.',
    info: null,
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/flip_sight.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/73bNPGhlIuhlWvi497sYqE/b68414436088f62f9da44cd42f702df7/Flip-Sight.png'
  },
  notes
} satisfies Operator;
