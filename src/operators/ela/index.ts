import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';
import {
  COMMON_SIGHTS_1X,
  COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
  COMMON_GRIPS,
  COMMON_BARRELS_NO_EXTENDED_BARREL
} from '../constants';

export const ela = {
  slug: 'ela',
  name: 'Ela',
  side: 'defense',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/ela.svg'),
    png: getOperatorAssetURL('/icons/pngs/ela.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7zbkJJWMCOj04DNhYDz994/d2cba213d30d7b8cf2ba8cd568c78f20/Y2S3_BADGE_Ela_L.png',
  card: getOperatorAssetURL('/cards/ela.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6110n4X8KghHzBtPrksrKD/28e78ce725b3d1cd35c6f0967c0524b8/r6-operators-list-ela.png',
  figure: getOperatorAssetURL('/figures/ela.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3cpkHAvjm3RLhEoTqs090m/35a7595eb2f2431213656d66da8a9af8/R6-operator-ela.png',
  body: getOperatorAssetURL('/bodies/ela.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['crowd_control', 'trapper'],
  season: { id: 7 },
  weapons: {
    primary: [
      {
        slug: 'scorpion_evo_3_a1',
        sights: COMMON_SIGHTS_1X,
        barrels: COMMON_BARRELS_NO_EXTENDED_BARREL,
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'fo-12',
        sights: COMMON_SIGHTS_1X,
        barrels: ['suppressor', 'extended_barrel'],
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'rg15',
        // NOTE: Forced red_dot_handgun
        sights: null,
        barrels: COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['barbed_wire', 'deployable_shield'] },
  uniqueAbility: {
    slug: 'grzmot_mine',
    name: 'Grzmot Mine',
    type: 'count',
    startingAmount: 3,
    description:
      'Concussion mine that sticks to surfaces and detonates when it detects nearby opponents to disorient them.',
    info: null,
    icon: {
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/grzmot_mine.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/10Md7ccaUO0pE0nCWimeoZ/35dddc67a4141e844d7904051a0314dc/Grzmot-Mine.png'
  }
} satisfies Operator;
