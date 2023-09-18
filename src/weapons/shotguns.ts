/* eslint-disable max-lines */
import { getWeaponAssetURL } from './utils';
import type { Weapon } from './types';

export const SHOTGUNS = [
  {
    slug: 'm590a1',
    name: 'M590A1',
    category: 'shotgun',
    description:
      '12-gauge pump action shotgun favored by S.A.S. optimal at close range.',
    damage: 48,
    fireRate: 85,
    mobility: 50,
    capacity: 7,
    ammo: 50,
    reloadTime: { empty: 0, tactical: 0 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/m590a1.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2zRHmgqENNiZqXQxC9Rsbj/e6542407c642f9b7c5a4546afb6db30a/M590A1.png'
  },
  {
    slug: 'm1014',
    name: 'M1014',
    category: 'shotgun',
    description: 'Medium range semi-automatic shotgun. Lethal at close range.',
    damage: 28,
    fireRate: 200,
    mobility: 50,
    capacity: 8,
    ammo: 49,
    reloadTime: { empty: 0, tactical: 0 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/m1014.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2pUiVbwNnQnDTesmWXktqW/f27c1fab9a354bb89cbe309a688f5e02/M1014.png'
  },
  {
    slug: 'sg-cqb',
    name: 'SG-CQB',
    category: 'shotgun',
    description:
      'Compact pump action 12-gauge shotgun with close range stopping power. Favored by GIGN.',
    damage: 44,
    fireRate: 85,
    mobility: 50,
    capacity: 7,
    ammo: 43,
    reloadTime: { empty: 0, tactical: 0 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/sg-cqb.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5JoL3b36Fsztt9Q2XYmrbJ/dacec96948d3f8fe92914a69b9aac593/SG-CQB.png'
  },
  {
    slug: 'sasg-12',
    name: 'SASG-12',
    category: 'shotgun',
    description:
      'Semi-automatic shotgun, favored by Spetsnaz. Limited range, large spread decreases accuracy.',
    damage: 26,
    fireRate: 330,
    mobility: 50,
    capacity: 10,
    ammo: 61,
    reloadTime: { empty: 2.8, tactical: 3.4 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/sasg-12.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2Q6mL4CbifmIgifV2yV3Hi/2bb2b323f055b03a2c1ba516c262c24e/SASG-12.png'
  },
  {
    slug: 'm870',
    name: 'M870',
    category: 'shotgun',
    description:
      '12-gauge pump action shotgun, favored by GSG 9. Large barrel allows for enhanced range.',
    damage: 42,
    fireRate: 100,
    mobility: 50,
    capacity: 7,
    ammo: 50,
    reloadTime: { empty: 0, tactical: 0 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/m870.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2rkU6g4Rlg0e0U4rczWGTV/a51589a54c43f476d8eb984c0ea881e9/M870.png'
  },
  {
    slug: 'super_90',
    name: 'Super 90',
    category: 'shotgun',
    description:
      'Compact 12-gauge semi-automatic shotgun. Effective as a breach tool.',
    damage: 27,
    fireRate: 200,
    mobility: 50,
    capacity: 8,
    ammo: 49,
    reloadTime: { empty: 0, tactical: 0 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/super_90.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1TLWSu0xHJlAsfEfafeC9X/f9647e70a18962bf1627095c8b46832e/Super_90.png'
  },
  {
    slug: 'spas-12',
    name: 'SPAS-12',
    category: 'shotgun',
    description: 'Lightweight customizable 12-gauge semi-automatic shotgun.',
    damage: 31,
    fireRate: 200,
    mobility: 50,
    capacity: 7,
    ammo: 50,
    reloadTime: { empty: 0, tactical: 0 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/spas-12.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7Hp6Fbss6uI59OT4nZNB6e/a4d09954803cb2580353cfa03e8c778b/SPAS-12.png'
  },
  {
    slug: 'spas-15',
    name: 'SPAS-15',
    category: 'shotgun',
    description:
      'Magazine-fed, semi-automatic shotgun, bringing a modern twist on the SPAS 12.',
    damage: 24,
    fireRate: 290,
    mobility: 50,
    capacity: 6,
    ammo: 49,
    reloadTime: { empty: 3.2, tactical: 2.1 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/spas-15.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/CyofBgipHq4RTafvPFWd4/bc3d0ecc871b70e57735855f852efacf/SPAS-15.png'
  },
  {
    slug: 'supernova',
    name: 'Supernova',
    category: 'shotgun',
    description:
      'Compact pump action 12-gauge shotgun with extra ammunition capacity. Better recoil control than other pump action models.',
    damage: 48,
    fireRate: 75,
    mobility: 50,
    capacity: 7,
    ammo: 57,
    reloadTime: { empty: 0, tactical: 0 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/supernova.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2tpjCRFLcc3hogjJGbKDsi/5ad0ab63b7245022aca5c1c1fb42d473/SuperNova.png'
  },
  {
    slug: 'ita12l',
    name: 'ITA12L',
    category: 'shotgun',
    description:
      'Lightweight pump action 12-gauge shotgun with a 22" barrel. Packs a good punch.',
    damage: 41,
    fireRate: 85,
    mobility: 50,
    capacity: 8,
    ammo: 57,
    reloadTime: { empty: 0, tactical: 0 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/ita12l.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4Y6ziRzm9RiPii83fm8BV1/1f472744d2c2dec8d9206f4d8733d92c/ITA12L.png'
  },
  {
    slug: 'ita12s',
    name: 'ITA12S',
    category: 'shotgun',
    description:
      'Compact pump action 12-gauge shotgun with close range stopping power. Optimal for CQB.',
    damage: 29,
    fireRate: 85,
    mobility: 50,
    capacity: 5,
    ammo: 36,
    reloadTime: { empty: 0, tactical: 0 },
    slot: 'secondary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/ita12s.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5G4DroaSdqHzJWCe7qqbHZ/5dd2e03f853182c78a1e7fcbc642f0cf/ITA12S.png'
  },
  {
    slug: 'six12',
    name: 'SIX12',
    category: 'shotgun',
    description:
      'Compact 12-gauge bullpup double action revolver shotgun. Good for CQC and fast reload.',
    damage: 46,
    fireRate: 200,
    mobility: 50,
    capacity: 6,
    ammo: 55,
    reloadTime: { empty: 2.6, tactical: 2.6 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/six12.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2v6MwsHwjOZ5Muid53lyfN/e5f1c4997db93abfe3ac356fce23376c/SIX12.png'
  },
  {
    slug: 'six12_sd',
    name: 'SIX12 SD',
    category: 'shotgun',
    description:
      'This compact 12-gauge shotgun runs off a six round drum. Includes an integrated suppressor for stealth.',
    damage: 46,
    fireRate: 200,
    mobility: 50,
    capacity: 6,
    ammo: 55,
    reloadTime: { empty: 2.6, tactical: 2.6 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/six12_sd.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1GTua079Xbtkpjhx96sRsW/079ed1a71a0d12b5e48e1b0d40b87110/SIX12_SD.png'
  },
  {
    slug: 'fo-12',
    name: 'FO-12',
    category: 'shotgun',
    description:
      '12-gauge semi-automatic, mag-fed combat shotgun. Fast reload and optimal in CQC.',
    damage: 26,
    fireRate: 400,
    mobility: 50,
    capacity: 10,
    ammo: 71,
    reloadTime: { empty: 2.3, tactical: 3.3 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/fo-12.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4TDWnhbgvLkc6HBWDJp2ST/f50cbd83d6d295ab59f17f7e21d713bc/FO-12.png'
  },
  {
    slug: 'bosg.12.2',
    name: 'BOSG.12.2',
    category: 'shotgun',
    description:
      'Top break, over-under double-barrel shotgun. Long-range and in tactical configuration.',
    damage: 125,
    fireRate: 500,
    mobility: 50,
    capacity: 2,
    ammo: 61,
    reloadTime: { empty: 3, tactical: 2.4 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/bosg.12.2.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2ZjVndetsX8WEn5ZfyUQa0/e3a781be7eab22876d25f748e8fd0f5a/BOSG.12.2.png'
  },
  {
    slug: 'acs12',
    name: 'ACS12',
    category: 'shotgun',
    description:
      'This 12-gauge combat shotgun is fully automatic and drum-fed. Great for blasting holes in walls and possesses surprisingly low recoil and muzzle rise.',
    damage: 69,
    fireRate: 300,
    mobility: 50,
    capacity: 30,
    ammo: 121,
    reloadTime: { empty: 2.7, tactical: 2 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/acs12.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/13z63kT1NLzn1U99o7WC4T/8655d3200f24b87246c36f2622603457/ACS12_PB.png'
  },
  {
    slug: 'tcsg12',
    name: 'TCSG12',
    category: 'shotgun',
    description:
      'Semi-automatic shotgun with a 10-round magazine. Optimal for CQB and is suppressor capable.',
    damage: 63,
    fireRate: 450,
    mobility: 50,
    capacity: 10,
    ammo: 121,
    reloadTime: { empty: 3.2, tactical: 2.5 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/tcsg12.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2NDbY7BTBJ9R09LUilTlRf/3728337cd3ba14ed6ab9de0c22e879af/TCSG12.png'
  },
  {
    slug: 'super_shorty',
    name: 'Super Shorty',
    category: 'shotgun',
    description:
      'The high maneuverability of this shotgun makes up for its low capacity magazine.',
    damage: 35,
    fireRate: 85,
    mobility: 50,
    capacity: 3,
    ammo: 46,
    reloadTime: { empty: 0, tactical: 0 },
    slot: 'secondary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/super_shorty.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7Dq8LDmIxAveRqXM17orUW/cbd96b47cd8ca74a7827b16ef73fe7cf/r6-operator-weapon-sa-supershorty.png'
  }
] satisfies Weapon[];
