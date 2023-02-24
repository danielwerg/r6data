import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';
import {
  COMMON_1X_SIGHTS,
  COMMON_BARRELS,
  COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
  COMMON_GRIPS
} from '../constants';

export const frost = {
  slug: 'frost',
  name: 'Frost',
  side: 'defense',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/frost.svg'),
    png: getOperatorAssetURL('/icons/pngs/frost.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1OWFtfiEXleLSENciCSQQR/8fcced59c0125073e506f2dee0201015/Y1S1_BADGE_Frost_L.png',
  card: getOperatorAssetURL('/cards/frost.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/33qvDwvWy7y9VGw9k1RYWi/73c4b6e46575b2b649058e2e626c223a/r6-operators-list-frost.png',
  figure: getOperatorAssetURL('/figures/frost.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4IrcYxDo6aVBQyxDOFirQE/852e6c6c0e8a46303469921efae3d6dc/R6-operator-frost.png',
  body: getOperatorAssetURL('/bodies/frost.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['anti-entry', 'trapper'],
  season: { id: 1 },
  weapons: {
    primary: [
      {
        slug: 'super_90',
        sights: COMMON_1X_SIGHTS,
        barrels: null,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: '9mm_c1',
        sights: [...COMMON_1X_SIGHTS, 'scope_1.5x'],
        barrels: COMMON_BARRELS,
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'mk1_9mm',
        sights: null,
        barrels: COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'ita12s',
        sights: COMMON_1X_SIGHTS,
        barrels: null,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['bulletproof_camera', 'deployable_shield'] },
  uniqueAbility: {
    slug: 'welcome_mat',
    name: 'Welcome Mat',
    type: 'count',
    startingAmount: 3,
    description:
      'Floor trap that instantly downs opponents and prevents them from moving.',
    info: null,
    icon: {
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/welcome_mat.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/xsIzH7XCAqvn7F3tEfAPe/c41e59a9d7f2ed7ee38b16ed0a882351/Welcome-Mate.png'
  }
} satisfies Operator;
