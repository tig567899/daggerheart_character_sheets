import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";

import { BlockTitle } from "@dh_sheets/app/components/parts/framed-block/block-title";
import { FramedBlock } from "@dh_sheets/app/components/parts/framed-block/framed-block";
import { ModalTrigger } from "@dh_sheets/app/components/parts/modal/modal-trigger";
import { CircleFillable } from "@dh_sheets/app/components/weapons-block/circle-fillable";
import { WeaponSelectorModal } from "@dh_sheets/app/components/weapons-block/selector-modal/weapon-selector-modal";
import { WeaponInfoLayout } from "@dh_sheets/app/components/weapons-block/weapon-info";
import { CharClass, WeaponBurden } from "@dh_sheets/app/constants";
import {
    getClassData,
    getEquipmentData,
} from "@dh_sheets/app/redux/character-data-store/selector";
import { equipWeapon } from "@dh_sheets/app/redux/character-data-store/thunks/equip-weapon";
import { unequipWeapon } from "@dh_sheets/app/redux/character-data-store/thunks/unequip-weapon";
import { useAppDispatch } from "@dh_sheets/app/redux/hooks";
import { WeaponData } from "@dh_sheets/app/types";
import { getBaseProficiencyByLevel } from "@dh_sheets/app/util";

import { EditIcon } from "@icons/edit-icon";
import { PlusIcon } from "@icons/plus-icon";

import styles from "./weapons-block.module.css";

const MAX_PROFICIENCY = 6;
export enum WeaponSlot {
    PRIMARY = "Primary",
    SECONDARY = "Secondary",
    BOTH = "Both",
}

export const WeaponsBlock = () => {
    const classData = useSelector(getClassData);
    const { primaryWeapon, secondaryWeapon } = useSelector(getEquipmentData);
    const dispatch = useAppDispatch();

    const resourceInputArray = [];

    const onWeaponSelect = useCallback(
        (id: string, newWeapon: WeaponData) => {
            dispatch(equipWeapon({ newWeapon }));
        },
        [dispatch],
    );

    const onRemovePrimaryWeapon = useCallback(
        (returnToInventory?: boolean) => {
            if (primaryWeapon)
                dispatch(
                    unequipWeapon({ weapon: primaryWeapon, returnToInventory }),
                );
        },
        [dispatch, primaryWeapon],
    );

    const onRemoveSecondaryWeapon = useCallback(
        (returnToInventory?: boolean) => {
            if (secondaryWeapon)
                dispatch(
                    unequipWeapon({
                        weapon: secondaryWeapon,
                        returnToInventory,
                    }),
                );
        },
        [dispatch, secondaryWeapon],
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

    const plusIcon = useMemo(() => <PlusIcon />, []);
    const editIcon = useMemo(() => <EditIcon />, []);

    const renderWeaponModalTrigger = useCallback(
        ({
            label,
            style,
            keyPrefix,
            onSelect,
            modalDataKey,
            isEdit,
        }: {
            label: string;
            style: string;
            keyPrefix: string;
            onSelect: (id: string, data: WeaponData) => void;
            modalDataKey: WeaponSlot;
            isEdit?: boolean;
        }) => (
            <ModalTrigger
                renderModal={renderModal}
                onSelect={onSelect}
                keyPrefix={keyPrefix}
                modalDataKey={modalDataKey}
                className={style}
                label={label}
                icon={isEdit ? editIcon : plusIcon}
                isIconButton={isEdit}
                bordered={!isEdit}
            />
        ),
        [renderModal, editIcon, plusIcon],
    );

    const proficiency = getBaseProficiencyByLevel(classData.level);
    for (let i = 0; i < MAX_PROFICIENCY; ++i) {
        resourceInputArray.push(
            <CircleFillable circleKey={i} filled={i < proficiency} />,
        );
    }

    return (
        <FramedBlock>
            <BlockTitle title="Active Weapons" />
            <div className={styles.circleContainer}>
                Proficiency {...resourceInputArray}
            </div>
            {primaryWeapon ? (
                <WeaponInfoLayout
                    categoryName="Primary"
                    weapon={primaryWeapon}
                    changeButton={renderWeaponModalTrigger({
                        label: "Change",
                        style: "",
                        keyPrefix: "primary-weapon-select-modal",
                        onSelect: onWeaponSelect,
                        modalDataKey: WeaponSlot.PRIMARY,
                        isEdit: true,
                    })}
                    onRemove={onRemovePrimaryWeapon}
                    useUnequip
                />
            ) : (
                renderWeaponModalTrigger({
                    label: "Set primary weapon",
                    style: styles.addWeaponButton,
                    keyPrefix: "primary-weapon-select-modal",
                    onSelect: onWeaponSelect,
                    modalDataKey: WeaponSlot.PRIMARY,
                })
            )}
            {secondaryWeapon ? (
                <WeaponInfoLayout
                    categoryName="Secondary"
                    weapon={secondaryWeapon}
                    changeButton={renderWeaponModalTrigger({
                        label: "Change",
                        style: "",
                        keyPrefix: "secondary-weapon-select-modal",
                        onSelect: onWeaponSelect,
                        modalDataKey: WeaponSlot.SECONDARY,
                        isEdit: true,
                    })}
                    onRemove={onRemoveSecondaryWeapon}
                    useUnequip
                />
            ) : primaryWeapon?.burden === WeaponBurden.TWO_HANDED &&
              // Warriors ignore burden when selecting weapons
              !classData.charClass.some(
                  (charClass) => charClass === CharClass.WARRIOR,
              ) ? null : (
                renderWeaponModalTrigger({
                    label: "Set secondary weapon",
                    style: styles.addWeaponButton,
                    keyPrefix: "secondary-weapon-select-modal",
                    onSelect: onWeaponSelect,
                    modalDataKey: WeaponSlot.SECONDARY,
                })
            )}
        </FramedBlock>
    );
};
