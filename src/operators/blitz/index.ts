import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';

export const blitz = {
  slug: 'blitz',
  name: 'Blitz',
  side: 'attack',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/blitz.svg'),
    png: getOperatorAssetURL('/icons/pngs/blitz.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2YTGfm1Df9PtldLcGodcTV/9a235b550cdf5066d686cef750eba090/Y0R6_BADGE_Blitz_L.png',
  card: getOperatorAssetURL('/cards/blitz.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4NZvCtXwtcCq1s65H7mK5y/8d70872df8319e1d162a31bbf404ed2c/r6-operators-list-blitz.png',
  figure: getOperatorAssetURL('/figures/blitz.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/MlN3NUzTAYwPkFughKR23/19b3155bf7d69c7415cafa36f52f67e7/R6-operator-blitz.png',
  body: getOperatorAssetURL('/bodies/blitz.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['front-line', 'map_control'],
  season: { id: 0 },
  weapons: { primary: ['g52-tactical_shield'], secondary: ['p12'] },
  gadgets: { secondary: ['smoke_grenade', 'breach_charge'] },
  uniqueAbility: {
    slug: 'flash_shield',
    name: 'Flash Shield',
    type: 'count',
    startingAmount: null,
    description:
      'Ballistic shield with a flash attachment that can be activated to temporarily blind Operators.',
    info: 'The shield holds 4 flash charges that have a cooldown time between uses.',
    icon: {
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/flash_shield.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7EXDIOjPFMhPKZWY5OcEQC/f2df48ebe5673dca7773d81efd940b66/Flash-Shield.png'
  }
} satisfies Operator;
