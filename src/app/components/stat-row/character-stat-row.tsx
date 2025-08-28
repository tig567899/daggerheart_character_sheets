import {
    AdjustableFramedStat,
    FixedFramedStat,
} from '@dh_sheets/app/components/framed-stat';
import {
    getClassData,
    getEquipmentData,
    getStatData,
} from '@dh_sheets/app/redux/character-data-store/selector';
import { useAppDispatch } from '@dh_sheets/app/redux/hooks';
import { getBaseEvasionByClass } from '@dh_sheets/app/util';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import styles from './character-stat-row.module.css';
import { setStatValue } from '@dh_sheets/app/redux/character-data-store/actions';

const abilityNames = [
    'Agility',
    'Strength',
    'Finesse',
    'Instinct',
    'Presence',
    'Knowledge',
];

export const CharacterStatRow = () => {
    const statData = useSelector(getStatData);
    const classData = useSelector(getClassData);
    const dispatch = useAppDispatch();

    const charClass = classData.charClass[0];
    const baseEvasion = charClass ? getBaseEvasionByClass(charClass) : '-'; // TODO: Add evasion modifiers
    const equipment = useSelector(getEquipmentData);
    const armorValue = equipment.armor?.score ?? 0;
    const getStatByAbilityName = useCallback((name: string) => {
        switch (name) {
            case 'Agility':
                return statData.agility;
            case 'Strength':
                return statData.strength;
            case 'Finesse':
                return statData.finesse;
            case 'Instinct':
                return statData.instinct;
            case 'Presence':
                return statData.presence;
            case 'Knowledge':
                return statData.knowledge;
            default:
                return undefined;
        }
    }, [statData]);

    const onChange = useCallback(
        (name: string, value: number) => {
            dispatch(
                setStatValue({
                    bonus: value,
                    name,
                })
            );
        },
        [dispatch]
    );

    return (
        <div className={styles.container}>
            <FixedFramedStat value={baseEvasion} label="Evasion" />
            <FixedFramedStat value={armorValue} label="Armor" />
            {abilityNames.map((name) => (
                <div key={`ability-${name}`} className={styles.statContainer}>
                    <AdjustableFramedStat
                        value={getStatByAbilityName(name)?.bonus ?? 'N/A'}
                        label={name}
                        usePlus
                        onChange={onChange}
                    />
                </div>
            ))}
        </div>
    );
};
