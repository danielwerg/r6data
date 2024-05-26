import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import {
  NON_MAGNIFYING_SIGHTS_COMMON,
  BARRELS,
  GRIPS,
  MAGNIFYING_SIGHTS
} from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/kaid.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/rtila_electroclaw.svg';
import notes from './notes.md?raw';

export const kaid = {
  slug: 'kaid',
  name: 'Kaid',
  side: 'defense',
  icon: {
    svg: parseSvgString(iconSvg),
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
        sights: NON_MAGNIFYING_SIGHTS_COMMON,
        barrels: BARRELS,
        grips: GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'tcsg12',
        sights: [...NON_MAGNIFYING_SIGHTS_COMMON, ...MAGNIFYING_SIGHTS],
        barrels: ['suppressor'],
        grips: GRIPS,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: '.44_mag_semi-auto',
        // NOTE: Forced telescopic_.44_mag_semi-auto
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
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/rtila_electroclaw.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7rUOk2LhYIUjvYLot7GT8Y/94b72bfbbfdf50c2c807cdbf9f5b276e/Rtila-Electroclaw.png'
  },
  notes
} satisfies Operator;
