import classNames from "classnames";
import { useCallback } from "react";

import styles from "./pill-toggle.module.css";

export enum FillState {
    UNFILLED,
    PREVIEW_UNFILLED,
    PREVIEW_FILLED,
    FILLED,
}

export interface ToggleProps {
    categoryName?: string;
    pillKey: number;
    filled: FillState;
    currentValue: number;
    onToggle: (pillNumber: number) => void;
    disabled?: boolean;
    round?: boolean;
    onMouseEnter?: (id: number) => void;
    onMouseLeave?: () => void;
}

export const PillToggle = ({
    categoryName,
    pillKey,
    filled,
    currentValue,
    onToggle,
    disabled,
    round,
    onMouseEnter,
    onMouseLeave,
}: ToggleProps) => {
    const onPillClick = useCallback(() => {
        if (disabled) {
            return;
        }
        if (!filled || pillKey !== currentValue) onToggle(pillKey + 1);
        else onToggle(pillKey);
    }, [filled, currentValue, onToggle, pillKey, disabled]);

    const onHover = useCallback(() => {
        onMouseEnter?.(pillKey);
    }, [onMouseEnter, pillKey]);

    const onUnhover = useCallback(() => {
        onMouseLeave?.();
    }, [onMouseLeave]);
    return (
        <div
            className={styles.pillContainer}
            onClick={onPillClick}
            onMouseEnter={onHover}
            onMouseLeave={onUnhover}
        >
            <div
                className={classNames(styles.pill, {
                    [styles.filledPill]: filled === FillState.FILLED,
                    [styles.previewFilled]: filled === FillState.PREVIEW_FILLED,
                    [styles.previewUnfilled]:
                        filled === FillState.PREVIEW_UNFILLED,
                    [styles.disabled]: disabled,
                    [styles.round]: round,
                })}
                key={`fillable-${categoryName}-${pillKey}`}
            >
                {disabled ? <div className={styles.crossOut}></div> : null}
            </div>
        </div>
    );
};
