import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import {
  COMMON_SIGHTS_1X,
  COMMON_BARRELS_ALL,
  COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
  COMMON_BARRELS_NO_EXTENDED_BARREL
} from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/wamai.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/mag-net_system.svg';
import notes from './notes.md?raw';

export const wamai = {
  slug: 'wamai',
  name: 'Wamai',
  side: 'defense',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/wamai.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1vQZ4WsAjhc6M7qNOS4ahQ/92fc4d89632fb87aec0f102d7adbfe26/Y4S4_BADGE_Wamai_L.png',
  card: getOperatorAssetURL('/cards/wamai.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2ZSUcKWczIo1w2WwzNan5B/98938e59a958117b46901c57fce98ae7/r6-operators-list-wamai_358318.png',
  figure: getOperatorAssetURL('/figures/wamai.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6S1qFckDJGp8NyVztOpbCE/86eaaab66472038666289cc2aefe3949/r6-operator-wamai_358316.png',
  body: getOperatorAssetURL('/bodies/wamai.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['anti-gadget', 'trapper'],
  season: { id: 16 },
  weapons: {
    primary: [
      {
        slug: 'aug_a2',
        sights: COMMON_SIGHTS_1X,
        barrels: COMMON_BARRELS_NO_EXTENDED_BARREL,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'mp5k',
        sights: [...COMMON_SIGHTS_1X, 'scope_1.5x'],
        barrels: COMMON_BARRELS_ALL,
        grips: null,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'keratos_.357',
        sights: null,
        barrels: COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'p12',
        sights: null,
        barrels: COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['impact_grenade', 'proximity_alarm'] },
  uniqueAbility: {
    slug: 'mag-net_system',
    name: 'Mag-net System',
    type: 'recharge_count',
    startingAmount: 1,
    description:
      'Throwable device that captures incoming grenades and projectiles and detonates them after a delay.',
    info: '1 Mag-NET recharges over time, up to a maximum of 6.',
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/mag-net_system.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1IKNZzLv63AJd9vlbXj3Bo/883371432ffb22e5bf35bc82dd706384/Mag-net_System.png'
  },
  notes
} satisfies Operator;
