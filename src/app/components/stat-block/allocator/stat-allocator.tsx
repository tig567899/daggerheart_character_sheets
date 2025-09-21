import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import React, {
    forwardRef,
    useCallback,
    useEffect,
    useImperativeHandle,
    useState,
} from "react";

import { ModifierBox } from "@dh_sheets/app/components/stat-block/allocator/modifier-box";
import { ModifierDropTarget } from "@dh_sheets/app/components/stat-block/allocator/modifier-drop-target";
import {
    AbilityName,
    ModifierField,
    ModifierKey,
    abilityToModifierFieldMap,
    abilityUsesArray,
} from "@dh_sheets/app/constants";
import { setModifierForField } from "@dh_sheets/app/redux/character-data-store/actions";
import { useAppDispatch } from "@dh_sheets/app/redux/hooks";

import styles from "./stat-allocator.module.css";

const modifierKeys = [
    // Initial stat modifications
    ModifierKey.INITIAL_MOD_PLUS_2,
    ModifierKey.INIIIAL_MOD_PLUS_1_1,
    ModifierKey.INIIIAL_MOD_PLUS_1_2,
    ModifierKey.INIIIAL_MOD_MINUS_1,
];

function modKeyToModifier(modKey: ModifierKey) {
    switch (modKey) {
        case ModifierKey.INITIAL_MOD_PLUS_2:
            return 2;
        case ModifierKey.INIIIAL_MOD_PLUS_1_1:
        case ModifierKey.INIIIAL_MOD_PLUS_1_2:
            return 1;
        case ModifierKey.INIIIAL_MOD_MINUS_1:
            return -1;
        default:
            return 0;
    }
}

interface AllocatorProps {
    onAllocatedNumberChanged: (allocated: number) => void;
}

