import { ReactElement, useCallback, useMemo } from "react";
import { useSelector } from "react-redux";

import { ItemModal } from "@dh_sheets/app/components/inventory-block/selector-modal/item-modal";
import { ActionButton } from "@dh_sheets/app/components/parts/action-button/action-button";
import { BlockTitle } from "@dh_sheets/app/components/parts/framed-block/block-title";
import { FramedBlock } from "@dh_sheets/app/components/parts/framed-block/framed-block";
import { ModalTrigger } from "@dh_sheets/app/components/parts/modal/modal-trigger";
import { WeaponSelectorModal } from "@dh_sheets/app/components/weapons-block/selector-modal/weapon-selector-modal";
import { WeaponInfoLayout } from "@dh_sheets/app/components/weapons-block/weapon-info";
import { WeaponSlot } from "@dh_sheets/app/components/weapons-block/weapons-block";
import {
    addInventoryItem,
    addInventoryWeapon,
    setInventoryItemAt,
    setInventoryWeaponAt,
} from "@dh_sheets/app/redux/character-data-store/actions";
import { getEquipmentData } from "@dh_sheets/app/redux/character-data-store/selector";
import { equipWeapon } from "@dh_sheets/app/redux/character-data-store/thunks/equip-weapon";
import { useAppDispatch } from "@dh_sheets/app/redux/hooks";
import { ItemData, WeaponData } from "@dh_sheets/app/types";

import { ClearIcon } from "@icons/clear-icon";
import { EditIcon } from "@icons/edit-icon";
import { PlusIcon } from "@icons/plus-icon";

import weaponStyles from "../weapons-block/weapons-block.module.css";
import itemStyles from "./inventory.module.css";

export const InventoryBlock = () => {
    const dispatch = useAppDispatch();

    const onWeaponSelect = useCallback(
        (id: string, weapon?: WeaponData) => {
            if (id === "-1" && weapon) {
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

    const onItemSelect = useCallback(
        (id: string, item?: ItemData) => {
            if (id === "-1" && item) {
                dispatch(addInventoryItem(item));
            } else {
                dispatch(setInventoryItemAt({ item, index: Number(id) }));
            }
        },
        [dispatch],
    );

    const onItemClear = useCallback(
        (index: number) => {
            dispatch(setInventoryWeaponAt({ index }));
        },
        [dispatch],
    );

    const { inventoryWeapons, inventoryItems } = useSelector(getEquipmentData);

    const onEquip = useCallback(
        (index: number) => {
            dispatch(
                equipWeapon({
                    newWeapon: inventoryWeapons[index],
                    inventoryIndex: index,
                }),
            );
        },
        [dispatch, inventoryWeapons],
    );

    const renderModal = useCallback(
        (
            onSelect: (...props: any) => void,
            onClose: () => void,
            modalId: string,
            key: string,
        ) => {
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

    const renderItemModal = useCallback(
        (
            onSelect: (...props: any) => void,
            onClose: () => void,
            modalId: string,
            key: string,
        ) => {
            const index = Number(modalId);

            const existingData = inventoryItems[index] ?? null;
            return (
                <ItemModal
                    key={key}
                    id={modalId}
                    onSelect={onSelect}
                    onClose={onClose}
                    existingData={existingData}
                />
            );
        },
        [inventoryItems],
    );

    const plusIcon = useMemo(() => <PlusIcon />, []);
    const editIcon = useMemo(() => <EditIcon />, []);
    const clearIcon = useMemo(() => <ClearIcon />, []);

    const renderModalTrigger = useCallback(
        ({
            label,
            style,
            keyPrefix,
            onSelect,
            index,
            renderFunction,
            isEdit,
            isWeaponModal,
        }: {
            label: string;
            style: string;
            keyPrefix: string;
            onSelect: (id: string, data: WeaponData) => void;
            index: number;
            renderFunction: (...props: any) => ReactElement;
            isEdit?: boolean;
            isWeaponModal?: boolean;
        }) => (
            <ModalTrigger
                renderModal={renderFunction}
                onSelect={onSelect}
                keyPrefix={keyPrefix}
                className={style}
                label={label}
                icon={isEdit ? editIcon : plusIcon}
                isIconButton={isEdit}
                bordered={!isEdit}
                modalDataKey={isWeaponModal ? WeaponSlot.BOTH : `${index}`}
            />
        ),
        [editIcon, plusIcon],
    );

    return (
        <FramedBlock>
            <BlockTitle title="Inventory" />
            <div className={weaponStyles.weaponInfoCategory}>Items</div>
            <div className={itemStyles.itemList}>
                {inventoryItems.map((item, index) => (
                    <div key={`equipment-${index}`}>
                        {index !== 0 ? (
                            <div className={itemStyles.horizontalDivider}></div>
                        ) : null}
                        <div className={itemStyles.itemDetailContainer}>
                            <div className={itemStyles.itemNameDescription}>
                                {item.name}
                                <div className={itemStyles.itemChangeButtons}>
                                    <ActionButton
                                        onClick={() => onItemClear(index)}
                                        icon={clearIcon}
                                        label={"Remove"}
                                        className=""
                                        isIconButton
                                    />
                                    <div className={weaponStyles.changeWeapon}>
                                        {renderModalTrigger({
                                            label: "Edit",
                                            style: "",
                                            keyPrefix: "item-select-modal",
                                            onSelect: onItemSelect,
                                            index,
                                            isEdit: true,
                                            renderFunction: renderItemModal,
                                        })}
                                    </div>
                                </div>
                            </div>
                            <i>{item.description}</i>
                        </div>
                    </div>
                ))}
            </div>
            {renderModalTrigger({
                label: "Add inventory item",
                style: weaponStyles.addWeaponButton,
                keyPrefix: "item-select-modal",
                onSelect: onItemSelect,
                index: -1,
                renderFunction: renderItemModal,
            })}

            {inventoryWeapons.map((weapon, index) => {
                return (
                    <div
                        key={`inventory-block-weapon-${index}`}
                        className={itemStyles.weaponBlock}
                    >
                        {index !== 0 ? (
                            <div
                                className={itemStyles.horizontalOneSideDivider}
                            ></div>
                        ) : null}
                        <WeaponInfoLayout
                            weapon={weapon}
                            categoryName={`Inventory ${weapon.isSecondary ? "Secondary " : ""}Weapon`}
                            changeButton={renderModalTrigger({
                                label: "Change",
                                style: "",
                                keyPrefix: "inventory-weapon-select-modal",
                                onSelect: onWeaponSelect,
                                index,
                                isEdit: true,
                                renderFunction: renderModal,
                            })}
                            onRemove={() => onWeaponClear(index)}
                            onEquip={() => onEquip(index)}
                        />
                    </div>
                );
            })}
            {renderModalTrigger({
                label: "Add inventory weapon",
                style: weaponStyles.addWeaponButton,
                keyPrefix: "inventory-weapon-select-modal",
                onSelect: onWeaponSelect,
                index: -1,
                renderFunction: renderModal,
            })}
        </FramedBlock>
    );
};
