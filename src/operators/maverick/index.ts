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
import iconSvg from '../../assets/operators/icons/svgs/maverick.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/breaching_torch.svg';
import notes from './notes.md?raw';

export const maverick = {
  slug: 'maverick',
  name: 'Maverick',
  side: 'attack',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/maverick.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3DXiYgVT71qGscYmFMgayj/d6c40a7dabdfecb92b637bec83003a58/Y3S3_BADGE_Maverick_L.png',
  card: getOperatorAssetURL('/cards/maverick.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1MmaEupq7KOe6it1trqIWP/3f4246349a36e28f4d9299f9368612c1/r6-operators-list-maverick.png',
  figure: getOperatorAssetURL('/figures/maverick.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5JkQYq5w8jibdznsDl2yvy/3ec75ea42f9a54238f569797a3e185a6/r6-operator-maverick.png',
  body: getOperatorAssetURL('/bodies/maverick.png'),
  ratings: { health: 1, speed: 3 },
  specialties: ['breach', 'front-line'],
  season: { id: 11 },
  weapons: {
    primary: [
      {
        slug: 'ar-15.50',
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
        slug: 'm4',
        sights: [...NON_MAGNIFYING_SIGHTS_COMMON, ...MAGNIFYING_SIGHTS],
        barrels: BARRELS,
        grips: GRIPS,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: '1911_tacops',
        sights: null,
        barrels: BARRELS_PRECISION,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['stun_grenade', 'claymore', 'smoke_grenade'] },
  uniqueAbility: {
    slug: 'breaching_torch',
    name: 'Breaching Torch',
    type: 'count',
    startingAmount: 6,
    description:
      'Blowtorch that quietly burns holes to create line of sight or entryways in breakable and reinforced surfaces.',
    info: 'Breaching Torch has a limited number of fuel tanks, each with a gauge that empties while in use.',
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/breaching_torch.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4rPBvxDKsKiQCMjt7GxJMw/09e45c68bbc41c1721acbbe0257e2465/Breaching-Torch.png'
  },
  notes
} satisfies Operator;
