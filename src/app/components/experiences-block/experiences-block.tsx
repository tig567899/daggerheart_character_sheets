import { useCallback } from "react";
import { useSelector } from "react-redux";

import { useExperiencesModifiers } from "@dh_sheets/app/components/experiences-block/util";
import { BlockTitle } from "@dh_sheets/app/components/parts/framed-block/block-title";
import { FramedBlock } from "@dh_sheets/app/components/parts/framed-block/framed-block";
import { FixedFramedStat } from "@dh_sheets/app/components/parts/framed-stat/framed-stat";
import { SaveableInput } from "@dh_sheets/app/components/parts/saveable-input/saveable-input";
import { setExperience } from "@dh_sheets/app/redux/character-data-store/actions";
import {
    getClassData,
    getExperiences,
} from "@dh_sheets/app/redux/character-data-store/selector";
import { useAppDispatch } from "@dh_sheets/app/redux/hooks";
import { getTierByLevel } from "@dh_sheets/app/util";

import styles from "./experiences-block.module.css";

export const ExperiencesBlock = () => {
    const charExperiences = useSelector(getExperiences);
    const dispatch = useAppDispatch();

    const { level } = useSelector(getClassData);
    const experienceCount = getTierByLevel(level) + 1;

    const experienceModifiers = useExperiencesModifiers();

    const onSaveExperiences = useCallback(
        (value: string, index?: number) => {
            if (index === undefined) return;
            dispatch(setExperience({ experience: value, index }));
        },
        [dispatch],
    );

    const onRemoveExperience = useCallback(
        (index: number) => {
            dispatch(setExperience({ experience: "", index }));
        },
        [dispatch],
    );

    return (
        <FramedBlock>
            <BlockTitle title="Experiences" />
            {Object.values(charExperiences)
                .slice(0, experienceCount)
                .map((exp: string, index: number) => {
                    return (
                        <div
                            className={styles.experienceContainer}
                            key={`experiences-input-${index}`}
                        >
                            <div className={styles.experiencesInput}>
                                <SaveableInput
                                    initialInput={exp}
                                    inputType="string"
                                    name={`Experience ${index + 1}`}
                                    index={index}
                                    onSave={onSaveExperiences}
                                />
                            </div>

                            <button
                                className={styles.clearButton}
                                onClick={() => onRemoveExperience(index)}
                            >
                                Clear
                            </button>

                            <FixedFramedStat label="" value={2 + experienceModifiers[index]} usePlus small />
                        </div>
                    );
                })}
        </FramedBlock>
    );
};
