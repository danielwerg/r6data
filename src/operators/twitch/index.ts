import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import {
  BARRELS,
  BARRELS_PRECISION,
  GRIPS,
  MAGNIFYING_SIGHTS,
  NON_MAGNIFYING_SIGHTS_COMMON,
  TELESCOPIC_SIGHTS_COMMON
} from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/twitch.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/shock_drones.svg';
import notes from './notes.md?raw';

export const twitch = {
  slug: 'twitch',
  name: 'Twitch',
  side: 'attack',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/twitch.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3YgCpOSM2R4SDgExstxm7P/ff84e6ac53bd9f690deee78870f9c23b/Y0R6_BADGE_Twitch_L.png',
  card: getOperatorAssetURL('/cards/twitch.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/Z9R1Anc8MHwbG5iyPoOf2/69fe9aee30e03322a4e09d4b87de15aa/r6-operators-list-twitch.png',
  figure: getOperatorAssetURL('/figures/twitch.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5jaeo9LkOu6deQz4mOF9a2/9a07011ac08bc25d58cbfc828b442e3a/R6-operator-twitch.png',
  body: getOperatorAssetURL('/bodies/twitch.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['anti-gadget', 'intel'],
  season: { id: 0 },
  weapons: {
    primary: [
      {
        slug: 'f2',
        sights: [...NON_MAGNIFYING_SIGHTS_COMMON, ...MAGNIFYING_SIGHTS],
        barrels: BARRELS,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: '417',
        sights: [
          ...NON_MAGNIFYING_SIGHTS_COMMON,
          ...MAGNIFYING_SIGHTS,
          ...TELESCOPIC_SIGHTS_COMMON
        ],
        barrels: BARRELS_PRECISION,
        grips: GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'sg-cqb',
        sights: NON_MAGNIFYING_SIGHTS_COMMON,
        barrels: null,
        grips: ['vertical_grip'],
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'p9',
        sights: null,
        barrels: BARRELS_PRECISION,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'lfp586',
        sights: null,
        barrels: null,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['claymore', 'smoke_grenade'] },
  uniqueAbility: {
    slug: 'shock_drones',
    name: 'Shock Drones',
    type: 'count',
    startingAmount: 2,
    description:
      'Drone that manually fires lasers to clear rooms of opponent devices.',
    info: 'Each drone has 3 laser charges that recharge after use.',
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/shock_drones.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5dZ9kaUfUSF3piuFIUKf2t/7ebfc51caee42a776492b56251d45d92/Shock-Drones.png'
  },
  notes
} satisfies Operator;
