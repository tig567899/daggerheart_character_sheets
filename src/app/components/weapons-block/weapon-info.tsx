import { ReactElement, useMemo } from "react";

import { ActionButton } from "@dh_sheets/app/components/parts/action-button/action-button";
import { LabeledDisplayBox } from "@dh_sheets/app/components/parts/labeled-display-box/labeled-display-box";
import { WeaponBurden } from "@dh_sheets/app/constants";
import { WeaponData } from "@dh_sheets/app/types";

import { ClearIcon } from "@icons/clear-icon";
import { LeftHandIcon } from "@icons/left-hand-icon";
import { RightHandIcon } from "@icons/right-hand-icon";

import styles from "./weapons-block.module.css";
import { EquipIcon } from "@icons/equip-icon";

export interface WeaponProps {
    categoryName: string; // Primary, Secondary, Inventory, etc.
    weapon: WeaponData;
    changeButton: ReactElement;
    onRemove: () => void;
    onEquip?: () => void;
}

export const WeaponInfoLayout = ({
    categoryName,
    weapon,
    changeButton,
    onRemove,
    onEquip,
}: WeaponProps) => {
    const modifierText = weapon.modifier ? `+${weapon.modifier}` : "";
    const clearIcon = useMemo(() => <ClearIcon />, []);
    const leftHandIcon = useMemo(() => <LeftHandIcon />, []);
    const rightHandIcon = useMemo(() => <RightHandIcon />, []);
    const equipIcon = useMemo(() => <EquipIcon />, []);

    let handednessText = "One-handed, primary";
    if (weapon.burden === WeaponBurden.TWO_HANDED) {
        handednessText = "Two-handed";
    } else if (weapon.isSecondary) {
        handednessText = "Off-hand, secondary";
    }

    return (
        <div className={styles.weaponInfoLayout}>
            <div className={styles.weaponInfoCategory}>
                <div className={styles.categoryHeading}>
                    {categoryName}
                    <div
                        className={styles.weaponHandDiagram}
                        aria-label={handednessText}
                    >
                        {!weapon.isSecondary && leftHandIcon}
                        {(weapon.burden === WeaponBurden.TWO_HANDED ||
                            weapon.isSecondary) &&
                            rightHandIcon}
                    </div>
                </div>
                <div className={styles.weaponChangeButtons}>
                    {onEquip ? (
                        <ActionButton
                            onClick={onEquip}
                            icon={equipIcon}
                            label={"Clear"}
                            className={styles.changeWeapon}
                            isIconButton
                        />
                    ) : null}
                    <ActionButton
                        onClick={onRemove}
                        icon={clearIcon}
                        label={"Clear"}
                        className={styles.changeWeapon}
                        isIconButton
                    />
                    <div className={styles.changeWeapon}>{changeButton}</div>
                </div>
            </div>
            <div className={styles.weaponInfoDisplay}>
                <LabeledDisplayBox label="Name" contents={weapon.name} />
                <div className={styles.divider}></div>
                <LabeledDisplayBox label="Trait" contents={weapon.trait} />
                <div className={styles.divider}></div>

                <LabeledDisplayBox label="Range" contents={weapon.range} />
                <div className={styles.divider}></div>

                <LabeledDisplayBox
                    label="Damage"
                    contents={`${weapon.dice}${modifierText} ${weapon.damageType}`}
                />
            </div>
            {weapon.features.length ? (
                <div className={styles.featureBox}>
                    Additional Features:
                    {weapon.features.map((feature, index) => {
                        return (
                            <div
                                key={`${weapon.name}-display-feature-${index}`}
                                className={styles.weaponFeature}
                            >
                                <b>{feature.name}</b>: {feature.description}
                            </div>
                        );
                    })}
                </div>
            ) : null}
        </div>
    );
};
