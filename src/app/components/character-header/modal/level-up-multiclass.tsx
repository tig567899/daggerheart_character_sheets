import { useCallback, useState } from "react";

import { ActionButton } from "@dh_sheets/app/components/parts/action-button/action-button";
import { CharClass } from "@dh_sheets/app/constants";
import { getClassData } from "@dh_sheets/app/redux/character-data-store/selector";
import { useAppSelector } from "@dh_sheets/app/redux/hooks";

import styles from "./level-up-stats.module.css";

interface StatSelectionProps {
    onSelection: (charClass: CharClass) => void;
    cancelUpgrade: () => void;
}

export const LevelUpMulticlassSelection = ({
    onSelection,
    cancelUpgrade,
}: StatSelectionProps) => {
    const { charClass: charClassArray } = useAppSelector(getClassData);
    const classList = Object.values(CharClass).filter(
        (charClass) => charClass !== charClassArray[0],
    );
    const [multiclassSelection, setMulticlassSelection] = useState<CharClass>(
        classList[0],
    );

    const onSubmit = useCallback(() => {
        onSelection(multiclassSelection);
    }, [onSelection, multiclassSelection]);

    const onSwitch = useCallback(
        (changeEvent: any) => {
            setMulticlassSelection(changeEvent.target.value);
        },
        [setMulticlassSelection],
    );

    return (
        <div className={styles.statSelectionContainer}>
            Choose Class
            <div className={styles.statSelection}>
                <select
                    className={styles.statInput}
                    onChange={onSwitch}
                    value={multiclassSelection}
                >
                    {classList.map((charClass) => (
                        <option key={charClass}>{charClass}</option>
                    ))}
                </select>
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
