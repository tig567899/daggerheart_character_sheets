import { DataTable } from "@dh_sheets/app/components/parts/data-table/data-table";
import { DataTableContainer } from "@dh_sheets/app/components/parts/data-table/data-table-container";
import { WeaponTier } from "@dh_sheets/app/data/weapon-data-store";
import { WeaponData } from "@dh_sheets/app/types";

import styles from "../../selector-modal.module.css";

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
    weapons: WeaponTier;
    onWeaponSelect: (weapon: WeaponData) => void;
}

export const WeaponTable = ({ weapons, onWeaponSelect }: Props) => {
    return (
        <DataTableContainer>
            <DataTable<WeaponData>
                title="Physical Weapons"
                data={weapons.physical}
                getIdentifier={weaponIdentifier}
                onSelect={onWeaponSelect}
                dataHandlers={WeaponDisplayHandlers}
            />
        </DataTableContainer>
    );
    /*
    return (
        <div className={styles.tableListContainer}>
            <WeaponList
                title="Physical Weapons"
                weapons={weapons.physical}
                onWeaponSelect={onWeaponSelect}
            />
            <WeaponList
                title="Magic Weapons"
                subtitle="All magic weapons require a Spellcast trait"
                weapons={weapons.magical}
                onWeaponSelect={onWeaponSelect}
            />
        </div>
    );
    */
};
