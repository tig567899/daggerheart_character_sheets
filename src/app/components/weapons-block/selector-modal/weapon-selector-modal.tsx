import { WeaponData } from '@dh_sheets/app/types';
import { useCallback, useState } from 'react';
import classNames from 'classnames';
import { Tier1PrimaryWeapons } from '@dh_sheets/app/data/weapon-data-store';
import { WeaponTable } from '@dh_sheets/app/components/weapons-block/selector-modal/weapon-table';

import styles from '../../selector-modal.module.css';

export interface WeaponProps {
    hide?: boolean;
    id: string;
    onSelect: (id: string, weapon: WeaponData) => void;
    onClose: () => void;
}

enum ModalColumn {
    WEAPON_SELECTION,
    CUSTOM_WEAPON,
}

export const WeaponSelectorModal = ({ hide, id, onSelect, onClose }: WeaponProps) => {
    const [columnSelected, setColumnSelected] = useState<ModalColumn>(
        ModalColumn.WEAPON_SELECTION
    );

    // Use this later
    // const secondary = id === WeaponSlot.SECONDARY;

    const setWeaponListLayout = useCallback(() => {
        setColumnSelected(ModalColumn.WEAPON_SELECTION);
    }, []);

    const setCustomWeaponLayout = useCallback(() => {
        setColumnSelected(ModalColumn.CUSTOM_WEAPON);
    }, []);

    const onWeaponSelect = useCallback((weapon: WeaponData) => onSelect(id, weapon), [id, onSelect])

    const absorbClick = useCallback((e: React.MouseEvent) => e.stopPropagation(), [])

    if (hide) {
        return null;
    }

    const weaponListLayout = <WeaponTable onWeaponSelect={onWeaponSelect} weapons={Tier1PrimaryWeapons} />;
    const customWeaponLayout = <div>TBD</div>;
    return (
        <div onClick={onClose} className={styles.modalContainer}>
            <div onClick={absorbClick} className={styles.modal}>
                <button className={styles.closeButton} onClick={onClose}>
                    Close
                </button>
                <div className={styles.selectorTitle}>Select Weapon</div>
                <div className={styles.columnSelector}>
                    <div
                        className={classNames(styles.columnSelectorTitle, {
                            [styles.selected]: columnSelected === 0,
                        })}
                        onClick={setWeaponListLayout}
                    >
                        Weapon List
                    </div>
                    <div
                        className={classNames(styles.columnSelectorTitle, {
                            [styles.selected]: columnSelected === 1,
                        })}
                        onClick={setCustomWeaponLayout}
                    >
                        Custom Weapon
                    </div>
                </div>
                {columnSelected === ModalColumn.WEAPON_SELECTION
                    ? weaponListLayout
                    : customWeaponLayout}
            </div>
        </div>
    );
};
