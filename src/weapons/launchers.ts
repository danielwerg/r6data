import { getWeaponAssetURL } from './utils';
import type { Weapon } from './types';
import { parseSvgString } from '../utils';
import gonne6Icon from '../assets/weapons/detailed/svgs/gonne-6.svg';

export const LAUNCHERS = [
  {
    slug: 'gonne-6',
    name: 'GONNE-6',
    categorySlug: 'launcher',
    description:
      'Shoots explosive projectiles that detonate on impact with surfaces and destroy bulletproof gadgets.',
    damage: 10,
    fireRate: 0,
    mobility: 50,
    capacity: 1,
    ammo: 1,
    reloadTime: { empty: 0, tactical: 0 },
    slot: 'secondary',
    icon: {
      svg: parseSvgString(gonne6Icon),
      png: getWeaponAssetURL('/pngs/gonne-6.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/23AlSVw8MwI1y3ZakEfqgW/c4561ae6e8da8db2627a146b8b55ee6c/GONNE-6_HUD_Icon__1_.png'
  }
] satisfies Weapon[];
