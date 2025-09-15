import { WeaponData } from '@dh_sheets/app/types';
import { LabeledDisplayBox } from '@dh_sheets/app/components/parts/labeled-display-box/labeled-display-box';

import styles from './weapons-block.module.css';

export interface WeaponProps {
    categoryName: string; // Primary, Secondary, Inventory, etc.
    weapon: WeaponData;
    onEdit: () => void;
    onRemove: () => void;
}

export const WeaponInfoLayout = ({
    categoryName,
    weapon,
    onEdit,
    onRemove,
}: WeaponProps) => {
    const modifierText = weapon.modifier ? `+${weapon.modifier}` : '';
    return (
        <div className={styles.weaponInfoLayout}>
            <div className={styles.weaponInfoCategory}>
                {categoryName}
                <button onClick={onRemove} className={styles.removeWeapon}>
                    Remove
                </button>
                <button onClick={onEdit} className={styles.changeWeapon}>
                    Change
                </button>
            </div>
            <div className={styles.weaponInfoDisplay}>
                <LabeledDisplayBox label="Name" contents={weapon.name} />
                <div className={styles.divider}></div>
                <LabeledDisplayBox label="Trait" contents={weapon.trait} />
                <div className={styles.divider}></div>

                <LabeledDisplayBox label="Range" contents={weapon.range} />
                <div className={styles.divider}></div>

                <LabeledDisplayBox
                    label="Damage"
                    contents={`${weapon.dice}${modifierText} ${weapon.damageType}`}
                />
            </div>
            {weapon.features.length ? (
                <div className={styles.featureBox}>
                    Additional Features:
                    {weapon.features.map((feature, index) => {
                        return (
                            <div key={`${weapon.name}-display-feature-${index}`} className={styles.weaponFeature}>
                                <b>{feature.name}</b>: {feature.description}
                            </div>
                        );
                    })}
                </div>
            ) : null}
        </div>
    );
};
