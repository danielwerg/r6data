import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';

export const ying = {
  slug: 'ying',
  name: 'Ying',
  side: 'attack',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/ying.svg'),
    png: getOperatorAssetURL('/icons/pngs/ying.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6ZVB1OJxNgs0pR0Fd7Kzt0/74721fe9fd743167508f98dc280a17a3/Y2S2_BADGE_Ying_L.png',
  card: getOperatorAssetURL('/cards/ying.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/36BxtuVTQFrNh2OPyJ2px3/6db32fa8151b9a925acdd65d289bcf0f/r6-operators-list-ying.png',
  figure: getOperatorAssetURL('/figures/ying.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4Oyf6w5rI0u9j4zMcWBSGz/ef22bcaca06cba29fdfa41e5ec921f7d/R6-operator-ying.png',
  body: getOperatorAssetURL('/bodies/ying.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['front-line', 'map_control'],
  season: { id: 7 },
  weapons: { primary: ['t-95_lsw', 'six12'], secondary: ['q-929'] },
  gadgets: { secondary: ['smoke_grenade', 'hard_breach_charge'] },
  uniqueAbility: {
    slug: 'candela',
    name: 'Candela',
    type: 'count',
    startingAmount: 4,
    description:
      'Device that deploys a cluster of flash charges to temporarily blind Operators.',
    info: 'Each Candela releases 3 flash charges.',
    icon: {
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/candela.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4vpN9vu5wD9dyb2knMosTy/430796de3c0c2a5c2eb2ac6f4217eba0/Candela.png'
  }
} satisfies Operator;
