import classNames from "classnames";
import { useCallback, useMemo, useState } from "react";

import { ActionButton } from "@dh_sheets/app/components/parts/action-button/action-button";
import {
    FillState,
    PillToggle,
} from "@dh_sheets/app/components/parts/fillable-resource/pill-toggle";

import { ClearIcon } from "@icons/clear-icon";

import styles from "./pill-toggle.module.css";

export interface FillableResourceProps {
    name: string;
    maxValue?: number;
    value?: number;
    onValueChange?: (value: number) => void;
    gridMaxCount?: number;
    fillPhantomToNumber?: number;
    small?: boolean;
}

export const FillableResource = ({
    name,
    maxValue,
    value,
    onValueChange,
    fillPhantomToNumber,
    gridMaxCount,
    small,
}: FillableResourceProps) => {
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);
    const resourceInputArray = [];

    const onChangeValue = useCallback(
        (value: number) => {
            onValueChange?.(value);
            setHoveredItem(null);
        },
        [onValueChange],
    );

    const onClear = useCallback(() => {
        onValueChange?.(0);
    }, [onValueChange]);

    const onItemMouseOver = useCallback((itemKey: number) => {
        setHoveredItem(itemKey);
    }, []);

    const onItemMouseLeave = useCallback(() => {
        setHoveredItem(null);
    }, []);

    const clearIcon = useMemo(() => <ClearIcon />, []);

    if ((!maxValue && !fillPhantomToNumber) || value === undefined) {
        return null;
    }

    const functionalMax = maxValue ?? 0;

    const unhovered = hoveredItem === null;
    const fillingMore = !unhovered && hoveredItem >= value;

    for (let i = 0; i < functionalMax; ++i) {
        let fillState = FillState.UNFILLED;
        const filled = i < value;
        const wouldFill =
            hoveredItem && i < hoveredItem || (i === hoveredItem && value !== hoveredItem + 1);
        if ((wouldFill || fillingMore || unhovered) && filled) {
            // Not hovered or filling guaranteed spaces, filled
            fillState = FillState.FILLED;
        } else if (unhovered) {
            // Not hovered, unfilled
            fillState = FillState.UNFILLED;
        } else if (fillingMore && (wouldFill || i === hoveredItem)) {
            // Filling more, not currently filled,
            fillState = FillState.PREVIEW_FILLED;
        } else if (!fillingMore && filled && !wouldFill) {
            fillState = FillState.PREVIEW_UNFILLED;
        } else if (!fillingMore && !wouldFill) {
            fillState = FillState.UNFILLED;
        }

        resourceInputArray.push(
            <PillToggle
                pillKey={i}
                categoryName={name}
                filled={fillState}
                currentValue={Math.min(value - 1, functionalMax - 1)}
                onToggle={onChangeValue}
                round={small}
                onMouseEnter={onItemMouseOver}
                onMouseLeave={onItemMouseLeave}
            />,
        );
    }

    if (fillPhantomToNumber) {
        for (let i = functionalMax; i < fillPhantomToNumber; ++i) {
            resourceInputArray.push(
                <PillToggle
                    pillKey={i}
                    categoryName={name}
                    filled={FillState.UNFILLED}
                    currentValue={0}
                    onToggle={onChangeValue}
                    disabled
                    round={small}
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
            {Math.max(maxValue ?? 0, fillPhantomToNumber ?? 0) > 1 ? (
                <ActionButton
                    onClick={onClear}
                    icon={clearIcon}
                    label={"Clear"}
                    className={styles.clearButton}
                    isIconButton
                    onMouseEnter={() => setHoveredItem(-1)}
                    onMouseLeave={onItemMouseLeave}
                />
            ) : null}
        </div>
    );
};
