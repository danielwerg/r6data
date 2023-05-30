import type { Season } from './types';
import { getAssetURL, getISODate } from './utils';

export const getSeasonAssetURL = (path: string) =>
  getAssetURL(`/seasons${path}`);

export const SEASONS = [
  {
    id: 0,
    shorthand: 'Y0S0',
    slug: 'release',
    name: 'Release',
    hexColorCode: '#656261',
    thumbnail: getSeasonAssetURL('/y0s0.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/e1RaN16FOlCQAGUvGNKMW/abf69e597205b047c11db79f757843a0/Header_231334.png',
    releaseDate: getISODate('2015-12-01')
  },
  {
    id: 1,
    shorthand: 'Y1S1',
    slug: 'black_ice',
    name: 'Black Ice',
    hexColorCode: '#25768f',
    thumbnail: getSeasonAssetURL('/y1s1.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/67sZXc4UuXK2YPq8uj0mgE/6d0a5e1c6a342f5219cba2fc89e0ba14/r6s-seasons-y1s1.jpg',
    releaseDate: getISODate('2016-02-02')
  },
  {
    id: 2,
    shorthand: 'Y1S2',
    slug: 'dust_line',
    name: 'Dust Line',
    hexColorCode: '#997427',
    thumbnail: getSeasonAssetURL('/y1s2.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5u2ecpIe98X528KgYQiEt/5833e27e347176f5e041cc533d48ac95/r6s-seasons-y1s2.jpg',
    releaseDate: getISODate('2016-05-10')
  },
  {
    id: 3,
    shorthand: 'Y1S3',
    slug: 'skull_rain',
    name: 'Skull Rain',
    hexColorCode: '#396e2f',
    thumbnail: getSeasonAssetURL('/y1s3.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2X0s4QopJikcMNN4qg9KPS/5ef0ae117679ee7b1342c776a77c9dd4/r6s-seasons-y1s3.jpg',
    releaseDate: getISODate('2016-08-02')
  },
  {
    id: 4,
    shorthand: 'Y1S4',
    slug: 'red_crow',
    name: 'Red Crow',
    hexColorCode: '#971823',
    thumbnail: getSeasonAssetURL('/y1s4.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/66IKfs4aSnSkxaToTmmVBt/1532ccea8dd02b3ea44f254e4fdac27f/r6s-seasons-y1s4.jpg',
    releaseDate: getISODate('2016-11-17')
  },
  {
    id: 5,
    shorthand: 'Y2S1',
    slug: 'velvet_shell',
    name: 'Velvet Shell',
    hexColorCode: '#5b2676',
    thumbnail: getSeasonAssetURL('/y2s1.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5OKGWvBbiscdZNmjr0PP9q/f5cff0dae8546193f9601fcf703f7f0e/r6s-seasons-y2s1.jpg',
    releaseDate: getISODate('2017-02-07')
  },
  {
    id: 6,
    shorthand: 'Y2S2',
    slug: 'health',
    name: 'Health',
    hexColorCode: '#00408f',
    thumbnail: getSeasonAssetURL('/y2s2.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2w0kuPWW4vZS2MvHxpjgKL/527a78f482f03250f48ee05fabb843a9/r6s-seasons-y2s2.jpg',
    releaseDate: getISODate('2017-06-07')
  },
  {
    id: 7,
    shorthand: 'Y2S3',
    slug: 'blood_orchid',
    name: 'Blood Orchid',
    hexColorCode: '#a22b16',
    thumbnail: getSeasonAssetURL('/y2s3.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5Is8lRiLLAaU0Uaj46Bu5Z/d46a8652cdf16426b7c9a0d634442be5/r6s-seasons-y2s3.jpg',
    releaseDate: getISODate('2017-09-05')
  },
  {
    id: 8,
    shorthand: 'Y2S4',
    slug: 'white_noise',
    name: 'White Noise',
    hexColorCode: '#005136',
    thumbnail: getSeasonAssetURL('/y2s4.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6FvQKw65QzOqhVKxbjBg1Z/70ea9eb8865182504f74cfea10f88c0a/r6s-seasons-y2s4.jpg',
    releaseDate: getISODate('2017-12-05')
  },
  {
    id: 9,
    shorthand: 'Y3S1',
    slug: 'chimera',
    name: 'Chimera',
    hexColorCode: '#c18e00',
    thumbnail: getSeasonAssetURL('/y3s1.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/35ZyIYUW7odr1tiGyGNd8R/8a578688e5c46ed779a382c940bf270b/rainbow6siege-chimera-thumb_318068.jpg',
    releaseDate: getISODate('2018-03-06')
  },
  {
    id: 10,
    shorthand: 'Y3S2',
    slug: 'para_bellum',
    name: 'Para Bellum',
    hexColorCode: '#767f2e',
    thumbnail: getSeasonAssetURL('/y3s2.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/522ZBrBzlJMoTi63hrwuna/3f9007ceaa80b8110fa282937309ac1e/rainbow6siege_parabellum_thumb_323480.jpg',
    releaseDate: getISODate('2018-06-07')
  },
  {
    id: 11,
    shorthand: 'Y3S3',
    slug: 'grim_sky',
    name: 'Grim Sky',
    hexColorCode: '#36526e',
    thumbnail: getSeasonAssetURL('/y3s3.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4y07zikRXB4BcyRQy5Anoe/2e6de56c3ea34cadb300326102963340/rainbow6siege_grimsky_thumb_333789.jpg',
    releaseDate: getISODate('2018-09-04')
  },
  {
    id: 12,
    shorthand: 'Y3S4',
    slug: 'wind_bastion',
    name: 'Wind Bastion',
    hexColorCode: '#886a3f',
    thumbnail: getSeasonAssetURL('/y3s4.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1VeuGBLdSsadK5MdLfCL9k/b9e213c4aeb8dfe6e1f137968770912a/rainbow6siege_windbastion_thumb_340468.jpg',
    releaseDate: getISODate('2018-12-04')
  },
  {
    id: 13,
    shorthand: 'Y4S1',
    slug: 'burnt_horizon',
    name: 'Burnt Horizon',
    hexColorCode: '#a80048',
    thumbnail: getSeasonAssetURL('/y4s1.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4J2E0yJ2cZsKgx5OrFGkvR/0f966f31b3d8ad2ef13926b075769334/r6s-seasons-y4s1.jpg',
    releaseDate: getISODate('2019-03-06')
  },
  {
    id: 14,
    shorthand: 'Y4S2',
    slug: 'phantom_sight',
    name: 'Phantom Sight',
    hexColorCode: '#263677',
    thumbnail: getSeasonAssetURL('/y4s2.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/29ze1Zxf173boRuyaFHuQV/c240df821c3ec407b09118c68a1300c0/r6s-seasons-y4s2.jpg',
    releaseDate: getISODate('2019-06-11')
  },
  {
    id: 15,
    shorthand: 'Y4S3',
    slug: 'ember_rise',
    name: 'Ember Rise',
    hexColorCode: '#114f07',
    thumbnail: getSeasonAssetURL('/y4s3.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1JeHAGdUglVNSUUvSkxSia/1c8b76a4256091ca40434e89addaacf2/r6s-seasons-y4s3.jpg',
    releaseDate: getISODate('2019-09-11')
  },
  {
    id: 16,
    shorthand: 'Y4S4',
    slug: 'shifting_tides',
    name: 'Shifting Tides',
    hexColorCode: '#067e8f',
    thumbnail: getSeasonAssetURL('/y4s4.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6uZSbKGZiwF7Zv5egr4zks/5597030f075ad99c0a18a1dcea34ef87/r6s-seasons-y4s4.jpg',
    releaseDate: getISODate('2019-12-03')
  },
  {
    id: 17,
    shorthand: 'Y5S1',
    slug: 'void_edge',
    name: 'Void Edge',
    hexColorCode: '#755377',
    thumbnail: getSeasonAssetURL('/y5s1.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2584xuwMoCH1FJc9n34jLo/9dfec73fd217a889a7bfe66e1f412cd6/r6s-seasons-y5s1.jpg',
    releaseDate: getISODate('2020-03-10')
  },
  {
    id: 18,
    shorthand: 'Y5S2',
    slug: 'steel_wave',
    name: 'Steel Wave',
    hexColorCode: '#22667c',
    thumbnail: getSeasonAssetURL('/y5s2.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4soZ80QzL9WoLqvq8Hz647/d8d70312ec2849c276b459c3ef0482cd/r6s-seasons-y5s2.jpg',
    releaseDate: getISODate('2020-06-16')
  },
  {
    id: 19,
    shorthand: 'Y5S3',
    slug: 'shadow_legacy',
    name: 'Shadow Legacy',
    hexColorCode: '#56840e',
    // NOTE: https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5H87SAzADrzRmroVnJzuUE/5d17e86c99f1540c005b1d444c999314/r6s-seasons-y5s3.jpg
    thumbnail: getSeasonAssetURL('/y5s3.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5H87SAzADrzRmroVnJzuUE/2e73c489074b538055df0f793b4e1639/r6s-seasons-y5s3.jpg',
    releaseDate: getISODate('2020-09-10')
  },
  {
    id: 20,
    shorthand: 'Y5S4',
    slug: 'neon_dawn',
    name: 'Neon Dawn',
    hexColorCode: '#a73306',
    // NOTE: https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3vRTyOgSmwcUVxiOk60p3w/162504ce156ffdd6bc5f441d669ea079/r6s-seasons-y5s4.jpg
    thumbnail: getSeasonAssetURL('/y5s4.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3vRTyOgSmwcUVxiOk60p3w/e2f41521df1f67704dae051d147a32cc/r6s-seasons-y5s4.jpg',
    releaseDate: getISODate('2020-12-01')
  },
  {
    id: 21,
    shorthand: 'Y6S1',
    slug: 'crimson_heist',
    name: 'Crimson Heist',
    hexColorCode: '#8a0000',
    // NOTE: https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7iKoGngda7z0LyYpTT25zM/2ba16741ffa8a7d8b4629ed870d8a870/r6s-seasons-y6s1.jpg
    thumbnail: getSeasonAssetURL('/y6s1.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7iKoGngda7z0LyYpTT25zM/116efeb1c65cb9a356a3e9a42abe2ae3/R6_live_Y6S1_CrimsonHeist.jpg',
    releaseDate: getISODate('2021-03-16')
  },
  {
    id: 22,
    shorthand: 'Y6S2',
    slug: 'north_star',
    name: 'North Star',
    hexColorCode: '#007d98',
    // NOTE: https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/38Lml8ltnO932wLqhC5xEA/ea89df885372347170d9af1861d48d49/r6s-seasons-y6s2-main.jpg
    thumbnail: getSeasonAssetURL('/y6s2.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/38Lml8ltnO932wLqhC5xEA/493665084f757da8c91c01a0b99d2be3/r6s-seasons-y6s2.jpg',
    releaseDate: getISODate('2021-06-14')
  },
  {
    id: 23,
    shorthand: 'Y6S3',
    slug: 'crystal_guard',
    name: 'Crystal Guard',
    hexColorCode: '#cc8200',
    thumbnail: getSeasonAssetURL('/y6s3.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5Rm9sfgVTz9KdTI1Jh4N6w/c2d66a871b6311fe26198553695e0cd1/r6s-seasons-y6s3.jpg',
    releaseDate: getISODate('2021-09-07')
  },
  {
    id: 24,
    shorthand: 'Y6S4',
    slug: 'high_calibre',
    name: 'High Calibre',
    hexColorCode: '#465e1d',
    thumbnail: getSeasonAssetURL('/y6s4.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4ysWCYtrfV6yEC10unxDeM/cdeb45fc738b78da77bb611b14ae7973/r6s-seasons-y6s4.jpg',
    releaseDate: getISODate('2021-11-30')
  },
  {
    id: 25,
    shorthand: 'Y7S1',
    slug: 'demon_veil',
    name: 'Demon Veil',
    hexColorCode: '#b27400',
    thumbnail: getSeasonAssetURL('/y7s1.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6diil0gexoNXNCKtwpPPQZ/ace6f9e6e1e1578a2255ac0e5cb67b7c/r6s-seasons-y7s1.jpg',
    releaseDate: getISODate('2022-03-15')
  },
  {
    id: 26,
    shorthand: 'Y7S2',
    slug: 'vector_glare',
    name: 'Vector Glare',
    hexColorCode: '#60cdb0',
    thumbnail: getSeasonAssetURL('/y7s2.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6aBRsquEEKV2Ix2W7HK8P2/7a808507bcb933364d2dbcd6f80714fd/r6s-vectorglare-thumb.jpg',
    releaseDate: getISODate('2022-06-14')
  },
  {
    id: 27,
    shorthand: 'Y7S3',
    slug: 'brutal_swarm',
    name: 'Brutal Swarm',
    hexColorCode: '#dac925',
    thumbnail: getSeasonAssetURL('/y7s3.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/35vqSFGr4xn1JnNVetTsyh/e9c46f34157897dc96988432991a1e52/r6s-seasons-y7s3__2_.jpg',
    releaseDate: getISODate('2022-09-06')
  },
  {
    id: 28,
    shorthand: 'Y7S4',
    slug: 'solar_raid',
    name: 'Solar Raid',
    hexColorCode: '#d03314',
    thumbnail: getSeasonAssetURL('/y7s4.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1ZSXgYK6dLal6jI7JRN85T/7aa312f549948b8a19c9afb5fae12776/R6S_Live_Y7S4_SolarRaid_Keyart.jpg',
    releaseDate: getISODate('2022-12-06')
  },
  {
    id: 29,
    shorthand: 'Y8S1',
    slug: 'commanding_force',
    name: 'Commanding Force',
    hexColorCode: '#45abf3',
    thumbnail: getSeasonAssetURL('/y8s1.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3NK3eIKNUG118nXBY0Zskj/e682ab5abf93e5e4ba66de44b3ce1ed8/Y8S1_CommandingForce_IMG_MainKeyArt.jpg',
    releaseDate: getISODate('2023-03-07')
  },
  {
    id: 30,
    shorthand: 'Y8S2',
    slug: 'dread_factor',
    name: 'Dread Factor',
    hexColorCode: '#6432ef',
    thumbnail: getSeasonAssetURL('/y8s2.jpg'),
    thumbnailOfficial:
      'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4lkN2v7mOSsyHfr1vDdVM7/4f9323bed51c81e1db1bd8ce0f2c34f9/R6S_Live_Y8S2_DreadFactor.jpg',
    releaseDate: getISODate('2023-05-30')
  }
] satisfies Season[];
