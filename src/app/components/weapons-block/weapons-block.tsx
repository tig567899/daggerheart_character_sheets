import { useCallback } from "react";
import { useSelector } from "react-redux";

import { BlockTitle } from "@dh_sheets/app/components/parts/framed-block/block-title";
import { FramedBlock } from "@dh_sheets/app/components/parts/framed-block/framed-block";
import { ModalTrigger } from "@dh_sheets/app/components/parts/modal/modal-trigger";
import { CircleFillable } from "@dh_sheets/app/components/weapons-block/circle-fillable";
import { WeaponSelectorModal } from "@dh_sheets/app/components/weapons-block/selector-modal/weapon-selector-modal";
import { WeaponInfoLayout } from "@dh_sheets/app/components/weapons-block/weapon-info";
import { CharClass, WeaponBurden } from "@dh_sheets/app/constants";
import {
    removeModifier,
    setModifierForField,
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

import styles from "./weapons-block.module.css";

const MAX_PROFICIENCY = 6;
export enum WeaponSlot {
    PRIMARY = "Primary",
    SECONDARY = "Secondary",
}

export const WeaponsBlock = () => {
    const classData = useSelector(getClassData);
    const { primaryWeapon, secondaryWeapon } = useSelector(getEquipmentData);
    const dispatch = useAppDispatch();

    const resourceInputArray = [];

    const removeWeaponFeatures = useCallback(
        (weapon: WeaponData) => {
            weapon.features.forEach((feature) =>
                feature.modifiers?.forEach((modifier) => {
                    dispatch(removeModifier(modifier.modifierKey));
                }),
            );
        },
        [dispatch],
    );

    const addWeaponFeatures = useCallback(
        (weapon: WeaponData) => {
            weapon.features.forEach((feature) =>
                feature.modifiers?.forEach((modifier) => {
                    dispatch(
                        setModifierForField({
                            modifierKey: modifier.modifierKey,
                            modifier: modifier.bonus,
                            modifierField: modifier.field,
                        }),
                    );
                }),
            );
        },
        [dispatch],
    );

    const onWeaponSelect = useCallback(
        (id: string, weapon: WeaponData) => {
            switch (id) {
                case WeaponSlot.PRIMARY:
                    if (primaryWeapon) removeWeaponFeatures(primaryWeapon);
                    addWeaponFeatures(weapon);
                    dispatch(setPrimaryWeapon(weapon));
                    break;
                case WeaponSlot.SECONDARY:
                    dispatch(setSecondaryWeapon(weapon));
                    break;
            }
        },
        [
            dispatch,
            primaryWeapon,
            addWeaponFeatures,
            removeWeaponFeatures,
        ],
    );

    const onRemovePrimaryWeapon = useCallback(() => {
        if (primaryWeapon) removeWeaponFeatures(primaryWeapon);

        dispatch(setPrimaryWeapon());
    }, [dispatch, primaryWeapon, removeWeaponFeatures]);

    const onRemoveSecondaryWeapon = useCallback(() => {
        dispatch(setSecondaryWeapon());
    }, [dispatch]);

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

    const renderWeaponModalTrigger = useCallback(
        ({
            label,
            style,
            keyPrefix,
            onSelect,
            modalDataKey,
        }: {
            label: string;
            style: string;
            keyPrefix: string;
            onSelect: (id: string, data: WeaponData) => void;
            modalDataKey: WeaponSlot;
        }) => (
            <ModalTrigger
                renderModal={renderModal}
                onSelect={onSelect}
                keyPrefix={keyPrefix}
                buttonStyle={style}
                buttonLabel={label}
                modalDataKey={modalDataKey}
            />
        ),
        [renderModal],
    );

    const proficiency = getBaseProficiencyByLevel(classData.level);
    for (let i = 0; i < MAX_PROFICIENCY; ++i) {
        resourceInputArray.push(
            <CircleFillable circleKey={i} filled={i < proficiency} />,
        );
    }

    // TODO: Add Hand Diagram
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
                    })}
                    onRemove={onRemovePrimaryWeapon}
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
                    })}
                    onRemove={onRemoveSecondaryWeapon}
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
