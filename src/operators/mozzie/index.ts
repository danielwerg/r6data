import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';
import {
  COMMON_1X_SIGHTS,
  COMMON_BARRELS,
  COMMON_BARRELS_HANDGUN,
  COMMON_GRIPS
} from '../constants';

export const mozzie = {
  slug: 'mozzie',
  name: 'Mozzie',
  side: 'defense',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/mozzie.svg'),
    png: getOperatorAssetURL('/icons/pngs/mozzie.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/15hUu2PsypX2c1LIJFQNUT/8538c52057420dbf3995cf3117b155c5/Y4S1_BADGE_Mozzie_L.png',
  card: getOperatorAssetURL('/cards/mozzie.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5NwXzotdPIQuvWugaam4JA/eaf8febf1432c5f2f015318c83890d93/r6-operators-list-mozzie_343537.png',
  figure: getOperatorAssetURL('/figures/mozzie.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/22Gyn0Z317IfLRGwHPBlmL/1e9e9f041403e8846824337cb53600b8/r6-operator-mozzie_343388.png',
  body: getOperatorAssetURL('/bodies/mozzie.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['anti-gadget', 'intel'],
  season: { id: 13 },
  weapons: {
    primary: [
      {
        slug: 'commando_9',
        sights: COMMON_1X_SIGHTS,
        barrels: COMMON_BARRELS,
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'p10_roni',
        sights: [...COMMON_1X_SIGHTS, 'scope_1.5x'],
        barrels: COMMON_BARRELS,
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'sdp_9mm',
        sights: null,
        barrels: COMMON_BARRELS_HANDGUN,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['barbed_wire', 'nitro_cell'] },
  uniqueAbility: {
    slug: 'pest_launcher',
    name: 'Pest Launcher',
    type: 'count',
    startingAmount: 3,
    description:
      'Launches bots that automatically latch onto opponent drones in range to take control of them.',
    info: null,
    icon: {
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/pest_launcher.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5L0fFKVOwozKMcmJoenfef/56e4efdf77363556b35a76fd4e0e60f6/Pest-Launcher.png'
  }
} satisfies Operator;
