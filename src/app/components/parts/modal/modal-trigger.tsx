import {
    ReactElement,
    forwardRef,
    useCallback,
    useImperativeHandle,
    useState,
} from "react";

import styles from "./selector-modal.module.css";

interface ModalTriggerProps {
    renderModal: (
        onClose: () => void,
        onSelect: (...props: any) => void,
        modalId: string,
        key: string,
    ) => ReactElement;
    onSelect?: (...props: any) => void;
    keyPrefix: string;
    buttonStyle: string;
    buttonLabel: string;
    modalDataKey?: string;
    disabled?: boolean;
}

export const ModalTrigger = forwardRef(
    (
        {
            renderModal,
            onSelect,
            keyPrefix,
            buttonStyle,
            buttonLabel,
            modalDataKey,
            disabled,
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
                <button
                    disabled={disabled}
                    className={buttonStyle}
                    onClick={openModalId}
                >
                    {buttonLabel}
                </button>
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
