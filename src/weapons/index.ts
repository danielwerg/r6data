import { ASSAULT_RIFLES } from './assault_rifles';
import { SMGS } from './smgs';
import { LMGS } from './lmgs';
import { MARKSMANS } from './marksmans';
import { HANDGUNS } from './handguns';
import { SHOTGUNS } from './shotguns';
import { MPS } from './mps';
import { SHIELDS } from './shields';
import { LAUNCHERS } from './launchers';

export * from './utils';
export * from './types';

export {
  ASSAULT_RIFLES,
  SMGS,
  LMGS,
  MARKSMANS,
  HANDGUNS,
  SHOTGUNS,
  MPS,
  SHIELDS,
  LAUNCHERS
};

export const WEAPONS = [
  ...ASSAULT_RIFLES,
  ...SMGS,
  ...LMGS,
  ...MARKSMANS,
  ...HANDGUNS,
  ...SHOTGUNS,
  ...MPS,
  ...SHIELDS,
  ...LAUNCHERS
];
