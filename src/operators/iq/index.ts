import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';

export const iq = {
  slug: 'iq',
  name: 'IQ',
  side: 'attack',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/iq.svg'),
    png: getOperatorAssetURL('/icons/pngs/iq.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4xnVj2iZB8Otchiw7j69UO/13c864a4e2eb976c1978dc79411b450c/Y0R6_BADGE_IQ_L.png',
  card: getOperatorAssetURL('/cards/iq.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3lP88YKPk0boUyisZD0LT7/6b3ef86531c459ef9e573f056d6eddf5/r6-operators-list-iq.png',
  figure: getOperatorAssetURL('/figures/iq.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2bdUfjHxFfSn9YzMjlUThL/d1b3519228790ba30785eebab03bbc38/R6-operator-iq.png',
  body: getOperatorAssetURL('/bodies/iq.png'),
  ratings: { health: 1, speed: 3 },
  specialties: ['intel', 'support'],
  season: { id: 0 },
  weapons: { primary: ['aug_a2', '552_commando', 'g8a1'], secondary: ['p12'] },
  gadgets: { secondary: ['breach_charge', 'claymore'] },
  uniqueAbility: {
    slug: 'electronics_detector',
    name: 'Electronics Detector',
    type: 'none',
    startingAmount: null,
    description:
      'Wearable device that locates nearby electronics through objects and surfaces.',
    info: null,
    icon: {
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/electronics_detector.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/23Nk2ie06rb3DcZnStryIY/e06226196dd582c905c33fad87dfdd63/Electronics-Detector.png'
  }
} satisfies Operator;
