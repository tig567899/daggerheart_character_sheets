import { ThunkAction, UnknownAction } from "@reduxjs/toolkit";

import { getSubclassesByClass } from "@dh_sheets/app/char-class-util";
import { ModifierField } from "@dh_sheets/app/constants";
import {
    removeModifier,
    setModifierForField,
    setSubclassIndex,
} from "@dh_sheets/app/redux/character-data-store/actions";
import { getModifierByField } from "@dh_sheets/app/redux/character-data-store/selector";
import { disableSave, enableSave } from "@dh_sheets/app/redux/middleware";
import { AppDispatch, RootState } from "@dh_sheets/app/redux/store";
import { SubclassData } from "@dh_sheets/app/types";

export const switchMainSubclass =
    ({
        newSubclassIndex,
        oldSubclass,
    }: {
        newSubclassIndex: number;
        oldSubclass?: SubclassData;
    }): ThunkAction<void, RootState, undefined, UnknownAction> =>
    (dispatch: AppDispatch, getState: () => RootState) => {
        const state = getState();

        disableSave();

        const subclassPoints = getModifierByField(
            state,
            ModifierField.MAIN_SUBCLASS,
        );

        if (oldSubclass) {
            [
                oldSubclass.foundationFeatures,
                oldSubclass.specializationFeatures,
                oldSubclass.masteryFeatures,
            ].forEach((abilities) => {
                abilities.forEach((ability) =>
                    ability.modifier?.forEach((modifier) => {
                        dispatch(removeModifier(modifier.modifierKey));
                    }),
                );
            });
        }

        const newSubclass = getSubclassesByClass(
            state.characterData.classData.charClass[0],
        )[newSubclassIndex];
        const abilitiesArray = [newSubclass.foundationFeatures];
        if (subclassPoints > 0) {
            abilitiesArray.push(newSubclass.specializationFeatures);
        }
        if (subclassPoints > 1) {
            abilitiesArray.push(newSubclass.masteryFeatures);
        }

        abilitiesArray.forEach((abilities) => {
            abilities.forEach((ability) =>
                ability.modifier?.forEach((modifier) => {
                    dispatch(
                        setModifierForField({
                            modifierKey: modifier.modifierKey,
                            modifier: modifier.bonus,
                            modifierField: modifier.field,
                        }),
                    );
                }),
            );
        });

        enableSave();

        dispatch(setSubclassIndex(newSubclassIndex));
    };

export const switchSecondarySubclass =
    ({
        newSubclassIndex,
        oldSubclass,
    }: {
        newSubclassIndex: number;
        oldSubclass?: SubclassData;
    }): ThunkAction<void, RootState, undefined, UnknownAction> =>
    (dispatch: AppDispatch, getState: () => RootState) => {
        const state = getState();

        disableSave();

        const subclassPoints = getModifierByField(
            state,
            ModifierField.SECONDARY_SUBCLASS,
        );

        if (oldSubclass) {
            [
                oldSubclass.foundationFeatures,
                oldSubclass.specializationFeatures,
            ].forEach((abilities) => {
                abilities.forEach((ability) =>
                    ability.modifier?.forEach((modifier) => {
                        dispatch(removeModifier(modifier.modifierKey));
                    }),
                );
            });
        }

        const newSubclass = getSubclassesByClass(
            state.characterData.classData.charClass[1],
        )[newSubclassIndex];
        const abilitiesArray = [newSubclass.foundationFeatures];
        if (subclassPoints > 0) {
            abilitiesArray.push(newSubclass.specializationFeatures);
        }

        abilitiesArray.forEach((abilities) => {
            abilities.forEach((ability) =>
                ability.modifier?.forEach((modifier) => {
                    dispatch(
                        setModifierForField({
                            modifierKey: modifier.modifierKey,
                            modifier: modifier.bonus,
                            modifierField: modifier.field,
                        }),
                    );
                }),
            );
        });

        enableSave();

        dispatch(setSubclassIndex(newSubclassIndex));
    };
