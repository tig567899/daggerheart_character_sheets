export enum CharClass {
    BARD = "Bard",
    DRUID = "Druid",
    GUARDIAN = "Guardian",
    RANGER = "Ranger",
    ROGUE = "Rogue",
    SERAPH = "Seraph",
    SORCERER = "Sorcerer",
    WARRIOR = "Warrior",
    WIZARD = "Wizard",
}

export enum DistanceRange {
    MELEE = "Melee",
    VERY_CLOSE = "Very close",
    CLOSE = "Close",
    FAR = "Far",
    VERY_FAR = "Very far",
    OUT_OF_RANGE = "Out of range", // I'm not sure this is every used, but whatever.
}

export enum Dice {
    D4 = "d4",
    D6 = "d6",
    D8 = "d8",
    D10 = "d10",
    D12 = "d12",
    D20 = "d20",
    CUSTOM = "custom",
}

export enum WeaponBurden {
    ONE_HANDED = "One-Handed",
    TWO_HANDED = "Two-Handed",
}

export enum AbilityName {
    AGILITY = "Agility",
    STRENGTH = "Strength",
    FINESSE = "Finesse",
    INSTINCT = "Instinct",
    PRESENCE = "Presence",
    KNOWLEDGE = "Knowledge",
}

export enum ModifierField {
    // Stats
    AGILITY = "agi",
    STRENGTH = "str",
    FINESSE = "fin",
    INSTINCT = "ins",
    PRESENCE = "pre",
    KNOWLEDGE = "kno",
    ALL_STATS = "all_stats",
    // Resistances
    EVASION = "eva",
    ARMOR_SCORE = "arm",
    MAJOR_THRESHOLD = "maj_t",
    SEVERE_THRESHOLD = "sev_t",
    // Health
    MAX_HP = "m_hp",
    MAX_STRESS = "m_sts",
    // Experiences
    EXPERIENCE_UNSELECTED = "exp_u",
    EXPERIENCE_1 = "exp_1",
    EXPERIENCE_2 = "exp_2",
    EXPERIENCE_3 = "exp_3",
    EXPERIENCE_4 = "exp_4",
    EXPERIENCE_5 = "exp_5",
    // Proficiency
    PROFICIENCY = "prof",
    // Extra cards
    DOMAIN_CARDS = "domain",
    // Subclass
    MAIN_SUBCLASS = "subclass",
    SECONDARY_SUBCLASS = "secondary_subclass",
    // Multiclass
    MULTICLASS = "multiclass",
}

export const abilityToModifierFieldMap = new Map([
    [AbilityName.AGILITY, ModifierField.AGILITY],
    [AbilityName.STRENGTH, ModifierField.STRENGTH],
    [AbilityName.FINESSE, ModifierField.FINESSE],
    [AbilityName.INSTINCT, ModifierField.INSTINCT],
    [AbilityName.PRESENCE, ModifierField.PRESENCE],
    [AbilityName.KNOWLEDGE, ModifierField.KNOWLEDGE],
]);

export const ModifierFieldToAbilityNameMap = new Map([
    [ModifierField.AGILITY, AbilityName.AGILITY],
    [ModifierField.STRENGTH, AbilityName.STRENGTH],
    [ModifierField.FINESSE, AbilityName.FINESSE],
    [ModifierField.INSTINCT, AbilityName.INSTINCT],
    [ModifierField.PRESENCE, AbilityName.PRESENCE],
    [ModifierField.KNOWLEDGE, AbilityName.KNOWLEDGE],
]);

export const abilityUsesArray = [
    ["Sprint", "Leap", "Maneuver"],
    ["Lift", "Smash", "Grapple"],
    ["Control", "Hide", "Tinker"],
    ["Perceive", "Sense", "Navigate"],
    ["Charm", "Perform", "Deceive"],
    ["Recall", "Analyze", "Comprehend"],
];

