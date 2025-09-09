import { useCallback } from "react";
import { useSelector } from "react-redux";

import { DiamondFillable } from "@dh_sheets/app/components/hope-block/diamond-fillable";
import { setHope } from "@dh_sheets/app/redux/character-data-store/actions";
import { getCharacterStateData } from "@dh_sheets/app/redux/character-data-store/selector";
import { useAppDispatch } from "@dh_sheets/app/redux/hooks";

import styles from "./hope-block.module.css";

const MAX_HOPE = 6;

export const HopeCounter = () => {
    const { hope } = useSelector(getCharacterStateData);
    const dispatch = useAppDispatch();

    const onChangeValue = useCallback(
        (value: number) => {
            dispatch(setHope(value));
        },
        [dispatch],
    );

    const resourceInputArray = [];

    for (let i = 0; i < MAX_HOPE; ++i) {
        resourceInputArray.push(
            <div className={styles.diamondContainer}>
                <DiamondFillable
                    diamondKey={i}
                    filled={i < hope}
                    onToggle={onChangeValue}
                    currentValue={hope - 1}
                />
            </div>,
        );
        if (i !== MAX_HOPE - 1) {
            resourceInputArray.push(<div className={styles.hopeDivider} />);
        }
    }

    return (
        <div className={styles.hopeCounterContainer}>
            Spend a Hope to use an experience or help an ally.
            <div className={styles.hopeCounter}>{...resourceInputArray}</div>
        </div>
    );
};
