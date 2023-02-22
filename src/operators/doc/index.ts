import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';

export const doc = {
  slug: 'doc',
  name: 'Doc',
  side: 'defense',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/doc.svg'),
    png: getOperatorAssetURL('/icons/pngs/doc.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/71Nl3v0LqHyo9eXV6xTFQd/1ba4f057b6acad3ec700ca9e60b53d6c/Y0R6_BADGE_Doc_L.png',
  card: getOperatorAssetURL('/cards/doc.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2sCxLIpS9I19PKRz44Phj9/4f96411a556cc41597b8b3e83260cd21/r6-operators-list-doc.png',
  figure: getOperatorAssetURL('/figures/doc.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7cZ1TDHehPRrgv6uJ2GIoy/d6feddd3fc1a0769a8ad56afa658e572/R6-operator-doc.png',
  body: getOperatorAssetURL('/bodies/doc.png'),
  ratings: { health: 3, speed: 1 },
  specialties: ['support'],
  season: { id: 0 },
  weapons: {
    primary: ['mp5', 'p90', 'sg-cqb'],
    secondary: ['p9', 'lfp586', 'bailiff_410']
  },
  gadgets: { secondary: ['bulletproof_camera', 'barbed_wire'] },
  uniqueAbility: {
    slug: 'stim_pistol',
    name: 'Stim Pistol',
    type: 'count',
    startingAmount: 3,
    description:
      'Fires a shot that provides Doc and his team with a health boost or revive from a distance.',
    info: null,
    icon: {
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/stim_pistol.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7njaeUjJj27iYH27HnH6jn/c5533d2d7191b879c313013f278f5f59/Stim-Pistol.png'
  }
} satisfies Operator;
