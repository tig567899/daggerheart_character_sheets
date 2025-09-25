import { useCallback, useMemo } from "react";

import { getSubclassesByClass } from "@dh_sheets/app/char-class-util";
import { BlockTitle } from "@dh_sheets/app/components/parts/framed-block/block-title";
import { FramedBlock } from "@dh_sheets/app/components/parts/framed-block/framed-block";
import { ModalTrigger } from "@dh_sheets/app/components/parts/modal/modal-trigger";
import { SubclassInfo } from "@dh_sheets/app/components/subclass-block/subclass-info";
import { SubclassModal } from "@dh_sheets/app/components/subclass-block/subclass-modal";
import { IconSize, ModifierField } from "@dh_sheets/app/constants";
import {
    getClassData,
    getModifierByField,
} from "@dh_sheets/app/redux/character-data-store/selector";
import {
    switchMainSubclass,
    switchSecondarySubclass,
} from "@dh_sheets/app/redux/character-data-store/thunks/switch-subclass";
import { useAppDispatch, useAppSelector } from "@dh_sheets/app/redux/hooks";

import { EditIcon } from "@icons/edit-icon";
import { PlusIcon } from "@icons/plus-icon";

import styles from "./subclass-block.module.css";

export enum SubclassSelection {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

export const SubclassBlock = () => {
    const dispatch = useAppDispatch();

    const {
        charClass,
        subclass: subclassIndex,
        secondSubclass: secondSubclassIndex,
    } = useAppSelector(getClassData);
    const subclass =
        subclassIndex === undefined
            ? null
            : getSubclassesByClass(charClass[0])[subclassIndex];

    const secondSubclass =
        secondSubclassIndex === undefined
            ? null
            : getSubclassesByClass(charClass[0])[secondSubclassIndex];

    const subclassPoints = useAppSelector((state) =>
        getModifierByField(state, ModifierField.MAIN_SUBCLASS),
    );
    const multiClassSubclassPoints = useAppSelector((state) =>
        getModifierByField(state, ModifierField.SECONDARY_SUBCLASS),
    );

    const specializationUnlocked = subclassPoints > 0;
    const masteryUnlocked = subclassPoints > 1;
    const multiClassSpecializationUnlocked = multiClassSubclassPoints === 1;

    const renderModal = useCallback(
        (
            onSelect: (...props: any) => void,
            onClose: () => void,
            modalId: string,
            key: string,
        ) => {
            return (
                <SubclassModal
                    key={key}
                    onSelect={onSelect}
                    onClose={onClose}
                    initialSubclassIndex={subclassIndex}
                    whichClass={modalId}
                />
            );
        },
        [subclassIndex],
    );

    const changeSubclass = useCallback(
        (index: number) => {
            dispatch(
                switchMainSubclass({
                    newSubclassIndex: index,
                    oldSubclass: subclass ?? undefined,
                }),
            );
        },
        [dispatch, subclass],
    );

    const changeSecondarySubclass = useCallback(
        (index: number) => {
            dispatch(
                switchSecondarySubclass({
                    newSubclassIndex: index,
                    oldSubclass: secondSubclass ?? undefined,
                }),
            );
        },
        [dispatch, secondSubclass],
    );

    const plusIcon = useMemo(() => <PlusIcon />, []);
    const editIcon = useMemo(() => <EditIcon size={IconSize.LARGE} />, []);

    const renderSubclassModalTrigger = useCallback(
        ({
            label,
            style,
            keyPrefix,
            onSelect,
            modalDataKey,
            isEdit,
        }: {
            label: string;
            style: string;
            keyPrefix: string;
            onSelect: (index: number) => void;
            modalDataKey: SubclassSelection;
            isEdit?: boolean;
        }) => (
            <ModalTrigger
                renderModal={renderModal}
                onSelect={onSelect}
                keyPrefix={keyPrefix}
                className={style}
                label={label}
                modalDataKey={modalDataKey}
                icon={isEdit ? editIcon : plusIcon}
                size={isEdit ? IconSize.LARGE : undefined}
                isIconButton={isEdit}
                bordered={!isEdit}
            />
        ),
        [renderModal, editIcon, plusIcon],
    );

    return (
        <FramedBlock>
            <BlockTitle title="Subclass Features" />
            {subclass ? (
                <SubclassInfo
                    subclass={subclass}
                    changeButton={renderSubclassModalTrigger({
                        label: "Change",
                        style: styles.changeButton,
                        keyPrefix: "subclass-select-modal",
                        onSelect: changeSubclass,
                        modalDataKey: SubclassSelection.PRIMARY,
                        isEdit: true,
                    })}
                    specializationUnlocked={specializationUnlocked}
                    masteryUnlocked={masteryUnlocked}
                />
            ) : (
                <div className={styles.buttonContainer}>
                    {renderSubclassModalTrigger({
                        label: "Set subclass",
                        style: styles.setButton,
                        keyPrefix: "subclass-select-modal",
                        onSelect: changeSubclass,
                        modalDataKey: SubclassSelection.PRIMARY,
                    })}
                </div>
            )}
            {charClass[1] ? (
                secondSubclass ? (
                    <SubclassInfo
                        subclass={secondSubclass}
                        changeButton={renderSubclassModalTrigger({
                            label: "Change",
                            style: styles.changeButton,
                            keyPrefix: "subclass-2-select-modal",
                            onSelect: changeSecondarySubclass,
                            modalDataKey: SubclassSelection.SECONDARY,
                        })}
                        specializationUnlocked={
                            multiClassSpecializationUnlocked
                        }
                    />
                ) : (
                    <div className={styles.buttonContainer}>
                        {renderSubclassModalTrigger({
                            label: "Set multiclass subclass",
                            style: styles.setButton,
                            keyPrefix: "subclass-2-select-modal",
                            onSelect: changeSecondarySubclass,
                            modalDataKey: SubclassSelection.SECONDARY,
                        })}
                    </div>
                )
            ) : null}
        </FramedBlock>
    );
};
