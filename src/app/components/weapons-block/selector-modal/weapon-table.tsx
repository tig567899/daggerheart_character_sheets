import { DataTable } from "@dh_sheets/app/components/parts/data-table/data-table";
import { DataTableContainer } from "@dh_sheets/app/components/parts/data-table/data-table-container";
import { DropdownBlock } from "@dh_sheets/app/components/parts/dropdown-block/dropdown-block";
import { WeaponTier } from "@dh_sheets/app/data/weapon-data-store";
import { WeaponData } from "@dh_sheets/app/types";

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
}

export const WeaponTable = ({ weapons, onWeaponSelect }: Props) => {
    return (
        <DataTableContainer>
            <DropdownBlock title={"Tier 1 (Level 1)"}>
                <DataTable<WeaponData>
                    title="Physical Weapons"
                    data={weapons[0].physical}
                    getIdentifier={weaponIdentifier}
                    onSelect={onWeaponSelect}
                    dataHandlers={WeaponDisplayHandlers}
                />
                <DataTable<WeaponData>
                    title="Magical Weapons"
                    data={weapons[0].magical}
                    getIdentifier={weaponIdentifier}
                    onSelect={onWeaponSelect}
                    dataHandlers={WeaponDisplayHandlers}
                />
            </DropdownBlock>
            <DropdownBlock title={"Tier 2 (Levels 2 - 4)"}>
                <DataTable<WeaponData>
                    title="Physical Weapons"
                    data={weapons[1].physical}
                    getIdentifier={weaponIdentifier}
                    onSelect={onWeaponSelect}
                    dataHandlers={WeaponDisplayHandlers}
                />
                <DataTable<WeaponData>
                    title="Magical Weapons"
                    data={weapons[1].magical}
                    getIdentifier={weaponIdentifier}
                    onSelect={onWeaponSelect}
                    dataHandlers={WeaponDisplayHandlers}
                />
            </DropdownBlock>
            <DropdownBlock title={"Tier 3 (Levels 5 - 7)"}>
                <DataTable<WeaponData>
                    title="Physical Weapons"
                    data={weapons[2].physical}
                    getIdentifier={weaponIdentifier}
                    onSelect={onWeaponSelect}
                    dataHandlers={WeaponDisplayHandlers}
                />
                <DataTable<WeaponData>
                    title="Magical Weapons"
                    data={weapons[2].magical}
                    getIdentifier={weaponIdentifier}
                    onSelect={onWeaponSelect}
                    dataHandlers={WeaponDisplayHandlers}
                />
            </DropdownBlock>
            <DropdownBlock title={"Tier 4 (Levels 8 - 10)"}>
                <DataTable<WeaponData>
                    title="Physical Weapons"
                    data={weapons[3].physical}
                    getIdentifier={weaponIdentifier}
                    onSelect={onWeaponSelect}
                    dataHandlers={WeaponDisplayHandlers}
                />
                <DataTable<WeaponData>
                    title="Magical Weapons"
                    data={weapons[3].magical}
                    getIdentifier={weaponIdentifier}
                    onSelect={onWeaponSelect}
                    dataHandlers={WeaponDisplayHandlers}
                />
            </DropdownBlock>
        </DataTableContainer>
    );
};
