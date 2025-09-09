import { ArmorData } from "@dh_sheets/app/types";

import styles from "../../selector-modal.module.css";

export interface ListProps {
    title: string;
    subtitle?: string;
    armors: ArmorData[];
    onArmorSelect: (armor: ArmorData) => void;
}

export const ArmorList = ({
    title,
    subtitle,
    armors,
    onArmorSelect,
}: ListProps) => {
    return (
        <div className={styles.tableContainer}>
            {title}
            {subtitle ? <i>{subtitle}</i> : null}
            <table className={styles.table}>
                <thead className={styles.tableHeader}>
                    <tr>
                        <th>Name</th>
                        <th>Base Thresholds</th>
                        <th>Base Score</th>
                        <th>Features</th>
                    </tr>
                </thead>
                <tbody>
                    {armors.map((armor) => {
                        return (
                            <tr
                                className={styles.row}
                                key={armor.name}
                                onClick={() => onArmorSelect(armor)}
                            >
                                <td>{armor.name}</td>
                                <td>{`${armor.majorThreshold}/${armor.severeThreshold}`}</td>
                                <td>{armor.score}</td>
                                <td className={styles.featureCell}>
                                    {armor.features.map((feature, index) => {
                                        return (
                                            <div
                                                key={`${armor.name}-feature-${index}`}
                                            >
                                                <strong>{feature.name}</strong>:{" "}
                                                {feature.description}
                                            </div>
                                        );
                                    })}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
