import classNames from "classnames";
import { useCallback } from "react";
import { useSelector } from "react-redux";

import { getBaseHpByClass } from "@dh_sheets/app/charClassUtil";
import { ArmorThresholds } from "@dh_sheets/app/components/health-block/armor-thresholds";
import { FillableResource } from "@dh_sheets/app/components/health-block/fillable-resource";
import { BlockTitle } from "@dh_sheets/app/components/parts/framed-block/block-title";
import { FramedBlock } from "@dh_sheets/app/components/parts/framed-block/framed-block";
import { ModifierField } from "@dh_sheets/app/constants";
import {
    setCurrentHp,
    setCurrentStress,
} from "@dh_sheets/app/redux/character-data-store/actions";
import {
    getCharacterStateData,
    getClassData,
    getModifierByField,
} from "@dh_sheets/app/redux/character-data-store/selector";
import { useAppDispatch, useAppSelector } from "@dh_sheets/app/redux/hooks";

import styles from "./health-block.module.css";

export const HealthBlock = () => {
    const { hp, stress, stressMax } = useSelector(getCharacterStateData);
    const classData = useSelector(getClassData);
    const dispatch = useAppDispatch();

    const charHpMax = getBaseHpByClass(classData.charClass[0]);
    const hpMods = useAppSelector((state) =>
        getModifierByField(state, ModifierField.MAX_HP),
    );

    const stressMods = useAppSelector((state) =>
        getModifierByField(state, ModifierField.MAX_STRESS),
    );

    const onHpChange = useCallback(
        (hp: number) => {
            dispatch(setCurrentHp(hp));
        },
        [dispatch],
    );

    const onStressChange = useCallback(
        (stress: number) => {
            dispatch(setCurrentStress(stress));
        },
        [dispatch],
    );

    return (
        <FramedBlock className={styles.healthBlock}>
            <BlockTitle title="Damage and Health" />
            <ArmorThresholds />
            <FillableResource
                name="HP"
                maxValue={charHpMax + hpMods}
                value={hp}
                onValueChange={onHpChange}
            />
            <FillableResource
                name="Stress"
                maxValue={stressMax + stressMods}
                value={stress}
                onValueChange={onStressChange}
            />
        </FramedBlock>
    );
};
