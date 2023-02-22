import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';

export const melusi = {
  slug: 'melusi',
  name: 'Melusi',
  side: 'defense',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/melusi.svg'),
    png: getOperatorAssetURL('/icons/pngs/melusi.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/74H52a9GMql8wamIy6WqH5/9fddba49258152835da7cdac8c566663/Y5S2_BADGE_Melusi_L.png',
  card: getOperatorAssetURL('/cards/melusi.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1yoVAGw5rEQ8zPPHoQSDJb/b16a570fadb3342416c5c44847cc651a/r6s-operator-list-melusi.png',
  figure: getOperatorAssetURL('/figures/melusi.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7xlDG41BwglAg68IGGhvf3/73cd220cd35d5e58dc30f0f3f551b923/r6s-operator-melusi.png',
  body: getOperatorAssetURL('/bodies/melusi.png'),
  ratings: { health: 3, speed: 1 },
  specialties: ['intel', 'crowd_control'],
  season: { id: 18 },
  weapons: { primary: ['mp5', 'super_90'], secondary: ['rg15'] },
  gadgets: { secondary: ['bulletproof_camera', 'impact_grenade'] },
  uniqueAbility: {
    slug: 'banshee_sonic_defense',
    name: 'Banshee Sonic Defense',
    type: 'count',
    startingAmount: 3,
    description:
      'Bulletproof device that activates when opponents are near and uses sound to slow them.',
    info: null,
    icon: {
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/banshee_sonic_defense.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/49ixqWhGgjvHu0Ay8JzeSH/c6a3fe584847850186e15c7fb4244385/r6s-operator-ability-melusi.png'
  }
} satisfies Operator;
