import { useSelector } from "react-redux";

import { getHopeFeatureByClass } from "@dh_sheets/app/char-class-util";
import { HopeCounter } from "@dh_sheets/app/components/hope-block/hope-counter";
import { BlockTitle } from "@dh_sheets/app/components/parts/framed-block/block-title";
import { FramedBlock } from "@dh_sheets/app/components/parts/framed-block/framed-block";
import { getClassData } from "@dh_sheets/app/redux/character-data-store/selector";

import styles from "./hope-block.module.css";

export const HopeBlock = () => {
    const { charClass } = useSelector(getClassData);

    const hopeFeature = getHopeFeatureByClass(charClass[0]);

    return (
        <FramedBlock>
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
        </FramedBlock>
    );
};
