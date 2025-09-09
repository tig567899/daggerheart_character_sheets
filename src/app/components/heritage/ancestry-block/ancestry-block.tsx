import { useCallback, useMemo, useRef } from "react";
import { useSelector } from "react-redux";

import { BlockTitle } from "@dh_sheets/app/components/block-title";
import { AncestryInfo } from "@dh_sheets/app/components/heritage/ancestry-block/ancestry-info";
import { AncestryModal } from "@dh_sheets/app/components/heritage/ancestry-block/selector-modal/ancestry-modal";
import { ModalTrigger } from "@dh_sheets/app/components/modal-trigger";
import { AncestriesList } from "@dh_sheets/app/data/ancestry-data";
import {
    removeModifier,
    setAncestry,
    setModifierForField,
} from "@dh_sheets/app/redux/character-data-store/actions";
import { getPrimaryAncestry } from "@dh_sheets/app/redux/character-data-store/selector";
import { useAppDispatch } from "@dh_sheets/app/redux/hooks";
import { Ancestry } from "@dh_sheets/app/types";

import parentStyles from "../../framed-block.module.css";
import styles from "../heritage-block.module.css";

export const AncestryBlock = () => {
    const modalTriggerRef = useRef<any>(null);
    const ancestryName = useSelector(getPrimaryAncestry);
    const { ancestry, index } = useMemo(() => {
        const index = AncestriesList.findIndex(
            (entry) => entry.name === ancestryName,
        );

        return {ancestry: AncestriesList[index], index}
    }, [ancestryName]);
    const dispatch = useAppDispatch();

    const renderModal = useCallback(
        (
            onSelect: (...props: any) => void,
            onClose: () => void,
            _modalId: string,
            key: string,
        ) => {
            return (
                <AncestryModal
                    key={key}
                    onSelect={onSelect}
                    onClose={onClose}
                    initialAncestryIndex={index}
                />
            );
        },
        [index],
    );

    const onSetAncestry = useCallback(
        (newAncestry?: Ancestry) => {
            dispatch(setAncestry(newAncestry?.name));
            ancestry?.abilities.forEach((ability) =>
                ability.modifier?.forEach((modifier) => {
                    dispatch(removeModifier(modifier.modifierKey));
                }),
            );
            newAncestry?.abilities.forEach((ability) =>
                ability.modifier?.forEach((modifier) => {
                    dispatch(
                        setModifierForField({
                            modifierKey: modifier.modifierKey,
                            modifier: modifier.bonus,
                            modifierField: modifier.field,
                        }),
                    );
                }),
            );
        },
        [dispatch, ancestry],
    );

    const onEdit = useCallback(() => {
        modalTriggerRef.current?.openModalId();
    }, [modalTriggerRef]);

    return (
        <div className={parentStyles.framedBlock}>
            <BlockTitle title="Ancestry" />
            {ancestry ? (
                <AncestryInfo ancestry={ancestry} onEdit={onEdit} />
            ) : (
                <button onClick={onEdit} className={styles.setButton}>
                    Set ancestry
                </button>
            )}
            <ModalTrigger
                ref={modalTriggerRef}
                renderModal={renderModal}
                onSelect={onSetAncestry}
                keyPrefix={"ancestry-select-modal"}
            />
        </div>
    );
};
