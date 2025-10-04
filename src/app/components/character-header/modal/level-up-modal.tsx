import { useCallback, useMemo, useState } from "react";

import { LevelUpBaseScreen } from "@dh_sheets/app/components/character-header/modal/level-up-base-screen";
import { ActionButton } from "@dh_sheets/app/components/parts/action-button/action-button";
import { BaseModal } from "@dh_sheets/app/components/parts/modal/base-modal";
import { TwoPointLevelUpKeys } from "@dh_sheets/app/constants";
import { setExperience } from "@dh_sheets/app/redux/character-data-store/actions";
import { getClassData } from "@dh_sheets/app/redux/character-data-store/selector";
import { useAppDispatch, useAppSelector } from "@dh_sheets/app/redux/hooks";
import { LevelUpChoice } from "@dh_sheets/app/types";
import { getTierByLevel } from "@dh_sheets/app/util";

import styles from "./level-up-stats.module.css";

interface ModalProps {
    onClose: () => void;
    onSelect: (options: LevelUpChoice[]) => void;
}

export const LevelUpModal = ({ onClose, onSelect }: ModalProps) => {
    const [firstUpgrade, setFirstUpgrade] = useState<LevelUpChoice | null>(
        null,
    );
    const [secondUpgrade, setSecondUpgrade] = useState<LevelUpChoice | null>(
        null,
    );
    const [newExperience, setNewExperience] = useState<string | undefined>();

    const dispatch = useAppDispatch();

    const { level } = useAppSelector(getClassData);

    const isTierUp = level === 1 || level === 4 || level === 7;
    const newTier = isTierUp ? getTierByLevel(level + 1) : null;

    const submittable = useMemo(() => {
        if (!firstUpgrade) {
            return false;
        }
        if (
            !secondUpgrade &&
            !TwoPointLevelUpKeys.has(firstUpgrade.levelUpKey)
        ) {
            return false;
        }
        return true;
    }, [firstUpgrade, secondUpgrade]);

    const onUpgradeConfirm = useCallback(
        (choice: LevelUpChoice) => {
            if (firstUpgrade) {
                setSecondUpgrade(choice);
            } else {
                setFirstUpgrade(choice);
            }
        },
        [firstUpgrade],
    );

    const onSubmit = useCallback(() => {
        if (!submittable || !firstUpgrade) {
            return;
        }
        if (!secondUpgrade) {
            onSelect([firstUpgrade]);
        } else {
            onSelect([firstUpgrade, secondUpgrade]);
        }

        if (newTier && newExperience) {
            dispatch(
                setExperience({ experience: newExperience, index: newTier }),
            );
        }
    }, [
        firstUpgrade,
        secondUpgrade,
        submittable,
        onSelect,
        dispatch,
        newExperience,
        newTier,
    ]);

    const onReset = useCallback(() => {
        setFirstUpgrade(null);
        setSecondUpgrade(null);
    }, []);

    const onSetNewExp = useCallback((event: any) => {
        setNewExperience(event.target.value);
    }, []);

    return (
        <BaseModal
            short
            onClose={onClose}
            onSelect={onSubmit}
            title={`Level Up ${level} => ${level + 1}`}
            hideSubmit={!submittable}
            closeLabel="Cancel"
            submitLabel="Confirm"
        >
            {isTierUp ? (
                <div className={styles.selectedOptionsBlock}>
                    <div className={styles.tierUpTitle}>
                        Moving into Tier {newTier}
                    </div>
                    <div className={styles.tierUpDescription}>
                        (Automatic) Clear all marks on character traits, and
                        gain a +1 bonus to your Proficiency.
                    </div>
                    <div className={styles.tierUpDescription}>
                        You also gain a new Experience:{" "}
                        <input
                            value={newExperience ?? ""}
                            onInput={onSetNewExp}
                        ></input>
                    </div>
                </div>
            ) : null}
            {isTierUp ? <div className={styles.divider} /> : null}
            <div className={styles.selectedOptionsBlock}>
                Selected options:
                {firstUpgrade ? (
                    <div>
                        <ul>
                            <li>{firstUpgrade.description}</li>
                            {secondUpgrade ? (
                                <li>{secondUpgrade.description}</li>
                            ) : null}
                        </ul>

                        <ActionButton
                            label={"Reset"}
                            onClick={onReset}
                            className={styles.resetButton}
                            bordered
                        />
                    </div>
                ) : (
                    " None"
                )}
            </div>
            <div className={styles.divider} />
            {!submittable && (
                <LevelUpBaseScreen
                    secondSelection={firstUpgrade !== null}
                    setUpgrade={onUpgradeConfirm}
                    chosenUpgrade={firstUpgrade ?? undefined}
                    newExperience={newExperience}
                />
            )}
        </BaseModal>
    );
};
