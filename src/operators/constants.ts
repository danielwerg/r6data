import type { BarrelSlug, GripSlug, SightSlug } from '../types';

export const NON_MAGNIFYING_SIGHTS = [
  'holo_a',
  'holo_b',
  'holo_c',
  'holo_d',
  'red_dot_a',
  'red_dot_b',
  'red_dot_c',
  'reflex_a',
  'reflex_b',
  'reflex_c',
  'reflex_d',
  'non-magnifying_.44_vendetta'
] satisfies SightSlug[];

export const NON_MAGNIFYING_SIGHTS_COMMON = [
  'holo_a',
  'holo_b',
  'holo_c',
  'holo_d',
  'red_dot_a',
  'red_dot_b',
  'red_dot_c',
  'reflex_a',
  'reflex_b',
  'reflex_c'
] satisfies SightSlug[];

export const MAGNIFYING_SIGHTS = [
  'magnified_a',
  'magnified_b',
  'magnified_c'
] satisfies SightSlug[];

export const TELESCOPIC_SIGHTS = [
  'telescopic_a',
  'telescopic_b',
  'telescopic_.44_mag_semi-auto',
  'telescopic_ots-03',
  'telescopic_csrx_300_a',
  'telescopic_csrx_300_b'
] satisfies SightSlug[];

export const TELESCOPIC_SIGHTS_COMMON = [
  'telescopic_a',
  'telescopic_b'
] satisfies SightSlug[];

export const BARRELS = [
  'flash_hider',
  'compensator',
  'muzzle_brake',
  'suppressor',
  'extended_barrel'
] satisfies BarrelSlug[];

export const BARRELS_NO_EXTENDED_BARREL = [
  'flash_hider',
  'compensator',
  'muzzle_brake',
  'suppressor'
] satisfies BarrelSlug[];

export const BARRELS_PRECISION = [
  'muzzle_brake',
  'suppressor'
] satisfies BarrelSlug[];

export const GRIPS = [
  'vertical_grip',
  'angled_grip',
  'horizontal_grip'
] satisfies GripSlug[];
