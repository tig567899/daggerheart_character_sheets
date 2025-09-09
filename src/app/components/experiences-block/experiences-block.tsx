import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { SaveableInput } from '@dh_sheets/app/components/saveable-input';
import {
    addExperience,
    setExperience,
} from '@dh_sheets/app/redux/character-data-store/actions';
import { getExperiences } from '@dh_sheets/app/redux/character-data-store/selector';
import { useAppDispatch } from '@dh_sheets/app/redux/hooks';
import { FixedFramedStat } from '@dh_sheets/app/components/framed-stat';
import { BlockTitle } from '@dh_sheets/app/components/block-title';

import styles from './experiences-block.module.css';
import parentStyles from '../framed-block.module.css';

export const ExperiencesBlock = () => {
    const charExperiences = useSelector(getExperiences);
    const dispatch = useAppDispatch();

    const onSaveExperiences = useCallback(
        (value: string, index?: number) => {
            if (index === undefined) return;
            dispatch(setExperience({ experience: value, index }));
        },
        [dispatch]
    );

    const onAddExperiences = useCallback(
        (experience: string) => {
            dispatch(addExperience(experience));
        },
        [dispatch]
    );

    return (
        <div className={parentStyles.framedBlock}>
            <BlockTitle title="Experiences" />
            {charExperiences.map((exp: string, index: number) => {
                return (
                    <div
                        className={styles.experienceContainer}
                        key={`experiences-input-${index}`}
                    >
                        <div className={styles.experiencesInput}><SaveableInput
                            initialInput={exp}
                            inputType="string"
                            name={`Experience ${index + 1}`}
                            index={index}
                            onSave={onSaveExperiences}
                        /></div>
                        
                        <FixedFramedStat label="" value={2} usePlus small />
                    </div>
                );
            })}

            <button onClick={() => onAddExperiences('')}>Add</button>
        </div>
    );
};
