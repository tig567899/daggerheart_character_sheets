import { JSX, ReactElement } from "react";

import {
    AbilityName,
    Dice,
    DistanceRange,
    ModifierField,
    ModifierKey,
    WeaponBurden,
} from "@dh_sheets/app/constants";

export interface WeaponData {
    name: string;
    range: DistanceRange;
    dice: Dice;
    damageType: string;
    modifier: number;
    burden: WeaponBurden;
    features: EquipmentFeature[];
    trait: AbilityName;
    isSecondary?: boolean;
}

export interface Modifier {
    field: ModifierField;
    additionalData?: any;
    bonus: number | ModifierField;
    modifierKey: ModifierKey;
}

export interface ArmorData {
    name: string;
    majorThreshold: number;
    severeThreshold: number;
    score: number;
    features: EquipmentFeature[];
}

export interface Ability {
    name: string;
    description: (string | ReactElement | JSX.Element)[];
    clarification?: ReactElement[];
    modifier?: Modifier[];
}

export interface EquipmentFeature {
    name: string;
    description: string;
    modifiers?: Modifier[];
}

export interface Ancestry {
    name: string;
    background: string[];
    abilities: Ability[];
}

export interface Community {
    name: string;
    background: string;
    rolePlayTips: string;
    ability: Ability;
}

export interface SubclassData {
    name: string;
    description: string;
    spellcastTrait?: AbilityName;
    foundationFeatures: Ability[];
    specializationFeatures: Ability[];
    masteryFeatures: Ability[];
}

export { WeaponBurden };
