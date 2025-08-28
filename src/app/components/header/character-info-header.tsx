import { SaveableInput } from '@dh_sheets/app/components/saveable-input';
import {
    setCharacterClass,
    setCharacterName,
    setCharacterPronouns,
} from '@dh_sheets/app/redux/character-data-store/actions';
import {
    getCharacterData,
    getClassData,
} from '@dh_sheets/app/redux/character-data-store/selector';
import { FixedFramedStat } from '@dh_sheets/app/components/framed-stat';
import { useAppDispatch } from '@dh_sheets/app/redux/hooks';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { CharClass } from '@dh_sheets/app/types';

import styles from './character-info-header.module.css';

export interface CharacterInfoParams {}

export const CharacterInfoHeader = ({}: CharacterInfoParams) => {
    const characterData = useSelector(getCharacterData);
    const classData = useSelector(getClassData);
    const dispatch = useAppDispatch();

    const onNameSave = useCallback(
        (name: string) => {
            dispatch(setCharacterName(name));
        },
        [dispatch]
    );

    const onPronounsSave = useCallback(
        (pronouns: string) => {
            dispatch(setCharacterPronouns(pronouns));
        },
        [dispatch]
    );

    const onCharClassChange = useCallback(
        (changeEvent: any) => {
            dispatch(setCharacterClass(changeEvent.target.value));
        },
        [dispatch]
    );

    return (
        <div className={styles.headerContainer}>
            <div>Daggerheart Character Sheet</div>
            <SaveableInput
                initialInput={characterData.headerData.name}
                inputType="string"
                onSave={onNameSave}
                name='Name'
            ></SaveableInput>
            <SaveableInput
                initialInput={characterData.headerData.pronouns}
                inputType="string"
                onSave={onPronounsSave}
                name='Pronouns'
            ></SaveableInput>
            <select onChange={onCharClassChange}>
                {Object.values(CharClass).map((charClass) => (
                    <option key={charClass}>{charClass}</option>
                ))}
            </select>

            <FixedFramedStat value={classData.level} label="Level" />
        </div>
    );
};
