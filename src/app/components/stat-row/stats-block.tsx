import { useCallback, useState } from "react";

import { FixedFramedStat } from "@dh_sheets/app/components/framed-stat";
import { StatAllocatorModal } from "@dh_sheets/app/components/stat-row/allocator/stat-allocator-modal";
import { ModifierField } from "@dh_sheets/app/constants";
import { getModifierByField } from "@dh_sheets/app/redux/character-data-store/selector";
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
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);
    const [modalKey, setModalKey] = useState<number>(Math.random());
    const onOpenDialog = useCallback(
        () => setDialogOpen(true),
        [setDialogOpen],
    );

    const onModalClose = useCallback(() => {
        setDialogOpen(false);
        setModalKey(Math.random());
    }, [setDialogOpen, setModalKey]);

    const agilityMod = useAppSelector((state) =>
        getModifierByField(state, ModifierField.AGILITY),
    );
    const strengthMod = useAppSelector((state) =>
        getModifierByField(state, ModifierField.STRENGTH),
    );
    const finesseMod = useAppSelector((state) =>
        getModifierByField(state, ModifierField.FINESSE),
    );
    const instinctMod = useAppSelector((state) =>
        getModifierByField(state, ModifierField.INSTINCT),
    );
    const presenceMod = useAppSelector((state) =>
        getModifierByField(state, ModifierField.PRESENCE),
    );
    const knowledgeMod = useAppSelector((state) =>
        getModifierByField(state, ModifierField.KNOWLEDGE),
    );

    const abilityScores = [
        agilityMod,
        strengthMod,
        finesseMod,
        instinctMod,
        presenceMod,
        knowledgeMod,
    ];

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
            <button onClick={onOpenDialog}>Edit allocations</button>

            <StatAllocatorModal
                key={`stat-allocate-modal-${modalKey}`}
                show={dialogOpen}
                onClose={onModalClose}
            />
        </div>
    );
};
