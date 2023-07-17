import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import {
  COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
  COMMON_BARRELS_NO_EXTENDED_BARREL,
  COMMON_GRIPS,
  COMMON_SIGHTS_1X
} from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/flores.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/rce-ratero_charge.svg';
import notes from './notes.md?raw';

export const flores = {
  slug: 'flores',
  name: 'Flores',
  side: 'attack',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/flores.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/75vqJXXKCM2EDO0iiNqRDe/d6289dc9a4fed72ef72b9c1e11738456/Y6S1_BADGE_Flores_L.png',
  card: getOperatorAssetURL('/cards/flores.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3hXRjYHsrlFOocJjyxyYZY/29eb8f1ad9eab150518a053b775c336f/r6s-operators-list-flores.png',
  figure: getOperatorAssetURL('/figures/flores.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4lZEmYIYYUloCcSarIJfiK/f8cbc4701200b414e6efe0d599ac8106/r6s-operator-flores.png',
  body: getOperatorAssetURL('/bodies/flores.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['anti-gadget', 'intel'],
  season: { id: 21 },
  weapons: {
    primary: [
      {
        slug: 'ar33',
        sights: [...COMMON_SIGHTS_1X, 'scope_1.5x', 'scope_2.0x'],
        barrels: COMMON_BARRELS_NO_EXTENDED_BARREL,
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'sr-25',
        sights: [
          ...COMMON_SIGHTS_1X,
          'scope_1.5x',
          'scope_2.0x',
          'scope_2.5x_a',
          'scope_2.5x_b',
          'scope_3.0x'
        ],
        barrels: COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'gsh-18',
        sights: null,
        barrels: COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['stun_grenade', 'claymore'] },
  uniqueAbility: {
    slug: 'rce-ratero_charge',
    name: 'RCE-Ratero Charge',
    type: 'count',
    startingAmount: 4,
    description:
      'Remote-controlled charge that anchors to a surface and becomes bulletproof, then detonates.',
    info: null,
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/rce-ratero_charge.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1z7eSI5D8IRIOHi0PJu4yq/3c4a273098a840957a248583f73fa8ff/r6s-operator-ability-flores.png'
  },
  notes
} satisfies Operator;
