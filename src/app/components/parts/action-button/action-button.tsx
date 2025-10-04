import classNames from "classnames";
import { ButtonHTMLAttributes, ReactElement } from "react";

import { IconSize } from "@dh_sheets/app/constants";

import styles from "./action-button.module.css";

export interface ActionButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: ReactElement; // Unused for now, implement when I get icons
    className?: string;
    label: string;
    isIconButton?: boolean;
    size?: IconSize;
    bordered?: boolean;
}

export const ActionButton = ({
    icon,
    className,
    label,
    isIconButton,
    size = IconSize.MEDIUM,
    bordered,
    disabled,
    onClick,
    ...others
}: ActionButtonProps) => {
    return (
        <button
            className={classNames(className, styles.baseButton, {
                [styles.large]: size === IconSize.LARGE,
                [styles.medium]: size === IconSize.MEDIUM,
                [styles.small]: size === IconSize.SMALL,
                [styles.bordered]: bordered,
                [styles.disabled]: disabled,
                [styles.textButton]: !icon,
            })}
            aria-label={`${label}${disabled ? ", disabled" : ""}`}
            onClick={disabled ? undefined : onClick}
            {...others}
        >
            <div className={styles.iconSvg}>{icon}</div>
            {isIconButton ? null : (
                <div
                    className={classNames(styles.buttonLabel, {
                        [styles.labelWithIcon]: !!icon,
                    })}
                >
                    {label}
                </div>
            )}
        </button>
    );
};
