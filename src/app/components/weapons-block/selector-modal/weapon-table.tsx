import { WeaponTier } from '@dh_sheets/app/data/weapon-data-store';

import { WeaponData } from '@dh_sheets/app/types';
import { WeaponList } from '@dh_sheets/app/components/weapons-block/selector-modal/weapon-list';

import styles from '../../selector-modal.module.css';

interface Props {
    weapons: WeaponTier;
    onWeaponSelect: (weapon: WeaponData) => void;
}

export const WeaponTable = ({ weapons, onWeaponSelect }: Props) => {
    return (
        <div className={styles.tableListContainer}>
            <WeaponList
                title="Physical Weapons"
                weapons={weapons.physical}
                onWeaponSelect={onWeaponSelect}
            />
            <WeaponList
                title="Magic Weapons"
                subtitle='All magic weapons require a Spellcast trait'
                weapons={weapons.magical}
                onWeaponSelect={onWeaponSelect}
            />
        </div>
    );
};
