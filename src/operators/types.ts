import type {
  GadgetSlug,
  NonNullableSVGandPNG,
  OperatorSide,
  SVGandPNG,
  WeaponSlug
} from '../types';

export interface Operator {
  slug: OperatorSlug;
  name: string;
  side: OperatorSide;
  icon: NonNullableSVGandPNG;
  /** always `null` for recruits */
  iconOfficial: string | null;
  /** always `null` for recruits */
  card: string | null;
  /** always `null` for recruits */
  cardOfficial: string | null;
  /** always `null` for recruits */
  figure: string | null;
  /** always `null` for recruits */
  figureOfficial: string | null;
  body: string | null;
  ratings: OperatorRatings;
  specialties: OperatorSpecialty[];
  season: OperatorSeason;
  weapons: OperatorWeapons;
  gadgets: OperatorGadgets;
  /** always `null` for recruits */
  uniqueAbility: OperatorUniqueAbility | null;
  isRecruit?: boolean;
}

export type OperatorSlug =
  | 'recruit_defense'
  | 'recruit_attack'
  | 'smoke'
  | 'mute'
  | 'sledge'
  | 'thatcher'
  | 'castle'
  | 'pulse'
  | 'ash'
  | 'thermite'
  | 'doc'
  | 'rook'
  | 'twitch'
  | 'montagne'
  | 'kapkan'
  | 'tachanka'
  | 'glaz'
  | 'fuze'
  | 'jager'
  | 'bandit'
  | 'blitz'
  | 'iq'
  | 'frost'
  | 'buck'
  | 'valkyrie'
  | 'blackbeard'
  | 'caveira'
  | 'capitao'
  | 'echo'
  | 'hibana'
  | 'mira'
  | 'jackal'
  | 'lesion'
  | 'ying'
  | 'ela'
  | 'zofia'
  | 'vigil'
  | 'dokkaebi'
  | 'lion'
  | 'finka'
  | 'maestro'
  | 'alibi'
  | 'clash'
  | 'maverick'
  | 'kaid'
  | 'nomad'
  | 'mozzie'
  | 'gridlock'
  | 'warden'
  | 'nokk'
  | 'goyo'
  | 'amaru'
  | 'wamai'
  | 'kali'
  | 'oryx'
  | 'iana'
  | 'melusi'
  | 'ace'
  | 'zero'
  | 'aruni'
  | 'flores'
  | 'thunderbird'
  | 'osa'
  | 'thorn'
  | 'azami'
  | 'sens'
  | 'grim'
  | 'solis'
  | 'brava';

export interface OperatorRatings {
  health: OperatorRatingsRating;
  speed: OperatorRatingsRating;
}
export type OperatorRatingsRating = 1 | 2 | 3;

export type OperatorSpecialty =
  | 'anti-entry'
  | 'anti-gadget'
  | 'breach'
  | 'crowd_control'
  | 'front-line'
  | 'intel'
  | 'map_control'
  | 'support'
  | 'trapper';

export interface OperatorSeason {
  id: number;
}

export interface OperatorWeapons {
  primary: WeaponSlug[];
  secondary: WeaponSlug[];
}

export interface OperatorGadgets {
  /** `undefined` unless recruits */
  primary?: GadgetSlug[];
  secondary: GadgetSlug[];
}

export interface OperatorUniqueAbility {
  slug: string;
  name: string;
  type: OperatorUniqueAbilityType;
  startingAmount: number | null;
  description: string;
  info: string | null;
  icon: SVGandPNG;
  iconOfficial: string | null;
}
export type OperatorUniqueAbilityType =
  | 'none'
  | 'count'
  | 'recharge_count'
  | 'infinite_recharge_count'
  | 'infinite_recharge_bar'
  | 'switch';
