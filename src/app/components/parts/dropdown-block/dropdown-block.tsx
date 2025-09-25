import classNames from "classnames";
import { PropsWithChildren, useCallback, useState } from "react";

import { UpChevron } from "@icons/up-chevron";

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

    return (
        <div className={styles.container}>
            <div className={styles.dropdownParent} onClick={onToggleCollapsed}>
                {title}
                <UpChevron
                    className={classNames(styles.expandIndicator, {
                        [styles.expandIndicatorCollapsed]: !collapsed,
                    })}
                    aria-label={collapsed ? "expand" : "collapse"}
                />
            </div>
            {collapsed ? null : children}
    </div>
    );
};
