import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import {
  NON_MAGNIFYING_SIGHTS_COMMON,
  BARRELS,
  BARRELS_PRECISION,
  GRIPS
} from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/oryx.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/remah_dash.svg';
import notes from './notes.md?raw';

export const oryx = {
  slug: 'oryx',
  name: 'Oryx',
  side: 'defense',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/oryx.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7mLA8GY9ZKlUfDXrfo9Nek/e3dfd0759414f36866a8c80b61a67722/Y5S1_BADGE_Oryx_L.png',
  card: getOperatorAssetURL('/cards/oryx.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3JBOp3MXgGeuEwyoYrkuMi/b7aa3c4a3fa6f165135954aa30252838/r6s-operator-list-oryx.png',
  figure: getOperatorAssetURL('/figures/oryx.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3Ha2aY7zJrudEskszfFA3K/2f5d898ca145d4dd73d8ec4ece53b195/r6s-operator-oryx.png',
  body: getOperatorAssetURL('/bodies/oryx.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['support'],
  season: { id: 17 },
  weapons: {
    primary: [
      {
        slug: 't-5_smg',
        sights: NON_MAGNIFYING_SIGHTS_COMMON,
        barrels: BARRELS,
        grips: GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'spas-12',
        sights: NON_MAGNIFYING_SIGHTS_COMMON,
        barrels: null,
        grips: null,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'bailiff_410',
        // NOTE: Forced red_dot_handgun
        sights: null,
        barrels: null,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'usp40',
        sights: null,
        barrels: BARRELS_PRECISION,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['barbed_wire', 'proximity_alarm'] },
  uniqueAbility: {
    slug: 'remah_dash',
    name: 'Remah Dash',
    type: 'infinite_recharge_count',
    startingAmount: 3,
    description:
      'Dash attack that creates entryways in breakable walls, pushes opponents to the ground, and allows for faster roaming.',
    info: 'Remah Dashes recharge after use.',
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/remah_dash.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3dM2B3qCdU0woydIbiy2xn/55aa99443002ad794d3f78dada26d035/r6s-operator-ability-oryx.png'
  },
  notes
} satisfies Operator;
