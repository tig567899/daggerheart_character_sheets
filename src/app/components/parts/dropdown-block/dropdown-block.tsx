import classNames from "classnames";
import { PropsWithChildren, useCallback, useState } from "react";

import chevronRight from "@icons/chevron-right.svg";

import styles from "./dropdown-block.module.css";

interface DropdownProps extends PropsWithChildren {
    title: string;
    startCollapsed?: boolean;
}

export const DropdownBlock = ({
    title,
    startCollapsed,
    children,
}: DropdownProps) => {
    const [collapsed, setCollapsed] = useState(startCollapsed);

    const onToggleCollapsed = useCallback(
        () => setCollapsed(!collapsed),
        [collapsed],
    );

    const image = chevronRight;

    return (
        <div className={styles.container}>
            <div className={styles.dropdownParent} onClick={onToggleCollapsed}>
                {title}
                <img
                    className={classNames(styles.expandIndicator, {
                        [styles.expandIndicatorCollapsed]: !collapsed,
                    })}
                    src={chevronRight.src}
                    alt={collapsed ? "expand" : "collapse"}
                ></img>
            </div>
            {collapsed ? null : children}
        </div>
    );
};
