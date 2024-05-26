import type { SVGandPNG } from './types';
import { getAssetURL, parseSvgString } from './utils';
import observationToolsIcon from './assets/actions/svgs/observation_tools.svg';
import pingIcon from './assets/actions/svgs/ping.svg';
import cameraIcon from './assets/actions/svgs/camera.svg';
import barricadeIcon from './assets/actions/svgs/barricade.svg';
import reinforcementIcon from './assets/actions/svgs/reinforcement.svg';
import droneIcon from './assets/actions/svgs/drone.svg';
import rappelIcon from './assets/actions/svgs/rappel.svg';

export const getActionAssetURL = (path: string) =>
  getAssetURL(`/actions${path}`);

export interface Action {
  slug: string;
  name: string;
  amount: number | null;
  description: string | null;
  notes: string | null;
  icon: SVGandPNG;
}

export const ACTIONS = [
  {
    slug: 'observation_tools',
    name: 'Observation Tools',
    amount: null,
    description: null,
    notes: null,
    icon: {
      svg: parseSvgString(observationToolsIcon),
      png: getActionAssetURL('/pngs/observation_tools.png')
    }
  },
  {
    slug: 'ping',
    name: 'Ping',
    amount: null,
    description: null,
    notes: null,
    icon: {
      svg: parseSvgString(pingIcon),
      png: getActionAssetURL('/pngs/ping.png')
    }
  },
  {
    slug: 'camera',
    name: 'Camera',
    amount: null,
    description:
      'Camera feed that provides intel to Defenders from security cameras in the map and Defender camera devices.',
    notes: null,
    icon: {
      svg: parseSvgString(cameraIcon),
      png: getActionAssetURL('/pngs/camera.png')
    }
  },
  {
    slug: 'barricade',
    name: 'Barricade',
    amount: null,
    description:
      'Wooden barrier that\'s placed on windows and doors to block line of sight and deny entry.',
    notes: null,
    icon: {
      svg: parseSvgString(barricadeIcon),
      png: getActionAssetURL('/pngs/barricade.png')
    }
  },
  {
    slug: 'reinforcement',
    name: 'Reinforcement',
    amount: 10,
    description:
      'Metal barrier that\'s placed on breakable walls and hatches to protect against breaches and deny entry.',
    notes: 'Limited resource pool shared by Defenders.',
    icon: {
      svg: parseSvgString(reinforcementIcon),
      png: getActionAssetURL('/pngs/reinforcement.png')
    }
  },
  {
    slug: 'drone',
    name: 'Drone',
    amount: 2,
    description:
      'Intel device that\'s used to locate objectives, utility, and opponent positions.',
    notes: null,
    icon: {
      svg: parseSvgString(droneIcon),
      png: getActionAssetURL('/pngs/drone.png')
    }
  },
  {
    slug: 'rappel',
    name: 'Rappel',
    amount: null,
    description:
      'Rope that allows Attackers to climb building exteriors and enter through indows or rooftops.',
    notes: null,
    icon: {
      svg: parseSvgString(rappelIcon),
      png: getActionAssetURL('/pngs/rappel.png')
    }
  }
] satisfies Action[];
