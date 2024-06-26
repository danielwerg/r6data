import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import {
  BARRELS,
  BARRELS_PRECISION,
  GRIPS,
  NON_MAGNIFYING_SIGHTS_COMMON
} from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/thunderbird.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/kona_station.svg';
import notes from './notes.md?raw';

export const thunderbird = {
  slug: 'thunderbird',
  name: 'Thunderbird',
  side: 'defense',
  icon: {
    svg: parseSvgString(iconSvg),
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
        sights: NON_MAGNIFYING_SIGHTS_COMMON,
        barrels: BARRELS,
        grips: GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'spas-15',
        sights: NON_MAGNIFYING_SIGHTS_COMMON,
        barrels: null,
        grips: null,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'bearing_9',
        sights: NON_MAGNIFYING_SIGHTS_COMMON,
        barrels: BARRELS,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'q-929',
        sights: null,
        barrels: BARRELS_PRECISION,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: {
    secondary: ['barbed_wire', 'bulletproof_camera', 'deployable_shield']
  },
  uniqueAbility: {
    slug: 'kona_station',
    name: 'KÓNA Station',
    type: 'count',
    startingAmount: 3,
    description:
      'Device that automatically heals or revives any injured Operators in range, including opponents.',
    info: 'Each K6na Station has 1 heal that recharges after use.',
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/kona_station.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/67J9QnmuA4TMI3rBxoA3Jz/4ec42d8c1bb61dadc5f36893f93142e8/r6s-operator-ability-thunderbird.png'
  },
  notes
} satisfies Operator;
