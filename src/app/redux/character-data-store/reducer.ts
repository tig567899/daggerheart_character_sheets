import { createReducer } from "@reduxjs/toolkit";

import { CharClass } from "@dh_sheets/app/constants";
import {
    addInventoryItem,
    addInventoryWeapon,
    addLevelUpChoices,
    loadDataFromCookies,
    pruneLevelChoicesToLevel,
    removeModifier,
    resetData,
    setActiveArmor,
    setAncestry,
    setCharacterClass,
    setCharacterName,
    setCharacterPronouns,
    setCommunity,
    setCurrentArmor,
    setCurrentHp,
    setCurrentStress,
    setExperience,
    setGoldBags,
    setGoldChests,
    setGoldHandfuls,
    setHope,
    setInventoryItemAt,
    setInventoryWeaponAt,
    setLevel,
    setModifierForField,
    setMulticlassCharClass,
    setPrimaryWeapon,
    setSecondarySubclassIndex,
    setSecondaryWeapon,
    setSubclassIndex,
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
    experiences: {
        exp1: "",
        exp2: "",
        exp3: "",
        exp4: "",
        exp5: "",
    },
    modifiers: {},
    levelUpChoices: [],
};

export const characterData = createReducer(initialState, (builder) => {
    builder
        .addCase(resetData, () => {
            return initialState;
        })
        .addCase(loadDataFromCookies, (state, action) => {
            return {
                ...state,
                ...action.payload,
            };
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
                    subclass: undefined,
                },
            };
        })
        .addCase(setMulticlassCharClass, (state, action) => {
            if (action.payload === state.classData.charClass[1]) {
                return state;
            }
            const classes = [...state.classData.charClass];
            if (classes.length === 1) {
                classes.push(action.payload);
            } else {
                classes[1] = action.payload
            }
            return {
                ...state,
                classData: {
                    ...state.classData,
                    charClass: [...classes],
                    secondSubclass: undefined,
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
        .addCase(setCurrentArmor, (state, action) => {
            if (action.payload === state.characterStateData.armorConsumed) {
                return state;
            }
            return {
                ...state,
                characterStateData: {
                    ...state.characterStateData,
                    armorConsumed: action.payload,
                },
            };
        })
        .addCase(setExperience, (state, action) => {
            const existingExp = { ...state.experiences };

            switch (action.payload.index) {
                case 0:
                    existingExp.exp1 = action.payload.experience;
                    break;
                case 1:
                    existingExp.exp2 = action.payload.experience;
                    break;
                case 2:
                    existingExp.exp3 = action.payload.experience;
                    break;
                case 3:
                    existingExp.exp4 = action.payload.experience;
                    break;
                case 4:
                    existingExp.exp5 = action.payload.experience;
                    break;
                default:
                    return;
            }

            return {
                ...state,
                experiences: existingExp,
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
        })
        .addCase(setCommunity, (state, action) => {
            if (action.payload === state.community) {
                return state;
            }
            return {
                ...state,
                community: action.payload,
            };
        })
        .addCase(setSubclassIndex, (state, action) => {
            if (action.payload === state.classData.subclass) {
                return state;
            }
            return {
                ...state,
                classData: {
                    ...state.classData,
                    subclass: action.payload,
                },
            };
        })
        .addCase(setSecondarySubclassIndex, (state, action) => {
            if (action.payload === state.classData.secondSubclass) {
                return state;
            }
            return {
                ...state,
                classData: {
                    ...state.classData,
                    secondSubclass: action.payload,
                },
            };
        })
        .addCase(setGoldHandfuls, (state, action) => {
            return {
                ...state,
                characterStateData: {
                    ...state.characterStateData,
                    goldHandfuls: action.payload,
                },
            };
        })
        .addCase(setGoldBags, (state, action) => {
            return {
                ...state,
                characterStateData: {
                    ...state.characterStateData,
                    goldBags: action.payload,
                },
            };
        })
        .addCase(setGoldChests, (state, action) => {
            return {
                ...state,
                characterStateData: {
                    ...state.characterStateData,
                    goldChests: action.payload,
                },
            };
        })
        .addCase(setLevel, (state, action) => {
            return {
                ...state,
                classData: {
                    ...state.classData,
                    level: action.payload,
                },
            };
        })
        .addCase(addLevelUpChoices, (state, action) => {
            return {
                ...state,
                levelUpChoices: [
                    ...state.levelUpChoices,
                    action.payload.upgrades,
                ],
            };
        })
        .addCase(pruneLevelChoicesToLevel, (state, action) => {
            return {
                ...state,
                levelUpChoices: state.levelUpChoices.slice(
                    0,
                    action.payload - 1,
                ),
            };
        });
});
