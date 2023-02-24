import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import type { Operator } from './types';
import { getNextPriceDropSeasons, getPrices } from '../utils';
import { SEASONS } from '../seasons';
import { type Gadget, GADGETS } from '../gadgets';
import { type Weapon, WEAPONS } from '../weapons';
/** --- */
import { recruitDefense } from './recruit_defense';
import { recruitAttack } from './recruit_attack';
import type { Season } from '../types';
import { smoke } from './smoke';
import { mute } from './mute';
import { sledge } from './sledge';
import { thatcher } from './thatcher';
import { castle } from './castle';
import { pulse } from './pulse';
import { ash } from './ash';
import { thermite } from './thermite';
import { doc } from './doc';
import { rook } from './rook';
import { twitch } from './twitch';
import { montagne } from './montagne';
import { kapkan } from './kapkan';
import { tachanka } from './tachanka';
import { glaz } from './glaz';
import { fuze } from './fuze';
import { jager } from './jager';
import { bandit } from './bandit';
import { blitz } from './blitz';
import { iq } from './iq';
import { frost } from './frost';
import { buck } from './buck';
import { valkyrie } from './valkyrie';
import { blackbeard } from './blackbeard';
import { caveira } from './caveira';
import { capitao } from './capitao';
import { echo } from './echo';
import { hibana } from './hibana';
import { mira } from './mira';
import { jackal } from './jackal';
import { lesion } from './lesion';
import { ying } from './ying';
import { ela } from './ela';
import { zofia } from './zofia';
import { vigil } from './vigil';
import { dokkaebi } from './dokkaebi';
import { lion } from './lion';
import { finka } from './finka';
import { maestro } from './maestro';
import { alibi } from './alibi';
import { clash } from './clash';
import { maverick } from './maverick';
import { kaid } from './kaid';
import { nomad } from './nomad';
import { mozzie } from './mozzie';
import { gridlock } from './gridlock';
import { warden } from './warden';
import { nokk } from './nokk';
import { goyo } from './goyo';
import { amaru } from './amaru';
import { wamai } from './wamai';
import { kali } from './kali';
import { oryx } from './oryx';
import { iana } from './iana';
import { melusi } from './melusi';
import { ace } from './ace';
import { zero } from './zero';
import { aruni } from './aruni';
import { flores } from './flores';
import { thunderbird } from './thunderbird';
import { osa } from './osa';
import { thorn } from './thorn';
import { azami } from './azami';
import { sens } from './sens';
import { grim } from './grim';
import { solis } from './solis';
import { brava } from './brava';

export * from './utils';
export * from './types';

export const MINI_OPERATORS = [
  recruitDefense,
  recruitAttack,
  smoke,
  mute,
  // sledge,
  // thatcher,
  castle,
  pulse,
  // ash,
  // thermite,
  doc,
  rook,
  // twitch,
  // montagne,
  kapkan,
  tachanka,
  // glaz,
  // fuze,
  jager,
  bandit,
  // blitz,
  // iq,
  frost,
  // buck,
  valkyrie,
  // blackbeard,
  caveira,
  // capitao,
  echo,
  // hibana,
  mira,
  // jackal,
  lesion,
  // ying,
  ela,
  // zofia,
  vigil,
  // dokkaebi,
  // lion,
  // finka,
  maestro,
  alibi,
  clash,
  // maverick,
  kaid,
  // nomad,
  mozzie,
  // gridlock,
  warden
  // nokk,
  // goyo,
  // amaru,
  // wamai,
  // kali,
  // oryx,
  // iana,
  // melusi,
  // ace,
  // zero,
  // aruni,
  // flores,
  // thunderbird,
  // osa,
  // thorn,
  // azami,
  // sens,
  // grim,
  // solis,
  // brava
];

export const OPERATORS = MINI_OPERATORS.map((operator: Operator) => {
  const notes = readFileSync(
    join(__dirname, `./${operator.slug}/notes.md`),
    'utf8'
  );

  return {
    ...operator,
    // NOTE: `as TYPE` need to prevent ts(7056) error
    season: SEASONS.find(season => season.id === operator.season.id)! as Season,
    weapons: {
      primary: operator.weapons.primary.map(({ slug, ...attachments }) => ({
        ...(WEAPONS as Weapon[]).find(weapon => weapon.slug === slug)!,
        ...attachments
      })),
      secondary: operator.weapons.secondary.map(({ slug, ...attachments }) => ({
        ...(WEAPONS as Weapon[]).find(weapon => weapon.slug === slug)!,
        ...attachments
      }))
    },
    gadgets: {
      /** `undefined` unless for recruits */
      primary: operator.gadgets.primary?.map(slug => ({
        ...(GADGETS as Gadget[]).find(gadget => gadget.slug === slug)!
      })),
      secondary: operator.gadgets.secondary.map(slug => ({
        ...(GADGETS as Gadget[]).find(gadget => gadget.slug === slug)!
      }))
    },
    ...(!operator.slug.includes('recruit') && {
      /** `undefined` for recruits */
      price: getPrices(SEASONS, operator.season.id)
    }),
    ...(!operator.slug.includes('recruit') &&
      operator.season.id !== 0 && {
        /** `undefined` for recruits */
        nextPriceDropSeasons: getNextPriceDropSeasons(
          SEASONS,
          operator.season.id
        )
      }),
    /** Markdown */
    notes
  };
});
