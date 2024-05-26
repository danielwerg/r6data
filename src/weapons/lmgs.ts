import { getWeaponAssetURL } from './utils';
import type { Weapon } from './types';

// NOTE: Mobility while holding LMGS are 10% slower

export const LMGS = [
  {
    slug: '6p41',
    name: '6P41',
    categorySlug: 'lmg',
    subCategorySlug: [],
    description:
      'Spetsnaz LMG. accurate in short to medium range. Capable of long range controlled fire.',
    damage: 46,
    fireRate: 680,
    mobility: 50,
    capacity: 100,
    ammo: 301,
    reloadTime: { empty: 8.5, tactical: 8.5 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/6p41.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1wxS2HOCvoPAfnJEDFWjfw/7feddb98582ec37b500243d3f3e19eca/6P41.png'
  },
  {
    slug: 'g8a1',
    name: 'G8A1',
    categorySlug: 'lmg',
    subCategorySlug: [],
    description:
      'GSG 9 LMG; accurate in short to medium range. Capable of long-range controlled fire.',
    damage: 37,
    fireRate: 850,
    mobility: 50,
    capacity: 50,
    ammo: 251,
    reloadTime: { empty: 3.9, tactical: 3 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/g8a1.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4TIb7oeJesaROOOfTlCBaZ/ffd6a802f9a779a0d39b2122c49b3254/G8A1.png'
  },
  {
    slug: 'm249',
    name: 'M249',
    categorySlug: 'lmg',
    subCategorySlug: [],
    description:
      'Iconic LMG, accurate in medium range with high ammo capacity and efficient suppressive fire.',
    damage: 48,
    fireRate: 650,
    mobility: 50,
    capacity: 100,
    ammo: 301,
    reloadTime: { empty: 7.6, tactical: 7.6 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/m249.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7z8UpVPS3P14OC1oL9dDIn/39c0c657f154218003fd4b2a9250b92f/M249.png'
  },
  {
    slug: 't-95_lsw',
    name: 'T-95 LSW',
    categorySlug: 'lmg',
    subCategorySlug: [],
    description:
      'This custom 5.56x45mm caliber LMG is a portable powerhouse of automatic hardware.',
    damage: 46,
    fireRate: 650,
    mobility: 50,
    capacity: 80,
    ammo: 241,
    reloadTime: { empty: 3, tactical: 2 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/t-95_lsw.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/23HCxaNTRUHBlFAvCTMZQm/fe319cc164fac034a29e9b114ae7d5cb/T-95_LSW.png'
  },
  {
    slug: 'lmg-e',
    name: 'LMG-E',
    categorySlug: 'lmg',
    subCategorySlug: [],
    description:
      'Compact package belt-fed AR, with a 150 round box. Lays down a fierce medium-range suppressive fire.',
    damage: 41,
    fireRate: 720,
    mobility: 50,
    capacity: 150,
    ammo: 301,
    reloadTime: { empty: 6.5, tactical: 7.1 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/lmg-e.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7JVJIew6t3iKwgByvrFXyi/7ba44dfda28b525506633e453104a604/LMG-E.png'
  },
  {
    slug: 'alda_5.56',
    name: 'ALDA 5.56',
    categorySlug: 'lmg',
    subCategorySlug: [],
    description:
      'This belt-fed, 5.56 light support monster uses a specialized 80-round box to punish opposing forces.',
    damage: 35,
    fireRate: 900,
    mobility: 50,
    capacity: 80,
    ammo: 241,
    reloadTime: { empty: 5.7, tactical: 6.2 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/alda_5.56.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/39yB6TFl9ph6Rb4bDV4lqK/7f9b3abf8dff19bacc026a7212849ca4/ALDA_5.56.png'
  },
  {
    slug: 'm249_saw',
    name: 'M249 SAW',
    categorySlug: 'lmg',
    subCategorySlug: [],
    description:
      'Iconic LMG, accurate in medium range with high ammo capacity and efficient suppressive fire.',
    damage: 48,
    fireRate: 650,
    mobility: 50,
    capacity: 60,
    ammo: 241,
    reloadTime: { empty: 4.5, tactical: 3.3 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/m249_saw.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3p0oG7GsLIoHaRullf7xsF/e2a9e135af63e8897355023cd34538c4/M249_SAW.png'
  },
  {
    slug: 'dp27',
    name: 'DP27',
    categorySlug: 'lmg',
    subCategorySlug: [],
    description:
      'Light Machine Gun fed with a pan magazine, accurate in short to medium range. Its powerful 7.62x54 ammo makes it a highly destructive weapon.',
    damage: 60,
    fireRate: 550,
    mobility: 50,
    capacity: 70,
    ammo: 281,
    reloadTime: { empty: 4.6, tactical: 4 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/dp27.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7LoT7yAe0LK7bDOeq6MZZM/33995bc704667674af1b73fe962d4c7c/Primary_gun_DP27.png'
  }
] satisfies Weapon[];
