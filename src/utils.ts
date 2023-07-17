import { load } from 'cheerio';

import type { Season, Svg, SvgAttributes } from './types';

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

export const getAssetURL = (path: string) =>
  `https://raw.githubusercontent.com/danielwerg/r6data/master/src/assets${path}`;

export const getISODate = (date: string) => new Date(date).toISOString();

export type ConditionalClasses = (
  | string
  | number
  | undefined
  | null
  | false
  | Record<string, unknown>
)[];
export const classNames = (...conditionalClasses: ConditionalClasses) =>
  conditionalClasses
    .map(conditionalClass =>
      typeof conditionalClass === 'string' ||
      typeof conditionalClass === 'number'
        ? conditionalClass
        : conditionalClass &&
          Object.entries(conditionalClass)
            .filter(([, value]) => value)
            .map(([key]) => key)
            .join(' ')
    )
    .filter(Boolean)
    .join(' ');

export const attributesToString = (attributes: SvgAttributes) =>
  Object.keys(attributes)
    .map(key => `${key}="${attributes[key]!}"`)
    .join(' ');

export const parseSvgString = (svg: string) => {
  const $ = load(svg);
  return {
    contents: $('svg').html() ?? '',
    attributes: $('svg').attr() ?? {}
  } as Svg;
};
export type ParseSvgStringOutput = ReturnType<typeof parseSvgString>;

export const svgToString = (svg: Svg, attributes?: SvgAttributes) => {
  const nextAttributes = {
    ...svg.attributes,
    ...attributes,
    class: classNames(svg.attributes['class'], attributes?.['class'] ?? '')
  };
  return `<svg ${attributesToString(nextAttributes)}>${svg.contents}</svg>`;
};
