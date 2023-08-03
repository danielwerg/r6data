import type { SVGandPNG, SideSlug } from './types';
import { getAssetURL, parseSvgString } from './utils';
/** --- */
import defenseIcon from './assets/sides/svgs/defense.svg';
import attackIcon from './assets/sides/svgs/attack.svg';

export const getSideAssetURL = (path: string) => getAssetURL(`/sides${path}`);

export interface Side {
  slug: SideSlug;
  name: string;
  icon: SVGandPNG;
}

export const SIDES = [
  {
    slug: 'defense',
    name: 'Defense',
    icon: {
      svg: parseSvgString(defenseIcon),
      png: getSideAssetURL('/svgs/defense.svg')
    }
  },
  {
    slug: 'attack',
    name: 'Attack',
    icon: {
      svg: parseSvgString(attackIcon),
      png: getSideAssetURL('/svgs/attack.svg')
    }
  }
] satisfies Side[];
