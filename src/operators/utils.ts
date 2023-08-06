import { getAssetURL } from '../utils';

export const getOperatorAssetURL = (path: string) =>
  getAssetURL(`/operators${path}`);

export const getOperatorHealthDescription = (value: 1 | 2 | 3) =>
  ({ 1: 'light', 2: 'medium', 3: 'heavy' }[value]);
export const getOperatorSpeedDescription = (value: 1 | 2 | 3) =>
  ({ 1: 'slow', 2: 'normal', 3: 'fast' }[value]);
