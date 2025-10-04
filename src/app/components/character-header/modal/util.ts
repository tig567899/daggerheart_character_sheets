import {
    AbilityName,
    ExperienceList,
    LevelUpKey,
    ModifierField,
    ModifierKey,
    abilityToModifierFieldMap,
} from "@dh_sheets/app/constants";
import {
    Ability,
    LevelUpOption,
    Modifier,
    SubclassData,
} from "@dh_sheets/app/types";

export function getModifierFromLevelUpOption(
    option: LevelUpOption,
    timesPreviouslyChosen: number,
): Modifier | null {
    switch (option.levelUpKey) {
        case LevelUpKey.TIER_2_HP:
            return {
                field: ModifierField.MAX_HP,
                bonus: 1,
                modifierKey:
                    timesPreviouslyChosen === 0
                        ? ModifierKey.TIER_2_HP_1
                        : ModifierKey.TIER_2_HP_2,
            };
        case LevelUpKey.TIER_2_STRESS:
            return {
                field: ModifierField.MAX_STRESS,
                bonus: 1,
                modifierKey:
                    timesPreviouslyChosen === 0
                        ? ModifierKey.TIER_2_STRESS_1
                        : ModifierKey.TIER_2_STRESS_2,
            };
        case LevelUpKey.TIER_2_DOMAIN:
            return {
                field: ModifierField.DOMAIN_CARDS,
                bonus: 1,
                modifierKey: ModifierKey.TIER_2_DOMAIN,
            };
        case LevelUpKey.TIER_2_EVA:
            return {
                field: ModifierField.EVASION,
                bonus: 1,
                modifierKey: ModifierKey.TIER_2_EVA,
            };
        case LevelUpKey.TIER_3_HP:
            return {
                field: ModifierField.MAX_HP,
                bonus: 1,
                modifierKey:
                    timesPreviouslyChosen === 0
                        ? ModifierKey.TIER_3_HP_1
                        : ModifierKey.TIER_3_HP_2,
            };
        case LevelUpKey.TIER_3_STRESS:
            return {
                field: ModifierField.MAX_STRESS,
                bonus: 1,
                modifierKey:
                    timesPreviouslyChosen === 0
                        ? ModifierKey.TIER_3_STRESS_1
                        : ModifierKey.TIER_3_STRESS_2,
            };
        case LevelUpKey.TIER_3_DOMAIN:
            return {
                field: ModifierField.DOMAIN_CARDS,
                bonus: 1,
                modifierKey: ModifierKey.TIER_3_DOMAIN,
            };
        case LevelUpKey.TIER_3_EVA:
            return {
                field: ModifierField.EVASION,
                bonus: 1,
                modifierKey: ModifierKey.TIER_3_EVA,
            };
        case LevelUpKey.TIER_3_PROF:
            return {
                field: ModifierField.PROFICIENCY,
                bonus: 1,
                modifierKey: ModifierKey.TIER_3_PROFICIENCY,
            };
        case LevelUpKey.TIER_3_SUBCLASS:
            return {
                field: ModifierField.MAIN_SUBCLASS,
                bonus: 1,
                modifierKey: ModifierKey.TIER_3_SUBCLASS,
            };
        case LevelUpKey.TIER_4_HP:
            return {
                field: ModifierField.MAX_HP,
                bonus: 1,
                modifierKey:
                    timesPreviouslyChosen === 0
                        ? ModifierKey.TIER_4_HP_1
                        : ModifierKey.TIER_4_HP_2,
            };
        case LevelUpKey.TIER_4_STRESS:
            return {
                field: ModifierField.MAX_STRESS,
                bonus: 1,
                modifierKey:
                    timesPreviouslyChosen === 0
                        ? ModifierKey.TIER_4_STRESS_1
                        : ModifierKey.TIER_4_STRESS_2,
            };
        case LevelUpKey.TIER_4_DOMAIN:
            return {
                field: ModifierField.DOMAIN_CARDS,
                bonus: 1,
                modifierKey: ModifierKey.TIER_4_DOMAIN,
            };
        case LevelUpKey.TIER_4_EVA:
            return {
                field: ModifierField.EVASION,
                bonus: 1,
                modifierKey: ModifierKey.TIER_4_EVA,
            };
        case LevelUpKey.TIER_4_PROF:
            return {
                field: ModifierField.PROFICIENCY,
                bonus: 1,
                modifierKey: ModifierKey.TIER_4_PROFICIENCY,
            };
        case LevelUpKey.TIER_4_SUBCLASS:
            return {
                field: ModifierField.MAIN_SUBCLASS,
                bonus: 1,
                modifierKey: ModifierKey.TIER_4_SUBCLASS,
            };
    }

    return null;
}

