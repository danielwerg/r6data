import { getAssetURL } from '../utils';

export const getWeaponAssetURL = (path: string) =>
  getAssetURL(`/weapons/detailed${path}`);
