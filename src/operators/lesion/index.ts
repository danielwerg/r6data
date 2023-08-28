import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import {
  COMMON_SIGHTS_1X,
  COMMON_BARRELS_ALL,
  COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
  COMMON_GRIPS
} from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/lesion.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/gu_mines.svg';
import notes from './notes.md?raw';

export const lesion = {
  slug: 'lesion',
  name: 'Lesion',
  side: 'defense',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/lesion.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2CWYSySnPAhsOHdq2OLSjv/f9e54debcfa0c8fe76012d9097b98e6e/Y2S2_BADGE_Lesion_L.png',
  card: getOperatorAssetURL('/cards/lesion.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3woPDn0yMuXfkr2RYoymFj/964dfe9277e5299b0125c33b39e165d1/r6-operators-list-lesion.png',
  figure: getOperatorAssetURL('/figures/lesion.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3R9iXCdt0dpYqg6LqFojua/ba70e0f2616df82a2f89ecf2d72b4ae0/R6-operator-lesion.png',
  body: getOperatorAssetURL('/bodies/lesion.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['anti-entry', 'trapper'],
  season: { id: 7 },
  weapons: {
    primary: [
      {
        slug: 'six12_sd',
        sights: COMMON_SIGHTS_1X,
        // NOTE: Forced suppressor
        barrels: null,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 't-5_smg',
        sights: COMMON_SIGHTS_1X,
        barrels: COMMON_BARRELS_ALL,
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'q-929',
        sights: null,
        barrels: COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'super_shorty',
        sights: COMMON_SIGHTS_1X,
        barrels: null,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['impact_grenade', 'bulletproof_camera'] },
  uniqueAbility: {
    slug: 'gu_mines',
    name: 'Gu Mines',
    type: 'recharge_count',
    startingAmount: 1,
    description:
      'Toxic mines that inject a compound, injuring opponents and limiting their speed',
    info: '1 GU charges over time, up to a maximum of 9.',
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/gu_mines.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6PJv86R8CtQCWA7a24sJE2/24f3751b2ed941ce80a4c1ef394ab7d5/Gu-mines.png'
  },
  notes
} satisfies Operator;
