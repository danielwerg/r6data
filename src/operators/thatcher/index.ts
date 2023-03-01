import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';
import {
  COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
  COMMON_BARRELS_NO_EXTENDED_BARREL,
  COMMON_GRIPS,
  COMMON_SIGHTS_1X
} from '../constants';

export const thatcher = {
  slug: 'thatcher',
  name: 'Thatcher',
  side: 'attack',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/thatcher.svg'),
    png: getOperatorAssetURL('/icons/pngs/thatcher.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5NbqTdEPmYy9qOZmN9StVT/f75b0f2610a37f9e5bdcb8ba9d551a38/Y0R6_BADGE_Thatcher_L.png',
  card: getOperatorAssetURL('/cards/thatcher.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5QGPM6l25ybaINnaIaLgvm/d018abc75d44758d666ad6bea0a38a9b/r6-operators-list-thatcher.png',
  figure: getOperatorAssetURL('/figures/thatcher.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4yGZXsXNG7gxH0YIwnii6F/e895af50867dc913f192050c10913abd/R6-operator-thatcher.png',
  body: getOperatorAssetURL('/bodies/thatcher.png'),
  ratings: { health: 3, speed: 1 },
  specialties: ['anti-gadget', 'support'],
  season: { id: 0 },
  weapons: {
    primary: [
      {
        slug: 'ar33',
        sights: [
          ...COMMON_SIGHTS_1X,
          'scope_1.5x',
          'scope_2.0x',
          'scope_2.5x_a',
          'scope_2.5x_b'
        ],
        barrels: COMMON_BARRELS_NO_EXTENDED_BARREL,
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'l85a2',
        sights: [...COMMON_SIGHTS_1X, 'scope_1.5x', 'scope_2.0x'],
        barrels: COMMON_BARRELS_NO_EXTENDED_BARREL,
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'm590a1',
        sights: COMMON_SIGHTS_1X,
        barrels: null,
        grips: null,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'p226_mk_25',
        sights: null,
        barrels: COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['breach_charge', 'claymore'] },
  uniqueAbility: {
    slug: 'emp_grenade',
    name: 'EMP Grenade',
    type: 'count',
    startingAmount: 3,
    description:
      'Non-damaging grenade that temporarily deactivates nearby opponent electronic devices.',
    info: null,
    icon: {
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/emp_grenade.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4p4srpOH4sq55OHryHhn5t/d31728d1432ed28c429ea566caf0e083/EMP-Grenade.png'
  }
} satisfies Operator;
