import { useCallback, useState } from "react";

import { AbilityName, AbilityNames } from "@dh_sheets/app/constants";

import styles from "./level-up-stats.module.css";
import { ActionButton } from "@dh_sheets/app/components/parts/action-button/action-button";

interface StatSelectionProps {
    takenStats: Set<AbilityName>;
    onSelection: (ability1: AbilityName, ability2: AbilityName) => void;
    cancelUpgrade: () => void;
}

export const LevelUpStatSelection = ({
    takenStats,
    onSelection,
    cancelUpgrade,
}: StatSelectionProps) => {
    const availableAbilities = AbilityNames.filter(
        (name) => !takenStats.has(name),
    );

    const [firstSelection, setFirstSelection] = useState<AbilityName>(
        availableAbilities[0],
    );
    const [secondSelection, setSecondSelection] = useState<AbilityName>(
        availableAbilities[1],
    );

    const onFirstAbilitySelect = useCallback((changeEvent: any) => {
        setFirstSelection(changeEvent.target.value);
    }, []);

    const onSecondAbilitySelect = useCallback((changeEvent: any) => {
        setSecondSelection(changeEvent.target.value);
    }, []);

    const onSubmit = useCallback(() => {
        if (!firstSelection || !secondSelection) return;
        onSelection(firstSelection, secondSelection);
    }, [onSelection, firstSelection, secondSelection]);

    return (
        <div className={styles.statSelectionContainer}>
            Choose Abilities
            <div className={styles.statSelection}>
                <select
                    className={styles.statInput}
                    onChange={onFirstAbilitySelect}
                >
                    {availableAbilities
                        .filter((ability) => secondSelection !== ability)
                        .map((ability) => (
                            <option key={ability}>{ability}</option>
                        ))}
                </select>

                <select
                    className={styles.statInput}
                    onChange={onSecondAbilitySelect}
                >
                    {availableAbilities
                        .filter((ability) => firstSelection !== ability)
                        .map((ability) => (
                            <option key={ability}>{ability}</option>
                        ))}
                </select>
            </div>
            <div className={styles.asiActionButtonGroup}>
                <ActionButton className={styles.asiActionButton} onClick={cancelUpgrade} bordered label={"Back"} />
                <ActionButton className={styles.asiActionButton} onClick={onSubmit} bordered label="Confirm"/>
            </div>
        </div>
    );
};
