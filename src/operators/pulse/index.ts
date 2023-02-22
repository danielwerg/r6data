import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';

export const pulse = {
  slug: 'pulse',
  name: 'Pulse',
  side: 'defense',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/pulse.svg'),
    png: getOperatorAssetURL('/icons/pngs/pulse.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/ChAeJzdmwxuvhZTrV81rK/8c16116f4c719a3df864df6639e2f52e/Y0R6_BADGE_Pulse_L.png',
  card: getOperatorAssetURL('/cards/pulse.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1YQb5phSD3uYbWrqhCBJRU/06e5f689777224bf8ca6c7c5cad9db9d/r6-operators-list-pulse.png ',
  figure: getOperatorAssetURL('/figures/pulse.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3eOrdhZhYBqcFJdD0ygcGI/ba8ce2069fd409480fc74b8a5dbf8afd/R6-operator-pulse.png',
  body: getOperatorAssetURL('/bodies/pulse.png'),
  ratings: { health: 1, speed: 3 },
  specialties: ['intel', 'support'],
  season: { id: 0 },
  weapons: {
    primary: ['ump45', 'm1014'],
    secondary: ['5.7_usg', 'm45_meusoc']
  },
  gadgets: { secondary: ['barbed_wire', 'nitro_cell'] },
  uniqueAbility: {
    slug: 'heartbeat_sensor',
    name: 'Heartbeat Sensor',
    type: 'none',
    startingAmount: null,
    description:
      'Detects the heartbeats of nearby opponents through objects and surfaces.',
    info: null,
    icon: {
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/heartbeat_sensor.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7dPXIadD3D2a3uEqrCPvj2/103ad9d0d3b71adee3b92a5db96fe24d/Heartbeat-Sensor.png'
  }
} satisfies Operator;
