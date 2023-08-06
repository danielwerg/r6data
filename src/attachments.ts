import type {
  BarrelSlug,
  GripSlug,
  SVGandPNG,
  SightSlug,
  UnderBarrelSlug
} from './types';
import { getAssetURL, parseSvgString } from './utils';
/** --- */
import sightIcon from './assets/attachments/svgs/sight.svg';
import barrelIcon from './assets/attachments/svgs/barrel.svg';
import gripIcon from './assets/attachments/svgs/grip.svg';
import underBarrelIcon from './assets/attachments/svgs/under_barrel.svg';
import redDotAIcon from './assets/attachments/sights/svgs/red_dot_a.svg';
import redDotBIcon from './assets/attachments/sights/svgs/red_dot_b.svg';
import redDotCIcon from './assets/attachments/sights/svgs/red_dot_c.svg';
import redDotHandgunIcon from './assets/attachments/sights/svgs/red_dot_handgun.svg';
import holoAIcon from './assets/attachments/sights/svgs/holo_a.svg';
import holoBIcon from './assets/attachments/sights/svgs/holo_b.svg';
import holoCIcon from './assets/attachments/sights/svgs/holo_c.svg';
import holoDIcon from './assets/attachments/sights/svgs/holo_d.svg';
import reflexAIcon from './assets/attachments/sights/svgs/reflex_a.svg';
import reflexBIcon from './assets/attachments/sights/svgs/reflex_b.svg';
import reflexCIcon from './assets/attachments/sights/svgs/reflex_c.svg';
import reflexDIcon from './assets/attachments/sights/svgs/reflex_d.svg';
import scope1dot5xIcon from './assets/attachments/sights/svgs/scope_1.5x.svg';
import scope2dot0xIcon from './assets/attachments/sights/svgs/scope_2.0x.svg';
import scope2dot5xAIcon from './assets/attachments/sights/svgs/scope_2.5x_a.svg';
import scope2dot5xBIcon from './assets/attachments/sights/svgs/scope_2.5x_b.svg';
import scope3dot0xIcon from './assets/attachments/sights/svgs/scope_3.0x.svg';
import scope3dot0xdot44MagIcon from './assets/attachments/sights/svgs/scope_3.0x_.44_mag.svg';
import flashHiderIcon from './assets/attachments/barrels/svgs/flash_hider.svg';
import compensatorIcon from './assets/attachments/barrels/svgs/compensator.svg';
import muzzleBrakeIcon from './assets/attachments/barrels/svgs/muzzle_brake.svg';
import suppressorIcon from './assets/attachments/barrels/svgs/suppressor.svg';
import extendedBarrelIcon from './assets/attachments/barrels/svgs/extended_barrel.svg';
import verticalGripIcon from './assets/attachments/grips/svgs/vertical_grip.svg';
import angledGripIcon from './assets/attachments/grips/svgs/angled_grip.svg';
import laserIcon from './assets/attachments/under_barrels/svgs/laser.svg';

export const getAttachmentAssetURL = (path: string) =>
  getAssetURL(`/attachments${path}`);

export interface Attachment {
  slug: AttachmentSlug;
  name: string;
  icon: SVGandPNG;
}
export type AttachmentSlug = 'sight' | 'barrel' | 'grip' | 'under_barrel';

export const ATTACHMENTS = [
  {
    slug: 'sight',
    name: 'Sight',
    icon: {
      svg: parseSvgString(sightIcon),
      png: getAttachmentAssetURL('/pngs/sight.png')
    }
  },
  {
    slug: 'barrel',
    name: 'Barrel',
    icon: {
      svg: parseSvgString(barrelIcon),
      png: getAttachmentAssetURL('/pngs/barrel.png')
    }
  },
  {
    slug: 'grip',
    name: 'Grip',
    icon: {
      svg: parseSvgString(gripIcon),
      png: getAttachmentAssetURL('/pngs/grip.png')
    }
  },
  {
    slug: 'under_barrel',
    name: 'Under Barrel',
    icon: {
      svg: parseSvgString(underBarrelIcon),
      png: getAttachmentAssetURL('/pngs/under_barrel.png')
    }
  }
] satisfies Attachment[];

