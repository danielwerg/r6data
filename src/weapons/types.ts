import type { SVGandPNG, WeaponCategory, WeaponSlug } from '../types';

export interface Weapon {
  slug: WeaponSlug;
  name: string;
  category: WeaponCategory;
  description: string;
  damage: number;
  fireRate: number;
  mobility: number;
  capacity: number;
  ammo: number;
  reloadTime: WeaponReloadTime;
  slot: WeaponSlot;
  icon: SVGandPNG;
  iconOfficial: string | null;
}

export interface WeaponReloadTime {
  empty: number;
  tactical: number;
}

export type WeaponSlot = 'primary' | 'secondary';
