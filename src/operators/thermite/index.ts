import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import {
  COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
  COMMON_BARRELS_NO_EXTENDED_BARREL,
  COMMON_GRIPS,
  COMMON_SIGHTS_1X
} from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/thermite.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/exothermic_charge.svg';
import notes from './notes.md?raw';

export const thermite = {
  slug: 'thermite',
  name: 'Thermite',
  side: 'attack',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/thermite.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6tow5mqLao5TrJVL52csSc/46aa934c9f3f02189e9c04df0114a081/Y0R6_BADGE_Thermite_L.png',
  card: getOperatorAssetURL('/cards/thermite.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3NQW8lJVslVSaYSiBlAleU/09fd8e3e946f2e71f39182b9ff18dd77/r6-operators-list-thermite.png',
  figure: getOperatorAssetURL('/figures/thermite.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4c4cEUFWUwXTT4p3V5wAjm/e755c2a37a050de118eabc667c55c511/R6-operator-thermite.png',
  body: getOperatorAssetURL('/bodies/thermite.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['breach', 'support'],
  season: { id: 0 },
  weapons: {
    primary: [
      {
        slug: 'm1014',
        sights: COMMON_SIGHTS_1X,
        barrels: null,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: '556xi',
        sights: [
          ...COMMON_SIGHTS_1X,
          'scope_1.5x',
          'scope_2.0x',
          'scope_2.5x_a',
          'scope_2.5x_b'
        ],
        barrels: COMMON_BARRELS_NO_EXTENDED_BARREL,
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'm45_meusoc',
        sights: null,
        barrels: COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: '5.7_usg',
        sights: null,
        barrels: COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['smoke_grenade', 'stun_grenade'] },
  uniqueAbility: {
    slug: 'exothermic_charge',
    name: 'Exothermic Charge',
    type: 'count',
    startingAmount: 2,
    description:
      'Explosive device that\'s manually detonated to create large entryways in breakable and reinforced surfaces.',
    info: null,
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/exothermic_charge.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/R5giHT90R2XOMMuUENZeK/840a5a391ed57a0c62208e72258407a7/Exothermic-Charge.png'
  },
  notes
} satisfies Operator;
