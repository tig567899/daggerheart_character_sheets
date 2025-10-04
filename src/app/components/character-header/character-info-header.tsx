import classNames from "classnames";
import { useCallback, useContext } from "react";
import { useSelector } from "react-redux";

import { getSubclassesByClass } from "@dh_sheets/app/char-class-util";
import { LevelUpModal } from "@dh_sheets/app/components/character-header/modal/level-up-modal";
import { ActionButton } from "@dh_sheets/app/components/parts/action-button/action-button";
import { FixedFramedStat } from "@dh_sheets/app/components/parts/framed-stat/framed-stat";
import { ModalTrigger } from "@dh_sheets/app/components/parts/modal/modal-trigger";
import { SaveableInput } from "@dh_sheets/app/components/parts/saveable-input/saveable-input";
import { CharClass, IconSize, ModifierField } from "@dh_sheets/app/constants";
import { PageContext } from "@dh_sheets/app/context";
import {
    removeModifier,
    setCharacterClass,
    setCharacterName,
    setCharacterPronouns,
    setMulticlassCharClass,
} from "@dh_sheets/app/redux/character-data-store/actions";
import {
    getCharacterData,
    getClassData,
    getModifierByField,
} from "@dh_sheets/app/redux/character-data-store/selector";
import { levelDownThunk } from "@dh_sheets/app/redux/character-data-store/thunks/level-down";
import { levelUpThunk } from "@dh_sheets/app/redux/character-data-store/thunks/level-up";
import { useAppDispatch, useAppSelector } from "@dh_sheets/app/redux/hooks";
import { LevelUpChoice } from "@dh_sheets/app/types";

import styles from "./character-info-header.module.css";

export const CharacterInfoHeader = () => {
    const pageContext = useContext(PageContext);
    const characterData = useSelector(getCharacterData);
    const {
        level,
        charClass,
        subclass: subclassIndex,
        secondSubclass: secondSubclassIndex,
    } = useSelector(getClassData);
    const dispatch = useAppDispatch();
    const multiclassModifiers = useAppSelector((state) =>
        getModifierByField(state, ModifierField.MULTICLASS),
    );

    const isMulticlassChar = multiclassModifiers > 0;

    const subclass =
        subclassIndex === undefined
            ? null
            : getSubclassesByClass(charClass[0])[subclassIndex];

    const secondarySubclass =
        secondSubclassIndex === undefined
            ? null
            : getSubclassesByClass(charClass[1])[secondSubclassIndex];

    const onNameSave = useCallback(
        (name: string) => {
            dispatch(setCharacterName(name));
        },
        [dispatch],
    );

    const onPronounsSave = useCallback(
        (pronouns: string) => {
            dispatch(setCharacterPronouns(pronouns));
        },
        [dispatch],
    );

    const onCharClassChange = useCallback(
        (changeEvent: any) => {
            if (subclass) {
                [
                    subclass.foundationFeatures,
                    subclass.specializationFeatures,
                    subclass.masteryFeatures,
                ].forEach((abilities) => {
                    abilities.forEach((ability) =>
                        ability.modifier?.forEach((modifier) => {
                            dispatch(removeModifier(modifier.modifierKey));
                        }),
                    );
                });
            }
            dispatch(setCharacterClass(changeEvent.target.value));
        },
        [dispatch, subclass],
    );

    const onMultiClassChange = useCallback(
        (changeEvent: any) => {
            if (secondarySubclass) {
                [
                    secondarySubclass.foundationFeatures,
                    secondarySubclass.specializationFeatures,
                ].forEach((abilities) => {
                    abilities.forEach((ability) =>
                        ability.modifier?.forEach((modifier) => {
                            dispatch(removeModifier(modifier.modifierKey));
                        }),
                    );
                });
            }
            dispatch(setMulticlassCharClass(changeEvent.target.value));
        },
        [dispatch, secondarySubclass],
    );

    const onLevelDown = useCallback(() => {
        dispatch(levelDownThunk());
    }, [dispatch]);

    const onLevelUpComplete = useCallback(
        (options: LevelUpChoice[]) => {
            dispatch(levelUpThunk(options));
        },
        [dispatch],
    );

    const renderModal = useCallback(
        (
            onSelect: (...props: any) => void,
            onClose: () => void,
            modalId: string,
            key: string,
        ) => {
            return (
                <LevelUpModal onSelect={onSelect} onClose={onClose} key={key} />
            );
        },
        [],
    );

    return (
        <div
            className={classNames(styles.headerContainer, {
                [styles.narrowHeader]: pageContext.limitedWidth,
            })}
        >
            <div className={styles.characterInfo}>
                <div>
                    <div
                        className={classNames(styles.headerInput, styles.name)}
                    >
                        <SaveableInput
                            initialInput={characterData.headerData?.name}
                            inputType="string"
                            onSave={onNameSave}
                            name="Name"
                            size={IconSize.LARGE}
                        />
                    </div>
                    <div
                        className={classNames(
                            styles.headerInput,
                            styles.pronouns,
                        )}
                    >
                        <SaveableInput
                            initialInput={characterData.headerData?.pronouns}
                            inputType="string"
                            onSave={onPronounsSave}
                            name="Pronouns"
                            size={IconSize.SMALL}
                        />
                    </div>
                </div>
            </div>

            <div
                className={classNames(styles.levelBlock, {
                    [styles.levelBlockVert]: pageContext.limitedWidth,
                })}
            >
                <div className={styles.levelButtons}>
                    <ModalTrigger
                        renderModal={renderModal}
                        keyPrefix={"level-up"}
                        onSelect={onLevelUpComplete}
                        className={styles.levelButton}
                        label={"Level Up"}
                        bordered
                    />
                    <ActionButton
                        label={"Level Down"}
                        disabled={level === 1}
                        onClick={onLevelDown}
                        className={styles.levelButton}
                        bordered
                    />
                </div>
                <FixedFramedStat value={level} label="Level" />

                <select
                    className={styles.headerInput}
                    value={charClass[0]}
                    onChange={onCharClassChange}
                >
                    {Object.values(CharClass)
                        .filter((classOption) => classOption !== charClass[1])
                        .map((charClass) => (
                            <option key={charClass}>{charClass}</option>
                        ))}
                </select>

                {isMulticlassChar && (
                    <select
                        className={styles.headerInput}
                        value={charClass[1]}
                        onChange={onMultiClassChange}
                    >
                        {Object.values(CharClass)
                            .filter(
                                (classOption) => classOption !== charClass[0],
                            )
                            .map((charClass) => (
                                <option key={charClass}>{charClass}</option>
                            ))}
                    </select>
                )}
            </div>
        </div>
    );
};
