import { useCallback, useRef } from "react";
import { useSelector } from "react-redux";

import { ArmorInfoLayout } from "@dh_sheets/app/components/armor-block/armor-info";
import { ArmorSelectorModal } from "@dh_sheets/app/components/armor-block/selector-modal/armor-selector-modal";
import { BlockTitle } from "@dh_sheets/app/components/parts/framed-block/block-title";
import { FramedBlock } from "@dh_sheets/app/components/parts/framed-block/framed-block";
import { ModalTrigger } from "@dh_sheets/app/components/parts/modal/modal-trigger";
import {
    removeModifier,
    setActiveArmor,
    setModifierForField,
} from "@dh_sheets/app/redux/character-data-store/actions";
import { getEquipmentData } from "@dh_sheets/app/redux/character-data-store/selector";
import { useAppDispatch } from "@dh_sheets/app/redux/hooks";
import { ArmorData } from "@dh_sheets/app/types";

import styles from "./armor-block.module.css";

export const ArmorBlock = () => {
    const modalTriggerRef = useRef<any>(null);
    const { armor } = useSelector(getEquipmentData);
    const dispatch = useAppDispatch();

    const onArmorSelect = useCallback(
        (_id: string, selectedArmor?: ArmorData) => {
            armor?.features.forEach((feature) =>
                feature.modifiers?.forEach((modifier) => {
                    dispatch(removeModifier(modifier.modifierKey));
                }),
            );
            selectedArmor?.features.forEach((feature) =>
                feature.modifiers?.forEach((modifier) => {
                    dispatch(
                        setModifierForField({
                            modifierKey: modifier.modifierKey,
                            modifier: modifier.bonus,
                            modifierField: modifier.field,
                        }),
                    );
                }),
            );
            dispatch(setActiveArmor(selectedArmor));
        },
        [dispatch, armor],
    );

    const onRemoveArmor = useCallback(() => {
        dispatch(setActiveArmor());
        armor?.features.forEach((feature) =>
            feature.modifiers?.forEach((modifier) => {
                dispatch(removeModifier(modifier.modifierKey));
            }),
        );
    }, [dispatch]);

    const renderModal = useCallback(
        (
            onSelect: (...props: any) => void,
            onClose: () => void,
            _modalId: string,
            key: string,
        ) => {
            return (
                <ArmorSelectorModal
                    key={key}
                    onSelect={onSelect}
                    onClose={onClose}
                />
            );
        },
        [],
    );

    const openModal = useCallback(() => {
        modalTriggerRef.current?.openModalId();
    }, [modalTriggerRef]);

    return (
        <FramedBlock>
            <BlockTitle title="Active Armor" />
            {armor ? (
                <ArmorInfoLayout
                    armor={armor}
                    onEdit={openModal}
                    onRemove={onRemoveArmor}
                />
            ) : (
                <button onClick={openModal} className={styles.addArmorButton}>
                    Set active armor
                </button>
            )}
            <ModalTrigger
                ref={modalTriggerRef}
                renderModal={renderModal}
                onSelect={onArmorSelect}
                keyPrefix={"armor-select-modal"}
            />
        </FramedBlock>
    );
};
