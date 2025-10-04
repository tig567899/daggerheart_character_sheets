import { useSelector } from "react-redux";

import { FixedFramedStat } from "@dh_sheets/app/components/parts/framed-stat/framed-stat";
import { ModifierField } from "@dh_sheets/app/constants";
import {
    getClassData,
    getEquipmentData,
    getModifierByField,
    getModifierListByField,
} from "@dh_sheets/app/redux/character-data-store/selector";
import { useAppSelector } from "@dh_sheets/app/redux/hooks";

import styles from "./health-block.module.css";

export const ArmorThresholds = () => {
    const equipment = useSelector(getEquipmentData);
    const classData = useSelector(getClassData);
    const majorMod = useAppSelector((state) =>
        getModifierByField(state, ModifierField.MAJOR_THRESHOLD),
    );
    const majorModList = useAppSelector((state) =>
        getModifierListByField(state, ModifierField.MAJOR_THRESHOLD),
    );
    const severeMod = useAppSelector((state) =>
        getModifierByField(state, ModifierField.SEVERE_THRESHOLD),
    );
    const severeModList = useAppSelector((state) =>
        getModifierListByField(state, ModifierField.MAJOR_THRESHOLD),
    );

    const baseThreshold = equipment.armor?.majorThreshold ?? 0;
    const baseSevereThreshold = equipment.armor?.severeThreshold ?? 0;

    const majorThreshold = baseThreshold + classData.level + majorMod;
    const severeThreshold =
        baseSevereThreshold + 2 * classData.level + severeMod;
    const additionalMajorMod = [[classData.level, "your level"]];
    const additionalSevereMod = [[2 * classData.level, "twice your level"]];

    return (
        <div className={styles.armorThresholds}>
            <div className={styles.thresholdDescription}>
                <span>Minor Damage</span>{" "}
                <span className={styles.thresholdReminder}>Mark 1 HP</span>
            </div>
            <FixedFramedStat
                label=""
                value={majorThreshold}
                small
                modifiers={majorModList}
                baseNumber={baseThreshold}
                additionalMods={additionalMajorMod}
            />
            <div className={styles.thresholdDescription}>
                <span>Major Damage</span>{" "}
                <span className={styles.thresholdReminder}>Mark 2 HP</span>
            </div>
            <FixedFramedStat
                label=""
                value={severeThreshold}
                small
                modifiers={severeModList}
                baseNumber={baseSevereThreshold}
                additionalMods={additionalSevereMod}
            />
            <div className={styles.thresholdDescription}>
                <span>Severe Damage</span>{" "}
                <span className={styles.thresholdReminder}>Mark 3 HP</span>
            </div>
        </div>
    );
};
