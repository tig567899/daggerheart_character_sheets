import { LevelUpKey, SecondarySelectionValue } from "@dh_sheets/app/constants";
import { LevelUpOption } from "@dh_sheets/app/types";

export const Tier2LevelUpOptions: LevelUpOption[] = [
    {
        levelUpKey: LevelUpKey.TIER_2_ASI,
        description:
            "Gain a +1 bonus to two unmarked character traits and mark them.",
        maxNumber: 3,
        secondarySelection: SecondarySelectionValue.STATS,
    },
    {
        levelUpKey: LevelUpKey.TIER_2_HP,
        description: "Permanently gain one Hit Point slot.",
        maxNumber: 2,
    },
    {
        levelUpKey: LevelUpKey.TIER_2_STRESS,
        description: "Permanently gain one Stress slot.",
        maxNumber: 2,
    },
    {
        levelUpKey: LevelUpKey.TIER_2_EXP,
        description: "Permanently gain a +1 bonus to two Experiences.",
        maxNumber: 1,
        secondarySelection: SecondarySelectionValue.EXPERIENCES,
    },
    {
        levelUpKey: LevelUpKey.TIER_2_DOMAIN,
        description:
            "Choose an additional domain card of your level or lower from a domain you have access to (up to level 4).",
        maxNumber: 1,
    },
    {
        levelUpKey: LevelUpKey.TIER_2_EVA,
        description: "Permanently gain a +1 bonus to your Evasion.",
        maxNumber: 1,
    },
];

export const Tier3LevelUpOptions: LevelUpOption[] = [
    {
        levelUpKey: LevelUpKey.TIER_3_ASI,
        description:
            "Gain a +1 bonus to two unmarked character traits and mark them.",
        maxNumber: 3,
        secondarySelection: SecondarySelectionValue.STATS,
    },
    {
        levelUpKey: LevelUpKey.TIER_3_HP,
        description: "Permanently gain one Hit Point slot.",
        maxNumber: 2,
    },
    {
        levelUpKey: LevelUpKey.TIER_3_STRESS,
        description: "Permanently gain one Stress slot.",
        maxNumber: 2,
    },
    {
        levelUpKey: LevelUpKey.TIER_3_EXP,
        description: "Permanently gain a +1 bonus to two Experiences.",
        maxNumber: 1,
        secondarySelection: SecondarySelectionValue.EXPERIENCES,
    },
    {
        levelUpKey: LevelUpKey.TIER_3_DOMAIN,
        description:
            "Choose an additional domain card of your level or lower from a domain you have access to (up to level 7).",
        maxNumber: 1,
    },
    {
        levelUpKey: LevelUpKey.TIER_3_EVA,
        description: "Permanently gain a +1 bonus to your Evasion.",
        maxNumber: 1,
    },
    {
        levelUpKey: LevelUpKey.TIER_3_SUBCLASS,
        description:
            "Take an upgraded subclass card. Then cross out the multiclass option for this tier.",
        maxNumber: 1,
        disables: [LevelUpKey.TIER_3_MULTI],
    },
    {
        levelUpKey: LevelUpKey.TIER_3_PROF,
        description: "Increase your Proficiency by +1. (Requires both upgrades)",
        maxNumber: 1,
        requiresTwo: true,
    },
    {
        levelUpKey: LevelUpKey.TIER_3_MULTI,
        description:
            "Multiclass: Choose an additional class for your character, then cross out an unused “Take an upgraded subclass card” and the other multiclass option on this sheet. (Requires both upgrades)",
        maxNumber: 1,
        requiresTwo: true,
        disables: [LevelUpKey.TIER_3_SUBCLASS, LevelUpKey.TIER_4_MULTI],
        secondarySelection: SecondarySelectionValue.MULTICLASS,
    },
];

export const Tier4LevelUpOptions: LevelUpOption[] = [
    {
        levelUpKey: LevelUpKey.TIER_4_ASI,
        description:
            "Gain a +1 bonus to two unmarked character traits and mark them.",
        maxNumber: 3,
        secondarySelection: SecondarySelectionValue.STATS,
    },
    {
        levelUpKey: LevelUpKey.TIER_4_HP,
        description: "Permanently gain one Hit Point slot.",
        maxNumber: 2,
    },
    {
        levelUpKey: LevelUpKey.TIER_4_STRESS,
        description: "Permanently gain one Stress slot.",
        maxNumber: 2,
    },
    {
        levelUpKey: LevelUpKey.TIER_4_EXP,
        description: "Permanently gain a +1 bonus to two Experiences.",
        maxNumber: 1,
    },
    {
        levelUpKey: LevelUpKey.TIER_4_DOMAIN,
        description:
            "Choose an additional domain card of your level or lower from a domain you have access to.",
        maxNumber: 1,
    },
    {
        levelUpKey: LevelUpKey.TIER_4_EVA,
        description: "Permanently gain a +1 bonus to your Evasion.",
        maxNumber: 1,
        secondarySelection: SecondarySelectionValue.EXPERIENCES,
    },
    {
        levelUpKey: LevelUpKey.TIER_4_SUBCLASS,
        description:
            "Take an upgraded subclass card. Then cross out the multiclass option for this tier",
        maxNumber: 1,
        disables: [LevelUpKey.TIER_4_MULTI],
    },
    {
        levelUpKey: LevelUpKey.TIER_4_PROF,
        description: "Increase your Proficiency by +1. (Requires both upgrades)",
        maxNumber: 1,
        requiresTwo: true,
    },
    {
        levelUpKey: LevelUpKey.TIER_4_MULTI,
        description:
            "Multiclass: Choose an additional class for your character, then cross out an unused “Take an upgraded subclass card” and the other multiclass option on this sheet. (Requires both upgrades)",
        maxNumber: 1,
        requiresTwo: true,
        disables: [LevelUpKey.TIER_4_SUBCLASS, LevelUpKey.TIER_3_MULTI],
        secondarySelection: SecondarySelectionValue.MULTICLASS,
    },
];

export function getLevelUpOptionsByTier(tier: number) {
    switch (tier) {
        case 2:
            return Tier2LevelUpOptions;
        case 3:
            return Tier3LevelUpOptions;
        case 4:
            return Tier4LevelUpOptions;
    }
    return [];
}