export const StatAllocator = forwardRef(
    ({ onAllocatedNumberChanged }: AllocatorProps, ref) => {
        const dispatch = useAppDispatch();

        const [agilityModKey, setAgilityModKey] = useState<ModifierKey | null>(
            null,
        );
        const [strengthModKey, setStrengthModKey] =
            useState<ModifierKey | null>(null);
        const [finesseModKey, setFinesseModKey] = useState<ModifierKey | null>(
            null,
        );
        const [instinctModKey, setInstinctModKey] =
            useState<ModifierKey | null>(null);
        const [presenceModKey, setPresenceModKey] =
            useState<ModifierKey | null>(null);
        const [knowledgeModKey, setKnowledgeModKey] =
            useState<ModifierKey | null>(null);

        const isModifierAssigned = useCallback(
            (modifier: ModifierKey) => {
                return [
                    agilityModKey,
                    strengthModKey,
                    finesseModKey,
                    instinctModKey,
                    presenceModKey,
                    knowledgeModKey,
                ].some((key) => key === modifier);
            },
            [
                agilityModKey,
                strengthModKey,
                finesseModKey,
                instinctModKey,
                presenceModKey,
                knowledgeModKey,
            ],
        );

        const numberAssigned = useCallback(() => {
            return [
                agilityModKey,
                strengthModKey,
                finesseModKey,
                instinctModKey,
                presenceModKey,
                knowledgeModKey,
            ].filter((key) => key).length;
        }, [
            agilityModKey,
            strengthModKey,
            finesseModKey,
            instinctModKey,
            presenceModKey,
            knowledgeModKey,
        ]);

        useImperativeHandle(
            ref,
            () => ({
                onSubmit() {
                    if (agilityModKey) {
                        dispatch(
                            setModifierForField({
                                modifierKey: agilityModKey,
                                modifier: modKeyToModifier(agilityModKey),
                                modifierField: ModifierField.AGILITY,
                            }),
                        );
                    }
                    if (strengthModKey) {
                        dispatch(
                            setModifierForField({
                                modifierKey: strengthModKey,
                                modifier: modKeyToModifier(strengthModKey),
                                modifierField: ModifierField.STRENGTH,
                            }),
                        );
                    }
                    if (finesseModKey) {
                        dispatch(
                            setModifierForField({
                                modifierKey: finesseModKey,
                                modifier: modKeyToModifier(finesseModKey),
                                modifierField: ModifierField.FINESSE,
                            }),
                        );
                    }
                    if (instinctModKey) {
                        dispatch(
                            setModifierForField({
                                modifierKey: instinctModKey,
                                modifier: modKeyToModifier(instinctModKey),
                                modifierField: ModifierField.INSTINCT,
                            }),
                        );
                    }
                    if (presenceModKey) {
                        dispatch(
                            setModifierForField({
                                modifierKey: presenceModKey,
                                modifier: modKeyToModifier(presenceModKey),
                                modifierField: ModifierField.PRESENCE,
                            }),
                        );
                    }
                    if (knowledgeModKey) {
                        dispatch(
                            setModifierForField({
                                modifierKey: knowledgeModKey,
                                modifier: modKeyToModifier(knowledgeModKey),
                                modifierField: ModifierField.KNOWLEDGE,
                            }),
                        );
                    }
                },
            }),
            [
                agilityModKey,
                strengthModKey,
                finesseModKey,
                instinctModKey,
                presenceModKey,
                knowledgeModKey,
                dispatch,
            ],
        );

        const getAssignmentForModifier = useCallback(
            (modifier: ModifierField) => {
                switch (modifier) {
                    case ModifierField.AGILITY:
                        return agilityModKey;
                    case ModifierField.STRENGTH:
                        return strengthModKey;
                    case ModifierField.FINESSE:
                        return finesseModKey;
                    case ModifierField.INSTINCT:
                        return instinctModKey;
                    case ModifierField.PRESENCE:
                        return presenceModKey;
                    case ModifierField.KNOWLEDGE:
                        return knowledgeModKey;
                    default:
                        console.error("Unknown field selected");
                }
            },
            [
                agilityModKey,
                strengthModKey,
                finesseModKey,
                instinctModKey,
                presenceModKey,
                knowledgeModKey,
            ],
        );

        const setAssignmentForModifier = useCallback(
            (modifierField: ModifierField, modifierKey: ModifierKey | null) => {
                switch (modifierField) {
                    case ModifierField.AGILITY:
                        setAgilityModKey(modifierKey);
                        break;
                    case ModifierField.STRENGTH:
                        setStrengthModKey(modifierKey);
                        break;
                    case ModifierField.FINESSE:
                        setFinesseModKey(modifierKey);
                        break;
                    case ModifierField.INSTINCT:
                        setInstinctModKey(modifierKey);
                        break;
                    case ModifierField.PRESENCE:
                        setPresenceModKey(modifierKey);
                        break;
                    case ModifierField.KNOWLEDGE:
                        setKnowledgeModKey(modifierKey);
                        break;
                    default:
                        console.error("Unknown field selected");
                }

                onAllocatedNumberChanged(
                    numberAssigned() + (modifierKey === null ? -1 : 1),
                );
            },
            [numberAssigned, onAllocatedNumberChanged],
        );

        const unassignModifier = useCallback(
            (field: ModifierField) => {
                setAssignmentForModifier(field, null);
            },
            [setAssignmentForModifier],
        );

        useEffect(() => {
            return monitorForElements({
                onDrop({ source, location }) {
                    if (location.current.dropTargets.length === 0) {
                        return;
                    }

                    const modifierField = location.current.dropTargets[0].data
                        .ability as ModifierField;
                    const modifierKey = source.data.modifierKey as ModifierKey;

                    setAssignmentForModifier(modifierField, modifierKey);
                },
            });
        }, [setAssignmentForModifier]);

        return (
            <div className={styles.container}>
                <div className={styles.modifierDestinationRow}>
                    {Object.values(AbilityName)
                        .slice(0, 6)
                        .map((ability, index) => {
                            const modifier =
                                abilityToModifierFieldMap.get(ability) ??
                                ModifierField.AGILITY;
                            const assignment =
                                getAssignmentForModifier(modifier);
                            return (
                                <div
                                    key={`stat-allocator-${ability}`}
                                    className={styles.dragTargetContainer}
                                >
                                    <div className={styles.dragTargetTitle}>
                                        {ability}
                                    </div>
                                    <ModifierDropTarget
                                        modifier={
                                            assignment
                                                ? modKeyToModifier(assignment)
                                                : 0
                                        }
                                        ability={modifier}
                                        onUnassign={unassignModifier}
                                    />
                                    <div className={styles.abilityUses}>
                                        {abilityUsesArray[index].map((use) => (
                                            <div key={`${ability}-use-${use}`}>
                                                {use}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                </div>
                <div className={styles.modifierRow}>
                    {modifierKeys.map((key) =>
                        !isModifierAssigned(key) ? (
                            <ModifierBox
                                key={`modifier-box-${key}`}
                                modifierKey={key}
                                modifier={modKeyToModifier(key)}
                            />
                        ) : null,
                    )}
                </div>

                <div className={styles.modifierRowDescription}>
                    Drag modifiers to assign
                </div>
            </div>
        );
    },
);

StatAllocator.displayName = "StatAllocator";
