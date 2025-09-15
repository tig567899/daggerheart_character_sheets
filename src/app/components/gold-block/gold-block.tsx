import { FillableResource } from "@dh_sheets/app/components/health-block/fillable-resource";
import { BlockTitle } from "@dh_sheets/app/components/parts/framed-block/block-title";
import { FramedBlock } from "@dh_sheets/app/components/parts/framed-block/framed-block";
import {
    getGoldBags,
    getGoldChests,
    getGoldHandfuls,
} from "@dh_sheets/app/redux/character-data-store/selector";
import { useAppSelector } from "@dh_sheets/app/redux/hooks";

import styles from "./gold-block.module.css";

export const GoldBlock = () => {
    const goldHandfuls = useAppSelector(getGoldHandfuls);
    const goldBags = useAppSelector(getGoldBags);
    const goldChests = useAppSelector(getGoldChests);

    // TODO: Replace the fillableresource with a custom icon
    return (
        <FramedBlock>
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
        </FramedBlock>
    );
};
