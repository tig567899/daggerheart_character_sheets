import { useCallback } from "react";

import { DataTable } from "@dh_sheets/app/components/parts/data-table/data-table";
import { DataTableContainer } from "@dh_sheets/app/components/parts/data-table/data-table-container";
import { DropdownBlock } from "@dh_sheets/app/components/parts/dropdown-block/dropdown-block";
import { WeaponTier } from "@dh_sheets/app/data/weapon-data-store";
import { WeaponData } from "@dh_sheets/app/types";

import styles from '../weapons-block.module.css';

function weaponIdentifier(weapon: WeaponData) {
    return weapon.name;
}

const WeaponDisplayHandlers = [
    {
        category: "Name",
        accessor: (weapon: WeaponData) => weapon.name,
    },
    {
        category: "Trait",
        accessor: (weapon: WeaponData) => weapon.trait,
    },
    {
        category: "Range",
        accessor: (weapon: WeaponData) => weapon.range,
    },
    {
        category: "Damage",
        accessor: (weapon: WeaponData) =>
            `${weapon.dice}${
                weapon.modifier ? `+${weapon.modifier}` : ""
            } ${weapon.damageType}`,
    },
    {
        category: "Burden",
        accessor: (weapon: WeaponData) => weapon.burden,
    },
    {
        category: "Features",
        extendedCell: true,
        accessor: (weapon: WeaponData) => {
            return (
                <div>
                    {weapon.features.map((feature, index) => {
                        return (
                            <div key={`${weapon.name}-feature-${index}`}>
                                <strong>{feature.name}</strong>:{" "}
                                {feature.description}
                            </div>
                        );
                    })}
                </div>
            );
        },
    },
];

interface Props {
    weapons: WeaponTier[];
    onWeaponSelect: (weapon: WeaponData) => void;
    isSecondary?: boolean;
}

export const WeaponTable = ({
    weapons,
    onWeaponSelect,
    isSecondary,
}: Props) => {
    const renderPrimaryWeaponDataFromWeaponTier = useCallback(
        (tier: WeaponTier, tierTitle: string) => {
            return (
                <DropdownBlock title={tierTitle} key={`weapon-${tierTitle}`}>
                    <DataTable<WeaponData>
                        title="Physical Weapons"
                        data={tier.physical}
                        getIdentifier={weaponIdentifier}
                        onSelect={onWeaponSelect}
                        dataHandlers={WeaponDisplayHandlers}
                    />
                    <div className={styles.horizontalDivider}></div>
                    <DataTable<WeaponData>
                        title="Magical Weapons"
                        data={tier.magical}
                        getIdentifier={weaponIdentifier}
                        onSelect={onWeaponSelect}
                        dataHandlers={WeaponDisplayHandlers}
                    />
                </DropdownBlock>
            );
        },
        [onWeaponSelect],
    );

    const renderSecondaryWeaponDataFromWeaponTier = useCallback(
        (tier: WeaponTier, tierTitle: string) => {
            return (
                <DropdownBlock title={tierTitle} key={`weapon-${tierTitle}`}>
                    <DataTable<WeaponData>
                        title="Physical Weapons"
                        data={tier.secondary}
                        getIdentifier={weaponIdentifier}
                        onSelect={onWeaponSelect}
                        dataHandlers={WeaponDisplayHandlers}
                    />
                </DropdownBlock>
            );
        },
        [onWeaponSelect],
    );

    const tierTitles = [
        "Tier 1 (Level 1)",
        "Tier 2 (Levels 2 - 4)",
        "Tier 3 (Levels 5 - 7)",
        "Tier 4 (Levels 8 - 10)",
    ];
    return (
        <DataTableContainer>
            {!isSecondary &&
                tierTitles.map((title, index) =>
                    renderPrimaryWeaponDataFromWeaponTier(
                        weapons[index],
                        title,
                    ),
                )}
            {isSecondary &&
                tierTitles.map((title, index) =>
                    renderSecondaryWeaponDataFromWeaponTier(
                        weapons[index],
                        title,
                    ),
                )}
        </DataTableContainer>
    );
};
