import { ModifierField } from "@dh_sheets/app/constants";
import { getModifierByField, getModifierListByField } from "@dh_sheets/app/redux/character-data-store/selector";
import { useAppSelector } from "@dh_sheets/app/redux/hooks";

export function useExperiencesModifiers() {
    const exp1Mod = useAppSelector((state) =>
        getModifierByField(state, ModifierField.EXPERIENCE_1),
    );
    const exp2Mod = useAppSelector((state) =>
        getModifierByField(state, ModifierField.EXPERIENCE_2),
    );
    const exp3Mod = useAppSelector((state) =>
        getModifierByField(state, ModifierField.EXPERIENCE_3),
    );
    const exp4Mod = useAppSelector((state) =>
        getModifierByField(state, ModifierField.EXPERIENCE_4),
    );
    const exp5Mod = useAppSelector((state) =>
        getModifierByField(state, ModifierField.EXPERIENCE_5),
    );

    return [
        exp1Mod,
        exp2Mod,
        exp3Mod,
        exp4Mod,
        exp5Mod,
    ];
}

export function useExperienceModifiersList() {
    const exp1Mod = useAppSelector((state) =>
        getModifierListByField(state, ModifierField.EXPERIENCE_1),
    );
    const exp2Mod = useAppSelector((state) =>
        getModifierListByField(state, ModifierField.EXPERIENCE_2),
    );
    const exp3Mod = useAppSelector((state) =>
        getModifierListByField(state, ModifierField.EXPERIENCE_3),
    );
    const exp4Mod = useAppSelector((state) =>
        getModifierListByField(state, ModifierField.EXPERIENCE_4),
    );
    const exp5Mod = useAppSelector((state) =>
        getModifierListByField(state, ModifierField.EXPERIENCE_5),
    );

    return [
        exp1Mod,
        exp2Mod,
        exp3Mod,
        exp4Mod,
        exp5Mod,
    ];
}