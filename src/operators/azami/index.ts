import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';
import {
  COMMON_BARRELS,
  COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
  COMMON_GRIPS,
  COMMON_SIGHTS_1X
} from '../constants';

export const azami = {
  slug: 'azami',
  name: 'Azami',
  side: 'defense',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/azami.svg'),
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
        sights: COMMON_SIGHTS_1X,
        barrels: COMMON_BARRELS,
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'acs12',
        sights: [...COMMON_SIGHTS_1X, 'scope_1.5x'],
        barrels: null,
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'd-50',
        sights: null,
        barrels: COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['impact_grenade', 'barbed_wire'] },
  uniqueAbility: {
    slug: 'kiba_barrier',
    name: 'Kiba Barrier',
    type: 'count',
    startingAmount: 1,
    description:
      'Throwable device that sticks to surfaces and creates a bulletproof barrier that blocks entryways and line of sight.',
    info: '1 Kiba charges over time, up to a maximum of 5.',
    icon: {
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/kiba_barrier.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1UDhKrAXnm0thdHhsTTAyo/03f6b0b4879208d963e6d551b86ad3a6/r6s-operator-ability-azami.png'
  }
} satisfies Operator;
