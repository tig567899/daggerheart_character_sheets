import classNames from 'classnames';
import { useCallback } from 'react';

import styles from './hope-block.module.css';

export interface ToggleProps {
    diamondKey: number;
    filled: boolean;
    currentValue: number;
    onToggle: (pillNumber: number) => void;
}

export const DiamondFillable = ({
    diamondKey,
    filled,
    currentValue,
    onToggle,
}: ToggleProps) => {
    const onClick = useCallback(() => {
        if (!filled || diamondKey !== currentValue) onToggle(diamondKey + 1);
        else onToggle(diamondKey);
    }, [filled, currentValue]);

    // TODO: Make the dots hearts
    return (
        <div
            className={classNames(styles.diamond)}
            key={`diamond-fillable-${diamondKey}`}
            onClick={onClick}
        >
            {filled ? <div className={styles.diamondFilled} /> : null}
        </div>
    );
};
