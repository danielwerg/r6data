import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';
import {
  COMMON_BARRELS,
  COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
  COMMON_SIGHTS_1X
} from '../constants';

export const kali = {
  slug: 'kali',
  name: 'Kali',
  side: 'attack',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/kali.svg'),
    png: getOperatorAssetURL('/icons/pngs/kali.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6r1hk1EunQirF1IcY4TG8T/0d3fbb7508a7747fd51249b1b8ea9779/Y4S4_BADGE_Kali_L.png',
  card: getOperatorAssetURL('/cards/kali.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/41NACeIbkdnIWgnwq0HzD4/9713f8e58b9a8c253b7507b59169bb3c/r6-operators-list-kali_358317.png',
  figure: getOperatorAssetURL('/figures/kali.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4xh8dBfzXNSwQIOaw660Xb/6df56a74ea8534be1d15f61e49aa1e24/r6-operator-kali_358315.png',
  body: getOperatorAssetURL('/bodies/kali.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['anti-gadget', 'support'],
  season: { id: 16 },
  weapons: {
    primary: [
      {
        slug: 'csrx_300',
        // NOTE: Forced 'scope_5.0x' and 'scope_12.0x'
        sights: null,
        barrels: null,
        grips: null,
        // NOTE: Forced launcher for LV Lances
        underBarrels: null
      }
    ],
    secondary: [
      {
        slug: 'spsmg9',
        sights: COMMON_SIGHTS_1X,
        barrels: COMMON_BARRELS,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'c75_auto',
        sights: null,
        barrels: ['suppressor'],
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'p226_mk_25',
        sights: null,
        barrels: COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['claymore', 'breach_charge'] },
  uniqueAbility: {
    slug: 'lv_explosive_lance',
    name: 'LV Explosive Lance',
    type: 'count',
    startingAmount: 4,
    description:
      'Under-barrel projectile on primary weapon that detonates to destroy devices on either side of breakable and reinforced surfaces.',
    info: null,
    icon: {
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/lv_explosive_lance.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/75eebt48ELO4eGGdIMVMpY/9533c7dc8f36651f5b5ad50c8ccb6c5a/LV_Explosive_Lance.png'
  }
} satisfies Operator;
