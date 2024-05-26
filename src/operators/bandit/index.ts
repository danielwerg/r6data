import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import {
  NON_MAGNIFYING_SIGHTS_COMMON,
  BARRELS,
  BARRELS_PRECISION
} from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/bandit.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/shock_wire.svg';
import notes from './notes.md?raw';

export const bandit = {
  slug: 'bandit',
  name: 'Bandit',
  side: 'defense',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/bandit.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4Vasjq82J1TNjNE38J7LmV/e1725f8d9ea2b85565e40b54faac85b8/Y0R6_BADGE_Bandit_L.png',
  card: getOperatorAssetURL('/cards/bandit.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2cFHG0Xk93uoGrm5nTjDPE/2211339df9b36c1b0d9873e480d03fad/r6-operators-list-bandit.png',
  figure: getOperatorAssetURL('/figures/bandit.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7uF3w5MYCFA1zikIkECPi9/f03570fd8c7739361619726638561c7a/R6-operator-bandit.png',
  body: getOperatorAssetURL('/bodies/bandit.png'),
  ratings: { health: 1, speed: 3 },
  specialties: ['anti-entry', 'anti-gadget'],
  season: { id: 0 },
  weapons: {
    primary: [
      {
        slug: 'mp7',
        sights: NON_MAGNIFYING_SIGHTS_COMMON,
        barrels: BARRELS,
        // NOTE: Forced vertical grip
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'm870',
        sights: NON_MAGNIFYING_SIGHTS_COMMON,
        barrels: null,
        grips: null,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'p12',
        sights: null,
        barrels: BARRELS_PRECISION,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['barbed_wire', 'nitro_cell'] },
  uniqueAbility: {
    slug: 'shock_wire',
    name: 'Shock Wire',
    type: 'count',
    startingAmount: 4,
    description:
      'Electrical device that\'s deployed on the ground to electrify nearby metal utility.',
    info: null,
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/shock_wire.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/129HTNU2A5kIcMj0KZ5UjU/858b60dd0e9b8692e2dc693eded50e14/Shock-Wire.png'
  },
  notes
} satisfies Operator;
