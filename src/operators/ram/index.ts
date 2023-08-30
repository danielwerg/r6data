import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import {
  COMMON_SIGHTS_1X,
  COMMON_BARRELS_ALL,
  COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
  COMMON_GRIPS,
  COMMON_BARRELS_NO_EXTENDED_BARREL
} from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/ram.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/bu-gi_auto-breacher.svg';
import notes from './notes.md?raw';

export const ram = {
  slug: 'ram',
  name: 'Ram',
  side: 'attack',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/ram.png')
  },
  iconOfficial:
    'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3YQiStwC1Qo4wKWmgK6XCH/ac8a0fea30f2996f96ca31b17a0039fa/r6s-operators-badge-ram.png',
  card: getOperatorAssetURL('/cards/ram.png'),
  cardOfficial:
    'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7uO4bXss6I8nCRVOxYKxEf/5be8def62a24cc353d1342296b9a5f27/r6s-operators-list-ram.png ',
  figure: getOperatorAssetURL('/figures/ram.png'),
  figureOfficial:
    'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/Fgszpez8AbRf23OkswHQl/32f5f4d2bb387941e474833ceb3ac2cb/r6s-operator-ram.png',
  body: getOperatorAssetURL('/bodies/ram.png'),
  ratings: { health: 3, speed: 1 },
  specialties: ['breach', 'anti-gadget'],
  season: { id: 31 },
  weapons: {
    primary: [
      {
        slug: 'r4-c',
        sights: [...COMMON_SIGHTS_1X, 'scope_1.5x', 'scope_2.0x'],
        barrels: COMMON_BARRELS_ALL,
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'lmg-e',
        sights: [...COMMON_SIGHTS_1X, 'scope_1.5x', 'scope_2.0x'],
        barrels: COMMON_BARRELS_NO_EXTENDED_BARREL,
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'mk1_9mm',
        sights: null,
        barrels: COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'ita12s',
        sights: COMMON_SIGHTS_1X,
        barrels: null,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: {
    secondary: ['stun_grenade', 'smoke_grenade']
  },
  uniqueAbility: {
    slug: 'bu-gi_auto-breacher',
    name: 'Bu-Gi Auto-Breacher',
    type: 'none',
    startingAmount: 4,
    description:
      'Deployable mini-tank that moves along a set path destroying devices and breakable surfaces in its way.',
    info: null,
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/bu-gi_auto-breacher.png')
    },
    iconOfficial:
      'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7qkMmMKIA8rGhDceraZSvl/0093fd62cc9bd7cac931f2542a13cc05/r6s-operator-ability-ram.png'
  },
  notes
} satisfies Operator;
