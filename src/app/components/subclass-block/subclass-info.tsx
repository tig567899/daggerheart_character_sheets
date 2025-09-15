import { useCallback } from "react";

import { Ability, SubclassData } from "@dh_sheets/app/types";

import styles from "../heritage/heritage-block.module.css";

interface AncestryProps {
    subclass: SubclassData;
    specializationUnlocked?: boolean;
    masteryUnlocked?: boolean;
    onEdit: () => void;
}

export const SubclassInfo = ({
    subclass,
    specializationUnlocked,
    masteryUnlocked,
    onEdit,
}: AncestryProps) => {
    const renderSubclassFeatureList = useCallback(
        (features: Ability[], masteryLevel: string) => {
            return (
                <div key={`features-level-${masteryLevel}`}>
                    <div className={styles.subTitle}>
                        {masteryLevel}{" "}
                        {features.length === 1 ? "Feature" : "Features"}
                    </div>
                    {features.map((ability) => (
                        <div
                            className={styles.abilityBlock}
                            key={`${subclass.name}-${masteryLevel}-${ability.name}`}
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
            );
        },
        [subclass],
    );
    return (
        <div className={styles.infoLayout}>
            <div className={styles.infoCategory}>
                {subclass.name}
                <button onClick={onEdit} className={styles.changeButton}>
                    Change
                </button>
            </div>
            {renderSubclassFeatureList(
                subclass.foundationFeatures,
                "Foundation",
            )}
            {specializationUnlocked
                ? renderSubclassFeatureList(
                      subclass.foundationFeatures,
                      "Specialization",
                  )
                : null}
            {masteryUnlocked
                ? renderSubclassFeatureList(
                      subclass.foundationFeatures,
                      "Mastery",
                  )
                : null}
        </div>
    );
};
