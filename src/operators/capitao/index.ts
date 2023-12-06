import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import {
  COMMON_BARRELS_ALL,
  COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
  COMMON_GRIPS,
  COMMON_SIGHTS_1X
} from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/capitao.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/tactical_crossbow.svg';
import notes from './notes.md?raw';

export const capitao = {
  slug: 'capitao',
  name: 'Capitão',
  side: 'attack',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/capitao.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/73R4IrWJyn0xdkJ0fjOODA/fc70d200a7530dccae2847ab7962e394/Y1S3_BADGE_Capitao_L.png',
  card: getOperatorAssetURL('/cards/capitao.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3AZlhNFA21aKL2MdAIEwa8/abfce9018a7a08c120d707fbc28ae709/r6-operators-list-capitao.png',
  figure: getOperatorAssetURL('/figures/capitao.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5OxEmlChYi0U3d4URLaC4C/e348f7b3b77d2d8dec65ec6afbe171f9/R6-operator-capitao.png',
  body: getOperatorAssetURL('/bodies/capitao.png'),
  ratings: { health: 3, speed: 1 },
  specialties: ['front-line', 'map_control'],
  season: { id: 3 },
  weapons: {
    primary: [
      {
        slug: 'para-308',
        sights: [...COMMON_SIGHTS_1X, 'scope_1.5x', 'scope_2.0x'],
        barrels: COMMON_BARRELS_ALL,
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'm249',
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
        slug: 'prb92',
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
      }
    ]
  },
  gadgets: {
    secondary: ['claymore', 'hard_breach_charge', 'impact_emp_grenade']
  },
  uniqueAbility: {
    slug: 'tactical_crossbow',
    name: 'Tactical Crossbow',
    type: 'switch',
    startingAmount: 4,
    description:
      'Crossbow that fires Incendiary Bolts for area control and Micro Smoke Grenades to cover advances.',
    info: '2 Incendiary Bolts and 2 Micro Smoke Grenades.',
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/tactical_crossbow.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5ur3NZUGos3i2HR8f0HIzj/46cf23c97453ebfedeaa42a1088ff32f/Tactical-Crossbow.png'
  },
  notes
} satisfies Operator;
