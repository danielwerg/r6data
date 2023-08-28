import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import { COMMON_SIGHTS_1X, COMMON_BARRELS_ALL } from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/clash.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/cce_shield.svg';
import notes from './notes.md?raw';

export const clash = {
  slug: 'clash',
  name: 'Clash',
  side: 'defense',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/clash.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7G4lGl5HPLFTTUdcZW8UOK/3901b44cf2a9423486ffd78531e42f87/Y3S3_BADGE_Clash_L.png',
  card: getOperatorAssetURL('/cards/clash.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3tTgRbA9GdeLTmI1mPObsp/5b490d1e9021c37ffa59f3e6bc6f8c7e/r6-operators-list-clash.png',
  figure: getOperatorAssetURL('/figures/clash.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/snhm8UctuxdKTEcvnWi2K/17e5c888c0407d74a658eefbf91e60b6/R6-operator-clash.png',
  body: getOperatorAssetURL('/bodies/clash.png'),
  ratings: { health: 3, speed: 1 },
  specialties: ['intel', 'crowd_control'],
  season: { id: 11 },
  weapons: {
    primary: [
      {
        slug: 'cce_shield',
        sights: null,
        barrels: null,
        grips: null,
        underBarrels: null
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
        slug: 'spsmg9',
        sights: COMMON_SIGHTS_1X,
        barrels: COMMON_BARRELS_ALL,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'p-10c',
        // NOTE: Forced red_dot_handgun
        sights: null,
        barrels: COMMON_BARRELS_ALL,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: {
    secondary: ['barbed_wire', 'impact_grenade', 'deployable_shield']
  },
  uniqueAbility: {
    slug: 'cce_shield',
    name: 'CCE Shield',
    type: 'infinite_recharge_bar',
    startingAmount: null,
    description:
      'Extendable electro-shield that protects against incoming rushes by slowing opponents and injuring them over time.',
    info: 'Gauge that empties while in use and fills up when ability is inactive.',
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/cce_shield.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1jck6fnzAMbMQrUMVsnA0M/d04a60eab0132e6bcc202a4f99186cdd/CCE-Shield.png'
  },
  notes
} satisfies Operator;
