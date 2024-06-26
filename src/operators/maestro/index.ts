import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import {
  NON_MAGNIFYING_SIGHTS_COMMON,
  BARRELS_PRECISION,
  GRIPS,
  BARRELS_NO_EXTENDED_BARREL,
  MAGNIFYING_SIGHTS
} from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/maestro.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/evil_eye.svg';
import notes from './notes.md?raw';

export const maestro = {
  slug: 'maestro',
  name: 'Maestro',
  side: 'defense',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/maestro.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/XK43imgD0tc0xrk0tgTCQ/0402cc95cbd525debafa1aab0fdd8385/Y3S2_BADGE_Maestro_L.png',
  card: getOperatorAssetURL('/cards/maestro.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6QNXf9qRkqzOdsprj2SWgI/0c4cc3b9423cada4fed0ba5ae2c9c722/r6-operators-list-maestro.png',
  figure: getOperatorAssetURL('/figures/maestro.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5DSFt6OEgGRcIOjC8YmdEV/e858ba7e2b695d4d792b84f2fcd95c3a/R6-operator-maestro.png',
  body: getOperatorAssetURL('/bodies/maestro.png'),
  ratings: { health: 3, speed: 1 },
  specialties: ['anti-gadget', 'intel'],
  season: { id: 10 },
  weapons: {
    primary: [
      {
        slug: 'alda_5.56',
        sights: NON_MAGNIFYING_SIGHTS_COMMON,
        barrels: BARRELS_NO_EXTENDED_BARREL,
        grips: ['vertical_grip'],
        underBarrels: ['laser']
      },
      {
        slug: 'acs12',
        sights: [...NON_MAGNIFYING_SIGHTS_COMMON, ...MAGNIFYING_SIGHTS],
        barrels: null,
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
        slug: 'keratos_.357',
        sights: null,
        barrels: BARRELS_PRECISION,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: {
    secondary: ['barbed_wire', 'impact_grenade', 'observation_blocker']
  },
  uniqueAbility: {
    slug: 'evil_eye',
    name: 'Evil Eye',
    type: 'count',
    startingAmount: 3,
    description:
      'Bulletproof camera with a turret that manually fires lasers to injure opponents or destroy devices.',
    info: 'Each Evil Eye has unlimited ammo but temporarily overheats when firing the turret for too long.',
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/evil_eye.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/n2rfPidCv630jQEfnEWwb/42d454d0771218eb8f27f6d17d8a073e/Evil-Eye.png'
  },
  notes
} satisfies Operator;
