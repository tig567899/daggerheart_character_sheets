import { useCallback, useMemo, useRef } from "react";
import { useSelector } from "react-redux";

import { BlockTitle } from "@dh_sheets/app/components/block-title";
import { CommunityInfo } from "@dh_sheets/app/components/heritage/community-block/community-info";
import { CommunityModal } from "@dh_sheets/app/components/heritage/community-block/selector-modal/community-modal";
import { ModalTrigger } from "@dh_sheets/app/components/modal-trigger";
import { CommunitiesList } from "@dh_sheets/app/data/community-data";
import { setCommunity } from "@dh_sheets/app/redux/character-data-store/actions";
import { getCommunity } from "@dh_sheets/app/redux/character-data-store/selector";
import { useAppDispatch } from "@dh_sheets/app/redux/hooks";
import { Community } from "@dh_sheets/app/types";

import parentStyles from "../../framed-block.module.css";
import styles from "../heritage-block.module.css";

export const CommunityBlock = () => {
    const modalTriggerRef = useRef<any>(null);
    const communityName = useSelector(getCommunity);
    const { community, index } = useMemo(() => {
        const index = CommunitiesList.findIndex(
            (entry) => entry.name === communityName,
        );

        return { community: CommunitiesList[index], index };
    }, [communityName]);
    const dispatch = useAppDispatch();

    const renderModal = useCallback(
        (
            onSelect: (...props: any) => void,
            onClose: () => void,
            _modalId: string,
            key: string,
        ) => {
            return (
                <CommunityModal
                    key={key}
                    onSelect={onSelect}
                    onClose={onClose}
                    initialIndex={index}
                />
            );
        },
        [index],
    );

    const onSetCommunity = useCallback(
        (newCommunity: Community) => {
            dispatch(setCommunity(newCommunity.name));
        },
        [dispatch],
    );

    const onEdit = useCallback(() => {
        modalTriggerRef.current?.openModalId();
    }, [modalTriggerRef]);

    return (
        <div className={parentStyles.framedBlock}>
            <BlockTitle title="Community" />
            {community ? (
                <CommunityInfo community={community} onEdit={onEdit} />
            ) : (
                <button onClick={onEdit} className={styles.setButton}>
                    Set community
                </button>
            )}
            <ModalTrigger
                ref={modalTriggerRef}
                renderModal={renderModal}
                onSelect={onSetCommunity}
                keyPrefix={"community-select-modal"}
            />
        </div>
    );
};
