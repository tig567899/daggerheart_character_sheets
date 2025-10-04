import { ThunkAction, UnknownAction } from "@reduxjs/toolkit";

import {
    addInventoryWeapon,
    removeModifier,
    setPrimaryWeapon,
    setSecondaryWeapon,
} from "@dh_sheets/app/redux/character-data-store/actions";
import { disableSave, enableSave } from "@dh_sheets/app/redux/middleware";
import { AppDispatch, RootState } from "@dh_sheets/app/redux/store";
import { WeaponData } from "@dh_sheets/app/types";


export const unequipWeapon =
    ({
        weapon,
        returnToInventory,
    }: {
        weapon: WeaponData;
        returnToInventory?: boolean;
    }): ThunkAction<void, RootState, undefined, UnknownAction> =>
    (dispatch: AppDispatch) => {
        disableSave();

        weapon.features.forEach((ability) =>
            ability.modifiers?.forEach((modifier) => {
                dispatch(removeModifier(modifier.modifierKey));
            }),
        );

        if (returnToInventory) {
            dispatch(addInventoryWeapon(weapon));
        }

        enableSave();

        if (weapon.isSecondary) {
            dispatch(setSecondaryWeapon());
        } else {
            dispatch(setPrimaryWeapon());
        }
    };
