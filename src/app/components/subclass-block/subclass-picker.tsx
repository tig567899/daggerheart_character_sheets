import classNames from "classnames";

import { getSubclassesByClass } from "@dh_sheets/app/charClassUtil";
import { getClassData } from "@dh_sheets/app/redux/character-data-store/selector";
import { useAppSelector } from "@dh_sheets/app/redux/hooks";

import styles from "./subclass-picker.module.css";

interface PickerProps {
    updateSelection: (index: number) => void;
    selectedIndex?: number;
}

const masteryLevels = ["Foundation", "Specialization", "Mastery"];

export const SubclassPicker = ({
    updateSelection,
    selectedIndex,
}: PickerProps) => {
    const { charClass } = useAppSelector(getClassData);
    const subclasses = getSubclassesByClass(charClass[0]);
    return (
        <ul className={styles.gallery}>
            {subclasses.map((subclass, index) => {
                return (
                    <div
                        key={`subclass-${subclass.name}`}
                        className={classNames(styles.card, {
                            [styles.cardSelected]: selectedIndex === index,
                        })}
                        onClick={() => updateSelection(index)}
                    >
                        <div className={styles.name}>{subclass.name}</div>
                        <div className={styles.background}>
                            {subclass.description}
                        </div>
                        {subclass.spellcastTrait ? (
                            <div>
                                <div className={styles.subTitle}>
                                    Spellcast Trait
                                </div>
                                <div className={styles.abilityBlock}>
                                    {subclass.spellcastTrait}
                                </div>
                            </div>
                        ) : null}
                        {[
                            subclass.foundationFeatures,
                            subclass.specializationFeatures,
                            subclass.masteryFeatures,
                        ].map((features, subIndex) => {
                            return (
                                <div
                                    key={`features-level-${masteryLevels[subIndex]}`}
                                >
                                    <div className={styles.subTitle}>
                                        {masteryLevels[subIndex]}{" "}
                                        {features.length === 1
                                            ? "Feature"
                                            : "Features"}
                                    </div>
                                    {features.map((ability) => (
                                        <div
                                            className={styles.abilityBlock}
                                            key={`${subclass.name}-${masteryLevels[subIndex]}-${ability.name}`}
                                        >
                                            <div className={styles.abilityName}>
                                                {ability.name}:{" "}
                                            </div>
                                            <div className={styles.abilityDesc}>
                                                {ability.description}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </ul>
    );
};
