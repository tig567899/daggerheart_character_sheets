import classNames from "classnames";
import React, {
    KeyboardEvent,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";

import { ActionButton } from "@dh_sheets/app/components/parts/action-button/action-button";
import { IconSize } from "@dh_sheets/app/constants";

import { CheckmarkIcon } from "@icons/checkmark-icon";
import { EditIcon } from "@icons/edit-icon";

import styles from "./saveable-input.module.css";

interface InputProps {
    initialInput: string;
    inputType: string;
    name: string;
    index?: number;
    onSave: (newInput: string, index?: number) => void;
    size?: IconSize;
}

export const SaveableInput = ({
    initialInput,
    name,
    inputType,
    index,
    onSave,
    size,
}: InputProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedValue, setEditedValue] = useState<string>(initialInput ?? "");

    const inputRef = useRef<HTMLInputElement | null>(null);

    const toggleSave = useCallback(() => {
        if (isEditing) {
            onSave?.(editedValue, index);
        }
        setIsEditing(!isEditing);
    }, [setIsEditing, editedValue, isEditing, index, onSave]);

    const onInputChange = useCallback((event: any) => {
        setEditedValue(event.target.value);
    }, []);

    useEffect(() => {
        if (isEditing) {
            inputRef.current?.focus();
        }
    }, [inputRef, isEditing]);

    useEffect(() => {
        setEditedValue(initialInput);
    }, [initialInput]);

    const editIcon = <EditIcon size={size} />;
    const saveIcon = <CheckmarkIcon size={size} />;

    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            console.log("here");
            if (e.code === "Escape") {
                setIsEditing(false);
            } else if (e.code === "Enter") {
                toggleSave();
            }
        },
        [toggleSave],
    );

    const staticView = (
        <div className={styles.staticInputText}>
            <div
                className={classNames(styles.inputField, {
                    [styles.staticInputPlaceholder]: !initialInput,
                })}
            >
                {initialInput ? initialInput : name}
            </div>
            <ActionButton
                icon={editIcon}
                className={styles.staticEditButton}
                onClick={toggleSave}
                label={"Edit"}
                isIconButton
                size={size}
            />
        </div>
    );

    const dynamicView = (
        <div className={styles.dynamicInputText} onKeyDown={handleKeyDown}>
            <input
                ref={inputRef}
                className={classNames(styles.inputField)}
                placeholder={name}
                type={inputType}
                value={editedValue}
                onInput={onInputChange}
            />
            <ActionButton
                className={classNames(
                    styles.staticEditButton,
                    styles.dynamicButton,
                )}
                icon={saveIcon}
                onClick={toggleSave}
                label={"Save"}
                size={size}
                isIconButton
            />
            <button className={styles.staticEditButton} onClick={toggleSave}>
                Save
            </button>
        </div>
    );

    return isEditing ? dynamicView : staticView;
};
