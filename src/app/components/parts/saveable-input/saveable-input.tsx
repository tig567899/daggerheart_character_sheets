import classNames from "classnames";
import React, { useCallback, useState } from "react";

import styles from "./saveable-input.module.css";

interface InputProps {
    initialInput: string;
    inputType: string;
    name: string;
    index?: number;
    onSave: (newInput: string, index?: number) => void;
}

export const SaveableInput = ({
    initialInput,
    name,
    inputType,
    index,
    onSave,
}: InputProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedValue, setEditedValue] = useState<string>(initialInput ?? "");

    const edit = useCallback(() => {
        setIsEditing(true);
    }, [setIsEditing]);

    const save = useCallback(() => {
        if (editedValue !== initialInput) {
            onSave?.(editedValue, index);
        }
        setIsEditing(false);
    }, [setIsEditing, editedValue, index, initialInput, onSave]);

    const onInputChange = useCallback((event: any) => {
        setEditedValue(event.target.value);
    }, []);

    const staticView = (
        <div className={styles.staticInputText}>
            <div
                className={classNames(styles.inputField, {
                    [styles.staticInputPlaceholder]: !initialInput,
                })}
            >
                {" "}
                {initialInput ? initialInput : name}
            </div>
            <button className={styles.staticEditButton} onClick={edit}>
                edit
            </button>
        </div>
    );

    const dynamicView = (
        <div className={styles.dynamicInputText}>
            <input
                className={styles.inputField}
                placeholder={name}
                type={inputType}
                value={editedValue}
                onInput={onInputChange}
            />
            <button onClick={save}>save</button>
        </div>
    );

    return isEditing ? dynamicView : staticView;
};
