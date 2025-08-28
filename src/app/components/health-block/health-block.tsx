import { ArmorThresholds } from '@dh_sheets/app/components/health-block/armor-thresholds';
import { FillableResource } from '@dh_sheets/app/components/health-block/fillable-resource';
import { setCurrentHp, setCurrentStress } from '@dh_sheets/app/redux/character-data-store/actions';
import { getCharacterStateData, getClassData } from '@dh_sheets/app/redux/character-data-store/selector';
import { useAppDispatch } from '@dh_sheets/app/redux/hooks';
import { getBaseHpByClass } from '@dh_sheets/app/util';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import styles from './health-block.module.css'

export const HealthBlock = () => {
    const characterStateData = useSelector(getCharacterStateData);
    const classData = useSelector(getClassData);
    const dispatch = useAppDispatch();

    const charHpMax = getBaseHpByClass(classData.charClass[0]);

    const onHpChange = useCallback((hp: number) => {
        dispatch(setCurrentHp(hp))
    }, []);

    const onStressChange = useCallback((stress: number) => {
        dispatch(setCurrentStress(stress))
    }, [dispatch])

    return (
        <div className={styles.healthBlock}>
            <ArmorThresholds />
            <FillableResource
                name="HP"
                maxValue={charHpMax}
                value={characterStateData.hp}
                onValueChange={onHpChange}
            />
            <FillableResource
                name="Stress"
                maxValue={characterStateData.stressMax}
                value={characterStateData.stress}
                onValueChange={onStressChange}
            />
        </div>
    );
};
