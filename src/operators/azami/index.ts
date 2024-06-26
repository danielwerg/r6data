import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import {
  BARRELS,
  BARRELS_PRECISION,
  GRIPS,
  MAGNIFYING_SIGHTS,
  NON_MAGNIFYING_SIGHTS_COMMON
} from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/azami.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/kiba_barrier.svg';
import notes from './notes.md?raw';

export const azami = {
  slug: 'azami',
  name: 'Azami',
  side: 'defense',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/azami.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7KWTXHTk8rxLS5qtyX4Xu4/b51f8691b932fd2b83260ef3fbcd1154/r6s-operators-badge-azami.png',
  card: getOperatorAssetURL('/cards/azami.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5M7OGhXfAf5Q0Cdo1YJkRE/2e4c141357cf97d54c6840ee38f6bf76/r6s-operators-list-azami.png',
  figure: getOperatorAssetURL('/figures/azami.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6vzacvORn7fh5sWFqy4glF/daadcbb2e0515129bf0cb610eccb3393/r6s-operator-azami.png',
  body: getOperatorAssetURL('/bodies/azami.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['anti-entry', 'support'],
  season: { id: 25 },
  weapons: {
    primary: [
      {
        slug: '9x19vsn',
        sights: NON_MAGNIFYING_SIGHTS_COMMON,
        barrels: BARRELS,
        grips: GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'acs12',
        sights: [...NON_MAGNIFYING_SIGHTS_COMMON, ...MAGNIFYING_SIGHTS],
        barrels: null,
        grips: GRIPS,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'd-50',
        sights: null,
        barrels: BARRELS_PRECISION,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['barbed_wire', 'impact_grenade'] },
  // The Kiba Barrier has health and is vulnerable to bullets. The caliber of the weapon will affect the damage dealt to the barriers.
  uniqueAbility: {
    slug: 'kiba_barrier',
    name: 'Kiba Barrier',
    type: 'count',
    startingAmount: 1,
    description:
      'Throwable device that sticks to surfaces and creates a bulletproof barrier that blocks entryways and line of sight.',
    info: '1 Kiba charges over time, up to a maximum of 5.',
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/kiba_barrier.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1UDhKrAXnm0thdHhsTTAyo/03f6b0b4879208d963e6d551b86ad3a6/r6s-operator-ability-azami.png'
  },
  notes
} satisfies Operator;
