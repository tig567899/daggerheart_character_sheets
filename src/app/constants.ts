export enum CharClass {
    BARD = 'Bard',
    DRUID = 'Druid',
    GUARDIAN = 'Guardian',
    RANGER = 'Ranger',
    ROGUE = 'Rogue',
    SERAPH = 'Seraph',
    SORCERER = 'Sorcerer',
    WARRIOR = 'Warrior',
    WIZARD = 'Wizard',
}

export enum DistanceRange {
    MELEE = 'Melee',
    VERY_CLOSE = 'Very close',
    CLOSE = 'Close',
    FAR = 'Far',
    VERY_FAR = 'Very far',
    OUT_OF_RANGE = 'Out of range', // I'm not sure this is every used, but whatever.
}

export enum Dice {
    D4 = 'd4',
    D6 = 'd6',
    D8 = 'd8',
    D10 = 'd10',
    D12 = 'd12',
    D20 = 'd20',
    CUSTOM = 'custom',
}

export enum WeaponBurden {
    ONE_HANDED = 'One-Handed',
    TWO_HANDED = 'Two-Handed',
}

export enum AbilityName {
    AGILITY = 'Agility',
    STRENGTH = 'Strength',
    FINESSE = 'Finesse',
    INSTINCT = 'Instinct',
    PRESENCE = 'Presence',
    KNOWLEDGE = 'Knowledge',
};

export enum ModifierField {
    // Stats
    AGILITY = 'agi',
    STRENGTH = 'str',
    FINESSE = 'fin',
    INSTINCT = 'ins',
    PRESENCE = 'pre',
    KNOWLEDGE = 'kno',
    // Resistances
    EVASION = 'eva',
    ARMOR_SCORE = 'arm',
    MAJOR_THRESHOLD = 'maj_t',
    SEVERE_THRESHOLD = 'sev_t',
    // Health
    MAX_HP = "m_hp",
    MAX_STRESS = 'm_sts',
    // Experiences
    EXPERIENCE_UNSELECTED = "exp_u",
    EXPERIENCE_1 = "exp_1",
    EXPERIENCE_2 = "exp_2",
    EXPERIENCE_3 = "exp_3",
    EXPERIENCE_4 = "exp_4",
    EXPERIENCE_5 = "exp_5",
    // Proficiency
    PROFICIENCY = "prof",
};

export enum ModifierIncreaseSource {
    // Proficiency
    PROFICIENCY,
    // Stats
    AGILITY,
    STRENGTH,
    FINESSE,
    INSTINCT,
    PRESENCE,
    KNOWLEDGE,
}

export const abilityToModifierFieldMap = new Map([
    [AbilityName.AGILITY, ModifierField.AGILITY],
    [AbilityName.STRENGTH, ModifierField.STRENGTH],
    [AbilityName.FINESSE, ModifierField.FINESSE],
    [AbilityName.INSTINCT, ModifierField.INSTINCT],
    [AbilityName.PRESENCE, ModifierField.PRESENCE],
    [AbilityName.KNOWLEDGE, ModifierField.KNOWLEDGE],
]);

export enum ModifierKey {
    // Initial stat modifications
    INITIAL_MOD_PLUS_2 = 'initial_mod_plus_2',
    INIIIAL_MOD_PLUS_1_1 = 'initial_mod_plus_1_1',
    INIIIAL_MOD_PLUS_1_2 = 'initial_mod_plus_1_2',
    INIIIAL_MOD_MINUS_1 = 'initial_mod_minus_1',
    // Ancestry Bonuses
    CLANK_ANCESTRY_BONUS = 'clank_ancestry_bonus',
    GALAPA_ANCESTRY_MAJOR_BONUS = 'galapa_ancestry_major_bonus',
    GALAPA_ANCESTRY_SEVERE_BONUS = 'galapa_ancestry_severe_bonus',
    GIANT_ANCESTRY_BONUS = 'giant_ancestry_bonus',
    HUMAN_ANCESTRY_BONUS = 'human_ancestry_bonus',
    SIMIAH_ANCESTRY_BONUS = 'simiah_ancestry_bonus',
}

export const COOKIE_KEY = 'charData';