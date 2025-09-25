import { ReactElement, useCallback, useState } from "react";

import { Community } from "@dh_sheets/app/types";

import styles from "../heritage-block.module.css";

interface CommunityProps {
    community: Community;
    changeButton: ReactElement;
}

export const CommunityInfo = ({ community, changeButton }: CommunityProps) => {
    const [descriptionExpanded, setDescriptionExpanded] = useState(false);
    const description = descriptionExpanded
        ? community.background
        : `${community.background.split(".")[0]}.`;

    const onToggleDescription = useCallback(() => {
        setDescriptionExpanded(!descriptionExpanded);
    }, [descriptionExpanded]);

    const ability = community.ability;

    return (
        <div className={styles.infoLayout}>
            <div className={styles.infoCategory}>
                {community.name}
                <div className={styles.changeButton}>{changeButton}</div>
            </div>
            <div className={styles.infoDescription}>
                {description}{" "}
                <a onClick={onToggleDescription}>
                    See {descriptionExpanded ? "less" : "more"}
                </a>
            </div>
            <div className={styles.rolePlayDescription}>
                {community.rolePlayTips}
            </div>
            <div className={styles.featuresHeader}>Community Feature</div>{" "}
            <div>
                <div
                    className={styles.abilityBlock}
                    key={`${community.name}-${ability.name}`}
                >
                    <div className={styles.abilityName}>{ability.name}</div>
                    <div className={styles.abilityDescription}>
                        {ability.description}{" "}
                        {ability.modifier ? "(Automatic)" : null}
                    </div>
                </div>
            </div>
        </div>
    );
};
