import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';

export const jackal = {
  slug: 'jackal',
  name: 'Jackal',
  side: 'attack',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/jackal.svg'),
    png: getOperatorAssetURL('/icons/pngs/jackal.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/28k7LKWK70lxib7CimPJaZ/f34b2065811df8f0339838922f8c94b1/Y2S1_BADGE_Jackal_L.png',
  card: getOperatorAssetURL('/cards/jackal.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/kbyJly2JDRxFrjFSrptiy/ebbdae24cdfed025b0872742bb6c2a96/r6-operators-list-jackal.png',
  figure: getOperatorAssetURL('/figures/jackal.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2YoFmkuQL4r8odEWB7K60w/b5fd30cf9c7f407753bd921dfe6a1d28/R6-operator-jackal.png',
  body: getOperatorAssetURL('/bodies/jackal.png'),
  ratings: { health: 2, speed: 2 },
  specialties: ['intel', 'map_control'],
  season: { id: 5 },
  weapons: {
    primary: ['c7e', 'pdw9', 'ita12l'],
    secondary: ['usp40', 'ita12s']
  },
  gadgets: { secondary: ['claymore', 'smoke_grenade'] },
  uniqueAbility: {
    slug: 'eyenox_model_iii',
    name: 'Eyenox Model III',
    type: 'count',
    startingAmount: 3,
    description:
      'Headgear that can be activated to reveal opponent footprints and scan them to ping the opponent\'s location.',
    info: 'The headgear has limited scans available but no limit on revealing footprints.',
    icon: {
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/eyenox_model_iii.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2gexf5zLDsa74J7urCoDxk/50da09626395cbe1bf2a58e00a57a514/Eyenox-Model-III.png'
  }
} satisfies Operator;
