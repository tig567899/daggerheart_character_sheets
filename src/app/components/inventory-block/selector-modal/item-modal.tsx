import { useCallback, useState } from "react";

import { BaseModal } from "@dh_sheets/app/components/parts/modal/base-modal";
import { ItemData } from "@dh_sheets/app/types";

import styles from "../inventory.module.css";

interface ModalProps {
    id: string;
    onClose: () => void;
    onSelect: (id: string, item: ItemData) => void;
    existingData?: ItemData;
}

export const ItemModal = ({
    id,
    onClose,
    onSelect,
    existingData,
}: ModalProps) => {
    const [itemName, setItemName] = useState<string | null>(
        existingData?.name ?? null,
    );
    const [itemDescription, setItemDescription] = useState<string | undefined>(
        existingData?.description,
    );

    const onItemSave = useCallback(() => {
        if (!itemName) return;
        onSelect(id, {
            name: itemName,
            description: itemDescription,
        });
    }, [itemName, itemDescription, id, onSelect]);

    const onSetName = useCallback((event: any) => {
        setItemName(event.target.value);
    }, []);

    const onSetIemDesc = useCallback((event: any) => {
        setItemDescription(event.target.value);
    }, []);

    return (
        <BaseModal
            title="Add inventory item"
            disableSubmit={itemName === null}
            short
            onSelect={onItemSave}
            onClose={onClose}
            submitLabel="Save"
        >
            <div className={styles.inputContainer}>
                <input
                    className={styles.itemName}
                    onInput={onSetName}
                    value={itemName ?? ""}
                    placeholder="Name"
                />
                <textarea
                    value={itemDescription ?? ""}
                    className={styles.itemDescription}
                    onInput={onSetIemDesc}
                    placeholder="Additional info (optional)"
                />
            </div>
        </BaseModal>
    );
};
