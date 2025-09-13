import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import classNames from "classnames";
import { useCallback, useEffect, useRef, useState } from "react";

import { ModifierField } from "@dh_sheets/app/constants";

import styles from "./stat-allocator.module.css";

export interface DropTargetProps {
    modifier: number;
    ability: ModifierField;
    onUnassign: (ability: ModifierField) => void;
}

export const ModifierDropTarget = ({
    modifier,
    ability,
    onUnassign,
}: DropTargetProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isDraggedOver, setIsDraggedOver] = useState<boolean>(false);

    // TODO: Change this later
    const modified = modifier !== 0;

    useEffect(() => {
        const el = ref.current;
        if (!el) {
            return;
        }

        return dropTargetForElements({
            element: el,
            getData: () => ({ ability }),
            onDragEnter: () => setIsDraggedOver(true),
            onDragLeave: () => setIsDraggedOver(false),
            onDrop: () => setIsDraggedOver(false),
        });
    }, [ref, ability]);

    const unassign = useCallback(() => {
        {
            if (modified) {
                onUnassign(ability);
            }
        }
    }, [ability, modified, onUnassign]);

    return (
        <div
            onClick={unassign}
            ref={ref}
            className={classNames(styles.dragTarget, {
                [styles.dragTargetHover]: isDraggedOver,
                [styles.modifiedBox]: modified,
            })}
        >{`${modifier > 0 ? "+" : ""}${modifier}`}</div>
    );
};
