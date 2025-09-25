import { IconSize } from "@dh_sheets/app/constants";

import styles from "./icon.module.css";

export interface IconProps {
    className?: string;
    size?: IconSize;
}

export const EditIcon = ({ className, size = IconSize.MEDIUM }: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            className={className}
        >
            <g
                fill="none"
                className={styles.gTag}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            >
                <path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1" />
                <path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3l8.385-8.415zM16 5l3 3" />
            </g>
        </svg>
    );
};
