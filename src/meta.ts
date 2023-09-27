import type { SeasonShorthand } from './types';
import { getISODate } from './utils';

export interface LastUpdated {
  season: {
    /** Could include dot with a number at the end (ex: `Y7S4.2`). */
    shorthandVersion: SeasonShorthandVersion;
  };
  date: string;
}
export type SeasonShorthandVersion =
  | SeasonShorthand
  | `${SeasonShorthand}.${number}`;

export const LAST_UPDATED = {
  season: { shorthandVersion: 'Y8S3.2' },
  date: getISODate('2023-09-27')
} satisfies LastUpdated;
