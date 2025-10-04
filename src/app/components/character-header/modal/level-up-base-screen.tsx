import { useCallback, useMemo, useState } from "react";

import { LevelUpExperienceSelection } from "@dh_sheets/app/components/character-header/modal/level-up-experience-selection";
import { LevelUpMulticlassSelection } from "@dh_sheets/app/components/character-header/modal/level-up-multiclass";
import { LevelUpStatSelection } from "@dh_sheets/app/components/character-header/modal/level-up-stat-selection";
import { LevelUpSubclassSelection } from "@dh_sheets/app/components/character-header/modal/level-up-subclass-selection";
import {
    constructModifierForAsiOption,
    constructModifierForExpOption,
    constructModifierForMulticlass,
    getModifierFromLevelUpOption,
    maybeGetAdditionalModifiersForSubclassSpecialization,
} from "@dh_sheets/app/components/character-header/modal/util";
import { getSubclassBlockForCharacter } from "@dh_sheets/app/components/subclass-block/util";
import {
    AbilityName,
    CharClass,
    LevelUpKey,
    ModifierField,
    ModifierFieldToAbilityNameMap,
    ModifierKey,
    SecondarySelectionValue,
    Tier2LevelUpKeys,
    Tier3LevelUpKeys,
    Tier4LevelUpKeys,
} from "@dh_sheets/app/constants";
import { getLevelUpOptionsByTier } from "@dh_sheets/app/data/level-up-data";
import { setMulticlassCharClass } from "@dh_sheets/app/redux/character-data-store/actions";
import {
    getClassData,
    getDisabledLevelUpKeys,
    getLevelUpChoicesByTier,
    getModifierByField,
} from "@dh_sheets/app/redux/character-data-store/selector";
import { useAppDispatch, useAppSelector } from "@dh_sheets/app/redux/hooks";
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
    const dispatch = useAppDispatch();
    const [optionSelected, setOptionSelected] = useState<LevelUpOption | null>(
        null,
    );
    const { charClass, level, subclass, secondSubclass } =
        useAppSelector(getClassData);

    const subclassPoints = useAppSelector((state) =>
        getModifierByField(state, ModifierField.MAIN_SUBCLASS),
    );

    const subclassData = getSubclassBlockForCharacter(charClass[0], subclass);
    const secondSubclassData = getSubclassBlockForCharacter(
        charClass[1],
        secondSubclass,
    );

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

                const subclassBlock = getSubclassBlockForCharacter(
                    charClass[0],
                    subclass,
                );

                const additionalModifiers =
                    maybeGetAdditionalModifiersForSubclassSpecialization({
                        subclassBlock,
                        subclassPoints,
                    });
                const upgrade: LevelUpChoice = {
                    levelUpKey: option.levelUpKey,
                    description: option.description,
                    modifiers: [modifier, ...additionalModifiers],
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
        [optionSelected, setUpgrade],
    );

    const onMulticlassSelect = useCallback(
        (charClass: CharClass) => {
            if (!optionSelected) {
                return;
            }
            const modifiers = [constructModifierForMulticlass()];

            const upgrade: LevelUpChoice = {
                levelUpKey: optionSelected.levelUpKey,
                description: `Multiclass: ${charClass}. Requires both upgrades`,
                modifiers,
                disables: optionSelected.disables,
            };

            setUpgrade(upgrade);
            setOptionSelected(null);
            dispatch(setMulticlassCharClass(charClass));
        },
        [optionSelected, setUpgrade, setMulticlassCharClass],
    );

    const onSubclassSelect = useCallback(
        (value: number) => {
            if (!optionSelected) {
                return;
            }

            const modifiers = [{
                field: value === 1 ? ModifierField.SECONDARY_SUBCLASS : ModifierField.MAIN_SUBCLASS,
                bonus: 1,
                modifierKey: ModifierKey.TIER_4_SUBCLASS,
            }];

            let subclassName = value === 0 ? subclassData?.name : secondSubclassData?.name;
            if (!subclassName) {
                subclassName = '(No subclass selected)'
            }

            const upgrade: LevelUpChoice = {
                levelUpKey: optionSelected.levelUpKey,
                description: `Unlock specialization for ${subclassName} ${charClass[value]}.`,
                modifiers,
                disables: optionSelected.disables,
            }

            setUpgrade(upgrade);
            setOptionSelected(null);
        },
        [optionSelected, setUpgrade],
    );

    const clearUpgrade = useCallback(() => {
        setOptionSelected(null);
    }, []);

    return (
        <div className={styles.baseScreenParent}>
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
            {optionSelected?.secondarySelection ===
            SecondarySelectionValue.MULTICLASS ? (
                <LevelUpMulticlassSelection
                    onSelection={onMulticlassSelect}
                    cancelUpgrade={clearUpgrade}
                />
            ) : null}
            {optionSelected?.secondarySelection ===
            SecondarySelectionValue.SUBCLASS ? (
                <LevelUpSubclassSelection
                    onSelection={onSubclassSelect}
                    cancelUpgrade={clearUpgrade}
                />
            ) : null}
        </div>
    );
};
