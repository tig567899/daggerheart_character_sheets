import {
    AbilityName,
    Dice,
    DistanceRange,
    ModifierField,
    ModifierKey,
    WeaponBurden,
} from "@dh_sheets/app/constants";
import { WeaponData } from "@dh_sheets/app/types";

export interface WeaponTier {
    physical: WeaponData[];
    magical: WeaponData[];
}

export const Tier1PrimaryWeapons: WeaponTier = {
    physical: [
        {
            name: "Broadsword",
            trait: AbilityName.AGILITY,
            range: DistanceRange.MELEE,
            dice: Dice.D8,
            modifier: 0,
            burden: WeaponBurden.ONE_HANDED,
            features: [
                {
                    name: "Reliable",
                    description: "+1 to attack rolls",
                },
            ],
            damageType: "phy",
        },
        {
            name: "Longsword",
            trait: AbilityName.AGILITY,
            range: DistanceRange.MELEE,
            dice: Dice.D8,
            modifier: 3,
            burden: WeaponBurden.TWO_HANDED,
            features: [],
            damageType: "phy",
        },
        {
            name: "Mace",
            trait: AbilityName.STRENGTH,
            range: DistanceRange.MELEE,
            dice: Dice.D8,
            modifier: 1,
            burden: WeaponBurden.ONE_HANDED,
            features: [],
            damageType: "phy",
        },
        {
            name: "Battleaxe",
            trait: AbilityName.STRENGTH,
            range: DistanceRange.MELEE,
            dice: Dice.D10,
            modifier: 3,
            burden: WeaponBurden.TWO_HANDED,
            features: [],
            damageType: "phy",
        },
        {
            name: "Greatsword",
            trait: AbilityName.STRENGTH,
            range: DistanceRange.MELEE,
            dice: Dice.D10,
            modifier: 3,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Massive",
                    description:
                        "−1 to Evasion; on a successful attack, roll an additional damage die and discard the lowest result.",
                    modifiers: [
                        {
                            field: ModifierField.EVASION,
                            bonus: -1,
                            modifierKey: ModifierKey.MASSIVE_WEAPON,
                        },
                    ],
                },
            ],
            damageType: "phy",
        },
        {
            name: "Warhammer",
            trait: AbilityName.STRENGTH,
            range: DistanceRange.MELEE,
            dice: Dice.D12,
            modifier: 3,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Heavy",
                    description: "-1 to Evasion",
                    modifiers: [
                        {
                            field: ModifierField.EVASION,
                            bonus: -1,
                            modifierKey: ModifierKey.HEAVY_WEAPON,
                        },
                    ],
                },
            ],
            damageType: "phy",
        },
        {
            name: "Dagger",
            trait: AbilityName.FINESSE,
            range: DistanceRange.MELEE,
            dice: Dice.D8,
            modifier: 1,
            burden: WeaponBurden.ONE_HANDED,
            features: [],
            damageType: "phy",
        },
        {
            name: "Quarterstaff",
            trait: AbilityName.INSTINCT,
            range: DistanceRange.MELEE,
            dice: Dice.D10,
            modifier: 3,
            burden: WeaponBurden.TWO_HANDED,
            features: [],
            damageType: "phy",
        },
        {
            name: "Cutlass",
            trait: AbilityName.PRESENCE,
            range: DistanceRange.MELEE,
            dice: Dice.D8,
            modifier: 1,
            burden: WeaponBurden.ONE_HANDED,
            features: [],
            damageType: "phy",
        },
        {
            name: "Rapier",
            trait: AbilityName.PRESENCE,
            range: DistanceRange.MELEE,
            dice: Dice.D8,
            modifier: 0,
            burden: WeaponBurden.ONE_HANDED,
            features: [
                {
                    name: "Quick",
                    description:
                        "When you make an attack, you can mark a Stress to target another creature within range.",
                },
            ],
            damageType: "phy",
        },
        {
            name: "Halberd",
            trait: AbilityName.STRENGTH,
            range: DistanceRange.VERY_CLOSE,
            dice: Dice.D8,
            modifier: 2,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Cumbersome",
                    description: "-1 to Finesse",
                    modifiers: [
                        {
                            field: ModifierField.FINESSE,
                            bonus: -1,
                            modifierKey: ModifierKey.CUMBERSOME_WEAPON,
                        },
                    ],
                },
            ],
            damageType: "phy",
        },
        {
            name: "Spear",
            trait: AbilityName.FINESSE,
            range: DistanceRange.VERY_CLOSE,
            dice: Dice.D8,
            modifier: 2,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Cumbersome",
                    description: "-1 to Finesse",
                    modifiers: [
                        {
                            field: ModifierField.FINESSE,
                            bonus: -1,
                            modifierKey: ModifierKey.CUMBERSOME_WEAPON,
                        },
                    ],
                },
            ],
            damageType: "phy",
        },
        {
            name: "Shortbow",
            trait: AbilityName.AGILITY,
            range: DistanceRange.FAR,
            dice: Dice.D6,
            modifier: 2,
            burden: WeaponBurden.TWO_HANDED,
            features: [],
            damageType: "phy",
        },
        {
            name: "Crossbow",
            trait: AbilityName.FINESSE,
            range: DistanceRange.FAR,
            dice: Dice.D6,
            modifier: 1,
            burden: WeaponBurden.ONE_HANDED,
            features: [],
            damageType: "phy",
        },
        {
            name: "Longbow",
            trait: AbilityName.AGILITY,
            range: DistanceRange.VERY_FAR,
            dice: Dice.D6,
            modifier: 3,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Cumbersome",
                    description: "-1 to Finesse",
                    modifiers: [
                        {
                            field: ModifierField.FINESSE,
                            bonus: -1,
                            modifierKey: ModifierKey.CUMBERSOME_WEAPON,
                        },
                    ],
                },
            ],
            damageType: "phy",
        },
    ],
    magical: [
        {
            name: "Hallowed Axe",
            trait: AbilityName.STRENGTH,
            range: DistanceRange.MELEE,
            dice: Dice.D10,
            modifier: 1,
            burden: WeaponBurden.ONE_HANDED,
            features: [],
            damageType: "mag",
        },
        {
            name: "Arcane Gauntlets",
            trait: AbilityName.STRENGTH,
            range: DistanceRange.MELEE,
            dice: Dice.D10,
            modifier: 3,
            burden: WeaponBurden.TWO_HANDED,
            features: [],
            damageType: "mag",
        },
        {
            name: "Glowing Rings",
            trait: AbilityName.AGILITY,
            range: DistanceRange.VERY_CLOSE,
            dice: Dice.D10,
            modifier: 2,
            burden: WeaponBurden.TWO_HANDED,
            features: [],
            damageType: "mag",
        },
        {
            name: "Hand Runes",
            trait: AbilityName.INSTINCT,
            range: DistanceRange.VERY_CLOSE,
            dice: Dice.D10,
            modifier: 0,
            burden: WeaponBurden.ONE_HANDED,
            features: [],
            damageType: "mag",
        },
        {
            name: "Returning Blade",
            trait: AbilityName.FINESSE,
            range: DistanceRange.CLOSE,
            dice: Dice.D8,
            modifier: 1,
            burden: WeaponBurden.ONE_HANDED,
            features: [
                {
                    name: "Returning",
                    description:
                        "When this weapon is thrown within its range, it appears in your hand immediately after the attack.",
                },
            ],
            damageType: "mag",
        },
        {
            name: "Shortstaff",
            trait: AbilityName.INSTINCT,
            range: DistanceRange.CLOSE,
            dice: Dice.D8,
            modifier: 1,
            burden: WeaponBurden.ONE_HANDED,
            features: [],
            damageType: "mag",
        },
        {
            name: "Dualstaff",
            trait: AbilityName.INSTINCT,
            range: DistanceRange.FAR,
            dice: Dice.D6,
            modifier: 3,
            burden: WeaponBurden.TWO_HANDED,
            features: [],
            damageType: "mag",
        },
        {
            name: "Scepter",
            trait: AbilityName.PRESENCE,
            range: DistanceRange.FAR,
            dice: Dice.D6,
            modifier: 0,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Versatile",
                    description:
                        "This weapon can also be used with these statistics — Presence, Melee, d8.",
                },
            ],
            damageType: "mag",
        },
        {
            name: "Wand",
            trait: AbilityName.KNOWLEDGE,
            range: DistanceRange.FAR,
            dice: Dice.D6,
            modifier: 1,
            burden: WeaponBurden.ONE_HANDED,
            features: [],
            damageType: "mag",
        },
        {
            name: "Greatstaff",
            trait: AbilityName.KNOWLEDGE,
            range: DistanceRange.VERY_FAR,
            dice: Dice.D6,
            modifier: 0,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Powerful",
                    description:
                        "On a successful attack, roll an additional damage die and discard the lowest result.",
                },
            ],
            damageType: "mag",
        },
    ],
};

