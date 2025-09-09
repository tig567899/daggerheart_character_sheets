import { createSelector } from "@reduxjs/toolkit";

import { ModifierField } from "@dh_sheets/app/constants";
import { CharacterDataState } from "@dh_sheets/app/redux/character-data-store/types";
import { Modifier } from "@dh_sheets/app/types";
import {
    getBaseProficiencyByLevel,
} from "@dh_sheets/app/util";

export const getCharacterData = (store: {
    characterData: CharacterDataState;
}): CharacterDataState => store.characterData;

export const getHeaderData = (store: { characterData: CharacterDataState }) =>
    store.characterData.headerData;

export const getClassData = (store: { characterData: CharacterDataState }) =>
    store.characterData.classData;

export const getEquipmentData = (store: {
    characterData: CharacterDataState;
}) => store.characterData.equipment;

export const getCharacterStateData = (store: {
    characterData: CharacterDataState;
}) => store.characterData.characterStateData;

export const getExperiences = (store: {
    characterData: CharacterDataState;
}): string[] => store.characterData.experiences;

export const getGoldHandfuls = (store: {
    characterData: CharacterDataState;
}): number => store.characterData.characterStateData.goldHandfuls;

export const getGoldBags = (store: {
    characterData: CharacterDataState;
}): number => store.characterData.characterStateData.goldBags;

export const getGoldChests = (store: {
    characterData: CharacterDataState;
}): number => store.characterData.characterStateData.goldChests;

const getModifiers = (store: { characterData: CharacterDataState }) =>
    store.characterData.modifiers;

export const getModifierByField = createSelector(
    [
        getModifiers,
        getClassData,
        (_store: { characterData: CharacterDataState }, field: ModifierField) =>
            field,
    ],
    (
        modifiers: Record<string, Modifier>,
        { level },
        field: ModifierField,
    ): number => {
        const getModifier = (localField: ModifierField): number => {
            return Object.values(modifiers).reduce((acc, modifier) => {
                if (modifier.field === localField) {
                    if (typeof modifier.bonus === "number") {
                        return acc + modifier.bonus;
                    }

                    if (modifier.bonus === ModifierField.PROFICIENCY) {
                        return acc + getBaseProficiencyByLevel(level) + getModifier(modifier.bonus)
                    }

                    // This should be a one-layer deep loop, but if we run into an infinite, we'll deal with it.
                    return acc + getModifier(modifier.bonus);
                }
                return acc;
            }, 0);
        };

        if (field === ModifierField.MAJOR_THRESHOLD) {
            console.log('here');
        }

        return getModifier(field);
    },
);

export const getModifierByIds = createSelector(
    [
        getModifiers,
        (_store: { characterData: CharacterDataState }, ids: string[]) => ids,
    ],
    (modifiers: Record<string, Modifier>, ids: string[]) => {
        const toReturn = new Map<string, Modifier>();

        ids.forEach((id) => {
            toReturn.set(id, modifiers[id]);
        });
        return toReturn;
    },
);

export const getPrimaryAncestry = (store: {
    characterData: CharacterDataState;
}): string | undefined => store.characterData.ancestry;

export const getCommunity = (store: {
    characterData: CharacterDataState;
}): string | undefined => store.characterData.community;