export interface Sight {
  slug: SightSlug;
  name: string;
  magnification: number;
  description: string;
  icon: SVGandPNG;
}

export const SIGHTS = [
  {
    slug: 'red_dot_a',
    name: 'Red Dot A',
    magnification: 1,
    description: 'Replaces iron sights with a 1x dot sight.',
    icon: {
      svg: parseSvgString(redDotAIcon),
      png: getAttachmentAssetURL('/sights/pngs/red_dot_a.png')
    }
  },
  {
    slug: 'red_dot_b',
    name: 'Red Dot B',
    magnification: 1,
    description: 'Replaces iron sights with a 1x dot sight.',
    icon: {
      svg: parseSvgString(redDotBIcon),
      png: getAttachmentAssetURL('/sights/pngs/red_dot_b.png')
    }
  },
  {
    slug: 'red_dot_c',
    name: 'Red Dot C',
    magnification: 1,
    description: 'Replaces iron sights with a 1x dot sight.',
    icon: {
      svg: parseSvgString(redDotCIcon),
      png: getAttachmentAssetURL('/sights/pngs/red_dot_c.png')
    }
  },
  {
    slug: 'red_dot_handgun',
    name: 'Red Dot Handgun',
    magnification: 1,
    description: 'Replaces iron sights with a 1x dot sight.',
    icon: {
      svg: parseSvgString(redDotHandgunIcon),
      png: getAttachmentAssetURL('/sights/pngs/red_dot_handgun.png')
    }
  },
  {
    slug: 'holo_a',
    name: 'Holo A',
    magnification: 1,
    description: 'Replaces iron sights with a holographic precision sight.',
    icon: {
      svg: parseSvgString(holoAIcon),
      png: getAttachmentAssetURL('/sights/pngs/holo_a.png')
    }
  },
  {
    slug: 'holo_b',
    name: 'Holo B',
    magnification: 1,
    description: 'Replaces iron sights with a holographic precision sight.',
    icon: {
      svg: parseSvgString(holoBIcon),
      png: getAttachmentAssetURL('/sights/pngs/holo_b.png')
    }
  },
  {
    slug: 'holo_c',
    name: 'Holo C',
    magnification: 1,
    description: 'Replaces iron sights with a holographic precision sight.',
    icon: {
      svg: parseSvgString(holoCIcon),
      png: getAttachmentAssetURL('/sights/pngs/holo_c.png')
    }
  },
  {
    slug: 'holo_d',
    name: 'Holo D',
    magnification: 1,
    description: 'Replaces iron sights with a holographic precision sight.',
    icon: {
      svg: parseSvgString(holoDIcon),
      png: getAttachmentAssetURL('/sights/pngs/holo_d.png')
    }
  },
  {
    slug: 'reflex_a',
    name: 'Reflex A',
    magnification: 1,
    description: 'Replaces iron sights with a 1x triangular reticle sight.',
    icon: {
      svg: parseSvgString(reflexAIcon),
      png: getAttachmentAssetURL('/sights/pngs/reflex_a.png')
    }
  },
  {
    slug: 'reflex_b',
    name: 'Reflex B',
    magnification: 1,
    description: 'Replaces iron sights with a 1x triangular reticle sight.',
    icon: {
      svg: parseSvgString(reflexBIcon),
      png: getAttachmentAssetURL('/sights/pngs/reflex_b.png')
    }
  },
  {
    slug: 'reflex_c',
    name: 'Reflex C',
    magnification: 1,
    description: 'Replaces iron sights with a 1x triangular reticle sight.',
    icon: {
      svg: parseSvgString(reflexCIcon),
      png: getAttachmentAssetURL('/sights/pngs/reflex_c.png')
    }
  },
  {
    slug: 'reflex_d',
    name: 'Reflex D',
    magnification: 1,
    description: 'Replaces iron sights with a 1x triangular reticle sight.',
    icon: {
      svg: parseSvgString(reflexDIcon),
      png: getAttachmentAssetURL('/sights/pngs/reflex_d.png')
    }
  },
  {
    slug: 'scope_1.5x',
    name: 'Scope 1.5x',
    magnification: 1.5,
    description: 'Provides a 1.5x magnification for long distance engagements.',
    icon: {
      svg: parseSvgString(scope1dot5xIcon),
      png: getAttachmentAssetURL('/sights/pngs/scope_1.5x.png')
    }
  },
  {
    slug: 'scope_2.0x',
    name: 'Scope 2.0x',
    magnification: 2,
    description: 'Provides a 2.0x magnification for long distance engagements.',
    icon: {
      svg: parseSvgString(scope2dot0xIcon),
      png: getAttachmentAssetURL('/sights/pngs/scope_2.0x.png')
    }
  },
  {
    slug: 'scope_2.5x_a',
    name: 'Scope 2.5x A',
    magnification: 2.5,
    description: 'Provides a 2.5x magnification for long distance engagements.',
    icon: {
      svg: parseSvgString(scope2dot5xAIcon),
      png: getAttachmentAssetURL('/sights/pngs/scope_2.5x_a.png')
    }
  },
  {
    slug: 'scope_2.5x_b',
    name: 'Scope 2.5x B',
    magnification: 2.5,
    description: 'Provides a 2.5x magnification for long distance engagements.',
    icon: {
      svg: parseSvgString(scope2dot5xBIcon),
      png: getAttachmentAssetURL('/sights/pngs/scope_2.5x_b.png')
    }
  },
  {
    slug: 'scope_3.0x',
    name: 'Scope 3.0x',
    magnification: 3,
    description: 'Provides a 3.0x magnification for long distance engagements.',
    icon: {
      svg: parseSvgString(scope3dot0xIcon),
      png: getAttachmentAssetURL('/sights/pngs/scope_3.0x.png')
    }
  },
  {
    slug: 'scope_3.0x_.44_mag',
    name: 'Scope 3.0x .44 Mag',
    magnification: 3,
    description: 'Provides a 3.0x magnification for long distance engagements.',
    icon: {
      svg: parseSvgString(scope3dot0xdot44MagIcon),
      png: getAttachmentAssetURL('/sights/pngs/scope_3.0x_.44_mag.png')
    }
  },
  // NOTE: Glaz's sight
  {
    slug: 'scope_4.0x',
    name: 'Scope 4.0x',
    magnification: 4,
    description: 'Provides a 4.0x magnification for long distance engagements.',
    icon: { svg: null, png: null }
  },
  // NOTE: Kali's sight
  {
    slug: 'scope_5.0x',
    name: 'Scope 5.0x',
    magnification: 5,
    description: 'Provides a 5.0x magnification for long distance engagements.',
    icon: { svg: null, png: null }
  },
  // NOTE: Kali's sight
  {
    slug: 'scope_12.0x',
    name: 'Scope 12.0x',
    magnification: 12,
    description:
      'Provides a 12.0x magnification for long distance engagements.',
    icon: { svg: null, png: null }
  }
] satisfies Sight[];

