import classNames from "classnames";
import { useCallback } from "react";

import styles from "./pill-toggle.module.css";

export interface ToggleProps {
    categoryName?: string;
    pillKey: number;
    filled: boolean;
    currentValue: number;
    onToggle: (pillNumber: number) => void;
    disabled?: boolean;
}

export const PillToggle = ({
    categoryName,
    pillKey,
    filled,
    currentValue,
    onToggle,
    disabled,
}: ToggleProps) => {
    const onPillClick = useCallback(() => {
        if (disabled) {
            return;
        }
        if (!filled || pillKey !== currentValue) onToggle(pillKey + 1);
        else onToggle(pillKey);
    }, [filled, currentValue, onToggle, pillKey, disabled]);
    return (
        <div
            className={classNames(styles.pill, {
                [styles.filledPill]: filled,
                [styles.disabled]: disabled,
            })}
            key={`fillable-${categoryName}-${pillKey}`}
            onClick={onPillClick}
        >
            {disabled ? <div className={styles.crossOut}></div> : null}
        </div>
    );
};
