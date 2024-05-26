import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import { NON_MAGNIFYING_SIGHTS_COMMON, BARRELS } from '../constants';
import iconSvg from '../../assets/operators/icons/svgs/caveira.svg';
import uniqueAbilitySvg from '../../assets/operators/abilities/svgs/silent_step.svg';
import notes from './notes.md?raw';

export const caveira = {
  slug: 'caveira',
  name: 'Caveira',
  side: 'defense',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/caveira.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4H1dOkcdZIKblKkAWjD390/10e57f4829eabda30f4aa1044e49893d/Y1S3_BADGE_Caveira_L.png',
  card: getOperatorAssetURL('/cards/caveira.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4RZ2Vwk7HozKMCtS5gFMp7/e1b930e3c80590a316939d9df0d88660/r6-operators-list-caveira.png',
  figure: getOperatorAssetURL('/figures/caveira.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3BfIIo48RsMmkntTXU54g5/93826b4340e2fda49d959054b15151c0/R6-operator-caveira.png',
  body: getOperatorAssetURL('/bodies/caveira.png'),
  ratings: { health: 1, speed: 3 },
  specialties: ['intel', 'crowd_control'],
  season: { id: 3 },
  weapons: {
    primary: [
      {
        slug: 'm12',
        sights: NON_MAGNIFYING_SIGHTS_COMMON,
        barrels: BARRELS,
        grips: null,
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
        slug: 'luison',
        sights: null,
        // NOTE: Forced suppressor
        barrels: null,
        grips: null,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: {
    secondary: ['impact_grenade', 'proximity_alarm', 'observation_blocker']
  },
  uniqueAbility: {
    slug: 'silent_step',
    name: 'Silent Step',
    type: 'infinite_recharge_bar',
    startingAmount: null,
    description:
      'Move around quietly to sneak up on opponents and down them, then interrogate them to reveal opponent positions.',
    info: 'Gauge that empties while in use and fills up when ability is inactive.',
    icon: {
      svg: parseSvgString(uniqueAbilitySvg),
      png: getOperatorAssetURL('/abilities/pngs/silent_step.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6PTsBBBGTT5oixxzvYv1Y4/18e31c74ba1ca73ed2694134acd9c078/Silent-Step.png'
  },
  notes
} satisfies Operator;
