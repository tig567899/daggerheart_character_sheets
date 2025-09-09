import { ArmorList } from "@dh_sheets/app/components/armor-block/selector-modal/armor-list";
import { ArmorData } from "@dh_sheets/app/types";

import styles from "../../selector-modal.module.css";

interface Props {
    armorsByTier: ArmorData[][];
    onArmorSelect: (armor: ArmorData) => void;
}

export const ArmorTable = ({ armorsByTier, onArmorSelect }: Props) => {
    return (
        <div className={styles.tableListContainer}>
            <ArmorList
                title="Tier 1"
                armors={armorsByTier[0]}
                onArmorSelect={onArmorSelect}
            />
            <ArmorList
                title="Tier 2"
                armors={armorsByTier[1]}
                onArmorSelect={onArmorSelect}
            />
        </div>
    );
};
