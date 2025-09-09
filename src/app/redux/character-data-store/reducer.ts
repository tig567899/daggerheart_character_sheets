import { createReducer } from "@reduxjs/toolkit";

import { CharClass } from "@dh_sheets/app/constants";
import {
    addExperience,
    addInventoryItem,
    addInventoryWeapon,
    loadDataFromCookies,
    removeModifier,
    setActiveArmor,
    setAncestry,
    setCharacterClass,
    setCharacterName,
    setCharacterPronouns,
    setCommunity,
    setCurrentHp,
    setCurrentStress,
    setExperience,
    setHope,
    setInventoryItemAt,
    setInventoryWeaponAt,
    setModifierForField,
    setPrimaryWeapon,
    setSecondaryWeapon,
} from "@dh_sheets/app/redux/character-data-store/actions";
import { CharacterDataState } from "@dh_sheets/app/redux/character-data-store/types";

const initialState: CharacterDataState = {
    headerData: {
        name: "",
        pronouns: "",
    },
    classData: {
        level: 1,
        charClass: [CharClass.BARD],
        subclass: "",
    },
    characterStateData: {
        hp: 0,
        stress: 0,
        stressMax: 6,
        hope: 0,
        goldHandfuls: 0,
        goldBags: 0,
        goldChests: 0,
        scars: 0,
        armorConsumed: 0,
    },
    equipment: {
        primaryWeapon: undefined,
        secondaryWeapon: undefined,
        armor: undefined,
        inventoryWeapons: [],
        inventoryItems: [],
    },
    features: [],
    experiences: ["", ""],
    modifiers: {},
};

export const characterData = createReducer(initialState, (builder) => {
    builder
        .addCase(loadDataFromCookies, (state, action) => {
            return action.payload;
        })
        .addCase(setCharacterName, (state, action) => {
            if (action.payload === state.headerData.name) {
                return state;
            }
            return {
                ...state,
                headerData: {
                    ...state.headerData,
                    name: action.payload,
                },
            };
        })
        .addCase(setCharacterPronouns, (state, action) => {
            if (action.payload === state.headerData.pronouns) {
                return state;
            }
            return {
                ...state,
                headerData: {
                    ...state.headerData,
                    pronouns: action.payload,
                },
            };
        })
        .addCase(setCharacterClass, (state, action) => {
            if (action.payload === state.classData.charClass[0]) {
                return state;
            }
            let remainingClasses: CharClass[] = [];
            if (state.classData.charClass.length > 1) {
                remainingClasses = state.classData.charClass.slice(1);
            }
            return {
                ...state,
                classData: {
                    ...state.classData,
                    charClass: [action.payload, ...remainingClasses],
                },
            };
        })
        .addCase(setCurrentHp, (state, action) => {
            if (action.payload === state.characterStateData.hp) {
                return state;
            }
            return {
                ...state,
                characterStateData: {
                    ...state.characterStateData,
                    hp: action.payload,
                },
            };
        })
        .addCase(setCurrentStress, (state, action) => {
            if (action.payload === state.characterStateData.stress) {
                return state;
            }
            return {
                ...state,
                characterStateData: {
                    ...state.characterStateData,
                    stress: action.payload,
                },
            };
        })
        .addCase(setExperience, (state, action) => {
            if (action.payload.index > state.experiences.length) {
                return;
            }

            const experiencesCopy = [
                ...state.experiences.slice(0, action.payload.index),
                action.payload.experience,
                ...state.experiences.slice(action.payload.index + 1),
            ];

            return {
                ...state,
                experiences: experiencesCopy,
            };
        })
        .addCase(addExperience, (state, action) => {
            return {
                ...state,
                experiences: [...state.experiences, action.payload],
            };
        })
        .addCase(setHope, (state, action) => {
            if (action.payload === state.characterStateData.hope) {
                return state;
            }
            return {
                ...state,
                characterStateData: {
                    ...state.characterStateData,
                    hope: action.payload,
                },
            };
        })
        .addCase(setPrimaryWeapon, (state, action) => {
            if (action.payload?.isSecondary) return state;
            return {
                ...state,
                equipment: {
                    ...state.equipment,
                    primaryWeapon: action.payload,
                },
            };
        })
        .addCase(setSecondaryWeapon, (state, action) => {
            if (action.payload?.isSecondary === false) return state;
            return {
                ...state,
                equipment: {
                    ...state.equipment,
                    secondaryWeapon: action.payload,
                },
            };
        })
        .addCase(setActiveArmor, (state, action) => {
            return {
                ...state,
                equipment: {
                    ...state.equipment,
                    armor: action.payload,
                },
            };
        })
        .addCase(setInventoryWeaponAt, (state, action) => {
            const weaponsArray = state.equipment.inventoryWeapons;
            const newWeaponsArray = [
                ...weaponsArray.slice(0, action.payload.index),
            ];
            if (action.payload.weapon) {
                newWeaponsArray.push(action.payload.weapon);
            }
            newWeaponsArray.push(
                ...weaponsArray.slice(action.payload.index + 1),
            );

            return {
                ...state,
                equipment: {
                    ...state.equipment,
                    inventoryWeapons: newWeaponsArray,
                },
            };
        })
        .addCase(setInventoryItemAt, (state, action) => {
            const itemsArray = state.equipment.inventoryItems;
            const newItemsArray = [
                ...itemsArray.slice(0, action.payload.index),
            ];
            if (action.payload.item) {
                newItemsArray.push(action.payload.item);
            }
            newItemsArray.push(...itemsArray.slice(action.payload.index + 1));

            return {
                ...state,
                equipment: {
                    ...state.equipment,
                    inventoryItems: newItemsArray,
                },
            };
        })
        .addCase(addInventoryWeapon, (state, action) => {
            return {
                ...state,
                equipment: {
                    ...state.equipment,
                    inventoryWeapons: [
                        ...state.equipment.inventoryWeapons,
                        action.payload,
                    ],
                },
            };
        })
        .addCase(addInventoryItem, (state, action) => {
            return {
                ...state,
                equipment: {
                    ...state.equipment,
                    inventoryItems: [
                        ...state.equipment.inventoryItems,
                        action.payload,
                    ],
                },
            };
        })
        .addCase(setModifierForField, (state, action) => {
            return {
                ...state,
                modifiers: {
                    ...state.modifiers,
                    [action.payload.modifierKey]: {
                        field: action.payload.modifierField,
                        bonus: action.payload.modifier,
                        additionalData: action.payload.metadata,
                        modifierKey: action.payload.modifierKey,
                    },
                },
            };
        })
        .addCase(removeModifier, (state, action) => {
            const modifiers = { ...state.modifiers };
            delete modifiers[action.payload];
            return {
                ...state,
                modifiers,
            };
        })
        .addCase(setAncestry, (state, action) => {
            return {
                ...state,
                ancestry: action.payload,
            };
        }).addCase(setCommunity, (state, action) => {
            if (action.payload === state.community) {
                return state;
            }
            return {
                ...state,
                community: action.payload,
            }
        });
});
