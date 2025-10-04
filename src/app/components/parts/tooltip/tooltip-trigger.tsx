import classNames from "classnames";
import {
    PropsWithChildren,
    ReactElement,
    useCallback,
    useMemo,
    useState,
} from "react";

import styles from "./tooltip-style.module.css";

export enum TooltipDirection {
    RIGHT,
    LEFT,
    UP,
    DOWN,
}

interface TooltipProps extends PropsWithChildren {
    direction?: TooltipDirection;
    renderTooltip: () => ReactElement | null;
}

export const TooltipTrigger = ({
    children,
    direction = TooltipDirection.UP,
    renderTooltip,
}: TooltipProps) => {
    const [tooltipShown, setTooltipShown] = useState<boolean>(false);

    const onMouseEnter = useCallback(() => {
        setTooltipShown(true);
    }, []);

    const onMouseLeave = useCallback(() => {
        setTooltipShown(false);
    }, []);

    const tooltip = useMemo(renderTooltip, [renderTooltip]);

    if (!tooltip) {
        return children;
    }

    return (
        <div
            className={styles.triggerContainer}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div>{children}</div>
            {tooltipShown ? (
                <div
                    className={classNames(styles.tooltipContainer, {
                        [styles.up]: direction === TooltipDirection.UP,
                        [styles.right]: direction === TooltipDirection.RIGHT,
                        [styles.left]: direction === TooltipDirection.LEFT,
                    })}
                >
                    {tooltip}
                </div>
            ) : null}
        </div>
    );
};
