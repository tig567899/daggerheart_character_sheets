import { useSelector } from "react-redux";

import { getHopeFeatureByClass } from "@dh_sheets/app/char-class-util";
import { HopeCounter } from "@dh_sheets/app/components/hope-block/hope-counter";
import { BlockTitle } from "@dh_sheets/app/components/parts/framed-block/block-title";
import { FramedBlock } from "@dh_sheets/app/components/parts/framed-block/framed-block";
import { ModifierField } from "@dh_sheets/app/constants";
import {
    getClassData,
    getModifierByField,
} from "@dh_sheets/app/redux/character-data-store/selector";
import { useAppSelector } from "@dh_sheets/app/redux/hooks";

import styles from "./hope-block.module.css";

export const HopeBlock = () => {
    const { charClass } = useSelector(getClassData);

    const multiclassModifiers = useAppSelector((state) =>
        getModifierByField(state, ModifierField.MULTICLASS),
    );

    const isMulticlassChar = multiclassModifiers > 0;

    const hopeFeature = getHopeFeatureByClass(charClass[0]);
    const multiclassHopeFeature = getHopeFeatureByClass(charClass[1]);

    return (
        <FramedBlock>
            <BlockTitle title="Hope" />
            <HopeCounter />
            <div className={styles.hopeFeatureContainer}>
                <div className={styles.hopeFeatureTitle}>
                    {isMulticlassChar ? `${charClass[0]} ` : null}Hope Feature: <i>{hopeFeature.name}</i>
                </div>
                <div className={styles.hopeFeatureDescription}>
                    {hopeFeature.description}
                </div>
            </div>
            {isMulticlassChar && (
                <div className={styles.hopeFeatureContainer}>
                    <div className={styles.hopeFeatureTitle}>
                        {charClass[1]} Hope Feature: <i>{multiclassHopeFeature.name}</i>
                    </div>
                    <div className={styles.hopeFeatureDescription}>
                        {multiclassHopeFeature.description}
                    </div>
                </div>
            )}
        </FramedBlock>
    );
};
