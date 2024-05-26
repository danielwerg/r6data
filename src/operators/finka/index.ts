import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import {
  BARRELS,
  BARRELS_PRECISION,
  BARRELS_NO_EXTENDED_BARREL,
  GRIPS,
  MAGNIFYING_SIGHTS,
  NON_MAGNIFYING_SIGHTS_COMMON
} from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/finka.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/adrenal_surge.svg';
import notes from './notes.md?raw';

export const finka = {
  slug: 'finka',
  name: 'Finka',
  side: 'attack',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/finka.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6CzQHWePD3Mi8HE5bdx5ic/2a6b5a6cc653ebf99d062725368eae2a/Y3S1_BADGE_Finka_L.png',
  card: getOperatorAssetURL('/cards/finka.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6VkZ60XV4HWhbQaoMpfjnw/1bd7667a572622371627e90e5e572455/r6-operators-list-finka.png',
  figure: getOperatorAssetURL('/figures/finka.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1ihKzLryOLc5JNkejAdUh2/1b7a9f866afdc07b86a604a681f23b1b/R6-operator-finka.png',
  body: getOperatorAssetURL('/bodies/finka.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['front-line', 'support'],
  season: { id: 9 },
  weapons: {
    primary: [
      {
        slug: 'spear_.308',
        sights: [...NON_MAGNIFYING_SIGHTS_COMMON, ...MAGNIFYING_SIGHTS],
        barrels: BARRELS,
        grips: GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: '6p41',
        sights: [...NON_MAGNIFYING_SIGHTS_COMMON, ...MAGNIFYING_SIGHTS],
        barrels: BARRELS_NO_EXTENDED_BARREL,
        grips: GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'sasg-12',
        sights: NON_MAGNIFYING_SIGHTS_COMMON,
        barrels: ['suppressor'],
        grips: GRIPS,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'pmm',
        sights: null,
        barrels: BARRELS_PRECISION,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'gsh-18',
        sights: null,
        barrels: BARRELS_PRECISION,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['smoke_grenade', 'stun_grenade', 'frag_grenade'] },
  uniqueAbility: {
    slug: 'adrenal_surge',
    name: 'Adrenal Surge',
    type: 'count',
    startingAmount: 3,
    description:
      'Gives Finka and her team a health boost or revive and enhances their combat capabilities.',
    info: 'Adrenal Surge has a cooldown time between uses.',
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/adrenal_surge.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/9xGRNPNznBKssvgQAtQNQ/9352fc88f2911ab40789412856b3e20e/Adrenal-Surge.png'
  },
  notes
} satisfies Operator;
