import { useCallback, useRef, useState } from "react";

import { FixedFramedStat } from "@dh_sheets/app/components/parts/framed-stat/framed-stat";
import { ModalTrigger } from "@dh_sheets/app/components/parts/modal/modal-trigger";
import { StatAllocatorModal } from "@dh_sheets/app/components/stat-block/allocator/stat-allocator-modal";
import { useStatModifiers } from "@dh_sheets/app/components/stat-block/util";
import { ModifierKey } from "@dh_sheets/app/constants";
import { getModifierById } from "@dh_sheets/app/redux/character-data-store/selector";
import { useAppSelector } from "@dh_sheets/app/redux/hooks";

import styles from "./character-stat-row.module.css";

export const abilityNames = [
    "Agility",
    "Strength",
    "Finesse",
    "Instinct",
    "Presence",
    "Knowledge",
];

export const StatsBlock = () => {
    const modalTriggerRef = useRef<any>(null);
    const onOpenDialog = useCallback(
        () => modalTriggerRef.current?.openModalId(),
        [modalTriggerRef],
    );

    const {
        agilityMod,
        strengthMod,
        finesseMod,
        instinctMod,
        presenceMod,
        knowledgeMod,
    } = useStatModifiers();

    const abilityScores = [
        agilityMod,
        strengthMod,
        finesseMod,
        instinctMod,
        presenceMod,
        knowledgeMod,
    ];

    const initialModifiersAreSet = useAppSelector((state) =>
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

    return (
        <div className={styles.statBlock}>
            {abilityNames.map((name, index) => (
                <div key={`ability-${name}`} className={styles.statContainer}>
                    <FixedFramedStat
                        value={abilityScores[index]}
                        label={name}
                        usePlus
                    />
                </div>
            ))}
            <button onClick={onOpenDialog}>{initialModifiersAreSet ? 'Edit' : 'Set'} initial allocations</button>

            <ModalTrigger
                ref={modalTriggerRef}
                renderModal={renderModal}
                keyPrefix="inventory-weapon-select-modal"
            />
        </div>
    );
};
