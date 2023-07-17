import { getWeaponAssetURL } from './utils';
import type { Weapon } from './types';

export const MARKSMANS = [
  {
    slug: '417',
    name: '417',
    category: 'marksman',
    description:
      'Semi-automatic marksman rifle with limited magazine capacity. Favored by GIGN.',
    damage: 69,
    fireRate: 450,
    mobility: 50,
    capacity: 20,
    ammo: 161,
    reloadTime: { empty: 3.3, tactical: 2.6 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/417.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5djkS4YtAtOF0vBmg0T60x/ea2b1ff7e5367e66c99bc7ad7e95bfe3/417.png'
  },
  {
    slug: 'ots-03',
    name: 'OTs-03',
    category: 'marksman',
    description:
      'Semi-automatic long range rifle with a very small magazine. Used by Spetsnaz.',
    damage: 71,
    fireRate: 380,
    mobility: 36,
    capacity: 15,
    ammo: 76,
    reloadTime: { empty: 3.4, tactical: 2.7 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/ots-03.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4fXznwDtLt61VCF8QIF4N3/34e2e6d6c33d4c504c945bdd13c322f6/OTs-03.png'
  },
  {
    slug: 'camrs',
    name: 'CAMRS',
    category: 'marksman',
    description:
      'Customizable semi-automatic long range designated marksman rifle, deals high damage.',
    damage: 69,
    fireRate: 450,
    mobility: 50,
    capacity: 20,
    ammo: 161,
    reloadTime: { empty: 3.4, tactical: 2.6 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/camrs.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4dBzqVVmnpv1DZi91LAnEN/e374b4ea289fc992280b943cdbb94d60/CAMRS.png'
  },
  {
    slug: 'sr-25',
    name: 'SR-25',
    category: 'marksman',
    description:
      'Highly customizable semi-automatic rifle. Effective from long to medium range.',
    damage: 61,
    fireRate: 450,
    mobility: 38,
    capacity: 20,
    ammo: 101,
    reloadTime: { empty: 3.5, tactical: 2.9 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/sr-25.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3H3sICdj6BK8LhtQPRd2aJ/26826ebba73e0e5fd503256d069f3256/SR-25.png'
  },
  {
    slug: 'mk_14_ebr',
    name: 'Mk 14 EBR',
    category: 'marksman',
    description:
      'Classic, hard-hitting .308 Battle Rifle in a lighter and shorter chassis. Effective in long-range battles, devastating short-range.',
    damage: 60,
    fireRate: 450,
    mobility: 50,
    capacity: 20,
    ammo: 101,
    reloadTime: { empty: 3.4, tactical: 3.1 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/mk_14_ebr.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6KIMqp5dA95z1RI3PrG9jv/eb939638169811a3fa858a44e6e5d97e/Mk_14_EBR.png'
  },
  {
    slug: 'ar-15.50',
    name: 'AR-15.50',
    category: 'marksman',
    description:
      'An AR-15 converted to a .50 caliber upper receiver. Its high caliber results in effective damage and incredible stopping power.',
    damage: 67,
    fireRate: 450,
    mobility: 50,
    capacity: 10,
    ammo: 71,
    reloadTime: { empty: 3.1, tactical: 2.2 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/ar-15.50.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4lGGEGZLkbldz114Wl5hCo/78a04c46654f80fae03e730bd79f3563/AR-15.50.png'
  },
  {
    slug: 'csrx_300',
    name: 'CSRX 300',
    category: 'marksman',
    description:
      'Straight-pull bolt-action custom built rifle, with integrated multi-zoom scope. Chambered in .300 Win Mag.',
    damage: 135,
    fireRate: 50,
    mobility: 50,
    capacity: 5,
    ammo: 36,
    reloadTime: { empty: 3.1, tactical: 2.5 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/csrx_300.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7tUB9ZNXJhdN6ejAkCEeFQ/99691bcc19f641cf872925905d08a539/CSRX_300.png'
  }
] satisfies Weapon[];
