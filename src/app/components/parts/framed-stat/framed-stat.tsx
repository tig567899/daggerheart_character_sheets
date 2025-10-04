import classNames from "classnames";
import { useCallback } from "react";

import { getModifierDescriptionList } from "@dh_sheets/app/components/parts/framed-stat/util";
import {
    TooltipDirection,
    TooltipTrigger,
} from "@dh_sheets/app/components/parts/tooltip/tooltip-trigger";
import { Modifier } from "@dh_sheets/app/types";

import styles from "./framed-stat.module.css";

export interface FramedStatProps {
    value: number | string;
    label?: string;
    small?: boolean;
    usePlus?: boolean;
    displayLabelAbove?: boolean;
    subText?: string;
    onChange?: (name: string, value: number) => void;
    modifiers?: Modifier[];
    baseNumber?: number;
    baseSource?: string;
    additionalMods?: (string | number)[][];
    tooltipDirection?: TooltipDirection;
}

export const FixedFramedStat = ({
    usePlus,
    value,
    label,
    displayLabelAbove,
    subText,
    small,
    modifiers,
    baseNumber,
    baseSource,
    additionalMods,
    tooltipDirection,
}: FramedStatProps) => {
    const modifierStrings = getModifierDescriptionList(modifiers);
    const renderTooltip = () => {
        if ((!modifierStrings || modifierStrings.length === 0) && baseNumber === undefined) {
            return null;
        }
        return (
            <div className={styles.framedStatTooltip}>
                {baseNumber !== undefined ? `${baseNumber} base score${baseSource ? ` from ${baseSource}` : ''}` : null}
                {additionalMods
                    ? additionalMods.map((mod) => (
                          <div key={`additional-modifiers-mod-${mod}`}>
                              +{mod[0]} for {mod[1]}
                          </div>
                      ))
                    : null}
                {modifierStrings?.map((mod) => (
                    <div key={`modifiers-mod-${mod}`}>{mod}</div>
                ))}
            </div>
        );
    };
    return (
        <div className={styles.framedStatContainer}>
            {displayLabelAbove && label}
            <TooltipTrigger
                renderTooltip={renderTooltip}
                direction={tooltipDirection}
            >
                <div
                    className={classNames(styles.statDisplay, {
                        [styles.displaySmall]: small,
                    })}
                >
                    {`${
                        usePlus && typeof value === "number" && value > 0
                            ? "+"
                            : ""
                    }${value}`}
                </div>
            </TooltipTrigger>

            {!displayLabelAbove && label}
            <div className={styles.subText}>{subText}</div>
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
    }, [label, onChange, value]);

    const onAdjustDown = useCallback(() => {
        if (typeof value === "string" || !label) {
            return;
        }
        onChange?.(label, value - 1);
    }, [label, onChange, value]);
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
