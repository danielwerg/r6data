import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';

export const recruitAttack = {
  slug: 'recruit_attack',
  name: 'Recruit Attack',
  side: 'attack',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/recruit_red.svg'),
    png: getOperatorAssetURL('/icons/pngs/recruit_red.png')
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
  isRecruit: true
} satisfies Operator;
