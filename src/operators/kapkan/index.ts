import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import {
  NON_MAGNIFYING_SIGHTS_COMMON,
  BARRELS,
  BARRELS_PRECISION,
  GRIPS
} from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/kapkan.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/entry_denial_device.svg';
import notes from './notes.md?raw';

export const kapkan = {
  slug: 'kapkan',
  name: 'Kapkan',
  side: 'defense',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/kapkan.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/797q7C5YA89eFqw4RB40ka/f9435d1b4d13d41472e22d305c961cb9/Y0R6_BADGE_Kapkan_L.png',
  card: getOperatorAssetURL('/cards/kapkan.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7MofnDHeL1uwsenBVjxplQ/1e5af8fe9cf6f36516c7f6e5d56fcac0/r6-operators-list-kapkan.png',
  figure: getOperatorAssetURL('/figures/kapkan.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4DCZD6bED0srAvUDbciDgO/f7b915b1d07854638973fbc23aa0ad9b/R6-operator-kapkan.png',
  body: getOperatorAssetURL('/bodies/kapkan.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['anti-entry', 'trapper'],
  season: { id: 0 },
  weapons: {
    primary: [
      {
        slug: '9x19vsn',
        sights: NON_MAGNIFYING_SIGHTS_COMMON,
        barrels: BARRELS,
        grips: GRIPS,
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
        slug: 'pmm',
        sights: null,
        barrels: BARRELS_PRECISION,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'gsh-18',
        sights: null,
        barrels: BARRELS_PRECISION,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['bulletproof_camera', 'nitro_cell'] },
  uniqueAbility: {
    slug: 'entry_denial_device',
    name: 'Entry Denial Device',
    type: 'count',
    startingAmount: 5,
    description:
      'Explosive trap that\'s attached to doorframes and window frames.',
    info: null,
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/entry_denial_device.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/FLgwGbMiZTrWcK62KxPq8/d4e584420f85fa61c09e5e57e12d9dd9/Entry-Denial-Device.png'
  },
  notes
} satisfies Operator;
