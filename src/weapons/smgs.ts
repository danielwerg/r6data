/* eslint-disable max-lines */
import { getWeaponAssetURL } from './utils';
import type { Weapon } from './types';

export const SMGS = [
  {
    slug: 'fmg-9',
    name: 'FMG-9',
    category: 'smg',
    description:
      '9mm close to mid-range submachine gun with recoil and high rate of fire.',
    damage: 34,
    fireRate: 800,
    mobility: 50,
    capacity: 30,
    ammo: 181,
    reloadTime: { empty: 3, tactical: 2.2 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/fmg-9.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/0oneJNsBR06QjuowxwtHG/bd3b391c6eec2bd615f2ed83197a13ac/FMG-9.png'
  },
  {
    slug: 'mp5k',
    name: 'MP5K',
    category: 'smg',
    description: 'Close range 9mm submachine gun with a high rate of fire.',
    damage: 30,
    fireRate: 800,
    mobility: 50,
    capacity: 30,
    ammo: 181,
    reloadTime: { empty: 2.8, tactical: 2 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/mp5k.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1pk8nOI7ybQjYOSI4fuzOm/fcd78df0f729be545e75c09aae85c360/MP5K.png'
  },
  {
    slug: 'ump45',
    name: 'UMP45',
    category: 'smg',
    description: 'Submachine gun with high stopping power.',
    damage: 38,
    fireRate: 600,
    mobility: 50,
    capacity: 25,
    ammo: 176,
    reloadTime: { empty: 2.9, tactical: 2.4 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/ump45.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6X2EZPq2s8UKrP67uxz5FI/f0df4c57d5890c79311e4eb62d4470e7/UMP45.png'
  },
  {
    slug: 'mp5',
    name: 'MP5',
    category: 'smg',
    description:
      'Short to medium range submachine gun. High rate of fire and mobility. Favored by GIGN.',
    damage: 27,
    fireRate: 800,
    mobility: 50,
    capacity: 30,
    ammo: 181,
    reloadTime: { empty: 2.9, tactical: 2.2 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/mp5.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/60YbOvSBQt6ZUlu8YDXoZm/51ef3857b2986de700262432e8433714/MP5.png'
  },
  {
    slug: 'p90',
    name: 'P90',
    category: 'smg',
    description:
      'GIGN high-capacity submachine gun that uses high-velocity ammunition. Best in close quarters.',
    damage: 22,
    fireRate: 970,
    mobility: 50,
    capacity: 50,
    ammo: 251,
    reloadTime: { empty: 2.9, tactical: 2.4 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/p90.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4nGrNspOvII2oS3lEMkg5x/2398a493c298bc654f97c58767aa40f3/P90.png'
  },
  {
    slug: '9x19vsn',
    name: '9x19VSN',
    category: 'smg',
    description:
      'Close to mid-range 9mm submachine gun with high penetration. Favored by Spetsnaz.',
    damage: 34,
    fireRate: 750,
    mobility: 50,
    capacity: 30,
    ammo: 181,
    reloadTime: { empty: 3.2, tactical: 2.3 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/9x19vsn.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/42gH96xTTYaTZsfXI3c0wL/a7edbf11af97091ee884b68e59fe6a4f/9x19VSN.png'
  },
  {
    slug: 'mp7',
    name: 'MP7',
    category: 'smg',
    description:
      'Close to mid-range submachine gun with high penetration. Favored by GSG 9.',
    damage: 32,
    fireRate: 900,
    mobility: 50,
    capacity: 30,
    ammo: 181,
    reloadTime: { empty: 2.8, tactical: 2.2 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/mp7.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3a4dgTWGdiJqALhtRp4pKy/f2568d3de3cfe7e4b53179e8653cd2a2/MP7.png'
  },
  {
    slug: '9mm_c1',
    name: '9mm C1',
    category: 'smg',
    description:
      'Classic submachine gun. close to mid-range. Slower rate of fire, with medium stopping power.',
    damage: 36,
    fireRate: 575,
    mobility: 50,
    capacity: 34,
    ammo: 205,
    reloadTime: { empty: 2.6, tactical: 1.9 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/9mm_c1.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/60sbThKtOpNOwKu3OP0oGV/672fd9263f7786402a0d855273473a6f/9mm_C1.png'
  },
  {
    slug: 'mpx',
    name: 'MPX',
    category: 'smg',
    description:
      'Close to mid-range 9mm submachine gun, medium to high penetration.',
    damage: 26,
    fireRate: 830,
    mobility: 50,
    capacity: 30,
    ammo: 181,
    reloadTime: { empty: 3.1, tactical: 2.4 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/mpx.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5HFewpAJ8npDDCKFnEadhL/d398bb477d6b56fe41bfdb5862ed31c0/MPX.png'
  },
  {
    slug: 'm12',
    name: 'M12',
    category: 'smg',
    description:
      'Close to mid-range 9mm submachine gun with low recoil and a medium fire rate. Favored by BOPE.',
    damage: 40,
    fireRate: 550,
    mobility: 50,
    capacity: 30,
    ammo: 181,
    reloadTime: { empty: 3, tactical: 2.2 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/m12.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4FxqA5pa8JY9QQ7FEcjwPw/ffc779fcde5b970e7b95db6653637dab/M12.png'
  },
  {
    slug: 'mp5sd',
    name: 'MP5SD',
    category: 'smg',
    description:
      '9mm submachine gun with integrated sound suppressor and good recoil control.',
    damage: 30,
    fireRate: 800,
    mobility: 50,
    capacity: 30,
    ammo: 181,
    reloadTime: { empty: 2.9, tactical: 2.2 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/mp5sd.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5HaMldwFltBwiiyDDfkPpD/6de3aa9aaa17458e7f6186ba59b8deff/MP5SD.png'
  },
  {
    slug: 'vector_.45_acp',
    name: 'Vector .45 ACP',
    category: 'smg',
    description:
      'Submachine gun with unique proprietary recoil and a muzzle climb mitigation system.',
    damage: 23,
    fireRate: 1200,
    mobility: 50,
    capacity: 25,
    ammo: 176,
    reloadTime: { empty: 2.8, tactical: 2 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/vector_.45_acp.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7D1cDf13FqUhoLihzvuPln/068aa7e507155598449c58c0a49a90d6/Vector_.45_ACP.png'
  },
  {
    slug: 'pdw9',
    name: 'PDW9',
    category: 'smg',
    description:
      '9mm AR platform PDW, customized to offer Full-Automatic fire. Equipped with Drum magazine.',
    damage: 34,
    fireRate: 800,
    mobility: 50,
    capacity: 50,
    ammo: 301,
    reloadTime: { empty: 3.4, tactical: 2.6 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/pdw9.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4yYCuRnduMq35CTHfq6wwU/b7d49cdbcb05917e014c99efeaadd33b/PDW9.png'
  },
  {
    slug: 't-5_smg',
    name: 'T-5 SMG',
    category: 'smg',
    description:
      'This open bolt 9mm lightweight submachine gun has a high rate of fire.',
    damage: 28,
    fireRate: 900,
    mobility: 50,
    capacity: 30,
    ammo: 241,
    reloadTime: { empty: 3, tactical: 2.4 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/t-5_smg.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1Ne8bvX8BdCALevWKMllQN/4baa3e79d323de134dd182e0272b9c3b/T-5_SMG.png'
  },
  {
    slug: 'scorpion_evo_3_a1',
    name: 'Scorpion EVO 3 A1',
    category: 'smg',
    description: 'Lightweight 9mm carbine with a 40-round magazine.',
    damage: 29,
    fireRate: 1080,
    mobility: 50,
    capacity: 40,
    ammo: 251,
    reloadTime: { empty: 3, tactical: 2.1 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/scorpion_evo_3_a1.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6OdwaLWxcnFvhlVwWbP2Du/4f7e94bdb6d34d5c0aa7b7b147b4092e/Scorpion_EVO_3_A1.png'
  },
  {
    slug: 'k1a',
    name: 'K1A',
    category: 'smg',
    description:
      'Submachine gun in a compact AR package and caliber. Offers medium-range accuracy.',
    damage: 36,
    fireRate: 720,
    mobility: 50,
    capacity: 30,
    ammo: 341,
    reloadTime: { empty: 3, tactical: 2.7 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/k1a.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5mUa2p8WXbiyD71qUI8sGk/ed753b6f0ae30ab5737486dfcf32ee9f/K1A.png'
  },
  {
    slug: 'mx4_storm',
    name: 'Mx4 Storm',
    category: 'smg',
    description:
      'Renowned 9mm submachine gun in an elegant package that possesses a high rate of fire. An extended barrel upgrade increases its range.',
    damage: 26,
    fireRate: 950,
    mobility: 50,
    capacity: 30,
    ammo: 181,
    reloadTime: { empty: 3.1, tactical: 2.8 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/mx4_storm.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4qRh1frGkQZxNyeKA4D6n1/20f89cd1d9953f06207b7340ea77fb17/Mx4_Storm.png'
  },
  {
    slug: 'aug_a3',
    name: 'AUG A3',
    category: 'smg',
    description:
      'Assault rifle converted to a 9mm submachine gun. Possesses excellent range for an SMG.',
    damage: 36,
    fireRate: 700,
    mobility: 50,
    capacity: 31,
    ammo: 218,
    reloadTime: { empty: 3.3, tactical: 2.6 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/aug_a3.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3W9XJdMOgpHSw55HfwRSAv/cf8f220678d503e6c3e535c00b2e636a/AUG_A3.png'
  },
  {
    slug: 'p10_roni',
    name: 'P10 RONI',
    category: 'smg',
    description: 'Fully automatic PIO pistol in a RONI carbine conversion.',
    damage: 26,
    fireRate: 980,
    mobility: 50,
    capacity: 15,
    ammo: 181,
    reloadTime: { empty: 2.7, tactical: 1.7 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/p10_roni.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7K86OBjL3zmYWt0ZvUcCLj/16a947334e39f27da177d787773593e4/r6-operator-weapon-smg-p10roni.png'
  },
  {
    slug: 'uzk50gi',
    name: 'UZK50GI',
    category: 'smg',
    description:
      'Fully automatic SMG that fires .50 pistol cartridges with force.',
    damage: 36,
    fireRate: 700,
    mobility: 50,
    capacity: 22,
    ammo: 177,
    reloadTime: { empty: 2.9, tactical: 2.2 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/uzk50gi.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5WMIsPUWTXprZnAwctPsTt/f1c652b681e7e9ba6ba66bcd29e12a76/uzk50gi.png'
  }
] satisfies Weapon[];
