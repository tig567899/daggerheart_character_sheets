import { useCallback, useContext, useState } from "react";

import { BaseModal } from "@dh_sheets/app/components/parts/modal/base-modal";
import { SubclassSelection } from "@dh_sheets/app/components/subclass-block/subclass-block";
import { SubclassPicker } from "@dh_sheets/app/components/subclass-block/subclass-picker";
import { PageContext } from "@dh_sheets/app/context";

export interface ModalProps {
    initialSubclassIndex?: number;
    onClose: () => void;
    onSelect: (which: number) => void;
    whichClass: string;
}

export const SubclassModal = ({
    initialSubclassIndex,
    onClose,
    onSelect,
    whichClass,
}: ModalProps) => {
    const pageContext = useContext(PageContext);
    const [subclassIndex, setSubclassIndex] = useState<number | undefined>(
        initialSubclassIndex,
    );

    const classIndex = whichClass === SubclassSelection.PRIMARY ? 0 : 1;

    const subClassUnchosen = subclassIndex === undefined;

    const onSubmit = useCallback(() => {
        if (!subClassUnchosen) {
            onSelect(subclassIndex);
        }
    }, [subclassIndex, onSelect, subClassUnchosen]);

    return (
        <BaseModal
            title="Set Subclass"
            disableSubmit={subClassUnchosen}
            short={!pageContext.limitedWidth}
            onSelect={onSubmit}
            onClose={onClose}
            submitLabel="Select"
        >
            <SubclassPicker
                updateSelection={setSubclassIndex}
                selectedIndex={subclassIndex}
                classIndex={classIndex}
            />
        </BaseModal>
    );
};
