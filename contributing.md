# Contributing

When showing interest in a PR, or issue, please use the thumbs up/thumbs down emoji on the original message rather than adding comments expressing the same.

Make sure to search for [existing issues](../../issues?q=is%3Aissue) before creating a new one.

Please create an issue to collect feedback prior to large feature additions. If possible try to keep PRs scoped to one feature.

`goals.md` is a great spot to begin contributing.

## Setup

To get ready to work on the codebase, please do the following:

1. Fork & clone the repository, and make sure you're on the `master` branch
2. Run `yarn install`
3. Code your heart out!
4. Submit a pull request

## Seasonal update checklist

- Add new season
  - Append to `SEASONS` in `src/seasons.ts`
  - Update `SeasonSlug` in `src/types.ts`
  - Add `src/assets/seasons/SEASON_SHORTHAND.jpg`
- Add new operator
  - Add `src/operators/OPERATOR_SLUG` (once done, import in `src/operators/index.ts`)
  - Update `OperatorSlug` in `src/operators/types.ts`
  - Add icon to `src/assets/operators/icons/svgs/OPERATOR_SLUG.svg`
  - Add unique ability to `src/assets/operators/abilities/svgs/UNIQUE_ABILITY_SLUG.svg`
  - Add `src/assets/operators/bodies/OPERATOR_SLUG.EXT`
  - Add `src/assets/operators/figures/OPERATOR_SLUG.EXT`
  - Add `src/assets/operators/cards/OPERATOR_SLUG.EXT`
- Possibly update gadgets
  - Add/Update in `src/gadgets.ts`
  - Update `GadgetSlug` in `src/types.ts`
  - Add/Update icon in `src/assets/gadgets/simple/svgs/GADGET_SLUG.svg`
- Possibly add/update weapons
  - Add/Update `src/weapons/WEAPON_CATEGORY_SLUG/WEAPON_SLUG.ts`
  - Add/Update icon in `src/assets/weapons/simple/WEAPON_SLUG.svg`
- Possibly add/update maps
  - Append to `src/maps.ts`
  - Add `src/assets/maps/thumbnails/MAP_SLUG.EXT`
  - Add `src/assets/maps/backgrounds/MAP_SLUG.EXT`
- Optionally update operator notes using [Rainbow Six Wiki](https://rainbowsix.fandom.com/wiki/Special:RecentChanges?hidebots=1&hidelog=1&limit=3000&days=90&enhanced=1&hidecategorization=1&urlversion=2) <!-- Last updated: 2023-09-27 -->
- Update `LAST_UPDATED` variable in `src/meta.ts`

---

Thank you for being interested in this project! ❤️
