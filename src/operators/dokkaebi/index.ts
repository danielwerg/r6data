import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import {
  BARRELS_PRECISION,
  GRIPS,
  MAGNIFYING_SIGHTS,
  NON_MAGNIFYING_SIGHTS_COMMON,
  TELESCOPIC_SIGHTS_COMMON
} from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/dokkaebi.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/logic_bomb.svg';
import notes from './notes.md?raw';

export const dokkaebi = {
  slug: 'dokkaebi',
  name: 'Dokkaebi',
  side: 'attack',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/dokkaebi.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/aoQeHLohcuqvubBoyrzsM/d4a230ecba495c58c5521e10d5d84baa/Y2S4_BADGE_Dokkaebi_L.png',
  card: getOperatorAssetURL('/cards/dokkaebi.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7fjUupLXClpcdTyqdvPv24/e4492917c18682ef09f9b0445176b2f2/r6-operators-list-dokkaebi.png',
  figure: getOperatorAssetURL('/figures/dokkaebi.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2s5BCj0po76sK50EyDeNH5/63779ec1228021893847b361865956d1/R6-operator-dokkaebi.png',
  body: getOperatorAssetURL('/bodies/dokkaebi.png'),
  ratings: { health: 1, speed: 3 },
  specialties: ['intel', 'map_control'],
  season: { id: 8 },
  weapons: {
    primary: [
      {
        slug: 'mk_14_ebr',
        sights: [
          ...NON_MAGNIFYING_SIGHTS_COMMON,
          ...MAGNIFYING_SIGHTS,
          ...TELESCOPIC_SIGHTS_COMMON
        ],
        barrels: BARRELS_PRECISION,
        grips: GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'bosg.12.2',
        sights: [...NON_MAGNIFYING_SIGHTS_COMMON, ...MAGNIFYING_SIGHTS],
        barrels: null,
        grips: GRIPS,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'smg-12',
        sights: NON_MAGNIFYING_SIGHTS_COMMON,
        barrels: null,
        grips: GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'c75_auto',
        sights: null,
        barrels: ['suppressor'],
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'gonne-6',
        sights: null,
        barrels: null,
        grips: null,
        underBarrels: null
      }
    ]
  },
  gadgets: {
    secondary: ['smoke_grenade', 'stun_grenade', 'impact_emp_grenade']
  },
  uniqueAbility: {
    slug: 'logic_bomb',
    name: 'Logic Bomb',
    type: 'count',
    startingAmount: 2,
    description:
      'Calls Defender phones to compromise their locations, interrupt use of Observation Tools and leave them open to hacking.',
    info: null,
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/logic_bomb.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5ej2g1iCMHdfjn8h8qgfmU/bf07fef4b063a46389ca650ed02b292a/Logic-Bomb.png'
  },
  notes
} satisfies Operator;
