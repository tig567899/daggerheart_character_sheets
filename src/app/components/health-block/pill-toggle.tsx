import classNames from "classnames";
import { useCallback } from "react";

import styles from "./health-block.module.css";

export interface ToggleProps {
    categoryName?: string;
    pillKey: number;
    filled: boolean;
    currentValue: number;
    onToggle: (pillNumber: number) => void;
}

export const PillToggle = ({
    categoryName,
    pillKey,
    filled,
    currentValue,
    onToggle,
}: ToggleProps) => {
    const onPillClick = useCallback(() => {
        if (!filled || pillKey !== currentValue) onToggle(pillKey + 1);
        else onToggle(pillKey);
    }, [filled, currentValue]);
    return (
        <div
            className={classNames(styles.pill, {
                [styles.filledPill]: filled,
            })}
            key={`fillable-${categoryName}-${pillKey}`}
            onClick={onPillClick}
        />
    );
};
