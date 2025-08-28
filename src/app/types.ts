export interface WeaponData {
    name: string;
    range: Range;
    dice: Dice;
    customDiceText: string;
    modifier: number;
    burden: WeaponBurden;
    features: string[];
}

export interface ArmorData {
    name: string;
    majorThreshold: number;
    severeThreshold: number;
    score: number;
    features: string[];
}

export interface Stat {
    bonus: number;
    name: string;
    mark?: boolean;
}

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

export enum Range {
    MELEE = 'Melee',
    V_CLOSE = 'Very close',
    CLOSE = 'Close',
    FAR = 'Far',
    V_FAR = 'Very far',
    OUT_OF_RANGE = 'Out of range', // I'm not sure this is every used, but whatever.
}

export enum Dice {
    D4,
    D6,
    D8,
    D10,
    D12,
    D20,
    CUSTOM,
}

export enum WeaponBurden {
    ONE_HANDED = 'One-Handed',
    TWO_HANDED = 'Two-Handed',
}
