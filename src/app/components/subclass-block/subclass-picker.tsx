import classNames from "classnames";
import { useContext } from "react";

import { getSubclassesByClass } from "@dh_sheets/app/char-class-util";
import { PageContext } from "@dh_sheets/app/context";
import { getClassData } from "@dh_sheets/app/redux/character-data-store/selector";
import { useAppSelector } from "@dh_sheets/app/redux/hooks";

import styles from "./subclass-picker.module.css";

interface PickerProps {
    updateSelection: (index: number) => void;
    classIndex: number;
    selectedIndex?: number;
}

const masteryLevels = ["Foundation", "Specialization", "Mastery"];

export const SubclassPicker = ({
    updateSelection,
    classIndex,
    selectedIndex,
}: PickerProps) => {
    const pageContext = useContext(PageContext);

    const { charClass } = useAppSelector(getClassData);
    const subclasses = getSubclassesByClass(charClass[classIndex]);
    return (
        <ul
            className={classNames(styles.gallery, {
                [styles.galleryNarrow]: pageContext.limitedWidth,
            })}
        >
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
