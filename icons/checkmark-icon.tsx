import { IconSize } from "@dh_sheets/app/constants";

import styles from "./icon.module.css";

export interface IconProps {
    className?: string;
    size?: IconSize;
}

export const CheckmarkIcon = ({
    className,
    size = IconSize.MEDIUM,
}: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 376 384"
            className={className}
        >
            <path
                className={styles.pathFill}
                d="M119 282L346 55l29 30l-256 256L0 222l30-30z"
            />
        </svg>
    );
};