export function constructModifierForAsiOption(
    key: LevelUpKey,
    ability1: AbilityName,
    ability2: AbilityName,
    timesPreviouslyChosen: number,
): Modifier[] | null {
    const modifier1 = abilityToModifierFieldMap.get(ability1);
    const modifier2 = abilityToModifierFieldMap.get(ability2);

    if (!modifier1 || !modifier2) {
        return null;
    }
    let modKey1;
    let modKey2;

    switch (key) {
        case LevelUpKey.TIER_2_ASI:
            if (timesPreviouslyChosen === 0) {
                modKey1 = ModifierKey.TIER_2_ASI_1_1;
                modKey2 = ModifierKey.TIER_2_ASI_1_2;
            } else if (timesPreviouslyChosen === 1) {
                modKey1 = ModifierKey.TIER_2_ASI_2_1;
                modKey2 = ModifierKey.TIER_2_ASI_2_2;
            } else if (timesPreviouslyChosen === 2) {
                modKey1 = ModifierKey.TIER_2_ASI_3_1;
                modKey2 = ModifierKey.TIER_2_ASI_3_2;
            } else {
                return null;
            }
            return [
                {
                    field: modifier1,
                    bonus: 1,
                    modifierKey: modKey1,
                },
                {
                    field: modifier2,
                    bonus: 1,
                    modifierKey: modKey2,
                },
            ];
        case LevelUpKey.TIER_3_ASI:
            if (timesPreviouslyChosen === 0) {
                modKey1 = ModifierKey.TIER_3_ASI_1_1;
                modKey2 = ModifierKey.TIER_3_ASI_1_2;
            } else if (timesPreviouslyChosen === 1) {
                modKey1 = ModifierKey.TIER_3_ASI_2_1;
                modKey2 = ModifierKey.TIER_3_ASI_2_2;
            } else if (timesPreviouslyChosen === 2) {
                modKey1 = ModifierKey.TIER_3_ASI_3_1;
                modKey2 = ModifierKey.TIER_3_ASI_3_2;
            } else {
                return null;
            }
            return [
                {
                    field: modifier1,
                    bonus: 1,
                    modifierKey: modKey1,
                },
                {
                    field: modifier2,
                    bonus: 1,
                    modifierKey: modKey2,
                },
            ];
        case LevelUpKey.TIER_4_ASI:
            if (timesPreviouslyChosen === 0) {
                modKey1 = ModifierKey.TIER_4_ASI_1_1;
                modKey2 = ModifierKey.TIER_4_ASI_1_2;
            } else if (timesPreviouslyChosen === 1) {
                modKey1 = ModifierKey.TIER_4_ASI_2_1;
                modKey2 = ModifierKey.TIER_4_ASI_2_2;
            } else if (timesPreviouslyChosen === 2) {
                modKey1 = ModifierKey.TIER_4_ASI_3_1;
                modKey2 = ModifierKey.TIER_4_ASI_3_2;
            } else {
                return null;
            }
            return [
                {
                    field: modifier1,
                    bonus: 1,
                    modifierKey: modKey1,
                },
                {
                    field: modifier2,
                    bonus: 1,
                    modifierKey: modKey2,
                },
            ];
    }
    return null;
}

export function constructModifierForExpOption(
    key: LevelUpKey,
    index1: number,
    index2: number,
): Modifier[] | null {
    const modifier1 = ExperienceList[index1];
    const modifier2 = ExperienceList[index2];

    if (!modifier1 || !modifier2) {
        return null;
    }
    let modKey1;
    let modKey2;

    switch (key) {
        case LevelUpKey.TIER_2_EXP:
            modKey1 = ModifierKey.TIER_2_EXP_1;
            modKey2 = ModifierKey.TIER_2_EXP_2;
            break;
        case LevelUpKey.TIER_3_EXP:
            modKey1 = ModifierKey.TIER_3_EXP_1;
            modKey2 = ModifierKey.TIER_3_EXP_2;
            break;
        case LevelUpKey.TIER_4_EXP:
            modKey1 = ModifierKey.TIER_4_EXP_1;
            modKey2 = ModifierKey.TIER_4_EXP_2;
            break;
        default:
            return null;
    }

    return [
        {
            field: modifier1,
            bonus: 1,
            modifierKey: modKey1,
        },
        {
            field: modifier2,
            bonus: 1,
            modifierKey: modKey2,
        },
    ];
}

export function constructModifierForMulticlass() {
    return {
        field: ModifierField.MULTICLASS,
        bonus: 1,
        modifierKey: ModifierKey.MULTICLASS,
    };
}

export const maybeGetAdditionalModifiersForSubclassSpecialization = ({
    subclassBlock,
    subclassPoints,
}: {
    subclassBlock?: SubclassData;
    subclassPoints: number;
}) => {
    if (!subclassBlock) {
        return [];
    }

    let newFeatures: Ability[] = [];
    switch (subclassPoints + 1) {
        case 1:
            newFeatures = subclassBlock.specializationFeatures;
            break;
        case 2:
            newFeatures = subclassBlock.masteryFeatures;
            break;
    }

    return newFeatures
        .flatMap((feature) => feature.modifier)
        .filter((mod) => mod !== undefined);
};
