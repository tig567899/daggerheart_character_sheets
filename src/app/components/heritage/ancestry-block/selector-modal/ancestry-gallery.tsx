import classNames from "classnames";

import { AncestriesList } from "@dh_sheets/app/data/ancestry-data";

import styles from "../../selector.module.css";

interface SelectorProps {
    updateSelection: (index: number) => void;
    selectedIndex: number;
}

export const AncestryGallery = ({
    updateSelection,
    selectedIndex,
}: SelectorProps) => {
    return (
        <div className={styles.galleryContainer}>
            <ul className={styles.gallery}>
                {AncestriesList.map((ancestry, index) => {
                    const backgroundBrief =
                        ancestry.background[0].split(".")[0];
                    return (
                        <div
                            className={classNames(styles.card, {
                                [styles.cardSelected]: selectedIndex === index,
                            })}
                            key={`ancestry-${ancestry.name}`}
                            onClick={() => updateSelection(index)}
                        >
                            <div className={styles.name}>{ancestry.name}</div>
                            <div
                                className={styles.background}
                            >{`${backgroundBrief}.`}</div>
                            Ancestry Features
                            {ancestry.abilities.map((ability) => (
                                <div
                                    className={styles.abilityBlock}
                                    key={`${ancestry.name}-${ability.name}`}
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
            </ul>
        </div>
    );
};
