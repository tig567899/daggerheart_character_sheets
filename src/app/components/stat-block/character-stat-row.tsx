import classNames from "classnames";
import { useCallback, useContext } from "react";
import { useSelector } from "react-redux";

import { getBaseEvasionByClass } from "@dh_sheets/app/char-class-util";
import { FixedFramedStat } from "@dh_sheets/app/components/parts/framed-stat/framed-stat";
import { StatsBlock } from "@dh_sheets/app/components/stat-block/stats-block";
import { ModifierField } from "@dh_sheets/app/constants";
import { PageContext } from "@dh_sheets/app/context";
import {
    getCharacterStateData,
    getClassData,
    getEquipmentData,
    getModifierByField,
    getModifierListByField,
} from "@dh_sheets/app/redux/character-data-store/selector";
import { useAppDispatch, useAppSelector } from "@dh_sheets/app/redux/hooks";

import styles from "./character-stat-row.module.css";
import { FillableResource } from "@dh_sheets/app/components/parts/fillable-resource/fillable-resource";
import { setCurrentArmor } from "@dh_sheets/app/redux/character-data-store/actions";
import { TooltipDirection } from "@dh_sheets/app/components/parts/tooltip/tooltip-trigger";

export const CharacterStatRow = () => {
    const dispatch = useAppDispatch();

    const classData = useSelector(getClassData);
    const {armorConsumed} = useSelector(getCharacterStateData);
    const pageContext = useContext(PageContext);

    const charClass = classData.charClass[0];
    const baseEvasion = charClass ? getBaseEvasionByClass(charClass) : 0;
    const evasionModifier = useAppSelector((state) =>
        getModifierByField(state, ModifierField.EVASION),
    );

    const evasionModList = useAppSelector((state) =>
        getModifierListByField(state, ModifierField.EVASION),
    );
    const equipment = useSelector(getEquipmentData);
    const armorValue = equipment.armor?.score ?? 0;
    const armorModifier = useAppSelector((state) =>
        getModifierByField(state, ModifierField.ARMOR_SCORE),
    );

    const armorModList = useAppSelector((state) =>
        getModifierListByField(state, ModifierField.ARMOR_SCORE),
    );

    const onArmorChange = useCallback((value: number) => {
        dispatch(setCurrentArmor(value));
    }, [dispatch])

    return (
        <div
            className={classNames(styles.container, {
                [styles.vertical]: pageContext.limitedWidth,
            })}
        >
            <div className={classNames(styles.container, {
                [styles.limitedWidthDefenses]: pageContext.limitedWidth
            })}>
                <FixedFramedStat
                    value={baseEvasion + evasionModifier}
                    label="Evasion"
                    modifiers={evasionModList}
                    baseNumber={baseEvasion}
                    tooltipDirection={TooltipDirection.RIGHT}
                    baseSource="class"
                />
                {pageContext.limitedWidth ? <div className={styles.verticalDivider}/> : null}
                <FixedFramedStat
                    value={armorValue + armorModifier}
                    label="Armor"
                    modifiers={armorModList}
                    baseNumber={armorValue}
                    baseSource={equipment.armor?.name}
                />
                <FillableResource
                    name=""
                    maxValue={armorValue + armorModifier}
                    value={armorConsumed}
                    onValueChange={onArmorChange} 
                    gridMaxCount={4}
                    fillPhantomToNumber={12} />
            </div>

            <StatsBlock />
        </div>
    );
};
