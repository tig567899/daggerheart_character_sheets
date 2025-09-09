import classNames from "classnames";
import { useCallback, useRef, useState } from "react";

import { StatAllocator } from "@dh_sheets/app/components/stat-row/allocator/stat-allocator";

import styles from "../../selector-modal.module.css";

export const INITIAL_MOD_PLUS_2 = "initial_mod_plus_2";
export const INIIAL_MOD_PLUS_1_1 = "initial_mod_plus_1_1";
export const INIIAL_MOD_PLUS_1_2 = "initial_mod_plus_1_2";
export const INIIAL_MOD_MINUS_1 = "initial_mod_minus_1";

export interface ModalProps {
    show: boolean;
    onClose: () => void;
}

export const StatAllocatorModal = ({ show, onClose }: ModalProps) => {
    const [allocatedNumber, setAllocatedNumber] = useState(0);
    const allocatorRef = useRef<any>(null);
    const absorbClick = useCallback(
        (e: React.MouseEvent) => e.stopPropagation(),
        [],
    );

    const onSubmit = useCallback(() => {
        allocatorRef.current?.onSubmit();
        onClose();
    }, [onClose, allocatorRef]);

    if (!show) {
        return null;
    }
    return (
        <div onClick={onClose} className={styles.modalContainer}>
            <div
                onClick={absorbClick}
                className={classNames(styles.modal, styles.short)}
            >
                <button className={styles.closeButton} onClick={onClose}>
                    Close
                </button>
                <div className={styles.selectorTitle}>
                    Allocate Initial Modifiers
                </div>
                <StatAllocator
                    ref={allocatorRef}
                    onAllocatedNumberChanged={setAllocatedNumber}
                />
                <div className={styles.actionButtons}>
                    <button disabled={allocatedNumber !== 4} onClick={onSubmit}>
                        Submit
                    </button>{" "}
                </div>
            </div>
        </div>
    );
};
