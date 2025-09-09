import { ModifierField } from "@dh_sheets/app/constants";

export function getBaseProficiencyByLevel(level: number): number {
    if (level === 1) return 1;
    if (level < 5) return 2;
    if (level < 8) return 3;
    return 4;
}

export function isExperienceModifierField(field: ModifierField): boolean {
    return (
        field === ModifierField.EXPERIENCE_UNSELECTED ||
        field === ModifierField.EXPERIENCE_1 ||
        field === ModifierField.EXPERIENCE_2 ||
        field === ModifierField.EXPERIENCE_3 ||
        field === ModifierField.EXPERIENCE_4 ||
        field === ModifierField.EXPERIENCE_5
    );
}

export function shouldCacheModifier(field: ModifierField): boolean {
    return (
        field === ModifierField.AGILITY ||
        field === ModifierField.STRENGTH ||
        field === ModifierField.FINESSE ||
        field === ModifierField.INSTINCT ||
        field === ModifierField.PRESENCE ||
        field === ModifierField.KNOWLEDGE
    );
}