export const ExperienceList = [
    ModifierField.EXPERIENCE_1,
    ModifierField.EXPERIENCE_2,
    ModifierField.EXPERIENCE_3,
    ModifierField.EXPERIENCE_4,
    ModifierField.EXPERIENCE_5,
];

export const AbilityNames: AbilityName[] = [
    AbilityName.AGILITY,
    AbilityName.STRENGTH,
    AbilityName.FINESSE,
    AbilityName.INSTINCT,
    AbilityName.PRESENCE,
    AbilityName.KNOWLEDGE,
];

export enum ModifierKey {
    // Initial stat modifications
    INITIAL_MOD_PLUS_2 = "initial_mod_plus_2",
    INIIIAL_MOD_PLUS_1_1 = "initial_mod_plus_1_1",
    INIIIAL_MOD_PLUS_1_2 = "initial_mod_plus_1_2",
    INIIIAL_MOD_MINUS_1 = "initial_mod_minus_1",
    // Ancestry bonuses
    CLANK_ANCESTRY_BONUS = "clank_ancestry_bonus",
    GALAPA_ANCESTRY_MAJOR_BONUS = "galapa_ancestry_major_bonus",
    GALAPA_ANCESTRY_SEVERE_BONUS = "galapa_ancestry_severe_bonus",
    GIANT_ANCESTRY_BONUS = "giant_ancestry_bonus",
    HUMAN_ANCESTRY_BONUS = "human_ancestry_bonus",
    SIMIAH_ANCESTRY_BONUS = "simiah_ancestry_bonus",
    // Armor bonuses
    GAMBESON_ARMOR = "gambeson_armor",
    CHAINMAIL_ARMOR = "chainmail_armor",
    FULL_PLATE_ARMOR_EVA = "full_plate_armor_1",
    FULL_PLATE_ARMOR_AGI = "full_plate_armor_2",
    BELLARMOI_FINE_ARMOR = "bellarmoi_fine_armor",
    SAVIOR_CHAIN_STATS = "savior_chainmail_stats",
    SAVIOR_CHAIN_EVA = "savior_chainmail_evasion",
    // Primary Weapon Bonuses
    HEAVY_WEAPON = "heavy_weapon_evasion",
    MASSIVE_WEAPON = "massive_weapon_evasion",
    CUMBERSOME_WEAPON = "cumbersome_weapon_finesse",
    BRAVE_WEAPON_EVA = "brave_weapon_evasion",
    BRAVE_WEAPON_SEV = "brave_weapon_severe",
    PROTECTIVE_WEAPON = "protective_weapon_armor",
    DESTRUCTIVE_WEAPON = "destructive_weapon_agility",

    // Secondary Weapon Bonuses
    PROTECTIVE_SECONDARY_WEAPON = "protective_secondary_weapon_armor",
    BARRIER_WEAPON_ARMOR = "barrier_weapon_armor",
    BARRIER_WEAPON_EVA = "barrier_weapon_evasion",
    DOUBLE_DUTY_WEAPON = "double_duty_weapon_armor",

    // Subclass bonuses
    STALWART_GUARDIAN_FOUND_MAJ = "stalwart_guardian_foundation_major",
    STALWART_GUARDIAN_FOUND_SEV = "stalwart_guardian_foundation_severe",
    STALWART_GUARDIAN_SPEC_MAJ = "stalwart_guardian_spec_major",
    STALWART_GUARDIAN_SPEC_SEV = "stalwart_guardian_spec_severe",
    STALWART_GUARDIAN_MAST_MAJ = "stalwart_guardian_mastery_major",
    STALWART_GUARDIAN_MAST_SEV = "stalwart_guardian_mastery_severe",
    VENGEANCE_GUARDIAN_FOUND_STRESS = "vengeance_guardian_found_stress",
    NIGHTWALKER_ROGUE_EVA = "night_walker_evasion",
    WINGED_SENTINEL_SERAPH_SEV = "winged_sentinel_seraph_evasion",
    KNOWLEDGE_WIZARD_FOUND_DOMAIN = "knowledge_wizard_foundation_domain",
    KNOWLEDGE_WIZARD_SPEC_DOMAIN = "knowledge_wizard_spec_domain",
    KNOWLEDGE_WIZARD_MAST_DOMAIN = "knowledge_wizard_mastery_domain",
    WAR_WIZARD_HP = "war_wizard_hp",

