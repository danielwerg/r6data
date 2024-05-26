import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import {
  BARRELS,
  BARRELS_PRECISION,
  MAGNIFYING_SIGHTS,
  NON_MAGNIFYING_SIGHTS_COMMON,
  TELESCOPIC_SIGHTS_COMMON
} from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/buck.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/skeleton_key.svg';
import notes from './notes.md?raw';

export const buck = {
  slug: 'buck',
  name: 'Buck',
  side: 'attack',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/buck.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2oZZBEZzVLFpRY7Mp85MWq/f62287872dd61b4e0697a93d703b2beb/Y1S1_BADGE_Buck_L.png',
  card: getOperatorAssetURL('/cards/buck.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3k68pZu62GPbCAFOSCej9a/3c3d3da1f7109a396fb59dcf06c5c4c8/r6-operators-list-buck.png',
  figure: getOperatorAssetURL('/figures/buck.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3YDi0a5YWFRwNzMoAjZstI/f2ebc37bde447faa664bcf160c63042d/R6-operator-buck.png',
  body: getOperatorAssetURL('/bodies/buck.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['breach', 'support'],
  season: { id: 1 },
  weapons: {
    primary: [
      {
        slug: 'c8-sfw',
        sights: [...NON_MAGNIFYING_SIGHTS_COMMON, ...MAGNIFYING_SIGHTS],
        barrels: BARRELS,
        grips: null,
        // NOTE: Forced under-barrel shotgun
        underBarrels: ['laser']
      },
      {
        slug: 'camrs',
        sights: [
          ...NON_MAGNIFYING_SIGHTS_COMMON,
          ...MAGNIFYING_SIGHTS,
          ...TELESCOPIC_SIGHTS_COMMON
        ],
        barrels: BARRELS_PRECISION,
        grips: null,
        // NOTE: Forced under-barrel shotgun
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'mk1_9mm',
        sights: null,
        barrels: BARRELS_PRECISION,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'gonne-6',
        sights: null,
        barrels: null,
        grips: null,
        underBarrels: null
      }
    ]
  },
  gadgets: { secondary: ['stun_grenade', 'hard_breach_charge'] },
  uniqueAbility: {
    slug: 'skeleton_key',
    name: 'Skeleton Key',
    type: 'count',
    startingAmount: 31,
    description:
      'Primary weapon shotgun attachment used to create entryways or line of sight in breakable surfaces.',
    info: 'Amount of ammo for the shotgun attachment.',
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/skeleton_key.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2w8EQtN4FFtEMa9lBYyWGg/36bbc6d819761c11418c868d2e483991/Skeleton-Key.png'
  },
  notes
} satisfies Operator;
