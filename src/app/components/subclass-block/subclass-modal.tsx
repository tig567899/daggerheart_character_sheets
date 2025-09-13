import { useCallback, useState } from "react";

import { BaseModal } from "@dh_sheets/app/components/parts/modal/base-modal";
import { SubclassPicker } from "@dh_sheets/app/components/subclass-block/subclass-picker";

export interface ModalProps {
    initialSubclassIndex?: number;
    onClose: () => void;
    onSelect: (which: number) => void;
}

export const SubclassModal = ({
    initialSubclassIndex,
    onClose,
    onSelect,
}: ModalProps) => {
    const [subclassIndex, setSubclassIndex] = useState<number | undefined>(
        initialSubclassIndex,
    );

    const subClassUnchosen = subclassIndex === undefined;

    const onSubmit = useCallback(() => {
        if (!subClassUnchosen) {
            onSelect(subclassIndex);
        }
    }, [subclassIndex]);

    return (
        <BaseModal
            title="Set Subclass"
            disableSubmit={subClassUnchosen}
            short
            onSelect={onSubmit}
            onClose={onClose}
        >
            <SubclassPicker
                updateSelection={setSubclassIndex}
                selectedIndex={subclassIndex}
            />
        </BaseModal>
    );
};
