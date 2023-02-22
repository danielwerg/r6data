# Goals

Good place to start contributing!

## Operator Unique Ability

- icon svg
- `isElectronic`?
<!-- - `subType`? (ex: Brava: `type: 'count'`, `subType: 'recharge_count'`) -->

## Weapons

- icon svg
- `slot` value (ex: `'primary' | 'secondary'` or array for future proof)

## Operarator Weapon Attachments

<details><summary>Show example</summary>

```ts
const recruit_defense = {
  weapons: {
    primary: [
      {
        slug: 'mp5k',
        sights: ['holo_a'],
        barrels: ['flash_hider'],
        grips: null,
        underBarrels: null
      },
      {
        slug: 'm870',
        sights: ['reflex_a'],
        barrels: null,
        grips: null,
        underBarrels: null
      }
    ],
    secondary: [
      {
        slug: 'p9',
        sights: null,
        barrels: ['muzzle_brake'],
        grips: null,
        underBarrels: null
      },
      {
        slug: 'smg-11',
        sights: ['red_dot_a'],
        barrels: ['compensator'],
        grips: ['vertical_grip'],
        underBarrels: null
      }
    ]
  }
};

const recruit_attack = {
  weapons: {
    primary: [
      {
        slug: 'l85a2',
        sights: ['holo_a'],
        barrels: ['flash_hidder'],
        grips: ['vertical_grip'],
        underBarrels: null
      },
      {
        slug: 'mk_14_ebr',
        sights: ['scope_3.0x'],
        barrels: ['muzzle_brake'],
        grips: ['vertical_grip'],
        underBarrels: null
      },
      {
        slug: 'm249',
        sights: ['reflex_a'],
        barrels: ['compensator'],
        grips: ['vertical_grip'],
        underBarrels: null
      }
    ],
    secondary: [
      {
        slug: 'p12',
        sights: null,
        barrels: ['suppressor'],
        grips: null,
        underBarrels: null
      },
      {
        slug: 'super_shorty',
        sights: null,
        barrels: null,
        grips: null,
        underBarrels: ['laser']
      },
      {
        slug: 'c75_auto',
        sights: null,
        barrels: null,
        grips: null,
        underBarrels: null
      }
    ]
  }
};
```

`src/operators/types.ts`:

```ts
export interface OperatorWeapons {
  primary: OperatorWeapon[];
  secondary: OperatorWeapon[];
}

export interface OperatorWeapon {
  slug: WeaponSlug;
  sights: SightSlug[] | null;
  barrels: BarrelSlug[] | null;
  grips: GripSlug[] | null;
  underBarrels: UnderBarrelSlug[] | null;
}
```

</details>

## Rank Icons v1

Find or make svgs (very low priority)

## Rank Icons v2

Rework, realign and clean up svgs (very low priority)
