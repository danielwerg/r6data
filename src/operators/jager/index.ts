import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import {
  NON_MAGNIFYING_SIGHTS_COMMON,
  BARRELS,
  BARRELS_PRECISION,
  GRIPS
} from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/jager.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/active_defense_system.svg';
import notes from './notes.md?raw';

export const jager = {
  slug: 'jager',
  name: 'Jäger',
  side: 'defense',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/jager.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1cCvTmKwnnovVmpZmDyPkA/b064f5ad6b9e7398d820d9ea90ff9366/Y0R6_BADGE_Jager_L.png',
  card: getOperatorAssetURL('/cards/jager.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4kMW2lcoewGifRWbvQVjKy/8f974b5d26db81dc823ea602e31d6273/r6-operators-list-jager.png',
  figure: getOperatorAssetURL('/figures/jager.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/18FXPSsVVIDvyKvMi4cmnO/bac05dd81df9a8f48336babdc5030cff/R6-operator-jager.png',
  body: getOperatorAssetURL('/bodies/jager.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['anti-gadget', 'support'],
  season: { id: 0 },
  weapons: {
    primary: [
      {
        slug: 'm870',
        sights: NON_MAGNIFYING_SIGHTS_COMMON,
        barrels: null,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: '416-c_carbine',
        sights: NON_MAGNIFYING_SIGHTS_COMMON,
        barrels: BARRELS,
        grips: GRIPS,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'p12',
        sights: null,
        barrels: BARRELS_PRECISION,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['bulletproof_camera', 'observation_blocker'] },
  uniqueAbility: {
    slug: 'active_defense_system',
    name: 'Active Defense System',
    type: 'count',
    startingAmount: 3,
    description:
      'Deployable device that intercepts and destroys projectiles before they detonate.',
    info: 'Each device holds 1 charge that recharges after use.',
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/active_defense_system.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1YCujceutAcJ7F10yhHC41/c5f870e7789b6396c9997ed45ccd3beb/Active-Defense-System.png'
  },
  notes
} satisfies Operator;
