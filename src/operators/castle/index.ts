import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import {
  NON_MAGNIFYING_SIGHTS_COMMON,
  BARRELS,
  BARRELS_PRECISION,
  GRIPS,
  MAGNIFYING_SIGHTS
} from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/castle.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/armor_panel.svg';
import notes from './notes.md?raw';

export const castle = {
  slug: 'castle',
  name: 'Castle',
  side: 'defense',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/castle.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/kzznLctjOsXJZAg0F2HPB/dea28fa008515d6ddaa0d2659f4dc253/Y0R6_BADGE_Castle_L.png',
  card: getOperatorAssetURL('/cards/castle.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1ETv9XcrmgbAdYWDJ2ZIh0/3f5ad7d030ee411c041c524880176603/r6-operators-list-castle.png',
  figure: getOperatorAssetURL('/figures/castle.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/569euf91mHD0ZceUnO5tVl/d2c58485cf44e51c130373fe8007f4d0/R6-operator-castle.png',
  body: getOperatorAssetURL('/bodies/castle.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['anti-entry', 'support'],
  season: { id: 0 },
  weapons: {
    primary: [
      {
        slug: 'ump45',
        sights: [...NON_MAGNIFYING_SIGHTS_COMMON, ...MAGNIFYING_SIGHTS],
        barrels: BARRELS,
        grips: GRIPS,
        underBarrels: ['laser']
      },
      {
        slug: 'm1014',
        sights: NON_MAGNIFYING_SIGHTS_COMMON,
        barrels: null,
        grips: null,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: '5.7_usg',
        sights: null,
        barrels: BARRELS_PRECISION,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'super_shorty',
        sights: NON_MAGNIFYING_SIGHTS_COMMON,
        barrels: null,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'm45_meusoc',
        sights: null,
        barrels: BARRELS_PRECISION,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['bulletproof_camera', 'proximity_alarm'] },
  uniqueAbility: {
    slug: 'armor_panel',
    name: 'Armor Panel',
    type: 'count',
    startingAmount: 4,
    description:
      'Bulletproof barricades that are deployed on windows and doors to deny entry to opponents.',
    info: null,
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/armor_panel.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/29N9nMqB8ZZxGCPz128ccD/439cb1fcb2f6d5385378cf073a5fbc30/Armor-Panel.png'
  },
  notes
} satisfies Operator;
