import { IconSize } from "@dh_sheets/app/constants";

import styles from "./icon.module.css";

export interface IconProps {
    className?: string;
    size?: IconSize;
}

export const ClearIcon = ({ className, size = IconSize.MEDIUM }: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            className={className}
        >
            <path
                className={styles.pathFill}
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
            />
        </svg>
    );
};
