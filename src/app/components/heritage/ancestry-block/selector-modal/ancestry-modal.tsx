import { useCallback, useState } from "react";

import { AncestryGallery } from "@dh_sheets/app/components/heritage/ancestry-block/selector-modal/ancestry-gallery";
import { BaseModal } from "@dh_sheets/app/components/parts/modal/base-modal";
import { AncestriesList } from "@dh_sheets/app/data/ancestry-data";
import { Ancestry } from "@dh_sheets/app/types";

export interface ModalProps {
    initialAncestryIndex?: number;
    onClose: () => void;
    onSelect: (ancestry: Ancestry) => void;
}

export const AncestryModal = ({
    initialAncestryIndex,
    onSelect,
    onClose,
}: ModalProps) => {
    const [ancestryIndex, setAncestryIndex] = useState<number>(
        initialAncestryIndex ?? -1,
    );

    const onSubmit = useCallback(() => {
        onSelect(AncestriesList[ancestryIndex]);
    }, [onSelect, ancestryIndex]);

    return (
        <BaseModal
            title="Set Ancestry"
            disableSubmit={ancestryIndex < 0}
            short
            onSelect={onSubmit}
            onClose={onClose}
        >
            <AncestryGallery
                updateSelection={setAncestryIndex}
                selectedIndex={ancestryIndex}
            />
        </BaseModal>
    );
};
