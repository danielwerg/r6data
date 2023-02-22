import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';

export const smoke = {
  slug: 'smoke',
  name: 'Smoke',
  side: 'defense',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/smoke.svg'),
    png: getOperatorAssetURL('/icons/pngs/smoke.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6mOMxoc3t27R9Gr9wFtt6T/f5f90a6be6a6710bee686ce69df29906/Y0R6_BADGE_Smoke_L.png',
  card: getOperatorAssetURL('/cards/smoke.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2Tm9rzdq6j9cpdW9qjnnrw/10d42d14755002e1056d1a940841482c/r6-operators-list-smoke.png',
  figure: getOperatorAssetURL('/figures/smoke.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5NUuXBKokP1KmAGR8Q7fqE/9628143388fc1c2f50162c1ccdf94942/R6-operator-smoke.png',
  body: getOperatorAssetURL('/bodies/smoke.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['anti-entry', 'trapper'],
  season: { id: 0 },
  weapons: {
    primary: ['m590a1', 'fmg-9'],
    secondary: ['p226_mk_25', 'smg-11']
  },
  gadgets: { secondary: ['deployable_shield', 'barbed_wire'] },
  uniqueAbility: {
    slug: 'remote_gas_grenade',
    name: 'Remote Gas Grenade',
    type: 'count',
    startingAmount: 3,
    description:
      'Throwable canister that sticks to surfaces and manually detonates to release a cloud of toxic gas.',
    info: null,
    icon: {
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/remote_gas_grenade.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3ZbADU6FxBqdvcA8vCpYhn/6c69d61202364fa420e2a319d817c6f3/Remote-Gas-Grenade.png'
  }
} satisfies Operator;