export interface Barrel {
  slug: BarrelSlug;
  name: string;
  description: string;
  icon: SVGandPNG;
}

export const BARRELS = [
  {
    slug: 'flash_hider',
    name: 'Flash Hider',
    description:
      'Reduces speed at which the muzzle moves upwards while shooting.',
    icon: {
      svg: parseSvgString(flashHiderIcon),
      png: getAttachmentAssetURL('/barrels/pngs/flash_hider.png')
    }
  },
  {
    slug: 'compensator',
    name: 'Compensator',
    description: 'Reduces horizontal movement while shooting.',
    icon: {
      svg: parseSvgString(compensatorIcon),
      png: getAttachmentAssetURL('/barrels/pngs/compensator.png')
    }
  },
  {
    slug: 'muzzle_brake',
    name: 'Muzzle Brake',
    description: 'Reduces the overall weapon kick of single shot firing.',
    icon: {
      svg: parseSvgString(muzzleBrakeIcon),
      png: getAttachmentAssetURL('/barrels/pngs/muzzle_brake.png')
    }
  },
  {
    slug: 'suppressor',
    name: 'Suppressor',
    description:
      'Removes muzzle flash, bullet trails are less visible, and the muffled sound reduces noise.',
    icon: {
      svg: parseSvgString(suppressorIcon),
      png: getAttachmentAssetURL('/barrels/pngs/suppressor.png')
    }
  },
  {
    slug: 'extended_barrel',
    name: 'Extended Barrel',
    description:
      'Reduces the rate of damage drop off, allowing you to deal more damage at long range. Increases weapon damage by 12%',
    icon: {
      svg: parseSvgString(extendedBarrelIcon),
      png: getAttachmentAssetURL('/barrels/pngs/extended_barrel.png')
    }
  }
] satisfies Barrel[];

