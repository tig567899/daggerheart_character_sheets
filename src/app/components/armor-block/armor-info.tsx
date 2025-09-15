import { LabeledDisplayBox } from "@dh_sheets/app/components/parts/labeled-display-box/labeled-display-box";
import { ArmorData } from "@dh_sheets/app/types";

import styles from "./armor-block.module.css";

export interface ArmorProps {
    armor: ArmorData;
    onEdit: () => void;
    onRemove: () => void;
}

export const ArmorInfoLayout = ({ armor, onEdit, onRemove }: ArmorProps) => {
    return (
        <div className={styles.infoLayout}>
            <div className={styles.infoCategory}>
                <button onClick={onRemove} className={styles.removeArmor}>
                    Remove
                </button>
                <button onClick={onEdit} className={styles.changeArmor}>
                    Change
                </button>
            </div>
            <div className={styles.infoDisplay}>
                <LabeledDisplayBox label="Name" contents={armor.name} />
                <div className={styles.divider}></div>

                <LabeledDisplayBox
                    label="Base Thresholds"
                    contents={`${armor.majorThreshold}/${armor.severeThreshold}`}
                />
                <div className={styles.divider}></div>

                <LabeledDisplayBox
                    label="Base Score"
                    contents={`${armor.score}`}
                />
            </div>
            {armor.features.length ? (
                <div className={styles.featureBox}>
                    Additional Features:
                    {armor.features.map((feature, index) => {
                        return (
                            <div
                                key={`${armor.name}-display-feature-${index}`}
                                className={styles.feature}
                            >
                                <b>{feature.name}</b>: {feature.description} {feature.modifiers ? '(Automatic)' : null}
                            </div>
                        );
                    })}
                </div>
            ) : null}
        </div>
    );
};
