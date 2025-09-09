import { useCallback, useRef } from "react";
import { useSelector } from "react-redux";

import { ArmorInfoLayout } from "@dh_sheets/app/components/armor-block/armor-info";
import { ArmorSelectorModal } from "@dh_sheets/app/components/armor-block/selector-modal/armor-selector-modal";
import { BlockTitle } from "@dh_sheets/app/components/block-title";
import { ModalTrigger } from "@dh_sheets/app/components/modal-trigger";
import { setActiveArmor } from "@dh_sheets/app/redux/character-data-store/actions";
import { getEquipmentData } from "@dh_sheets/app/redux/character-data-store/selector";
import { useAppDispatch } from "@dh_sheets/app/redux/hooks";
import { ArmorData } from "@dh_sheets/app/types";

import parentStyles from "../framed-block.module.css";
import styles from "./armor-block.module.css";

export const ArmorBlock = () => {
    const modalTriggerRef = useRef<any>(null);
    const { armor } = useSelector(getEquipmentData);
    const dispatch = useAppDispatch();

    const onArmorSelect = useCallback(
        (_id: string, selectedArmor?: ArmorData) => {
            dispatch(setActiveArmor(selectedArmor));
        },
        [dispatch],
    );

    const onRemoveArmor = useCallback(() => {
        dispatch(setActiveArmor());
    }, [dispatch])

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

    return (
        <div className={parentStyles.framedBlock}>
            <BlockTitle title="Active Armor" />
            {armor ? (
                <ArmorInfoLayout
                    armor={armor}
                    onEdit={modalTriggerRef.current?.openModalId}
                    onRemove={onRemoveArmor}
                />
            ) : (
                <button
                    onClick={modalTriggerRef.current?.openModalId}
                    className={styles.addArmorButton}
                >
                    Set active armor
                </button>
            )}
            <ModalTrigger
                ref={modalTriggerRef}
                renderModal={renderModal}
                onSelect={onArmorSelect}
                keyPrefix={"armor-select-modal"}
            />
        </div>
    );
};
