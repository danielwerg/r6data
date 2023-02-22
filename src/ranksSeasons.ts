/* eslint-disable max-lines */
import type { SVGandPNG } from './types';
import { getAssetURL, getSVGString } from './utils';

export const getRankSVGString = async (path: string) =>
  getSVGString(`/ranks/${path}`);
export const getRankAssetURL = (path: string) => getAssetURL(`/ranks${path}`);

export interface RankSeason {
  seasonsRange: [number, number];
  ranks: Rank[];
}

export interface Rank {
  id: number;
  slug: RankSlug;
  name: string;
  icon: SVGandPNG;
  iconOfficial: string | null;
  range: [number, number] | null;
}

export type RankSlug =
  | 'unranked'
  | 'copper_5'
  | 'copper_4'
  | 'copper_3'
  | 'copper_2'
  | 'copper_1'
  | 'bronze_5'
  | 'bronze_4'
  | 'bronze_3'
  | 'bronze_2'
  | 'bronze_1'
  | 'silver_5'
  | 'silver_4'
  | 'silver_3'
  | 'silver_2'
  | 'silver_1'
  | 'gold_5'
  | 'gold_4'
  | 'gold_3'
  | 'gold_2'
  | 'gold_1'
  | 'platinum_5'
  | 'platinum_4'
  | 'platinum_3'
  | 'platinum_2'
  | 'platinum_1'
  | 'emerald_5'
  | 'emerald_4'
  | 'emerald_3'
  | 'emerald_2'
  | 'emerald_1'
  | 'diamond_5'
  | 'diamond_4'
  | 'diamond_3'
  | 'diamond_2'
  | 'diamond_1'
  | 'diamond'
  | 'champions';

