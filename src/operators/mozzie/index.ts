import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import {
  COMMON_SIGHTS_1X,
  COMMON_BARRELS_ALL,
  COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
  COMMON_GRIPS
} from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/mozzie.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/pest_launcher.svg';
import notes from './notes.md?raw';

export const mozzie = {
  slug: 'mozzie',
  name: 'Mozzie',
  side: 'defense',
  icon: {
    svg: parseSvgString(iconSvg),
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
        sights: COMMON_SIGHTS_1X,
        barrels: COMMON_BARRELS_ALL,
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'p10_roni',
        sights: [...COMMON_SIGHTS_1X, 'scope_1.5x'],
        barrels: COMMON_BARRELS_ALL,
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'sdp_9mm',
        sights: null,
        barrels: COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
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
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/pest_launcher.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5L0fFKVOwozKMcmJoenfef/56e4efdf77363556b35a76fd4e0e60f6/Pest-Launcher.png'
  },
  notes
} satisfies Operator;
