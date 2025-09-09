import { ReactElement, useCallback, useRef, useState } from "react";
import { useSelector } from "react-redux";

import { BlockTitle } from "@dh_sheets/app/components/block-title";
import { ModalTrigger } from "@dh_sheets/app/components/modal-trigger";
import { CircleFillable } from "@dh_sheets/app/components/weapons-block/circle-fillable";
import { WeaponSelectorModal } from "@dh_sheets/app/components/weapons-block/selector-modal/weapon-selector-modal";
import { WeaponInfoLayout } from "@dh_sheets/app/components/weapons-block/weapon-info";
import { CharClass, WeaponBurden } from "@dh_sheets/app/constants";
import {
    setPrimaryWeapon,
    setSecondaryWeapon,
} from "@dh_sheets/app/redux/character-data-store/actions";
import {
    getClassData,
    getEquipmentData,
} from "@dh_sheets/app/redux/character-data-store/selector";
import { useAppDispatch } from "@dh_sheets/app/redux/hooks";
import { WeaponData } from "@dh_sheets/app/types";
import { getBaseProficiencyByLevel } from "@dh_sheets/app/util";

import parentStyles from "../framed-block.module.css";
import styles from "./weapons-block.module.css";

const MAX_PROFICIENCY = 6;
export enum WeaponSlot {
    PRIMARY = "Primary",
    SECONDARY = "Secondary",
}

export const WeaponsBlock = () => {
    const modalTriggerRef = useRef<any>(null);
    const classData = useSelector(getClassData);
    const { primaryWeapon, secondaryWeapon } = useSelector(getEquipmentData);
    const dispatch = useAppDispatch();

    const resourceInputArray = [];

    const onPrimaryWeaponSelectDialogOpen = useCallback(
        () => modalTriggerRef.current?.openModalId(WeaponSlot.PRIMARY),
        [modalTriggerRef],
    );
    const onSecondaryWeaponSelectDialogOpen = useCallback(
        () => modalTriggerRef.current?.openModalId(WeaponSlot.SECONDARY),
        [modalTriggerRef],
    );

    const onWeaponSelect = useCallback(
        ( id: string, weapon?: WeaponData) => {
            switch (id) {
                case WeaponSlot.PRIMARY:
                    dispatch(setPrimaryWeapon(weapon));
                    break;
                case WeaponSlot.SECONDARY:
                    dispatch(setSecondaryWeapon(weapon));
                    break;
            }
        },
        [dispatch],
    );

    const onRemovePrimaryWeapon = useCallback(() => {
        dispatch(setPrimaryWeapon());
    }, [dispatch]);

    const onRemoveSecondaryWeapon = useCallback(() => {
        dispatch(setSecondaryWeapon());
    }, [dispatch]);

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

    const proficiency = getBaseProficiencyByLevel(classData.level);
    for (let i = 0; i < MAX_PROFICIENCY; ++i) {
        resourceInputArray.push(
            <CircleFillable circleKey={i} filled={i < proficiency} />,
        );
    }

    // TODO: Add Hand Diagram
    return (
        <div className={parentStyles.framedBlock}>
            <BlockTitle title="Active Weapons" />
            <div className={styles.circleContainer}>
                Proficiency {...resourceInputArray}
            </div>
            {primaryWeapon ? (
                <WeaponInfoLayout
                    categoryName="Primary"
                    weapon={primaryWeapon}
                    onEdit={onPrimaryWeaponSelectDialogOpen}
                    onRemove={onRemovePrimaryWeapon}
                />
            ) : (
                <button
                    onClick={onPrimaryWeaponSelectDialogOpen}
                    className={styles.addWeaponButton}
                >
                    Set primary weapon
                </button>
            )}
            {secondaryWeapon ? (
                <WeaponInfoLayout
                    categoryName="Secondary"
                    weapon={secondaryWeapon}
                    onEdit={onSecondaryWeaponSelectDialogOpen}
                    onRemove={onRemoveSecondaryWeapon}
                />
            ) : primaryWeapon?.burden === WeaponBurden.TWO_HANDED &&
              // Warriors ignore burden when selecting weapons
              !classData.charClass.some(
                  (charClass) => charClass === CharClass.WARRIOR,
              ) ? null : (
                <button
                    onClick={onSecondaryWeaponSelectDialogOpen}
                    className={styles.addWeaponButton}
                >
                    Set secondary weapon
                </button>
            )}
            <ModalTrigger
                ref={modalTriggerRef}
                renderModal={renderModal}
                keyPrefix="weapon-select-modal"
                onSelect={onWeaponSelect}
            />
        </div>
    );
};
