import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';
import {
  COMMON_BARRELS_ALL,
  COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
  COMMON_SIGHTS_1X
} from '../constants';

export const buck = {
  slug: 'buck',
  name: 'Buck',
  side: 'attack',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/buck.svg'),
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
        sights: [...COMMON_SIGHTS_1X, 'scope_1.5x'],
        barrels: COMMON_BARRELS_ALL,
        grips: null,
        // NOTE: Forced under-barrel shotgun
        underBarrels: ['laser']
      },
      {
        slug: 'camrs',
        sights: [
          ...COMMON_SIGHTS_1X,
          'scope_1.5x',
          'scope_2.0x',
          'scope_2.5x_a',
          'scope_2.5x_b',
          'scope_3.0x'
        ],
        barrels: COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
        grips: null,
        // NOTE: Forced under-barrel shotgun
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'mk1_9mm',
        sights: null,
        barrels: COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
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
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/skeleton_key.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2w8EQtN4FFtEMa9lBYyWGg/36bbc6d819761c11418c868d2e483991/Skeleton-Key.png'
  }
} satisfies Operator;
