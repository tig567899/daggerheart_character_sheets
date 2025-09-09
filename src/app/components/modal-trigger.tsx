import {
    ReactElement,
    forwardRef,
    useCallback,
    useImperativeHandle,
    useState,
} from "react";

interface ModalTriggerProps extends React.PropsWithChildren {
    renderModal: (
        onSelect: (...props: any) => void,
        onClose: () => void,
        modalId: string,
        key: string,
    ) => ReactElement;
    onSelect: (...props: any) => void;
    keyPrefix: string;
}

export const ModalTrigger = forwardRef(
    (
        { children, renderModal, onSelect, keyPrefix }: ModalTriggerProps,
        ref,
    ) => {
        const [modalId, setModalId] = useState<string | null>(null);
        const [modalKey, setModalKey] = useState<number>(Math.random());

        useImperativeHandle(ref, () => ({
            openModalId(id?: string) {
                setModalKey(modalKey);
                setModalId(id ?? "modal");
            },
        }));

        const onModalClose = useCallback(() => {
            setModalId(null);
        }, []);

        const onModalSelect = useCallback(
            (...props: any) => {
                onSelect(...props);
                setModalId(null);
            },
            [onSelect],
        );

        return (
            <div>
                {children}
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