    // Level-Up Bonuses
    TIER_2_ASI_1_1 = "tier_2_asi_1_1",
    TIER_2_ASI_1_2 = "tier_2_asi_1_2",
    TIER_2_ASI_2_1 = "tier_2_asi_2_1",
    TIER_2_ASI_2_2 = "tier_2_asi_2_2",
    TIER_2_ASI_3_1 = "tier_2_asi_3_1",
    TIER_2_ASI_3_2 = "tier_2_asi_3_2",
    TIER_2_HP_1 = "tier_2_hp_1",
    TIER_2_HP_2 = "tier_2_hp_2",
    TIER_2_STRESS_1 = "tier_2_stress_1",
    TIER_2_STRESS_2 = "tier_2_stress_2",
    TIER_2_EXP_1 = "tier_2_experience_boost_1",
    TIER_2_EXP_2 = "tier_2_experience_boost_2",
    TIER_2_DOMAIN = "tier_2_domain_card",
    TIER_2_EVA = "tier_2_evasion",

    TIER_3_ASI_1_1 = "tier_3_asi_1_1",
    TIER_3_ASI_1_2 = "tier_3_asi_1_2",
    TIER_3_ASI_2_1 = "tier_3_asi_2_1",
    TIER_3_ASI_2_2 = "tier_3_asi_2_2",
    TIER_3_ASI_3_1 = "tier_3_asi_3_1",
    TIER_3_ASI_3_2 = "tier_3_asi_3_2",
    TIER_3_HP_1 = "tier_3_hp_1",
    TIER_3_HP_2 = "tier_3_hp_2",
    TIER_3_STRESS_1 = "tier_3_stress_1",
    TIER_3_STRESS_2 = "tier_3_stress_2",
    TIER_3_EXP_1 = "tier_3_experience_boost_1",
    TIER_3_EXP_2 = "tier_3_experience_boost_2",
    TIER_3_DOMAIN = "tier_3_domain_card",
    TIER_3_EVA = "tier_3_evasion",
    TIER_3_SUBCLASS = "tier_3_subclass_upgrade",
    TIER_3_PROFICIENCY = "tier_3_proficiency",

    TIER_4_ASI_1_1 = "tier_4_asi_1_1",
    TIER_4_ASI_1_2 = "tier_4_asi_1_2",
    TIER_4_ASI_2_1 = "tier_4_asi_2_1",
    TIER_4_ASI_2_2 = "tier_4_asi_2_2",
    TIER_4_ASI_3_1 = "tier_4_asi_3_1",
    TIER_4_ASI_3_2 = "tier_4_asi_3_2",
    TIER_4_HP_1 = "tier_4_hp_1",
    TIER_4_HP_2 = "tier_4_hp_2",
    TIER_4_STRESS_1 = "tier_4_stress_1",
    TIER_4_STRESS_2 = "tier_4_stress_2",
    TIER_4_EXP_1 = "tier_4_experience_boost_1",
    TIER_4_EXP_2 = "tier_4_experience_boost_2",
    TIER_4_DOMAIN = "tier_4_domain_card",
    TIER_4_EVA = "tier_4_evasion",
    TIER_4_SUBCLASS = "tier_4_subclass_upgrade",
    TIER_4_PROFICIENCY = "tier_4_proficiency",

    MULTICLASS = "multiclass",
}

