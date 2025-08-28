import {
    setCharacterClass,
    setCharacterName,
    setCharacterPronouns,
    setCurrentHp,
    setCurrentStress,
    setStatValue,
} from '@dh_sheets/app/redux/character-data-store/actions';
import { CharacterDataState } from '@dh_sheets/app/redux/character-data-store/types';
import { CharClass } from '@dh_sheets/app/types';
import { createReducer } from '@reduxjs/toolkit';

const initialState: CharacterDataState = {
    headerData: {
        name: '',
        pronouns: '',
        heritage: '',
    },
    scores: {
        agility: {
            bonus: 0,
            mark: false,
            name: 'agility',
        },
        strength: {
            bonus: 0,
            mark: false,
            name: 'strength',
        },
        finesse: {
            bonus: 0,
            mark: false,
            name: 'finesse',
        },
        instinct: {
            bonus: 0,
            mark: false,
            name: 'instinct',
        },
        presence: {
            bonus: 0,
            mark: false,
            name: 'presence',
        },
        knowledge: {
            bonus: 0,
            mark: false,
            name: 'knowledge',
        },
    },
    classData: {
        level: 1,
        charClass: [CharClass.BARD],
        subclass: '',
        hopeFeature: [],
        classFeature: [],
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
    experiences: {},
};

export const characterData = createReducer(initialState, (builder) => {
    builder
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
        .addCase(setStatValue, (state, action) => {
            switch (action.payload.name) {
                case 'Agility': {
                    if (action.payload.bonus === state.scores.agility.bonus) {
                        return state;
                    }
                    return {
                        ...state,
                        scores: {
                            ...state.scores,
                            agility: {
                                ...state.scores.agility,
                                bonus: action.payload.bonus,
                            },
                        },
                    };
                }
                case 'Strength': {
                    if (action.payload.bonus === state.scores.strength.bonus) {
                        return state;
                    }
                    return {
                        ...state,
                        scores: {
                            ...state.scores,
                            strength: {
                                ...state.scores.strength,
                                bonus: action.payload.bonus,
                            },
                        },
                    };
                }
                case 'Finesse': {
                    if (action.payload.bonus === state.scores.finesse.bonus) {
                        return state;
                    }
                    return {
                        ...state,
                        scores: {
                            ...state.scores,
                            finesse: {
                                ...state.scores.finesse,
                                bonus: action.payload.bonus,
                            },
                        },
                    };
                }
                case 'Instinct': {
                    if (action.payload.bonus === state.scores.instinct.bonus) {
                        return state;
                    }
                    return {
                        ...state,
                        scores: {
                            ...state.scores,
                            instinct: {
                                ...state.scores.instinct,
                                bonus: action.payload.bonus,
                            },
                        },
                    };
                }
                case 'Presence': {
                    if (action.payload.bonus === state.scores.presence.bonus) {
                        return state;
                    }
                    return {
                        ...state,
                        scores: {
                            ...state.scores,
                            presence: {
                                ...state.scores.presence,
                                bonus: action.payload.bonus,
                            },
                        },
                    };
                }
                case 'Knowledge': {
                    if (action.payload.bonus === state.scores.knowledge.bonus) {
                        return state;
                    }
                    return {
                        ...state,
                        scores: {
                            ...state.scores,
                            knowledge: {
                                ...state.scores.knowledge,
                                bonus: action.payload.bonus,
                            },
                        },
                    };
                }
                default:
                    return state;
            }
        });
});
