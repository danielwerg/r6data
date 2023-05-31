/* eslint-disable max-lines */
import { getAssetURL, getISODate } from './utils';
import { SEASONS } from './seasons';

export const getMapAssetURL = (path: string) => getAssetURL(`/maps${path}`);

export interface Map {
  slug: MapSlug;
  name: string;
  release: MapRelease;
  reworks?: MapRework[];
  playlists: MapPlaylist[];
  bombSites: string[] | null;
  thumbnail: string | null;
  thumbnailOfficial: string | null;
  background: string | null;
  backgroundOfficial: string | null;
  location: string;
  content: string;
}

export type MapSlug =
  | 'house'
  | 'oregon'
  | 'hereford_base'
  | 'clubhouse'
  | 'presidential_plane'
  | 'consulate'
  | 'bank'
  | 'kanal'
  | 'chalet'
  | 'kafe_dostoyevsky'
  | 'yacht'
  | 'border'
  | 'favela'
  | 'skyscraper'
  | 'coastline'
  | 'theme_park'
  | 'tower'
  | 'villa'
  | 'fortress'
  | 'outback'
  | 'emerald_plains'
  | 'close_quarter'
  | 'stadium_bravo'
  | 'nighthaven_labs';

export interface MapRelease {
  season: {
    id: number;
  };
  date: string;
}

export interface MapRework {
  type: 'small' | 'full';
  season: {
    id: number;
  };
  date: string;
}

export type MapPlaylist =
  | 'ranked'
  | 'unranked'
  | 'casual'
  | 'newcomer'
  | 'deathmatch';

