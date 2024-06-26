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
import iconSvg from '../../assets/operators/icons/svgs/blackbeard.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/rifle_shield.svg';
import notes from './notes.md?raw';

export const blackbeard = {
  slug: 'blackbeard',
  name: 'Blackbeard',
  side: 'attack',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/blackbeard.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4BTbmcs1EtoUbnpk5Am22Y/b7bd4d0708245c78b98455505c0d51a8/Y1S2_BADGE_Blackbeard_L.png',
  card: getOperatorAssetURL('/cards/blackbeard.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5u6Ak7dkTb4yOjaP1hlGuT/0cdd45963fd8c83c62f609c7319bbf05/r6-operators-list-blackbeard.png',
  figure: getOperatorAssetURL('/figures/blackbeard.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1FtCiVm4q4DsQNsLoT5nV0/2028bded87ef2fe2b255332f4245c525/R6-operator-blackbeard.png',
  body: getOperatorAssetURL('/bodies/blackbeard.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['support'],
  season: { id: 2 },
  weapons: {
    primary: [
      {
        slug: 'mk17_cqb',
        sights: [...NON_MAGNIFYING_SIGHTS_COMMON, ...MAGNIFYING_SIGHTS],
        barrels: BARRELS,
        grips: GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'sr-25',
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
        slug: 'd-50',
        sights: null,
        barrels: BARRELS_PRECISION,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['claymore', 'stun_grenade', 'frag_grenade'] },
  uniqueAbility: {
    slug: 'rifle_shield',
    name: 'Rifle Shield',
    type: 'count',
    startingAmount: 2,
    description:
      'Primary weapon shield attachment that provides frontal protection from headshots before breaking.',
    info: null,
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/rifle_shield.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2dZeBTlDDdFQKb4PYb8F5v/162d60178a75cde9f65be362eacc880a/Rifle-Shield.png'
  },
  notes
} satisfies Operator;
