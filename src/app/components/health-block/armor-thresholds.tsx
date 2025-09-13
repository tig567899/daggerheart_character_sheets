import { FixedFramedStat } from '@dh_sheets/app/components/parts/framed-stat/framed-stat';
import {
    getClassData,
    getEquipmentData,
    getModifierByField,
} from '@dh_sheets/app/redux/character-data-store/selector';
import { useSelector } from 'react-redux';
import styles from './health-block.module.css';
import { ModifierField } from '@dh_sheets/app/constants';
import { useAppSelector } from '@dh_sheets/app/redux/hooks';

export const ArmorThresholds = () => {
    const equipment = useSelector(getEquipmentData);
    const classData = useSelector(getClassData);    
    const majorMod = useAppSelector((state) => getModifierByField(state, ModifierField.MAJOR_THRESHOLD));
    const severeMod = useAppSelector((state) => getModifierByField(state, ModifierField.SEVERE_THRESHOLD));

    const majorThreshold =
        (equipment.armor?.majorThreshold ?? 0) + classData.level + majorMod;
    const severeThreshold =
        (equipment.armor?.severeThreshold ?? 0) + 2 * classData.level + severeMod;
    return (
        <div className={styles.armorThresholds}>
            <div className={styles.thresholdDescription}>
                <span>Minor Damage</span> <i>Mark 1 HP</i>
            </div>
            <FixedFramedStat label="" value={majorThreshold} small />
            <div className={styles.thresholdDescription}>
                <span>Major Damage</span> <i>Mark 2 HP</i>
            </div>
            <FixedFramedStat label="" value={severeThreshold} small />
            <div className={styles.thresholdDescription}>
                <span>Severe Damage</span> <i>Mark 3 HP</i>
            </div>
        </div>
    );
};
