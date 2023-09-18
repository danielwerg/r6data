import { getAssetURL } from '../utils';
import type { Weapon } from './types';

export const getWeaponAssetURL = (path: string) =>
  getAssetURL(`/weapons/detailed${path}`);

export const hasChamberBullet = (weapon: Weapon) => {
  if (
    weapon.category === 'handgun' &&
    ['lfp586', 'bailiff_410', 'keratos_.357'].includes(weapon.slug)
  )
    return false;
  else if (
    weapon.category === 'shotgun' &&
    !['sasg-12', 'spas-15', 'fo-12', 'acs12', 'tcsg12'].includes(weapon.slug)
  )
    return false;
  else if (
    weapon.category === 'lmg' &&
    !['g8a1', 't-95_lsw', 'm249_saw'].includes(weapon.slug)
  )
    return false;
  else if (weapon.category === 'shield') return false;
  else if (weapon.category === 'launcher') return false;
  else return true;
};
