import type { SVGandPNG } from './types';
import { getAssetURL, getSVGString } from './utils';

export const getAttachmentSVGString = async (path: string) =>
  getSVGString(`/attachments/${path}`);
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
      toSVG: async () => getAttachmentSVGString('/svgs/sight.svg'),
      png: getAttachmentAssetURL('/pngs/sight.png')
    }
  },
  {
    slug: 'barrel',
    name: 'Barrel',
    icon: {
      toSVG: async () => getAttachmentSVGString('/svgs/barrel.svg'),
      png: getAttachmentAssetURL('/pngs/barrel.png')
    }
  },
  {
    slug: 'grip',
    name: 'Grip',
    icon: {
      toSVG: async () => getAttachmentSVGString('/svgs/grip.svg'),
      png: getAttachmentAssetURL('/pngs/grip.png')
    }
  },
  {
    slug: 'under_barrel',
    name: 'Under Barrel',
    icon: {
      toSVG: async () => getAttachmentSVGString('/svgs/under_barrel.svg'),
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
export type SightSlug =
  | 'red_dot_a'
  | 'red_dot_b'
  | 'red_dot_c'
  | 'red_dot_handgun'
  | 'holo_a'
  | 'holo_b'
  | 'holo_c'
  | 'holo_d'
  | 'reflex_a'
  | 'reflex_b'
  | 'reflex_c'
  | 'reflex_d'
  | 'scope_1.5x'
  | 'scope_2.0x'
  | 'scope_2.5x_a'
  | 'scope_2.5x_b'
  | 'scope_3.0x_.44_mag'
  | 'scope_3.0x'
  | 'scope_4.0x'
  | 'scope_5.0x'
  | 'scope_12.0x';

export const SIGHTS = [
  {
    slug: 'red_dot_a',
    name: 'Red Dot A',
    magnification: 1,
    description: 'Replaces iron sights with a 1x dot sight.',
    icon: {
      toSVG: async () => getAttachmentSVGString('/sights/svgs/red_dot_a.svg'),
      png: getAttachmentAssetURL('/sights/pngs/red_dot_a.png')
    }
  },
  {
    slug: 'red_dot_b',
    name: 'Red Dot B',
    magnification: 1,
    description: 'Replaces iron sights with a 1x dot sight.',
    icon: {
      toSVG: async () => getAttachmentSVGString('/sights/svgs/red_dot_b.svg'),
      png: getAttachmentAssetURL('/sights/pngs/red_dot_b.png')
    }
  },
  {
    slug: 'red_dot_c',
    name: 'Red Dot C',
    magnification: 1,
    description: 'Replaces iron sights with a 1x dot sight.',
    icon: {
      toSVG: async () => getAttachmentSVGString('/sights/svgs/red_dot_c.svg'),
      png: getAttachmentAssetURL('/sights/pngs/red_dot_c.png')
    }
  },
  {
    slug: 'red_dot_handgun',
    name: 'Red Dot Handgun',
    magnification: 1,
    description: 'Replaces iron sights with a 1x dot sight.',
    icon: {
      toSVG: async () =>
        getAttachmentSVGString('/sights/svgs/red_dot_handgun.svg'),
      png: getAttachmentAssetURL('/sights/pngs/red_dot_handgun.png')
    }
  },
  {
    slug: 'holo_a',
    name: 'Holo A',
    magnification: 1,
    description: 'Replaces iron sights with a holographic precision sight.',
    icon: {
      toSVG: async () => getAttachmentSVGString('/sights/svgs/holo_a.svg'),
      png: getAttachmentAssetURL('/sights/pngs/holo_a.png')
    }
  },
  {
    slug: 'holo_b',
    name: 'Holo B',
    magnification: 1,
    description: 'Replaces iron sights with a holographic precision sight.',
    icon: {
      toSVG: async () => getAttachmentSVGString('/sights/svgs/holo_b.svg'),
      png: getAttachmentAssetURL('/sights/pngs/holo_b.png')
    }
  },
  {
    slug: 'holo_c',
    name: 'Holo C',
    magnification: 1,
    description: 'Replaces iron sights with a holographic precision sight.',
    icon: {
      toSVG: async () => getAttachmentSVGString('/sights/svgs/holo_c.svg'),
      png: getAttachmentAssetURL('/sights/pngs/holo_c.png')
    }
  },
  {
    slug: 'holo_d',
    name: 'Holo D',
    magnification: 1,
    description: 'Replaces iron sights with a holographic precision sight.',
    icon: {
      toSVG: async () => getAttachmentSVGString('/sights/svgs/holo_d.svg'),
      png: getAttachmentAssetURL('/sights/pngs/holo_d.png')
    }
  },
  {
    slug: 'reflex_a',
    name: 'Reflex A',
    magnification: 1,
    description: 'Replaces iron sights with a 1x triangular reticle sight.',
    icon: {
      toSVG: async () => getAttachmentSVGString('/sights/svgs/reflex_a.svg'),
      png: getAttachmentAssetURL('/sights/pngs/reflex_a.png')
    }
  },
  {
    slug: 'reflex_b',
    name: 'Reflex B',
    magnification: 1,
    description: 'Replaces iron sights with a 1x triangular reticle sight.',
    icon: {
      toSVG: async () => getAttachmentSVGString('/sights/svgs/reflex_b.svg'),
      png: getAttachmentAssetURL('/sights/pngs/reflex_b.png')
    }
  },
  {
    slug: 'reflex_c',
    name: 'Reflex C',
    magnification: 1,
    description: 'Replaces iron sights with a 1x triangular reticle sight.',
    icon: {
      toSVG: async () => getAttachmentSVGString('/sights/svgs/reflex_c.svg'),
      png: getAttachmentAssetURL('/sights/pngs/reflex_c.png')
    }
  },
  {
    slug: 'reflex_d',
    name: 'Reflex D',
    magnification: 1,
    description: 'Replaces iron sights with a 1x triangular reticle sight.',
    icon: {
      toSVG: async () => getAttachmentSVGString('/sights/svgs/reflex_d.svg'),
      png: getAttachmentAssetURL('/sights/pngs/reflex_d.png')
    }
  },
  {
    slug: 'scope_1.5x',
    name: 'Scope 1.5x',
    magnification: 1.5,
    description: 'Provides a 1.5x magnification for long distance engagements.',
    icon: {
      toSVG: async () => getAttachmentSVGString('/sights/svgs/scope_1.5x.svg'),
      png: getAttachmentAssetURL('/sights/pngs/scope_1.5x.png')
    }
  },
  {
    slug: 'scope_2.0x',
    name: 'Scope 2.0x',
    magnification: 2,
    description: 'Provides a 2.0x magnification for long distance engagements.',
    icon: {
      toSVG: async () => getAttachmentSVGString('/sights/svgs/scope_2.0x.svg'),
      png: getAttachmentAssetURL('/sights/pngs/scope_2.0x.png')
    }
  },
  {
    slug: 'scope_2.5x_a',
    name: 'Scope 2.5x A',
    magnification: 2.5,
    description: 'Provides a 2.5x magnification for long distance engagements.',
    icon: {
      toSVG: async () =>
        getAttachmentSVGString('/sights/svgs/scope_2.5x_a.svg'),
      png: getAttachmentAssetURL('/sights/pngs/scope_2.5x_a.png')
    }
  },
  {
    slug: 'scope_2.5x_b',
    name: 'Scope 2.5x B',
    magnification: 2.5,
    description: 'Provides a 2.5x magnification for long distance engagements.',
    icon: {
      toSVG: async () =>
        getAttachmentSVGString('/sights/svgs/scope_2.5x_b.svg'),
      png: getAttachmentAssetURL('/sights/pngs/scope_2.5x_b.png')
    }
  },
  {
    slug: 'scope_3.0x_.44_mag',
    name: 'Scope 3.0x .44 Mag',
    magnification: 3,
    description: 'Provides a 3.0x magnification for long distance engagements.',
    icon: {
      toSVG: async () =>
        getAttachmentSVGString('/sights/svgs/scope_3.0x_.44_mag.svg'),
      png: getAttachmentAssetURL('/sights/pngs/scope_3.0x_.44_mag.png')
    }
  },
  {
    slug: 'scope_3.0x',
    name: 'Scope 3.0x',
    magnification: 3,
    description: 'Provides a 3.0x magnification for long distance engagements.',
    icon: {
      toSVG: async () => getAttachmentSVGString('/sights/svgs/scope_3.0x.svg'),
      png: getAttachmentAssetURL('/sights/pngs/scope_3.0x.png')
    }
  },
  // NOTE: Glaz sight
  {
    slug: 'scope_4.0x',
    name: 'Scope 4.0x',
    magnification: 4,
    description: 'Provides a 4.0x magnification for long distance engagements.',
    icon: { toSVG: null, png: null }
  },
  // NOTE: Kali sight
  {
    slug: 'scope_5.0x',
    name: 'Scope 5.0x',
    magnification: 5,
    description: 'Provides a 5.0x magnification for long distance engagements.',
    icon: { toSVG: null, png: null }
  },
  // NOTE: Kali sight
  {
    slug: 'scope_12.0x',
    name: 'Scope 12.0x',
    magnification: 12,
    description:
      'Provides a 12.0x magnification for long distance engagements.',
    icon: { toSVG: null, png: null }
  }
] satisfies Sight[];

export interface Barrel {
  slug: BarrelSlug;
  name: string;
  description: string;
  icon: SVGandPNG;
}
export type BarrelSlug =
  | 'flash_hider'
  | 'compensator'
  | 'muzzle_brake'
  | 'suppressor'
  | 'extended_barrel';

export const BARRELS = [
  {
    slug: 'flash_hider',
    name: 'Flash Hider',
    description:
      'Reduces speed at which the muzzle moves upwards while shooting.',
    icon: {
      toSVG: async () =>
        getAttachmentSVGString('/barrels/svgs/flash_hidder.svg'),
      png: getAttachmentAssetURL('/barrels/pngs/flash_hidder.png')
    }
  },
  {
    slug: 'compensator',
    name: 'Compensator',
    description: 'Reduces horizontal movement while shooting.',
    icon: {
      toSVG: async () =>
        getAttachmentSVGString('/barrels/svgs/compensator.svg'),
      png: getAttachmentAssetURL('/barrels/pngs/compensator.png')
    }
  },
  {
    slug: 'muzzle_brake',
    name: 'Muzzle Brake',
    description: 'Reduces the overall weapon kick of single shot firing.',
    icon: {
      toSVG: async () =>
        getAttachmentSVGString('/barrels/svgs/muzzle_brake.svg'),
      png: getAttachmentAssetURL('/barrels/pngs/muzzle_brake.png')
    }
  },
  {
    slug: 'suppressor',
    name: 'Suppressor',
    description:
      'Removes muzzle flash, bullet trails are less visible, and the muffled sound reduces noise.',
    icon: {
      toSVG: async () => getAttachmentSVGString('/barrels/svgs/suppressor.svg'),
      png: getAttachmentAssetURL('/barrels/pngs/suppressor.png')
    }
  },
  {
    slug: 'extended_barrel',
    name: 'Extended Barrel',
    description:
      'Reduces the rate of damage drop off, allowing you to deal more damage at long range. Increases weapon damage by 15%',
    icon: {
      toSVG: async () =>
        getAttachmentSVGString('/barrels/svgs/extended_barrel.svg'),
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
export type GripSlug = 'vertical_grip' | 'angled_grip';

export const GRIPS = [
  {
    slug: 'vertical_grip',
    name: 'Vertical Grip',
    description:
      'Reduces speed at which the muzzle moves upwards while shooting.',
    icon: {
      toSVG: async () =>
        getAttachmentSVGString('/grips/svgs/vertical_grip.svg'),
      png: getAttachmentAssetURL('/grips/pngs/vertical_grip.png')
    }
  },
  {
    slug: 'angled_grip',
    name: 'Angled Grip',
    description:
      'Angled grip that accelerates the transition between hip fire and ADS.',
    icon: {
      toSVG: async () => getAttachmentSVGString('/grips/svgs/angled_grip.svg'),
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
export type UnderBarrelSlug = 'laser';

export const UNDER_BARRELS = [
  {
    slug: 'laser',
    name: 'Laser',
    description: 'Mountable laser sight that increases hip fire accuracy.',
    icon: {
      toSVG: async () => getAttachmentSVGString('/underBarrels/svgs/laser.svg'),
      png: getAttachmentAssetURL('/underBarrels/pngs/laser.png')
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
