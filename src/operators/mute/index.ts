import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';
import {
  COMMON_1X_SIGHTS,
  COMMON_BARRELS,
  COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
  COMMON_GRIPS
} from '../constants';

export const mute = {
  slug: 'mute',
  name: 'Mute',
  side: 'defense',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/mute.svg'),
    png: getOperatorAssetURL('/icons/pngs/mute.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3exeHnxH1tmUmQTequWRKa/e1b6c6f057eb24722dd7860af0276316/Y0R6_BADGE_Mute_L.png',
  card: getOperatorAssetURL('/cards/mute.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4BWoDVmdDsgrI071YJwqyF/4bcf11da1e22bda96d130a0f0d4d5b48/r6-operators-list-mute.png',
  figure: getOperatorAssetURL('/figures/mute.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3gItFrDP0bBZsDXPdPp8ni/4314eb876028a87ae7fb20cc3215d3f6/R6-operator-mute.png',
  body: getOperatorAssetURL('/bodies/mute.png'),
  ratings: { health: 3, speed: 1 },
  specialties: ['anti-gadget', 'crowd_control'],
  season: { id: 0 },
  weapons: {
    primary: [
      {
        slug: 'mp5k',
        sights: COMMON_1X_SIGHTS,
        barrels: COMMON_BARRELS,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'm590a1',
        sights: COMMON_1X_SIGHTS,
        barrels: null,
        grips: null,
        underBarrels: ['laser']
      }
    ],
    secondary: [
      {
        slug: 'p226_mk_25',
        sights: null,
        barrels: COMMON_BARRELS_HANDGUN_OR_MARKSMAN,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'smg-11',
        sights: COMMON_1X_SIGHTS,
        barrels: COMMON_BARRELS,
        grips: COMMON_GRIPS,
        underBarrels: ['laser']
      }
    ]
  },
  gadgets: { secondary: ['bulletproof_camera', 'nitro_cell'] },
  uniqueAbility: {
    slug: 'signal_disruptor',
    name: 'Signal Disruptor',
    type: 'count',
    startingAmount: 4,
    description:
      'Signal jammer that deactivates opponent electronic devices in range.',
    info: null,
    icon: {
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/signal_disruptor.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1M5fsUELbaAzImzMte2ESa/9de588693ec317c87ef1a2021bd43b86/Signal-Disruptor.png'
  }
} satisfies Operator;
