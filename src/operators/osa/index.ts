import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';

export const osa = {
  slug: 'osa',
  name: 'Osa',
  side: 'attack',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/osa.svg'),
    png: getOperatorAssetURL('/icons/pngs/osa.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5tt27EFHYjiDLo2qbYEgXG/2f1acbb8209e45b136ca7b0e2e5eb1f9/r6s-operators-badge-osa.png',
  card: getOperatorAssetURL('/cards/osa.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3Dg95rvyhPtw588r60vIPM/75e609068a0b205cc4dbc7bf3e517f51/r6s-operators-list-osa.png',
  figure: getOperatorAssetURL('/figures/osa.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5IYWNxvwiiwPDxAWsZVmVS/1e62cb6bcd4a7fa1608ed152a5fbb9b4/r6s-operator-osa.png',
  body: getOperatorAssetURL('/bodies/osa.png'),
  ratings: { health: 3, speed: 1 },
  specialties: ['intel', 'support'],
  season: { id: 23 },
  weapons: { primary: ['556xi', 'pdw9'], secondary: ['pmm'] },
  gadgets: { secondary: ['smoke_grenade', 'claymore', 'impact_emp_grenade'] },
  uniqueAbility: {
    slug: 'talon-8_clear_shield',
    name: 'TALON-8 Clear Shield',
    type: 'count',
    startingAmount: 2,
    description:
      'Transparent, bulletproof shield that can be carried or deployed on the ground and entryways.',
    info: null,
    icon: {
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/talon-8_clear_shield.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/71VBmyDtBAx788WnNJfEgo/1e6d78a81f8dc381bf4244b87970038f/r6s-operator-ability-osa.png'
  }
} satisfies Operator;
