import classNames from "classnames";
import { useCallback } from "react";

import styles from "./framed-stat.module.css";

export interface FramedStatProps {
    value: number | string;
    label?: string;
    small?: boolean;
    usePlus?: boolean;
    onChange?: (name: string, value: number) => void;
}

export const FixedFramedStat = ({
    usePlus,
    value,
    label,
    small,
}: FramedStatProps) => {
    return (
        <div className={styles.framedStatContainer}>
            <div
                className={classNames(styles.statDisplay, {
                    [styles.displaySmall]: small,
                })}
            >
                {`${
                    usePlus && typeof value === "number" && value > 0 ? "+" : ""
                }${value}`}
            </div>{" "}
            {label}
        </div>
    );
};

export const AdjustableFramedStat = ({
    value,
    label,
    small,
    usePlus,
    onChange,
}: FramedStatProps) => {
    const onAdjustUp = useCallback(() => {
        if (typeof value === "string" || !label) {
            return;
        }
        onChange?.(label, value + 1);
    }, [value]);

    const onAdjustDown = useCallback(() => {
        if (typeof value === "string" || !label) {
            return;
        }
        onChange?.(label, value - 1);
    }, [value]);
    return (
        <div className={styles.adjustableStatContainer}>
            <FixedFramedStat
                value={value}
                label={label}
                small={small}
                usePlus={usePlus}
            ></FixedFramedStat>
            <div className={styles.adjustableStatButtons}>
                <button onClick={onAdjustUp}>Up</button>
                <button onClick={onAdjustDown}>Down</button>
            </div>
        </div>
    );
};
