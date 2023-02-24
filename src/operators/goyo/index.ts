import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';
import {
  COMMON_1X_SIGHTS,
  COMMON_BARRELS,
  COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
  COMMON_GRIPS
} from '../constants';

export const goyo = {
  slug: 'goyo',
  name: 'Goyo',
  side: 'defense',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/goyo.svg'),
    png: getOperatorAssetURL('/icons/pngs/goyo.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6AAY4FZt5piHdabOdDokE4/f7f8bd90c20b8a429c78a08684b75aca/Y4S3_BADGE_Goyo_L.png',
  card: getOperatorAssetURL('/cards/goyo.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1ylXIr2TxRcFMSKfRhXJXh/5202b0fdfbf43545e8c40a8232a438c3/r6-operators-list-goyo.png',
  figure: getOperatorAssetURL('/figures/goyo.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3Hz6j8A8mmpN0zsxoQWXgC/1d29dff2a852f5fe25c5c4640dfe2d12/R6-operator-goyo.png',
  body: getOperatorAssetURL('/bodies/goyo.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['anti-entry', 'trapper'],
  season: { id: 15 },
  weapons: {
    primary: [
      {
        slug: 'vector_.45_acp',
        sights: [...COMMON_1X_SIGHTS, 'scope_1.5x'],
        barrels: COMMON_BARRELS,
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'tcsg12',
        sights: [...COMMON_1X_SIGHTS, 'scope_1.5x', 'scope_2.0x'],
        barrels: ['suppressor'],
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'p229',
        sights: null,
        barrels: COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['proximity_alarm', 'nitro_cell'] },
  uniqueAbility: {
    slug: 'volcan_shield',
    name: 'Volcan Shield',
    type: 'count',
    startingAmount: 4,
    description:
      'Incendiary bomb in a partially bulletproof casing that creates fire when destroyed.',
    info: null,
    icon: {
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/volcan_shield.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1JqlRdbaVA73jDq8y46vX4/82e89f39c479526ace294ba246d0b085/Volcan-Shield.png'
  }
} satisfies Operator;