export interface Grip {
  slug: GripSlug;
  name: string;
  description: string;
  icon: SVGandPNG;
}

export const GRIPS = [
  {
    slug: 'vertical_grip',
    name: 'Vertical Grip',
    description:
      'Reduces speed at which the muzzle moves upwards while shooting.',
    icon: {
      svg: parseSvgString(verticalGripIcon),
      png: getAttachmentAssetURL('/grips/pngs/vertical_grip.png')
    }
  },
  {
    slug: 'angled_grip',
    name: 'Angled Grip',
    description:
      'Angled grip that accelerates the transition between hip fire and ADS.',
    icon: {
      svg: parseSvgString(angledGripIcon),
      png: getAttachmentAssetURL('/grips/pngs/angled_grip.png')
    }
  }
] satisfies Grip[];

export interface UnderBarrel {
  slug: UnderBarrelSlug;
  name: string;
  description: string;
  icon: SVGandPNG;
}

export const UNDER_BARRELS = [
  {
    slug: 'laser',
    name: 'Laser',
    description: 'Mountable laser sight that increases hip fire accuracy.',
    icon: {
      svg: parseSvgString(laserIcon),
      png: getAttachmentAssetURL('/under-barrels/pngs/laser.png')
    }
  }
] satisfies UnderBarrel[];

export interface OpticColor {
  slug: OpticColorSlug;
  name: string;
  hexColorCode: `#${string}`;
}
export type OpticColorSlug =
  | 'default_defense'
  | 'default_attack'
  | 'light_blue'
  | 'blue'
  | 'turquoise'
  | 'green'
  | 'light_green'
  | 'yellow'
  | 'light_orange'
  | 'orange'
  | 'red'
  | 'purple'
  | 'white'
  | 'black';

export const OPTIC_COLORS = [
  {
    slug: 'default_defense',
    name: 'Default (Defense)',
    hexColorCode: '#0aff0f'
  },
  { slug: 'default_attack', name: 'Default (Attack)', hexColorCode: '#ff0b2f' },
  { slug: 'light_blue', name: 'Light Blue', hexColorCode: '#8de8e8' },
  { slug: 'blue', name: 'Blue', hexColorCode: '#0a01ff' },
  { slug: 'turquoise', name: 'Turquoise', hexColorCode: '#0affac' },
  { slug: 'green', name: 'Green', hexColorCode: '#0aff0f' },
  { slug: 'light_green', name: 'Light Green', hexColorCode: '#abff0a' },
  { slug: 'yellow', name: 'Yellow', hexColorCode: '#f7fc0a' },
  { slug: 'light_orange', name: 'Light Orange', hexColorCode: '#ffb60a' },
  { slug: 'orange', name: 'Orange', hexColorCode: '#ff932e' },
  { slug: 'red', name: 'Red', hexColorCode: '#ff0b2e' },
  { slug: 'purple', name: 'Purple', hexColorCode: '#ff0bff' },
  { slug: 'white', name: 'White', hexColorCode: '#ffffff' },
  { slug: 'black', name: 'Black', hexColorCode: '#0e0e0e' }
] satisfies OpticColor[];
