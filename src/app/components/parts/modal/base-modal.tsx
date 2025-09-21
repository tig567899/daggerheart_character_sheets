import classNames from "classnames";
import { JSX, PropsWithChildren, useCallback, useState } from "react";

import styles from "./selector-modal.module.css";

interface ModalProps extends PropsWithChildren {
    onClose: () => void;
    onSelect?: (selection: any) => void;
    title?: string;
    disableSubmit?: boolean;
    hideSubmit?: boolean;
    short?: boolean;
    closeLabel?: string;
    submitLabel?: string;
}

export const BaseModal = ({
    onClose,
    onSelect,
    title,
    disableSubmit,
    hideSubmit,
    short,
    closeLabel,
    children,
    submitLabel,
}: ModalProps) => {
    const absorbClick = useCallback(
        (e: React.MouseEvent) => e.stopPropagation(),
        [],
    );
    return (
        <div onClick={onClose} className={styles.modalContainer}>
            <div
                onClick={absorbClick}
                className={classNames(styles.modal, { [styles.short]: short })}
            >
                <button className={styles.closeButton} onClick={onClose}>
                    {closeLabel ?? "Close"}
                </button>
                <div className={styles.selectorTitle}>{title}</div>
                {children}

                {onSelect && !hideSubmit ? (
                    <div className={styles.actionButtons}>
                        <button disabled={disableSubmit} onClick={onSelect}>
                            {submitLabel ?? "Submit"}
                        </button>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

interface ColumnModalProps extends ModalProps {
    columns: {
        name: string;
        render: () => JSX.Element;
    }[];
}

export const ColumnModal = ({ columns, ...props }: ColumnModalProps) => {
    const [columnSelected, setColumnSelected] = useState<number>(0);
    return (
        <BaseModal {...props}>
            <div className={styles.columnSelector}>
                {columns.map((column, index) => (
                    <div
                        key={`column-modal-${index}`}
                        className={classNames(styles.columnSelectorTitle, {
                            [styles.selected]: columnSelected === index,
                        })}
                        onClick={() => setColumnSelected(index)}
                    >
                        {column.name}
                    </div>
                ))}
            </div>
            {columns[columnSelected].render()}
        </BaseModal>
    );
};