// NOTE: Need to infer RankSeason[] because none of signatures are compatible with each other
/** NOTE: Missing icons for season y1s1 (Black Ice) */
export const RANKS_SEASONS: RankSeason[] = [
  // NOTE: v1 [1, 1] Original ranks
  {
    seasonsRange: [1, 1],
    ranks: [
      {
        id: 0,
        slug: 'unranked',
        name: 'Unranked',
        icon: { toSVG: null, png: null },
        iconOfficial: null,
        range: null
      },
      {
        id: 1,
        slug: 'copper_1',
        name: 'Copper I',
        icon: { toSVG: null, png: null },
        iconOfficial: null,
        range: null
      },
      {
        id: 2,
        slug: 'copper_2',
        name: 'Copper II',
        icon: { toSVG: null, png: null },
        iconOfficial: null,
        range: null
      },
      {
        id: 3,
        slug: 'copper_3',
        name: 'Copper III',
        icon: { toSVG: null, png: null },
        iconOfficial: null,
        range: null
      },
      {
        id: 4,
        slug: 'copper_4',
        name: 'Copper IV',
        icon: { toSVG: null, png: null },
        iconOfficial: null,
        range: null
      },
      {
        id: 5,
        slug: 'bronze_1',
        name: 'Bronze I',
        icon: { toSVG: null, png: null },
        iconOfficial: null,
        range: null
      },
      {
        id: 6,
        slug: 'bronze_2',
        name: 'Bronze II',
        icon: { toSVG: null, png: null },
        iconOfficial: null,
        range: null
      },
      {
        id: 7,
        slug: 'bronze_3',
        name: 'Bronze III',
        icon: { toSVG: null, png: null },
        iconOfficial: null,
        range: null
      },
      {
        id: 8,
        slug: 'bronze_4',
        name: 'Bronze IV',
        icon: { toSVG: null, png: null },
        iconOfficial: null,
        range: null
      },
      {
        id: 9,
        slug: 'silver_1',
        name: 'Silver I',
        icon: { toSVG: null, png: null },
        iconOfficial: null,
        range: null
      },
      {
        id: 10,
        slug: 'silver_2',
        name: 'Silver II',
        icon: { toSVG: null, png: null },
        iconOfficial: null,
        range: null
      },
      {
        id: 11,
        slug: 'silver_3',
        name: 'Silver III',
        icon: { toSVG: null, png: null },
        iconOfficial: null,
        range: null
      },
      {
        id: 12,
        slug: 'silver_4',
        name: 'Silver IV',
        icon: { toSVG: null, png: null },
        iconOfficial: null,
        range: null
      },
      {
        id: 13,
        slug: 'gold_1',
        name: 'Gold I',
        icon: { toSVG: null, png: null },
        iconOfficial: null,
        range: null
      },
      {
        id: 14,
        slug: 'gold_2',
        name: 'Gold II',
        icon: { toSVG: null, png: null },
        iconOfficial: null,
        range: null
      },
      {
        id: 15,
        slug: 'gold_3',
        name: 'Gold III',
        icon: { toSVG: null, png: null },
        iconOfficial: null,
        range: null
      },
      {
        id: 16,
        slug: 'gold_4',
        name: 'Gold IV',
        icon: { toSVG: null, png: null },
        iconOfficial: null,
        range: null
      },
      {
        id: 17,
        slug: 'platinum_1',
        name: 'Platinum I',
        icon: { toSVG: null, png: null },
        iconOfficial: null,
        range: null
      },
      {
        id: 18,
        slug: 'platinum_2',
        name: 'Platinum II',
        icon: { toSVG: null, png: null },
        iconOfficial: null,
        range: null
      },
      {
        id: 19,
        slug: 'platinum_3',
        name: 'Platinum III',
        icon: { toSVG: null, png: null },
        iconOfficial: null,
        range: null
      },
      {
        id: 20,
        slug: 'diamond',
        name: 'Diamond',
        icon: { toSVG: null, png: null },
        iconOfficial: null,
        range: null
      }
    ]
  },
  // NOTE: v2 [2, 3] Added mmr and changed icons
  {
    seasonsRange: [2, 3],
    ranks: [
      {
        id: 0,
        slug: 'unranked',
        name: 'Unranked',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/unranked.svg'),
          png: getRankAssetURL('/v2/pngs/unranked.png')
        },
        iconOfficial: null,
        range: [0, 0]
      },
      {
        id: 1,
        slug: 'copper_1',
        name: 'Copper I',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/copper_1.svg'),
          png: getRankAssetURL('/v2/pngs/copper_1.png')
        },
        iconOfficial: null,
        range: [1, 2199]
      },
      {
        id: 2,
        slug: 'copper_2',
        name: 'Copper II',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/copper_2.svg'),
          png: getRankAssetURL('/v2/pngs/copper_2.png')
        },
        iconOfficial: null,
        range: [2200, 2399]
      },
      {
        id: 3,
        slug: 'copper_3',
        name: 'Copper III',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/copper_3.svg'),
          png: getRankAssetURL('/v2/pngs/copper_3.png')
        },
        iconOfficial: null,
        range: [2400, 2549]
      },
      {
        id: 4,
        slug: 'copper_4',
        name: 'Copper IV',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/copper_4.svg'),
          png: getRankAssetURL('/v2/pngs/copper_4.png')
        },
        iconOfficial: null,
        range: [2550, 2699]
      },
      {
        id: 5,
        slug: 'bronze_1',
        name: 'Bronze I',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/bronze_1.svg'),
          png: getRankAssetURL('/v2/pngs/bronze_1.png')
        },
        iconOfficial: null,
        range: [2700, 2799]
      },
      {
        id: 6,
        slug: 'bronze_2',
        name: 'Bronze II',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/bronze_2.svg'),
          png: getRankAssetURL('/v2/pngs/bronze_2.png')
        },
        iconOfficial: null,
        range: [2800, 2899]
      },
      {
        id: 7,
        slug: 'bronze_3',
        name: 'Bronze III',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/bronze_3.svg'),
          png: getRankAssetURL('/v2/pngs/bronze_3.png')
        },
        iconOfficial: null,
        range: [2900, 3049]
      },
      {
        id: 8,
        slug: 'bronze_4',
        name: 'Bronze IV',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/bronze_4.svg'),
          png: getRankAssetURL('/v2/pngs/bronze_4.png')
        },
        iconOfficial: null,
        range: [3050, 3199]
      },
      {
        id: 9,
        slug: 'silver_1',
        name: 'Silver I',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/silver_1.svg'),
          png: getRankAssetURL('/v2/pngs/silver_1.png')
        },
        iconOfficial: null,
        range: [3200, 3349]
      },
      {
        id: 10,
        slug: 'silver_2',
        name: 'Silver II',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/silver_2.svg'),
          png: getRankAssetURL('/v2/pngs/silver_2.png')
        },
        iconOfficial: null,
        range: [3350, 3519]
      },
      {
        id: 11,
        slug: 'silver_3',
        name: 'Silver III',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/silver_3.svg'),
          png: getRankAssetURL('/v2/pngs/silver_3.png')
        },
        iconOfficial: null,
        range: [3520, 3699]
      },
      {
        id: 12,
        slug: 'silver_4',
        name: 'Silver IV',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/silver_4.svg'),
          png: getRankAssetURL('/v2/pngs/silver_4.png')
        },
        iconOfficial: null,
        range: [3700, 3929]
      },
      {
        id: 13,
        slug: 'gold_1',
        name: 'Gold I',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/gold_1.svg'),
          png: getRankAssetURL('/v2/pngs/gold_1.png')
        },
        iconOfficial: null,
        range: [3930, 4159]
      },
      {
        id: 14,
        slug: 'gold_2',
        name: 'Gold II',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/gold_2.svg'),
          png: getRankAssetURL('/v2/pngs/gold_2.png')
        },
        iconOfficial: null,
        range: [4160, 4399]
      },
      {
        id: 15,
        slug: 'gold_3',
        name: 'Gold III',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/gold_3.svg'),
          png: getRankAssetURL('/v2/pngs/gold_3.png')
        },
        iconOfficial: null,
        range: [4400, 4639]
      },
      {
        id: 16,
        slug: 'gold_4',
        name: 'Gold IV',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/gold_4.svg'),
          png: getRankAssetURL('/v2/pngs/gold_4.png')
        },
        iconOfficial: null,
        range: [4640, 4899]
      },
      {
        id: 17,
        slug: 'platinum_1',
        name: 'Platinum I',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/platinum_1.svg'),
          png: getRankAssetURL('/v2/pngs/platinum_1.png')
        },
        iconOfficial: null,
        range: [4900, 5159]
      },
      {
        id: 18,
        slug: 'platinum_2',
        name: 'Platinum II',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/platinum_2.svg'),
          png: getRankAssetURL('/v2/pngs/platinum_2.png')
        },
        iconOfficial: null,
        range: [5160, 5449]
      },
      {
        id: 19,
        slug: 'platinum_3',
        name: 'Platinum III',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/platinum_3.svg'),
          png: getRankAssetURL('/v2/pngs/platinum_3.png')
        },
        iconOfficial: null,
        range: [5450, 5999]
      },
      {
        id: 20,
        slug: 'diamond',
        name: 'Diamond',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/diamond.svg'),
          png: getRankAssetURL('/v2/pngs/diamond.png')
        },
        iconOfficial: null,
        range: [6000, Infinity]
      }
    ]
  },
  // NOTE: v2 [4, 4] Changed mmr
  {
    seasonsRange: [4, 4],
    ranks: [
      {
        id: 0,
        slug: 'unranked',
        name: 'Unranked',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/unranked.svg'),
          png: getRankAssetURL('/v2/pngs/unranked.png')
        },
        iconOfficial: null,
        range: [0, 0]
      },
      {
        id: 1,
        slug: 'copper_1',
        name: 'Copper I',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/copper_1.svg'),
          png: getRankAssetURL('/v2/pngs/copper_1.png')
        },
        iconOfficial: null,
        range: [1, 1399]
      },
      {
        id: 2,
        slug: 'copper_2',
        name: 'Copper II',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/copper_1.svg'),
          png: getRankAssetURL('/v2/pngs/copper_1.png')
        },
        iconOfficial: null,
        range: [1400, 1499]
      },
      {
        id: 3,
        slug: 'copper_3',
        name: 'Copper III',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/copper_31.svg'),
          png: getRankAssetURL('/v2/pngs/copper_31.png')
        },
        iconOfficial: null,
        range: [1500, 1599]
      },
      {
        id: 4,
        slug: 'copper_4',
        name: 'Copper IV',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/copper_4.svg'),
          png: getRankAssetURL('/v2/pngs/copper_4.png')
        },
        iconOfficial: null,
        range: [1600, 1699]
      },
      {
        id: 5,
        slug: 'bronze_1',
        name: 'Bronze I',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/bronze_1.svg'),
          png: getRankAssetURL('/v2/pngs/bronze_1.png')
        },
        iconOfficial: null,
        range: [1700, 1799]
      },
      {
        id: 6,
        slug: 'bronze_2',
        name: 'Bronze II',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/bronze_2.svg'),
          png: getRankAssetURL('/v2/pngs/bronze_2.png')
        },
        iconOfficial: null,
        range: [1800, 1899]
      },
      {
        id: 7,
        slug: 'bronze_3',
        name: 'Bronze III',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/bronze_3.svg'),
          png: getRankAssetURL('/v2/pngs/bronze_3.png')
        },
        iconOfficial: null,
        range: [1900, 1999]
      },
      {
        id: 8,
        slug: 'bronze_4',
        name: 'Bronze IV',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/bronze_4.svg'),
          png: getRankAssetURL('/v2/pngs/bronze_4.png')
        },
        iconOfficial: null,
        range: [2000, 2099]
      },
      {
        id: 9,
        slug: 'silver_1',
        name: 'Silver I',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/silver_1.svg'),
          png: getRankAssetURL('/v2/pngs/silver_1.png')
        },
        iconOfficial: null,
        range: [2100, 2199]
      },
      {
        id: 10,
        slug: 'silver_2',
        name: 'Silver II',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/silver_2.svg'),
          png: getRankAssetURL('/v2/pngs/silver_2.png')
        },
        iconOfficial: null,
        range: [2200, 2299]
      },
      {
        id: 11,
        slug: 'silver_3',
        name: 'Silver III',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/silver_3.svg'),
          png: getRankAssetURL('/v2/pngs/silver_3.png')
        },
        iconOfficial: null,
        range: [2300, 2399]
      },
      {
        id: 12,
        slug: 'silver_4',
        name: 'Silver IV',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/silver_4.svg'),
          png: getRankAssetURL('/v2/pngs/silver_4.png')
        },
        iconOfficial: null,
        range: [2400, 2499]
      },
      {
        id: 13,
        slug: 'gold_1',
        name: 'Gold I',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/gold_1.svg'),
          png: getRankAssetURL('/v2/pngs/gold_1.png')
        },
        iconOfficial: null,
        range: [2500, 2599]
      },
      {
        id: 14,
        slug: 'gold_2',
        name: 'Gold II',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/gold_2.svg'),
          png: getRankAssetURL('/v2/pngs/gold_2.png')
        },
        iconOfficial: null,
        range: [2600, 2699]
      },
      {
        id: 15,
        slug: 'gold_3',
        name: 'Gold III',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/gold_3.svg'),
          png: getRankAssetURL('/v2/pngs/gold_3.png')
        },
        iconOfficial: null,
        range: [2700, 2700]
      },
      {
        id: 16,
        slug: 'gold_4',
        name: 'Gold IV',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/gold_4.svg'),
          png: getRankAssetURL('/v2/pngs/gold_4.png')
        },
        iconOfficial: null,
        range: [2800, 2999]
      },
      {
        id: 17,
        slug: 'platinum_1',
        name: 'Platinum I',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/platinum_1.svg'),
          png: getRankAssetURL('/v2/pngs/platinum_1.png')
        },
        iconOfficial: null,
        range: [3000, 3199]
      },
      {
        id: 18,
        slug: 'platinum_2',
        name: 'Platinum II',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/platinum_2.svg'),
          png: getRankAssetURL('/v2/pngs/platinum_2.png')
        },
        iconOfficial: null,
        range: [3200, 3399]
      },
      {
        id: 19,
        slug: 'platinum_3',
        name: 'Platinum III',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/platinum_3.svg'),
          png: getRankAssetURL('/v2/pngs/platinum_3.png')
        },
        iconOfficial: null,
        range: [3400, 3699]
      },
      {
        id: 20,
        slug: 'diamond',
        name: 'Diamond',
        icon: {
          toSVG: async () => getRankSVGString('/v2/svgs/diamond.svg'),
          png: getRankAssetURL('/v2/pngs/diamond.png')
        },
        iconOfficial: null,
        range: [3700, Infinity]
      }
    ]
  },
  // NOTE: v3 [5, 13] Reverse ranks, change mmr, change icons
  {
    seasonsRange: [5, 13],
    ranks: [
      {
        id: 0,
        slug: 'unranked',
        name: 'Unranked',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/unranked.svg'),
          png: getRankAssetURL('/v3/pngs/unranked.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6HQlEdlInHQ2B2ZbHygp2x/cfa4500a6a30419d862a74736416e5fc/R6S_RANK_None_L.png',
        range: [0, 0]
      },
      {
        id: 1,
        slug: 'copper_4',
        name: 'Copper IV',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/copper_4.svg'),
          png: getRankAssetURL('/v3/pngs/copper_4.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4pYeN2wYLmCmSdGLASi91d/53bce6d8e2c764a497a89fb9437de557/R6S_RANK_500x500_Copper_04.png',
        range: [1, 1399]
      },
      {
        id: 2,
        slug: 'copper_3',
        name: 'Copper III',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/copper_3.svg'),
          png: getRankAssetURL('/v3/pngs/copper_3.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/70gNBYSf1kU94v5PoXlHGZ/3ce45f73df5b6b4377dea1452afe70fc/R6S_RANK_500x500_Copper_03.png',
        range: [1400, 1499]
      },
      {
        id: 3,
        slug: 'copper_2',
        name: 'Copper II',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/copper_2.svg'),
          png: getRankAssetURL('/v3/pngs/copper_2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6b9igyYh2U1t5wqJmUSSVU/7ca8e07be18f2d1990201080582b0272/R6S_RANK_500x500_Copper_02.png',
        range: [1500, 1599]
      },
      {
        id: 4,
        slug: 'copper_1',
        name: 'Copper I',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/copper_1.svg'),
          png: getRankAssetURL('/v3/pngs/copper_1.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3r3jMDq2BCg20rrkHKzJVq/77a16bf4bb2e0dfb939bcec26559b17a/R6S_RANK_500x500_Copper_01.png',
        range: [1600, 1699]
      },
      {
        id: 5,
        slug: 'bronze_4',
        name: 'Bronze IV',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/bronze_4.svg'),
          png: getRankAssetURL('/v3/pngs/bronze_4.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3fi46SbCqO8EfoR6Jij27d/c5f44a5e33e7b8091684e08da032d1df/R6S_RANK_500x500_Bronze_04.png',
        range: [1700, 1799]
      },
      {
        id: 6,
        slug: 'bronze_3',
        name: 'Bronze III',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/bronze_3.svg'),
          png: getRankAssetURL('/v3/pngs/bronze_3.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1JwqzCVjMarrUpcHNVF7vT/d5496a9ecdee4f6d85d5d3483e8a0571/R6S_RANK_500x500_Bronze_03.png',
        range: [1800, 1899]
      },
      {
        id: 7,
        slug: 'bronze_2',
        name: 'Bronze II',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/bronze_2.svg'),
          png: getRankAssetURL('/v3/pngs/bronze_2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/77VWoJQx9cwBSg2qFSLGMJ/6af35aafa4aa2bc93f69d43c5a223055/R6S_RANK_500x500_Bronze_02.png',
        range: [1900, 1999]
      },
      {
        id: 8,
        slug: 'bronze_1',
        name: 'Bronze I',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/bronze_1.svg'),
          png: getRankAssetURL('/v3/pngs/bronze_1.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4cEcVmkkoz590Tar0hFgFO/610dd4998bc6ec599310e4e19b6e428a/R6S_RANK_500x500_Bronze_01.png',
        range: [2000, 2099]
      },
      {
        id: 9,
        slug: 'silver_4',
        name: 'Silver IV',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/silver_4.svg'),
          png: getRankAssetURL('/v3/pngs/silver_4.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/27vGfJ0Gi45d88ggLJnnBN/ea1bdcf32846b049d94bea837319ce90/R6S_RANK_500x500_Silver_04.png',
        range: [2100, 2199]
      },
      {
        id: 10,
        slug: 'silver_3',
        name: 'Silver III',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/silver_3.svg'),
          png: getRankAssetURL('/v3/pngs/silver_3.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6bfRfsBkj3U7C8TZcQf8eT/01188630787ab3e04acb89abd4f60e40/R6S_RANK_500x500_Silver_03.png',
        range: [2200, 2299]
      },
      {
        id: 11,
        slug: 'silver_2',
        name: 'Silver II',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/silver_2.svg'),
          png: getRankAssetURL('/v3/pngs/silver_2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/0PLZUFs3fqKBTLh1gYyY8/7cabc5ba4522f725583faac165ff5130/R6S_RANK_500x500_Silver_02.png',
        range: [2300, 2399]
      },
      {
        id: 12,
        slug: 'silver_1',
        name: 'Silver I',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/silver_1.svg'),
          png: getRankAssetURL('/v3/pngs/silver_1.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4guViAQud6vSRPWoWGUNyU/32b279721dcfb09d0668f7b6a15ae3ea/R6S_RANK_500x500_Silver_01.png',
        range: [2400, 2499]
      },
      {
        id: 13,
        slug: 'gold_4',
        name: 'Gold IV',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/gold_4.svg'),
          png: getRankAssetURL('/v3/pngs/gold_4.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3DyVjCUoyPMWeckcLY0vac/1123b44d2b1241880fc3a03d2b87528b/R6S_RANK_500x500_GOLD_04.png',
        range: [2500, 2699]
      },
      {
        id: 14,
        slug: 'gold_3',
        name: 'Gold III',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/gold_3.svg'),
          png: getRankAssetURL('/v3/pngs/gold_3.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5o6FA0tOweqf2RMm6ly9ET/5cf7d4ce0465315dfa4012a6a84c428a/R6S_RANK_500x500_GOLD_03.png',
        range: [2700, 2899]
      },
      {
        id: 15,
        slug: 'gold_2',
        name: 'Gold II',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/gold_2.svg'),
          png: getRankAssetURL('/v3/pngs/gold_2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/HQeTsDatqQRo9qW5KKs1x/4ba25d10cfb681d3347985a1125b69cf/R6S_RANK_500x500_GOLD_02.png',
        range: [2900, 3099]
      },
      {
        id: 16,
        slug: 'gold_1',
        name: 'Gold I',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/gold_1.svg'),
          png: getRankAssetURL('/v3/pngs/gold_1.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/8Mpi8OU4AnEh93pVcapyW/2b140e3caae994c8fa2255623cba323e/R6S_RANK_500x500_GOLD_01.png',
        range: [3100, 3299]
      },
      {
        id: 17,
        slug: 'platinum_3',
        name: 'Platinum III',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/platinum_3.svg'),
          png: getRankAssetURL('/v3/pngs/platinum_3.png')
        },
        iconOfficial: null,
        range: [3300, 3699]
      },
      {
        id: 18,
        slug: 'platinum_2',
        name: 'Platinum II',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/platinum_2.svg'),
          png: getRankAssetURL('/v3/pngs/platinum_2.png')
        },
        iconOfficial: null,
        range: [3700, 4099]
      },
      {
        id: 19,
        slug: 'platinum_1',
        name: 'Platinum I',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/platinum_1.svg'),
          png: getRankAssetURL('/v3/pngs/platinum_1.png')
        },
        iconOfficial: null,
        range: [4100, 4499]
      },
      {
        id: 20,
        slug: 'diamond',
        name: 'Diamond',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/diamond.svg'),
          png: getRankAssetURL('/v3/pngs/diamond.png')
        },
        iconOfficial: null,
        range: [4500, Infinity]
      }
    ]
  },
  // NOTE: v3 [14, 14] Changed icons for Platinum and Diamond
  {
    seasonsRange: [14, 14],
    ranks: [
      {
        id: 0,
        slug: 'unranked',
        name: 'Unranked',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/unranked.svg'),
          png: getRankAssetURL('/v3/pngs/unranked.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6HQlEdlInHQ2B2ZbHygp2x/cfa4500a6a30419d862a74736416e5fc/R6S_RANK_None_L.png',
        range: [0, 0]
      },
      {
        id: 1,
        slug: 'copper_4',
        name: 'Copper IV',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/copper_4.svg'),
          png: getRankAssetURL('/v3/pngs/copper_4.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4pYeN2wYLmCmSdGLASi91d/53bce6d8e2c764a497a89fb9437de557/R6S_RANK_500x500_Copper_04.png',
        range: [1, 1399]
      },
      {
        id: 2,
        slug: 'copper_3',
        name: 'Copper III',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/copper_3.svg'),
          png: getRankAssetURL('/v3/pngs/copper_3.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/70gNBYSf1kU94v5PoXlHGZ/3ce45f73df5b6b4377dea1452afe70fc/R6S_RANK_500x500_Copper_03.png',
        range: [1400, 1499]
      },
      {
        id: 3,
        slug: 'copper_2',
        name: 'Copper II',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/copper_2.svg'),
          png: getRankAssetURL('/v3/pngs/copper_2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6b9igyYh2U1t5wqJmUSSVU/7ca8e07be18f2d1990201080582b0272/R6S_RANK_500x500_Copper_02.png',
        range: [1500, 1599]
      },
      {
        id: 4,
        slug: 'copper_1',
        name: 'Copper I',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/copper_1.svg'),
          png: getRankAssetURL('/v3/pngs/copper_1.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3r3jMDq2BCg20rrkHKzJVq/77a16bf4bb2e0dfb939bcec26559b17a/R6S_RANK_500x500_Copper_01.png',
        range: [1600, 1699]
      },
      {
        id: 5,
        slug: 'bronze_4',
        name: 'Bronze IV',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/bronze_4.svg'),
          png: getRankAssetURL('/v3/pngs/bronze_4.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3fi46SbCqO8EfoR6Jij27d/c5f44a5e33e7b8091684e08da032d1df/R6S_RANK_500x500_Bronze_04.png',
        range: [1700, 1799]
      },
      {
        id: 6,
        slug: 'bronze_3',
        name: 'Bronze III',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/bronze_3.svg'),
          png: getRankAssetURL('/v3/pngs/bronze_3.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1JwqzCVjMarrUpcHNVF7vT/d5496a9ecdee4f6d85d5d3483e8a0571/R6S_RANK_500x500_Bronze_03.png',
        range: [1800, 1899]
      },
      {
        id: 7,
        slug: 'bronze_2',
        name: 'Bronze II',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/bronze_2.svg'),
          png: getRankAssetURL('/v3/pngs/bronze_2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/77VWoJQx9cwBSg2qFSLGMJ/6af35aafa4aa2bc93f69d43c5a223055/R6S_RANK_500x500_Bronze_02.png',
        range: [1900, 1999]
      },
      {
        id: 8,
        slug: 'bronze_1',
        name: 'Bronze I',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/bronze_1.svg'),
          png: getRankAssetURL('/v3/pngs/bronze_1.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4cEcVmkkoz590Tar0hFgFO/610dd4998bc6ec599310e4e19b6e428a/R6S_RANK_500x500_Bronze_01.png',
        range: [2000, 2099]
      },
      {
        id: 9,
        slug: 'silver_4',
        name: 'Silver IV',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/silver_4.svg'),
          png: getRankAssetURL('/v3/pngs/silver_4.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/27vGfJ0Gi45d88ggLJnnBN/ea1bdcf32846b049d94bea837319ce90/R6S_RANK_500x500_Silver_04.png',
        range: [2100, 2199]
      },
      {
        id: 10,
        slug: 'silver_3',
        name: 'Silver III',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/silver_3.svg'),
          png: getRankAssetURL('/v3/pngs/silver_3.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6bfRfsBkj3U7C8TZcQf8eT/01188630787ab3e04acb89abd4f60e40/R6S_RANK_500x500_Silver_03.png',
        range: [2200, 2299]
      },
      {
        id: 11,
        slug: 'silver_2',
        name: 'Silver II',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/silver_2.svg'),
          png: getRankAssetURL('/v3/pngs/silver_2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/0PLZUFs3fqKBTLh1gYyY8/7cabc5ba4522f725583faac165ff5130/R6S_RANK_500x500_Silver_02.png',
        range: [2300, 2399]
      },
      {
        id: 12,
        slug: 'silver_1',
        name: 'Silver I',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/silver_1.svg'),
          png: getRankAssetURL('/v3/pngs/silver_1.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4guViAQud6vSRPWoWGUNyU/32b279721dcfb09d0668f7b6a15ae3ea/R6S_RANK_500x500_Silver_01.png',
        range: [2400, 2499]
      },
      {
        id: 13,
        slug: 'gold_4',
        name: 'Gold IV',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/gold_4.svg'),
          png: getRankAssetURL('/v3/pngs/gold_4.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3DyVjCUoyPMWeckcLY0vac/1123b44d2b1241880fc3a03d2b87528b/R6S_RANK_500x500_GOLD_04.png',
        range: [2500, 2699]
      },
      {
        id: 14,
        slug: 'gold_3',
        name: 'Gold III',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/gold_3.svg'),
          png: getRankAssetURL('/v3/pngs/gold_3.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5o6FA0tOweqf2RMm6ly9ET/5cf7d4ce0465315dfa4012a6a84c428a/R6S_RANK_500x500_GOLD_03.png',
        range: [2700, 2899]
      },
      {
        id: 15,
        slug: 'gold_2',
        name: 'Gold II',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/gold_2.svg'),
          png: getRankAssetURL('/v3/pngs/gold_2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/HQeTsDatqQRo9qW5KKs1x/4ba25d10cfb681d3347985a1125b69cf/R6S_RANK_500x500_GOLD_02.png',
        range: [2900, 3099]
      },
      {
        id: 16,
        slug: 'gold_1',
        name: 'Gold I',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/gold_1.svg'),
          png: getRankAssetURL('/v3/pngs/gold_1.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/8Mpi8OU4AnEh93pVcapyW/2b140e3caae994c8fa2255623cba323e/R6S_RANK_500x500_GOLD_01.png',
        range: [3100, 3299]
      },
      {
        id: 17,
        slug: 'platinum_3',
        name: 'Platinum III',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/platinum_3_v2.svg'),
          png: getRankAssetURL('/v3/pngs/platinum_3_v2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1NdqJyCZK86i3AnQwEvIlt/68ed7769e4098ec682e8c793f5121722/R6S_RANK_500x500_Platinum_03.png',
        range: [3300, 3699]
      },
      {
        id: 18,
        slug: 'platinum_2',
        name: 'Platinum II',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/platinum_2_v2.svg'),
          png: getRankAssetURL('/v3/pngs/platinum_2_v2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/54T8y7G0Yu6qniIliDAuWz/d7a8d760969db59b1608c255e1674a65/R6S_RANK_500x500_Platinum_02.png',
        range: [3700, 4099]
      },
      {
        id: 19,
        slug: 'platinum_1',
        name: 'Platinum I',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/platinum_1_v2.svg'),
          png: getRankAssetURL('/v3/pngs/platinum_1_v2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/70KhxbY7ZSilFgcMFIFKip/cb5435f1e0e59804f38496868d8e9369/R6S_RANK_500x500_Platinum_01.png',
        range: [4100, 4499]
      },
      {
        id: 20,
        slug: 'diamond',
        name: 'Diamond',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/diamond_1_v2.svg'),
          png: getRankAssetURL('/v3/pngs/diamond_1_v2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3IjRzUddD2cTrx6xdVXFmY/49195f3e71b2d5694b50524bfd8fd30c/R6S_RANK_500x500_Diamond_01.png',
        range: [4500, Infinity]
      }
    ]
  },
  // NOTE: v3 [15, 22] Added Champions, Silver V, Bronze V and Copper V, removed Gold IV, change mmr
  {
    seasonsRange: [15, 22],
    ranks: [
      {
        id: 0,
        slug: 'unranked',
        name: 'Unranked',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/unranked.svg'),
          png: getRankAssetURL('/v3/pngs/unranked.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6HQlEdlInHQ2B2ZbHygp2x/cfa4500a6a30419d862a74736416e5fc/R6S_RANK_None_L.png',
        range: [0, 0]
      },
      {
        id: 1,
        slug: 'copper_5',
        name: 'Copper V',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/copper_5.svg'),
          png: getRankAssetURL('/v3/pngs/copper_5.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5xXGWX0lPNFRkTCbyxEdpn/43d9f77e44f14a694ce3790d470a59a5/R6S_RANK_500x500_Copper_05.png',
        range: [1, 1199]
      },
      {
        id: 2,
        slug: 'copper_4',
        name: 'Copper IV',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/copper_4.svg'),
          png: getRankAssetURL('/v3/pngs/copper_4.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4pYeN2wYLmCmSdGLASi91d/53bce6d8e2c764a497a89fb9437de557/R6S_RANK_500x500_Copper_04.png',
        range: [1200, 1299]
      },
      {
        id: 3,
        slug: 'copper_3',
        name: 'Copper III',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/copper_3.svg'),
          png: getRankAssetURL('/v3/pngs/copper_3.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/70gNBYSf1kU94v5PoXlHGZ/3ce45f73df5b6b4377dea1452afe70fc/R6S_RANK_500x500_Copper_03.png',
        range: [1300, 1399]
      },
      {
        id: 4,
        slug: 'copper_2',
        name: 'Copper II',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/copper_2.svg'),
          png: getRankAssetURL('/v3/pngs/copper_2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6b9igyYh2U1t5wqJmUSSVU/7ca8e07be18f2d1990201080582b0272/R6S_RANK_500x500_Copper_02.png',
        range: [1400, 1499]
      },
      {
        id: 5,
        slug: 'copper_1',
        name: 'Copper I',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/copper_1.svg'),
          png: getRankAssetURL('/v3/pngs/copper_1.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3r3jMDq2BCg20rrkHKzJVq/77a16bf4bb2e0dfb939bcec26559b17a/R6S_RANK_500x500_Copper_01.png',
        range: [1500, 1599]
      },
      {
        id: 6,
        slug: 'bronze_5',
        name: 'Bronze V',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/bronze_5.svg'),
          png: getRankAssetURL('/v3/pngs/bronze_5.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5tzRRjiEoyYDY0lUBWvLvP/25503d2ad74339122be6e61c0a5117e0/R6S_RANK_500x500_Bronze_05.png',
        range: [1600, 1699]
      },
      {
        id: 7,
        slug: 'bronze_4',
        name: 'Bronze IV',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/bronze_4.svg'),
          png: getRankAssetURL('/v3/pngs/bronze_4.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3fi46SbCqO8EfoR6Jij27d/c5f44a5e33e7b8091684e08da032d1df/R6S_RANK_500x500_Bronze_04.png',
        range: [1700, 1799]
      },
      {
        id: 8,
        slug: 'bronze_3',
        name: 'Bronze III',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/bronze_3.svg'),
          png: getRankAssetURL('/v3/pngs/bronze_3.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1JwqzCVjMarrUpcHNVF7vT/d5496a9ecdee4f6d85d5d3483e8a0571/R6S_RANK_500x500_Bronze_03.png',
        range: [1800, 1899]
      },
      {
        id: 9,
        slug: 'bronze_2',
        name: 'Bronze II',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/bronze_2.svg'),
          png: getRankAssetURL('/v3/pngs/bronze_2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/77VWoJQx9cwBSg2qFSLGMJ/6af35aafa4aa2bc93f69d43c5a223055/R6S_RANK_500x500_Bronze_02.png',
        range: [1900, 1999]
      },
      {
        id: 10,
        slug: 'bronze_1',
        name: 'Bronze I',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/bronze_1.svg'),
          png: getRankAssetURL('/v3/pngs/bronze_1.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4cEcVmkkoz590Tar0hFgFO/610dd4998bc6ec599310e4e19b6e428a/R6S_RANK_500x500_Bronze_01.png',
        range: [2000, 2099]
      },
      {
        id: 11,
        slug: 'silver_5',
        name: 'Silver V',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/silver_5.svg'),
          png: getRankAssetURL('/v3/pngs/silver_5.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3k0MFneuqkhrr2onZDNl2O/7f75189a087d8f783852175b9bab2654/R6S_RANK_500x500_Silver_05.png',
        range: [2100, 2199]
      },
      {
        id: 12,
        slug: 'silver_4',
        name: 'Silver IV',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/silver_4.svg'),
          png: getRankAssetURL('/v3/pngs/silver_4.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/27vGfJ0Gi45d88ggLJnnBN/ea1bdcf32846b049d94bea837319ce90/R6S_RANK_500x500_Silver_04.png',
        range: [2200, 2299]
      },
      {
        id: 13,
        slug: 'silver_3',
        name: 'Silver III',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/silver_3.svg'),
          png: getRankAssetURL('/v3/pngs/silver_3.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6bfRfsBkj3U7C8TZcQf8eT/01188630787ab3e04acb89abd4f60e40/R6S_RANK_500x500_Silver_03.png',
        range: [2300, 2399]
      },
      {
        id: 14,
        slug: 'silver_2',
        name: 'Silver II',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/silver_2.svg'),
          png: getRankAssetURL('/v3/pngs/silver_2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/0PLZUFs3fqKBTLh1gYyY8/7cabc5ba4522f725583faac165ff5130/R6S_RANK_500x500_Silver_02.png',
        range: [2400, 2499]
      },
      {
        id: 15,
        slug: 'silver_1',
        name: 'Silver I',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/silver_1.svg'),
          png: getRankAssetURL('/v3/pngs/silver_1.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4guViAQud6vSRPWoWGUNyU/32b279721dcfb09d0668f7b6a15ae3ea/R6S_RANK_500x500_Silver_01.png',
        range: [2500, 2599]
      },
      {
        id: 16,
        slug: 'gold_3',
        name: 'Gold III',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/gold_3.svg'),
          png: getRankAssetURL('/v3/pngs/gold_3.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5o6FA0tOweqf2RMm6ly9ET/5cf7d4ce0465315dfa4012a6a84c428a/R6S_RANK_500x500_GOLD_03.png',
        range: [2600, 2799]
      },
      {
        id: 17,
        slug: 'gold_2',
        name: 'Gold II',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/gold_2.svg'),
          png: getRankAssetURL('/v3/pngs/gold_2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/HQeTsDatqQRo9qW5KKs1x/4ba25d10cfb681d3347985a1125b69cf/R6S_RANK_500x500_GOLD_02.png',
        range: [2800, 2999]
      },
      {
        id: 18,
        slug: 'gold_1',
        name: 'Gold I',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/gold_1.svg'),
          png: getRankAssetURL('/v3/pngs/gold_1.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/8Mpi8OU4AnEh93pVcapyW/2b140e3caae994c8fa2255623cba323e/R6S_RANK_500x500_GOLD_01.png',
        range: [3000, 3199]
      },
      {
        id: 19,
        slug: 'platinum_3',
        name: 'Platinum III',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/platinum_3_v2.svg'),
          png: getRankAssetURL('/v3/pngs/platinum_3_v2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1NdqJyCZK86i3AnQwEvIlt/68ed7769e4098ec682e8c793f5121722/R6S_RANK_500x500_Platinum_03.png',
        range: [3200, 3599]
      },
      {
        id: 20,
        slug: 'platinum_2',
        name: 'Platinum II',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/platinum_2_v2.svg'),
          png: getRankAssetURL('/v3/pngs/platinum_2_v2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/54T8y7G0Yu6qniIliDAuWz/d7a8d760969db59b1608c255e1674a65/R6S_RANK_500x500_Platinum_02.png',
        range: [3600, 3999]
      },
      {
        id: 21,
        slug: 'platinum_1',
        name: 'Platinum I',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/platinum_1_v2.svg'),
          png: getRankAssetURL('/v3/pngs/platinum_1_v2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/70KhxbY7ZSilFgcMFIFKip/cb5435f1e0e59804f38496868d8e9369/R6S_RANK_500x500_Platinum_01.png',
        range: [4000, 4399]
      },
      {
        id: 22,
        slug: 'diamond',
        name: 'Diamond',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/diamond_1_v2.svg'),
          png: getRankAssetURL('/v3/pngs/diamond_1_v2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3IjRzUddD2cTrx6xdVXFmY/49195f3e71b2d5694b50524bfd8fd30c/R6S_RANK_500x500_Diamond_01.png',
        range: [4400, 4999]
      },
      {
        id: 23,
        slug: 'champions',
        name: 'Champion',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/champions_1.svg'),
          png: getRankAssetURL('/v3/pngs/champions_1.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/74IhNF2m0VsDiurjYt9Q58/deb07d428a4a25acd70c92f6c7fcfca4/R6S_RANK_500x500_Champions_01.png',
        range: [5000, 15000]
      }
    ]
  },
  // NOTE: v3 [23, 27] Removed Diamond, added Diamond III, Diamond II and Diamond I, change mmr
  {
    seasonsRange: [23, 27],
    ranks: [
      {
        id: 0,
        slug: 'unranked',
        name: 'Unranked',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/unranked.svg'),
          png: getRankAssetURL('/v3/pngs/unranked.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6HQlEdlInHQ2B2ZbHygp2x/cfa4500a6a30419d862a74736416e5fc/R6S_RANK_None_L.png',
        range: [0, 0]
      },
      {
        id: 1,
        slug: 'copper_5',
        name: 'Copper V',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/copper_5.svg'),
          png: getRankAssetURL('/v3/pngs/copper_5.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5xXGWX0lPNFRkTCbyxEdpn/43d9f77e44f14a694ce3790d470a59a5/R6S_RANK_500x500_Copper_05.png',
        range: [1, 1199]
      },
      {
        id: 2,
        slug: 'copper_4',
        name: 'Copper IV',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/copper_4.svg'),
          png: getRankAssetURL('/v3/pngs/copper_4.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4pYeN2wYLmCmSdGLASi91d/53bce6d8e2c764a497a89fb9437de557/R6S_RANK_500x500_Copper_04.png',
        range: [1200, 1299]
      },
      {
        id: 3,
        slug: 'copper_3',
        name: 'Copper III',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/copper_3.svg'),
          png: getRankAssetURL('/v3/pngs/copper_3.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/70gNBYSf1kU94v5PoXlHGZ/3ce45f73df5b6b4377dea1452afe70fc/R6S_RANK_500x500_Copper_03.png',
        range: [1300, 1399]
      },
      {
        id: 4,
        slug: 'copper_2',
        name: 'Copper II',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/copper_2.svg'),
          png: getRankAssetURL('/v3/pngs/copper_2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6b9igyYh2U1t5wqJmUSSVU/7ca8e07be18f2d1990201080582b0272/R6S_RANK_500x500_Copper_02.png',
        range: [1400, 1499]
      },
      {
        id: 5,
        slug: 'copper_1',
        name: 'Copper I',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/copper_1.svg'),
          png: getRankAssetURL('/v3/pngs/copper_1.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3r3jMDq2BCg20rrkHKzJVq/77a16bf4bb2e0dfb939bcec26559b17a/R6S_RANK_500x500_Copper_01.png',
        range: [1500, 1599]
      },
      {
        id: 6,
        slug: 'bronze_5',
        name: 'Bronze V',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/bronze_5.svg'),
          png: getRankAssetURL('/v3/pngs/bronze_5.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5tzRRjiEoyYDY0lUBWvLvP/25503d2ad74339122be6e61c0a5117e0/R6S_RANK_500x500_Bronze_05.png',
        range: [1600, 1699]
      },
      {
        id: 7,
        slug: 'bronze_4',
        name: 'Bronze IV',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/bronze_4.svg'),
          png: getRankAssetURL('/v3/pngs/bronze_4.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3fi46SbCqO8EfoR6Jij27d/c5f44a5e33e7b8091684e08da032d1df/R6S_RANK_500x500_Bronze_04.png',
        range: [1700, 1799]
      },
      {
        id: 8,
        slug: 'bronze_3',
        name: 'Bronze III',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/bronze_3.svg'),
          png: getRankAssetURL('/v3/pngs/bronze_3.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1JwqzCVjMarrUpcHNVF7vT/d5496a9ecdee4f6d85d5d3483e8a0571/R6S_RANK_500x500_Bronze_03.png',
        range: [1800, 1899]
      },
      {
        id: 9,
        slug: 'bronze_2',
        name: 'Bronze II',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/bronze_2.svg'),
          png: getRankAssetURL('/v3/pngs/bronze_2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/77VWoJQx9cwBSg2qFSLGMJ/6af35aafa4aa2bc93f69d43c5a223055/R6S_RANK_500x500_Bronze_02.png',
        range: [1900, 1999]
      },
      {
        id: 10,
        slug: 'bronze_1',
        name: 'Bronze I',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/bronze_1.svg'),
          png: getRankAssetURL('/v3/pngs/bronze_1.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4cEcVmkkoz590Tar0hFgFO/610dd4998bc6ec599310e4e19b6e428a/R6S_RANK_500x500_Bronze_01.png',
        range: [2000, 2099]
      },
      {
        id: 11,
        slug: 'silver_5',
        name: 'Silver V',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/silver_5.svg'),
          png: getRankAssetURL('/v3/pngs/silver_5.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3k0MFneuqkhrr2onZDNl2O/7f75189a087d8f783852175b9bab2654/R6S_RANK_500x500_Silver_05.png',
        range: [2100, 2199]
      },
      {
        id: 12,
        slug: 'silver_4',
        name: 'Silver IV',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/silver_4.svg'),
          png: getRankAssetURL('/v3/pngs/silver_4.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/27vGfJ0Gi45d88ggLJnnBN/ea1bdcf32846b049d94bea837319ce90/R6S_RANK_500x500_Silver_04.png',
        range: [2200, 2299]
      },
      {
        id: 13,
        slug: 'silver_3',
        name: 'Silver III',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/silver_3.svg'),
          png: getRankAssetURL('/v3/pngs/silver_3.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6bfRfsBkj3U7C8TZcQf8eT/01188630787ab3e04acb89abd4f60e40/R6S_RANK_500x500_Silver_03.png',
        range: [2300, 2399]
      },
      {
        id: 14,
        slug: 'silver_2',
        name: 'Silver II',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/silver_2.svg'),
          png: getRankAssetURL('/v3/pngs/silver_2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/0PLZUFs3fqKBTLh1gYyY8/7cabc5ba4522f725583faac165ff5130/R6S_RANK_500x500_Silver_02.png',
        range: [2400, 2499]
      },
      {
        id: 15,
        slug: 'silver_1',
        name: 'Silver I',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/silver_1.svg'),
          png: getRankAssetURL('/v3/pngs/silver_1.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4guViAQud6vSRPWoWGUNyU/32b279721dcfb09d0668f7b6a15ae3ea/R6S_RANK_500x500_Silver_01.png',
        range: [2500, 2599]
      },
      {
        id: 16,
        slug: 'gold_3',
        name: 'Gold III',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/gold_3.svg'),
          png: getRankAssetURL('/v3/pngs/gold_3.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5o6FA0tOweqf2RMm6ly9ET/5cf7d4ce0465315dfa4012a6a84c428a/R6S_RANK_500x500_GOLD_03.png',
        range: [2600, 2799]
      },
      {
        id: 17,
        slug: 'gold_2',
        name: 'Gold II',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/gold_2.svg'),
          png: getRankAssetURL('/v3/pngs/gold_2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/HQeTsDatqQRo9qW5KKs1x/4ba25d10cfb681d3347985a1125b69cf/R6S_RANK_500x500_GOLD_02.png',
        range: [2800, 2999]
      },
      {
        id: 18,
        slug: 'gold_1',
        name: 'Gold I',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/gold_1.svg'),
          png: getRankAssetURL('/v3/pngs/gold_1.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/8Mpi8OU4AnEh93pVcapyW/2b140e3caae994c8fa2255623cba323e/R6S_RANK_500x500_GOLD_01.png',
        range: [3000, 3199]
      },
      {
        id: 19,
        slug: 'platinum_3',
        name: 'Platinum III',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/platinum_3_v2.svg'),
          png: getRankAssetURL('/v3/pngs/platinum_3_v2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1NdqJyCZK86i3AnQwEvIlt/68ed7769e4098ec682e8c793f5121722/R6S_RANK_500x500_Platinum_03.png',
        range: [3200, 3499]
      },
      {
        id: 20,
        slug: 'platinum_2',
        name: 'Platinum II',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/platinum_2_v2.svg'),
          png: getRankAssetURL('/v3/pngs/platinum_2_v2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/54T8y7G0Yu6qniIliDAuWz/d7a8d760969db59b1608c255e1674a65/R6S_RANK_500x500_Platinum_02.png',
        range: [3500, 3799]
      },
      {
        id: 21,
        slug: 'platinum_1',
        name: 'Platinum I',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/platinum_1_v2.svg'),
          png: getRankAssetURL('/v3/pngs/platinum_1_v2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/70KhxbY7ZSilFgcMFIFKip/cb5435f1e0e59804f38496868d8e9369/R6S_RANK_500x500_Platinum_01.png',
        range: [3800, 4099]
      },
      {
        id: 22,
        slug: 'diamond_3',
        name: 'Diamond III',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/diamond_3_v2.svg'),
          png: getRankAssetURL('/v3/pngs/diamond_3_v2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2ynWMUUP5klIyABI8yTxyy/6e3ccec83add4e1f533d113652ef8bd0/R6S_RANK_500x500_Diamond_03.png',
        range: [4100, 4399]
      },
      {
        id: 23,
        slug: 'diamond_2',
        name: 'Diamond II',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/diamond_2_v2.svg'),
          png: getRankAssetURL('/v3/pngs/diamond_2_v2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1yXN9oMKkeAvgRFR7vZNo8/3b13403e09a674dfc4b5b6abde7154b9/R6S_RANK_500x500_Diamond_02.png',
        range: [4400, 4699]
      },
      {
        id: 24,
        slug: 'diamond_1',
        name: 'Diamond I',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/diamond_1_v2.svg'),
          png: getRankAssetURL('/v3/pngs/diamond_1_v2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3IjRzUddD2cTrx6xdVXFmY/49195f3e71b2d5694b50524bfd8fd30c/R6S_RANK_500x500_Diamond_01.png',
        range: [4700, 4999]
      },
      {
        id: 25,
        slug: 'champions',
        name: 'Champions',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/champions_1.svg'),
          png: getRankAssetURL('/v3/pngs/champions_1.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/74IhNF2m0VsDiurjYt9Q58/deb07d428a4a25acd70c92f6c7fcfca4/R6S_RANK_500x500_Champions_01.png',
        range: [5000, 15000]
      }
    ]
  },
  // NOTE: [28, Infinity] Ranked 2.0
  {
    seasonsRange: [28, Infinity],
    ranks: [
      {
        id: 0,
        slug: 'unranked',
        name: 'Unranked',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/unranked.svg'),
          png: getRankAssetURL('/v3/pngs/unranked.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6HQlEdlInHQ2B2ZbHygp2x/cfa4500a6a30419d862a74736416e5fc/R6S_RANK_None_L.png',
        range: [0, 999]
      },
      {
        id: 1,
        slug: 'copper_5',
        name: 'Copper V',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/copper_5.svg'),
          png: getRankAssetURL('/v3/pngs/copper_5.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5xXGWX0lPNFRkTCbyxEdpn/43d9f77e44f14a694ce3790d470a59a5/R6S_RANK_500x500_Copper_05.png',
        range: [1000, 1099]
      },
      {
        id: 2,
        slug: 'copper_4',
        name: 'Copper IV',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/copper_4.svg'),
          png: getRankAssetURL('/v3/pngs/copper_4.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4pYeN2wYLmCmSdGLASi91d/53bce6d8e2c764a497a89fb9437de557/R6S_RANK_500x500_Copper_04.png',
        range: [1100, 1199]
      },
      {
        id: 3,
        slug: 'copper_3',
        name: 'Copper III',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/copper_3.svg'),
          png: getRankAssetURL('/v3/pngs/copper_3.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/70gNBYSf1kU94v5PoXlHGZ/3ce45f73df5b6b4377dea1452afe70fc/R6S_RANK_500x500_Copper_03.png',
        range: [1200, 1299]
      },
      {
        id: 4,
        slug: 'copper_2',
        name: 'Copper II',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/copper_2.svg'),
          png: getRankAssetURL('/v3/pngs/copper_2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6b9igyYh2U1t5wqJmUSSVU/7ca8e07be18f2d1990201080582b0272/R6S_RANK_500x500_Copper_02.png',
        range: [1300, 1399]
      },
      {
        id: 5,
        slug: 'copper_1',
        name: 'Copper I',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/copper_1.svg'),
          png: getRankAssetURL('/v3/pngs/copper_1.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3r3jMDq2BCg20rrkHKzJVq/77a16bf4bb2e0dfb939bcec26559b17a/R6S_RANK_500x500_Copper_01.png',
        range: [1400, 1499]
      },
      {
        id: 6,
        slug: 'bronze_5',
        name: 'Bronze V',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/bronze_5.svg'),
          png: getRankAssetURL('/v3/pngs/bronze_5.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5tzRRjiEoyYDY0lUBWvLvP/25503d2ad74339122be6e61c0a5117e0/R6S_RANK_500x500_Bronze_05.png',
        range: [1500, 1599]
      },
      {
        id: 7,
        slug: 'bronze_4',
        name: 'Bronze IV',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/bronze_4.svg'),
          png: getRankAssetURL('/v3/pngs/bronze_4.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3fi46SbCqO8EfoR6Jij27d/c5f44a5e33e7b8091684e08da032d1df/R6S_RANK_500x500_Bronze_04.png',
        range: [1600, 1699]
      },
      {
        id: 8,
        slug: 'bronze_3',
        name: 'Bronze III',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/bronze_3.svg'),
          png: getRankAssetURL('/v3/pngs/bronze_3.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1JwqzCVjMarrUpcHNVF7vT/d5496a9ecdee4f6d85d5d3483e8a0571/R6S_RANK_500x500_Bronze_03.png',
        range: [1700, 1799]
      },
      {
        id: 9,
        slug: 'bronze_2',
        name: 'Bronze II',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/bronze_2.svg'),
          png: getRankAssetURL('/v3/pngs/bronze_2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/77VWoJQx9cwBSg2qFSLGMJ/6af35aafa4aa2bc93f69d43c5a223055/R6S_RANK_500x500_Bronze_02.png',
        range: [1800, 1899]
      },
      {
        id: 10,
        slug: 'bronze_1',
        name: 'Bronze I',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/bronze_1.svg'),
          png: getRankAssetURL('/v3/pngs/bronze_1.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4cEcVmkkoz590Tar0hFgFO/610dd4998bc6ec599310e4e19b6e428a/R6S_RANK_500x500_Bronze_01.png',
        range: [1900, 1999]
      },
      {
        id: 11,
        slug: 'silver_5',
        name: 'Silver V',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/silver_5.svg'),
          png: getRankAssetURL('/v3/pngs/silver_5.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3k0MFneuqkhrr2onZDNl2O/7f75189a087d8f783852175b9bab2654/R6S_RANK_500x500_Silver_05.png',
        range: [2000, 2099]
      },
      {
        id: 12,
        slug: 'silver_4',
        name: 'Silver IV',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/silver_4.svg'),
          png: getRankAssetURL('/v3/pngs/silver_4.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/27vGfJ0Gi45d88ggLJnnBN/ea1bdcf32846b049d94bea837319ce90/R6S_RANK_500x500_Silver_04.png',
        range: [2100, 2199]
      },
      {
        id: 13,
        slug: 'silver_3',
        name: 'Silver III',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/silver_3.svg'),
          png: getRankAssetURL('/v3/pngs/silver_3.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6bfRfsBkj3U7C8TZcQf8eT/01188630787ab3e04acb89abd4f60e40/R6S_RANK_500x500_Silver_03.png',
        range: [2200, 2299]
      },
      {
        id: 14,
        slug: 'silver_2',
        name: 'Silver II',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/silver_2.svg'),
          png: getRankAssetURL('/v3/pngs/silver_2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/0PLZUFs3fqKBTLh1gYyY8/7cabc5ba4522f725583faac165ff5130/R6S_RANK_500x500_Silver_02.png',
        range: [2300, 2399]
      },
      {
        id: 15,
        slug: 'silver_1',
        name: 'Silver I',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/silver_1.svg'),
          png: getRankAssetURL('/v3/pngs/silver_1.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4guViAQud6vSRPWoWGUNyU/32b279721dcfb09d0668f7b6a15ae3ea/R6S_RANK_500x500_Silver_01.png',
        range: [2400, 2499]
      },
      {
        id: 16,
        slug: 'gold_5',
        name: 'Gold V',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/gold_5.svg'),
          png: getRankAssetURL('/v3/pngs/gold_5.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/QWDG4I2KaxDN8s2nbaAIY/f1df73e40fe9172a209982dc85862a5b/RANK_L_Gold_05.png',
        range: [2500, 2599]
      },
      {
        id: 17,
        slug: 'gold_4',
        name: 'Gold IV',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/gold_4.svg'),
          png: getRankAssetURL('/v3/pngs/gold_4.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3DyVjCUoyPMWeckcLY0vac/1123b44d2b1241880fc3a03d2b87528b/R6S_RANK_500x500_GOLD_04.png',
        range: [2600, 2699]
      },
      {
        id: 18,
        slug: 'gold_3',
        name: 'Gold III',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/gold_3.svg'),
          png: getRankAssetURL('/v3/pngs/gold_3.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5o6FA0tOweqf2RMm6ly9ET/5cf7d4ce0465315dfa4012a6a84c428a/R6S_RANK_500x500_GOLD_03.png',
        range: [2700, 2799]
      },
      {
        id: 19,
        slug: 'gold_2',
        name: 'Gold II',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/gold_2.svg'),
          png: getRankAssetURL('/v3/pngs/gold_2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/HQeTsDatqQRo9qW5KKs1x/4ba25d10cfb681d3347985a1125b69cf/R6S_RANK_500x500_GOLD_02.png',
        range: [2800, 2899]
      },
      {
        id: 20,
        slug: 'gold_1',
        name: 'Gold I',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/gold_1.svg'),
          png: getRankAssetURL('/v3/pngs/gold_1.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/8Mpi8OU4AnEh93pVcapyW/2b140e3caae994c8fa2255623cba323e/R6S_RANK_500x500_GOLD_01.png',
        range: [2900, 2999]
      },
      {
        id: 21,
        slug: 'platinum_5',
        name: 'Platinum V',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/platinum_5_v2.svg'),
          png: getRankAssetURL('/v3/pngs/platinum_5_v2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/34rzcrjmv7kTlpdSAiK91w/a76cd67c25fd03c054ecb81da7bb79e7/RANK_L_Platinum_05.png',
        range: [3000, 3099]
      },
      {
        id: 22,
        slug: 'platinum_4',
        name: 'Platinum IV',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/platinum_4_v2.svg'),
          png: getRankAssetURL('/v3/pngs/platinum_4_v2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/KboXrHzOXnNmVDw9dZIQK/b010a2f60eeeb43538e2cfbab04522ae/RANK_L_Platinum_04.png',
        range: [3100, 3199]
      },
      {
        id: 23,
        slug: 'platinum_3',
        name: 'Platinum III',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/platinum_3_v2.svg'),
          png: getRankAssetURL('/v3/pngs/platinum_3_v2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1NdqJyCZK86i3AnQwEvIlt/68ed7769e4098ec682e8c793f5121722/R6S_RANK_500x500_Platinum_03.png',
        range: [3200, 3299]
      },
      {
        id: 24,
        slug: 'platinum_2',
        name: 'Platinum II',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/platinum_2_v2.svg'),
          png: getRankAssetURL('/v3/pngs/platinum_2_v2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/54T8y7G0Yu6qniIliDAuWz/d7a8d760969db59b1608c255e1674a65/R6S_RANK_500x500_Platinum_02.png',
        range: [3300, 3399]
      },
      {
        id: 25,
        slug: 'platinum_1',
        name: 'Platinum I',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/platinum_1_v2.svg'),
          png: getRankAssetURL('/v3/pngs/platinum_1_v2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/70KhxbY7ZSilFgcMFIFKip/cb5435f1e0e59804f38496868d8e9369/R6S_RANK_500x500_Platinum_01.png',
        range: [3400, 3499]
      },
      {
        id: 26,
        slug: 'emerald_5',
        name: 'Emerald V',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/emerald_5.svg'),
          png: getRankAssetURL('/v3/pngs/emerald_5.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4hFSvSc15uLtaD1JpdGU7o/862f708000f9aaf7af826d3c7ce62a59/RANK_L_Emerald_05.png',
        range: [3500, 3599]
      },
      {
        id: 27,
        slug: 'emerald_4',
        name: 'Emerald IV',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/emerald_4.svg'),
          png: getRankAssetURL('/v3/pngs/emerald_4.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2zmV0O10gNbByMyzlMXzbT/474afcae3d11d84d18142a346af45379/RANK_L_Emerald_04.png',
        range: [3600, 3699]
      },
      {
        id: 28,
        slug: 'emerald_3',
        name: 'Emerald III',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/emerald_3.svg'),
          png: getRankAssetURL('/v3/pngs/emerald_3.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7MBuaqz5oajIgUmE9kUr1s/f6eabf0d3d87ebaa5ae5631f66a9b3ce/RANK_L_Emerald_03.png',
        range: [3700, 3799]
      },
      {
        id: 29,
        slug: 'emerald_2',
        name: 'Emerald II',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/emerald_2.svg'),
          png: getRankAssetURL('/v3/pngs/emerald_2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4kJcmi35dwXD0PK208S298/c803a765a1ce460f9c55e59e0d39babb/RANK_L_Emerald_02.png',
        range: [3800, 3899]
      },
      {
        id: 30,
        slug: 'emerald_1',
        name: 'Emerald I',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/emerald_1.svg'),
          png: getRankAssetURL('/v3/pngs/emerald_1.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2ym7CvosvLJSzYeh36Kg4Y/03b5be0af023432864c6d35b0c31941c/RANK_L_Emerald_01.png',
        range: [3900, 3999]
      },
      {
        id: 31,
        slug: 'diamond_5',
        name: 'Diamond V',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/diamond_5_v2.svg'),
          png: getRankAssetURL('/v3/pngs/diamond_5_v2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6smyi29ojV5l6VT0R4TP16/ca905f9cb089def20219b21112acafb2/RANK_L_Diamond_05.png',
        range: [4000, 4099]
      },
      {
        id: 32,
        slug: 'diamond_4',
        name: 'Diamond IV',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/diamond_4_v2.svg'),
          png: getRankAssetURL('/v3/pngs/diamond_4_v2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/9HP5i6rjwstF5X5cd6T75/3642c7d8b02859a00122ed91ae113935/RANK_L_Diamond_04.png',
        range: [4100, 4199]
      },
      {
        id: 33,
        slug: 'diamond_3',
        name: 'Diamond III',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/diamond_3_v2.svg'),
          png: getRankAssetURL('/v3/pngs/diamond_3_v2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2ynWMUUP5klIyABI8yTxyy/6e3ccec83add4e1f533d113652ef8bd0/R6S_RANK_500x500_Diamond_03.png',
        range: [4200, 4299]
      },
      {
        id: 34,
        slug: 'diamond_2',
        name: 'Diamond II',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/diamond_2_v2.svg'),
          png: getRankAssetURL('/v3/pngs/diamond_2_v2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1yXN9oMKkeAvgRFR7vZNo8/3b13403e09a674dfc4b5b6abde7154b9/R6S_RANK_500x500_Diamond_02.png',
        range: [4300, 4399]
      },
      {
        id: 35,
        slug: 'diamond_1',
        name: 'Diamond I',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/diamond_1_v2.svg'),
          png: getRankAssetURL('/v3/pngs/diamond_1_v2.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3IjRzUddD2cTrx6xdVXFmY/49195f3e71b2d5694b50524bfd8fd30c/R6S_RANK_500x500_Diamond_01.png',
        range: [4400, 4499]
      },
      {
        id: 36,
        slug: 'champions',
        name: 'Champions',
        icon: {
          toSVG: async () => getRankSVGString('/v3/svgs/champions_1.svg'),
          png: getRankAssetURL('/v3/pngs/champions_1.png')
        },
        iconOfficial:
          'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/74IhNF2m0VsDiurjYt9Q58/deb07d428a4a25acd70c92f6c7fcfca4/R6S_RANK_500x500_Champions_01.png',
        range: [4500, Infinity]
      }
    ]
  }
] satisfies RankSeason[];
