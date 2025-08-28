import { useCallback } from 'react';
import classNames from 'classnames';

import styles from './health-block.module.css';
import { PillToggle } from '@dh_sheets/app/components/health-block/pill-toggle';

export interface FillableResourceProps {
    name: string;
    maxValue?: number;
    value?: number;
    warningText?: string;
    onValueChange?: (value: number) => void;
}

export const FillableResource = ({
    name,
    maxValue,
    value,
    warningText,
    onValueChange,
}: FillableResourceProps) => {
    if (!maxValue || value === undefined) {
        return null;
    }

    const resourceInputArray = [];

    const onChangeValue = useCallback((value: number) => {
        onValueChange?.(value);
    }, []);

    for (let i = 0; i < maxValue; ++i) {
        resourceInputArray.push(
            <PillToggle
                pillKey={i}
                categoryName={name}
                filled={i < value}
                onToggle={onChangeValue}
            />
        );
    }

    return (
        <div className={styles.resourceContainer}>
            {name}
            {...resourceInputArray}
            {warningText}
        </div>
    );
};
