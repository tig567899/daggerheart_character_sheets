import classNames from "classnames";

import { CommunitiesList } from "@dh_sheets/app/data/community-data";

import styles from "../../selector.module.css";

interface SelectorProps {
    updateSelection: (index: number) => void;
    selectedIndex: number;
}

export const CommunityGallery = ({
    updateSelection,
    selectedIndex,
}: SelectorProps) => {
    return (
        <div className={styles.galleryContainer}>
            <ul className={styles.gallery}>
            {CommunitiesList.map((community, index) => {
                const backgroundBrief = community.background.split(".")[0];
                const ability = community.ability;
                return (
                    <div
                        className={classNames(styles.card, {
                            [styles.cardSelected]: selectedIndex === index,
                        })}
                        key={`community-${community.name}`}
                        onClick={() => updateSelection(index)}
                    >
                        <div className={styles.name}>{community.name}</div>
                        <div
                            className={styles.background}
                        >{`${backgroundBrief}.`}</div>
                        Community Feature
                        <div
                            className={styles.abilityBlock}
                            key={`${community.name}-${ability.name}`}
                        >
                            <div className={styles.abilityName}>
                                {ability.name}:{" "}
                            </div>
                            <div className={styles.abilityDesc}>
                                {ability.description}
                            </div>
                        </div>
                    </div>
                );
            })}
        </ul>
        </div>
        
    );
};
