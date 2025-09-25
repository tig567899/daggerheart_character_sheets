import { ReactElement, useCallback } from "react";

import { Ability, SubclassData } from "@dh_sheets/app/types";

import styles from "../heritage/heritage-block.module.css";

interface SubclassProps {
    subclass: SubclassData;
    specializationUnlocked?: boolean;
    masteryUnlocked?: boolean;
    changeButton: ReactElement;
}

export const SubclassInfo = ({
    subclass,
    specializationUnlocked,
    masteryUnlocked,
    changeButton,
}: SubclassProps) => {
    const renderSubclassFeatureList = useCallback(
        (features: Ability[], masteryLevel: string) => {
            return (
                <div key={`features-level-${masteryLevel}`}>
                    <div className={styles.featuresHeader}>
                        {masteryLevel}{" "}
                        {features.length === 1 ? "Feature" : "Features"}
                    </div>
                    <div className={styles.abilityBlockGroup}>
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
                </div>
            );
        },
        [subclass],
    );
    return (
        <div className={styles.infoLayout}>
            <div className={styles.infoCategory}>
                {subclass.name}
                <div className={styles.changeButton}>{changeButton}</div>
            </div>
            {subclass.spellcastTrait ? (
                <div className={styles.abilityBlock}>
                    <div className={styles.abilityName}>Spellcasting Trait</div>
                    <div className={styles.abilityDescription}>
                        {subclass.spellcastTrait}
                    </div>
                </div>
            ) : null}
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
