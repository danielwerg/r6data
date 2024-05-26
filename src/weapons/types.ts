import type {
  SVGandPNG,
  WeaponSlug,
  WeaponCategorySlug,
  WeaponSubCategorySlug
} from '../types';

export interface Weapon {
  slug: WeaponSlug;
  name: string;
  categorySlug: WeaponCategorySlug;
  subCategorySlug: (WeaponCategorySlug | WeaponSubCategorySlug)[];
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
