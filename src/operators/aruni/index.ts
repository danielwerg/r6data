import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';

export const aruni = {
  slug: 'aruni',
  name: 'Aruni',
  side: 'defense',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/aruni.svg'),
    png: getOperatorAssetURL('/icons/pngs/aruni.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5rOLCYQOh5HH0Nv6NHe38H/29681f901ff71ae5decb5ccb1b9f8a29/Y5S4_BADGE_Aruni_L.png',
  card: getOperatorAssetURL('/cards/aruni.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4yfuWCW8O4ja2VqR9tXqaE/c8dd123a6405959cf4f091c3854c9d96/r6s-operators-list-aruni.png',
  figure: getOperatorAssetURL('/figures/aruni.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/xIH5tc98YOO1Juf1cRcJC/779f61650fac17e6e79e7b0f618c83e5/r6s-operator-aruni.png',
  body: getOperatorAssetURL('/bodies/aruni.png'),
  ratings: { health: 3, speed: 1 },
  specialties: ['anti-entry', 'anti-gadget'],
  season: { id: 20 },
  weapons: { primary: ['p10_roni', 'mk_14_ebr'], secondary: ['prb92'] },
  gadgets: { secondary: ['barbed_wire', 'bulletproof_camera'] },
  uniqueAbility: {
    slug: 'surya_gate',
    name: 'Surya Gate',
    type: 'count',
    startingAmount: 3,
    description:
      'Laser gate that denies entry and intel by injuring opponents and destroying devices that pass through it.',
    info: null,
    icon: {
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/surya_gate.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4hLJAAVKrf50wosG0471od/cde1867daf863c03754969f159ac00de/r6s-operator-ability-aruni.png'
  }
} satisfies Operator;
