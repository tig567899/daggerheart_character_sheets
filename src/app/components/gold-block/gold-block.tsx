import { BlockTitle } from "@dh_sheets/app/components/block-title";
import { FillableResource } from "@dh_sheets/app/components/health-block/fillable-resource";
import {
    getGoldBags,
    getGoldChests,
    getGoldHandfuls,
} from "@dh_sheets/app/redux/character-data-store/selector";
import { useAppSelector } from "@dh_sheets/app/redux/hooks";

import parentStyles from "../framed-block.module.css";
import styles from "./gold-block.module.css";

export const GoldBlock = () => {
    const goldHandfuls = useAppSelector(getGoldHandfuls);
    const goldBags = useAppSelector(getGoldBags);
    const goldChests = useAppSelector(getGoldChests);

    // TODO: Replace the fillableresource with a custom icon
    return (
        <div className={parentStyles.framedBlock}>
            <BlockTitle title="Gold" />
            <div className={styles.goldRow}>
                <FillableResource
                    name={"Handfuls"}
                    maxValue={5}
                    value={goldHandfuls}
                />
                <FillableResource name={"Bags"} maxValue={5} value={goldBags} />
                <FillableResource
                    name={"Chest"}
                    maxValue={1}
                    value={goldChests}
                />
            </div>
        </div>
    );
};
