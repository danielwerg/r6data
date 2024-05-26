import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import { BARRELS, GRIPS, NON_MAGNIFYING_SIGHTS_COMMON } from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/solis.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/spec-io_electro-sensor.svg';
import notes from './notes.md?raw';

export const solis = {
  slug: 'solis',
  name: 'Solis',
  side: 'defense',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/solis.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6YOBUP5JMskklFx9nDJQ49/d9d4b0968f581597feaa0ef4ec0891f3/r6s-operators-badge-solis.png',
  card: getOperatorAssetURL('/cards/solis.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2OV2K9FVqJdSNAogr0Wpod/62f2016a6c660714eb9a3c4a1f8196d4/r6s-operators-list-solis.png',
  figure: getOperatorAssetURL('/figures/solis.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1OfBCr46se4TbYO1ff5Ral/3f4e4e9ed19672f8e49e9b608c5b8f6b/r6s-operator-solis.png',
  body: getOperatorAssetURL('/bodies/solis.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['intel', 'support'],
  season: { id: 28 },
  weapons: {
    primary: [
      {
        slug: 'p90',
        sights: NON_MAGNIFYING_SIGHTS_COMMON,
        barrels: BARRELS,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'ita12l',
        sights: NON_MAGNIFYING_SIGHTS_COMMON,
        barrels: null,
        grips: null,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'smg-11',
        sights: NON_MAGNIFYING_SIGHTS_COMMON,
        barrels: BARRELS,
        grips: GRIPS,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['impact_grenade', 'bulletproof_camera'] },
  uniqueAbility: {
    slug: 'spec-io_electro-sensor',
    name: 'SPEC-IO Electro-Sensor',
    type: 'infinite_recharge_bar',
    startingAmount: null,
    description:
      'Device that identifies opponent electronic devices, then scans them to ping their locations.',
    info: 'Gauge that empties while in use and fills up when ability is inactive. Scan function drains the gauge completely.',
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/spec-io_electro-sensor.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6yJdnB2YJGY5lMh9mmKIQT/62bb946eb6bd2583b1c78255cab72ac9/r6s-operator-ability-solis.png'
  },
  notes
} satisfies Operator;
