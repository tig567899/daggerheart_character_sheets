import { WeaponData } from '@dh_sheets/app/types';

import styles from '../../selector-modal.module.css';

export interface ListProps {
    title: string;
    subtitle?: string;
    weapons: WeaponData[];
    onWeaponSelect: (weapon: WeaponData) => void;
}

export const WeaponList = ({
    title,
    subtitle,
    weapons,
    onWeaponSelect,
}: ListProps) => {
    return (
        <div className={styles.tableContainer}>
            {title}
            {subtitle ? <i>{subtitle}</i> : null}
            <table className={styles.table}>
                <thead className={styles.tableHeader}>
                    <tr>
                        <th>Name</th>
                        <th>Trait</th>
                        <th>Range</th>
                        <th>Damage</th>
                        <th>Burden</th>
                        <th>Features</th>
                    </tr>
                </thead>
                <tbody>
                    {weapons.map((weapon) => {
                        return (
                            <tr
                                className={styles.row}
                                key={weapon.name}
                                onClick={() => onWeaponSelect(weapon)}
                            >
                                <td>{weapon.name}</td>
                                <td>{weapon.trait}</td>
                                <td>{weapon.range}</td>
                                <td>
                                    {weapon.dice}
                                    {weapon.modifier
                                        ? `+${weapon.modifier}`
                                        : null}{' '}
                                    {weapon.damageType}
                                </td>
                                <td>{weapon.burden}</td>
                                <td className={styles.featureCell}>
                                    {weapon.features.map((feature, index) => {
                                        return (
                                            <div
                                                key={`${weapon.name}-feature-${index}`}
                                            >
                                                <strong>{feature.name}</strong>:{' '}
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
