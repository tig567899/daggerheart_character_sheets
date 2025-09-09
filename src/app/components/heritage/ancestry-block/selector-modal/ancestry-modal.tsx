import classNames from "classnames";
import { useCallback, useState } from "react";

import { AncestryGallery } from "@dh_sheets/app/components/heritage/ancestry-block/selector-modal/ancestry-gallery";
import { AncestriesList } from "@dh_sheets/app/data/ancestry-data";
import { Ancestry } from "@dh_sheets/app/types";

import styles from "../../../selector-modal.module.css";

export interface ModalProps {
    initialAncestryIndex?: number;
    onClose: () => void;
    onSelect: (ancestry: Ancestry) => void;
}

export const AncestryModal = ({initialAncestryIndex, onSelect, onClose }: ModalProps) => {
    const [ancestryIndex, setAncestryIndex] = useState<number>(initialAncestryIndex ?? -1);
    const absorbClick = useCallback(
        (e: React.MouseEvent) => e.stopPropagation(),
        [],
    );

    const onSubmit = useCallback(() => {
        onSelect(AncestriesList[ancestryIndex]);
    }, [onSelect, ancestryIndex]);

    return (
        <div onClick={onClose} className={styles.modalContainer}>
            <div
                onClick={absorbClick}
                className={classNames(styles.modal, styles.short)}
            >
                <button className={styles.closeButton} onClick={onClose}>
                    Close
                </button>
                <div className={styles.selectorTitle}>Set Ancestry</div>

                <AncestryGallery
                    updateSelection={setAncestryIndex}
                    selectedIndex={ancestryIndex}
                />

                <div className={styles.actionButtons}>
                    <button disabled={ancestryIndex < 0} onClick={onSubmit}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};
