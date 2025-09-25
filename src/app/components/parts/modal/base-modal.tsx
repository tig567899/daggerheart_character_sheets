import classNames from "classnames";
import { JSX, PropsWithChildren, useCallback, useMemo, useState } from "react";

import { ActionButton } from "@dh_sheets/app/components/parts/action-button/action-button";
import { IconSize } from "@dh_sheets/app/constants";

import { ClearIcon } from "@icons/clear-icon";

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
    const clearIcon = useMemo(() => <ClearIcon size={IconSize.LARGE} />, []);
    return (
        <div onClick={onClose} className={styles.modalContainer}>
            <div
                onClick={absorbClick}
                className={classNames(styles.modal, { [styles.short]: short })}
            >
                <ActionButton
                    className={styles.closeButton}
                    onClick={onClose}
                    icon={clearIcon}
                    label={closeLabel ?? "Close"}
                    isIconButton
                    size={IconSize.LARGE}
                />

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
