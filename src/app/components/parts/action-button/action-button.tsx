import classNames from "classnames";
import { PropsWithChildren } from "react";

import styles from "./action-button.module.css";

interface ButtonProps {
    icon?: string; // Unused for now, implement when I get icons
    className?: string;
    label?: string;
}

export const ActionButton = ({
    icon,
    className,
    label,
    ...others
}: ButtonProps) => {
    return (
        <button
            className={classNames(className, styles.baseButton)}
            {...others}
        >
            {label}
        </button>
    ); // Replace with icon/text determination when I actually implement icons
};
