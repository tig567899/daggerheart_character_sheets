import { ThunkAction, UnknownAction } from "@reduxjs/toolkit";

import {
    pruneLevelChoicesToLevel,
    removeModifier,
    setLevel,
} from "@dh_sheets/app/redux/character-data-store/actions";
import { AppDispatch, RootState } from "@dh_sheets/app/redux/store";

export const levelDownThunk =
    (): ThunkAction<void, RootState, undefined, UnknownAction> =>
    (dispatch: AppDispatch, getState: () => RootState) => {
        const state = getState().characterData;

        const currentLevel = state.classData.level;

        // This should be true

        if (state.levelUpChoices.length === currentLevel - 1) {
            const lastOptions = state.levelUpChoices[currentLevel - 2];
            lastOptions.forEach((option) => {
                option.modifiers?.forEach((modifier) => {
                    dispatch(removeModifier(modifier.modifierKey));
                });
            });
        }

        dispatch(pruneLevelChoicesToLevel(currentLevel - 1));

        dispatch(setLevel(currentLevel - 1));
    };
