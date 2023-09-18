import { getWeaponAssetURL } from './utils';
import type { Weapon } from './types';

export const MPS = [
  {
    slug: 'smg-11',
    name: 'SMG-11',
    category: 'mp',
    description:
      'Small sized submachine gun with a high rate of fire. Lethal package in disciplined hands.',
    damage: 35,
    fireRate: 1270,
    mobility: 50,
    capacity: 16,
    ammo: 113,
    reloadTime: { empty: 2.9, tactical: 2 },
    slot: 'secondary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/smg-11.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3WExw7Kepz9uAiWAbWW457/875fc631a3cf9fcc2849d9db2989cbcd/SMG-11.png'
  },
  {
    slug: 'bearing_9',
    name: 'Bearing 9',
    category: 'mp',
    description:
      'Short to medium range submachine gun with high rate of fire and mobility. Best used in close quarters.',
    damage: 33,
    fireRate: 1100,
    mobility: 50,
    capacity: 25,
    ammo: 126,
    reloadTime: { empty: 2.7, tactical: 1.9 },
    slot: 'secondary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/bearing_9.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4mdftEOh5Vu9KhhpgKLKrT/abedcc75868774018295ec2a08a7b3de/Bearing_9.png'
  },
  {
    slug: 'c75_auto',
    name: 'C75 Auto',
    category: 'mp',
    description:
      'Fully automatic pistol that is effective at short range, and uses a spare mag as foregrip for more control.',
    damage: 35,
    fireRate: 1000,
    mobility: 50,
    capacity: 26,
    ammo: 131,
    reloadTime: { empty: 2.7, tactical: 1.9 },
    slot: 'secondary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/c75_auto.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3wUuefwPjU705mZkTdJ9UH/8ccb11884cfa34c176ac5500af139177/C75_Auto.png'
  },
  {
    slug: 'smg-12',
    name: 'SMG-12',
    category: 'mp',
    description:
      'Customized machine pistol that is light, compact, and optimal at short range. Possesses a high rate of fire.',
    damage: 28,
    fireRate: 1270,
    mobility: 50,
    capacity: 32,
    ammo: 129,
    reloadTime: { empty: 3, tactical: 2 },
    slot: 'secondary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/smg-12.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/EwJgB7KdgOb6dDm7ro33u/b73f0890f992c1a365210f08efcc6db5/SMG-12.png'
  },
  {
    slug: 'spsmg9',
    name: 'SPSMG9',
    category: 'mp',
    description: 'Fully automatic 9mm machine pistol with a high rate of fire.',
    damage: 33,
    fireRate: 980,
    mobility: 50,
    capacity: 20,
    ammo: 121,
    reloadTime: { empty: 2.7, tactical: 2.2 },
    slot: 'secondary',
    icon: {
      svg: null,
      png: getWeaponAssetURL('/pngs/spsmg9.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5EtwSgylXckBNg4n6gDR9J/bc6fc6c5c12ae11da59aee95828ebd76/SPSMG9.png'
  }
] satisfies Weapon[];
