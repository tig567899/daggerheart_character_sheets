import classNames from "classnames";
import { useCallback } from "react";

import { PillToggle } from "@dh_sheets/app/components/parts/fillable-resource/pill-toggle";

import styles from "./pill-toggle.module.css";

export interface FillableResourceProps {
    name: string;
    maxValue?: number;
    value?: number;
    onValueChange?: (value: number) => void;
    gridMaxCount?: number;
    fillPhantomToNumber?: number;
}

export const FillableResource = ({
    name,
    maxValue,
    value,
    onValueChange,
    fillPhantomToNumber,
    gridMaxCount,
}: FillableResourceProps) => {
    const resourceInputArray = [];

    const onChangeValue = useCallback(
        (value: number) => {
            onValueChange?.(value);
        },
        [onValueChange],
    );

    const onClear = useCallback(() => {
        onValueChange?.(0);
    }, [onValueChange]);

    if ((!maxValue && !fillPhantomToNumber) || value === undefined) {
        return null;
    }

    const functionalMax = maxValue ?? 0;

    for (let i = 0; i < functionalMax; ++i) {
        resourceInputArray.push(
            <PillToggle
                pillKey={i}
                categoryName={name}
                filled={i < value}
                currentValue={Math.min(value - 1, functionalMax - 1)}
                onToggle={onChangeValue}
            />,
        );
    }

    if (fillPhantomToNumber) {
        for (let i = functionalMax; i < fillPhantomToNumber; ++i) {
            resourceInputArray.push(
                <PillToggle
                    pillKey={i}
                    categoryName={name}
                    filled={false}
                    currentValue={0}
                    onToggle={onChangeValue}
                    disabled
                />,
            );
        }
    }

    return (
        <div
            className={classNames(styles.resourceContainer, {
                [styles.hasGrid]: gridMaxCount,
            })}
        >
            {name.length ? <div className={styles.label}>{name}</div> : null}
            <div
                className={classNames(styles.pillDisplay, {
                    [styles.grid]: gridMaxCount,
                })}
            >
                {...resourceInputArray}
            </div>
            <button onClick={onClear}>Clear</button>
        </div>
    );
};
