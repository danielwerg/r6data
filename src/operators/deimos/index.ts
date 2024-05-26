import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import {
  BARRELS_NO_EXTENDED_BARREL,
  MAGNIFYING_SIGHTS,
  NON_MAGNIFYING_SIGHTS_COMMON
} from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/deimos.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/deathmark_tracker.svg';
import notes from './notes.md?raw';

export const deimos = {
  slug: 'deimos',
  name: 'Deimos',
  side: 'attack',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/deimos.png')
  },
  iconOfficial:
    'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/18uYWtYnEjmMQBTTdkIfWF/2bb4305ef6b7826f1c8ae3ea88ef826a/r6s-operators-badge-deimos.png',
  card: getOperatorAssetURL('/cards/deimos.jpg'),
  cardOfficial:
    'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2TV52rbjzuWtMGezWio1ox/2ec949f545995fc79fb3dc393a650992/r6s-operators-list-deimos.png',
  figure: getOperatorAssetURL('/figures/deimos.jpg'),
  figureOfficial:
    'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/30I7qa77OwH9EWPvcHYBbH/45c27a7d2d3df007b0138f2c6ab2b94a/r6s-operator-deimos.png',
  body: getOperatorAssetURL('/bodies/deimos.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['intel', 'map_control'],
  season: { id: 33 },
  weapons: {
    primary: [
      {
        slug: 'ak-74m',
        sights: [...NON_MAGNIFYING_SIGHTS_COMMON, ...MAGNIFYING_SIGHTS],
        barrels: BARRELS_NO_EXTENDED_BARREL,
        grips: null,
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
        slug: '.44_vendetta',
        // NOTE: Forced non-magnifying_.44_vendetta
        sights: null,
        barrels: null,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: {
    secondary: ['frag_grenade', 'hard_breach_charge', 'smoke_grenade']
  },
  uniqueAbility: {
    slug: 'deathmark_tracker',
    name: 'DeathMARK Tracker',
    type: 'recharge_count',
    startingAmount: 3,
    description:
      'Small probe that reveals an Opponent and Deimos to each other for a limited time.',
    info: '1 DeathMARK charges over time, up to a maximum of 3.',
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/deathmark_tracker.png')
    },
    iconOfficial:
      'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/vfUd3exyKBnSVj7Uj0rD3/c109abe7787520f3e0a3150a343cc4d6/r6s-operator-ability-deimos.png'
  },
  notes
} satisfies Operator;
