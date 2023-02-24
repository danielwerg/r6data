import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';
import {
  COMMON_1X_SIGHTS,
  COMMON_BARRELS,
  COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
  COMMON_GRIPS
} from '../constants';

export const echo = {
  slug: 'echo',
  name: 'Echo',
  side: 'defense',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/echo.svg'),
    png: getOperatorAssetURL('/icons/pngs/echo.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3MRqAdUybJ7GR9gX4wPAI4/992938a70a4e53b91478358634e77ca7/Y1S4_BADGE_Echo_L.png',
  card: getOperatorAssetURL('/cards/echo.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7MdVMpafww11MfSVMEzyTK/4d4c5d92585c7cf11a28cbf9456e3d9e/r6-operators-list-echo.png',
  figure: getOperatorAssetURL('/figures/echo.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2dZawp2HB63pTV3Zwgro6L/8278d19b2e9ae6b1f4ef45784a217c89/R6-operator-echo.png',
  body: getOperatorAssetURL('/bodies/echo.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['intel', 'crowd_control'],
  season: { id: 4 },
  weapons: {
    primary: [
      {
        slug: 'supernova',
        sights: COMMON_1X_SIGHTS,
        barrels: ['suppressor'],
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'mp5sd',
        sights: [...COMMON_1X_SIGHTS, 'scope_1.5x'],
        // NOTE: Forced suppressor
        barrels: null,
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
      },
      {
        slug: 'bearing_9',
        sights: COMMON_1X_SIGHTS,
        barrels: COMMON_BARRELS,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['impact_grenade', 'deployable_shield'] },
  uniqueAbility: {
    slug: 'yokai',
    name: 'Yokai',
    type: 'count',
    startingAmount: 2,
    description:
      'Drone that can hover on ceilings and manually fires sonic bursts to stun opponents and interrupt their actions.',
    info: 'Each Yokai has 2 sonic burst charges that recharge after use.',
    icon: {
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/yokai.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/TdDZyrKpjt9EQo8tHpIJk/d987db4da22046a0663be8be82dcda88/Yokai.png'
  }
} satisfies Operator;
