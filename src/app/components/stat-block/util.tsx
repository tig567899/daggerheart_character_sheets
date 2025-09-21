import { ModifierField } from "@dh_sheets/app/constants";
import { getModifierByField } from "@dh_sheets/app/redux/character-data-store/selector";
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
