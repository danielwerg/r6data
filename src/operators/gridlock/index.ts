import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import {
  COMMON_BARRELS_ALL,
  COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
  COMMON_GRIPS,
  COMMON_SIGHTS_1X
} from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/gridlock.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/trax_stingers.svg';
import notes from './notes.md?raw';

export const gridlock = {
  slug: 'gridlock',
  name: 'Gridlock',
  side: 'attack',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/gridlock.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5LIyheUROsdMDkX6o0zh6R/f201ce65af771459c374ef71c89827b4/Y4S1_BADGE_Gridlock_LL.png',
  card: getOperatorAssetURL('/cards/gridlock.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/27gUsHtPmP86NRs4cPug1o/31ea0005ad1afc68a8ebcc477934ded6/r6-operators-list-gridlock.png',
  figure: getOperatorAssetURL('/figures/gridlock.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/221q2yd28L3IAkjUGEFCke/51f431695fe53b30f7b384141b5e63ee/R6-operator-gridlock.png',
  body: getOperatorAssetURL('/bodies/gridlock.png'),
  ratings: { health: 3, speed: 1 },
  specialties: ['support', 'map_control'],
  season: { id: 13 },
  weapons: {
    primary: [
      {
        slug: 'f90',
        sights: [
          ...COMMON_SIGHTS_1X,
          'scope_1.5x',
          'scope_2.0x',
          'scope_2.5x_a',
          'scope_2.5x_b'
        ],
        barrels: COMMON_BARRELS_ALL,
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'm249_saw',
        sights: [
          ...COMMON_SIGHTS_1X,
          'scope_1.5x',
          'scope_2.0x',
          'scope_2.5x_a',
          'scope_2.5x_b'
        ],
        barrels: ['flash_hider', 'compensator', 'muzzle_brake'],
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'super_shorty',
        sights: COMMON_SIGHTS_1X,
        barrels: null,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'sdp_9mm',
        sights: null,
        barrels: COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: {
    secondary: ['smoke_grenade', 'impact_emp_grenade', 'frag_grenade']
  },
  uniqueAbility: {
    slug: 'trax_stingers',
    name: 'Trax Stingers',
    type: 'count',
    startingAmount: 4,
    description:
      'Device that deploys barbed mats to slow and injure opponents that walk on them.',
    info: null,
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/trax_stingers.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/QGVvmZeZ91FC2X4mvMzgn/601fa45e635872aea31f15ffebb9c366/Trax-Stingers.png'
  },
  notes
} satisfies Operator;
