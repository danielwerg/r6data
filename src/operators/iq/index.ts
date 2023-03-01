import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';
import {
  COMMON_BARRELS,
  COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
  COMMON_BARRELS_NO_EXTENDED_BARREL,
  COMMON_GRIPS,
  COMMON_SIGHTS_1X
} from '../constants';

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
  weapons: {
    primary: [
      {
        slug: 'aug_a2',
        sights: [
          ...COMMON_SIGHTS_1X,
          'scope_1.5x',
          'scope_2.0x',
          'scope_2.5x_a',
          'scope_2.5x_b'
        ],
        barrels: COMMON_BARRELS_NO_EXTENDED_BARREL,
        // NOTE: forced vertical grip
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: '552_commando',
        sights: [...COMMON_SIGHTS_1X, 'scope_1.5x'],
        barrels: COMMON_BARRELS,
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'g8a1',
        sights: COMMON_SIGHTS_1X,
        barrels: COMMON_BARRELS_NO_EXTENDED_BARREL,
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'p12',
        sights: null,
        barrels: COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
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
