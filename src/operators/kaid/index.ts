import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';
import {
  COMMON_SIGHTS_1X,
  COMMON_BARRELS_ALL,
  COMMON_GRIPS
} from '../constants';

export const kaid = {
  slug: 'kaid',
  name: 'Kaid',
  side: 'defense',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/kaid.svg'),
    png: getOperatorAssetURL('/icons/pngs/kaid.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5Qblb1ZqAqkN3Wa0Qw5qBq/05630c80672105a1195282d276e8eb05/Y3S4_BADGE_L.png',
  card: getOperatorAssetURL('/cards/kaid.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/9ATWPlasUTzxyJMNlV9SM/16dd669d06990b12088660ffc77bd6b3/r6-operators-list-kaid.png',
  figure: getOperatorAssetURL('/figures/kaid.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4WdfMUlABk6Pr9FjV3kV4x/42ffacc4a2cd75ff9539dcb00e1e28ee/R6-operator-kaid.png',
  body: getOperatorAssetURL('/bodies/kaid.png'),
  ratings: { health: 3, speed: 1 },
  specialties: ['anti-entry', 'anti-gadget'],
  season: { id: 12 },
  weapons: {
    primary: [
      {
        slug: 'aug_a3',
        sights: COMMON_SIGHTS_1X,
        barrels: COMMON_BARRELS_ALL,
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'tcsg12',
        sights: [...COMMON_SIGHTS_1X, 'scope_1.5x', 'scope_2.0x'],
        barrels: ['suppressor'],
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: '.44_mag_semi-auto',
        // NOTE: Forced scope_3.0x_.44_mag
        sights: null,
        barrels: null,
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
  gadgets: { secondary: ['nitro_cell', 'barbed_wire', 'observation_blocker'] },
  uniqueAbility: {
    slug: 'rtila_electroclaw',
    name: '"Rtila" Electroclaw',
    type: 'count',
    startingAmount: 2,
    description:
      'Electrical device that sticks to surfaces and electrifies nearby metal utility.',
    info: null,
    icon: {
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/rtila_electroclaw.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7rUOk2LhYIUjvYLot7GT8Y/94b72bfbbfdf50c2c807cdbf9f5b276e/Rtila-Electroclaw.png'
  }
} satisfies Operator;
