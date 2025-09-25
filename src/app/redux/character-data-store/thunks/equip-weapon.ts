import { ThunkAction, UnknownAction } from "@reduxjs/toolkit";

import { WeaponBurden } from "@dh_sheets/app/constants";
import {
    addInventoryWeapon,
    removeModifier,
    setInventoryWeaponAt,
    setModifierForField,
    setPrimaryWeapon,
    setSecondaryWeapon,
} from "@dh_sheets/app/redux/character-data-store/actions";
import { disableSave, enableSave } from "@dh_sheets/app/redux/middleware";
import { AppDispatch, RootState } from "@dh_sheets/app/redux/store";
import { WeaponData } from "@dh_sheets/app/types";

export const equipWeapon =
    ({
        newWeapon,
        inventoryIndex,
    }: {
        newWeapon: WeaponData;
        inventoryIndex?: number;
    }): ThunkAction<void, RootState, undefined, UnknownAction> =>
    (dispatch: AppDispatch, getState: () => RootState) => {
        const state = getState().characterData;

        disableSave();

        const oldWeapon = state.equipment.primaryWeapon;
        const oldSecondaryWeapon = state.equipment.secondaryWeapon;

        if (
            (oldWeapon?.burden === WeaponBurden.ONE_HANDED &&
                !newWeapon.isSecondary) ||
            oldWeapon?.burden === WeaponBurden.TWO_HANDED
        ) {
            oldWeapon.features.forEach((ability) =>
                ability.modifiers?.forEach((modifier) => {
                    dispatch(removeModifier(modifier.modifierKey));
                }),
            );
            if (newWeapon.isSecondary || inventoryIndex !== undefined) {
                dispatch(addInventoryWeapon(oldWeapon));
            }
            dispatch(setPrimaryWeapon());
        }

        if (
            oldSecondaryWeapon &&
            (newWeapon.burden === WeaponBurden.TWO_HANDED ||
                newWeapon.isSecondary)
        ) {
            oldSecondaryWeapon.features.forEach((ability) =>
                ability.modifiers?.forEach((modifier) => {
                    dispatch(removeModifier(modifier.modifierKey));
                }),
            );
            if (!newWeapon.isSecondary || inventoryIndex !== undefined) {
                dispatch(addInventoryWeapon(oldSecondaryWeapon));
            }
            dispatch(setSecondaryWeapon());
        }

        newWeapon.features.forEach((abilities) => {
            abilities.modifiers?.forEach((modifier) =>
                dispatch(
                    setModifierForField({
                        modifierKey: modifier.modifierKey,
                        modifier: modifier.bonus,
                        modifierField: modifier.field,
                    }),
                ),
            );
        });

        if (inventoryIndex !== undefined) {
            dispatch(setInventoryWeaponAt({ index: inventoryIndex }));
        }

        enableSave();

        if (newWeapon.isSecondary) {
            dispatch(setSecondaryWeapon(newWeapon));
        } else {
            dispatch(setPrimaryWeapon(newWeapon));
        }
    };
