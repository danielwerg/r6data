import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import iconSvg from '../../assets/operators/icons/svgs/recruit_blue.svg';
import notes from './notes.md?raw';

export const recruitDefense = {
  slug: 'recruit_defense',
  name: 'Recruit Defense',
  side: 'defense',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/recruit_blue.png')
  },
  iconOfficial: null,
  card: null,
  cardOfficial: null,
  figure: null,
  figureOfficial: null,
  body: getOperatorAssetURL('/bodies/recruit.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['support'],
  season: { id: 0 },
  weapons: {
    primary: [
      {
        slug: 'mp5k',
        sights: ['holo_a'],
        barrels: ['flash_hider'],
        grips: null,
        underBarrels: null
      },
      {
        slug: 'm870',
        sights: ['reflex_a'],
        barrels: null,
        grips: null,
        underBarrels: null
      }
    ],
    secondary: [
      {
        slug: 'p9',
        sights: null,
        barrels: ['muzzle_brake'],
        grips: null,
        underBarrels: null
      },
      {
        slug: 'smg-11',
        sights: ['red_dot_a'],
        barrels: ['compensator'],
        grips: ['vertical_grip'],
        underBarrels: null
      }
    ]
  },
  gadgets: {
    primary: ['nitro_cell', 'impact_grenade', 'proximity_alarm'],
    secondary: ['bulletproof_camera', 'barbed_wire', 'deployable_shield']
  },
  uniqueAbility: null,
  notes,
  isRecruit: true
} satisfies Operator;
