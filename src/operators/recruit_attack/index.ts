import { parseSvgString } from '../../utils';
import { getOperatorAssetURL } from '../utils';
import type { Operator } from '../types';
import iconSvg from '../../assets/operators/icons/svgs/recruit_red.svg';
import notes from './notes.md?raw';

export const recruitAttack = {
  slug: 'recruit_attack',
  name: 'Recruit Attack',
  side: 'attack',
  icon: {
    svg: parseSvgString(iconSvg),
    png: getOperatorAssetURL('/icons/pngs/recruit_red.png')
  },
  iconOfficial: null,
  card: null,
  cardOfficial: null,
  figure: getOperatorAssetURL('/figures/recruit.png'),
  figureOfficial: null,
  body: getOperatorAssetURL('/bodies/recruit.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['support'],
  season: { id: 0 },
  weapons: {
    primary: [
      {
        slug: 'l85a2',
        sights: ['holo_a'],
        barrels: ['flash_hider'],
        grips: ['vertical_grip'],
        underBarrels: null
      },
      {
        slug: 'mk_14_ebr',
        sights: ['scope_3.0x'],
        barrels: ['muzzle_brake'],
        grips: ['vertical_grip'],
        underBarrels: null
      },
      {
        slug: 'm249',
        sights: ['reflex_a'],
        barrels: ['compensator'],
        grips: ['vertical_grip'],
        underBarrels: null
      }
    ],
    secondary: [
      {
        slug: 'p12',
        sights: null,
        barrels: ['suppressor'],
        grips: null,
        underBarrels: null
      },
      {
        slug: 'super_shorty',
        sights: null,
        barrels: null,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'c75_auto',
        sights: null,
        barrels: null,
        grips: null,
        underBarrels: null
      }
    ]
  },
  gadgets: {
    primary: [
      'frag_grenade',
      'smoke_grenade',
      'hard_breach_charge',
      'impact_emp_grenade'
    ],
    secondary: ['breach_charge', 'stun_grenade', 'claymore']
  },
  uniqueAbility: null,
  notes,
  isRecruit: true
} satisfies Operator;
