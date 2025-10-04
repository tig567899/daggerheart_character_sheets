import classNames from "classnames";
import { useCallback, useState } from "react";

import { ActionButton } from "@dh_sheets/app/components/parts/action-button/action-button";
import { getSubclassBlockForCharacter } from "@dh_sheets/app/components/subclass-block/util";
import { getClassData } from "@dh_sheets/app/redux/character-data-store/selector";
import { useAppSelector } from "@dh_sheets/app/redux/hooks";

import styles from "./level-up-stats.module.css";

interface SubclassSelectionProps {
    onSelection: (which: number) => void;
    cancelUpgrade: () => void;
}

export const LevelUpSubclassSelection = ({
    onSelection,
    cancelUpgrade,
}: SubclassSelectionProps) => {
    const [selection, setSelection] = useState<number | null>(null);

    const {
        charClass,
        subclass: subclassIndex,
        secondSubclass: secondSubclassIndex,
    } = useAppSelector(getClassData);
    const subclass = getSubclassBlockForCharacter(charClass[0], subclassIndex);
    const secondSubclass = getSubclassBlockForCharacter(
        charClass[1],
        secondSubclassIndex,
    );

    const onSelectLeft = useCallback(() => {
        setSelection(0);
    }, [setSelection]);

    const onSelectRight = useCallback(() => {
        setSelection(1);
    }, [setSelection]);

    const onSubmit = useCallback(() => {
        if (selection === null) return;

        onSelection(selection);
    }, [onSelection, selection]);

    return (
        <div className={styles.statSelectionContainer}>
            <div className={styles.selectionHeading}>
                Unlock specialization features for:
            </div>
            <div className={styles.statSelection}>
                <div
                    className={classNames(styles.selectionCard, {
                        [styles.cardSelected]: selection === 0,
                    })}
                    onClick={onSelectLeft}
                >
                    <div className={styles.selectionName}>
                        {subclass?.name ?? "(Unknown subclass)"} {charClass[0]}
                    </div>
                    {subclass ? (
                        <div>
                            {subclass.specializationFeatures.map((ability) => (
                                <div
                                    className={styles.abilityBlock}
                                    key={`${ability.name}`}
                                >
                                    <div className={styles.abilityName}>
                                        {ability.name}
                                    </div>
                                    <div className={styles.abilityDescription}>
                                        {ability.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : null}
                </div>
                <div
                    className={classNames(styles.selectionCard, {
                        [styles.cardSelected]: selection === 1,
                    })}
                    onClick={onSelectRight}
                >
                    <div className={styles.selectionName}>
                        {secondSubclass?.name ?? "(Unknown subclass)"} {charClass[1]}
                    </div>
                    {secondSubclass ? (
                        <div>
                            {secondSubclass.specializationFeatures.map((ability) => (
                                <div
                                    className={styles.abilityBlock}
                                    key={`${ability.name}`}
                                >
                                    <div className={styles.abilityName}>
                                        {ability.name}
                                    </div>
                                    <div className={styles.abilityDescription}>
                                        {ability.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : null}
                </div>
            </div>
            <div className={styles.asiActionButtonGroup}>
                <ActionButton
                    className={styles.asiActionButton}
                    onClick={cancelUpgrade}
                    bordered
                    label={"Back"}
                />
                <ActionButton
                    className={styles.asiActionButton}
                    onClick={onSubmit}
                    bordered
                    label="Confirm"
                />
            </div>
        </div>
    );
};
