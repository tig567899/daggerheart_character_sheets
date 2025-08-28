import classNames from 'classnames';

import styles from './health-block.module.css';
import { useCallback } from 'react';

export interface ToggleProps {
    categoryName: string;
    pillKey: number;
    filled: boolean;
    onToggle: (pillNumber: number) => void;
}

export const PillToggle = ({
    categoryName,
    pillKey,
    filled,
    onToggle,
}: ToggleProps) => {
    const onPillClick = useCallback(() => {
        onToggle(filled ? pillKey : pillKey + 1);
    }, [filled]);
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
