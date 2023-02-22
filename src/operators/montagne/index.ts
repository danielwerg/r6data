import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';

export const montagne = {
  slug: 'montagne',
  name: 'Montagne',
  side: 'attack',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/montagne.svg'),
    png: getOperatorAssetURL('/icons/pngs/montagne.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7qWONT0mrNYtUZVTVVT8Yj/e0da552d6bb6548ddf74cf4cc44d75c5/Y0R6_BADGE_Montagne_L.png',
  card: getOperatorAssetURL('/cards/montagne.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1hxlGxmToB93urkgbIzUvW/fa894cd6ab38358284a3a1858cabbeee/r6-operators-list-montagne.png',
  figure: getOperatorAssetURL('/figures/montagne.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/37v1tD14BQ9A59vqXO7I9p/ba1d199bf7697f5ede61b93cdec60686/R6-operator-montagne.png',
  body: getOperatorAssetURL('/bodies/montagne.png'),
  ratings: { health: 3, speed: 1 },
  specialties: ['intel', 'support'],
  season: { id: 0 },
  weapons: { primary: ['le_roc_shield'], secondary: ['p9', 'lfp586'] },
  gadgets: {
    secondary: ['smoke_grenade', 'hard_breach_charge', 'impact_emp_grenade']
  },
  uniqueAbility: {
    slug: 'extendable_shield',
    name: 'Extendable Shield',
    type: 'none',
    startingAmount: null,
    description:
      'Shield that can be extended for full frontal protection to gather intel and provide cover for teammates.',
    info: null,
    icon: {
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/extendable_shield.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/254sLdgp9a9DMExPZFK0ai/95e8b1c2865f0923fd80e15d8830eb46/Extendable-Shield.png'
  }
} satisfies Operator;
