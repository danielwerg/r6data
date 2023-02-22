import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';

export const flores = {
  slug: 'flores',
  name: 'Flores',
  side: 'attack',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/flores.svg'),
    png: getOperatorAssetURL('/icons/pngs/flores.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/75vqJXXKCM2EDO0iiNqRDe/d6289dc9a4fed72ef72b9c1e11738456/Y6S1_BADGE_Flores_L.png',
  card: getOperatorAssetURL('/cards/flores.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3hXRjYHsrlFOocJjyxyYZY/29eb8f1ad9eab150518a053b775c336f/r6s-operators-list-flores.png',
  figure: getOperatorAssetURL('/figures/flores.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4lZEmYIYYUloCcSarIJfiK/f8cbc4701200b414e6efe0d599ac8106/r6s-operator-flores.png',
  body: getOperatorAssetURL('/bodies/flores.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['anti-gadget', 'intel'],
  season: { id: 21 },
  weapons: { primary: ['ar33', 'sr-25'], secondary: ['gsh-18'] },
  gadgets: { secondary: ['stun_grenade', 'claymore'] },
  uniqueAbility: {
    slug: 'rce-ratero_charge',
    name: 'RCE-Ratero Charge',
    type: 'count',
    startingAmount: 4,
    description:
      'Remote-controlled charge that anchors to a surface and becomes bulletproof, then detonates.',
    info: null,
    icon: {
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/rce-ratero_charge.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1z7eSI5D8IRIOHi0PJu4yq/3c4a273098a840957a248583f73fa8ff/r6s-operator-ability-flores.png'
  }
} satisfies Operator;
