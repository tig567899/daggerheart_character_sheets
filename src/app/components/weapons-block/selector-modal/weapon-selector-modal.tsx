import { useCallback, useMemo } from "react";

import {
    ColumnModal,
} from "@dh_sheets/app/components/parts/modal/base-modal";
import { WeaponTable } from "@dh_sheets/app/components/weapons-block/selector-modal/weapon-table";
import {
    Tier1PrimaryWeapons,
    Tier2PrimaryWeaons,
    Tier3PrimaryWeapons,
    Tier4PrimaryWeapons,
} from "@dh_sheets/app/data/weapon-data-store";
import { WeaponData } from "@dh_sheets/app/types";
import { WeaponSlot } from "@dh_sheets/app/components/weapons-block/weapons-block";

export interface WeaponProps {
    id: string;
    onSelect: (id: string, weapon: WeaponData) => void;
    onClose: () => void;
}

export const WeaponSelectorModal = ({ id, onSelect, onClose }: WeaponProps) => {
    // Use this later
    // const secondary = id === WeaponSlot.SECONDARY;
    const onWeaponSelect = useCallback(
        (weapon: WeaponData) => onSelect(id, weapon),
        [id, onSelect],
    );

    const renderWeaponLayout = useCallback(
        () => (
            <WeaponTable
                onWeaponSelect={onWeaponSelect}
                weapons={[
                    Tier1PrimaryWeapons,
                    Tier2PrimaryWeaons,
                    Tier3PrimaryWeapons,
                    Tier4PrimaryWeapons,
                ]}
                isSecondary={id === WeaponSlot.SECONDARY}
            />
        ),
        [onWeaponSelect, id],
    );
    const renderCustomWeaponLayout = useCallback(() => <div>TBD</div>, []);

    const columns = useMemo(
        () => [
            {
                name: "Weapon List",
                render: renderWeaponLayout,
            },
            {
                name: "Custom Weapon",
                render: renderCustomWeaponLayout,
            },
        ],
        [renderWeaponLayout, renderCustomWeaponLayout],
    );

    return (
        <ColumnModal
            title="Select Weapon"
            onClose={onClose}
            columns={columns}
        />
    );
};
