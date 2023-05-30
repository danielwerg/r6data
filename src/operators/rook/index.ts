import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';
import {
  COMMON_SIGHTS_1X,
  COMMON_BARRELS_ALL,
  COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
  COMMON_GRIPS
} from '../constants';

export const rook = {
  slug: 'rook',
  name: 'Rook',
  side: 'defense',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/rook.svg'),
    png: getOperatorAssetURL('/icons/pngs/rook.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3Yk1noMd9re0RLlrXJSWtR/7a55e80593c487827293a114835dba63/Y0R6_BADGE_Rook_L.png',
  card: getOperatorAssetURL('/cards/rook.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1aFTx0BJYAKAnS1vyNA7w6/b4fc6421d382c677aa0197f84131eaa5/r6-operators-list-rook.png',
  figure: getOperatorAssetURL('/figures/rook.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/17CNRjTOFVKS1Q8Zou4ZVD/663dae86e2902f210bf2b1504904dbd0/R6-operator-rook.png',
  body: getOperatorAssetURL('/bodies/rook.png'),
  ratings: { health: 3, speed: 1 },
  specialties: ['support'],
  season: { id: 0 },
  weapons: {
    primary: [
      {
        slug: 'p90',
        sights: [...COMMON_SIGHTS_1X, 'scope_1.5x'],
        barrels: COMMON_BARRELS_ALL,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'mp5',
        sights: [...COMMON_SIGHTS_1X, 'scope_1.5x', 'scope_2.0x'],
        barrels: COMMON_BARRELS_ALL,
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'sg-cqb',
        sights: COMMON_SIGHTS_1X,
        barrels: null,
        grips: ['vertical_grip'],
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'lfp586',
        sights: null,
        barrels: null,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'p9',
        sights: null,
        barrels: COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: {
    secondary: ['proximity_alarm', 'impact_grenade', 'observation_blocker']
  },
  uniqueAbility: {
    slug: 'armor_pack',
    name: 'Armor Pack',
    type: 'count',
    startingAmount: 1,
    description:
      'A pack of armor plates that give teammates additional health and protect them against elimination one time.',
    info: 'Armor Pack has 5 armor plates.',
    icon: {
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/armor_pack.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/MeoKw7iPY6EFYvjS07CRg/b2d7eba623f3c63d6b7097a8f2253954/Armor-Pack.png'
  }
} satisfies Operator;
