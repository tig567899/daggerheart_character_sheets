import { IconSize } from "@dh_sheets/app/constants";

import styles from "./icon.module.css";

export interface IconProps {
    className?: string;
    size?: IconSize;
}

export const PlusIcon = ({
    className,
    size = IconSize.MEDIUM,
}: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 304 384"
            className={className}
        >
            <path
                className={styles.pathFill}
                d="M299 213H171v128h-43V213H0v-42h128V43h43v128h128v42z"
            />
        </svg>
    );
};
