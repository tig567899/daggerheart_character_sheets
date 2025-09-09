import { useSelector } from "react-redux";

import { getHopeFeatureByClass } from "@dh_sheets/app/charClassUtil";
import { BlockTitle } from "@dh_sheets/app/components/block-title";
import { HopeCounter } from "@dh_sheets/app/components/hope-block/hope-counter";
import { getClassData } from "@dh_sheets/app/redux/character-data-store/selector";

import parentStyles from "../framed-block.module.css";
import styles from "./hope-block.module.css";

export const HopeBlock = () => {
    const { charClass } = useSelector(getClassData);

    const hopeFeature = getHopeFeatureByClass(charClass[0]);

    return (
        <div className={parentStyles.framedBlock}>
            <BlockTitle title="Hope" />
            <HopeCounter />
            <div className={styles.hopeFeatureContainer}>
                <div className={styles.hopeFeatureTitle}>
                    Hope Feature: <i>{hopeFeature.name}</i>
                </div>
                <div className={styles.hopeFeatureDescription}>
                    {hopeFeature.description}
                </div>
            </div>
        </div>
    );
};