export const Tier2PrimaryWeaons: WeaponTier = {
    physical: [
        {
            name: "Improved Broadsword",
            trait: AbilityName.AGILITY,
            range: DistanceRange.MELEE,
            dice: Dice.D8,
            modifier: 3,
            burden: WeaponBurden.ONE_HANDED,
            features: [
                {
                    name: "Reliable",
                    description: "+1 to attack rolls",
                },
            ],
            damageType: "phy",
        },
        {
            name: "Improved Longsword",
            trait: AbilityName.AGILITY,
            range: DistanceRange.MELEE,
            dice: Dice.D8,
            modifier: 6,
            burden: WeaponBurden.TWO_HANDED,
            features: [],
            damageType: "phy",
        },
        {
            name: "Improved Mace",
            trait: AbilityName.STRENGTH,
            range: DistanceRange.MELEE,
            dice: Dice.D10,
            modifier: 4,
            burden: WeaponBurden.ONE_HANDED,
            features: [],
            damageType: "phy",
        },
        {
            name: "Improved Battleaxe",
            trait: AbilityName.STRENGTH,
            range: DistanceRange.MELEE,
            dice: Dice.D10,
            modifier: 6,
            burden: WeaponBurden.TWO_HANDED,
            features: [],
            damageType: "phy",
        },
        {
            name: "Improved Greatsword",
            trait: AbilityName.STRENGTH,
            range: DistanceRange.MELEE,
            dice: Dice.D10,
            modifier: 6,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Massive",
                    description:
                        "−1 to Evasion; on a successful attack, roll an additional damage die and discard the lowest result.",
                    modifiers: [
                        {
                            field: ModifierField.EVASION,
                            bonus: -1,
                            modifierKey: ModifierKey.MASSIVE_WEAPON,
                        },
                    ],
                },
            ],
            damageType: "phy",
        },
        {
            name: "Improved Warhammer",
            trait: AbilityName.STRENGTH,
            range: DistanceRange.MELEE,
            dice: Dice.D12,
            modifier: 6,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Heavy",
                    description: "-1 to Evasion",
                    modifiers: [
                        {
                            field: ModifierField.EVASION,
                            bonus: -1,
                            modifierKey: ModifierKey.HEAVY_WEAPON,
                        },
                    ],
                },
            ],
            damageType: "phy",
        },
        {
            name: "Improved Dagger",
            trait: AbilityName.FINESSE,
            range: DistanceRange.MELEE,
            dice: Dice.D8,
            modifier: 4,
            burden: WeaponBurden.ONE_HANDED,
            features: [],
            damageType: "phy",
        },
        {
            name: "Improved Quarterstaff",
            trait: AbilityName.INSTINCT,
            range: DistanceRange.MELEE,
            dice: Dice.D10,
            modifier: 6,
            burden: WeaponBurden.TWO_HANDED,
            features: [],
            damageType: "phy",
        },
        {
            name: "Improved Cutlass",
            trait: AbilityName.PRESENCE,
            range: DistanceRange.MELEE,
            dice: Dice.D8,
            modifier: 4,
            burden: WeaponBurden.ONE_HANDED,
            features: [],
            damageType: "phy",
        },
        {
            name: "Improved Rapier",
            trait: AbilityName.PRESENCE,
            range: DistanceRange.MELEE,
            dice: Dice.D8,
            modifier: 3,
            burden: WeaponBurden.ONE_HANDED,
            features: [
                {
                    name: "Quick",
                    description:
                        "When you make an attack, you can mark a Stress to target another creature within range.",
                },
            ],
            damageType: "phy",
        },
        {
            name: "Improved Halberd",
            trait: AbilityName.STRENGTH,
            range: DistanceRange.VERY_CLOSE,
            dice: Dice.D8,
            modifier: 5,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Cumbersome",
                    description: "-1 to Finesse",
                    modifiers: [
                        {
                            field: ModifierField.FINESSE,
                            bonus: -1,
                            modifierKey: ModifierKey.CUMBERSOME_WEAPON,
                        },
                    ],
                },
            ],
            damageType: "phy",
        },
        {
            name: "Improved Spear",
            trait: AbilityName.FINESSE,
            range: DistanceRange.VERY_CLOSE,
            dice: Dice.D8,
            modifier: 5,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Cumbersome",
                    description: "-1 to Finesse",
                    modifiers: [
                        {
                            field: ModifierField.FINESSE,
                            bonus: -1,
                            modifierKey: ModifierKey.CUMBERSOME_WEAPON,
                        },
                    ],
                },
            ],
            damageType: "phy",
        },
        {
            name: "Improved Shortbow",
            trait: AbilityName.AGILITY,
            range: DistanceRange.FAR,
            dice: Dice.D6,
            modifier: 6,
            burden: WeaponBurden.TWO_HANDED,
            features: [],
            damageType: "phy",
        },
        {
            name: "Improved Crossbow",
            trait: AbilityName.FINESSE,
            range: DistanceRange.FAR,
            dice: Dice.D6,
            modifier: 4,
            burden: WeaponBurden.ONE_HANDED,
            features: [],
            damageType: "phy",
        },
        {
            name: "Improved Longbow",
            trait: AbilityName.AGILITY,
            range: DistanceRange.VERY_FAR,
            dice: Dice.D6,
            modifier: 6,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Cumbersome",
                    description: "-1 to Finesse",
                    modifiers: [
                        {
                            field: ModifierField.FINESSE,
                            bonus: -1,
                            modifierKey: ModifierKey.CUMBERSOME_WEAPON,
                        },
                    ],
                },
            ],
            damageType: "phy",
        },
        {
            name: "Gilded Falchion",
            trait: AbilityName.STRENGTH,
            range: DistanceRange.MELEE,
            dice: Dice.D10,
            modifier: 4,
            burden: WeaponBurden.ONE_HANDED,
            features: [
                {
                    name: "Powerful",
                    description:
                        "On a successful attack, roll an additional damage die and discard the lowest result.",
                },
            ],
            damageType: "phy",
        },
        {
            name: "Knuckle Blades",
            trait: AbilityName.STRENGTH,
            range: DistanceRange.MELEE,
            dice: Dice.D10,
            modifier: 6,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Brutal",
                    description:
                        "When you roll the maximum value on a damage die, roll an additional damage die.",
                },
            ],
            damageType: "phy",
        },
        {
            name: "Urok Broadsword",
            trait: AbilityName.FINESSE,
            range: DistanceRange.MELEE,
            dice: Dice.D8,
            modifier: 3,
            burden: WeaponBurden.ONE_HANDED,
            features: [
                {
                    name: "Deadly",
                    description:
                        "When you deal Severe damage, the target must mark an additional HP.",
                },
            ],
            damageType: "phy",
        },
        {
            name: "Bladed Whip",
            trait: AbilityName.AGILITY,
            range: DistanceRange.VERY_CLOSE,
            dice: Dice.D8,
            modifier: 3,
            burden: WeaponBurden.ONE_HANDED,
            features: [
                {
                    name: "Quick",
                    description:
                        "When you make an attack, you can mark a Stress to target another creature within range.",
                },
            ],
            damageType: "phy",
        },
        {
            name: "Steelforged Halberd",
            trait: AbilityName.STRENGTH,
            range: DistanceRange.VERY_CLOSE,
            dice: Dice.D8,
            modifier: 4,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Scary",
                    description:
                        "On a successful attack, the target must mark a Stress.",
                },
            ],
            damageType: "phy",
        },
        {
            name: "War Scythe",
            trait: AbilityName.FINESSE,
            range: DistanceRange.VERY_CLOSE,
            dice: Dice.D8,
            modifier: 5,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Reliable",
                    description: "+1 to attack rolls",
                },
            ],
            damageType: "phy",
        },
        {
            name: "Greatbow",
            trait: AbilityName.STRENGTH,
            range: DistanceRange.FAR,
            dice: Dice.D6,
            modifier: 6,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Powerful",
                    description:
                        "On a successful attack, roll an additional damage die and discard the lowest result.",
                },
            ],
            damageType: "phy",
        },
        {
            name: "Blunderbuss",
            trait: AbilityName.FINESSE,
            range: DistanceRange.FAR,
            dice: Dice.D6,
            modifier: 6,
            burden: WeaponBurden.ONE_HANDED,
            features: [
                {
                    name: "Reloading",
                    description:
                        "After you make an attack, roll a d6. On a result of 1, you must mark a Stress to reload this weapon before you can fire it again.",
                },
            ],
            damageType: "phy",
        },
        {
            name: "Finehair Bow",
            trait: AbilityName.AGILITY,
            range: DistanceRange.VERY_FAR,
            dice: Dice.D6,
            modifier: 5,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Reliable",
                    description: "+1 to attack rolls",
                },
            ],
            damageType: "phy",
        },
    ],
    magical: [
        {
            name: "Improved Hallowed Axe",
            trait: AbilityName.STRENGTH,
            range: DistanceRange.MELEE,
            dice: Dice.D10,
            modifier: 4,
            burden: WeaponBurden.ONE_HANDED,
            features: [],
            damageType: "mag",
        },
        {
            name: "Improved Arcane Gauntlets",
            trait: AbilityName.STRENGTH,
            range: DistanceRange.MELEE,
            dice: Dice.D10,
            modifier: 6,
            burden: WeaponBurden.TWO_HANDED,
            features: [],
            damageType: "mag",
        },
        {
            name: "Improved Glowing Rings",
            trait: AbilityName.AGILITY,
            range: DistanceRange.VERY_CLOSE,
            dice: Dice.D10,
            modifier: 5,
            burden: WeaponBurden.TWO_HANDED,
            features: [],
            damageType: "mag",
        },
        {
            name: "Improved Hand Runes",
            trait: AbilityName.INSTINCT,
            range: DistanceRange.VERY_CLOSE,
            dice: Dice.D10,
            modifier: 3,
            burden: WeaponBurden.ONE_HANDED,
            features: [],
            damageType: "mag",
        },
        {
            name: "Improved Returning Blade",
            trait: AbilityName.FINESSE,
            range: DistanceRange.CLOSE,
            dice: Dice.D8,
            modifier: 4,
            burden: WeaponBurden.ONE_HANDED,
            features: [
                {
                    name: "Returning",
                    description:
                        "When this weapon is thrown within its range, it appears in your hand immediately after the attack.",
                },
            ],
            damageType: "mag",
        },
        {
            name: "Improved Shortstaff",
            trait: AbilityName.INSTINCT,
            range: DistanceRange.CLOSE,
            dice: Dice.D10,
            modifier: 4,
            burden: WeaponBurden.ONE_HANDED,
            features: [],
            damageType: "mag",
        },
        {
            name: "Improved Dualstaff",
            trait: AbilityName.INSTINCT,
            range: DistanceRange.FAR,
            dice: Dice.D6,
            modifier: 6,
            burden: WeaponBurden.TWO_HANDED,
            features: [],
            damageType: "mag",
        },
        {
            name: "Improved Scepter",
            trait: AbilityName.PRESENCE,
            range: DistanceRange.FAR,
            dice: Dice.D6,
            modifier: 3,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Versatile",
                    description:
                        "This weapon can also be used with these statistics—Presence, Melee, d8+3.",
                },
            ],
            damageType: "mag",
        },
        {
            name: "Improved Wand",
            trait: AbilityName.KNOWLEDGE,
            range: DistanceRange.FAR,
            dice: Dice.D6,
            modifier: 4,
            burden: WeaponBurden.ONE_HANDED,
            features: [],
            damageType: "mag",
        },
        {
            name: "Improved Greatstaff",
            trait: AbilityName.KNOWLEDGE,
            range: DistanceRange.VERY_FAR,
            dice: Dice.D6,
            modifier: 3,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Powerful",
                    description:
                        "On a successful attack, roll an additional damage die and discard the lowest result.",
                },
            ],
            damageType: "mag",
        },
        {
            name: "Ego Blade",
            trait: AbilityName.AGILITY,
            range: DistanceRange.MELEE,
            dice: Dice.D12,
            modifier: 4,
            burden: WeaponBurden.ONE_HANDED,
            features: [
                {
                    name: "Pompous",
                    description:
                        "You must have a Presence of 0 or lower to use this weapon.",
                },
            ],
            damageType: "mag",
        },
        {
            name: "Casting Sword",
            trait: AbilityName.STRENGTH,
            range: DistanceRange.MELEE,
            dice: Dice.D10,
            modifier: 4,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Versatile",
                    description:
                        "This weapon can also be used with these statistics—Knowledge, Far, d6+3.",
                },
            ],
            damageType: "mag",
        },
        {
            name: "Devouring Dagger",
            trait: AbilityName.FINESSE,
            range: DistanceRange.MELEE,
            dice: Dice.D8,
            modifier: 4,
            burden: WeaponBurden.ONE_HANDED,
            features: [
                {
                    name: "Scary",
                    description:
                        "On a successful attack, the target must mark a Stress.",
                },
            ],
            damageType: "mag",
        },
        {
            name: "Hammer of Exota",
            trait: AbilityName.INSTINCT,
            range: DistanceRange.MELEE,
            dice: Dice.D8,
            modifier: 6,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Eruptive",
                    description:
                        "On a successful attack against a target within Melee range, all other adversaries within Very Close range must succeed on a reaction roll (14) or take half damage.",
                },
            ],
            damageType: "mag",
        },
        {
            name: "Yutari Bloodbow",
            trait: AbilityName.FINESSE,
            range: DistanceRange.FAR,
            dice: Dice.D6,
            modifier: 4,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Brutal",
                    description:
                        "When you roll the maximum value on a damage die, roll an additional damage die.",
                },
            ],
            damageType: "mag",
        },
        {
            name: "Elder Bow",
            trait: AbilityName.INSTINCT,
            range: DistanceRange.FAR,
            dice: Dice.D6,
            modifier: 4,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Powerful",
                    description:
                        "On a successful attack, roll an additional damage die and discard the lowest result.",
                },
            ],
            damageType: "mag",
        },
        {
            name: "Scepter of Elias",
            trait: AbilityName.PRESENCE,
            range: DistanceRange.FAR,
            dice: Dice.D6,
            modifier: 3,
            burden: WeaponBurden.ONE_HANDED,
            features: [
                {
                    name: "Invigorating",
                    description:
                        "On a successful attack, roll a d4. On a result of 4, clear a Stress.",
                },
            ],
            damageType: "mag",
        },
        {
            name: "Wand of Enthrallment",
            trait: AbilityName.PRESENCE,
            range: DistanceRange.FAR,
            dice: Dice.D6,
            modifier: 4,
            burden: WeaponBurden.ONE_HANDED,
            features: [
                {
                    name: "Persuasive",
                    description:
                        "Before you make a Presence Roll, you can mark a Stress to gain a +2 bonus to the result.",
                },
            ],
            damageType: "mag",
        },
        {
            name: "Keeper's Staff",
            trait: AbilityName.KNOWLEDGE,
            range: DistanceRange.FAR,
            dice: Dice.D6,
            modifier: 4,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Reliable",
                    description: "+1 to attack rolls",
                },
            ],
            damageType: "mag",
        },
    ],
};

