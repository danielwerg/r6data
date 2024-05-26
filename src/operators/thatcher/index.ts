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
import iconSvg from '../../assets/operators/icons/svgs/thatcher.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/emp_grenade.svg';
import notes from './notes.md?raw';

export const thatcher = {
  slug: 'thatcher',
  name: 'Thatcher',
  side: 'attack',
  icon: {
    svg: parseSvgString(iconSvg),
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
        sights: [...NON_MAGNIFYING_SIGHTS_COMMON, ...MAGNIFYING_SIGHTS],
        barrels: BARRELS_NO_EXTENDED_BARREL,
        grips: GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'l85a2',
        sights: [...NON_MAGNIFYING_SIGHTS_COMMON, ...MAGNIFYING_SIGHTS],
        barrels: BARRELS_NO_EXTENDED_BARREL,
        grips: GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'm590a1',
        sights: NON_MAGNIFYING_SIGHTS_COMMON,
        barrels: null,
        grips: null,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'p226_mk_25',
        sights: null,
        barrels: BARRELS_PRECISION,
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
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/emp_grenade.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4p4srpOH4sq55OHryHhn5t/d31728d1432ed28c429ea566caf0e083/EMP-Grenade.png'
  },
  notes
} satisfies Operator;
