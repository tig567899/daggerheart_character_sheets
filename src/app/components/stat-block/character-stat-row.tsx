import { useSelector } from "react-redux";

import { getBaseEvasionByClass } from "@dh_sheets/app/charClassUtil";
import { FixedFramedStat } from "@dh_sheets/app/components/parts/framed-stat/framed-stat";
import { StatsBlock } from "@dh_sheets/app/components/stat-block/stats-block";
import { ModifierField } from "@dh_sheets/app/constants";
import {
    getClassData,
    getEquipmentData,
    getModifierByField,
} from "@dh_sheets/app/redux/character-data-store/selector";
import { useAppSelector } from "@dh_sheets/app/redux/hooks";

import styles from "./character-stat-row.module.css";

export const CharacterStatRow = () => {
    const classData = useSelector(getClassData);

    const charClass = classData.charClass[0];
    const baseEvasion = charClass ? getBaseEvasionByClass(charClass) : 0; // TODO: Add evasion modifiers
    const evasionModifier = useAppSelector((state) =>
        getModifierByField(state, ModifierField.EVASION),
    );
    const equipment = useSelector(getEquipmentData);
    const armorValue = equipment.armor?.score ?? 0;

    return (
        <div className={styles.container}>
            <FixedFramedStat
                value={baseEvasion + evasionModifier}
                label="Evasion"
            />
            <FixedFramedStat value={armorValue} label="Armor" />
            <StatsBlock />
        </div>
    );
};