export const Tier3PrimaryWeapons: WeaponTier = {
    physical: [
        {
            name: "Advanced Broadsword",
            trait: AbilityName.AGILITY,
            range: DistanceRange.MELEE,
            dice: Dice.D8,
            modifier: 6,
            burden: WeaponBurden.ONE_HANDED,
            features: [
                {
                    name: "Reliable",
                    description: "+1 to attack rolls",
                },
            ],
            damageType: "phy",
        },
        {
            name: "Advanced Longsword",
            trait: AbilityName.AGILITY,
            range: DistanceRange.MELEE,
            dice: Dice.D8,
            modifier: 9,
            burden: WeaponBurden.TWO_HANDED,
            features: [],
            damageType: "phy",
        },
        {
            name: "Advanced Mace",
            trait: AbilityName.STRENGTH,
            range: DistanceRange.MELEE,
            dice: Dice.D8,
            modifier: 7,
            burden: WeaponBurden.ONE_HANDED,
            features: [],
            damageType: "phy",
        },
        {
            name: "Advanced Battleaxe",
            trait: AbilityName.STRENGTH,
            range: DistanceRange.MELEE,
            dice: Dice.D10,
            modifier: 9,
            burden: WeaponBurden.TWO_HANDED,
            features: [],
            damageType: "phy",
        },
        {
            name: "Advanced Greatsword",
            trait: AbilityName.STRENGTH,
            range: DistanceRange.MELEE,
            dice: Dice.D10,
            modifier: 9,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Massive",
                    description:
                        "−1 to Evasion; on a successful attack, roll an additional damage die and discard the lowest result.",
                    modifiers: [
                        {
                            field: ModifierField.EVASION,
                            bonus: -1,
                            modifierKey: ModifierKey.MASSIVE_WEAPON,
                        },
                    ],
                },
            ],
            damageType: "phy",
        },
        {
            name: "Advanced Warhammer",
            trait: AbilityName.STRENGTH,
            range: DistanceRange.MELEE,
            dice: Dice.D12,
            modifier: 9,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Heavy",
                    description: "-1 to Evasion",
                    modifiers: [
                        {
                            field: ModifierField.EVASION,
                            bonus: -1,
                            modifierKey: ModifierKey.HEAVY_WEAPON,
                        },
                    ],
                },
            ],
            damageType: "phy",
        },
        {
            name: "Advanced Dagger",
            trait: AbilityName.FINESSE,
            range: DistanceRange.MELEE,
            dice: Dice.D8,
            modifier: 7,
            burden: WeaponBurden.ONE_HANDED,
            features: [],
            damageType: "phy",
        },
        {
            name: "Advanced Quarterstaff",
            trait: AbilityName.INSTINCT,
            range: DistanceRange.MELEE,
            dice: Dice.D10,
            modifier: 9,
            burden: WeaponBurden.TWO_HANDED,
            features: [],
            damageType: "phy",
        },
        {
            name: "Advanced Cutlass",
            trait: AbilityName.PRESENCE,
            range: DistanceRange.MELEE,
            dice: Dice.D8,
            modifier: 7,
            burden: WeaponBurden.ONE_HANDED,
            features: [],
            damageType: "phy",
        },
        {
            name: "Advanced Rapier",
            trait: AbilityName.PRESENCE,
            range: DistanceRange.MELEE,
            dice: Dice.D8,
            modifier: 6,
            burden: WeaponBurden.ONE_HANDED,
            features: [
                {
                    name: "Quick",
                    description:
                        "When you make an attack, you can mark a Stress to target another creature within range.",
                },
            ],
            damageType: "phy",
        },
        {
            name: "Advanced Halberd",
            trait: AbilityName.STRENGTH,
            range: DistanceRange.VERY_CLOSE,
            dice: Dice.D8,
            modifier: 8,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Cumbersome",
                    description: "-1 to Finesse",
                    modifiers: [
                        {
                            field: ModifierField.FINESSE,
                            bonus: -1,
                            modifierKey: ModifierKey.CUMBERSOME_WEAPON,
                        },
                    ],
                },
            ],
            damageType: "phy",
        },
        {
            name: "Advanced Spear",
            trait: AbilityName.FINESSE,
            range: DistanceRange.VERY_CLOSE,
            dice: Dice.D8,
            modifier: 8,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Cumbersome",
                    description: "-1 to Finesse",
                    modifiers: [
                        {
                            field: ModifierField.FINESSE,
                            bonus: -1,
                            modifierKey: ModifierKey.CUMBERSOME_WEAPON,
                        },
                    ],
                },
            ],
            damageType: "phy",
        },
        {
            name: "Advanced Shortbow",
            trait: AbilityName.AGILITY,
            range: DistanceRange.FAR,
            dice: Dice.D6,
            modifier: 9,
            burden: WeaponBurden.TWO_HANDED,
            features: [],
            damageType: "phy",
        },
        {
            name: "Advanced Crossbow",
            trait: AbilityName.FINESSE,
            range: DistanceRange.FAR,
            dice: Dice.D6,
            modifier: 7,
            burden: WeaponBurden.ONE_HANDED,
            features: [],
            damageType: "phy",
        },
        {
            name: "Advanced Longbow",
            trait: AbilityName.AGILITY,
            range: DistanceRange.VERY_FAR,
            dice: Dice.D6,
            modifier: 9,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Cumbersome",
                    description: "-1 to Finesse",
                    modifiers: [
                        {
                            field: ModifierField.FINESSE,
                            bonus: -1,
                            modifierKey: ModifierKey.CUMBERSOME_WEAPON,
                        },
                    ],
                },
            ],
            damageType: "phy",
        },
        {
            name: "Flickerfly Blade",
            trait: AbilityName.AGILITY,
            range: DistanceRange.MELEE,
            dice: Dice.D8,
            modifier: 5,
            burden: WeaponBurden.ONE_HANDED,
            features: [
                {
                    name: "Sharpwing",
                    description:
                        "Gain a bonus to your damage rolls equal to your Agility.",
                },
            ],
            damageType: "phy",
        },
        {
            name: "Bravesword",
            trait: AbilityName.STRENGTH,
            range: DistanceRange.MELEE,
            dice: Dice.D12,
            modifier: 7,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Brave",
                    description:
                        "−1 to Evasion; +3 to Severe damage threshold.",
                    modifiers: [
                        {
                            field: ModifierField.EVASION,
                            bonus: -1,
                            modifierKey: ModifierKey.BRAVE_WEAPON_EVA
                        },
                        {
                            field: ModifierField.SEVERE_THRESHOLD,
                            bonus: 3,
                            modifierKey: ModifierKey.BRAVE_WEAPON_SEV
                        },
                    ]
                },
            ],
            damageType: "phy",
        },
        {
            name: "Hammer of Wrath",
            trait: AbilityName.STRENGTH,
            range: DistanceRange.MELEE,
            dice: Dice.D10,
            modifier: 7,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Devastating",
                    description:
                        "Before you make an attack roll, you can mark a Stress to use a d20 as your damage die.",
                },
            ],
            damageType: "phy",
        },
        {
            name: "Protective",
            trait: AbilityName.STRENGTH,
            range: DistanceRange.MELEE,
            dice: Dice.D10,
            modifier: 7,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Protective",
                    description: "+1 to Armor Score",
                    modifiers: [
                        {
                            field: ModifierField.ARMOR_SCORE,
                            bonus: 1,
                            modifierKey: ModifierKey.PROTECTIVE_WEAPON,
                        },
                    ],
                },
            ],
            damageType: "phy",
        },
        {
            name: "Meridian Cutlass",
            trait: AbilityName.PRESENCE,
            range: DistanceRange.MELEE,
            dice: Dice.D10,
            modifier: 5,
            burden: WeaponBurden.ONE_HANDED,
            features: [
                {
                    name: "Dueling",
                    description:
                        "When there are no other creatures within Close range of the target, gain advantage on your attack roll against them.",
                },
            ],
            damageType: "phy",
        },
        {
            name: "Retractable Saber",
            trait: AbilityName.PRESENCE,
            range: DistanceRange.MELEE,
            dice: Dice.D10,
            modifier: 7,
            burden: WeaponBurden.ONE_HANDED,
            features: [
                {
                    name: "Retractable",
                    description:
                        "The blade can be hidden in the hilt to avoid detection.",
                },
            ],
            damageType: "phy",
        },
        {
            name: "Double Flail",
            trait: AbilityName.AGILITY,
            range: DistanceRange.VERY_CLOSE,
            dice: Dice.D10,
            modifier: 8,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Powerful",
                    description:
                        "On a successful attack, roll an additional damage die and discard the lowest result.",
                },
            ],
            damageType: "phy",
        },
        {
            name: "Talon Blades",
            trait: AbilityName.FINESSE,
            range: DistanceRange.CLOSE,
            dice: Dice.D10,
            modifier: 7,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Brutal",
                    description:
                        "When you roll the maximum value on a damage die, roll an additional damage die.",
                },
            ],
            damageType: "phy",
        },
        {
            name: "Spiked Bow",
            trait: AbilityName.AGILITY,
            range: DistanceRange.VERY_FAR,
            dice: Dice.D6,
            modifier: 7,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Versatile",
                    description:
                        "This weapon can also be used with these statistics—Agility, Melee, d10+5.",
                },
            ],
            damageType: "phy",
        },
        {
            name: "Black Powder Revolver",
            trait: AbilityName.FINESSE,
            range: DistanceRange.VERY_FAR,
            dice: Dice.D6,
            modifier: 6,
            burden: WeaponBurden.ONE_HANDED,
            features: [
                {
                    name: "Quick",
                    description:
                        "After you make an attack, roll a d6. On a result of 1, you must mark a Stress to reload this weapon before you can fire it again.",
                },
            ],
            damageType: "phy",
        },
    ],
    magical: [
        {
            name: "Advanced Hallowed Axe",
            trait: AbilityName.STRENGTH,
            range: DistanceRange.MELEE,
            dice: Dice.D10,
            modifier: 7,
            burden: WeaponBurden.ONE_HANDED,
            features: [],
            damageType: "mag",
        },
        {
            name: "Advanced Arcane Gauntlets",
            trait: AbilityName.STRENGTH,
            range: DistanceRange.MELEE,
            dice: Dice.D10,
            modifier: 9,
            burden: WeaponBurden.TWO_HANDED,
            features: [],
            damageType: "mag",
        },
        {
            name: "Advanced Glowing Rings",
            trait: AbilityName.AGILITY,
            range: DistanceRange.VERY_CLOSE,
            dice: Dice.D10,
            modifier: 8,
            burden: WeaponBurden.TWO_HANDED,
            features: [],
            damageType: "mag",
        },
        {
            name: "Advanced Hand Runes",
            trait: AbilityName.INSTINCT,
            range: DistanceRange.VERY_CLOSE,
            dice: Dice.D10,
            modifier: 6,
            burden: WeaponBurden.ONE_HANDED,
            features: [],
            damageType: "mag",
        },
        {
            name: "Advanced Returning Blade",
            trait: AbilityName.FINESSE,
            range: DistanceRange.CLOSE,
            dice: Dice.D8,
            modifier: 7,
            burden: WeaponBurden.ONE_HANDED,
            features: [
                {
                    name: "Returning",
                    description:
                        "When this weapon is thrown within its range, it appears in your hand immediately after the attack.",
                },
            ],
            damageType: "mag",
        },
        {
            name: "Advanced Shortstaff",
            trait: AbilityName.INSTINCT,
            range: DistanceRange.CLOSE,
            dice: Dice.D8,
            modifier: 7,
            burden: WeaponBurden.ONE_HANDED,
            features: [],
            damageType: "mag",
        },
        {
            name: "Advanced Dualstaff",
            trait: AbilityName.INSTINCT,
            range: DistanceRange.FAR,
            dice: Dice.D6,
            modifier: 9,
            burden: WeaponBurden.TWO_HANDED,
            features: [],
            damageType: "mag",
        },
        {
            name: "Advanced Scepter",
            trait: AbilityName.PRESENCE,
            range: DistanceRange.FAR,
            dice: Dice.D6,
            modifier: 6,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Versatile",
                    description:
                        "This weapon can also be used with these statistics—Presence, Melee, d8+4.",
                },
            ],
            damageType: "mag",
        },
        {
            name: "Advanced Wand",
            trait: AbilityName.KNOWLEDGE,
            range: DistanceRange.FAR,
            dice: Dice.D6,
            modifier: 7,
            burden: WeaponBurden.ONE_HANDED,
            features: [],
            damageType: "mag",
        },
        {
            name: "Advanced Greatstaff",
            trait: AbilityName.KNOWLEDGE,
            range: DistanceRange.VERY_FAR,
            dice: Dice.D6,
            modifier: 6,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Powerful",
                    description:
                        "On a successful attack, roll an additional damage die and discard the lowest result.",
                },
            ],
            damageType: "mag",
        },
        {
            name: "Axe of Fortunis",
            trait: AbilityName.STRENGTH,
            range: DistanceRange.MELEE,
            dice: Dice.D10,
            modifier: 8,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Lucky",
                    description:
                        "On a failed attack, you can mark a Stress to reroll your attack.",
                },
            ],
            damageType: "mag",
        },
        {
            name: "Blessed Anlace",
            trait: AbilityName.INSTINCT,
            range: DistanceRange.MELEE,
            dice: Dice.D10,
            modifier: 6,
            burden: WeaponBurden.ONE_HANDED,
            features: [
                {
                    name: "Healing",
                    description:
                        "During downtime, automatically clear a Hit Point.",
                },
            ],
            damageType: "mag",
        },
        {
            name: "Ghostblade",
            trait: AbilityName.PRESENCE,
            range: DistanceRange.MELEE,
            dice: Dice.D10,
            modifier: 7,
            burden: WeaponBurden.ONE_HANDED,
            features: [
                {
                    name: "Otherworldly",
                    description:
                        "On a successful attack, you can deal physical or magic damage.",
                },
            ],
            damageType: "mag",
        },
        {
            name: "Runes of Ruination",
            trait: AbilityName.KNOWLEDGE,
            range: DistanceRange.VERY_CLOSE,
            dice: Dice.D20,
            modifier: 4,
            burden: WeaponBurden.ONE_HANDED,
            features: [
                {
                    name: "Painful",
                    description:
                        "Each time you make a successful attack, you must mark a Stress.",
                },
            ],
            damageType: "mag",
        },
        {
            name: "Widogast Pendant",
            trait: AbilityName.KNOWLEDGE,
            range: DistanceRange.CLOSE,
            dice: Dice.D10,
            modifier: 5,
            burden: WeaponBurden.ONE_HANDED,
            features: [
                {
                    name: "Timebending",
                    description:
                        "You choose the target of your attack after making your attack roll.",
                },
            ],
            damageType: "mag",
        },
        {
            name: "Gilded Bow",
            trait: AbilityName.FINESSE,
            range: DistanceRange.FAR,
            dice: Dice.D6,
            modifier: 7,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Self-Correcting",
                    description:
                        "When you roll a 1 on a damage die, it deals 6 damage instead.",
                },
            ],
            damageType: "mag",
        },
        {
            name: "Firestaff",
            trait: AbilityName.INSTINCT,
            range: DistanceRange.FAR,
            dice: Dice.D6,
            modifier: 7,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Burning",
                    description:
                        "When you roll a 6 on a damage die, the target must mark a Stress.",
                },
            ],
            damageType: "mag",
        },
        {
            name: "Mage Orb",
            trait: AbilityName.KNOWLEDGE,
            range: DistanceRange.FAR,
            dice: Dice.D6,
            modifier: 7,
            burden: WeaponBurden.ONE_HANDED,
            features: [
                {
                    name: "Powerful",
                    description:
                        "On a successful attack, roll an additional damage die and discard the lowest result.",
                },
            ],
            damageType: "mag",
        },
        {
            name: "Ilmari’s Rifle",
            trait: AbilityName.FINESSE,
            range: DistanceRange.VERY_FAR,
            dice: Dice.D6,
            modifier: 6,
            burden: WeaponBurden.ONE_HANDED,
            features: [
                {
                    name: "Reloading",
                    description:
                        "After you make an attack, roll a d6. On a result of 1, you must mark a Stress to reload this weapon before you can fire it again.",
                },
            ],
            damageType: "mag",
        },
    ],
};

