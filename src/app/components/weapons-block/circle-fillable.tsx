
import classNames from 'classnames';
import { useCallback } from 'react';

import styles from './weapons-block.module.css';


export interface ToggleProps {
    circleKey: number;
    filled: boolean;
    onToggle?: (pillNumber: number) => void;
}

export const CircleFillable = ({
    circleKey,
    filled,
    onToggle,
}: ToggleProps) => {
    const onClick = useCallback(() => {
        onToggle?.(filled ? circleKey : circleKey + 1);
    }, [filled, onToggle]);

    // TODO: Make the dots hearts
    return (
        <div
            className={classNames(styles.circle)}
            key={`diamond-fillable-${circleKey}`}
            onClick={onClick}
        >
            {filled ? <div className={styles.circleFilled}/> : null}
        </div>
    );
}
