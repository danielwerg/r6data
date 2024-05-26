import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import {
  BARRELS_PRECISION,
  BARRELS_NO_EXTENDED_BARREL,
  GRIPS,
  MAGNIFYING_SIGHTS,
  NON_MAGNIFYING_SIGHTS_COMMON
} from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/sledge.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/tactical_breaching_hammer.svg';
import notes from './notes.md?raw';

export const sledge = {
  slug: 'sledge',
  name: 'Sledge',
  side: 'attack',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/sledge.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4lgK1mOTVAoBhoj5qjYuyd/83c83d56e977f96ac0e9621c0d1c07d2/Y0R6_BADGE_Sledge_L.png',
  card: getOperatorAssetURL('/cards/sledge.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6eIdbZWLBIdtCygNAu9uue/8856e29f0e9ebc3b6ed996223586ebce/r6-operators-list-sledge.png',
  figure: getOperatorAssetURL('/figures/sledge.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2p5MyJkqbsfL8kCRNJVhcz/90aa196a11f2ea49ea107aab69789053/R6-operator-sledge.png',
  body: getOperatorAssetURL('/bodies/sledge.png'),
  ratings: { health: 3, speed: 1 },
  specialties: ['anti-gadget', 'breach'],
  season: { id: 0 },
  weapons: {
    primary: [
      {
        slug: 'l85a2',
        sights: [...NON_MAGNIFYING_SIGHTS_COMMON, ...MAGNIFYING_SIGHTS],
        barrels: BARRELS_NO_EXTENDED_BARREL,
        grips: GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'm590a1',
        sights: NON_MAGNIFYING_SIGHTS_COMMON,
        barrels: null,
        grips: null,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'p226_mk_25',
        sights: null,
        barrels: BARRELS_PRECISION,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: {
    secondary: ['frag_grenade', 'stun_grenade', 'impact_emp_grenade']
  },
  uniqueAbility: {
    slug: 'tactical_breaching_hammer',
    name: 'Tactical Breaching Hammer',
    type: 'count',
    startingAmount: 25,
    description:
      'Hammer that creates entryways or line of sight in breakable surfaces and destroys bulletproof devices.',
    info: null,
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/tactical_breaching_hammer.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2Vyo9CrQ1J7IZe43XpT4pV/4bc02e829d1b1745b9a527ff34f8fafb/Tactical-Breaching-Hammer.png'
  },
  notes
} satisfies Operator;
