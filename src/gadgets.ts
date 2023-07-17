import type { GadgetSlug, OperatorSide, SVGandPNG } from './types';
import { getAssetURL, parseSvgString } from './utils';
import deployableShieldIcon from './assets/gadgets/simple/svgs/deployable_shield.svg';
import nitroCellIcon from './assets/gadgets/simple/svgs/nitro_cell.svg';
import impactGrenadeIcon from './assets/gadgets/simple/svgs/impact_grenade.svg';
import barbedWireIcon from './assets/gadgets/simple/svgs/barbed_wire.svg';
import bulletproofCameraIcon from './assets/gadgets/simple/svgs/bulletproof_camera.svg';
import proximityAlarmIcon from './assets/gadgets/simple/svgs/proximity_alarm.svg';
import observationBlockerIcon from './assets/gadgets/simple/svgs/observation_blocker.svg';
import fragGrenadeIcon from './assets/gadgets/simple/svgs/frag_grenade.svg';
import smokeGrenadeIcon from './assets/gadgets/simple/svgs/smoke_grenade.svg';
import stunGrenadeIcon from './assets/gadgets/simple/svgs/stun_grenade.svg';
import claymoreIcon from './assets/gadgets/simple/svgs/claymore.svg';
import hardBreachChargeIcon from './assets/gadgets/simple/svgs/hard_breach_charge.svg';
import breachChargeIcon from './assets/gadgets/simple/svgs/breach_charge.svg';
import impactEmpGrenadeIcon from './assets/gadgets/simple/svgs/impact_emp_grenade.svg';

export const getGadgetAssetURL = (path: string) =>
  getAssetURL(`/gadgets${path}`);

export interface Gadget {
  slug: GadgetSlug;
  name: string;
  side: OperatorSide;
  amount: number;
  description: string;
  notes: string | null;
  icon: SVGandPNG;
  iconOfficial: string | null;
}

