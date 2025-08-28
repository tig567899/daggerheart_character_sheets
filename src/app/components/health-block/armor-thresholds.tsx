import { FixedFramedStat } from '@dh_sheets/app/components/framed-stat';
import {
    getClassData,
    getEquipmentData,
} from '@dh_sheets/app/redux/character-data-store/selector';
import { useSelector } from 'react-redux';
import styles from './health-block.module.css';

export const ArmorThresholds = () => {
    const equipment = useSelector(getEquipmentData);
    const classData = useSelector(getClassData);
    const majorThreshold =
        equipment.armor?.majorThreshold ?? 0 + classData.level;
    const severeThreshold =
        equipment.armor?.severeThreshold ?? 0 + 2 * classData.level;
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
            <FixedFramedStat label="" value={2 * severeThreshold} small/>
            <div className={styles.thresholdDescription}>
                <span>Massive Damage (Optional)</span> <i>Mark 4 HP</i>
            </div>
        </div>
    );
};
