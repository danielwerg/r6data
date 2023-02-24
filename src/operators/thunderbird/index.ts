import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';
import {
  COMMON_BARRELS,
  COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
  COMMON_GRIPS,
  COMMON_SIGHTS_1X
} from '../constants';

export const thunderbird = {
  slug: 'thunderbird',
  name: 'Thunderbird',
  side: 'defense',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/thunderbird.svg'),
    png: getOperatorAssetURL('/icons/pngs/thunderbird.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/YQfDJ42B2IKcKnb0lRaXq/0cedb53c439b0fe448be95713a836b29/r6s-operators-badge-thunderbird.png',
  card: getOperatorAssetURL('/cards/thunderbird.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3gadEIZqtSfsHstfPMe3bz/424c7e4c21276e99f41a8c75478aa5e5/r6s-operators-list-thunderbird.png',
  figure: getOperatorAssetURL('/figures/thunderbird.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2braENz5x4Ko9UZ03LsBfY/7fd1647e138fa8db8f2fac2be2867693/r6s-operator-thunderbird.png',
  body: getOperatorAssetURL('/bodies/thunderbird.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['support'],
  season: { id: 22 },
  weapons: {
    primary: [
      {
        slug: 'spear_.308',
        sights: COMMON_SIGHTS_1X,
        barrels: COMMON_BARRELS,
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'spas-15',
        sights: COMMON_SIGHTS_1X,
        barrels: null,
        grips: null,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'bearing_9',
        sights: COMMON_SIGHTS_1X,
        barrels: COMMON_BARRELS,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'q-929',
        sights: null,
        barrels: COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['impact_grenade', 'nitro_cell'] },
  uniqueAbility: {
    slug: 'kona_station',
    name: 'KÓNA Station',
    type: 'count',
    startingAmount: 3,
    description:
      'Device that automatically heals or revives any injured Operators in range, including opponents.',
    info: 'Each K6na Station has 1 heal that recharges after use.',
    icon: {
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/kona_station.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/67J9QnmuA4TMI3rBxoA3Jz/4ec42d8c1bb61dadc5f36893f93142e8/r6s-operator-ability-thunderbird.png'
  }
} satisfies Operator;
