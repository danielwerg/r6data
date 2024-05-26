import type { SVGandPNG, SightSlug } from '../types';
import { parseSvgString } from '../utils';
import { getAttachmentAssetURL } from '.';
import ironSightIcon from '../assets/attachments/sights/svgs/iron_sight.svg';
import redDotAIcon from '../assets/attachments/sights/svgs/red_dot_a.svg';
import redDotBIcon from '../assets/attachments/sights/svgs/red_dot_b.svg';
import redDotCIcon from '../assets/attachments/sights/svgs/red_dot_c.svg';
import redDotHandgunIcon from '../assets/attachments/sights/svgs/red_dot_handgun.svg';
import holoAIcon from '../assets/attachments/sights/svgs/holo_a.svg';
import holoBIcon from '../assets/attachments/sights/svgs/holo_b.svg';
import holoCIcon from '../assets/attachments/sights/svgs/holo_c.svg';
import holoDIcon from '../assets/attachments/sights/svgs/holo_d.svg';
import reflexAIcon from '../assets/attachments/sights/svgs/reflex_a.svg';
import reflexBIcon from '../assets/attachments/sights/svgs/reflex_b.svg';
import reflexCIcon from '../assets/attachments/sights/svgs/reflex_c.svg';
import reflexDIcon from '../assets/attachments/sights/svgs/reflex_d.svg';
import nonMagnifyingDot44VendettaIcon from '../assets/attachments/sights/svgs/non-magnifying_.44_vendetta.svg';
import magnifiedAIcon from '../assets/attachments/sights/svgs/magnified_a.svg';
import magnifiedBIcon from '../assets/attachments/sights/svgs/magnified_b.svg';
import magnifiedCIcon from '../assets/attachments/sights/svgs/magnified_c.svg';
import telescopicA from '../assets/attachments/sights/svgs/telescopic_a.svg';
import telescopicB from '../assets/attachments/sights/svgs/telescopic_b.svg';
import telescopicDot44MagSemiAuto from '../assets/attachments/sights/svgs/telescopic_.44_mag_semi-auto.svg';

export type SightCategory =
  | 'none'
  | 'non-magnifying'
  | 'magnifying'
  | 'telescopic';

export interface Sight {
  slug: SightSlug;
  name: string;
  category: SightCategory;
  magnification: number;
  description: string;
  notes: string | null;
  icon: SVGandPNG;
}

