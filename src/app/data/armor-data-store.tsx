import { ModifierField, ModifierKey } from "@dh_sheets/app/constants";
import { ArmorData } from "@dh_sheets/app/types";

export const Tier1Armors: ArmorData[] = [
    {
        name: "Gambeson Armor",
        majorThreshold: 5,
        severeThreshold: 11,
        score: 3,
        features: [
            {
                name: "Flexible",
                description: "+1 to Evasion",
                modifiers: [
                    {
                        field: ModifierField.EVASION,
                        modifierKey: ModifierKey.GAMBESON_ARMOR,
                        bonus: 1,
                    },
                ],
            },
        ],
    },
    {
        name: "Leather Armor",
        majorThreshold: 6,
        severeThreshold: 12,
        score: 3,
        features: [],
    },
    {
        name: "Chainmail",
        majorThreshold: 7,
        severeThreshold: 15,
        score: 4,
        features: [
            {
                name: "Heavy",
                description: "-1 to Evasion",
                modifiers: [
                    {
                        field: ModifierField.EVASION,
                        modifierKey: ModifierKey.CHAINMAIL_ARMOR,
                        bonus: -1,
                    },
                ],
            },
        ],
    },
    {
        name: "Full Plate Armor",
        majorThreshold: 8,
        severeThreshold: 17,
        score: 4,
        features: [
            {
                name: "Very Heavy",
                description: "-2 to Evasion; -1 to Agility",
                modifiers: [
                    {
                        field: ModifierField.EVASION,
                        modifierKey: ModifierKey.FULL_PLATE_ARMOR_EVA,
                        bonus: -2,
                    },
                    {
                        field: ModifierField.AGILITY,
                        modifierKey: ModifierKey.FULL_PLATE_ARMOR_AGI,
                        bonus: -1,
                    },
                ],
            },
        ],
    },
];

export const Tier2Armors: ArmorData[] = [
    {
        name: "Improved Gambeson Armor",
        majorThreshold: 7,
        severeThreshold: 16,
        score: 4,
        features: [
            {
                name: "Flexible",
                description: "+1 to Evasion",
                modifiers: [
                    {
                        field: ModifierField.EVASION,
                        modifierKey: ModifierKey.GAMBESON_ARMOR,
                        bonus: 1,
                    },
                ],
            },
        ],
    },
    {
        name: "Improved Leather Armor",
        majorThreshold: 9,
        severeThreshold: 20,
        score: 4,
        features: [],
    },
    {
        name: "Improved Chainmail",
        majorThreshold: 11,
        severeThreshold: 24,
        score: 5,
        features: [
            {
                name: "Heavy",
                description: "-1 to Evasion",
                modifiers: [
                    {
                        field: ModifierField.EVASION,
                        modifierKey: ModifierKey.CHAINMAIL_ARMOR,
                        bonus: -1,
                    },
                ],
            },
        ],
    },
    {
        name: "Improved Full Plate Armor",
        majorThreshold: 13,
        severeThreshold: 28,
        score: 5,
        features: [
            {
                name: "Heavy",
                description: "-2 to Evasion; -1 to Agility",
                modifiers: [
                    {
                        field: ModifierField.EVASION,
                        modifierKey: ModifierKey.FULL_PLATE_ARMOR_EVA,
                        bonus: -2,
                    },
                    {
                        field: ModifierField.AGILITY,
                        modifierKey: ModifierKey.FULL_PLATE_ARMOR_AGI,
                        bonus: -1,
                    },
                ],
            },
        ],
    },
    {
        name: "Elundrian Chain Armor",
        majorThreshold: 9,
        severeThreshold: 21,
        score: 4,
        features: [
            {
                name: "Warded",
                description:
                    "You reduce incoming magic damage by your Armor Score before applying it to your damage thresholds.",
            },
        ],
    },
    {
        name: "Harrowbone Armor",
        majorThreshold: 9,
        severeThreshold: 21,
        score: 4,
        features: [
            {
                name: "Resilient",
                description:
                    "Before you mark your last Armor Slot, roll a d6. On a result of 6, reduce the severity by one threshold without marking an Armor Slot.",
            },
        ],
    },
    {
        name: "Irontree Breastplate Armor",
        majorThreshold: 9,
        severeThreshold: 20,
        score: 4,
        features: [
            {
                name: "Reinforced",
                description:
                    "When you mark your last Armor Slot, increase your damage thresholds by +2 until you clear at least 1 Armor Slot.",
            },
        ],
    },
    {
        name: "Runetan Floating Armor",
        majorThreshold: 9,
        severeThreshold: 20,
        score: 4,
        features: [
            {
                name: "Shifting",
                description:
                    "When you are targeted for an attack, you can mark an Armor Slot to give the attack roll against you disadvantage.",
            },
        ],
    },
    {
        name: "Tyris Soft Armor",
        majorThreshold: 8,
        severeThreshold: 18,
        score: 4,
        features: [
            {
                name: "Quiet",
                description:
                    "You gain a +2 bonus to rolls you make to move silently.",
            },
        ],
    },
    {
        name: "Rosewild Armor",
        majorThreshold: 11,
        severeThreshold: 23,
        score: 5,
        features: [
            {
                name: "Hopeful",
                description:
                    "When you would spend a Hope, you can mark an Armor Slot instead.",
            },
        ],
    },
];

