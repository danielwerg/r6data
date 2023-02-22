import fs from 'node:fs/promises';
import { join } from 'node:path';

import type { Season } from './types';

export const getSeasonShorthand = (id: number) => {
  const [whole, decimal] = ((id + 4) / 4).toFixed(2).split('.').map(Number) as [
    number,
    number
  ];
  return id === 0
    ? 'Y0S0'
    : decimal
    ? `Y${whole}S${decimal / 25}`
    : `Y${whole - 1}S4`;
};

export const getSeasonId = (shorthand: string) => {
  const [year, season] = /Y([0-9]+)S([0-9])/
    .exec(shorthand)
    ?.slice(1)
    .map(Number) as [number, number];
  return year === 0 ? 0 : year * 4 - 4 + season;
};

export const getNextPriceDropSeasons = (
  seasons: Season[],
  seasonId: number
) => {
  const lastSeasonId = seasons.at(-1)!.id;
  const ratio = (lastSeasonId - seasonId) / 4;
  return Math.floor(ratio) >= 3 ? 0 : 4 - ((ratio % 1) * 100) / 25;
};

export const getPrices = (seasons: Season[], seasonId: number) => {
  const lastSeasonId = seasons.at(-1)!.id;
  const ratio = (lastSeasonId - seasonId) / 4;
  let result = { renown: 0, r6Credits: 0 };
  switch (Math.floor(ratio)) {
    case 0:
      result = { renown: 25000, r6Credits: 600 };
      break;
    case 1:
      result = { renown: 20000, r6Credits: 480 };
      break;
    case 2:
      result = { renown: 15000, r6Credits: 360 };
      break;
    default:
      result = { renown: 10000, r6Credits: 240 };
  }
  return seasonId === 0 ? { renown: 1000, r6Credits: 0 } : result;
};

export interface InRangeOptions {
  range: [number, number];
  point: number;
}
export const inRange = ({ range: [start, end], point }: InRangeOptions) =>
  start <= point && point <= end;

export const getSVGString = async (path: string) =>
  fs.readFile(join(__dirname, './assets', path), 'utf8');

export const getAssetURL = (path: string) =>
  `https://raw.githubusercontent.com/danielwerg/r6data/master/assets${path}`;

export const getISODate = (date: string) => new Date(date).toISOString();