export const SIGHTS = [
  {
    slug: 'iron_sight',
    name: 'Iron Sight',
    category: 'none',
    magnification: 1,
    description: 'Reduces time to aim down sights.',
    notes: '+10% ADS speed bonus.',
    icon: {
      svg: parseSvgString(ironSightIcon),
      png: getAttachmentAssetURL('/sights/pngs/iron_sight.png')
    }
  },
  {
    slug: 'red_dot_a',
    name: 'Red Dot A',
    category: 'non-magnifying',
    magnification: 1,
    description: 'Adds a red dot sight and reduces time to aim down sights.',
    notes: '+5% ADS speed bonus.',
    icon: {
      svg: parseSvgString(redDotAIcon),
      png: getAttachmentAssetURL('/sights/pngs/red_dot_a.png')
    }
  },
  {
    slug: 'red_dot_b',
    name: 'Red Dot B',
    category: 'non-magnifying',
    magnification: 1,
    description: 'Adds a red dot sight and reduces time to aim down sights.',
    notes: '+5% ADS speed bonus.',
    icon: {
      svg: parseSvgString(redDotBIcon),
      png: getAttachmentAssetURL('/sights/pngs/red_dot_b.png')
    }
  },
  {
    slug: 'red_dot_c',
    name: 'Red Dot C',
    category: 'non-magnifying',
    magnification: 1,
    description: 'Adds a red dot sight and reduces time to aim down sights.',
    notes: '+5% ADS speed bonus.',
    icon: {
      svg: parseSvgString(redDotCIcon),
      png: getAttachmentAssetURL('/sights/pngs/red_dot_c.png')
    }
  },
  {
    slug: 'red_dot_handgun',
    name: 'Red Dot Handgun',
    category: 'non-magnifying',
    magnification: 1,
    description: 'Adds a red dot sight and reduces time to aim down sights.',
    notes: '+5% ADS speed bonus.',
    icon: {
      svg: parseSvgString(redDotHandgunIcon),
      png: getAttachmentAssetURL('/sights/pngs/red_dot_handgun.png')
    }
  },
  {
    slug: 'holo_a',
    name: 'Holo A',
    category: 'non-magnifying',
    magnification: 1,
    description:
      'Adds a holographic sight and reduces time to aim down sights.',
    notes: '+5% ADS speed bonus.',
    icon: {
      svg: parseSvgString(holoAIcon),
      png: getAttachmentAssetURL('/sights/pngs/holo_a.png')
    }
  },
  {
    slug: 'holo_b',
    name: 'Holo B',
    category: 'non-magnifying',
    magnification: 1,
    description:
      'Adds a holographic sight and reduces time to aim down sights.',
    notes: '+5% ADS speed bonus.',
    icon: {
      svg: parseSvgString(holoBIcon),
      png: getAttachmentAssetURL('/sights/pngs/holo_b.png')
    }
  },
  {
    slug: 'holo_c',
    name: 'Holo C',
    category: 'non-magnifying',
    magnification: 1,
    description:
      'Adds a holographic sight and reduces time to aim down sights.',
    notes: '+5% ADS speed bonus.',
    icon: {
      svg: parseSvgString(holoCIcon),
      png: getAttachmentAssetURL('/sights/pngs/holo_c.png')
    }
  },
  {
    slug: 'holo_d',
    name: 'Holo D',
    category: 'non-magnifying',
    magnification: 1,
    description:
      'Adds a holographic sight and reduces time to aim down sights.',
    notes: '+5% ADS speed bonus.',
    icon: {
      svg: parseSvgString(holoDIcon),
      png: getAttachmentAssetURL('/sights/pngs/holo_d.png')
    }
  },
  {
    slug: 'reflex_a',
    name: 'Reflex A',
    category: 'non-magnifying',
    magnification: 1,
    description: 'Adds a triangle sight and reduces time to aim down sights.',
    notes: '+5% ADS speed bonus.',
    icon: {
      svg: parseSvgString(reflexAIcon),
      png: getAttachmentAssetURL('/sights/pngs/reflex_a.png')
    }
  },
  {
    slug: 'reflex_b',
    name: 'Reflex B',
    category: 'non-magnifying',
    magnification: 1,
    description: 'Adds a triangle sight and reduces time to aim down sights.',
    notes: '+5% ADS speed bonus.',
    icon: {
      svg: parseSvgString(reflexBIcon),
      png: getAttachmentAssetURL('/sights/pngs/reflex_b.png')
    }
  },
  {
    slug: 'reflex_c',
    name: 'Reflex C',
    category: 'non-magnifying',
    magnification: 1,
    description: 'Adds a triangle sight and reduces time to aim down sights.',
    notes: '+5% ADS speed bonus.',
    icon: {
      svg: parseSvgString(reflexCIcon),
      png: getAttachmentAssetURL('/sights/pngs/reflex_c.png')
    }
  },
  {
    slug: 'reflex_d',
    name: 'Reflex D',
    category: 'non-magnifying',
    magnification: 1,
    description: 'Adds a triangle sight and reduces time to aim down sights.',
    notes: '+5% ADS speed bonus.',
    icon: {
      svg: parseSvgString(reflexDIcon),
      png: getAttachmentAssetURL('/sights/pngs/reflex_d.png')
    }
  },
  {
    slug: 'non-magnifying_.44_vendetta',
    name: 'Non-Magnifying .44 Vendetta',
    category: 'non-magnifying',
    magnification: 1,
    description: 'Reduces time to aim down sights.',
    notes: null,
    icon: {
      svg: parseSvgString(nonMagnifyingDot44VendettaIcon),
      png: getAttachmentAssetURL('/sights/pngs/non-magnifying_.44_vendetta.png')
    }
  },
  {
    slug: 'magnified_a',
    name: 'Magnified A',
    category: 'magnifying',
    magnification: 2.5,
    description: 'Medium magnification scope.',
    notes: null,
    icon: {
      svg: parseSvgString(magnifiedAIcon),
      png: getAttachmentAssetURL('/sights/pngs/magnified_a.png')
    }
  },
  {
    slug: 'magnified_b',
    name: 'Magnified B',
    category: 'magnifying',
    magnification: 2.5,
    description: 'Medium magnification scope.',
    notes: null,
    icon: {
      svg: parseSvgString(magnifiedBIcon),
      png: getAttachmentAssetURL('/sights/pngs/magnified_b.png')
    }
  },
  {
    slug: 'magnified_c',
    name: 'Magnified C',
    category: 'magnifying',
    magnification: 2.5,
    description: 'Medium magnification scope.',
    notes: null,
    icon: {
      svg: parseSvgString(magnifiedCIcon),
      png: getAttachmentAssetURL('/sights/pngs/magnified_c.png')
    }
  },
  {
    slug: 'telescopic_a',
    name: 'Telescopic A.',
    category: 'telescopic',
    magnification: 3.5,
    description: 'High magnification scope.',
    notes: null,
    icon: {
      svg: parseSvgString(telescopicA),
      png: getAttachmentAssetURL('/sights/pngs/telescopic_a.png')
    }
  },
  {
    slug: 'telescopic_b',
    name: 'Telescopic B.',
    category: 'telescopic',
    magnification: 3.5,
    description: 'High magnification scope.',
    notes: null,
    icon: {
      svg: parseSvgString(telescopicB),
      png: getAttachmentAssetURL('/sights/pngs/telescopic_b.png')
    }
  },
  // NOTE: Kaid/Nomad handgun's sight
  {
    slug: 'telescopic_.44_mag_semi-auto',
    name: 'Telescopic .44 Mag Semi-Auto',
    category: 'telescopic',
    magnification: 3.5,
    description: 'High magnification scope.',
    notes: null,
    icon: {
      svg: parseSvgString(telescopicDot44MagSemiAuto),
      png: getAttachmentAssetURL(
        '/sights/pngs/telescopic_.44_mag_semi-auto.png'
      )
    }
  },
  // NOTE: Glaz's sight
  {
    slug: 'telescopic_ots-03',
    name: 'Telescopic OTs-03',
    category: 'telescopic',
    magnification: 3.5,
    description: 'High magnification scope.',
    notes: null,
    icon: { svg: null, png: null }
  },
  // NOTE: Kali's sight
  {
    slug: 'telescopic_csrx_300_a',
    name: 'Telescopic CSRX 300 A',
    category: 'telescopic',
    magnification: 5,
    description: 'High magnification scope.',
    notes: null,
    icon: { svg: null, png: null }
  },
  // NOTE: Kali's sight
  {
    slug: 'telescopic_csrx_300_b',
    name: 'Telescopic CSRX 300 B',
    category: 'telescopic',
    magnification: 12,
    description: 'High magnification scope.',
    notes: null,
    icon: { svg: null, png: null }
  }
] satisfies Sight[];
