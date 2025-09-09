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
