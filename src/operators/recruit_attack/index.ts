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
    primary: ['l85a2', 'mk_14_ebr', 'm249'],
    secondary: ['p12', 'super_shorty', 'c75_auto']
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
