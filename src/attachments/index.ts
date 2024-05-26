import type { SVGandPNG } from '../types';
import { getAssetURL, parseSvgString } from '../utils';
import sightIcon from '../assets/attachments/svgs/sight.svg';
import barrelIcon from '../assets/attachments/svgs/barrel.svg';
import gripIcon from '../assets/attachments/svgs/grip.svg';
import underBarrelIcon from '../assets/attachments/svgs/under_barrel.svg';

export { SIGHTS, type Sight, type SightCategory } from './sights';
export { GRIPS, type Grip } from './grips';
export { BARRELS, type Barrel } from './barrrels';
export { UNDER_BARRELS, type UnderBarrel } from './underBarrels';

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
