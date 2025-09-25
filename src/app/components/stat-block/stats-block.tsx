import classNames from "classnames";
import { useCallback, useContext, useMemo } from "react";

import { FixedFramedStat } from "@dh_sheets/app/components/parts/framed-stat/framed-stat";
import { ModalTrigger } from "@dh_sheets/app/components/parts/modal/modal-trigger";
import { StatAllocatorModal } from "@dh_sheets/app/components/stat-block/allocator/stat-allocator-modal";
import { useStatModifiers } from "@dh_sheets/app/components/stat-block/util";
import {
    AbilityNames,
    ModifierKey,
    abilityUsesArray,
} from "@dh_sheets/app/constants";
import { PageContext } from "@dh_sheets/app/context";
import { getModifierById } from "@dh_sheets/app/redux/character-data-store/selector";
import { useAppSelector } from "@dh_sheets/app/redux/hooks";

import { EditIcon } from "@icons/edit-icon";

import styles from "./character-stat-row.module.css";

export const StatsBlock = () => {
    const pageContext = useContext(PageContext);

    const {
        agilityMod,
        strengthMod,
        finesseMod,
        instinctMod,
        presenceMod,
        knowledgeMod,
        allStatsMod,
    } = useStatModifiers();

    const abilityScores = [
        agilityMod + allStatsMod,
        strengthMod + allStatsMod,
        finesseMod + allStatsMod,
        instinctMod + allStatsMod,
        presenceMod + allStatsMod,
        knowledgeMod + allStatsMod,
    ];

    const initialModifiersAreSet =
        useAppSelector((state) =>
            getModifierById(state, ModifierKey.INITIAL_MOD_PLUS_2),
        ) !== undefined;

    const renderModal = useCallback(
        (
            _onSelect: (...props: any) => void,
            onClose: () => void,
            _modalId: string,
            key: string,
        ) => {
            return (
                <StatAllocatorModal
                    key={`stat-allocate-modal-${key}`}
                    onClose={onClose}
                />
            );
        },
        [],
    );

    const editIcon = useMemo(() => <EditIcon />, []);

    const renderModalTrigger = useCallback(
        ({ label, style }: { label: string; style: string }) => (
            <ModalTrigger
                renderModal={renderModal}
                keyPrefix="stats-modal-trigger"
                className={style}
                label={label}
                icon={editIcon}
                isIconButton
            />
        ),
        [renderModal, editIcon],
    );

    return (
        <div
            className={classNames(styles.statBlock, {
                [styles.statBlockNarrow]: pageContext.limitedWidth,
            })}
        >
            <div
                className={classNames(styles.statGroup, {
                    [styles.statGroupNarrow]: pageContext.limitedWidth,
                })}
            >
                {AbilityNames.map((name, index) => (
                    <div
                        key={`ability-${name}`}
                        className={styles.statContainer}
                    >
                        <FixedFramedStat
                            value={abilityScores[index]}
                            label={name}
                            usePlus
                            displayLabelAbove
                            subText={abilityUsesArray[index].join(", ")}
                        />
                    </div>
                ))}
            </div>

            {renderModalTrigger({
                label: `${initialModifiersAreSet ? "Edit" : "Set"} initial allocations`,
                style: "",
            })}
        </div>
    );
};
