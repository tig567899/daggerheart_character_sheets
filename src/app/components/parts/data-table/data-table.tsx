import { JSX } from "react";

import styles from "./data-table.module.css";

interface ListProps<T> {
    title?: string;
    subtitle?: string;
    data: T[];
    getIdentifier: (item: T) => string;
    onSelect: (selectedItem: T) => void;
    dataHandlers: {
        category: string;
        accessor: (item: T) => number | string | JSX.Element;
        extendedCell?: boolean;
    }[];
}

export function DataTable<T>({
    title,
    subtitle,
    data,
    getIdentifier,
    onSelect,
    dataHandlers,
}: ListProps<T>) {
    return (
        <div className={styles.tableContainer}>
            {title}
            {subtitle ? <i>{subtitle}</i> : null}
            <table className={styles.table}>
                <thead className={styles.tableHeader}>
                    <tr>
                        {dataHandlers.map((handler) => (
                            <th key={`${handler.category}-heading`}>
                                {handler.category}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => {
                        return (
                            <tr
                                className={styles.row}
                                key={getIdentifier(row)}
                                onClick={() => onSelect(row)}
                            >
                                {dataHandlers.map((handler) => (
                                    <td
                                        key={`${handler.category}-data`}
                                        className={
                                            handler.extendedCell
                                                ? styles.featureCell
                                                : undefined
                                        }
                                    >
                                        {handler.accessor(row)}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
