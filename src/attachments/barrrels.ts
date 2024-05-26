import type { BarrelSlug, SVGandPNG } from '../types';
import { parseSvgString } from '../utils';
import { getAttachmentAssetURL } from '.';
import flashHiderIcon from '../assets/attachments/barrels/svgs/flash_hider.svg';
import compensatorIcon from '../assets/attachments/barrels/svgs/compensator.svg';
import muzzleBrakeIcon from '../assets/attachments/barrels/svgs/muzzle_brake.svg';
import suppressorIcon from '../assets/attachments/barrels/svgs/suppressor.svg';
import extendedBarrelIcon from '../assets/attachments/barrels/svgs/extended_barrel.svg';

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
