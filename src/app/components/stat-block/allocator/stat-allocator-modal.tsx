import { useCallback, useRef, useState } from "react";

import { BaseModal } from "@dh_sheets/app/components/parts/modal/base-modal";
import { StatAllocator } from "@dh_sheets/app/components/stat-block/allocator/stat-allocator";

export const INITIAL_MOD_PLUS_2 = "initial_mod_plus_2";
export const INIIAL_MOD_PLUS_1_1 = "initial_mod_plus_1_1";
export const INIIAL_MOD_PLUS_1_2 = "initial_mod_plus_1_2";
export const INIIAL_MOD_MINUS_1 = "initial_mod_minus_1";

export interface ModalProps {
    onClose: () => void;
}

export const StatAllocatorModal = ({ onClose }: ModalProps) => {
    const [allocatedNumber, setAllocatedNumber] = useState(0);
    const allocatorRef = useRef<any>(null);

    const onSubmit = useCallback(() => {
        allocatorRef.current?.onSubmit();
        onClose();
    }, [onClose, allocatorRef]);

    return (
        <BaseModal
            title="Allocate Initial Modifiers"
            disableSubmit={allocatedNumber !== 4}
            short
            onSelect={onSubmit}
            onClose={onClose}
        >
            <StatAllocator
                ref={allocatorRef}
                onAllocatedNumberChanged={setAllocatedNumber}
            />
        </BaseModal>
    );
};