// NOTE: https://www.ubisoft.com/en-gb/game/rainbow-six/siege/game-info/maps
export const MINI_MAPS = [
  {
    slug: 'house',
    name: 'House',
    release: { season: { id: 0 }, date: getISODate('2015-12-01') },
    reworks: [
      { type: 'full', season: { id: 18 }, date: getISODate('2020-06-16') }
    ],
    playlists: ['casual'],
    bombSites: [
      '2F Car Room / 2F Pink Room',
      '2F Master Bedroom / 2F Car Room',
      '1F TV Room / 1F Music Room',
      'B Garage / B Gym'
    ],
    thumbnail: getMapAssetURL('/thumbnails/house.webp'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/28OaEZAY3stNFr0wSvW9MB/c7acc97d43486349763acab3c1564414/r6-maps-house.jpg',
    background: getMapAssetURL('/backgrounds/house.webp'),
    backgroundOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3JOJJWP50zEjnYkw9kU58V/f5bcfe9cbeb077855259c9f43c7bdda5/r6s-maps-header-house.jpg',
    location: 'Los Angeles, California',
    content:
      'Playing on themes of familiarity and vulnerability, this encounter takes place in a typical suburban home. It\'s a prime example of destructive depth and replayability, and is one of the showcases for classic siege gameplay.'
  },
  {
    slug: 'oregon',
    name: 'Oregon',
    release: { season: { id: 0 }, date: getISODate('2015-12-01') },
    reworks: [
      { type: 'full', season: { id: 17 }, date: getISODate('2020-03-10') }
    ],
    playlists: ['ranked', 'unranked', 'casual', 'newcomer'],
    bombSites: [
      '2F Kids\' Dorms / 2F Dorms Main Hall',
      '1F Kitchen / 1F Dining Hall',
      '1F Meeting Room / 1F Kitchen',
      'B Laundry Room / B Supply Room'
    ],
    thumbnail: getMapAssetURL('/thumbnails/oregon.webp'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/Z9a0gU7iR0vfcbXtoJUOW/42ad6aabbd189fbcd74c497627f1624e/r6-maps-oregon.jpg',
    background: getMapAssetURL('/backgrounds/oregon.webp'),
    backgroundOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4nnjapa3L8Rn2JwCHAq919/988e74cd8ff447619a0f1a77c59e0e64/r6s-maps-header-oregon.jpg',
    location: 'Redmond, Oregon',
    content:
      'Oregon depicts an assault on a fortified survivalist compound. It feels rustic, eclectic and lived-in, and covers a vast, spread out layout requiring adapted tactics to sweep and hold effectively.'
  },
  {
    slug: 'hereford_base',
    name: 'Hereford Base',
    release: { season: { id: 0 }, date: getISODate('2015-12-01') },
    reworks: [
      { type: 'full', season: { id: 11 }, date: getISODate('2018-09-04') }
    ],
    playlists: ['casual'],
    bombSites: [
      '3F Ammo Storage / 3F Tractor Storage',
      '2F Master Bedroom / 2F Kids Room',
      '1F Dining Room / 1F Kitchen',
      'B Fermentation Chamber / B Brewery'
    ],
    thumbnail: getMapAssetURL('/thumbnails/hereford_base.webp'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1QHhMYSliWgWXFLxZj19hz/44197c1d98498d8a77618076a19ce538/r6-maps-hereford.jpg',
    background: getMapAssetURL('/backgrounds/hereford_base.webp'),
    backgroundOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/EyX1EhT3WOOUZn6H6eGp9/6a479825ae314c989d3f3eeee9cddef3/r6s-maps-header-hereford.jpg',
    location: 'United Kingdom',
    content:
      'This is where SAS agents learn their craft and as such it a patchwork of plywood targets, sandbags, barbed wire and other obstacles. One of the most archetypal examples of siege gameplay.'
  },
  {
    slug: 'clubhouse',
    name: 'Clubhouse',
    release: { season: { id: 0 }, date: getISODate('2015-12-01') },
    reworks: [
      {
        type: 'small',
        season: { id: 10 },
        date: getISODate('2018-06-07')
      },
      {
        type: 'small',
        season: { id: 23 },
        date: getISODate('2021-09-07')
      }
    ],
    playlists: ['ranked', 'unranked', 'casual', 'newcomer'],
    bombSites: [
      '2F Gym / 2F Bedroom',
      '2F CCTV Room / 2F Cash Room',
      '1F Bar / 1F Stock Room',
      'B Church / B Arsenal Room'
    ],
    thumbnail: getMapAssetURL('/thumbnails/clubhouse.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1vCw5eD2XzxZlv6Au1gtui/baeebaa75cd672e0af8f9f624cf61bde/r6-maps-clubhouse.jpg',
    background: getMapAssetURL('/backgrounds/clubhouse.webp'),
    backgroundOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4wDLH1yIvpmfWIQh0fr3ty/3582432ff41495ecfe28a698db9aeb25/r6s-maps-header-clubhouse.jpg',
    location: 'Hanover, Germany',
    content:
      'This map depicts an assault on a biker gang clubhouse. Featuring a full bar, gaming tables and leather furniture, this mixed interior/exterior layout offers a host of interesting tactical possibilities for both attacker and defender.'
  },
  {
    slug: 'presidential_plane',
    name: 'Presidential Plane',
    release: { season: { id: 0 }, date: getISODate('2015-12-01') },
    playlists: ['casual'],
    bombSites: [
      '2F Meeting Room / 2F Executive Office',
      '2F Staff Section / 2F Executive Bedroom',
      '1F Cargo Hold / 1F Luggage Hold'
    ],
    thumbnail: getMapAssetURL('/thumbnails/presidential_plane.webp'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3YSN2V0HWsddcQq82Iqihn/d3e03012e8909be26f8274b7f9b3bf19/r6-maps-plane.jpg',
    background: getMapAssetURL('/backgrounds/presidential_plane.webp'),
    backgroundOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3uGL9ucufBxRcTbhYce53q/b5fc864320e6681e6cdd457c8bfe59dd/r6s-maps-header-plane.jpg',
    location: 'London, United Kingdom',
    content:
      'This presidential plane offers an exotic and unique siege experience. It is claustrophobic, tense and constrained, involving limited breaching opportunities and sight lines.'
  },
  {
    slug: 'consulate',
    name: 'Consulate',
    release: { season: { id: 0 }, date: getISODate('2015-12-01') },
    reworks: [
      { type: 'full', season: { id: 30 }, date: getISODate('2023-05-30') }
    ],
    playlists: ['ranked', 'unranked', 'casual'],
    bombSites: [
      '2F Consul Office / 2F Meeting Room',
      '1F Exposition Room / 1F Piano Room',
      'B Servers / 1F Tellers',
      'B Cafeteria / B Garage'
    ],
    thumbnail: getMapAssetURL('/thumbnails/consulate.webp'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6PR2sBla9E6TNurVUfJ0mc/860cab16eb1d4cd27ea356a1c3fe9591/r6-maps-consulate.jpg',
    background: getMapAssetURL('/backgrounds/consulate.webp'),
    backgroundOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4jQ6tmpMAn8fwTFxi39UnJ/6c22d8a53198534ca923dea8942724db/r6s-maps-header-consulate.jpg',
    location: 'Abidjan, Ivory Coast',
    content:
      'A high-risk, highly secured fortified location, this map depicts an assault on a French consulate in Ivory Coast.'
  },
  {
    slug: 'bank',
    name: 'Bank',
    release: { season: { id: 0 }, date: getISODate('2015-12-01') },
    reworks: [
      {
        type: 'small',
        season: { id: 23 },
        date: getISODate('2021-09-07')
      }
    ],
    playlists: ['ranked', 'unranked', 'casual'],
    bombSites: [
      '2F Executive Lounge / 2F CEO Office',
      '1F Staff Office / 1F Open Area',
      '1F Tellers\' Office / 1F Archives',
      'B Lockers / B CCTV Room'
    ],
    thumbnail: getMapAssetURL('/thumbnails/bank.webp'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6ilgtuzucX7hEu2MvjhRtp/0bb6e106d78625ea218a572fbb7a5157/r6-maps-bank.jpg',
    background: getMapAssetURL('/backgrounds/bank.webp'),
    backgroundOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/64e05KGesyJoSweKcq5DUn/a7efca08b2968191fec1956c871f5359/r6s-maps-header-bank.jpg',
    location: 'Los Angeles, California',
    content:
      'Team Rainbow has been called to raid a major bank. The focus is on providing a sense of progression for attackers as they make their way through progressively more fortified areas of the building.'
  },
  {
    slug: 'kanal',
    name: 'Kanal',
    release: { season: { id: 0 }, date: getISODate('2015-12-01') },
    reworks: [
      { type: 'full', season: { id: 15 }, date: getISODate('2019-09-11') }
    ],
    playlists: ['ranked', 'unranked', 'casual'],
    bombSites: [
      '2F Server Room / 2F Radar Room',
      '1F Security Room / 1F Map Room',
      '1F Coast Guard Meeting Room / 1F Lounge',
      'B1 Kayaks / B1 Supply Room'
    ],
    thumbnail: getMapAssetURL('/thumbnails/kanal.webp'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4VHR8uZRGkHqvtZxtmibtc/da988c2cab37f1cb186535fc9ba40bea/r6-maps-kanal.jpg',
    background: getMapAssetURL('/backgrounds/kanal.webp'),
    backgroundOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/gzGNqXFxucMBf85rlLT12/d42fb7afac2a96ff0920c48ca635b9f2/r6s-maps-header-kanal.jpg',
    location: 'Hamburg, Germany',
    content:
      'Taking place in the industrial area of Hamburg, Germany, "Kanal" involves multiple buildings with strategic connecting points over canals. It features many interesting strategic possibilities created by the many bridges, buildings and related vantage points of its terrain.'
  },
  {
    slug: 'chalet',
    name: 'Chalet ',
    release: { season: { id: 0 }, date: getISODate('2015-12-01') },
    reworks: [
      { type: 'full', season: { id: 19 }, date: getISODate('2020-09-10') }
    ],
    playlists: ['ranked', 'unranked', 'casual', 'newcomer'],
    bombSites: [
      '2F Master Bedroom / 2F Office',
      '1F Bar / 1F Gaming Room',
      'B Wine Cellar / B Snowobile Garage',
      '1F Kitchen / 1F Trophy Room'
    ],
    thumbnail: getMapAssetURL('/thumbnails/chalet.webp'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/Km3ZJUM7ZMVbGsi6gad5Y/c48162371342d9f15386c77a3766315b/r6-maps-chalet.jpg',
    background: getMapAssetURL('/backgrounds/chalet.webp'),
    backgroundOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/50dnFNcafWegmFr6nMAIQx/d2a5798e632f92fcb87a633d9fad2b60/r6s-maps-header-chalet.jpg',
    location: 'Courchevel, France',
    content:
      'A shootout in an “après-ski” chalet in the French alps. This area contrasts the warm, cozy mood of its interiors with the cold, constrained visibility of its exteriors.'
  },
  {
    slug: 'kafe_dostoyevsky',
    name: 'Kafe Dostoyevsky',
    release: { season: { id: 0 }, date: getISODate('2015-12-01') },
    reworks: [
      { type: 'full', season: { id: 14 }, date: getISODate('2019-06-11') }
    ],
    playlists: ['ranked', 'unranked', 'casual', 'newcomer'],
    bombSites: [
      '3F Bar / 3F Cocktail Lounge',
      '2F Fireplace Hall / 2F Mining Room',
      '2F Reading Room / 2F Fireplace Hall',
      '1F Kitchen Service / 1F Kitchen Cooking'
    ],
    thumbnail: getMapAssetURL('/thumbnails/kafe_dostoyevsky.webp'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2nIuPSHvbM57TK90VSwBEm/70144ada56cf1ba72103aeb4ece9ed1a/r6-maps-kafe.jpg',
    background: getMapAssetURL('/backgrounds/kafe_dostoyevsky.webp'),
    backgroundOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7lU1QKUjk9lFa7kqywyHdy/3155470543982bedf3c7cee0e392f507/r6s-maps-header-kafe.jpg',
    location: 'Moscow, Russia',
    content:
      'This high-class café in central Moscow is the pinnacle of glitz and glamour, and is a natural intervention ground for Spetsnaz forces. Destruction of the rich, chic, classic decor will be a key element of this map.'
  },
  {
    slug: 'yacht',
    name: 'Yacht',
    release: { season: { id: 1 }, date: getISODate('2016-02-02') },
    playlists: ['casual'],
    bombSites: [
      '4F Maps Room / 4F Cockpit',
      '2F Kitchen / 2F Engine Room',
      '2F Cafeteria / 2F Staff Dormitory',
      '1F Server Room / 1F Engine Room'
    ],
    thumbnail: getMapAssetURL('/thumbnails/yacht.webp'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/smDP6lSSaB6Daa7bLZxHZ/d6cc60d76e553e91503a474ff0bc148b/r6-maps-yacht.jpg',
    background: getMapAssetURL('/backgrounds/yacht.webp'),
    backgroundOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4PIkR8PauElSldtoGgb0sS/b065c9d915e5db30d1c4234e2106bc4f/r6s-maps-header-yacht.jpg',
    location: 'Baffin Bay',
    content:
      'In the Baffin Bay, a luxury yacht has crashed into an iceberg breaching the hull. Rainbow has been sent to secure the stranded vessel as an unidentified submarine has docked near the vessel.'
  },
  {
    slug: 'border',
    name: 'Border',
    release: { season: { id: 2 }, date: getISODate('2016-05-10') },
    reworks: [
      { type: 'full', season: { id: 21 }, date: getISODate('2021-03-16') }
    ],
    playlists: ['ranked', 'unranked', 'casual'],
    bombSites: [
      '1F Customs Inspections / 1F Supply Room',
      '1F Ventilation Room / 1F Workshop',
      '1F Bathroom / 1F Tellers',
      '2F Armory Lockers / 2F Archives'
    ],
    thumbnail: getMapAssetURL('/thumbnails/border.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4hqsrL3cokFqedkfjiEaGf/c73f6714b535263a18e4de2ca2405dd1/r6-maps-border__1_.jpg',
    background: getMapAssetURL('/backgrounds/border.webp'),
    backgroundOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6Qf58VtgVJ8BAYqgOoy4hQ/dd3e2195ec6ff3486fc3de9239e59e90/r6s-maps-header-border.jpg',
    location: 'Middle East',
    content:
      'Team Rainbow has been called in to assist the local law enforcement and regain control of the border. A mix of old and new buildings with open air pathways make this the most destructible and open planned map to date.'
  },
  {
    slug: 'favela',
    name: 'Favela',
    release: { season: { id: 3 }, date: getISODate('2016-08-02') },
    reworks: [
      { type: 'full', season: { id: 22 }, date: getISODate('2021-06-14') }
    ],
    playlists: ['casual', 'deathmatch'],
    bombSites: [
      '3F Packaging Room / 2F Meth Lab',
      '2F Football Bedroom / 2F Football Office',
      '2F Aunt\'s Bedroom / 2F Aunt\'s Apartment',
      '1F Biker Apartment / 1F Biker Bedroom'
    ],
    thumbnail: getMapAssetURL('/thumbnails/favela.webp'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5x991vPOlYbFlynxn9tmn8/96fac98b7b7f7ae54076e0bbcb4dcc42/r6-maps-favela__1_.jpg',
    background: getMapAssetURL('/backgrounds/favela.webp'),
    backgroundOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/30eGow476W7cxWS5vGfYj3/bce185a987531f39adcd242ac4918437/r6s-maps-header-favela.webp',
    location: 'Brazil',
    content:
      'Team Rainbow has been called to pacify and regain control of the Favela. Mixing colorful and narrow streets with high vantage points, this map supports exterior shell destruction which renders it as the most destructible to date.'
  },
  {
    slug: 'skyscraper',
    name: 'Skyscraper',
    release: { season: { id: 4 }, date: getISODate('2016-11-17') },
    reworks: [
      { type: 'full', season: { id: 20 }, date: getISODate('2020-12-01') }
    ],
    playlists: ['ranked', 'unranked', 'casual', 'deathmatch'],
    bombSites: [
      '2F Karaoke / 2F Tea Room',
      '2F Exhibition / 2F Work Office',
      '1F BBQ / 1F Kitchen',
      '1F Bedroom / 1F Bathroom'
    ],
    thumbnail: getMapAssetURL('/thumbnails/skyscraper.webp'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7vblsbhmSPLsI3pQJ5Dqx9/f213af09981f5c8ec9b71fb0c3f9dcdd/r6-maps-skyscraper.jpg',
    background: getMapAssetURL('/backgrounds/skyscraper.webp'),
    backgroundOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/0J1aY3cG4QeBwEn5HvN5f/79fa41c4c98740b6eee77c981b1c4613/r6s-maps-header-skyscraper.jpg',
    location: 'Nagoya, Japan',
    content:
      'Team Rainbow has been called to neutralize a Yakuza war brewing high above the streets of Nagoya, Japan. Perched on top of Skyscraper, you will explore refined works of Japanese architecture inside a dangerous mansion. Be prepared for vertiginous rappels in the haze of the morning sun, where modernity and tradition meet.'
  },
  {
    slug: 'coastline',
    name: 'Coastline',
    release: { season: { id: 5 }, date: getISODate('2017-02-07') },
    reworks: [
      {
        type: 'small',
        season: { id: 23 },
        date: getISODate('2021-09-07')
      }
    ],
    playlists: ['ranked', 'unranked', 'casual', 'newcomer', 'deathmatch'],
    bombSites: [
      '2F Hookah Lounge / 2F Billiards Room',
      '2F Penthouse / 2F Theater',
      '1F Kitchen / 1F Service Entrance',
      '1F Blue Bar / 1F Sunrise Bar'
    ],
    thumbnail: getMapAssetURL('/thumbnails/coastline.webp'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5GfAQ3pXCJnDqiqaDH3Zic/db1722cd699bb864ee8f7b0db951b0c3/r6-maps-coastline.jpg',
    background: getMapAssetURL('/backgrounds/coastline.webp'),
    backgroundOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/FducfCGi2pg4DumoX0oRu/722f480cb033a73998f7d76be56b229c/r6s-maps-header-coastline.jpg',
    location: 'Ibiza, Spain',
    content:
      'Team Rainbow has been called to safeguard the seashore of Ibiza, Spain. Stationed on Ibiza\'s rocky shore, course through Balearic ruins and navigate booming bars to neutralize the threat. Get ready for a surround flow of combat laced with chaotic rushes as you explore a paradise gone wrong.'
  },
  {
    slug: 'theme_park',
    name: 'Theme Park',
    release: { season: { id: 7 }, date: getISODate('2017-09-05') },
    reworks: [
      { type: 'full', season: { id: 16 }, date: getISODate('2019-12-03') }
    ],
    playlists: ['ranked', 'unranked', 'casual', 'deathmatch'],
    bombSites: [
      '2F Initiation Room / 2F Office',
      '2F Bunk / 2F Day Care',
      '1F Armory / 1F Throne Room',
      '1F Lab / 1F Storage'
    ],
    thumbnail: getMapAssetURL('/thumbnails/theme_park.webp'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2immPCOZj6tTHMM9zeBg5B/cf09c9c75bc2e70dd38ebf0a12bdb9a2/r6-maps-themepark.jpg',
    background: getMapAssetURL('/backgrounds/theme_park.webp'),
    backgroundOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2nW3MynovPw7HgQshOwiSU/ab1f24e6fcd30483b2ea1342f1adbd58/r6s-maps-header-themepark.jpg',
    location: 'Hong Kong',
    content:
      'Team Rainbow has been called to raid an abandoned theme park on the shores of Hong Kong. Lead a lethal raid in this challenging perimeter. Get ready to discover a colorful and eclectic new map filled with dynamic and fast-paced face-offs.'
  },
  {
    slug: 'tower',
    name: 'Tower',
    release: { season: { id: 8 }, date: getISODate('2017-12-05') },
    playlists: ['casual'],
    bombSites: [
      '2F Gift Shop / 2F Lantern Room',
      '2F Exhibit Room / 2F Media Center',
      '1F Tea Room / 1F Bar',
      '1F Restaurant / 1F Bird Room'
    ],
    thumbnail: getMapAssetURL('/thumbnails/tower.webp'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6ZMBunxANmzTNr42wwzggb/3a19c506f9e3f910e34da21095686fa9/r6-maps-tower.jpg',
    background: getMapAssetURL('/backgrounds/tower.webp'),
    backgroundOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7hb9QvaGQhF8ix2mhf8khP/871e4ea7d2fe900ac29e73d1863f1d9a/r6s-maps-header-tower.jpg',
    location: 'Seoul, South Korea',
    content:
      'Scale the snow-capped Mok Myeok Tower to lead a rescue mission in Seoul, South Korea. The modern communications and observation tower offers fresh vertical vantage points overlooking the entire cityscape, and sets the stage for diverse multilevel tactics.'
  },
  {
    slug: 'villa',
    name: 'Villa',
    release: { season: { id: 10 }, date: getISODate('2018-06-07') },
    playlists: ['ranked', 'unranked', 'casual', 'deathmatch'],
    bombSites: [
      '2F Aviator Room / 2F Games Room',
      '2F Trophy Room / 2F Statuary Room',
      '1F Living Room / 1F Library',
      '1F Dining Room / 1F Kitchen'
    ],
    thumbnail: getMapAssetURL('/thumbnails/villa.webp'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/Io6dxNeHbCbJoF9WLJf9s/ebf89b009affba37df84dcf1934c74e0/r6-maps-villa.jpg',
    background: getMapAssetURL('/backgrounds/villa.webp'),
    backgroundOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5meDfm1l0vEfPTcauK0xYD/628ebffb5d8bbc4c219aa38b536c4f3d/r6s-maps-header-villa.jpg',
    location: 'Tuscany, Italy',
    content:
      'The land belongs to the Vinciguerra, a dangerous crime family known for their smuggling activities. Now we catch the villa in a snapshot of time: Vinciguerras are burning documents and transporting their holdings before the big raid. But they\'ve got wind of Operation Para Bellum and fled, leaving everything in disarray with vital information ready for the taking.'
  },
  {
    slug: 'fortress',
    name: 'Fortress',
    release: { season: { id: 12 }, date: getISODate('2018-12-04') },
    playlists: ['casual'],
    bombSites: [
      '2F Bedroom / 2F Commander\'s Office',
      '2F Dormitory / 2F Briefing Room',
      '1F Kitchen / 1F Cafeteria',
      '1F Hammam / 1F Sitting Room'
    ],
    thumbnail: getMapAssetURL('/thumbnails/fortress.webp'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1MrLwvq61aSSvvUj3dDiZg/18e267c79b8015a1af509a2e5694b18b/r6-maps-fortress.jpg',
    background: getMapAssetURL('/backgrounds/fortress.webp'),
    backgroundOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7tFApj6NCxhHdDzCqEbpRh/db152f7c9e72d420460082820a0fa397/r6s-maps-header-fortress.jpg',
    location: 'Morocco',
    content:
      'This large daytime map features a mudbrick kasbah and iconic architecture unique to the southern region of Morocco. The imposing main entrance greets all visitors with its two towers and Kasbah Sehkra Mania written above the archway.'
  },
  {
    slug: 'outback',
    name: 'Outback',
    release: { season: { id: 13 }, date: getISODate('2019-03-06') },
    reworks: [
      { type: 'full', season: { id: 24 }, date: getISODate('2021-11-30') }
    ],
    playlists: ['ranked', 'unranked', 'casual', 'newcomer'],
    bombSites: [
      '2F Laundry / 2F Games Room',
      '2F Party Room / 2F Office',
      '1F Nature Room / 1F Bushranger Room',
      '1F Compressor Room / 1F Gear Store'
    ],
    thumbnail: getMapAssetURL('/thumbnails/outback.webp'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1vqGVW6pqBZlLKp4h86NnB/08a7e337c0cfa604cde79e755fedb397/r6-maps-outback.jpg',
    background: getMapAssetURL('/backgrounds/outback.webp'),
    backgroundOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4AhC4nK98SdL62vY98kqDB/5d196281369a4a60b99fd7c1e79afd51/r6s-maps-header-outback.jpg',
    location: 'Australia',
    content:
      'Set in Australia\'s Red Heart, this map is an homage to all the dusty service stations and motels that populate the forgotten highways of the continent, places filled with hardworking locals and specialty menu items you\'ll find nowhere else.'
  },
  {
    slug: 'emerald_plains',
    name: 'Emerald Plains',
    release: { season: { id: 25 }, date: getISODate('2022-04-19') },
    playlists: ['ranked', 'unranked', 'casual', 'newcomer', 'deathmatch'],
    bombSites: [
      '2F Administration / 2F CEO Office',
      '2F Private Gallery / 2F Meeting',
      '1F Bar / 1F Lounge',
      '1F Dining / 1F Kitchen'
    ],
    thumbnail: getMapAssetURL('/thumbnails/emeral_plains.webp'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1IGW5GG24TGEv3q8bRc9aJ/03c212485df256206bbb13bb5f96ea21/r6s_maps_emeraldplains_thumbnail.jpg.png',
    background: getMapAssetURL('/backgrounds/emeral_plains.webp'),
    backgroundOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7chYwYhW5QNnKgSq1djzI5/a9fd78d3cdd1a4ef6071eefafe123d9a/r6s-maps-header-emerald-2.jpg',
    location: 'Ireland',
    content:
      'Experience the rolling hills of Northern Ireland in the Emerald Plains country club and private ranch. The two floors on this map are very distinct—with a modern bottom floor contrasting against the classic style of the manor\'s upper floor—in order to emphasize clear call outs and orientation landmarks.'
  },
  {
    slug: 'close_quarter',
    name: 'Close Quarter',
    release: { season: { id: 26 }, date: getISODate('2022-09-06') },
    playlists: ['deathmatch'],
    bombSites: null,
    thumbnail: getMapAssetURL('/thumbnails/close_quarter.webp'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6u3cuepKWT8IFdaGznfc3k/d470334bddf5d6313c15879cde524615/r6s_maps_closequarters.jpg',
    background: getMapAssetURL('/backgrounds/close_quarter.jpg'),
    backgroundOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6xxBbIqDMxpVkSmpWCzR4d/2e10a96b8f811f520873b47a6df0fba3/r6s-maps-header-quarter.jpg',
    location: 'Greece',
    content:
      'Close Quarter is the first dedicated Team Deathmatch map that focuses on movement rather than defense setups. With a circular flow and a good mix of different lines of sight, this facility used by Team Rainbow for training purposes will be a completely different experience.'
  },
  {
    slug: 'stadium_bravo',
    name: 'Stadium Bravo',
    release: { season: { id: 27 }, date: getISODate('2022-09-06') },
    playlists: ['ranked', 'unranked', 'casual', 'deathmatch', 'newcomer'],
    bombSites: [
      '2F Armory Lockers / 2F Archives',
      '2F Penthouse / 2F VIP Lounge',
      '1F Shower / 1F Server',
      '1F Service / 1F Kitchen'
    ],
    thumbnail: getMapAssetURL('/thumbnails/stadium_bravo.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4sQkH6y0h79oYEHuWHGAv/0103ee95bd83c8e222b32f7784e323da/r6s_maps_stadium.jpg',
    background: getMapAssetURL('/backgrounds/stadium_bravo.webp'),
    backgroundOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/67793C12axhuCuRqJdPOa/99675971ab45f3fab7b06ebcbb58f886/r6s-maps-header-stadium.jpg',
    location: 'Greece',
    content:
      'Re-discover Stadium! The iconic map from Road to SI 2021 Event has been polished to make its definitive entry into the game. It features unbreakable glass walls that create an unsual degree of transparency between attackers and defenders in certain places. And the Gantry spawn high over the main structure let attackers approach with style. Once inside make use of the color-coded areas.'
  },
  {
    slug: 'nighthaven_labs',
    name: 'Nighthaven Labs',
    release: { season: { id: 28 }, date: getISODate('2022-12-06') },
    playlists: ['ranked', 'unranked', 'casual', 'deathmatch', 'newcomer'],
    bombSites: [
      '2F Command Center / 2F Servers',
      '1F Kitchen / 1F Cafeteria',
      '1F Storage / 1F Control Room',
      'B Assembly / B Tank'
    ],
    thumbnail: getMapAssetURL('/thumbnails/nighthaven_labs.jpg'),
    thumbnailOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/57i2PyuzpgVFzOvLUSAItO/636e57b198377a5a5d1d35492b52b808/Nighthaven_labs_screen.jpg',
    background: getMapAssetURL('/backgrounds/nighthaven_labs.webp'),
    backgroundOfficial:
      'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7reaqG2pNvPz4Dolph6ofM/172a07221d96f3a29c62b946507ec580/r6s-maps-header-nighthavenlabs.jpg',
    location: 'Offshore',
    content:
      'Nighthaven Labs is a competitive map with many entry points and breach points that will make it tricky to hold a position for too long. Be prepared to be flanked in Nighthaven\'s HQ or to surprise your enemies by breaking in the R&D lab. Be careful to always watch your steps Operators!'
  }
] satisfies Map[];

export const MAPS = MINI_MAPS.map(map => ({
  ...map,
  release: {
    season: SEASONS.find(season => season.id === map.release.season.id)!
  },
  ...(map.reworks && {
    reworks: map.reworks.map(rework => ({
      ...rework,
      season: SEASONS.find(season => season.id === rework.season.id)!
    }))
  })
}));
