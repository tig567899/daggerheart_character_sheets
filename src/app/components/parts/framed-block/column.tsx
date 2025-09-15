import classNames from "classnames";
import React, { PropsWithChildren } from "react";

import styles from "./framed-block.module.css";

interface ColumnProps extends PropsWithChildren {
    fullWidth?: boolean;
}

export const LayoutColumn = ({ fullWidth, children }: ColumnProps) => {
    return (
        <div
            className={classNames(styles.columnStyling, {
                [styles.fullWidthColumn]: fullWidth,
            })}
        >
            {children}
        </div>
    );
};
