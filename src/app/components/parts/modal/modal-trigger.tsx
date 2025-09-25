import {
    ReactElement,
    forwardRef,
    useCallback,
    useImperativeHandle,
    useState,
} from "react";

import styles from "./selector-modal.module.css";
import { ActionButton, ActionButtonProps } from "@dh_sheets/app/components/parts/action-button/action-button";

interface ModalTriggerProps extends ActionButtonProps {
    renderModal: (
        onClose: () => void,
        onSelect: (...props: any) => void,
        modalId: string,
        key: string,
    ) => ReactElement;
    onSelect?: (...props: any) => void;
    keyPrefix: string;
    modalDataKey?: string;
    disabled?: boolean;
}

export const ModalTrigger = forwardRef(
    (
        {
            renderModal,
            onSelect,
            keyPrefix,
            modalDataKey,
            disabled,
            ...others
        }: ModalTriggerProps,
        ref,
    ) => {
        const [modalId, setModalId] = useState<string | null>(null);
        const [modalKey, setModalKey] = useState<number>(Math.random());

        const openModalId = useCallback(() => {
            setModalKey(modalKey);
            setModalId(modalDataKey ?? "modal");
        }, [modalKey, modalDataKey]);

        const onModalClose = useCallback(() => {
            setModalId(null);
        }, []);

        useImperativeHandle(ref, () => ({
            openModal() {
                openModalId();
            },
        }));

        const onModalSelect = useCallback(
            (...props: any) => {
                onSelect?.(...props);
                setModalId(null);
            },
            [onSelect],
        );

        return (
            <div className={styles.triggerContainer}>
                <ActionButton
                    disabled={disabled}
                    onClick={openModalId}
                    {...others}
                />
                <div>
                    {modalId
                        ? renderModal(
                              onModalSelect,
                              onModalClose,
                              modalId,
                              `${keyPrefix}-${modalKey}`,
                          )
                        : null}
                </div>
            </div>
        );
    },
);

ModalTrigger.displayName = "ModalTrigger";
