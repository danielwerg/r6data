import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';

export const gridlock = {
  slug: 'gridlock',
  name: 'Gridlock',
  side: 'attack',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/gridlock.svg'),
    png: getOperatorAssetURL('/icons/pngs/gridlock.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5LIyheUROsdMDkX6o0zh6R/f201ce65af771459c374ef71c89827b4/Y4S1_BADGE_Gridlock_LL.png',
  card: getOperatorAssetURL('/cards/gridlock.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/27gUsHtPmP86NRs4cPug1o/31ea0005ad1afc68a8ebcc477934ded6/r6-operators-list-gridlock.png',
  figure: getOperatorAssetURL('/figures/gridlock.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/221q2yd28L3IAkjUGEFCke/51f431695fe53b30f7b384141b5e63ee/R6-operator-gridlock.png',
  body: getOperatorAssetURL('/bodies/gridlock.png'),
  ratings: { health: 3, speed: 1 },
  specialties: ['support', 'map_control'],
  season: { id: 13 },
  weapons: {
    primary: ['f90', 'm249_saw'],
    secondary: ['super_shorty', 'sdp_9mm', 'gonne-6']
  },
  gadgets: {
    secondary: ['smoke_grenade', 'breach_charge', 'impact_emp_grenade']
  },
  uniqueAbility: {
    slug: 'trax_stingers',
    name: 'Trax Stingers',
    type: 'count',
    startingAmount: 4,
    description:
      'Device that deploys barbed mats to slow and injure opponents that walk on them.',
    info: null,
    icon: {
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/trax_stingers.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/QGVvmZeZ91FC2X4mvMzgn/601fa45e635872aea31f15ffebb9c366/Trax-Stingers.png'
  }
} satisfies Operator;
