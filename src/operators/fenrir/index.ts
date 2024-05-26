import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import {
  NON_MAGNIFYING_SIGHTS_COMMON,
  GRIPS,
  BARRELS,
  BARRELS_PRECISION
} from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/fenrir.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/f-natt_dread_mine.svg';
import notes from './notes.md?raw';

export const fenrir = {
  slug: 'fenrir',
  name: 'Fenrir',
  side: 'defense',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/fenrir.png')
  },
  iconOfficial:
    'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4vtvBhY56S2slW3y0eKsMp/6a0f41807549ad1aa503112d4ad05a52/r6s-operators-badge-fenrir.png',
  card: getOperatorAssetURL('/cards/fenrir.png'),
  cardOfficial:
    'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/336St2UBdDDhJnI1Nbcqo9/845b0822369af2bb64e2ff7f2e7292f9/r6s-operators-list-fenrir.png',
  figure: getOperatorAssetURL('/figures/fenrir.png'),
  figureOfficial:
    'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1rWrOkHjxowW37i5UJKcqt/a60e59c16a9b8a9583b9578853a6b15b/r6s-operator-fenrir.png',
  body: getOperatorAssetURL('/bodies/fenrir.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['crowd_control', 'trapper'],
  season: { id: 30 },
  weapons: {
    primary: [
      {
        slug: 'mp7',
        sights: NON_MAGNIFYING_SIGHTS_COMMON,
        barrels: BARRELS,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'sasg-12',
        sights: NON_MAGNIFYING_SIGHTS_COMMON,
        barrels: ['suppressor'],
        grips: GRIPS,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'bailiff_410',
        // NOTE: Forced red_dot_handgun
        sights: null,
        barrels: null,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: '5.7_usg',
        sights: null,
        barrels: BARRELS_PRECISION,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['bulletproof_camera', 'barbed_wire'] },
  uniqueAbility: {
    slug: 'f-natt_dread_mine',
    name: 'F-Natt Dread Mine',
    type: 'count',
    startingAmount: 5,
    description:
      'Throwable device that sticks to surfaces and releases a fear-inducing gas when it detects nearby opponents.',
    info: null,
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/f-natt_dread_mine.png')
    },
    iconOfficial:
      'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5JTPi6uZt58wD0GVQJJf2c/6a0e730e2e6a4a1d1d3c878593df07f3/r6s-operator-ability-fenrir.png'
  },
  notes
} satisfies Operator;
