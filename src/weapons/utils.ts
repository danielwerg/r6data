import { getAssetURL, getSVGString } from '../utils';

export const getWeaponSVGString = async (path: string) =>
  getSVGString(`/weapons/detailed${path}`);

export const getWeaponAssetURL = (path: string) =>
  getAssetURL(`/weapons/detailed${path}`);
