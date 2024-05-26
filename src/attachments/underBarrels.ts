import type { SVGandPNG, UnderBarrelSlug } from '../types';
import { parseSvgString } from '../utils';
import { getAttachmentAssetURL } from '.';
import laserIcon from '../assets/attachments/under_barrels/svgs/laser.svg';

export interface UnderBarrel {
  slug: UnderBarrelSlug;
  name: string;
  description: string;
  notes: string | null;
  icon: SVGandPNG;
}

export const UNDER_BARRELS = [
  {
    slug: 'laser',
    name: 'Laser',
    description: 'Reduces time to aim down sights.',
    notes: '+10% ADS speed bonus.',
    icon: {
      svg: parseSvgString(laserIcon),
      png: getAttachmentAssetURL('/under-barrels/pngs/laser.png')
    }
  }
] satisfies UnderBarrel[];