export const Tier3Armors: ArmorData[] = [
    {
        name: "Advanced Gambeson Armor",
        majorThreshold: 9,
        severeThreshold: 23,
        score: 5,
        features: [
            {
                name: "Flexible",
                description: "+1 to Evasion",
                modifiers: [
                    {
                        field: ModifierField.EVASION,
                        modifierKey: ModifierKey.GAMBESON_ARMOR,
                        bonus: 1,
                    },
                ],
            },
        ],
    },
    {
        name: "Advanced Leather Armor",
        majorThreshold: 11,
        severeThreshold: 27,
        score: 5,
        features: [],
    },
    {
        name: "Advanced Chainmail",
        majorThreshold: 13,
        severeThreshold: 31,
        score: 6,
        features: [
            {
                name: "Heavy",
                description: "-1 to Evasion",
                modifiers: [
                    {
                        field: ModifierField.EVASION,
                        modifierKey: ModifierKey.CHAINMAIL_ARMOR,
                        bonus: -1,
                    },
                ],
            },
        ],
    },
    {
        name: "Advanced Full Plate Armor",
        majorThreshold: 15,
        severeThreshold: 35,
        score: 6,
        features: [
            {
                name: "Heavy",
                description: "-2 to Evasion; -1 to Agility",
                modifiers: [
                    {
                        field: ModifierField.EVASION,
                        modifierKey: ModifierKey.FULL_PLATE_ARMOR_EVA,
                        bonus: -2,
                    },
                    {
                        field: ModifierField.AGILITY,
                        modifierKey: ModifierKey.FULL_PLATE_ARMOR_AGI,
                        bonus: -1,
                    },
                ],
            },
        ],
    },
    {
        name: "Bellarmoi Fine Armor",
        majorThreshold: 11,
        severeThreshold: 27,
        score: 5,
        features: [
            {
                name: "Gilded",
                description: "+1 to Presence",
                modifiers: [
                    {
                        field: ModifierField.PRESENCE,
                        modifierKey: ModifierKey.BELLARMOI_FINE_ARMOR,
                        bonus: 1,
                    },
                ],
            },
        ],
    },
    {
        name: "Dragonscale Armor",
        majorThreshold: 11,
        severeThreshold: 27,
        score: 5,
        features: [
            {
                name: "Impenetrable",
                description:
                    "Once per short rest, when you would mark your last Hit Point, you can instead mark a Stress.",
            },
        ],
    },
    {
        name: "Spiked Plate Armor",
        majorThreshold: 10,
        severeThreshold: 25,
        score: 5,
        features: [
            {
                name: "Sharp",
                description:
                    "On a successful attack against a target within Melee range, add a d4 to the damage roll.",
            },
        ],
    },
    {
        name: "Bladefare Armor",
        majorThreshold: 16,
        severeThreshold: 39,
        score: 6,
        features: [
            {
                name: "Physical",
                description:
                    "You can’t mark an Armor Slot to reduce magic damage.",
            },
        ],
    },
    {
        name: "Monett’s Cloak",
        majorThreshold: 16,
        severeThreshold: 39,
        score: 6,
        features: [
            {
                name: "Magic",
                description:
                    "You can’t mark an Armor Slot to reduce physical damage.",
            },
        ],
    },
    {
        name: "Runes of Fortification",
        majorThreshold: 17,
        severeThreshold: 43,
        score: 6,
        features: [
            {
                name: "Painful",
                description:
                    "Each time you mark an Armor Slot, you must mark a Stress.",
            },
        ],
    },
];

