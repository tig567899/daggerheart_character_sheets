import { CharacterDataState, StatData } from '@dh_sheets/app/redux/character-data-store/types';

export const getCharacterData = (store: {
    characterData: CharacterDataState;
}): CharacterDataState => store.characterData;

export const getHeaderData = (store: {
    characterData: CharacterDataState;
}) => store.characterData.headerData;

export const getStatData = (store: {
    characterData: CharacterDataState;
}): StatData => store.characterData.scores;

export const getClassData = (store: {
    characterData: CharacterDataState;
}) => store.characterData.classData;

export const getEquipmentData = (store: {
    characterData: CharacterDataState;
}) => store.characterData.equipment;

export const getCharacterStateData = (store: {
    characterData: CharacterDataState;
}) => store.characterData.characterStateData;