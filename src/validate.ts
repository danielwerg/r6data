import type {
  BarrelSlug,
  GadgetSlug,
  GripSlug,
  SeasonSlug,
  SightSlug,
  UnderBarrelSlug,
  WeaponSlug
} from './types';
import {
  ATTACHMENTS,
  type AttachmentSlug,
  BARRELS,
  GRIPS,
  type OpticColorSlug,
  OPTIC_COLORS,
  SIGHTS,
  UNDER_BARRELS
} from './attachments';
import { GADGETS } from './gadgets';
import { type MapSlug, MINI_MAPS } from './maps';
import { OPERATORS, type OperatorSlug } from './operators';
import { type RankSlug, RANKS_SEASONS } from './ranks';
import { SEASONS } from './seasons';
import { WEAPONS } from './weapons';

export const isMapSlug = (value: string): value is MapSlug =>
  MINI_MAPS.map(({ slug }) => slug.toString()).includes(value);

export const isOperatorSlug = (value: string): value is OperatorSlug =>
  OPERATORS.map(({ slug }) => slug.toString()).includes(value);

export const isWeaponSlug = (value: string): value is WeaponSlug =>
  WEAPONS.map(({ slug }) => slug.toString()).includes(value);

export const isGadgetSlug = (value: string): value is GadgetSlug =>
  GADGETS.map(({ slug }) => slug.toString()).includes(value);

export const isRankSlug = (value: string): value is RankSlug =>
  RANKS_SEASONS.map(({ ranks }) => ranks.map(({ slug }) => slug.toString()))
    .flat()
    .includes(value);

export const isSeasonSlug = (value: string): value is SeasonSlug =>
  SEASONS.map(({ slug }) => slug.toString()).includes(value);

export const isAttachmentSlug = (value: string): value is AttachmentSlug =>
  ATTACHMENTS.map(({ slug }) => slug.toString()).includes(value);

export const isSightSlug = (value: string): value is SightSlug =>
  SIGHTS.map(({ slug }) => slug.toString()).includes(value);

export const isBarrelSlug = (value: string): value is BarrelSlug =>
  BARRELS.map(({ slug }) => slug.toString()).includes(value);

export const isGripSlug = (value: string): value is GripSlug =>
  GRIPS.map(({ slug }) => slug.toString()).includes(value);

export const isUnderBarrelSlug = (value: string): value is UnderBarrelSlug =>
  UNDER_BARRELS.map(({ slug }) => slug.toString()).includes(value);

export const isOpticColorSlug = (value: string): value is OpticColorSlug =>
  OPTIC_COLORS.map(({ slug }) => slug.toString()).includes(value);
