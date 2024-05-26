import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import {
  BARRELS,
  BARRELS_PRECISION,
  MAGNIFYING_SIGHTS,
  NON_MAGNIFYING_SIGHTS_COMMON
} from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/nokk.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/hel_presence_reduction.svg';
import notes from './notes.md?raw';

export const nokk = {
  slug: 'nokk',
  name: 'Nøkk',
  side: 'attack',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/nokk.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2qfSHHTdCRVhx9EWycVDNr/9e361e73fb91e571f7470de21edf5c7a/Y4S2_BADGE_Nokk_L.png',
  card: getOperatorAssetURL('/cards/nokk.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/VeXso9iKMqBDrSmuJ2kBx/b8020ed099ddbdcb31ec809b9d7da152/r6-operators-list-nokk.png',
  figure: getOperatorAssetURL('/figures/nokk.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5X4tMHTglYiy22CYHvvn6b/74f36f4695c6f1eb79533be5e9f97002/R6-operator-nokk.png',
  body: getOperatorAssetURL('/bodies/nokk.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['front-line', 'map_control'],
  season: { id: 14 },
  weapons: {
    primary: [
      {
        slug: 'fmg-9',
        sights: [...NON_MAGNIFYING_SIGHTS_COMMON, ...MAGNIFYING_SIGHTS],
        barrels: BARRELS,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'six12_sd',
        sights: NON_MAGNIFYING_SIGHTS_COMMON,
        // NOTE: Forced suppressor
        barrels: null,
        grips: null,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: '5.7_usg',
        sights: null,
        barrels: BARRELS_PRECISION,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'd-50',
        sights: null,
        barrels: BARRELS_PRECISION,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: {
    secondary: ['frag_grenade', 'hard_breach_charge', 'impact_emp_grenade']
  },
  uniqueAbility: {
    slug: 'hel_presence_reduction',
    name: 'HEL Presence Reduction',
    type: 'infinite_recharge_bar',
    startingAmount: null,
    description:
      'Wipes Nøkk\'s image from nearby drones and Observation Tools and muffles the sound of her movement.',
    info: 'Gauge that empties while in use and fills up when ability is inactive.',
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/hel_presence_reduction.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/57miqbOn8xWBh7ne7za3CV/35364108d49380a0ed33998f970e104f/HEL-Presence-Reduction.png'
  },
  notes
} satisfies Operator;
