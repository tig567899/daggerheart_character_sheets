import { createAction } from "@reduxjs/toolkit";

import { CharClass, ModifierField, ModifierKey } from "@dh_sheets/app/constants";
import { CharacterDataState } from "@dh_sheets/app/redux/character-data-store/types";
import { ArmorData, WeaponData } from "@dh_sheets/app/types";

// Fixed Stats
export const setCharacterName = createAction<string>("Set character name");
export const setCharacterPronouns = createAction<string>(
    "Set character pronouns",
);
export const setCharacterClass = createAction<CharClass>("Set character class");

// Set experiences
export const setExperience = createAction<{
    experience: string;
    index: number;
}>("Set experience at a particular index");
export const addExperience = createAction<string>("Add new experience");

// Ephemeral stats to change within a session
export const setHope = createAction<number>("Set hope at number");
export const setCurrentHp = createAction<number>("Set current HP");
export const setCurrentStress = createAction<number>("Set current stress");

// Weapons and Armor
export const setPrimaryWeapon = createAction<WeaponData | undefined>(
    "Set primary weapon",
);
export const setSecondaryWeapon = createAction<WeaponData | undefined>(
    "Set secondary weapons",
);
export const setActiveArmor = createAction<ArmorData | undefined>("Set armor");
export const setInventoryWeaponAt = createAction<{
    weapon?: WeaponData;
    index: number;
}>("Set inventory weapon at index");
export const addInventoryWeapon = createAction<WeaponData>(
    "Add new inventory weapon",
);
export const setInventoryItemAt = createAction<{ item: string; index: number }>(
    "Set inventory item at index",
);
export const addInventoryItem = createAction<string>("Add inventory item");

export const setModifierForField = createAction<{
    modifierKey: ModifierKey;
    modifier: number | ModifierField;
    modifierField: ModifierField;
    metadata?: any;
}>("Set modifier for specific key");

export const removeModifier = createAction<ModifierKey>('Remove modifier for key');

export const setAncestry = createAction<string | undefined>('Set ancestry');

export const setCommunity = createAction<string>('Set community');

export const loadDataFromCookies = createAction<CharacterDataState>(
    "Load data from cookies",
);
