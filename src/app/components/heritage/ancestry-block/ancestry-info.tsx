import { ReactElement, useCallback, useState } from "react";

import { Ancestry } from "@dh_sheets/app/types";

import styles from "../heritage-block.module.css";

interface AncestryProps {
    ancestry: Ancestry;
    changeButton: ReactElement;
}

export const AncestryInfo = ({
    ancestry,
    changeButton,
}: AncestryProps) => {
    const [descriptionExpanded, setDescriptionExpanded] = useState(false);
    const description = descriptionExpanded
        ? ancestry.background
        : `${ancestry.background[0].split(".")[0]}.`;

    const onToggleDescription = useCallback(() => {
        setDescriptionExpanded(!descriptionExpanded);
    }, [descriptionExpanded]);
    return (
        <div className={styles.infoLayout}>
            <div className={styles.infoCategory}>
                {ancestry.name}
                <div className={styles.changeButton}>{changeButton}</div>
            </div>
            <div className={styles.infoDescription}>
                {description}{" "}
                <a onClick={onToggleDescription}>
                    See {descriptionExpanded ? "less" : "more"}
                </a>
            </div>
            Ancestry Features
            <div>
                {ancestry.abilities.map((ability) => (
                    <div
                        className={styles.abilityBlock}
                        key={`${ancestry.name}-${ability.name}`}
                    >
                        <div className={styles.abilityName}>{ability.name}</div>
                        <div className={styles.abilityDescription}>
                            {ability.description}{" "}
                            {ability.modifier ? "(Automatic)" : null}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