export const GADGETS = [
  {
    slug: 'deployable_shield',
    name: 'Deployable Shield',
    side: 'defense',
    amount: 1,
    description:
      'Bulletproof shield that\'s deployed on the ground or attached to doorframes to provide protective cover.',
    notes: null,
    icon: {
      svg: parseSvgString(deployableShieldIcon),
      png: getGadgetAssetURL('/simple/pngs/deployable_shield.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/W0WE0X2VQlxwWIAFCJ6Jm/523650a39de5a23dd9520d7299c9e25a/Deployable_Shield.png'
  },
  {
    slug: 'nitro_cell',
    name: 'Nitro Cell',
    side: 'defense',
    amount: 1,
    description:
      'Throwable C4 that sticks to surfaces and is manually detonated to create a large explosion.',
    notes: null,
    icon: {
      svg: parseSvgString(nitroCellIcon),
      png: getGadgetAssetURL('/simple/pngs/nitro_cell.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4pBSTw9U6l9GRnT12G6Xln/e0991bc03b48d217f510af8b611c8828/Nitro_Cell.png'
  },
  {
    slug: 'impact_grenade',
    name: 'Impact Grenade',
    side: 'defense',
    amount: 2,
    description:
      'Explosive grenade that detonates on impact to create entryways or line of sight in breakable surfaces.',
    notes: null,
    icon: {
      svg: parseSvgString(impactGrenadeIcon),
      png: getGadgetAssetURL('/simple/pngs/impact_grenade.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7iJK9B1Vr3PDO3rGftU00l/c3d8edc5564a80580e4ac2f9a4fc3937/Impact_Grenade.png'
  },
  {
    slug: 'barbed_wire',
    name: 'Barbed Wire',
    side: 'defense',
    amount: 2,
    description:
      'Non-damaging razor wire that slows opponents and creates noise when walked through.',
    notes: null,
    icon: {
      svg: parseSvgString(barbedWireIcon),
      png: getGadgetAssetURL('/simple/pngs/barbed_wire.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7igaibxuCcSpWDkZensEJS/bfa2cef52f3d860b7a06c2b4d7a6340e/Barbed_wire.png'
  },
  {
    slug: 'bulletproof_camera',
    name: 'Bulletproof Camera',
    side: 'defense',
    amount: 1,
    description:
      'Camera that sees through smoke and manually fires EMP bursts to deactivate opponent electronic devices.',
    notes:
      'EMP bursts has 1 charge and infinite reload with 8 seconds cooldown.',
    icon: {
      svg: parseSvgString(bulletproofCameraIcon),
      png: getGadgetAssetURL('/simple/pngs/bulletproof_camera.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/gZuOXvuTu2i8hQX0B6auy/259f379a6283bae618443d722a896f1a/Bulletproof_camera.png'
  },
  {
    slug: 'proximity_alarm',
    name: 'Proximity Alarm',
    side: 'defense',
    amount: 2,
    description:
      'Sensor that sticks to surfaces and sounds an alarm when it detects nearby opponents.',
    notes: null,
    icon: {
      svg: parseSvgString(proximityAlarmIcon),
      png: getGadgetAssetURL('/simple/pngs/proximity_alarm.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2TsFLmb2O6LRZpbxzkZDck/c9146913388a9567500b704c95600621/Proximity_alarm.png'
  },
  {
    slug: 'observation_blocker',
    name: 'Observation Blocker',
    side: 'defense',
    amount: 3,
    description:
      'Projects a screen that blocks the line of sight of opponent Observation Tools.',
    notes: 'Maximum width: 5m, height: 2.2m',
    icon: {
      svg: parseSvgString(observationBlockerIcon),
      png: getGadgetAssetURL('/simple/pngs/observation_blocker.png')
    },
    iconOfficial: null
  },
  {
    slug: 'frag_grenade',
    name: 'Frag Grenade',
    side: 'attack',
    amount: 2,
    description: 'Explosive grenade that detonates shortly after being thrown.',
    notes: null,
    icon: {
      svg: parseSvgString(fragGrenadeIcon),
      png: getGadgetAssetURL('/simple/pngs/frag_grenade.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4GZsPHbm9H0k5EWz7TMkwO/33b9007bc6ee03dab15cfa15eb69e096/Frag_Grenade.png'
  },
  {
    slug: 'smoke_grenade',
    name: 'Smoke Grenade',
    side: 'attack',
    amount: 2,
    description:
      'Non-damaging grenade that produces smoke shortly after being thrown to cover advances.',
    notes: null,
    icon: {
      svg: parseSvgString(smokeGrenadeIcon),
      png: getGadgetAssetURL('/simple/pngs/smoke_grenade.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3LaxoSLC49T5vgKnUAlTLT/c47c4636845a04478432c48be8c29aee/Smoke_Grenade.png'
  },
  {
    slug: 'stun_grenade',
    name: 'Stun Grenade',
    side: 'attack',
    amount: 3,
    description:
      'Non-damaging grenade that produces a flash explosion shortly after being thrown to disorient opponents.',
    notes: null,
    icon: {
      svg: parseSvgString(stunGrenadeIcon),
      png: getGadgetAssetURL('/simple/pngs/stun_grenade.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3XnK8s1iQJQu5cfr6UyQfK/429480b96d6d6d6b830c32c75d2608f5/Stun_Grenade.png'
  },
  {
    slug: 'claymore',
    name: 'Claymore',
    side: 'attack',
    amount: 2,
    description:
      'Explosive trap that\'s deployed on the ground and is useful against roaming Defenders.',
    notes: null,
    icon: {
      svg: parseSvgString(claymoreIcon),
      png: getGadgetAssetURL('/simple/pngs/claymore.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4T4H5EJgUxorucGVtU2pkm/74fef324b89c220ce6426e8097f915b9/Claymore.png'
  },
  {
    slug: 'hard_breach_charge',
    name: 'Hard Breach Charge',
    side: 'attack',
    amount: 2,
    description:
      'Explosive device that automatically detonates to create entryways in breakable and reinforced surfaces.',
    notes: 'Takes 2 seconds to deploy on a wall and 4 seconds to detonate.',
    icon: {
      svg: parseSvgString(hardBreachChargeIcon),
      png: getGadgetAssetURL('/simple/pngs/hard_breach_charge.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3OvnVPWY1UyrDE913kU0a1/eae4b2a1584234ea2ff4ad6481239f3b/SecondaryBreacher.png'
  },
  {
    slug: 'breach_charge',
    name: 'Breach Charge',
    side: 'attack',
    amount: 3,
    description:
      'Explosive device that\'s deployed on breakable surfaces and is manually detonated to create an entryway.',
    notes: null,
    icon: {
      svg: parseSvgString(breachChargeIcon),
      png: getGadgetAssetURL('/simple/pngs/breach_charge.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1OgTMhyF1FBsSAo4njk26m/9881001e9db03a4806b2eea6007e4a1a/Breach_Charge.png'
  },
  {
    slug: 'impact_emp_grenade',
    name: 'Impact EMP Grenade',
    side: 'attack',
    amount: 2,
    description:
      'Non-damaging impact grenade that temporarily deactivates nearby opponent electronic devices.',
    notes:
      '1.8 meters spherical range, disables electronic gadgets for 9 seconds.',
    icon: {
      svg: parseSvgString(impactEmpGrenadeIcon),
      png: getGadgetAssetURL('/simple/pngs/emp_impact_grenade.png')
    },
    iconOfficial: null
  }
] satisfies Gadget[];
