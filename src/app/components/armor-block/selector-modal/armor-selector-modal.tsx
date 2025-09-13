import { useCallback, useMemo } from "react";

import { ArmorTable } from "@dh_sheets/app/components/armor-block/selector-modal/armor-table";
import { ColumnModal } from "@dh_sheets/app/components/parts/modal/base-modal";
import { Tier1Armors, Tier2Armors, Tier3Armors, Tier4Armors } from "@dh_sheets/app/data/armor-data-store";
import { ArmorData } from "@dh_sheets/app/types";

export interface ArmorProps {
    onSelect: (id: string, armor: ArmorData) => void;
    onClose: () => void;
}

export const ArmorSelectorModal = ({ onSelect, onClose }: ArmorProps) => {
    const onArmorSelect = useCallback(
        (armor: ArmorData) => onSelect("armor", armor),
        [onSelect],
    );

    const renderArmorListLayout = useCallback(
        () => (
            <ArmorTable
                onArmorSelect={onArmorSelect}
                armorsByTier={[Tier1Armors, Tier2Armors, Tier3Armors, Tier4Armors]}
            />
        ),
        [onArmorSelect],
    );
    const renderCustomArmorLayout = () => <div>TBD</div>;

    const columns = useMemo(
        () => [
            {
                name: "Armor List",
                render: renderArmorListLayout,
            },
            {
                name: "Custom Armor",
                render: renderCustomArmorLayout,
            },
        ],
        [],
    );

    return (
        <ColumnModal
            title="Select Armor"
            onClose={onClose}
            columns={columns}
        />
    );
};
