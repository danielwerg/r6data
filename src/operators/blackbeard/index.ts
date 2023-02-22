import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';

export const blackbeard = {
  slug: 'blackbeard',
  name: 'Blackbeard',
  side: 'attack',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/blackbeard.svg'),
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
  weapons: { primary: ['mk17_cqb', 'sr-25'], secondary: ['d-50'] },
  gadgets: { secondary: ['claymore', 'stun_grenade', 'impact_emp_grenade'] },
  uniqueAbility: {
    slug: 'rifle_shield',
    name: 'Rifle Shield',
    type: 'count',
    startingAmount: 2,
    description:
      'Primary weapon shield attachment that provides frontal protection from headshots before breaking.',
    info: null,
    icon: {
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/rifle_shield.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2dZeBTlDDdFQKb4PYb8F5v/162d60178a75cde9f65be362eacc880a/Rifle-Shield.png'
  }
} satisfies Operator;
