import { useCallback, useState } from "react";
import { useSelector } from "react-redux";

import { BlockTitle } from "@dh_sheets/app/components/block-title";
import { WeaponSelectorModal } from "@dh_sheets/app/components/weapons-block/selector-modal/weapon-selector-modal";
import { WeaponInfoLayout } from "@dh_sheets/app/components/weapons-block/weapon-info";
import {
    addInventoryWeapon,
    setInventoryWeaponAt,
} from "@dh_sheets/app/redux/character-data-store/actions";
import { getEquipmentData } from "@dh_sheets/app/redux/character-data-store/selector";
import { useAppDispatch } from "@dh_sheets/app/redux/hooks";
import { WeaponData } from "@dh_sheets/app/types";

import parentStyles from "../framed-block.module.css";
import weaponStyles from "../weapons-block/weapons-block.module.css";

export const InventoryBlock = () => {
    const [modalKey, setModalKey] = useState<number>(Math.random());
    const [selectingFor, setSelectingFor] = useState<number | null>(null);

    const dispatch = useAppDispatch();

    const onOpenDialog = useCallback(
        (index: number) => setSelectingFor(index),
        [setSelectingFor],
    );

    const onModalClose = useCallback(() => {
        setSelectingFor(null);
        setModalKey(Math.random());
    }, [setSelectingFor]);

    const onWeaponSelect = useCallback(
        (id: string, weapon?: WeaponData) => {
            if (selectingFor === -1 && weapon) {
                dispatch(addInventoryWeapon(weapon));
            } else if (selectingFor !== null) {
                dispatch(setInventoryWeaponAt({ weapon, index: selectingFor }));
            }
            setSelectingFor(null);
            setModalKey(Math.random());
        },
        [selectingFor, setModalKey],
    );

    const onWeaponClear = useCallback(
        (index: number) => {
            dispatch(setInventoryWeaponAt({ index }));
            setModalKey(Math.random());
        },
        [setModalKey],
    );

    const equipmentData = useSelector(getEquipmentData);

    return (
        <div className={parentStyles.framedBlock}>
            <BlockTitle title="Inventory" />
            <div className={weaponStyles.weaponInfoCategory}>Items</div>
            {equipmentData.inventoryItems.map((item) => (
                <div>{item}</div>
            ))}
            {equipmentData.inventoryWeapons.map((weapon, index) => {
                return (
                    <WeaponInfoLayout
                        key={`inventory-block-weapon-${index}`}
                        weapon={weapon}
                        categoryName={"Inventory Weapon"}
                        onEdit={() => onOpenDialog(index)}
                        onRemove={() => onWeaponClear(index)}
                    />
                );
            })}
            <button className={weaponStyles.addWeaponButton}>Add item</button>

            <button
                onClick={() => onOpenDialog(-1)}
                className={weaponStyles.addWeaponButton}
            >
                Add inventory weapon
            </button>

            <WeaponSelectorModal
                key={`inventory-weapon-select-modal-${modalKey}`}
                id={'inventory'}
                hide={selectingFor === null}
                onSelect={onWeaponSelect}
                onClose={onModalClose}
            />
        </div>
    );
};
