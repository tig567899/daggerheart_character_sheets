import { PropsWithChildren } from "react"

import styles from "./data-table.module.css";

export const DataTableContainer = ({children}: PropsWithChildren) => {
    return <div className={styles.tableListContainer}>{children}</div>
}