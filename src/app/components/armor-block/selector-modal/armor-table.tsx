import { DataTable } from "@dh_sheets/app/components/parts/data-table/data-table";
import { DataTableContainer } from "@dh_sheets/app/components/parts/data-table/data-table-container";
import { DropdownBlock } from "@dh_sheets/app/components/parts/dropdown-block/dropdown-block";
import { ArmorData } from "@dh_sheets/app/types";

interface Props {
    armorsByTier: ArmorData[][];
    onArmorSelect: (armor: ArmorData) => void;
}

function armorIdentifier(armor: ArmorData) {
    return armor.name;
}

const ArmorDisplayHandlers = [
    {
        category: "Name",
        accessor: (armor: ArmorData) => armor.name,
    },
    {
        category: "Base Thresholds",
        accessor: (armor: ArmorData) =>
            `${armor.majorThreshold}/${armor.severeThreshold}`,
    },
    {
        category: "Base Score",
        accessor: (armor: ArmorData) => armor.score,
    },
    {
        category: "Features",
        extendedCell: true,
        accessor: (armor: ArmorData) => {
            return (
                <div>
                    {armor.features.map((feature, index) => {
                        return (
                            <div key={`${armor.name}-feature-${index}`}>
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

export const ArmorTable = ({ armorsByTier, onArmorSelect }: Props) => {
    return (
        <DataTableContainer>
            <DropdownBlock title={"Tier 1 (Level 1)"}>
                <DataTable<ArmorData>
                    data={armorsByTier[0]}
                    getIdentifier={armorIdentifier}
                    onSelect={onArmorSelect}
                    dataHandlers={ArmorDisplayHandlers}
                />
            </DropdownBlock>
            <DropdownBlock title={"Tier 2 (Levels 2 - 4)"}>
                <DataTable<ArmorData>
                    data={armorsByTier[1]}
                    getIdentifier={armorIdentifier}
                    onSelect={onArmorSelect}
                    dataHandlers={ArmorDisplayHandlers}
                />
            </DropdownBlock>
            <DropdownBlock title={"Tier 3 (Levels 5 - 7)"}>
                <DataTable<ArmorData>
                    data={armorsByTier[2]}
                    getIdentifier={armorIdentifier}
                    onSelect={onArmorSelect}
                    dataHandlers={ArmorDisplayHandlers}
                />
            </DropdownBlock>
            <DropdownBlock title={"Tier 4 (Levels 8 - 10)"}>
                <DataTable<ArmorData>
                    data={armorsByTier[3]}
                    getIdentifier={armorIdentifier}
                    onSelect={onArmorSelect}
                    dataHandlers={ArmorDisplayHandlers}
                />
            </DropdownBlock>
        </DataTableContainer>
    );
};
