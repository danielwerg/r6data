import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';
import {
  COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
  COMMON_BARRELS_NO_EXTENDED_BARREL,
  COMMON_GRIPS,
  COMMON_SIGHTS_1X
} from '../constants';

export const ace = {
  slug: 'ace',
  name: 'Ace',
  side: 'attack',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/ace.svg'),
    png: getOperatorAssetURL('/icons/pngs/ace.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/dgG7GmXY1HgfeEE2gI1H9/06bd3917c8fc19f61654490019ef25fb/Y5S2_BADGE_Ace_L.png',
  card: getOperatorAssetURL('/cards/ace.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5snW47tH4a5VuPhidr61sm/40b812d32eb85b5c3390865541578bea/r6s-operator-list-ace.png',
  figure: getOperatorAssetURL('/figures/ace.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3VknamIo6E87ELFbLqk1dx/a54751fe2435104ed35b5e6ee660ef72/r6s-operator-ace.png',
  body: getOperatorAssetURL('/bodies/ace.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['anti-gadget', 'breach'],
  season: { id: 18 },
  weapons: {
    primary: [
      {
        slug: 'ak-12',
        sights: [...COMMON_SIGHTS_1X, 'scope_1.5x'],
        barrels: COMMON_BARRELS_NO_EXTENDED_BARREL,
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'm1014',
        sights: COMMON_SIGHTS_1X,
        barrels: null,
        grips: null,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'p9',
        sights: null,
        barrels: COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['breach_charge', 'claymore'] },
  uniqueAbility: {
    slug: 's.e.l.m.a._aqua_breacher',
    name: 'S.E.L.M.A. Aqua Breacher',
    type: 'count',
    startingAmount: 3,
    description:
      'Throwable breach charge that creates line of sight or entryways in breakable and reinforced surfaces.',
    info: null,
    icon: {
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/s.e.l.m.a._aqua_breacher.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2sjKOnwHeOX2xn3iIpja2A/e265f675c905ac25c23ed11fc85589bb/r6s-operator-ability-ace.png'
  }
} satisfies Operator;