export const ModifierKeyToDescripionMap = new Map<ModifierKey, string>([
    // Initial stat modifications
    [ModifierKey.INITIAL_MOD_PLUS_2, "initial modifier"],
    [ModifierKey.INIIIAL_MOD_PLUS_1_1, "initial modifier"],
    [ModifierKey.INIIIAL_MOD_PLUS_1_2, "initial modifier"],
    [ModifierKey.INIIIAL_MOD_MINUS_1, "initial modifier"],

    // Ancestry bonuses
    [ModifierKey.CLANK_ANCESTRY_BONUS, "Clank ancestry"],
    [ModifierKey.GALAPA_ANCESTRY_MAJOR_BONUS, "Galapa ancestry"],
    [ModifierKey.GALAPA_ANCESTRY_SEVERE_BONUS, "Galapa ancestry"],
    [ModifierKey.GIANT_ANCESTRY_BONUS, "Giant ancestry"],
    [ModifierKey.HUMAN_ANCESTRY_BONUS, "Human ancestry"],
    [ModifierKey.SIMIAH_ANCESTRY_BONUS, "Simiah ancestry"],

    // Armor bonuses
    [ModifierKey.GAMBESON_ARMOR, "Gambeson armor"],
    [ModifierKey.CHAINMAIL_ARMOR, "Chainmail armor"],
    [ModifierKey.FULL_PLATE_ARMOR_EVA, "Full Plate armor"],
    [ModifierKey.FULL_PLATE_ARMOR_AGI, "Full Plate armor"],
    [ModifierKey.BELLARMOI_FINE_ARMOR, "Bellamrmoi Fine Armor"],
    [ModifierKey.SAVIOR_CHAIN_STATS, "Savior Chainmail armor"],
    [ModifierKey.SAVIOR_CHAIN_EVA, "Savior Chainmail armor"],

    // Primary Weapon Bonuses
    [ModifierKey.HEAVY_WEAPON, "primary weapon"],
    [ModifierKey.MASSIVE_WEAPON, "primary weapon"],
    [ModifierKey.CUMBERSOME_WEAPON, "primary weapon"],
    [ModifierKey.BRAVE_WEAPON_EVA, "primary weapon"],
    [ModifierKey.BRAVE_WEAPON_SEV, "primary weapon"],
    [ModifierKey.PROTECTIVE_WEAPON, "primary weapon"],
    [ModifierKey.DESTRUCTIVE_WEAPON, "primary weapon"],

    // Secondary Weapon Bonuses
    [
        ModifierKey.PROTECTIVE_SECONDARY_WEAPON,
        "secondary weapon",
    ],
    [ModifierKey.BARRIER_WEAPON_ARMOR, "secondary weapon"],
    [ModifierKey.BARRIER_WEAPON_EVA, "secondary weapon"],
    [ModifierKey.DOUBLE_DUTY_WEAPON, "secondary weapon"],

    // Subclass bonuses
    [
        ModifierKey.STALWART_GUARDIAN_FOUND_MAJ,
        "Stalwart Guardian: Unwavering",
    ],
    [
        ModifierKey.STALWART_GUARDIAN_FOUND_SEV,
        "Stalwart Guardian: Unwavering",
    ],
    [ModifierKey.STALWART_GUARDIAN_SPEC_MAJ, "Stalwart Guardian: Unrelenting"],
    [ModifierKey.STALWART_GUARDIAN_SPEC_SEV, "Stalwart Guardian: Unrelenting"],
    [ModifierKey.STALWART_GUARDIAN_MAST_MAJ, "Stalwart Guardian: Undaunted"],
    [
        ModifierKey.STALWART_GUARDIAN_MAST_SEV,
        "Stalwart Guardian: Undaunted",
    ],
    [
        ModifierKey.VENGEANCE_GUARDIAN_FOUND_STRESS,
        "Vengeance Guardian: At Ease",
    ],
    [ModifierKey.NIGHTWALKER_ROGUE_EVA, "Nightwalker Rogue: Fleeting Shadow"],
    [ModifierKey.WINGED_SENTINEL_SERAPH_SEV, "Winged Sentinel Seraph: Ascendant"],
    [
        ModifierKey.KNOWLEDGE_WIZARD_FOUND_DOMAIN,
        "School of Knowledge Wizard: Prepared",
    ],
    [ModifierKey.KNOWLEDGE_WIZARD_SPEC_DOMAIN, "School of Knowledge Wizard: Accomplished"],
    [
        ModifierKey.KNOWLEDGE_WIZARD_MAST_DOMAIN,
        "School of Knowledge Wizard: Brilliant",
    ],
    [ModifierKey.WAR_WIZARD_HP, "School of War Wizard: Battlemage"],

    // Level-Up Bonuses
    [ModifierKey.TIER_2_ASI_1_1, "level up increase for tier 2"],
    [ModifierKey.TIER_2_ASI_1_2, "level up increase for tier 2"],
    [ModifierKey.TIER_2_ASI_2_1, "level up increase for tier 2"],
    [ModifierKey.TIER_2_ASI_2_2, "level up increase for tier 2"],
    [ModifierKey.TIER_2_ASI_3_1, "level up increase for tier 2"],
    [ModifierKey.TIER_2_ASI_3_2, "level up increase for tier 2"],
    [ModifierKey.TIER_2_HP_1, "level up increase for tier 2"],
    [ModifierKey.TIER_2_HP_2, "level up increase for tier 2"],
    [ModifierKey.TIER_2_STRESS_1, "level up increase for tier 2"],
    [ModifierKey.TIER_2_STRESS_2, "level up increase for tier 2"],
    [ModifierKey.TIER_2_EXP_1, "level up increase for tier 2"],
    [ModifierKey.TIER_2_EXP_2, "level up increase for tier 2"],
    [ModifierKey.TIER_2_DOMAIN, "level up increase for tier 2"],
    [ModifierKey.TIER_2_EVA, "level up increase for tier 2"],

    [ModifierKey.TIER_3_ASI_1_1, "level up increase for tier 3"],
    [ModifierKey.TIER_3_ASI_1_2, "level up increase for tier 3"],
    [ModifierKey.TIER_3_ASI_2_1, "level up increase for tier 3"],
    [ModifierKey.TIER_3_ASI_2_2, "level up increase for tier 3"],
    [ModifierKey.TIER_3_ASI_3_1, "level up increase for tier 3"],
    [ModifierKey.TIER_3_ASI_3_2, "level up increase for tier 3"],
    [ModifierKey.TIER_3_HP_1, "level up increase for tier 3"],
    [ModifierKey.TIER_3_HP_2, "level up increase for tier 3"],
    [ModifierKey.TIER_3_STRESS_1, "level up increase for tier 3"],
    [ModifierKey.TIER_3_STRESS_2, "level up increase for tier 3"],
    [ModifierKey.TIER_3_EXP_1, "level up increase for tier 3"],
    [ModifierKey.TIER_3_EXP_2, "level up increase for tier 3"],
    [ModifierKey.TIER_3_DOMAIN, "level up increase for tier 3"],
    [ModifierKey.TIER_3_EVA, "level up increase for tier 3"],
    [ModifierKey.TIER_3_SUBCLASS, "level up increase for tier 3"],
    [ModifierKey.TIER_3_PROFICIENCY, "level up increase for tier 3"],

    [ModifierKey.TIER_4_ASI_1_1, "level up increase for tier 4"],
    [ModifierKey.TIER_4_ASI_1_2, "level up increase for tier 4"],
    [ModifierKey.TIER_4_ASI_2_1, "level up increase for tier 4"],
    [ModifierKey.TIER_4_ASI_2_2, "level up increase for tier 4"],
    [ModifierKey.TIER_4_ASI_3_1, "level up increase for tier 4"],
    [ModifierKey.TIER_4_ASI_3_2, "level up increase for tier 4"],
    [ModifierKey.TIER_4_HP_1, "level up increase for tier 4"],
    [ModifierKey.TIER_4_HP_2, "level up increase for tier 4"],
    [ModifierKey.TIER_4_STRESS_1, "level up increase for tier 4"],
    [ModifierKey.TIER_4_STRESS_2, "level up increase for tier 4"],
    [ModifierKey.TIER_4_EXP_1, "level up increase for tier 4"],
    [ModifierKey.TIER_4_EXP_2, "level up increase for tier 4"],
    [ModifierKey.TIER_4_DOMAIN, "level up increase for tier 4"],
    [ModifierKey.TIER_4_EVA, "level up increase for tier 4"],
    [ModifierKey.TIER_4_SUBCLASS, "level up increase for tier 4"],
    [ModifierKey.TIER_4_PROFICIENCY, "level up increase for tier 4"],
]);

