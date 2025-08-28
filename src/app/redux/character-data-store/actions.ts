import { CharClass, Stat } from "@dh_sheets/app/types";
import { createAction } from "@reduxjs/toolkit";

export const setCharacterName = createAction<string>('Set character name');
export const setCharacterPronouns = createAction<string>('Set character pronouns');
export const setCharacterClass = createAction<CharClass>('Set character class');
export const setCurrentHp = createAction<number>('Set current HP');
export const setCurrentStress = createAction<number>('Set current stress');

// Adjust stats
export const setStatValue = createAction<Stat>('Set stat');