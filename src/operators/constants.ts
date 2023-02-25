import type { BarrelSlug, GripSlug, SightSlug } from '../attachments';

export const COMMON_SIGHTS_1X = [
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

export const COMMON_BARRELS = [
  'flash_hider',
  'compensator',
  'muzzle_brake',
  'suppressor',
  'extended_barrel'
] satisfies BarrelSlug[];

export const COMMON_BARRELS_HANDGUN_OR_MARKSMAN = [
  'muzzle_brake',
  'suppressor'
] satisfies BarrelSlug[];

export const COMMON_BARRELS_NO_EXTENDED_BARREL = [
  'flash_hider',
  'compensator',
  'muzzle_brake',
  'suppressor'
] satisfies BarrelSlug[];

export const COMMON_GRIPS = [
  'vertical_grip',
  'angled_grip'
] satisfies GripSlug[];
