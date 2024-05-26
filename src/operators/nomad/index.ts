import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import {
  BARRELS_PRECISION,
  BARRELS_NO_EXTENDED_BARREL,
  GRIPS,
  MAGNIFYING_SIGHTS,
  NON_MAGNIFYING_SIGHTS_COMMON
} from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/nomad.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/airjab_launcher.svg';
import notes from './notes.md?raw';

export const nomad = {
  slug: 'nomad',
  name: 'Nomad',
  side: 'attack',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/nomad.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/UxfU1gJDoZGDrzT3iBsIp/b1aa522cc08e4631b9a857b52afa4f99/Y3S4_BADGE_Nomad_L.png',
  card: getOperatorAssetURL('/cards/nomad.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3VHhiyMOUkBOW1u1Zh5eGH/9e603d3e6926fc26ebee494b3040eba7/r6-operators-list-nomad.png',
  figure: getOperatorAssetURL('/figures/nomad.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1Fue2SumRQEs8Geb2CpWsX/913fbcda744ab9dc719a1440047e4585/R6-operator-nomad.png',
  body: getOperatorAssetURL('/bodies/nomad.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['front-line', 'map_control'],
  season: { id: 12 },
  weapons: {
    primary: [
      {
        slug: 'ak-74m',
        sights: [...NON_MAGNIFYING_SIGHTS_COMMON, ...MAGNIFYING_SIGHTS],
        barrels: BARRELS_NO_EXTENDED_BARREL,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'arx200',
        sights: [...NON_MAGNIFYING_SIGHTS_COMMON, ...MAGNIFYING_SIGHTS],
        barrels: BARRELS_NO_EXTENDED_BARREL,
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
        slug: 'prb92',
        sights: null,
        barrels: BARRELS_PRECISION,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['stun_grenade', 'breach_charge'] },
  uniqueAbility: {
    slug: 'airjab_launcher',
    name: 'Airjab Launcher',
    type: 'count',
    startingAmount: 3,
    description:
      'Primary weapon attachment that fires a device that detonates and pushes Operators to the ground.',
    info: null,
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/airjab_launcher.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6d0LN1QWzviEkcYu3mTn6v/e49511a479756f71224f14225ad9cbd8/Airjab-Launcher.png'
  },
  notes
} satisfies Operator;
