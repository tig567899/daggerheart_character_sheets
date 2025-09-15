import { useCallback, useState } from "react";

import { CommunityGallery } from "@dh_sheets/app/components/heritage/community-block/selector-modal/community-gallery";
import { BaseModal } from "@dh_sheets/app/components/parts/modal/base-modal";
import { CommunitiesList } from "@dh_sheets/app/data/community-data";
import { Community } from "@dh_sheets/app/types";

export interface ModalProps {
    initialIndex?: number;
    onClose: () => void;
    onSelect: (community: Community) => void;
}

export const CommunityModal = ({
    initialIndex,
    onSelect,
    onClose,
}: ModalProps) => {
    const [communityIndex, setCommunityIndex] = useState<number>(
        initialIndex ?? -1,
    );

    const onSubmit = useCallback(() => {
        onSelect(CommunitiesList[communityIndex]);
    }, [onSelect, communityIndex]);

    return (
        <BaseModal
            title="Set Ancestry"
            disableSubmit={communityIndex < 0}
            short
            onSelect={onSubmit}
            onClose={onClose}
        >
            <CommunityGallery
                updateSelection={setCommunityIndex}
                selectedIndex={communityIndex}
            />
        </BaseModal>
    );
};
