import { useCallback, useRef } from "react";

import { getSubclassesByClass } from "@dh_sheets/app/charClassUtil";
import { BlockTitle } from "@dh_sheets/app/components/parts/framed-block/block-title";
import { FramedBlock } from "@dh_sheets/app/components/parts/framed-block/framed-block";
import { ModalTrigger } from "@dh_sheets/app/components/parts/modal/modal-trigger";
import { SubclassInfo } from "@dh_sheets/app/components/subclass-block/subclass-info";
import { SubclassModal } from "@dh_sheets/app/components/subclass-block/subclass-modal";
import { setSubclassIndex } from "@dh_sheets/app/redux/character-data-store/actions";
import {
    getClassData,
    getSubclassIndex,
} from "@dh_sheets/app/redux/character-data-store/selector";
import { useAppDispatch, useAppSelector } from "@dh_sheets/app/redux/hooks";

import styles from "./subclass-block.module.css";

export const SubclassBlock = () => {
    // Get base feature
    // TODO: Implement level up and make the title depend on it.
    const modalTriggerRef = useRef<any>(null);
    const dispatch = useAppDispatch();

    const { charClass } = useAppSelector(getClassData);
    const subClassIndex = useAppSelector(getSubclassIndex);
    const subClass =
        subClassIndex === undefined
            ? null
            : getSubclassesByClass(charClass[0])[subClassIndex];

    const onEdit = useCallback(() => {
        modalTriggerRef.current?.openModalId();
    }, [modalTriggerRef]);

    const renderModal = useCallback(
        (
            onSelect: (...props: any) => void,
            onClose: () => void,
            _modalId: string,
            key: string,
        ) => {
            return (
                <SubclassModal
                    key={key}
                    onSelect={onSelect}
                    onClose={onClose}
                    initialSubclassIndex={subClassIndex}
                />
            );
        },
        [subClassIndex],
    );

    const changeSubclass = useCallback(
        (index: number) => {
            dispatch(setSubclassIndex(index));
        },
        [dispatch],
    );

    return (
        <FramedBlock>
            <BlockTitle title="Subclass Features" />
            {subClass ? (
                <SubclassInfo subclass={subClass} onEdit={onEdit} />
            ) : (
                <button onClick={onEdit} className={styles.setButton}>
                    Set subclass
                </button>
            )}

            <ModalTrigger
                ref={modalTriggerRef}
                renderModal={renderModal}
                onSelect={changeSubclass}
                keyPrefix="subclass-select-modal"
            />
        </FramedBlock>
    );
};
