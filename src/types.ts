export type NonNullableInterface<T> = { [P in keyof T]-?: NonNullable<T[P]> };

export type SvgAttributes = Record<string, string>;
export interface Svg {
  /** SVG contents without HTML tags. */
  contents: string;
  /** SVG attributes as an object. */
  attributes: SvgAttributes;
}

export interface SVGandPNG {
  svg: Svg | null;
  png: string | null;
}
export type NonNullableSVGandPNG = NonNullableInterface<SVGandPNG>;

export interface Season {
  id: number;
  shorthand: SeasonShorthand;
  slug: SeasonSlug;
  name: string;
  hexColorCode: `#${string}`;
  description: string | null;
  thumbnail: string | null;
  thumbnailOfficial: string | null;
  releaseDate: string;
}

export type SeasonShorthand =
  | 'Y0S0'
  | `Y${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}S${1 | 2 | 3 | 4}`;

export type SeasonSlug =
  | 'release'
  | 'black_ice'
  | 'dust_line'
  | 'skull_rain'
  | 'red_crow'
  | 'velvet_shell'
  | 'health'
  | 'blood_orchid'
  | 'white_noise'
  | 'chimera'
  | 'para_bellum'
  | 'grim_sky'
  | 'wind_bastion'
  | 'burnt_horizon'
  | 'phantom_sight'
  | 'ember_rise'
  | 'shifting_tides'
  | 'void_edge'
  | 'steel_wave'
  | 'shadow_legacy'
  | 'neon_dawn'
  | 'crimson_heist'
  | 'north_star'
  | 'crystal_guard'
  | 'high_calibre'
  | 'demon_veil'
  | 'vector_glare'
  | 'brutal_swarm'
  | 'solar_raid'
  | 'commanding_force'
  | 'dread_factor';

export type GadgetSlugDefense =
  | 'deployable_shield'
  | 'nitro_cell'
  | 'impact_grenade'
  | 'barbed_wire'
  | 'bulletproof_camera'
  | 'proximity_alarm'
  | 'observation_blocker';

export type GadgetSlugAttack =
  | 'frag_grenade'
  | 'smoke_grenade'
  | 'stun_grenade'
  | 'claymore'
  | 'hard_breach_charge'
  | 'breach_charge'
  | 'impact_emp_grenade';

export type GadgetSlug = GadgetSlugDefense | GadgetSlugAttack;

export type WeaponSlug =
  | 'l85a2'
  | 'ar33'
  | 'g36c'
  | 'r4-c'
  | '556xi'
  | 'f2'
  | 'ak-12'
  | 'aug_a2'
  | '552_commando'
  | '416-c_carbine'
  | 'c8-sfw'
  | 'mk17_cqb'
  | 'para-308'
  | 'type-89'
  | 'c7e'
  | 'm762'
  | 'v308'
  | 'spear_.308'
  | 'm4'
  | 'ak-74m'
  | 'arx200'
  | 'f90'
  | 'commando_9'
  | 'sc3000k'
  | 'pof-9'
  | 'fmg-9'
  | 'mp5k'
  | 'ump45'
  | 'mp5'
  | 'p90'
  | '9x19vsn'
  | 'mp7'
  | '9mm_c1'
  | 'mpx'
  | 'm12'
  | 'mp5sd'
  | 'vector_.45_acp'
  | 'pdw9'
  | 't-5_smg'
  | 'scorpion_evo_3_a1'
  | 'k1a'
  | 'mx4_storm'
  | 'aug_a3'
  | 'p10_roni'
  | 'uzk50gi'
  | '6p41'
  | 'g8a1'
  | 'm249'
  | 't-95_lsw'
  | 'lmg-e'
  | 'alda_5.56'
  | 'm249_saw'
  | 'dp27'
  | '417'
  | 'ots-03'
  | 'camrs'
  | 'sr-25'
  | 'mk_14_ebr'
  | 'ar-15.50'
  | 'csrx_300'
  | 'p226_mk_25'
  | 'm45_meusoc'
  | '5.7_usg'
  | 'p9'
  | 'lfp586'
  | 'gsh-18'
  | 'pmm'
  | 'p12'
  | 'mk1_9mm'
  | 'd-50'
  | 'luison'
  | 'prb92'
  | 'p229'
  | 'usp40'
  | 'q-929'
  | 'rg15'
  | 'bailiff_410'
  | 'keratos_.357'
  | '1911_tacops'
  | 'p-10c'
  | '.44_mag_semi-auto'
  | 'sdp_9mm'
  | 'm590a1'
  | 'm1014'
  | 'sg-cqb'
  | 'sasg-12'
  | 'm870'
  | 'super_90'
  | 'spas-12'
  | 'spas-15'
  | 'supernova'
  | 'ita12l'
  | 'ita12s'
  | 'six12'
  | 'six12_sd'
  | 'fo-12'
  | 'bosg.12.2'
  | 'acs12'
  | 'tcsg12'
  | 'super_shorty'
  | 'smg-11'
  | 'bearing_9'
  | 'c75_auto'
  | 'smg-12'
  | 'spsmg9'
  | 'le_roc_shield'
  | 'ballistic_shield'
  | 'g52-tactical_shield'
  | 'cce_shield'
  | 'gonne-6';

export type WeaponCategory =
  | 'assault_rifle'
  | 'smg'
  | 'lmg'
  | 'marksman'
  | 'handgun'
  | 'shotgun'
  | 'mp'
  | 'shield'
  | 'launcher';

export type SideSlug = 'defense' | 'attack';

export type SightSlug =
  | 'red_dot_a'
  | 'red_dot_b'
  | 'red_dot_c'
  | 'red_dot_handgun'
  | 'holo_a'
  | 'holo_b'
  | 'holo_c'
  | 'holo_d'
  | 'reflex_a'
  | 'reflex_b'
  | 'reflex_c'
  | 'reflex_d'
  | 'scope_1.5x'
  | 'scope_2.0x'
  | 'scope_2.5x_a'
  | 'scope_2.5x_b'
  | 'scope_3.0x_.44_mag'
  | 'scope_3.0x'
  | 'scope_4.0x'
  | 'scope_5.0x'
  | 'scope_12.0x';

export type BarrelSlug =
  | 'flash_hider'
  | 'compensator'
  | 'muzzle_brake'
  | 'suppressor'
  | 'extended_barrel';

export type GripSlug = 'vertical_grip' | 'angled_grip';

export type UnderBarrelSlug = 'laser';
