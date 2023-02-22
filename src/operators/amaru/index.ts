import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';

export const amaru = {
  slug: 'amaru',
  name: 'Amaru',
  side: 'attack',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/amaru.svg'),
    png: getOperatorAssetURL('/icons/pngs/amaru.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2K1uxROLvHGxOIOMpNRFeU/7b4afc5ded3d1b9a937d1b504b5d4d0d/Y4S3_BADGE_Amaru_L.png',
  card: getOperatorAssetURL('/cards/amaru.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5jumFHxGXFA7HehPNn0uGD/e00f3d67802944d0c7aba72455e1ba6a/r6-operators-list-amaru.png',
  figure: getOperatorAssetURL('/figures/amaru.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1w0TmOriiVzmeIBYodZ6wK/81da7f64732b1dbf5ccf984f2aea1d94/R6-operator-amaru.png',
  body: getOperatorAssetURL('/bodies/amaru.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['front-line', 'map_control'],
  season: { id: 15 },
  weapons: {
    primary: ['g8a1', 'supernova'],
    secondary: ['smg-11', 'ita12s', 'gonne-6']
  },
  gadgets: { secondary: ['hard_breach_charge', 'stun_grenade'] },
  uniqueAbility: {
    slug: 'garra_hook',
    name: 'Garra Hook',
    type: 'count',
    startingAmount: 4,
    description:
      'Grappling gun that provides a quick rappel up ledges and windows at limited distances.',
    info: 'Garra Hook has a cooldown time between uses.',
    icon: {
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/garra_hook.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3WejtMAtiITfpjDMuq6j4t/b52e58da6b2625839aa23f940c8e6639/Garra-Hook.png'
  }
} satisfies Operator;
