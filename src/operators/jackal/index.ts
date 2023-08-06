import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import {
  COMMON_BARRELS_ALL,
  COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
  COMMON_BARRELS_NO_EXTENDED_BARREL,
  COMMON_GRIPS,
  COMMON_SIGHTS_1X
} from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/jackal.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/eyenox_model_iii.svg';
import notes from './notes.md?raw';

export const jackal = {
  slug: 'jackal',
  name: 'Jackal',
  side: 'attack',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/jackal.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/28k7LKWK70lxib7CimPJaZ/f34b2065811df8f0339838922f8c94b1/Y2S1_BADGE_Jackal_L.png',
  card: getOperatorAssetURL('/cards/jackal.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/kbyJly2JDRxFrjFSrptiy/ebbdae24cdfed025b0872742bb6c2a96/r6-operators-list-jackal.png',
  figure: getOperatorAssetURL('/figures/jackal.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2YoFmkuQL4r8odEWB7K60w/b5fd30cf9c7f407753bd921dfe6a1d28/R6-operator-jackal.png',
  body: getOperatorAssetURL('/bodies/jackal.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['intel', 'map_control'],
  season: { id: 5 },
  weapons: {
    primary: [
      {
        slug: 'c7e',
        sights: [...COMMON_SIGHTS_1X, 'scope_1.5x', 'scope_2.0x'],
        barrels: COMMON_BARRELS_NO_EXTENDED_BARREL,
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'pdw9',
        sights: [...COMMON_SIGHTS_1X, 'scope_1.5x'],
        barrels: COMMON_BARRELS_ALL,
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'ita12l',
        sights: COMMON_SIGHTS_1X,
        barrels: null,
        grips: null,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'usp40',
        sights: null,
        barrels: COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'ita12s',
        sights: COMMON_SIGHTS_1X,
        barrels: null,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['claymore', 'smoke_grenade'] },
  uniqueAbility: {
    slug: 'eyenox_model_iii',
    name: 'Eyenox Model III',
    type: 'count',
    startingAmount: 3,
    description:
      'Headgear that can be activated to reveal opponent footprints and scan them to ping the opponent\'s location.',
    info: 'The headgear has limited scans available but no limit on revealing footprints.',
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/eyenox_model_iii.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2gexf5zLDsa74J7urCoDxk/50da09626395cbe1bf2a58e00a57a514/Eyenox-Model-III.png'
  },
  notes
} satisfies Operator;
