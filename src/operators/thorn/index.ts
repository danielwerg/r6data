import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';
import {
  COMMON_BARRELS_ALL,
  COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
  COMMON_GRIPS,
  COMMON_SIGHTS_1X
} from '../constants';

export const thorn = {
  slug: 'thorn',
  name: 'Thorn',
  side: 'defense',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/thorn.svg'),
    png: getOperatorAssetURL('/icons/pngs/thorn.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1pzBJsbL1vQT8is7B0Xjxz/440335c080e54ca28eba24858361a03a/r6s-operators-badge-thorn.png',
  card: getOperatorAssetURL('/cards/thorn.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7LbjnSD3wKQXWhoxSXv3vu/238defac906026c3763e93041e3d96f9/r6s-operators-list-thorn.png',
  figure: getOperatorAssetURL('/figures/thorn.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3erk7Ub0asfBDZEKsdL8j9/5019698958b0834e806d01cd7bf36286/r6s-operator-thorn.png',
  body: getOperatorAssetURL('/bodies/thorn.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['anti-entry', 'trapper'],
  season: { id: 24 },
  weapons: {
    primary: [
      {
        slug: 'uzk50gi',
        sights: [...COMMON_SIGHTS_1X, 'scope_1.5x'],
        barrels: COMMON_BARRELS_ALL,
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'm870',
        sights: COMMON_SIGHTS_1X,
        barrels: null,
        grips: null,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: '1911_tacops',
        sights: null,
        barrels: COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'c75_auto',
        sights: null,
        barrels: ['suppressor'],
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['deployable_shield', 'barbed_wire'] },
  uniqueAbility: {
    slug: 'razorbloom_shell',
    name: 'Razorbloom Shell',
    type: 'count',
    startingAmount: 3,
    description:
      'Throwable device that sticks to surfaces and sends out a set of sharp blades when it detects nearby opponents.',
    info: null,
    icon: {
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/razorbloom_shell.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/38hUQdWTb1vgs0Yg8eQHFC/0d7f05420068a41392342a1b38c57c2e/r6s-operator-ability-thorn.png'
  }
} satisfies Operator;
