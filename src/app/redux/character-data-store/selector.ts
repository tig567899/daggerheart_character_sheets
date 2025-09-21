import { createSelector } from "@reduxjs/toolkit";

import {
    LevelUpKey,
    ModifierField,
    ModifierKey,
} from "@dh_sheets/app/constants";
import { CharacterDataState } from "@dh_sheets/app/redux/character-data-store/types";
import { Experiences, LevelUpChoice, Modifier } from "@dh_sheets/app/types";
import { getBaseProficiencyByLevel } from "@dh_sheets/app/util";

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
}): Experiences => store.characterData.experiences;

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
        (_store, field: ModifierField) => field,
        (_store, field, modsToExclude?: ModifierKey[]) => modsToExclude,
    ],
    (
        modifiers: Record<string, Modifier>,
        { level },
        field: ModifierField,
        modsToExclude?: ModifierKey[],
    ): number => {
        const keyValueArray = Object.keys(modifiers)
            .filter((key) => {
                if (!modsToExclude) return true;
                return modsToExclude.some((mod) => mod === key);
            })
            .map((key) => modifiers[key]);
        const getModifier = (localField: ModifierField): number => {
            return keyValueArray.reduce((acc, modifier) => {
                if (modifier.field === localField) {
                    if (typeof modifier.bonus === "number") {
                        return acc + modifier.bonus;
                    }

                    if (modifier.bonus === ModifierField.PROFICIENCY) {
                        return (
                            acc +
                            getBaseProficiencyByLevel(level) +
                            getModifier(modifier.bonus)
                        );
                    }

                    // This should be a one-layer deep loop, but if we run into an infinite, we'll deal with it.
                    return acc + getModifier(modifier.bonus);
                }
                return acc;
            }, 0);
        };
        return getModifier(field);
    },
);

export const getModifierById = createSelector(
    [
        getModifiers,
        (_store: { characterData: CharacterDataState }, id: string) => id,
    ],
    (modifiers: Record<string, Modifier>, id: string) => {
        return modifiers[id];
    },
);

export const getPrimaryAncestry = (store: {
    characterData: CharacterDataState;
}): string | undefined => store.characterData.ancestry;

export const getCommunity = (store: {
    characterData: CharacterDataState;
}): string | undefined => store.characterData.community;

export const getSubclassIndex = (store: {
    characterData: CharacterDataState;
}): number | undefined => store.characterData.classData.subclass;

const getLevelUpChoices = (store: {
    characterData: CharacterDataState;
}): LevelUpChoice[] => store.characterData.levelUpChoices.flat();

export const getLevelUpChoicesByTier = createSelector(
    [
        getLevelUpChoices,
        (
            _store: { characterData: CharacterDataState },
            filters?: Set<LevelUpKey>,
        ) => filters,
    ],
    (levelUpOptions: LevelUpChoice[], filters?: Set<LevelUpKey>) => {
        return levelUpOptions.filter(
            (option) => filters?.has(option.levelUpKey) ?? true,
        );
    },
);

export const getDisabledLevelUpKeys = createSelector(
    [getLevelUpChoices],
    (levelUpOptions: LevelUpChoice[]): LevelUpKey[] => {
        return levelUpOptions
            .flatMap((option) => option.disables)
            .filter((key) => key !== undefined);
    },
);
