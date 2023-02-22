import { getAssetURL, getSVGString } from '../utils';

export const getWeaponSVGString = async (path: string) =>
  getSVGString(`/weapons/${path}`);

export const getWeaponAssetURL = (path: string) =>
  getAssetURL(`/weapons${path}`);
