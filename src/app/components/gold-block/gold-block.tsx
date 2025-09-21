import { useCallback } from "react";

import { FillableResource } from "@dh_sheets/app/components/parts/fillable-resource/fillable-resource";
import { BlockTitle } from "@dh_sheets/app/components/parts/framed-block/block-title";
import { FramedBlock } from "@dh_sheets/app/components/parts/framed-block/framed-block";
import {
    getGoldBags,
    getGoldChests,
    getGoldHandfuls,
} from "@dh_sheets/app/redux/character-data-store/selector";
import { useAppDispatch, useAppSelector } from "@dh_sheets/app/redux/hooks";

import styles from "./gold-block.module.css";
import { setGoldBags, setGoldChests, setGoldHandfuls } from "@dh_sheets/app/redux/character-data-store/actions";

export const GoldBlock = () => {
    const goldHandfuls = useAppSelector(getGoldHandfuls);
    const goldBags = useAppSelector(getGoldBags);
    const goldChests = useAppSelector(getGoldChests);

    const dispatch = useAppDispatch();

    const changeGoldHandfuls = useCallback((quantity: number) => {
        dispatch(setGoldHandfuls(quantity));
    }, [dispatch]);
    const changeGoldBags = useCallback((quantity: number) => {
        dispatch(setGoldBags(quantity));
    }, [dispatch]);
    const changeGoldChests = useCallback((quantity: number) => {
        dispatch(setGoldChests(quantity));
    }, [dispatch]);

    // TODO: Replace the fillableresource with a custom icon
    return (
        <FramedBlock>
            <BlockTitle title="Gold" />
            <div className={styles.goldRow}>
                <FillableResource
                    name={"Handfuls"}
                    maxValue={9}
                    value={goldHandfuls}
                    onValueChange={changeGoldHandfuls}
                />
                <FillableResource
                    name={"Bags"}
                    maxValue={9}
                    value={goldBags}
                    onValueChange={changeGoldBags}
                />
                <FillableResource
                    name={"Chest"}
                    maxValue={1}
                    value={goldChests}
                    onValueChange={changeGoldChests}
                />
            </div>
        </FramedBlock>
    );
};
