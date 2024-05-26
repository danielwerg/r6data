import type { GripSlug, SVGandPNG } from '../types';
import { parseSvgString } from '../utils';
import { getAttachmentAssetURL } from '.';
import verticalGripIcon from '../assets/attachments/grips/svgs/vertical_grip.svg';
import angledGripIcon from '../assets/attachments/grips/svgs/angled_grip.svg';
import horizontalGripIcon from '../assets/attachments/grips/svgs/horizontal_grip.svg';

export interface Grip {
  slug: GripSlug;
  name: string;
  description: string;
  notes: string | null;
  icon: SVGandPNG;
}

export const GRIPS = [
  {
    slug: 'vertical_grip',
    name: 'Vertical Grip',
    description:
      'Reduces speed at which the muzzle moves upwards while shooting.',
    notes: '+20% vertical recoil control.',
    icon: {
      svg: parseSvgString(verticalGripIcon),
      png: getAttachmentAssetURL('/grips/pngs/vertical_grip.png')
    }
  },
  {
    slug: 'angled_grip',
    name: 'Angled Grip',
    description: 'Reduces the time to reload a weapon.',
    notes: '+20% weapon reload speed.',
    icon: {
      svg: parseSvgString(angledGripIcon),
      png: getAttachmentAssetURL('/grips/pngs/angled_grip.png')
    }
  },
  {
    slug: 'horizontal_grip',
    name: 'Horizontal Grip',
    description: 'Increases Operator movement speed.',
    notes: '+5% movement speed bonus.',
    icon: {
      svg: parseSvgString(horizontalGripIcon),
      png: getAttachmentAssetURL('/grips/pngs/horizontal_grip.png')
    }
  }
] satisfies Grip[];
