import { draggable } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

import styles from "./stat-allocator.module.css";

export interface ModifierBoxProps {
    modifier: number;
    modifierKey: string;
}

export const ModifierBox = ({ modifier, modifierKey }: ModifierBoxProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [dragging, setDragging] = useState<boolean>(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) {
            return;
        }

        return draggable({
            element: el,
            getInitialData: () => ({ modifierKey, modifier }),
            onDragStart: () => setDragging(true),
            onDrop: () => setDragging(false),
        });
    }, [ref, modifier, modifierKey]);

    return (
        <div
            ref={ref}
            className={classNames(styles.modifierBox, {
                [styles.modifierBoxDragging]: dragging,
            })}
        >{`${modifier > 0 ? "+" : ""}${modifier}`}</div>
    );
};
