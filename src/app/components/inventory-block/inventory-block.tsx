import { useCallback, useRef, useState } from "react";
import { useSelector } from "react-redux";

import { BlockTitle } from "@dh_sheets/app/components/parts/framed-block/block-title";
import { FramedBlock } from "@dh_sheets/app/components/parts/framed-block/framed-block";
import { WeaponSelectorModal } from "@dh_sheets/app/components/weapons-block/selector-modal/weapon-selector-modal";
import { WeaponInfoLayout } from "@dh_sheets/app/components/weapons-block/weapon-info";
import {
    addInventoryWeapon,
    setInventoryWeaponAt,
} from "@dh_sheets/app/redux/character-data-store/actions";
import { getEquipmentData } from "@dh_sheets/app/redux/character-data-store/selector";
import { useAppDispatch } from "@dh_sheets/app/redux/hooks";
import { WeaponData } from "@dh_sheets/app/types";

import weaponStyles from "../weapons-block/weapons-block.module.css";
import { ModalTrigger } from "@dh_sheets/app/components/parts/modal/modal-trigger";

export const InventoryBlock = () => {
    const modalTriggerRef = useRef<any>(null);
    
    const dispatch = useAppDispatch();

    const onOpenDialog = useCallback(
        (index: number) => modalTriggerRef.current?.openModalId(index),
        [modalTriggerRef],
    );

    const onWeaponSelect = useCallback(
        (id: string, weapon?: WeaponData) => {
            if (id === '-1' && weapon) {
                dispatch(addInventoryWeapon(weapon));
            } else {
                dispatch(setInventoryWeaponAt({ weapon, index: Number(id) }));
            }
        },
        [dispatch],
    );

    const onWeaponClear = useCallback(
        (index: number) => {
            dispatch(setInventoryWeaponAt({ index }));
        },
        [dispatch],
    );

    const equipmentData = useSelector(getEquipmentData);

    const renderModal = useCallback(
        (onSelect: (...props: any) => void, onClose: () => void, modalId: string, key: string) => {
            return (
                <WeaponSelectorModal
                    key={key}
                    id={modalId}
                    onSelect={onSelect}
                    onClose={onClose}
                />
            );
        },
        [],
    );

    return (
        <FramedBlock>
            <BlockTitle title="Inventory" />
            <div className={weaponStyles.weaponInfoCategory}>Items</div>
            {equipmentData.inventoryItems.map((item) => (
                <div key={`equipment-${item}`}>{item}</div>
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

            <ModalTrigger ref={modalTriggerRef}
                renderModal={renderModal}
                keyPrefix="inventory-weapon-select-modal"
                onSelect={onWeaponSelect}/>
        </FramedBlock>
    );
};
