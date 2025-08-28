import React, { useCallback, useState } from 'react';

interface InputProps {
    initialInput: string;
    inputType: string;
    name: string
    onSave: (newInput: string) => void;
}

export const SaveableInput = ({ initialInput, name, inputType, onSave }: InputProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedValue, setEditedValue] = useState<string>(initialInput ?? '');

    const edit = useCallback(() => {
        setIsEditing(true);
    }, [setIsEditing]);

    const save = useCallback(() => {
        if (editedValue !== initialInput) {
            onSave?.(editedValue);
        }
        setIsEditing(false);
    }, [setIsEditing, editedValue]);

    const onInputChange = useCallback((event: any) => {
        setEditedValue(event.target.value);
    }, []);

    const staticView = (
        <div>
            {name}
            {initialInput}
            <button onClick={edit}>edit</button>
        </div>
    );

    const dynamicView = (
        <div>
            <input placeholder={name} type={inputType} value={editedValue} onInput={onInputChange}></input>
            <button onClick={save}>save</button>
        </div>
    );

    return isEditing ? dynamicView : staticView;
};
