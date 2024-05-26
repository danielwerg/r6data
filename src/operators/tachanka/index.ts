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
import iconSvg from '../../assets/operators/icons/svgs/tachanka.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/shumikha_launcher.svg';
import notes from './notes.md?raw';

export const tachanka = {
  slug: 'tachanka',
  name: 'Tachanka',
  side: 'defense',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/tachanka.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7hpI2mcmvyjC2vG6ieltLo/f217b1dc449c0514b55e471193a38c91/Y0R6_BADGE_Tachanka_L.png',
  card: getOperatorAssetURL('/cards/tachanka.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5P9kGyOrnsu7lRyr9xC71t/53981da03fa36adf99adf61bc098bd4a/r6s-operators-list-tachanka.png',
  figure: getOperatorAssetURL('/figures/tachanka.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3anG5CUIzp0MWB9T6tIpy9/bd81ae97ecd984afe84813384eb027d8/r6s-operator-tachanka.png',
  body: getOperatorAssetURL('/bodies/tachanka.png'),
  ratings: { health: 3, speed: 1 },
  specialties: ['anti-entry', 'crowd_control'],
  season: { id: 0 },
  weapons: {
    primary: [
      {
        slug: 'dp27',
        sights: [...NON_MAGNIFYING_SIGHTS_COMMON, 'reflex_d'],
        barrels: null,
        grips: null,
        underBarrels: null
      },
      {
        slug: '9x19vsn',
        sights: [...NON_MAGNIFYING_SIGHTS_COMMON, ...MAGNIFYING_SIGHTS],
        barrels: BARRELS,
        grips: GRIPS,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'gsh-18',
        sights: null,
        barrels: BARRELS_PRECISION,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'pmm',
        sights: null,
        barrels: BARRELS_PRECISION,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'bearing_9',
        sights: NON_MAGNIFYING_SIGHTS_COMMON,
        barrels: BARRELS,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: {
    secondary: ['barbed_wire', 'deployable_shield', 'proximity_alarm']
  },
  uniqueAbility: {
    slug: 'shumikha_launcher',
    name: 'Shumikha Launcher',
    type: 'count',
    startingAmount: 20,
    description:
      'Launches incendiary grenades that create a fire on detonation.',
    info: 'Magazine size: 5',
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/shumikha_launcher.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/37wX75QnY7XA6KbjM4aF5n/0ab116d398cf71463e11d43913818ec1/Shumikha-Launcher.png'
  },
  notes
} satisfies Operator;