export const Tier4Armors: ArmorData[] = [
    {
        name: "Legendary Gambeson Armor",
        majorThreshold: 11,
        severeThreshold: 32,
        score: 6,
        features: [
            {
                name: "Flexible",
                description: "+1 to Evasion",
                modifiers: [
                    {
                        field: ModifierField.EVASION,
                        modifierKey: ModifierKey.GAMBESON_ARMOR,
                        bonus: 1,
                    },
                ],
            },
        ],
    },
    {
        name: "Legendary Leather Armor",
        majorThreshold: 13,
        severeThreshold: 36,
        score: 6,
        features: [],
    },
    {
        name: "Legendary Chainmail",
        majorThreshold: 15,
        severeThreshold: 40,
        score: 7,
        features: [
            {
                name: "Heavy",
                description: "-1 to Evasion",
                modifiers: [
                    {
                        field: ModifierField.EVASION,
                        modifierKey: ModifierKey.CHAINMAIL_ARMOR,
                        bonus: -1,
                    },
                ],
            },
        ],
    },
    {
        name: "Legendary Full Plate Armor",
        majorThreshold: 17,
        severeThreshold: 44,
        score: 6,
        features: [
            {
                name: "Heavy",
                description: "-2 to Evasion; -1 to Agility",
                modifiers: [
                    {
                        field: ModifierField.EVASION,
                        modifierKey: ModifierKey.FULL_PLATE_ARMOR_EVA,
                        bonus: -2,
                    },
                    {
                        field: ModifierField.AGILITY,
                        modifierKey: ModifierKey.FULL_PLATE_ARMOR_AGI,
                        bonus: -1,
                    },
                ],
            },
        ],
    },
    {
        name: "Dunarmis Silkchain",
        majorThreshold: 13,
        severeThreshold: 36,
        score: 7,
        features: [
            {
                name: "Timeslowing",
                description:
                    "Mark an Armor Slot to roll a d4 and add its result as a bonus to your Evasion against an incoming attack.",
            },
        ],
    },
    {
        name: "Channeling Armor",
        majorThreshold: 13,
        severeThreshold: 36,
        score: 5,
        features: [
            {
                name: "Channeling",
                description: "+1 to Spellcast Rolls",
            },
        ],
    },
    {
        name: "Emberwoven Armor",
        majorThreshold: 13,
        severeThreshold: 36,
        score: 6,
        features: [
            {
                name: "Burning",
                description:
                    "When an adversary attacks you within Melee range, they mark a Stress.",
            },
        ],
    },
    {
        name: "Full Fortified Armor",
        majorThreshold: 15,
        severeThreshold: 40,
        score: 4,
        features: [
            {
                name: "Fortified",
                description:
                    "When you mark an Armor Slot, you reduce the severity of an attack by two thresholds instead of one.",
            },
        ],
    },
    {
        name: "Veritas Opal Armor",
        majorThreshold: 13,
        severeThreshold: 36,
        score: 6,
        features: [
            {
                name: "Truthseeking",
                description:
                    "This armor glows when another creature within Close range tells a lie.",
            },
        ],
    },
    {
        name: "Savior Chainmail",
        majorThreshold: 18,
        severeThreshold: 48,
        score: 8,
        features: [
            {
                name: "Difficult",
                description: "−1 to all character traits and Evasion",
                modifiers: [
                    {
                        field: ModifierField.EVASION,
                        modifierKey: ModifierKey.SAVIOR_CHAIN_EVA,
                        bonus: -1,
                    },
                    {
                        field: ModifierField.ALL_STATS,
                        modifierKey: ModifierKey.SAVIOR_CHAIN_STATS,
                        bonus: -1,
                    },
                ],
            },
        ],
    },
];
