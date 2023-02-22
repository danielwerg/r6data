import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';

export const iana = {
  slug: 'iana',
  name: 'Iana',
  side: 'attack',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/iana.svg'),
    png: getOperatorAssetURL('/icons/pngs/iana.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6deSi1vse5iJTkErFksrGq/75bf1038e9698b6b2be75aa0493b092d/Y5S1_BADGE_Iana_L.png',
  card: getOperatorAssetURL('/cards/iana.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6vES8lEllMwW9OaBYRT7YX/39b5fe90684d7ce637a7d025cdd1ec96/r6s-operator-list-iana.png',
  figure: getOperatorAssetURL('/figures/iana.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6Fiy7YExswMn1Cf13GUU9t/7bb697bf32c0d79c2852b354e3045fff/r6s-operator-iana.png',
  body: getOperatorAssetURL('/bodies/iana.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['front-line', 'intel'],
  season: { id: 17 },
  weapons: { primary: ['arx200', 'g36c'], secondary: ['mk1_9mm'] },
  gadgets: { secondary: ['frag_grenade', 'smoke_grenade'] },
  uniqueAbility: {
    slug: 'gemini_replicator',
    name: 'Gemini Replicator',
    type: 'infinite_recharge_bar',
    startingAmount: null,
    description:
      'Deploys a remote-controlled hologram of lana to deceive opponents and gather intel.',
    info: 'Gauge that empties while in use and has a cooldown time before reactivating.',
    icon: {
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/gemini_replicator.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/K8E4EHWbD8wTjVqro6wVl/62339b2fbe1d3a2319dcd320f7a0b070/r6s-operator-ability-iana.png'
  }
} satisfies Operator;
