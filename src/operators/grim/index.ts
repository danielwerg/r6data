import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';

export const grim = {
  slug: 'grim',
  name: 'Grim',
  side: 'attack',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/grim.svg'),
    png: getOperatorAssetURL('/icons/pngs/grim.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5VoAYPvRZXIwjcwTD3PWaZ/b9748f007c0c116ca1bcd77b0f91e766/r6s-operators-badge-grim.png',
  card: getOperatorAssetURL('/cards/grim.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7fwxcTrdNLQbXkfBJglLaN/38d901042d7debc709c266a46f856d7e/r6s-operators-list-grim.png',
  figure: getOperatorAssetURL('/figures/grim.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2Mh6QhvaGrU16dvqAlDq6M/65d751edc5d985badc95db15b0784f54/r6s-operator-grim.png',
  body: getOperatorAssetURL('/bodies/grim.png'),
  ratings: { health: 1, speed: 3 },
  specialties: ['front-line', 'map_control'],
  season: { id: 27 },
  weapons: { primary: ['552_commando', 'sg-cqb'], secondary: ['p229'] },
  gadgets: { secondary: ['breach_charge', 'claymore'] },
  uniqueAbility: {
    slug: 'kawan_hive_launcher',
    name: 'Kawan Hive Launcher',
    type: 'count',
    startingAmount: 5,
    description:
      'Launcher that fires a canister, releasing a swarm of bots that reveals opponents passing through it for a limited time.',
    info: 'Each Kawan Hive drops a canister that releases a swarm of bots.',
    icon: {
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/kawan_hive_launcher.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2Ws6ae13XPN5rcsw0WVt3d/d338fc7e22de9c2f620137d85ac4e29b/r6s-operator-ability-grim.png'
  }
} satisfies Operator;