export const Tier4PrimaryWeapons: WeaponTier = {
    physical: [
        {
            name: "Legendary Broadsword",
            trait: AbilityName.AGILITY,
            range: DistanceRange.MELEE,
            dice: Dice.D8,
            modifier: 9,
            burden: WeaponBurden.ONE_HANDED,
            features: [
                {
                    name: "Reliable",
                    description: "+1 to attack rolls",
                },
            ],
            damageType: "phy",
        },
        {
            name: "Legendary Longsword",
            trait: AbilityName.AGILITY,
            range: DistanceRange.MELEE,
            dice: Dice.D8,
            modifier: 12,
            burden: WeaponBurden.TWO_HANDED,
            features: [],
            damageType: "phy",
        },
        {
            name: "Legendary Mace",
            trait: AbilityName.STRENGTH,
            range: DistanceRange.MELEE,
            dice: Dice.D8,
            modifier: 10,
            burden: WeaponBurden.ONE_HANDED,
            features: [],
            damageType: "phy",
        },
        {
            name: "Legendary Battleaxe",
            trait: AbilityName.STRENGTH,
            range: DistanceRange.MELEE,
            dice: Dice.D10,
            modifier: 12,
            burden: WeaponBurden.TWO_HANDED,
            features: [],
            damageType: "phy",
        },
        {
            name: "Legendary Greatsword",
            trait: AbilityName.STRENGTH,
            range: DistanceRange.MELEE,
            dice: Dice.D10,
            modifier: 12,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Massive",
                    description:
                        "−1 to Evasion; on a successful attack, roll an additional damage die and discard the lowest result.",
                    modifiers: [
                        {
                            field: ModifierField.EVASION,
                            bonus: -1,
                            modifierKey: ModifierKey.MASSIVE_WEAPON,
                        },
                    ],
                },
            ],
            damageType: "phy",
        },
        {
            name: "Legendary Warhammer",
            trait: AbilityName.STRENGTH,
            range: DistanceRange.MELEE,
            dice: Dice.D12,
            modifier: 12,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Heavy",
                    description: "−1 to Evasion",
                    modifiers: [
                        {
                            field: ModifierField.EVASION,
                            bonus: -1,
                            modifierKey: ModifierKey.HEAVY_WEAPON,
                        },
                    ],
                },
            ],
            damageType: "phy",
        },
        {
            name: "Legendary Dagger",
            trait: AbilityName.FINESSE,
            range: DistanceRange.MELEE,
            dice: Dice.D8,
            modifier: 10,
            burden: WeaponBurden.ONE_HANDED,
            features: [],
            damageType: "phy",
        },
        {
            name: "Legendary Quarterstaff",
            trait: AbilityName.INSTINCT,
            range: DistanceRange.MELEE,
            dice: Dice.D10,
            modifier: 12,
            burden: WeaponBurden.TWO_HANDED,
            features: [],
            damageType: "phy",
        },
        {
            name: "Legendary Cutlass",
            trait: AbilityName.PRESENCE,
            range: DistanceRange.MELEE,
            dice: Dice.D8,
            modifier: 10,
            burden: WeaponBurden.ONE_HANDED,
            features: [],
            damageType: "phy",
        },
        {
            name: "Legendary Rapier",
            trait: AbilityName.PRESENCE,
            range: DistanceRange.MELEE,
            dice: Dice.D8,
            modifier: 9,
            burden: WeaponBurden.ONE_HANDED,
            features: [
                {
                    name: "Quick",
                    description:
                        "When you make an attack, you can mark a Stress to target another creature within range.",
                },
            ],
            damageType: "phy",
        },
        {
            name: "Legendary Halberd",
            trait: AbilityName.STRENGTH,
            range: DistanceRange.VERY_CLOSE,
            dice: Dice.D8,
            modifier: 11,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Cumbersome",
                    description: "−1 to Finesse",
                    modifiers: [
                        {
                            field: ModifierField.FINESSE,
                            bonus: -1,
                            modifierKey: ModifierKey.CUMBERSOME_WEAPON,
                        },
                    ],
                },
            ],
            damageType: "phy",
        },
        {
            name: "Legendary Spear",
            trait: AbilityName.FINESSE,
            range: DistanceRange.VERY_CLOSE,
            dice: Dice.D8,
            modifier: 11,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Cumbersome",
                    description: "−1 to Finesse",
                    modifiers: [
                        {
                            field: ModifierField.FINESSE,
                            bonus: -1,
                            modifierKey: ModifierKey.CUMBERSOME_WEAPON,
                        },
                    ],
                },
            ],
            damageType: "phy",
        },
        {
            name: "Legendary Shortbow",
            trait: AbilityName.AGILITY,
            range: DistanceRange.FAR,
            dice: Dice.D6,
            modifier: 12,
            burden: WeaponBurden.TWO_HANDED,
            features: [],
            damageType: "phy",
        },
        {
            name: "Legendary Crossbow",
            trait: AbilityName.FINESSE,
            range: DistanceRange.FAR,
            dice: Dice.D6,
            modifier: 10,
            burden: WeaponBurden.ONE_HANDED,
            features: [],
            damageType: "phy",
        },
        {
            name: "Legendary Longbow",
            trait: AbilityName.AGILITY,
            range: DistanceRange.VERY_FAR,
            dice: Dice.D6,
            modifier: 12,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Cumbersome",
                    description: "−1 to Finesse",
                    modifiers: [
                        {
                            field: ModifierField.FINESSE,
                            bonus: -1,
                            modifierKey: ModifierKey.CUMBERSOME_WEAPON,
                        },
                    ],
                },
            ],
            damageType: "phy",
        },
        {
            name: "Dual-Ended Sword",
            trait: AbilityName.AGILITY,
            range: DistanceRange.MELEE,
            dice: Dice.D10,
            modifier: 9,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Quick",
                    description:
                        "When you make an attack, you can mark a Stress to target another creature within range.",
                },
            ],
            damageType: "phy",
        },
        {
            name: "Impact Gauntlet",
            trait: AbilityName.STRENGTH,
            range: DistanceRange.MELEE,
            dice: Dice.D10,
            modifier: 11,
            burden: WeaponBurden.ONE_HANDED,
            features: [
                {
                    name: "Concussive",
                    description:
                        "On a successful attack, you can spend a Hope to knock the target back to Far range.",
                },
            ],
            damageType: "phy",
        },
        {
            name: "Sledge Axe",
            trait: AbilityName.STRENGTH,
            range: DistanceRange.MELEE,
            dice: Dice.D12,
            modifier: 13,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Destructive",
                    description:
                        "−1 to Agility; on a successful attack, all adversaries within Very Close range must mark a Stress.",
                    modifiers: [
                        {
                            field: ModifierField.AGILITY,
                            bonus: -1,
                            modifierKey: ModifierKey.DESTRUCTIVE_WEAPON,
                        },
                    ],
                },
            ],
            damageType: "phy",
        },
        {
            name: "Curved Dagger",
            trait: AbilityName.FINESSE,
            range: DistanceRange.MELEE,
            dice: Dice.D8,
            modifier: 9,
            burden: WeaponBurden.ONE_HANDED,
            features: [
                {
                    name: "Serrated",
                    description:
                        "When you roll a 1 on a damage die, it deals 8 damage instead.",
                },
            ],
            damageType: "phy",
        },
        {
            name: "Extended Polearm",
            trait: AbilityName.FINESSE,
            range: DistanceRange.VERY_CLOSE,
            dice: Dice.D8,
            modifier: 10,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Long",
                    description:
                        "This weapon’s attack targets all adversaries in a line within range.",
                },
            ],
            damageType: "phy",
        },
        {
            name: "Swinging Ropeblade",
            trait: AbilityName.PRESENCE,
            range: DistanceRange.CLOSE,
            dice: Dice.D8,
            modifier: 9,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Grappling",
                    description: (
                        <span>
                            On a successful attack, you can spend a Hope to{" "}
                            <i>Restrain</i> the target or pull them into Melee
                            range with you.
                        </span>
                    ),
                },
            ],
            damageType: "phy",
        },
        {
            name: "Ricochet Axes",
            trait: AbilityName.AGILITY,
            range: DistanceRange.FAR,
            dice: Dice.D6,
            modifier: 11,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Ricochet Axes",
                    description:
                        "Mark 1 or more Stress to hit that many targets in range of the attack.",
                },
            ],
            damageType: "phy",
        },
        {
            name: "Aantari Bow",
            trait: AbilityName.FINESSE,
            range: DistanceRange.FAR,
            dice: Dice.D6,
            modifier: 11,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Reliable",
                    description: "+1 to attack rolls",
                },
            ],
            damageType: "phy",
        },
        {
            name: "Hand Cannon",
            trait: AbilityName.FINESSE,
            range: DistanceRange.VERY_FAR,
            dice: Dice.D6,
            modifier: 12,
            burden: WeaponBurden.ONE_HANDED,
            features: [
                {
                    name: "Reloading",
                    description:
                        "After you make an attack, roll a d6. On a 1, you must mark a Stress to reload this weapon before you can fire it again.",
                },
            ],
            damageType: "phy",
        },
    ],
    magical: [
        {
            name: "Legendary Hallowed Axe",
            trait: AbilityName.STRENGTH,
            range: DistanceRange.MELEE,
            dice: Dice.D10,
            modifier: 10,
            burden: WeaponBurden.ONE_HANDED,
            features: [],
            damageType: "mag",
        },
        {
            name: "Legendary Arcane Gauntlets",
            trait: AbilityName.STRENGTH,
            range: DistanceRange.MELEE,
            dice: Dice.D10,
            modifier: 12,
            burden: WeaponBurden.TWO_HANDED,
            features: [],
            damageType: "mag",
        },
        {
            name: "Legendary Glowing Rings",
            trait: AbilityName.AGILITY,
            range: DistanceRange.VERY_CLOSE,
            dice: Dice.D10,
            modifier: 11,
            burden: WeaponBurden.TWO_HANDED,
            features: [],
            damageType: "mag",
        },
        {
            name: "Legendary Hand Runes",
            trait: AbilityName.INSTINCT,
            range: DistanceRange.VERY_CLOSE,
            dice: Dice.D10,
            modifier: 9,
            burden: WeaponBurden.ONE_HANDED,
            features: [],
            damageType: "mag",
        },
        {
            name: "Legendary Returning Blade",
            trait: AbilityName.FINESSE,
            range: DistanceRange.CLOSE,
            dice: Dice.D8,
            modifier: 10,
            burden: WeaponBurden.ONE_HANDED,
            features: [
                {
                    name: "Returning",
                    description:
                        "When this weapon is thrown within its range, it appears in your hand immediately after the attack.",
                },
            ],
            damageType: "mag",
        },
        {
            name: "Legendary Shortstaff",
            trait: AbilityName.INSTINCT,
            range: DistanceRange.CLOSE,
            dice: Dice.D8,
            modifier: 10,
            burden: WeaponBurden.ONE_HANDED,
            features: [],
            damageType: "mag",
        },
        {
            name: "Legendary Dualstaff",
            trait: AbilityName.INSTINCT,
            range: DistanceRange.FAR,
            dice: Dice.D8,
            modifier: 12,
            burden: WeaponBurden.TWO_HANDED,
            features: [],
            damageType: "mag",
        },
        {
            name: "Legendary Scepter",
            trait: AbilityName.PRESENCE,
            range: DistanceRange.FAR,
            dice: Dice.D6,
            modifier: 9,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Versatile",
                    description:
                        "This weapon can also be used with these statistics—Presence, Melee, d8+6.",
                },
            ],
            damageType: "mag",
        },
        {
            name: "Legendary Wand",
            trait: AbilityName.KNOWLEDGE,
            range: DistanceRange.FAR,
            dice: Dice.D6,
            modifier: 10,
            burden: WeaponBurden.ONE_HANDED,
            features: [],
            damageType: "mag",
        },
        {
            name: "Legendary Greatstaff",
            trait: AbilityName.KNOWLEDGE,
            range: DistanceRange.VERY_FAR,
            dice: Dice.D6,
            modifier: 9,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Powerful",
                    description:
                        "On a successful attack, roll an additional damage die and discard the lowest result.",
                },
            ],
            damageType: "mag",
        },
        {
            name: "Sword of Light & Flame",
            trait: AbilityName.STRENGTH,
            range: DistanceRange.MELEE,
            dice: Dice.D10,
            modifier: 11,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Hot",
                    description: "This weapon cuts through solid material.",
                },
            ],
            damageType: "mag",
        },
        {
            name: "Siphoning Gauntlets",
            trait: AbilityName.PRESENCE,
            range: DistanceRange.MELEE,
            dice: Dice.D10,
            modifier: 9,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Lifestealing",
                    description:
                        "On a successful attack, roll a d6. On a result of 6, clear a Hit Point or clear a Stress.",
                },
            ],
            damageType: "mag",
        },
        {
            name: "Midas Scythe",
            trait: AbilityName.KNOWLEDGE,
            range: DistanceRange.MELEE,
            dice: Dice.D10,
            modifier: 9,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Greedy",
                    description:
                        "Spend a handful of gold to gain a +1 bonus to your Proficiency on a damage roll.",
                },
            ],
            damageType: "mag",
        },
        {
            name: "Floating Bladeshards",
            trait: AbilityName.INSTINCT,
            range: DistanceRange.CLOSE,
            dice: Dice.D8,
            modifier: 9,
            burden: WeaponBurden.ONE_HANDED,
            features: [
                {
                    name: "Powerful",
                    description:
                        "On a successful attack, roll an additional damage die and discard the lowest result.",
                },
            ],
            damageType: "mag",
        },
        {
            name: "Bloodstaff",
            trait: AbilityName.INSTINCT,
            range: DistanceRange.FAR,
            dice: Dice.D20,
            modifier: 7,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Painful",
                    description:
                        "Each time you make a successful attack, you must mark a Stress.",
                },
            ],
            damageType: "mag",
        },
        {
            name: "Thistlebow",
            trait: AbilityName.INSTINCT,
            range: DistanceRange.FAR,
            dice: Dice.D6,
            modifier: 13,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Reliable",
                    description: "+1 to attack rolls",
                },
            ],
            damageType: "mag",
        },
        {
            name: "Wand of Essek",
            trait: AbilityName.KNOWLEDGE,
            range: DistanceRange.FAR,
            dice: Dice.D8,
            modifier: 13,
            burden: WeaponBurden.ONE_HANDED,
            features: [
                {
                    name: "Timebending",
                    description:
                        "You can choose the target of your attack after making your attack roll.",
                },
            ],
            damageType: "mag",
        },
        {
            name: "Magus Revolver",
            trait: AbilityName.FINESSE,
            range: DistanceRange.VERY_FAR,
            dice: Dice.D6,
            modifier: 13,
            burden: WeaponBurden.ONE_HANDED,
            features: [
                {
                    name: "Reloading",
                    description:
                        "After you make an attack, roll a d6. On a result of 1, you must mark a Stress to reload this weapon before you can fire it again.",
                },
            ],
            damageType: "mag",
        },
        {
            name: "Fusion Gloves",
            trait: AbilityName.KNOWLEDGE,
            range: DistanceRange.VERY_FAR,
            dice: Dice.D6,
            modifier: 9,
            burden: WeaponBurden.TWO_HANDED,
            features: [
                {
                    name: "Bonded",
                    description:
                        "Gain a bonus to your damage rolls equal to your level.",
                },
            ],
            damageType: "mag",
        },
    ],
};
