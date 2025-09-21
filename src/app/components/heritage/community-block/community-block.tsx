import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";

import { CommunityInfo } from "@dh_sheets/app/components/heritage/community-block/community-info";
import { CommunityModal } from "@dh_sheets/app/components/heritage/community-block/selector-modal/community-modal";
import { BlockTitle } from "@dh_sheets/app/components/parts/framed-block/block-title";
import { FramedBlock } from "@dh_sheets/app/components/parts/framed-block/framed-block";
import { ModalTrigger } from "@dh_sheets/app/components/parts/modal/modal-trigger";
import { CommunitiesList } from "@dh_sheets/app/data/community-data";
import { setCommunity } from "@dh_sheets/app/redux/character-data-store/actions";
import { getCommunity } from "@dh_sheets/app/redux/character-data-store/selector";
import { useAppDispatch } from "@dh_sheets/app/redux/hooks";
import { Community } from "@dh_sheets/app/types";

import styles from "../heritage-block.module.css";

export const CommunityBlock = () => {
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

    const renderCommunityModalTrigger = useCallback(
        ({ label, style }: { label: string; style: string }) => (
            <ModalTrigger
                renderModal={renderModal}
                onSelect={onSetCommunity}
                keyPrefix={"community-select-modal"}
                buttonStyle={style}
                buttonLabel={label}
            />
        ),
        [renderModal, onSetCommunity],
    );
    return (
        <FramedBlock>
            <BlockTitle title="Community" />
            {community ? (
                <CommunityInfo
                    community={community}
                    changeButton={renderCommunityModalTrigger({
                        label: "Change",
                        style: styles.changeButton,
                    })}
                />
            ) : (
                <div className={styles.setButton}>
                    {renderCommunityModalTrigger({
                        label: "Set community",
                        style: styles.setButton,
                    })}
                </div>
            )}
        </FramedBlock>
    );
};
