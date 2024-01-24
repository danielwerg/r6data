import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import {
  COMMON_BARRELS_ALL,
  COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
  COMMON_GRIPS,
  COMMON_SIGHTS_1X
} from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/tubarao.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/zoto_canister.svg';
import notes from './notes.md?raw';

export const tubarao = {
  slug: 'tubarao',
  name: 'Tubarão',
  side: 'defense',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/tubarao.png')
  },
  iconOfficial:
    'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/43VtYmfmTtLwwKDGhalSCO/9673bb50e981ba2684cd649534f00de7/r6s-operators-badge-tubarao.png',
  card: getOperatorAssetURL('/cards/tubarao.png'),
  cardOfficial:
    'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1ceva9aObGqSk9C9UNehdK/8541f4312f3b363c0692b7ce19e40725/r6s-operators-list-tubarao.png',
  figure: getOperatorAssetURL('/figures/tubarao.png'),
  figureOfficial:
    'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6RHlZJniCer89285ocTyPY/103b3da47a3978f5b6fbbd77a02b53c9/r6s-operator-tubarao.png',
  body: getOperatorAssetURL('/bodies/tubarao.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['anti-gadget', 'crowd_control'],
  season: { id: 32 },
  weapons: {
    primary: [
      {
        slug: 'mpx',
        sights: COMMON_SIGHTS_1X,
        barrels: COMMON_BARRELS_ALL,
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'ar-15.50',
        sights: [...COMMON_SIGHTS_1X, 'scope_1.5x'],
        barrels: COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'p226_mk_25',
        sights: null,
        barrels: COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['nitro_cell', 'proximity_alarm'] },
  uniqueAbility: {
    slug: 'zoto_canister',
    name: 'Zoto Canister',
    type: 'count',
    startingAmount: 3,
    description:
      'Throwable device that sticks to surfaces and releases a freezing gas, deactivating devices and slowing enemies.',
    info: null,
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/zoto_canister.png')
    },
    iconOfficial:
      'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2HBwr95RPJmDlx29Sg5noC/6b05e8549d4fe44066ed01677440e74d/r6s-operator-ability-tubarao.png'
  },
  notes
} satisfies Operator;
