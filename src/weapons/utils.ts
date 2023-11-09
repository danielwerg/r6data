import { getAssetURL } from '../utils';
import type { Weapon } from './types';

export const getWeaponAssetURL = (path: string) =>
  getAssetURL(`/weapons/detailed${path}`);

export const weaponHasChamberBullet = (weapon: Weapon) => {
  if (
    weapon.categorySlug === 'handgun' &&
    ['lfp586', 'bailiff_410', 'keratos_.357'].includes(weapon.slug)
  )
    return false;
  else if (
    weapon.categorySlug === 'shotgun' &&
    !['sasg-12', 'spas-15', 'fo-12', 'acs12', 'tcsg12'].includes(weapon.slug)
  )
    return false;
  else if (
    weapon.categorySlug === 'lmg' &&
    !['g8a1', 't-95_lsw', 'm249_saw'].includes(weapon.slug)
  )
    return false;
  else if (weapon.categorySlug === 'shield') return false;
  else if (weapon.categorySlug === 'launcher') return false;
  else return true;
};
