import { ThunkAction, UnknownAction } from "@reduxjs/toolkit";

import {
    addLevelUpChoices,
    setLevel,
    setModifierForField,
} from "@dh_sheets/app/redux/character-data-store/actions";
import { AppDispatch, RootState } from "@dh_sheets/app/redux/store";
import { LevelUpChoice } from "@dh_sheets/app/types";
import { disableSave, enableSave } from "@dh_sheets/app/redux/middleware";

export const levelUpThunk =
    (
        choices: LevelUpChoice[],
    ): ThunkAction<void, RootState, undefined, UnknownAction> =>
    (dispatch: AppDispatch, getState: () => RootState) => {
        const state = getState().characterData;

        disableSave();

        const currentLevel = state.classData.level;

        choices.forEach((choice) => {
            choice.modifiers?.forEach((modifier) => {
                dispatch(setModifierForField({
                    modifierKey: modifier.modifierKey,
                    modifier: modifier.bonus,
                    modifierField: modifier.field
                }));
            })
        });

        dispatch(addLevelUpChoices({ upgrades: choices }));
        enableSave();
        dispatch(setLevel(currentLevel + 1));
    };
