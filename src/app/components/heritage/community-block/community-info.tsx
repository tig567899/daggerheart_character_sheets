import { useCallback, useState } from "react";

import { Community } from "@dh_sheets/app/types";

import styles from "../heritage-block.module.css";

interface CommunityProps {
    community: Community;
    onEdit: () => void;
}

export const CommunityInfo = ({ community, onEdit }: CommunityProps) => {
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
                <button onClick={onEdit} className={styles.changeButton}>
                    Change
                </button>
            </div>
            <div className={styles.infoDescription}>
                {description}{" "}
                <a onClick={onToggleDescription}>
                    See {descriptionExpanded ? "less" : "more"}
                </a>
            </div>
            <div className={styles.infoDescription}>{community.rolePlayTips}</div>
            Community Feature
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
