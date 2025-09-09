import classNames from "classnames";
import { useCallback, useState } from "react";

import { CommunityGallery } from "@dh_sheets/app/components/heritage/community-block/selector-modal/community-gallery";
import { CommunitiesList } from "@dh_sheets/app/data/community-data";
import { Community } from "@dh_sheets/app/types";

import styles from "../../../selector-modal.module.css";

export interface ModalProps {
    initialIndex?: number;
    onClose: () => void;
    onSelect: (community: Community) => void;
}

export const CommunityModal = ({ initialIndex, onSelect, onClose }: ModalProps) => {
    const [communityIndex, setCommunityIndex] = useState<number>(initialIndex ?? -1);
    const absorbClick = useCallback(
        (e: React.MouseEvent) => e.stopPropagation(),
        [],
    );

    const onSubmit = useCallback(() => {
        onSelect(CommunitiesList[communityIndex]);
    }, [onSelect, communityIndex]);

    return (
        <div onClick={onClose} className={styles.modalContainer}>
            <div
                onClick={absorbClick}
                className={classNames(styles.modal, styles.short)}
            >
                <button className={styles.closeButton} onClick={onClose}>
                    Close
                </button>
                <div className={styles.selectorTitle}>Set Community</div>

                <CommunityGallery
                    updateSelection={setCommunityIndex}
                    selectedIndex={communityIndex}
                />

                <div className={styles.actionButtons}>
                    <button disabled={communityIndex < 0} onClick={onSubmit}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};
