import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import {
  NON_MAGNIFYING_SIGHTS_COMMON,
  BARRELS,
  GRIPS,
  MAGNIFYING_SIGHTS
} from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/vigil.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/erc-7.svg';
import notes from './notes.md?raw';

export const vigil = {
  slug: 'vigil',
  name: 'Vigil',
  side: 'defense',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/vigil.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/56A3hXhWZdwO623g3ejeku/a40a0582a7841abfeed723d8fbe238d3/Y2S4_BADGE_Vigil_L.png',
  card: getOperatorAssetURL('/cards/vigil.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/48ebOPwZWlyktdhawglqlI/819d0565c7f545e97526e4dda0a2f129/r6-operators-list-vigil.png',
  figure: getOperatorAssetURL('/figures/vigil.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/bPE2opWKKK0BPVx6I1H4b/4e15d30820900ecd0794ef90e1361d5a/R6-operator-vigil.png',
  body: getOperatorAssetURL('/bodies/vigil.png'),
  ratings: { health: 1, speed: 3 },
  specialties: ['anti-gadget', 'crowd_control'],
  season: { id: 8 },
  weapons: {
    primary: [
      {
        slug: 'k1a',
        sights: NON_MAGNIFYING_SIGHTS_COMMON,
        barrels: BARRELS,
        grips: GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'bosg.12.2',
        sights: [...NON_MAGNIFYING_SIGHTS_COMMON, ...MAGNIFYING_SIGHTS],
        barrels: null,
        grips: GRIPS,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'c75_auto',
        sights: null,
        barrels: ['suppressor'],
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'smg-12',
        sights: NON_MAGNIFYING_SIGHTS_COMMON,
        barrels: null,
        grips: GRIPS,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['bulletproof_camera', 'impact_grenade'] },
  uniqueAbility: {
    slug: 'erc-7',
    name: 'ERC-7',
    type: 'infinite_recharge_bar',
    startingAmount: null,
    description:
      'Wipes Vigil\'s image from nearby drones and Observation Tools so he can\'t be scanned.',
    info: 'Gauge that empties while in use and fills up when ability is inactive.',
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/erc-7.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6WbhiNk0evsKWChPneCES6/af08476e2f917878e0326727d2d5fb8a/ERC-7.png'
  },
  notes
} satisfies Operator;