export enum Domains {
    ARCANA = "Arcana",
    BLADE = "Blade",
    BONE = "Bone",
    CODEX = "Codex",
    GRACE = "Grace",
    MIDNIGHT = "Midnight",
    SAGE = "Sage",
    SPLENDOR = "Splendor",
    VALOR = "Valor",
}

export enum LevelUpKey {
    TIER_2_ASI,
    TIER_2_HP,
    TIER_2_STRESS,
    TIER_2_EXP,
    TIER_2_DOMAIN,
    TIER_2_EVA,
    TIER_3_ASI,
    TIER_3_HP,
    TIER_3_STRESS,
    TIER_3_EXP,
    TIER_3_DOMAIN,
    TIER_3_EVA,
    TIER_3_SUBCLASS,
    TIER_3_PROF,
    TIER_3_MULTI,
    TIER_4_ASI,
    TIER_4_HP,
    TIER_4_STRESS,
    TIER_4_EXP,
    TIER_4_DOMAIN,
    TIER_4_EVA,
    TIER_4_SUBCLASS,
    TIER_4_PROF,
    TIER_4_MULTI,
}

export const Tier2LevelUpKeys = new Set<LevelUpKey>([
    LevelUpKey.TIER_2_ASI,
    LevelUpKey.TIER_2_HP,
    LevelUpKey.TIER_2_STRESS,
    LevelUpKey.TIER_2_EXP,
    LevelUpKey.TIER_2_DOMAIN,
    LevelUpKey.TIER_2_EVA,
]);

