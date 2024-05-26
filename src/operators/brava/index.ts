import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import {
  BARRELS,
  BARRELS_PRECISION,
  GRIPS,
  MAGNIFYING_SIGHTS,
  NON_MAGNIFYING_SIGHTS_COMMON,
  TELESCOPIC_SIGHTS_COMMON
} from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/brava.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/kludge_drone.svg';
import notes from './notes.md?raw';

export const brava = {
  slug: 'brava',
  name: 'Brava',
  side: 'attack',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/brava.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1JTzualMKZVGfdROg4XKh8/7989454e62b7972bfd88f09097cc148f/r6s-operators-badge-brava.png',
  card: getOperatorAssetURL('/cards/brava.png'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7piw6czbaAsv6NnYXtJZay/02683e035ab9481bbe8cbf669113c84d/r6s-operators-list-brava.png',
  figure: getOperatorAssetURL('/figures/brava.png'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7uyRvknQBEbg6KY37rXeK2/699fd5226e65c7b3ad5205dcf54360f4/r6s-operator-brava.png',
  body: getOperatorAssetURL('/bodies/brava.png'),
  ratings: { health: 1, speed: 3 },
  specialties: ['anti-gadget', 'intel'],
  season: { id: 29 },
  weapons: {
    primary: [
      {
        slug: 'para-308',
        sights: [...NON_MAGNIFYING_SIGHTS_COMMON, ...MAGNIFYING_SIGHTS],
        barrels: BARRELS,
        grips: GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'camrs',
        sights: [
          ...NON_MAGNIFYING_SIGHTS_COMMON,
          ...MAGNIFYING_SIGHTS,
          ...TELESCOPIC_SIGHTS_COMMON
        ],
        barrels: BARRELS_PRECISION,
        grips: GRIPS,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'super_shorty',
        sights: NON_MAGNIFYING_SIGHTS_COMMON,
        barrels: null,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'usp40',
        sights: null,
        barrels: BARRELS_PRECISION,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['smoke_grenade', 'claymore'] },
  uniqueAbility: {
    slug: 'kludge_drone',
    name: 'Kludge Drone',
    type: 'count',
    startingAmount: 2,
    description:
      'Deployable drone that either takes control of electronic devices or destroys them after a short delay.',
    info: 'Each drone has 3 shots.',
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/kludge_drone.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7CeEFqxBVGt3yXGCrE8TZq/9bd38a7211fdbbaea9c43794bd6f4925/r6s-operator-ability-brava.png'
  },
  notes
} satisfies Operator;
