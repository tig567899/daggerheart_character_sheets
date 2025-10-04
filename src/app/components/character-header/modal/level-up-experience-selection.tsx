import { useCallback, useMemo, useState } from "react";
import { useSelector } from "react-redux";

import { ActionButton } from "@dh_sheets/app/components/parts/action-button/action-button";
import {
    getClassData,
    getExperiences,
} from "@dh_sheets/app/redux/character-data-store/selector";
import { getTierByLevel } from "@dh_sheets/app/util";

import styles from "./level-up-stats.module.css";

interface StatSelectionProps {
    onSelection: (index1: number, index2: number) => void;
    cancelUpgrade: () => void;
    additionalExperience?: string;
}

export const LevelUpExperienceSelection = ({
    onSelection,
    cancelUpgrade,
    additionalExperience,
}: StatSelectionProps) => {
    const [expSelection, setExpSelection] = useState<boolean[]>([
        false,
        false,
        false,
        false,
        false,
    ]);

    const { level } = useSelector(getClassData);
    const experienceCount = getTierByLevel(level + 1) + 1;

    const charExperiences = useSelector(getExperiences);
    const expPairs = Object.entries(charExperiences).slice(0, experienceCount);

    const numberSelected = useMemo(
        () => expSelection.filter((selection) => selection).length,
        [expSelection],
    );

    const onToggle = useCallback(
        (event: any) => {
            const index = event.target.value;
            const expSelectionCopy = [...expSelection];

            expSelectionCopy[index] = !expSelectionCopy[index];
            setExpSelection(expSelectionCopy);
        },
        [expSelection, setExpSelection],
    );

    const onSubmit = useCallback(() => {
        const selected = expSelection
            .map((choice, index) => (choice ? index : null))
            .filter((value) => value !== null);
        onSelection(selected[0], selected[1]);
    }, [expSelection, onSelection]);

    return (
        <div className={styles.statSelectionContainer}>
            Choose 2 Experiences
            <div className={styles.expSelection}>
                {expPairs.map(([key, value], index) => {
                    const finalValue =
                        index === expPairs.length - 1 && additionalExperience
                            ? additionalExperience
                            : value;
                    return (
                        <div
                            key={`experiences-${index}`}
                            className={styles.expRow}
                        >
                            <label>
                                {finalValue.length
                                    ? finalValue
                                    : `Experience ${index + 1}`}
                            </label>
                            <input
                                id={key}
                                className={styles.checkbox}
                                type="checkbox"
                                name="Experience"
                                value={index}
                                disabled={
                                    !expSelection[index] && numberSelected >= 2
                                }
                                onClick={onToggle}
                            />
                        </div>
                    );
                })}
            </div>
            <div className={styles.asiActionButtonGroup}>
                <ActionButton
                    className={styles.asiActionButton}
                    onClick={cancelUpgrade}
                    label={"Back"}
                    bordered
                />

                <ActionButton
                    className={styles.asiActionButton}
                    onClick={onSubmit}
                    disabled={numberSelected < 2}
                    label={"Confirm"}
                    bordered
                />
            </div>
        </div>
    );
};
