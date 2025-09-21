import { useCallback, useMemo, useState } from "react";

import { LevelUpExperienceSelection } from "@dh_sheets/app/components/header/modal/level-up-experience-selection";
import { LevelUpStatSelection } from "@dh_sheets/app/components/header/modal/level-up-stat-selection";
import {
    constructModifierForAsiOption,
    constructModifierForExpOption,
    getModifierFromLevelUpOption,
} from "@dh_sheets/app/components/header/modal/util";
import {
    AbilityName,
    LevelUpKey,
    ModifierFieldToAbilityNameMap,
    SecondarySelectionValue,
    Tier2LevelUpKeys,
    Tier3LevelUpKeys,
    Tier4LevelUpKeys,
} from "@dh_sheets/app/constants";
import { getLevelUpOptionsByTier } from "@dh_sheets/app/data/level-up-data";
import {
    getClassData,
    getDisabledLevelUpKeys,
    getLevelUpChoicesByTier,
} from "@dh_sheets/app/redux/character-data-store/selector";
import { useAppSelector } from "@dh_sheets/app/redux/hooks";
import { LevelUpChoice, LevelUpOption } from "@dh_sheets/app/types";
import { getTierByLevel } from "@dh_sheets/app/util";

import styles from "./level-up-stats.module.css";

interface LevelUpProps {
    setUpgrade: (option: LevelUpChoice) => void;
    secondSelection: boolean;
    chosenUpgrade?: LevelUpChoice;
    newExperience?: string;
}

export const LevelUpBaseScreen = ({
    setUpgrade,
    secondSelection,
    chosenUpgrade,
    newExperience,
}: LevelUpProps) => {
    const [optionSelected, setOptionSelected] = useState<LevelUpOption | null>(
        null,
    );
    const { charClass, level } = useAppSelector(getClassData);
    const tier = getTierByLevel(level + 1);
    const filters = useMemo(() => {
        switch (tier) {
            case 2:
                return Tier2LevelUpKeys;
            case 3:
                return Tier3LevelUpKeys;
            case 4:
                return Tier4LevelUpKeys;
            default:
                return undefined;
        }
    }, [tier]);

    const disabledChoices = new Set<LevelUpKey>(
        useAppSelector(getDisabledLevelUpKeys),
    );

    const levelUpChoices = useAppSelector((state) =>
        getLevelUpChoicesByTier(state, filters),
    );

    const choiceCountByKey = useMemo(() => {
        const toReturn = new Map<LevelUpKey, number>();
        [...levelUpChoices, chosenUpgrade].forEach((option) => {
            if (!option) {
                return;
            }
            const item = toReturn.get(option?.levelUpKey);
            if (item) {
                toReturn.set(option.levelUpKey, item + 1);
            } else {
                toReturn.set(option.levelUpKey, 1);
            }
        });
        return toReturn;
    }, [levelUpChoices, chosenUpgrade]);

    const previouslyChosenStats = useMemo(() => {
        const toReturn = new Set<AbilityName>();
        [...levelUpChoices, chosenUpgrade].forEach((choice) => {
            choice?.modifiers?.forEach((modifier) => {
                const abilityName = ModifierFieldToAbilityNameMap.get(
                    modifier.field,
                );
                if (abilityName) {
                    toReturn.add(abilityName);
                }
            });
        });
        return toReturn;
    }, [levelUpChoices, chosenUpgrade]);

    const optionsByTier = getLevelUpOptionsByTier(tier);

    const onOptionSelect = useCallback(
        (option: LevelUpOption) => {
            if (
                option.secondarySelection === undefined ||
                (option.secondarySelection ===
                    SecondarySelectionValue.SUBCLASS &&
                    charClass.length === 1)
            ) {
                const modifier = getModifierFromLevelUpOption(
                    option,
                    choiceCountByKey.get(option.levelUpKey) ?? 0,
                );
                if (!modifier) {
                    return;
                }
                const upgrade: LevelUpChoice = {
                    levelUpKey: option.levelUpKey,
                    description: option.description,
                    modifiers: [modifier],
                    disables: option.disables,
                };
                setUpgrade(upgrade);
                return;
            }

            setOptionSelected(option);
        },
        [setUpgrade, choiceCountByKey, charClass.length],
    );

    const onAsiSelect = useCallback(
        (ability1: AbilityName, ability2: AbilityName) => {
            if (!optionSelected) {
                return;
            }
            const modifiers = constructModifierForAsiOption(
                optionSelected.levelUpKey,
                ability1,
                ability2,
                choiceCountByKey.get(optionSelected.levelUpKey) ?? 0,
            );
            if (!modifiers) return;
            const upgrade: LevelUpChoice = {
                levelUpKey: optionSelected.levelUpKey,
                description: `Gain a +1 bonus to ${ability1} and ${ability2} and mark them.`,
                modifiers,
            };
            setUpgrade(upgrade);
            setOptionSelected(null);
        },
        [optionSelected, choiceCountByKey, setUpgrade],
    );

    const onExperienceSelect = useCallback(
        (index1: number, index2: number) => {
            if (!optionSelected) {
                return;
            }
            const modifiers = constructModifierForExpOption(
                optionSelected.levelUpKey,
                index1,
                index2,
            );
            if (!modifiers) return;

            const upgrade: LevelUpChoice = {
                levelUpKey: optionSelected.levelUpKey,
                description: `Gain a +1 bonus to two experiences.`,
                modifiers,
            };
            setUpgrade(upgrade);
            setOptionSelected(null);
        },
        [optionSelected, setUpgrade, choiceCountByKey],
    );

    const clearUpgrade = useCallback(() => {
        setOptionSelected(null);
    }, []);

    return (
        <div>
            {!optionSelected ? (
                <div className={styles.baseScreenContainer}>
                    {optionsByTier.map((option, index) => {
                        if (
                            choiceCountByKey.get(option.levelUpKey) ===
                                option.maxNumber ||
                            (secondSelection && option.requiresTwo) ||
                            disabledChoices.has(option.levelUpKey)
                        ) {
                            return null;
                        }
                        return (
                            <div
                                key={`level-up-options-${index}`}
                                className={styles.optionCard}
                                onClick={() => onOptionSelect(option)}
                            >
                                <span className={styles.optionDescription}>
                                    {option.description}
                                </span>
                                {`${choiceCountByKey.get(option.levelUpKey) ?? 0}/${option.maxNumber}`}
                            </div>
                        );
                    })}
                </div>
            ) : null}
            {optionSelected?.secondarySelection ===
            SecondarySelectionValue.STATS ? (
                <LevelUpStatSelection
                    takenStats={previouslyChosenStats}
                    onSelection={onAsiSelect}
                    cancelUpgrade={clearUpgrade}
                />
            ) : null}
            {optionSelected?.secondarySelection ===
            SecondarySelectionValue.EXPERIENCES ? (
                <LevelUpExperienceSelection
                    onSelection={onExperienceSelect}
                    cancelUpgrade={clearUpgrade}
                    additionalExperience={newExperience}
                />
            ) : null}
        </div>
    );
};
