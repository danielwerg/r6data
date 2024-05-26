import { getWeaponAssetURL } from './utils';
import type { Weapon } from './types';

export const SHIELDS = [
  {
    slug: 'le_roc_shield',
    name: 'Le Roc Shield',
    categorySlug: 'shield',
    subCategorySlug: [],
    description:
      'Can expand his Extendable Shield to offer full protection while standing.',
    damage: 0,
    fireRate: 0,
    mobility: 28,
    capacity: 0,
    ammo: 0,
    reloadTime: { empty: 0, tactical: 0 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/le_roc_shield.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4XLgMhsaiz20Gd5JJp80lW/40af7e3fafc77831bd761a02af83927c/Extendable-Shield.png'
  },
  {
    slug: 'ballistic_shield',
    name: 'Ballistic Shield',
    categorySlug: 'shield',
    subCategorySlug: [],
    description: 'Protective shield equipped with a secondary weapon.',
    damage: 0,
    fireRate: 0,
    mobility: 30,
    capacity: 0,
    ammo: 0,
    reloadTime: { empty: 0, tactical: 0 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/ballistic_shield.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2C21gwsjOka5Rwp8qSM5hA/a38937032260bce4f690fb9bb8adf4c0/Ballistic_Shield.png'
  },
  {
    slug: 'g52-tactical_shield',
    name: 'G52-Tactical Shield',
    categorySlug: 'shield',
    subCategorySlug: [],
    description:
      'Triggers the flash attached to his ballistic shield to temporarily blind enemies.',
    damage: 0,
    fireRate: 0,
    mobility: 30,
    capacity: 0,
    ammo: 0,
    reloadTime: { empty: 0, tactical: 0 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/g52-tactical_shield.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7qmWjGZayvK4t6E80Gvu7g/8b789d6d639744dce100c2cfb9709e6a/G52-Tactical_Shield.png'
  },
  {
    slug: 'cce_shield',
    name: 'CCE Shield',
    categorySlug: 'shield',
    subCategorySlug: [],
    description:
      'Extendable electro shield capable of slowing down enemies, causing damage over time.',
    damage: 5,
    fireRate: 20,
    mobility: 28,
    capacity: 0,
    ammo: 0,
    reloadTime: { empty: 0, tactical: 0 },
    slot: 'primary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/cce_shield.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5mmGgrYdJJHw2moBIEW9An/64e9727d959d7afdbb4fb06e2f75574a/CCE_Shield.png'
  }
] satisfies Weapon[];
