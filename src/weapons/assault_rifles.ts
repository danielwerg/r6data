import { getWeaponAssetURL } from './utils';
import type { Weapon } from './types';

export const ASSAULT_RIFLES = [
  {
    slug: 'l85a2',
    name: 'L85A2',
    category: 'assault_rifle',
    description:
      'Assault rifle favored by S.A.S for medium to long range combat. Takes 5.56x45mm rounds.',
    damage: 47,
    fireRate: 670,
    mobility: 50,
    capacity: 30,
    ammo: 241,
    reloadTime: { empty: 3.3, tactical: 2.7 },
    slot: 'primary',
    icon: {
      toSVG: null,
      png: getWeaponAssetURL('/pngs/l85a2.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5vYQpoyk36foDzDq49jBd0/1479a2d7189e545555ceccecf6bd7cc3/L85A2.png'
  },
  {
    slug: 'ar33',
    name: 'AR33',
    category: 'assault_rifle',
    description: 'Assault rifle used for medium-range encounters.',
    damage: 41,
    fireRate: 749,
    mobility: 50,
    capacity: 25,
    ammo: 201,
    reloadTime: { empty: 3.3, tactical: 2.6 },
    slot: 'primary',
    icon: {
      toSVG: null,
      png: getWeaponAssetURL('/pngs/ar33.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/16U6xEvX8I5xQd9duveBLN/45d22960872cfa3fb6be9eb47fa0be4e/AR33.png'
  },
  {
    slug: 'g36c',
    name: 'G36C',
    category: 'assault_rifle',
    description:
      'Assault rifle, with medium recoil. takes 5.56mm caliber ammunition.',
    damage: 38,
    fireRate: 780,
    mobility: 50,
    capacity: 30,
    ammo: 341,
    reloadTime: { empty: 3.3, tactical: 2.4 },
    slot: 'primary',
    icon: {
      toSVG: null,
      png: getWeaponAssetURL('/pngs/g36c.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2SZoqSXKoNPvZFIJsFsDE5/cb109885bf19c8697abf832f10cfd9a6/G36C.png'
  },
  {
    slug: 'r4-c',
    name: 'R4-C',
    category: 'assault_rifle',
    description:
      'FBI SWAT standard issue assault rifle. Highly customizable, for medium to long range',
    damage: 39,
    fireRate: 860,
    mobility: 50,
    capacity: 30,
    ammo: 341,
    reloadTime: { empty: 3.4, tactical: 2.7 },
    slot: 'primary',
    icon: {
      toSVG: null,
      png: getWeaponAssetURL('/pngs/r4-c.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/dQbqK9VxczuiscwBDSkT8/777a062f6095dde0371eab5200dcb451/R4-C.png'
  },
  {
    slug: '556xi',
    name: '556XI',
    category: 'assault_rifle',
    description:
      'Short range assault rifle, with low to medium stopping power depending on the caliber.',
    damage: 47,
    fireRate: 690,
    mobility: 50,
    capacity: 30,
    ammo: 341,
    reloadTime: { empty: 3.7, tactical: 2.6 },
    slot: 'primary',
    icon: {
      toSVG: null,
      png: getWeaponAssetURL('/pngs/556xi.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2dgpAeAWb3SkZV7rxDbVdQ/fa32323256b7c6f8a1977d3f71e7d4b2/556xi.png'
  },
  {
    slug: 'f2',
    name: 'F2',
    category: 'assault_rifle',
    description:
      'Versatile assault rifle used for medium- to long-range encounters.',
    damage: 37,
    fireRate: 980,
    mobility: 50,
    capacity: 25,
    ammo: 201,
    reloadTime: { empty: 3.1, tactical: 2.4 },
    slot: 'primary',
    icon: {
      toSVG: null,
      png: getWeaponAssetURL('/pngs/f2.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5HTvw1cJInVAGxOLXR0war/2f142437f5c0944fdcfcce8a03c37676/F2.png'
  },
  {
    slug: 'ak-12',
    name: 'AK-12',
    category: 'assault_rifle',
    description:
      'Medium range assault rifle, medium to high stopping power based on caliber. Used by Spetsnaz.',
    damage: 40,
    fireRate: 850,
    mobility: 50,
    capacity: 30,
    ammo: 341,
    reloadTime: { empty: 3.4, tactical: 2.6 },
    slot: 'primary',
    icon: {
      toSVG: null,
      png: getWeaponAssetURL('/pngs/ak-12.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7KAZZgnpqD07y47jVVXEuh/e0d7e67101f8f966aa6e1c59e835454f/AK-12.png'
  },
  {
    slug: 'aug_a2',
    name: 'AUG A2',
    category: 'assault_rifle',
    description:
      'GSG 9\'s medium to long range assault rifle with a high rate of fire.',
    damage: 42,
    fireRate: 720,
    mobility: 50,
    capacity: 30,
    ammo: 341,
    reloadTime: { empty: 3.3, tactical: 2.6 },
    slot: 'primary',
    icon: {
      toSVG: null,
      png: getWeaponAssetURL('/pngs/aug_a2.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1eO39zRe8XxJXH1KZiIWhM/02049ced0fbfa630833e8b0d3c03de07/AUG_A2.png'
  },
  {
    slug: '552_commando',
    name: '552 Commando',
    category: 'assault_rifle',
    description:
      'Medium range carbine, 30 round magazine, medium penetration at optimal range, 690 rounds/min.',
    damage: 47,
    fireRate: 690,
    mobility: 50,
    capacity: 0,
    ammo: 341,
    reloadTime: { empty: 3.1, tactical: 2.4 },
    slot: 'primary',
    icon: {
      toSVG: null,
      png: getWeaponAssetURL('/pngs/552_commando.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1LT0N89YaOHvRwn3Pphr8K/02d4a3da9cda132d8201fd134f24fede/552_Commando.png'
  },
  {
    slug: '416-c_carbine',
    name: '416-C CARBINE',
    category: 'assault_rifle',
    description:
      'GSG 9 medium range 5.56 x 45mm caliber assault rifle, with high recoil and rate of fire.',
    damage: 38,
    fireRate: 740,
    mobility: 50,
    capacity: 25,
    ammo: 201,
    reloadTime: { empty: 3.4, tactical: 2.4 },
    slot: 'primary',
    icon: {
      toSVG: null,
      png: getWeaponAssetURL('/pngs/416-c_carbine.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2I86r2a2QD8EHTZVZnxcxy/2913450ba952a16c29fac1f5ce58ba1a/416-C_Carbine.png'
  },
  {
    slug: 'c8-sfw',
    name: 'C8-SFW',
    category: 'assault_rifle',
    description: 'Medium to long range assault rifle. takes 5.56mm ammunition.',
    damage: 40,
    fireRate: 837,
    mobility: 50,
    capacity: 30,
    ammo: 341,
    reloadTime: { empty: 2.9, tactical: 2.4 },
    slot: 'primary',
    icon: {
      toSVG: null,
      png: getWeaponAssetURL('/pngs/c8-sfw.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1itXpz2GnvdwwRyhX1SYa2/b58ff71048fa3bb5ed09d5d935dc90f4/C8-SFW.png'
  },
  {
    slug: 'mk17_cqb',
    name: 'MK17 CQB',
    category: 'assault_rifle',
    description:
      '7.62x51mm caliber assault rifle, adapted for close quarter operations, high damage and severe recoil.',
    damage: 40,
    fireRate: 585,
    mobility: 50,
    capacity: 20,
    ammo: 161,
    reloadTime: { empty: 3.1, tactical: 2.4 },
    slot: 'primary',
    icon: {
      toSVG: null,
      png: getWeaponAssetURL('/pngs/mk17_cqb.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4LytczDQmu0M63gO2WtCCm/331ef3b1938352ae71d7c0bd23de3596/Mk17_CQB.png'
  },
  {
    slug: 'para-308',
    name: 'PARA-308',
    category: 'assault_rifle',
    description:
      'BOPE PARA-308 is a more compact version of the battle proven FAL with high stopping power.',
    damage: 47,
    fireRate: 650,
    mobility: 50,
    capacity: 30,
    ammo: 341,
    reloadTime: { empty: 3.3, tactical: 2.6 },
    slot: 'primary',
    icon: {
      toSVG: null,
      png: getWeaponAssetURL('/pngs/para-308.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6ub8y2Cs5EYhVPfDWuVVkW/82ca131a41ee4ba2e0b75f2dc52ed9e3/PARA-308.png'
  },
  {
    slug: 'type-89',
    name: 'Type-89',
    category: 'assault_rifle',
    description: 'Classic assault rifle with medium stopping power.',
    damage: 40,
    fireRate: 850,
    mobility: 50,
    capacity: 20,
    ammo: 181,
    reloadTime: { empty: 3.3, tactical: 2.6 },
    slot: 'primary',
    icon: {
      toSVG: null,
      png: getWeaponAssetURL('/pngs/type-89.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7wLf325q9amF8bnVP1QGr0/2faff1a197f90dcded4472852a317d6b/Type-89.png'
  },
  {
    slug: 'c7e',
    name: 'C7E',
    category: 'assault_rifle',
    description:
      'Canadian assault rifle with both semi-automatic and fully automatic fire modes. Integrated heavy barrel for good recoil control.',
    damage: 42,
    fireRate: 800,
    mobility: 50,
    capacity: 30,
    ammo: 176,
    reloadTime: { empty: 2.7, tactical: 2 },
    slot: 'primary',
    icon: {
      toSVG: null,
      png: getWeaponAssetURL('/pngs/c7e.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/63vTDjkXeKq7rOoSBhoJD4/08603e6603d564e0fa38af9ec86b7c1f/C7E.png'
  },
  {
    slug: 'm762',
    name: 'M762',
    category: 'assault_rifle',
    description:
      'Effective medium-range AR with custom shoulder stock, front hand guard, and flat upper rail.',
    damage: 45,
    fireRate: 730,
    mobility: 50,
    capacity: 30,
    ammo: 241,
    reloadTime: { empty: 3.3, tactical: 2.6 },
    slot: 'primary',
    icon: {
      toSVG: null,
      png: getWeaponAssetURL('/pngs/m762.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4oWAgi7tgQP1Tq0HooRtye/9109a74921ee17610d4bd85a61582823/M762.png'
  },
  {
    slug: 'v308',
    name: 'V308',
    category: 'assault_rifle',
    description:
      'This battle rifle features the same famous system for mitigating muzzle rise seen in its .45 ACP cousin. It is fed from a 50-round drum.',
    damage: 44,
    fireRate: 700,
    mobility: 50,
    capacity: 50,
    ammo: 201,
    reloadTime: { empty: 3.3, tactical: 2.6 },
    slot: 'primary',
    icon: {
      toSVG: null,
      png: getWeaponAssetURL('/pngs/v308.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5YBZe76NUDO32eF66wW90g/488c315743d59230962a4d67618223d6/V308.png'
  },
  {
    slug: 'spear_.308',
    name: 'SPEAR .308',
    category: 'assault_rifle',
    description:
      'A Russian .308 bullpup prototype, composed almost entirely of polymers. It has impressive power and accuracy in a relatively compact format.',
    damage: 42,
    fireRate: 700,
    mobility: 50,
    capacity: 30,
    ammo: 241,
    reloadTime: { empty: 3.3, tactical: 2.4 },
    slot: 'primary',
    icon: {
      toSVG: null,
      png: getWeaponAssetURL('/pngs/spear_.308.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/29LjYuJ4s6yA8k9Uv2u28C/89ec812559e7d74b7c269279f4c46d92/Spear_.308.png'
  },
  {
    slug: 'm4',
    name: 'M4',
    category: 'assault_rifle',
    description:
      'This government-issued assault rifle has been customized with additional features.',
    damage: 44,
    fireRate: 750,
    mobility: 50,
    capacity: 30,
    ammo: 181,
    reloadTime: { empty: 3.4, tactical: 2.6 },
    slot: 'primary',
    icon: {
      toSVG: null,
      png: getWeaponAssetURL('/pngs/m4.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3jhi90ycmuc8mAiuSXFoCi/bcf354459e7becd6ede52ee97917c832/M4.png'
  },
  {
    slug: 'ak-74m',
    name: 'AK-74M',
    category: 'assault_rifle',
    description:
      'This more recent variant of the most manufactured gun fires a lighter caliber than its predecessor. Provides adequate range and rate of fire.',
    damage: 44,
    fireRate: 650,
    mobility: 50,
    capacity: 40,
    ammo: 281,
    reloadTime: { empty: 3.4, tactical: 2.6 },
    slot: 'primary',
    icon: {
      toSVG: null,
      png: getWeaponAssetURL('/pngs/ak-74m.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1j5HiQP8aFphTe65fqDdg0/23eecb5c603c5ba9f59fc6cbc5e4a531/AK-74M.png'
  },
  {
    slug: 'arx200',
    name: 'ARX200',
    category: 'assault_rifle',
    description:
      'Heavy hitting, low capacity assault rifle chambered in .308 NATO.',
    damage: 47,
    fireRate: 700,
    mobility: 50,
    capacity: 20,
    ammo: 181,
    reloadTime: { empty: 3.4, tactical: 2.6 },
    slot: 'primary',
    icon: {
      toSVG: null,
      png: getWeaponAssetURL('/pngs/arx200.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6VgkPBsr1WApI3rWc9kcM0/b18b8e25f3e951e8e722213f2ee59eb0/ARX200.png'
  },
  {
    slug: 'f90',
    name: 'F90',
    category: 'assault_rifle',
    description:
      'Highly modular Australian bullpup assault rifle, chambered in 5.56mm NATO.',
    damage: 38,
    fireRate: 780,
    mobility: 50,
    capacity: 30,
    ammo: 211,
    reloadTime: { empty: 3.1, tactical: 2.2 },
    slot: 'primary',
    icon: {
      toSVG: null,
      png: getWeaponAssetURL('/pngs/f90.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/62tE3th2ThcGHlrcqWkmEX/d69c9de199542e25fa55f6d293f15671/r6-operator-weapon-ar-f90.png'
  },
  {
    slug: 'commando_9',
    name: 'Commando 9',
    category: 'assault_rifle',
    description: 'AR Commando platform customized to 9mm.',
    damage: 36,
    fireRate: 780,
    mobility: 50,
    capacity: 25,
    ammo: 176,
    reloadTime: { empty: 2.5, tactical: 2 },
    slot: 'primary',
    icon: {
      toSVG: null,
      png: getWeaponAssetURL('/pngs/commando_9.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4P9dpUph5w3MSsLNnW6be/04baba24990fcb75a9c0bcfd01b7d190/Commando_9.png'
  },
  {
    slug: 'sc3000k',
    name: 'SC3000K',
    category: 'assault_rifle',
    description:
      'Forward ejecting bullpup rifle chambered in .300 Blackout, effective in short to medium range.',
    damage: 45,
    fireRate: 800,
    mobility: 50,
    capacity: 25,
    ammo: 176,
    reloadTime: { empty: 3.4, tactical: 2.6 },
    slot: 'primary',
    icon: {
      toSVG: null,
      png: getWeaponAssetURL('/pngs/sc3000k.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7x7eDTm2NNpfGiFMrfQqEX/9898e74c780537be3ca6d88db32ea21e/F2000.png'
  },
  {
    slug: 'pof-9',
    name: 'POF-9',
    category: 'assault_rifle',
    description:
      'Fully automatic, easy to handle assault rifle with high capacity 9mm magazines.',
    damage: 35,
    fireRate: 740,
    mobility: 50,
    capacity: 50,
    ammo: 201,
    reloadTime: { empty: 3.4, tactical: 2.6 },
    slot: 'primary',
    icon: {
      toSVG: null,
      png: getWeaponAssetURL('/pngs/pof9.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1bhuAox7U6aHN6UriXsAry/3c213cd27f5f64ba01a29b42e5b24ac5/POF9.png'
  }
] satisfies Weapon[];
