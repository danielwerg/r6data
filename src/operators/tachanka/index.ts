import { getOperatorAssetURL, getOperatorSVGString } from '../utils';
import type { Operator } from '../types';

export const tachanka = {
  slug: 'tachanka',
  name: 'Tachanka',
  side: 'defense',
  icon: {
    toSVG: async () => getOperatorSVGString('/icons/svgs/tachanka.svg'),
    png: getOperatorAssetURL('/icons/pngs/tachanka.png')
  },
  iconOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7hpI2mcmvyjC2vG6ieltLo/f217b1dc449c0514b55e471193a38c91/Y0R6_BADGE_Tachanka_L.png',
  card: getOperatorAssetURL('/cards/tachanka.webp'),
  cardOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5P9kGyOrnsu7lRyr9xC71t/53981da03fa36adf99adf61bc098bd4a/r6s-operators-list-tachanka.png',
  figure: getOperatorAssetURL('/figures/tachanka.webp'),
  figureOfficial:
    'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3anG5CUIzp0MWB9T6tIpy9/bd81ae97ecd984afe84813384eb027d8/r6s-operator-tachanka.png',
  body: getOperatorAssetURL('/bodies/tachanka.png'),
  ratings: { health: 3, speed: 1 },
  specialties: ['anti-entry', 'crowd_control'],
  season: { id: 0 },
  weapons: {
    primary: ['dp27', '9x19vsn'],
    secondary: ['gsh-18', 'pmm', 'bearing_9']
  },
  gadgets: { secondary: ['barbed_wire', 'impact_grenade'] },
  uniqueAbility: {
    slug: 'shumikha_launcher',
    name: 'Shumikha Launcher',
    type: 'count',
    startingAmount: 14,
    description:
      'Launches incendiary grenades that create a fire on detonation.',
    info: null,
    icon: {
      toSVG: null,
      png: getOperatorAssetURL('/abilities/pngs/shumikha_launcher.png')
    },
    iconOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/37wX75QnY7XA6KbjM4aF5n/0ab116d398cf71463e11d43913818ec1/Shumikha-Launcher.png'
  }
} satisfies Operator;
