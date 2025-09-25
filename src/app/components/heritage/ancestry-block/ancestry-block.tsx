import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";

import { AncestryInfo } from "@dh_sheets/app/components/heritage/ancestry-block/ancestry-info";
import { AncestryModal } from "@dh_sheets/app/components/heritage/ancestry-block/selector-modal/ancestry-modal";
import { BlockTitle } from "@dh_sheets/app/components/parts/framed-block/block-title";
import { FramedBlock } from "@dh_sheets/app/components/parts/framed-block/framed-block";
import { ModalTrigger } from "@dh_sheets/app/components/parts/modal/modal-trigger";
import { IconSize } from "@dh_sheets/app/constants";
import { AncestriesList } from "@dh_sheets/app/data/ancestry-data";
import {
    removeModifier,
    setAncestry,
    setModifierForField,
} from "@dh_sheets/app/redux/character-data-store/actions";
import { getPrimaryAncestry } from "@dh_sheets/app/redux/character-data-store/selector";
import { useAppDispatch } from "@dh_sheets/app/redux/hooks";
import { Ancestry } from "@dh_sheets/app/types";

import { EditIcon } from "@icons/edit-icon";
import { PlusIcon } from "@icons/plus-icon";

import styles from "../heritage-block.module.css";

export const AncestryBlock = () => {
    const ancestryName = useSelector(getPrimaryAncestry);
    const { ancestry, index } = useMemo(() => {
        const index = AncestriesList.findIndex(
            (entry) => entry.name === ancestryName,
        );

        return { ancestry: AncestriesList[index], index };
    }, [ancestryName]);

    const dispatch = useAppDispatch();

    const renderModal = useCallback(
        (
            onSelect: (...props: any) => void,
            onClose: () => void,
            _modalId: string,
            key: string,
        ) => {
            return (
                <AncestryModal
                    key={key}
                    onSelect={onSelect}
                    onClose={onClose}
                    initialAncestryIndex={index}
                />
            );
        },
        [index],
    );

    const onSetAncestry = useCallback(
        (newAncestry?: Ancestry) => {
            dispatch(setAncestry(newAncestry?.name));
            ancestry?.abilities.forEach((ability) =>
                ability.modifier?.forEach((modifier) => {
                    dispatch(removeModifier(modifier.modifierKey));
                }),
            );
            newAncestry?.abilities.forEach((ability) =>
                ability.modifier?.forEach((modifier) => {
                    dispatch(
                        setModifierForField({
                            modifierKey: modifier.modifierKey,
                            modifier: modifier.bonus,
                            modifierField: modifier.field,
                        }),
                    );
                }),
            );
        },
        [dispatch, ancestry],
    );

    const plusIcon = useMemo(() => <PlusIcon />, []);
    const editIcon = useMemo(() => <EditIcon size={IconSize.LARGE} />, []);

    const renderAncestryModalTrigger = useCallback(
        ({
            label,
            style,
            isEdit,
        }: {
            label: string;
            style: string;
            isEdit?: boolean;
        }) => (
            <ModalTrigger
                renderModal={renderModal}
                onSelect={onSetAncestry}
                keyPrefix={"ancestry-select-modal"}
                className={style}
                label={label}
                icon={isEdit ? editIcon : plusIcon}
                size={isEdit ? IconSize.LARGE : undefined}
                isIconButton={isEdit}
                bordered={!isEdit}
            />
        ),
        [renderModal, onSetAncestry, editIcon, plusIcon],
    );

    return (
        <FramedBlock>
            <BlockTitle title="Ancestry" />
            {ancestry ? (
                <AncestryInfo
                    ancestry={ancestry}
                    changeButton={renderAncestryModalTrigger({
                        label: "Change",
                        style: styles.changeButton,
                        isEdit: true,
                    })}
                />
            ) : (
                <div className={styles.setButton}>
                    {renderAncestryModalTrigger({
                        label: "Set ancestry",
                        style: styles.setButton,
                    })}
                </div>
            )}
        </FramedBlock>
    );
};
