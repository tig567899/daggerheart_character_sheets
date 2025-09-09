import classNames from "classnames";
import { useCallback, useState } from "react";

import { ArmorTable } from "@dh_sheets/app/components/armor-block/selector-modal/armor-table";
import { Tier1Armors, Tier2Armors } from "@dh_sheets/app/data/armor-data-store";
import { ArmorData } from "@dh_sheets/app/types";

import styles from "../../selector-modal.module.css";

export interface ArmorProps {
    hide?: boolean;
    onSelect: (id: string, armor: ArmorData) => void;
    onClose: () => void;
}

enum ModalColumn {
    WEAPON_SELECTION,
    CUSTOM_WEAPON,
}

export const ArmorSelectorModal = ({ hide, onSelect, onClose }: ArmorProps) => {
    const [columnSelected, setColumnSelected] = useState<ModalColumn>(
        ModalColumn.WEAPON_SELECTION,
    );

    const setArmorListLayout = useCallback(() => {
        setColumnSelected(ModalColumn.WEAPON_SELECTION);
    }, []);

    const setCustomArmorLayout = useCallback(() => {
        setColumnSelected(ModalColumn.CUSTOM_WEAPON);
    }, []);

    const absorbClick = useCallback(
        (e: React.MouseEvent) => e.stopPropagation(),
        [],
    );
    const onArmorSelect = useCallback((armor: ArmorData) => onSelect('armor', armor), []);

    const armorListLayout = (
        <ArmorTable
            onArmorSelect={onArmorSelect}
            armorsByTier={[Tier1Armors, Tier2Armors]}
        />
    );
    const customArmorLayout = <div>TBD</div>;
    return (
        <div onClick={onClose} className={styles.modalContainer}>
            <div onClick={absorbClick} className={styles.modal}>
                <button className={styles.closeButton} onClick={onClose}>
                    Close
                </button>
                <div className={styles.selectorTitle}>Select Armor</div>
                <div className={styles.columnSelector}>
                    <div
                        className={classNames(styles.columnSelectorTitle, {
                            [styles.selected]: columnSelected === 0,
                        })}
                        onClick={setArmorListLayout}
                    >
                        Armor List
                    </div>
                    <div
                        className={classNames(styles.columnSelectorTitle, {
                            [styles.selected]: columnSelected === 1,
                        })}
                        onClick={setCustomArmorLayout}
                    >
                        Custom Armor
                    </div>
                </div>
                {columnSelected === ModalColumn.WEAPON_SELECTION
                    ? armorListLayout
                    : customArmorLayout}
            </div>
        </div>
    );
};
