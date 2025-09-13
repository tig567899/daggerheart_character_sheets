import classNames from "classnames";
import { useCallback, useMemo, useState } from "react";

import {
    BaseModal,
    ColumnModal,
} from "@dh_sheets/app/components/parts/modal/base-modal";
import { WeaponTable } from "@dh_sheets/app/components/weapons-block/selector-modal/weapon-table";
import { Tier1PrimaryWeapons } from "@dh_sheets/app/data/weapon-data-store";
import { WeaponData } from "@dh_sheets/app/types";

export interface WeaponProps {
    hide?: boolean;
    id: string;
    onSelect: (id: string, weapon: WeaponData) => void;
    onClose: () => void;
}

export const WeaponSelectorModal = ({
    id,
    onSelect,
    onClose,
}: WeaponProps) => {
    // Use this later
    // const secondary = id === WeaponSlot.SECONDARY;
    const onWeaponSelect = useCallback(
        (weapon: WeaponData) => onSelect(id, weapon),
        [id, onSelect],
    );

    const renderWeaponLayout = useCallback(
        () => (
            <WeaponTable
                onWeaponSelect={onWeaponSelect}
                weapons={Tier1PrimaryWeapons}
            />
        ),
        [],
    );
    const renderCustomWeaponLayout = () => <div>TBD</div>;

    const columns = useMemo(
        () => [
            {
                name: "Weapon List",
                render: renderWeaponLayout,
            },
            {
                name: "Custom Weapon",
                render: renderCustomWeaponLayout,
            },
        ],
        [],
    );

    return (
        <ColumnModal
            title="Select Weapon"
            onClose={onClose}
            columns={columns}
        />
    );
    /*
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
    );*/
};
