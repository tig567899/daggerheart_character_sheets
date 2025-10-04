import { ModifierField } from "@dh_sheets/app/constants";
import {
    getModifierByField,
    getModifierListByField,
} from "@dh_sheets/app/redux/character-data-store/selector";
import { useAppSelector } from "@dh_sheets/app/redux/hooks";

export const useStatModifiers = () => {
    const agilityMod = useAppSelector((state) =>
        getModifierByField(state, ModifierField.AGILITY),
    );
    const strengthMod = useAppSelector((state) =>
        getModifierByField(state, ModifierField.STRENGTH),
    );
    const finesseMod = useAppSelector((state) =>
        getModifierByField(state, ModifierField.FINESSE),
    );
    const instinctMod = useAppSelector((state) =>
        getModifierByField(state, ModifierField.INSTINCT),
    );
    const presenceMod = useAppSelector((state) =>
        getModifierByField(state, ModifierField.PRESENCE),
    );
    const knowledgeMod = useAppSelector((state) =>
        getModifierByField(state, ModifierField.KNOWLEDGE),
    );
    const allStatsMod = useAppSelector((state) =>
        getModifierByField(state, ModifierField.ALL_STATS),
    );

    return {
        agilityMod,
        strengthMod,
        finesseMod,
        instinctMod,
        presenceMod,
        knowledgeMod,
        allStatsMod,
    };
};

export const useStatModLists = () => {
    const allStatsLists = useAppSelector((state) =>
        getModifierListByField(state, ModifierField.ALL_STATS),
    );

    const agilityLists = useAppSelector((state) =>
        getModifierListByField(state, ModifierField.AGILITY),
    );
    const strengthLists = useAppSelector((state) =>
        getModifierListByField(state, ModifierField.STRENGTH),
    );
    const finesseLists = useAppSelector((state) =>
        getModifierListByField(state, ModifierField.FINESSE),
    );
    const instinctLists = useAppSelector((state) =>
        getModifierListByField(state, ModifierField.INSTINCT),
    );
    const presenceLists = useAppSelector((state) =>
        getModifierListByField(state, ModifierField.PRESENCE),
    );
    const knowledgeLists = useAppSelector((state) =>
        getModifierListByField(state, ModifierField.KNOWLEDGE),
    );

    return [
        [...agilityLists, ...allStatsLists],
        [...strengthLists, ...allStatsLists],
        [...finesseLists, ...allStatsLists],
        [...instinctLists, ...allStatsLists],
        [...presenceLists, ...allStatsLists],
        [...knowledgeLists, ...allStatsLists],
    ];
};
