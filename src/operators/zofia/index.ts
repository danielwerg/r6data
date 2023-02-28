import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';
import {
  COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
  COMMON_BARRELS_NO_EXTENDED_BARREL,
  COMMON_GRIPS,
  COMMON_SIGHTS_1X
} from '../constants';

export const zofia = {
  slug: 'zofia',
  name: 'Zofia',
  side: 'attack',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/zofia.svg'),
    png: getOperatorAssetURL('/icons/pngs/zofia.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1k09nbCCu2avlIWpK3cJz9/35d60746d67750230f2a020a7be78795/Y2S3_BADGE_Zofia_L.png',
  card: getOperatorAssetURL('/cards/zofia.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/z60t1OJxJoHqm2zp0t5dL/4acc0904444f43b12a17f6a578322cf9/r6-operators-list-zofia.png',
  figure: getOperatorAssetURL('/figures/zofia.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5KUunQgJWx9sVC0hFhHVAt/8fdff15ca50227328fb0589ecd8ccda0/R6-operator-zofia.png',
  body: getOperatorAssetURL('/bodies/zofia.png'),
  ratings: { health: 3, speed: 1 },
  specialties: ['breach', 'anti-gadget'],
  season: { id: 8 },
  weapons: {
    primary: [
      {
        slug: 'lmg-e',
        sights: [...COMMON_SIGHTS_1X, 'scope_1.5x', 'scope_2.0x'],
        barrels: COMMON_BARRELS_NO_EXTENDED_BARREL,
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'm762',
        sights: [...COMMON_SIGHTS_1X, 'scope_1.5x', 'scope_2.0x'],
        barrels: COMMON_BARRELS_NO_EXTENDED_BARREL,
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'rg15',
        // NOTE: Forced red_dot_handgun
        sights: null,
        barrels: COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['breach_charge', 'claymore'] },
  uniqueAbility: {
    slug: 'ks79_lifeline',
    name: 'KS79 Lifeline',
    type: 'switch',
    startingAmount: 4,
    description:
      'Launcher that fires two types of grenades to disorient opponents or create entryways in breakable surfaces.',
    info: '2 Impact Grenades and 2 Concussion Grenades.',
    icon: {
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/ks79_lifeline.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1elqIEWJ6XsXKAbMNd0Cai/0b4c0591bad284d957e652cdae0b706b/KS79-Lifeline.png'
  }
} satisfies Operator;
