import type { Season } from './types';
import { getAssetURL, getISODate } from './utils';

export const getSeasonAssetURL = (path: string) =>
  getAssetURL(`/seasons${path}`);

export const SEASONS = [
  {
    id: 0,
    shorthand: 'Y0S0',
    slug: 'release',
    name: 'Release',
    year: 0,
    season: 0,
    hexColorCode: '#656261',
    description: null,
    thumbnail: getSeasonAssetURL('/y0s0.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/e1RaN16FOlCQAGUvGNKMW/abf69e597205b047c11db79f757843a0/Header_231334.png',
    releaseDate: getISODate('2015-12-01')
  },
  {
    id: 1,
    shorthand: 'Y1S1',
    slug: 'black_ice',
    name: 'Black Ice',
    year: 1,
    season: 1,
    hexColorCode: '#25768f',
    description:
      'Continue the Siege with our first major content update, Operation Black Ice, which gives you access to the new Yacht map, two new JTF2 operators, new weapon skins, a spectator camera on all platforms and more.',
    thumbnail: getSeasonAssetURL('/y1s1.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/67sZXc4UuXK2YPq8uj0mgE/6d0a5e1c6a342f5219cba2fc89e0ba14/r6s-seasons-y1s1.jpg',
    releaseDate: getISODate('2016-02-02')
  },
  {
    id: 2,
    shorthand: 'Y1S2',
    slug: 'dust_line',
    name: 'Dust Line',
    year: 1,
    season: 2,
    hexColorCode: '#997427',
    description:
      'In Operation Dust Line, two Navy SEAL Operators join Team Rainbow to secure the "Border" - our new free map. This second major content update also introduces new weapon skins, advanced customisation options, the ability to change your loadouts between rounds and lots more.',
    thumbnail: getSeasonAssetURL('/y1s2.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5u2ecpIe98X528KgYQiEt/5833e27e347176f5e041cc533d48ac95/r6s-seasons-y1s2.jpg',
    releaseDate: getISODate('2016-05-10')
  },
  {
    id: 3,
    shorthand: 'Y1S3',
    slug: 'skull_rain',
    name: 'Skull Rain',
    year: 1,
    season: 3,
    hexColorCode: '#396e2f',
    description:
      'In Operation Skull Rain, two BOPE Operators join Team Rainbow to pacify the Favela, our new free map. This third major content update aims to improve the game experience by adding countermeasures for toxic behavior, a new weapon attachment, several game enhancements, customisation content and lots more.',
    thumbnail: getSeasonAssetURL('/y1s3.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2X0s4QopJikcMNN4qg9KPS/5ef0ae117679ee7b1342c776a77c9dd4/r6s-seasons-y1s3.jpg',
    releaseDate: getISODate('2016-08-02')
  },
  {
    id: 4,
    shorthand: 'Y1S4',
    slug: 'red_crow',
    name: 'Red Crow',
    year: 1,
    season: 4,
    hexColorCode: '#971823',
    description:
      'In Operation Red Crow, two S.A.T. Operators join Team Rainbow to neutralize the threat residing in our new free map, "Skyscraper". This fourth major content update aims to improve game experience, offers new customization opportunities and lots more. The new map Skyscraper also offers fresh tactical opportunities for group-based assaults.',
    thumbnail: getSeasonAssetURL('/y1s4.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/66IKfs4aSnSkxaToTmmVBt/1532ccea8dd02b3ea44f254e4fdac27f/r6s-seasons-y1s4.jpg',
    releaseDate: getISODate('2016-11-17')
  },
  {
    id: 5,
    shorthand: 'Y2S1',
    slug: 'velvet_shell',
    name: 'Velvet Shell',
    year: 2,
    season: 1,
    hexColorCode: '#5b2676',
    description:
      'In Operation Velvet Shell, two G.E.O. Operators join Team Rainbow to regain control of the "Coastline". Following a year of post-launch content, this major update aims to improve player comfort with an upgraded navigation interface, customisation selections and lots more.',
    thumbnail: getSeasonAssetURL('/y2s1.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5OKGWvBbiscdZNmjr0PP9q/f5cff0dae8546193f9601fcf703f7f0e/r6s-seasons-y2s1.jpg',
    releaseDate: getISODate('2017-02-07')
  },
  {
    id: 6,
    shorthand: 'Y2S2',
    slug: 'health',
    name: 'Health',
    year: 2,
    season: 2,
    hexColorCode: '#00408f',
    description:
      'Operation Health has been all about fixing several issues and investing in better technology to make sure we keep growing strong in the upcoming years. It focused on three main pillars: technical improvements, a new deployment process and addressing top community reported bugs.',
    thumbnail: getSeasonAssetURL('/y2s2.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2w0kuPWW4vZS2MvHxpjgKL/527a78f482f03250f48ee05fabb843a9/r6s-seasons-y2s2.jpg',
    releaseDate: getISODate('2017-06-07')
  },
  {
    id: 7,
    shorthand: 'Y2S3',
    slug: 'blood_orchid',
    name: 'Blood Orchid',
    year: 2,
    season: 3,
    hexColorCode: '#a22b16',
    description:
      'In Operation Blood Orchid, two Special Duties Unit Operators join Team Rainbow to raid Theme Park. This third season will showcase a reworking of the Operators and maps following an optimization of our data, namely a rework of textures, polished dynamic and static lighting, richer sky domes, new customization, and much more.',
    thumbnail: getSeasonAssetURL('/y2s3.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5Is8lRiLLAaU0Uaj46Bu5Z/d46a8652cdf16426b7c9a0d634442be5/r6s-seasons-y2s3.jpg',
    releaseDate: getISODate('2017-09-05')
  },
  {
    id: 8,
    shorthand: 'Y2S4',
    slug: 'white_noise',
    name: 'White Noise',
    year: 2,
    season: 4,
    hexColorCode: '#005136',
    description:
      'In White Noise, Team Rainbow premieres two Operators from the 707th Special Mission Battalion for a rescue mission high up Mok Myeok Tower, our new free map. Joining them is our second GROM Specialist turned Rainbow Operator.',
    thumbnail: getSeasonAssetURL('/y2s4.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6FvQKw65QzOqhVKxbjBg1Z/70ea9eb8865182504f74cfea10f88c0a/r6s-seasons-y2s4.jpg',
    releaseDate: getISODate('2017-12-05')
  },
  {
    id: 9,
    shorthand: 'Y3S1',
    slug: 'chimera',
    name: 'Chimera',
    year: 3,
    season: 1,
    hexColorCode: '#c18e00',
    description:
      'With Operation Chimera, we are exploring a new fantasy: quarantine and biohazard. The two operators are biohazard specialists from France and Russia. During this first Season, our first major coop event, Outbreak, will take place over four weeks.',
    thumbnail: getSeasonAssetURL('/y3s1.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/35ZyIYUW7odr1tiGyGNd8R/8a578688e5c46ed779a382c940bf270b/rainbow6siege-chimera-thumb_318068.jpg',
    releaseDate: getISODate('2018-03-06')
  },
  {
    id: 10,
    shorthand: 'Y3S2',
    slug: 'para_bellum',
    name: 'Para Bellum',
    year: 3,
    season: 2,
    hexColorCode: '#767f2e',
    description:
      'In Operation Para Bellum, two G.I.S. Operators thrive under the blaze of the Tuscan sun. Team Rainbow is deploying Maestro and Alibi in the villa of one of the most dangerous crime families.',
    thumbnail: getSeasonAssetURL('/y3s2.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/522ZBrBzlJMoTi63hrwuna/3f9007ceaa80b8110fa282937309ac1e/rainbow6siege_parabellum_thumb_323480.jpg',
    releaseDate: getISODate('2018-06-07')
  },
  {
    id: 11,
    shorthand: 'Y3S3',
    slug: 'grim_sky',
    name: 'Grim Sky',
    year: 3,
    season: 3,
    hexColorCode: '#36526e',
    description:
      'For Operation Grim Sky, Rainbow Six is deploying Clash and Maverick. Experts in mob behavior and high-precision strikes respectively, they\'ll also assess the new training facilities at the reworked Hereford Base. Out with the old and in with the new.',
    thumbnail: getSeasonAssetURL('/y3s3.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4y07zikRXB4BcyRQy5Anoe/2e6de56c3ea34cadb300326102963340/rainbow6siege_grimsky_thumb_333789.jpg',
    releaseDate: getISODate('2018-09-04')
  },
  {
    id: 12,
    shorthand: 'Y3S4',
    slug: 'wind_bastion',
    name: 'Wind Bastion',
    year: 3,
    season: 4,
    hexColorCode: '#886a3f',
    description:
      'New to Rainbow Six are Kaid and Nomad for Operation Wind Bastion. These two Operators are right at home at the reputable Kasbah Sekhra Mania, the featured Fortress map in Morocco. Join the very best at this elite training ground.',
    thumbnail: getSeasonAssetURL('/y3s4.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1VeuGBLdSsadK5MdLfCL9k/b9e213c4aeb8dfe6e1f137968770912a/rainbow6siege_windbastion_thumb_340468.jpg',
    releaseDate: getISODate('2018-12-04')
  },
  {
    id: 13,
    shorthand: 'Y4S1',
    slug: 'burnt_horizon',
    name: 'Burnt Horizon',
    year: 4,
    season: 1,
    hexColorCode: '#a80048',
    description:
      'Rainbow Six goes to the land Down Under for Operation Burnt Horizon. Protection specialists with the SASR Mobility Platoon, Gridlock and Mozzie are assigned protection detail for a high-value convoy across sunburnt country.',
    thumbnail: getSeasonAssetURL('/y4s1.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4J2E0yJ2cZsKgx5OrFGkvR/0f966f31b3d8ad2ef13926b075769334/r6s-seasons-y4s1.jpg',
    releaseDate: getISODate('2019-03-06')
  },
  {
    id: 14,
    shorthand: 'Y4S2',
    slug: 'phantom_sight',
    name: 'Phantom Sight',
    year: 4,
    season: 2,
    hexColorCode: '#263677',
    description:
      'Sharpen your eyes with Operation Phantom Sight! Become invisible to cameras and drones and move quietly with Nøkk and her Hel gadget. Watch your enemies through smokes and be immune to flashes with Warden and his Glance Smart Glasses. Rediscover Kafe as you have never seen it with the rework of the map.',
    thumbnail: getSeasonAssetURL('/y4s2.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/29ze1Zxf173boRuyaFHuQV/c240df821c3ec407b09118c68a1300c0/r6s-seasons-y4s2.jpg',
    releaseDate: getISODate('2019-06-11')
  },
  {
    id: 15,
    shorthand: 'Y4S3',
    slug: 'ember_rise',
    name: 'Ember Rise',
    year: 4,
    season: 3,
    hexColorCode: '#114f07',
    description:
      'Something new is on the horizon, and Operation Ember Rise will shed light on it. Two operators, Amaru and Goyo, were recruited from Peru and Mexico, bringing with them innovation and change to Rainbow Six, along with a thrilling rework to Kanal.',
    thumbnail: getSeasonAssetURL('/y4s3.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1JeHAGdUglVNSUUvSkxSia/1c8b76a4256091ca40434e89addaacf2/r6s-seasons-y4s3.jpg',
    releaseDate: getISODate('2019-09-11')
  },
  {
    id: 16,
    shorthand: 'Y4S4',
    slug: 'shifting_tides',
    name: 'Shifting Tides',
    year: 4,
    season: 4,
    hexColorCode: '#067e8f',
    description:
      'Rise from the depths this season with Operation Shifting Tides. Try Kali and her explosive underbarrel gadget that lets her use it for more than just punching holes in walls and Operators. On the other side of the action, strange things happening to grenades, as Wamai deploys a new gadget with magnetic appeal. With them, expect a newly reworked Theme Park to surface.',
    thumbnail: getSeasonAssetURL('/y4s4.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6uZSbKGZiwF7Zv5egr4zks/5597030f075ad99c0a18a1dcea34ef87/r6s-seasons-y4s4.jpg',
    releaseDate: getISODate('2019-12-03')
  },
  {
    id: 17,
    shorthand: 'Y5S1',
    slug: 'void_edge',
    name: 'Void Edge',
    year: 5,
    season: 1,
    hexColorCode: '#755377',
    description:
      'For the fifth year of Rainbow 6 Siege, give some space to our two new operators as they break into this season with their unique abilities. Thanks to her Gemini Replicator, attacker Iana can create a usable clone of herself, while Defender Oryx can use his Remah Dash against enemies and walls.',
    thumbnail: getSeasonAssetURL('/y5s1.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2584xuwMoCH1FJc9n34jLo/9dfec73fd217a889a7bfe66e1f412cd6/r6s-seasons-y5s1.jpg',
    releaseDate: getISODate('2020-03-10')
  },
  {
    id: 18,
    shorthand: 'Y5S2',
    slug: 'steel_wave',
    name: 'Steel Wave',
    year: 5,
    season: 2,
    hexColorCode: '#22667c',
    description:
      'Don\'t miss a beat with Operation Steel Wave. Discover the new hard-breacher Ace and his S.E.L.M.A Aqua Breacher that combines the demolitionist\'s explosive force with the humanitarian\'s care. On the other side of the action, don\'t be too alarmed if you find yourself slowed when there\'s no barbed wire underfoot. This is the Banshee Sonic Defence that will alert Melusi of your presence. With them, expect a newly reworked House coming into the game.',
    thumbnail: getSeasonAssetURL('/y5s2.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4soZ80QzL9WoLqvq8Hz647/d8d70312ec2849c276b459c3ef0482cd/r6s-seasons-y5s2.jpg',
    releaseDate: getISODate('2020-06-16')
  },
  {
    id: 19,
    shorthand: 'Y5S3',
    slug: 'shadow_legacy',
    name: 'Shadow Legacy',
    year: 5,
    season: 3,
    hexColorCode: '#56840e',
    description:
      'Get out from the dark with this season Operation Shadow Legacy. Test Zero and his Argus Launcher and get your eyes where you are not supposed to see. Explore the newly reworked Chalet and discover all the new features brought to you with Operation Shadow Legacy.',
    // NOTE: https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5H87SAzADrzRmroVnJzuUE/5d17e86c99f1540c005b1d444c999314/r6s-seasons-y5s3.jpg
    thumbnail: getSeasonAssetURL('/y5s3.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5H87SAzADrzRmroVnJzuUE/2e73c489074b538055df0f793b4e1639/r6s-seasons-y5s3.jpg',
    releaseDate: getISODate('2020-09-10')
  },
  {
    id: 20,
    shorthand: 'Y5S4',
    slug: 'neon_dawn',
    name: 'Neon Dawn',
    year: 5,
    season: 4,
    hexColorCode: '#a73306',
    description:
      'You can find confort or hardship in the light. Operator Aruni and her Surya Gate will be waiting for drones, Operators and their gadgets to come through. Defenders are free to roam, while Attackers should move with extra caution. Plus, a newly reworked Skyscraper is about to surface.',
    // NOTE: https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3vRTyOgSmwcUVxiOk60p3w/162504ce156ffdd6bc5f441d669ea079/r6s-seasons-y5s4.jpg
    thumbnail: getSeasonAssetURL('/y5s4.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3vRTyOgSmwcUVxiOk60p3w/e2f41521df1f67704dae051d147a32cc/r6s-seasons-y5s4.jpg',
    releaseDate: getISODate('2020-12-01')
  },
  {
    id: 21,
    shorthand: 'Y6S1',
    slug: 'crimson_heist',
    name: 'Crimson Heist',
    year: 6,
    season: 1,
    hexColorCode: '#8a0000',
    description:
      'In life, you have to commit to the things that make you happy. For Operator Flores and his RCE-Ratero, it\'s stealing the corrupt to help his fellow citizens. Additionally, you will be able to roam the newly reworked Border.',
    // NOTE: https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7iKoGngda7z0LyYpTT25zM/2ba16741ffa8a7d8b4629ed870d8a870/r6s-seasons-y6s1.jpg
    thumbnail: getSeasonAssetURL('/y6s1.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7iKoGngda7z0LyYpTT25zM/116efeb1c65cb9a356a3e9a42abe2ae3/R6_live_Y6S1_CrimsonHeist.jpg',
    releaseDate: getISODate('2021-03-16')
  },
  {
    id: 22,
    shorthand: 'Y6S2',
    slug: 'north_star',
    name: 'North Star',
    year: 6,
    season: 2,
    hexColorCode: '#007d98',
    description:
      'Guided by the spirits, Thunderbird uses her ability to protect and heal. She can deploy Kóna stations at several places on the map and operators standing next to them can absorb their charge to heal themselves. The Kóna stations can overheal and even revive a downed operator. But be careful though, both allies and enemies can use them! Additionally, Favela sees big changes with a rework.',
    // NOTE: https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/38Lml8ltnO932wLqhC5xEA/ea89df885372347170d9af1861d48d49/r6s-seasons-y6s2-main.jpg
    thumbnail: getSeasonAssetURL('/y6s2.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/38Lml8ltnO932wLqhC5xEA/493665084f757da8c91c01a0b99d2be3/r6s-seasons-y6s2.jpg',
    releaseDate: getISODate('2021-06-14')
  },
  {
    id: 23,
    shorthand: 'Y6S3',
    slug: 'crystal_guard',
    name: 'Crystal Guard',
    year: 6,
    season: 3,
    hexColorCode: '#cc8200',
    description:
      'Innovation is natural for Osa while she reinforces the attacking team\'s position. She can deploy the Talon-8 clear shields on doors, door or window frames or keep it in hands to navigate through the map. The Talon-8 shields ere bulletproof but transparent and let both side see through so be careful when positionning them. Additionally, Bank, Clubhouse and Coastline see some changes to add more comfort.',
    thumbnail: getSeasonAssetURL('/y6s3.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5Rm9sfgVTz9KdTI1Jh4N6w/c2d66a871b6311fe26198553695e0cd1/r6s-seasons-y6s3.jpg',
    releaseDate: getISODate('2021-09-07')
  },
  {
    id: 24,
    shorthand: 'Y6S4',
    slug: 'high_calibre',
    name: 'High Calibre',
    year: 6,
    season: 4,
    hexColorCode: '#465e1d',
    description:
      'Thorn, an inspirational leader from the National Police Service of the Republic of Ireland is ready to trap the Attacking Team. She is always ready to deploy the Razorbloom Shell, a special gadget which initiates a timed explosion once triggered. You can play as Thorn on the newly reworked Outback map and prevent the Attackers from defusing the objective!',
    thumbnail: getSeasonAssetURL('/y6s4.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4ysWCYtrfV6yEC10unxDeM/cdeb45fc738b78da77bb611b14ae7973/r6s-seasons-y6s4.jpg',
    releaseDate: getISODate('2021-11-30')
  },
  {
    id: 25,
    shorthand: 'Y7S1',
    slug: 'demon_veil',
    name: 'Demon Veil',
    year: 7,
    season: 1,
    hexColorCode: '#b27400',
    description:
      'Demon Veil introduces exciting new content like Azami, a new Defender from Japan, a brand new map (Coming mid-season), and a permanent game mode: Team Deathmatch. Azami\'s Kiba Barrier can shut down sightlines, block off entry points, and create entirely new angles of defense all with a flick of her wrist. Also coming with this season is the Attacker Repick which brings another strategic option to the Prep Phase, a balancing change for Goyo, Match Replay for console and more.',
    thumbnail: getSeasonAssetURL('/y7s1.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6diil0gexoNXNCKtwpPPQZ/ace6f9e6e1e1578a2255ac0e5cb67b7c/r6s-seasons-y7s1.jpg',
    releaseDate: getISODate('2022-03-15')
  },
  {
    id: 26,
    shorthand: 'Y7S2',
    slug: 'vector_glare',
    name: 'Vector Glare',
    year: 7,
    season: 2,
    hexColorCode: '#60cdb0',
    description:
      'Divert enemy attention and gain the upper hand with Sens, the new Operator from the Belgian Special Forces Group. Sens comes equipped with the brand-new POF9 assault rifle and the R.O.U. Projector System ability, allowing them to break line of sight and turn the tide of battle. Operation Vector Glare also introduces the Shooting Range and a new Team Deathmatch map set in Greece, offering fresh venues to hone your skills and put them to the test.',
    thumbnail: getSeasonAssetURL('/y7s2.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6aBRsquEEKV2Ix2W7HK8P2/7a808507bcb933364d2dbcd6f80714fd/r6s-vectorglare-thumb.jpg',
    releaseDate: getISODate('2022-06-14')
  },
  {
    id: 27,
    shorthand: 'Y7S3',
    slug: 'brutal_swarm',
    name: 'Brutal Swarm',
    year: 7,
    season: 3,
    hexColorCode: '#dac925',
    description:
      'Operation Brutal Swarm clears the way for our new Singaporean Attacker: Grim. Discover his gadget, the Kawan Hive Launcher: with no reload and a low fire rate, it allows for Intel-Gathering and Area Denial. Stadium will now be a permanent map where you can defy your opponents in ranked matches. This season also brings major balancing updates that will shake things up.',
    thumbnail: getSeasonAssetURL('/y7s3.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/35vqSFGr4xn1JnNVetTsyh/e9c46f34157897dc96988432991a1e52/r6s-seasons-y7s3__2_.jpg',
    releaseDate: getISODate('2022-09-06')
  },
  {
    id: 28,
    shorthand: 'Y7S4',
    slug: 'solar_raid',
    name: 'Solar Raid',
    year: 7,
    season: 4,
    hexColorCode: '#d03314',
    description:
      'Meet our new intel-gathering Defender, Solis, and her SPEC-IO Electro-Sensor. This season also marks the release of long-awaited improvements like Cross-play, Cross-progression and Reputation Score (beta). In addition, Operation Solar Raid includes a brand-new competitive Map, Nighthaven Labs, a completely revamped Battle Pass, Ranked 2.0, and much more.',
    thumbnail: getSeasonAssetURL('/y7s4.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1ZSXgYK6dLal6jI7JRN85T/7aa312f549948b8a19c9afb5fae12776/R6S_Live_Y7S4_SolarRaid_Keyart.jpg',
    releaseDate: getISODate('2022-12-06')
  },
  {
    id: 29,
    shorthand: 'Y8S1',
    slug: 'commanding_force',
    name: 'Commanding Force',
    year: 8,
    season: 1,
    hexColorCode: '#45abf3',
    description:
      'Sabotage enemy drones and make them your own with Brava, our newest Brazilian Attacker joining Seige! Her Kludge Drone disrupts hostile surveillance and converts enemy technology them to her own. Year 8 Season 1 also brings exciting new updates, like the new immersive reload system that rewards tactical play, a mouse and keyboard penalty that will make the console environment more fair, as well as more balance changes, anti-toxicity efforts, and much more.',
    thumbnail: getSeasonAssetURL('/y8s1.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3NK3eIKNUG118nXBY0Zskj/e682ab5abf93e5e4ba66de44b3ce1ed8/Y8S1_CommandingForce_IMG_MainKeyArt.jpg',
    releaseDate: getISODate('2023-03-07')
  },
  {
    id: 30,
    shorthand: 'Y8S2',
    slug: 'dread_factor',
    name: 'Dread Factor',
    year: 8,
    season: 2,
    hexColorCode: '#6432ef',
    description:
      'This season introduces Fenrir, an expert in Neuroscience, armed with mines that when triggered induces terror in his enemies and impairs their vision. Year 8 Season 2 also brings exciting new updates like the rework of Consulate from the ground up, a new aiming lane in the Shooting Range that allows customization of target speed, movement, and quantity, plus the permanent arcade playlist that includes many favorite modes such as Headhshot and Golden Gun!',
    thumbnail: getSeasonAssetURL('/y8s2.jpg'),
    thumbnailOfficial:
      'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4lkN2v7mOSsyHfr1vDdVM7/4f9323bed51c81e1db1bd8ce0f2c34f9/R6S_Live_Y8S2_DreadFactor.jpg',
    releaseDate: getISODate('2023-05-30')
  }
] satisfies Season[];