export const Tier3LevelUpKeys = new Set<LevelUpKey>([
    LevelUpKey.TIER_3_ASI,
    LevelUpKey.TIER_3_HP,
    LevelUpKey.TIER_3_STRESS,
    LevelUpKey.TIER_3_EXP,
    LevelUpKey.TIER_3_DOMAIN,
    LevelUpKey.TIER_3_EVA,
    LevelUpKey.TIER_3_SUBCLASS,
    LevelUpKey.TIER_3_PROF,
    LevelUpKey.TIER_3_MULTI,
]);

export const Tier4LevelUpKeys = new Set<LevelUpKey>([
    LevelUpKey.TIER_4_ASI,
    LevelUpKey.TIER_4_HP,
    LevelUpKey.TIER_4_STRESS,
    LevelUpKey.TIER_4_EXP,
    LevelUpKey.TIER_4_DOMAIN,
    LevelUpKey.TIER_4_EVA,
    LevelUpKey.TIER_4_SUBCLASS,
    LevelUpKey.TIER_4_PROF,
    LevelUpKey.TIER_4_MULTI,
]);

export const TwoPointLevelUpKeys = new Set<LevelUpKey>([
    LevelUpKey.TIER_3_MULTI,
    LevelUpKey.TIER_3_PROF,
    LevelUpKey.TIER_4_MULTI,
    LevelUpKey.TIER_4_PROF,
]);

export enum SecondarySelectionValue {
    STATS,
    EXPERIENCES,
    SUBCLASS,
    MULTICLASS,
}

export enum IconSize {
    SMALL = 16,
    MEDIUM = 18,
    LARGE = 24,
}

export const COOKIE_KEY = "charData";
