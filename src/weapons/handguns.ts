/* eslint-disable max-lines */
import { getWeaponAssetURL } from './utils';
import type { Weapon } from './types';

export const HANDGUNS = [
  {
    slug: 'p226_mk_25',
    name: 'P226 MK 25',
    category: 'handgun',
    description:
      'S.A.S. 9mm handgun with a large magazine. Packs a good punch for short to medium range assaults.',
    damage: 50,
    fireRate: 550,
    mobility: 45,
    capacity: 15,
    ammo: 97,
    reloadTime: { empty: 2.1, tactical: 1.8 },
    slot: 'secondary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/p226_mk_25.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/RTQvPQcywlRwUS1FjIKCX/6fc72fee2191c2e723276bc10ae4114e/P226_Mk_25.png'
  },
  {
    slug: 'm45_meusoc',
    name: 'M45 MEUSOC',
    category: 'handgun',
    description:
      'Semi-automatic, high caliber pistol with medium stopping power and an extended range.',
    damage: 58,
    fireRate: 550,
    mobility: 45,
    capacity: 7,
    ammo: 78,
    reloadTime: { empty: 1.9, tactical: 1.6 },
    slot: 'secondary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/m45_meusoc.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3u5cecgWYl3WuJK50mKEGd/a4a0eb15c710edfc0d29e98c2ee7ea33/M45_MEUSOC.png'
  },
  {
    slug: '5.7_usg',
    name: '5.7 USG',
    category: 'handgun',
    description:
      'Semi-automatic pistol with low-caliber, high-velocity rounds. Used by FBI SWAT.',
    damage: 42,
    fireRate: 550,
    mobility: 45,
    capacity: 20,
    ammo: 121,
    reloadTime: { empty: 2.4, tactical: 1.9 },
    slot: 'secondary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/5.7_usg.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/tkYcSAJSe5yGkeUhzZqBO/e81feb86df4a7eb6951052bec26b6ed7/5.7_USG.png'
  },
  {
    slug: 'p9',
    name: 'P9',
    category: 'handgun',
    description:
      '9mm hand gun favored by GIGN. Short to medium range. 16 round magazine.',
    damage: 45,
    fireRate: 550,
    mobility: 45,
    capacity: 16,
    ammo: 113,
    reloadTime: { empty: 2.1, tactical: 1.8 },
    slot: 'secondary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/p9.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6Fd1cl17KA0CtgodEiiY6v/d0f145ea72f2aacbd04260ba7d8f1c74/P9.png'
  },
  {
    slug: 'lfp586',
    name: 'LFP586',
    category: 'handgun',
    description:
      '.357 Magnum revolver, short to medium range handgun, with high stopping power and penetration.',
    damage: 78,
    fireRate: 550,
    mobility: 45,
    capacity: 6,
    ammo: 61,
    reloadTime: { empty: 4, tactical: 4 },
    slot: 'secondary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/lfp586.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1zc7UtdBfCZakwbiYqBvSz/1fd3f1584de38ca7c9315d498f094276/LFP586.png'
  },
  {
    slug: 'gsh-18',
    name: 'GSH-18',
    category: 'handgun',
    description:
      'Spetsnaz 9mm short range semi-automatic pistol, with low recoil and low damage.',
    damage: 44,
    fireRate: 550,
    mobility: 45,
    capacity: 18,
    ammo: 109,
    reloadTime: { empty: 2.3, tactical: 2.1 },
    slot: 'secondary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/gsh-18.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5s5Q33j3MNcXf9lwfxfd7m/4eb3a6af1d431481b6ddcec44fbc7602/GSh-18.png'
  },
  {
    slug: 'pmm',
    name: 'PMM',
    category: 'handgun',
    description:
      '9mm short range hand gun with high stopping power, favored by Spetsnaz.',
    damage: 61,
    fireRate: 550,
    mobility: 45,
    capacity: 8,
    ammo: 81,
    reloadTime: { empty: 1.9, tactical: 1.4 },
    slot: 'secondary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/pmm.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3y4LIwwm8YNQHAv8oOkWCK/a2375901cee34e68fa39c976d85de8aa/PMM.png'
  },
  {
    slug: 'p12',
    name: 'P12',
    category: 'handgun',
    description:
      '.45 caliber semi-automatic pistol that has a low recoil, best used in mid-range combat.',
    damage: 44,
    fireRate: 550,
    mobility: 45,
    capacity: 15,
    ammo: 106,
    reloadTime: { empty: 2.4, tactical: 1.9 },
    slot: 'secondary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/p12.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2mpM7rah7rwEW0bViIirUC/ed9caa4db58421519fa4db390b1aa164/P12.png'
  },
  {
    slug: 'mk1_9mm',
    name: 'MK1 9mm',
    category: 'handgun',
    description:
      'Standard issue 9mm hand gun. Effective from short to medium range with medium stopping power.',
    damage: 48,
    fireRate: 550,
    mobility: 45,
    capacity: 13,
    ammo: 105,
    reloadTime: { empty: 1.9, tactical: 1.6 },
    slot: 'secondary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/mk1_9mm.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3tWoNeF3jQYs3w4EOydQYs/434409c96693df1fd3e969d778e70795/Mk1_9mm_BI.png'
  },
  {
    slug: 'd-50',
    name: 'D-50',
    category: 'handgun',
    description:
      '.50 caliber pistol, short to medium range hand gun with heavy stopping power and penetration.',
    damage: 71,
    fireRate: 550,
    mobility: 45,
    capacity: 7,
    ammo: 64,
    reloadTime: { empty: 2.5, tactical: 2 },
    slot: 'secondary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/d-50.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6mMQRDsrComRFa7bC6cNkG/8cd17e545e3d28dcc11a040d000cfa16/D-50.png'
  },
  {
    slug: 'luison',
    name: 'Luison',
    category: 'handgun',
    description:
      'Unique PRB92 equipped with a custom suppressor. High knock-down power in close-quarter, but is non-lethal.',
    damage: 65,
    fireRate: 450,
    mobility: 45,
    capacity: 12,
    ammo: 91,
    reloadTime: { empty: 2.6, tactical: 1.9 },
    slot: 'secondary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/luison.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5cSDFUWb8P1BAQUgnTozeM/fd3a3348f42c95d6afa9f105ae23f2e5/Luison.png'
  },
  {
    slug: 'prb92',
    name: 'PRB92',
    category: 'handgun',
    description:
      'Standard issue 9mm hand gun. A classic sidearm, effective from short to medium range with medium stopping power.',
    damage: 42,
    fireRate: 450,
    mobility: 45,
    capacity: 15,
    ammo: 106,
    reloadTime: { empty: 2.6, tactical: 1.9 },
    slot: 'secondary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/prb92.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/dl28J1HsE7mzhj66pmd5D/b8d8fc48d2dde13154047de94abbd8ca/PRB92.png'
  },
  {
    slug: 'p229',
    name: 'P229',
    category: 'handgun',
    description:
      'A compact semi-automatic pistol with a large magazine. Best used at short to medium range.',
    damage: 51,
    fireRate: 550,
    mobility: 45,
    capacity: 12,
    ammo: 97,
    reloadTime: { empty: 2.1, tactical: 1.8 },
    slot: 'secondary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/p229.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/76ja0RxqzHW9PpvWgpG7Sk/cb753b50b20fe67deaef54d8b2a46b54/P229.png'
  },
  {
    slug: 'usp40',
    name: 'USP40',
    category: 'handgun',
    description:
      '.40 caliber semi-automatic pistol that has a low recoil, best used in mid-range combat.',
    damage: 48,
    fireRate: 550,
    mobility: 45,
    capacity: 12,
    ammo: 97,
    reloadTime: { empty: 2.1, tactical: 1.8 },
    slot: 'secondary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/usp40.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7FxemzWRtlpAhK9MyKp1Gp/817cc25b6b7c3575dc1ba53a6a8170a9/USP40.png'
  },
  {
    slug: 'q-929',
    name: 'Q-929',
    category: 'handgun',
    description:
      'This 9mm semi-automatic pistol is highly accurate and lightweight with low recoil.',
    damage: 60,
    fireRate: 550,
    mobility: 45,
    capacity: 10,
    ammo: 101,
    reloadTime: { empty: 2.1, tactical: 1.8 },
    slot: 'secondary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/q-929.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2fRVszR5yGDHbV0AL8muso/0838dac90b66aa810daa49d36382fb64/Q-929.png'
  },
  {
    slug: 'rg15',
    name: 'RG15',
    category: 'handgun',
    description:
      'Customized 9mm semi-automatic handgun, equipped with a Romeo1 Reflex.',
    damage: 38,
    fireRate: 550,
    mobility: 45,
    capacity: 15,
    ammo: 106,
    reloadTime: { empty: 2.4, tactical: 1.9 },
    slot: 'secondary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/rg15.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2LNSsp7B7wUnnPUweir7Jm/9f66d53be7a63a17a55253a0bea6eec1/RG15.png'
  },
  {
    slug: 'bailiff_410',
    name: 'Bailiff 410',
    category: 'handgun',
    description:
      'This .410 bore shotgun in a revolver package is a dual-caliber gun designed with a compact polymer body. It does medium damage with minimal spread.',
    damage: 30,
    fireRate: 485,
    mobility: 45,
    capacity: 5,
    ammo: 46,
    reloadTime: { empty: 3.6, tactical: 3.4 },
    slot: 'secondary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/bailiff_410.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/N8FLbo4fsNyBe8msKgRhT/8f403dc0b58087bcafab786dd95ba33f/Bailiff_410.png'
  },
  {
    slug: 'keratos_.357',
    name: 'Keratos .357',
    category: 'handgun',
    description:
      'Designed for high damage at a short-medium range, the vertically-inverted barrel alignment naturally reduces muzzle rise and recoil.',
    damage: 78,
    fireRate: 450,
    mobility: 45,
    capacity: 6,
    ammo: 61,
    reloadTime: { empty: 4, tactical: 4 },
    slot: 'secondary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/keratos_.357.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4niSMDCeiryoMBXJZq60Vv/48339331d05e289868cf4050c49b1b2b/D-40.png'
  },
  {
    slug: '1911_tacops',
    name: '1911 TACOPS',
    category: 'handgun',
    description:
      'This rugged .45 caliber pistol is a classic, but fitted with a custom grip.',
    damage: 55,
    fireRate: 450,
    mobility: 45,
    capacity: 8,
    ammo: 73,
    reloadTime: { empty: 2.2, tactical: 1.9 },
    slot: 'secondary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/1911_tacops.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/189UukZ6fVnvQR6LJtLYry/6eec29603d5b7b0ca8cab6ac0ef083ac/1911_TACOPS.png'
  },
  {
    slug: 'p-10c',
    name: 'P-10C',
    category: 'handgun',
    description: 'Semi-automatic, proven 9mm pistol with a red dot sight.',
    damage: 40,
    fireRate: 450,
    mobility: 45,
    capacity: 15,
    ammo: 106,
    reloadTime: { empty: 2.2, tactical: 1.9 },
    slot: 'secondary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/p-10c.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2l4qwB50zSFhFZVYRLNwqg/20df8114f69f96f2adc54779ccc5bbaa/P-10C.png'
  },
  {
    slug: '.44_mag_semi-auto',
    name: '.44 Mag Semi-Auto',
    category: 'handgun',
    description:
      'High powered, semi-automatic pistol with a small magazine and mounted low-power scope.',
    damage: 54,
    fireRate: 450,
    mobility: 45,
    capacity: 7,
    ammo: 71,
    reloadTime: { empty: 2.1, tactical: 1.8 },
    slot: 'secondary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/.44_mag_semi-auto.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6W3Jz0YcQzbZ6BOPr7VVel/4c67f342964132a652f7d5821e887050/.44_Mag_Semi-Auto.png'
  },
  {
    slug: 'sdp_9mm',
    name: 'SDP 9mm',
    category: 'handgun',
    description:
      'Special Duty Pistol, semi-automatic. A combination of Swiss engineering and American precision manufacturing.',
    damage: 47,
    fireRate: 450,
    mobility: 45,
    capacity: 16,
    ammo: 113,
    reloadTime: { empty: 2.2, tactical: 1.4 },
    slot: 'secondary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/sdp_9mm.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/Tgsdyz3XEqmgUYi9aZZgb/6755f4da7af7a7179ffab92acf8d477e/SDP_9mm.png'
  }
] satisfies Weapon[];
