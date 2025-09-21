import { CharClass } from "@dh_sheets/app/constants";
import { ArmorData, Experiences, ItemData, LevelUpChoice, Modifier, WeaponData } from "@dh_sheets/app/types";

export interface CharacterDataState {
    // Values which will very likely not change after character creation.
    headerData: {
        name: string;
        pronouns: string;
    };
    // Mostly fixed values, may change on level up.
    classData: {
        level: number;
        charClass: CharClass[];
        subclass?: number;
        secondSubclass?: number;
    };
    // Temporary values that will change throughout a play session
    characterStateData: {
        hp: number;
        stress: number;
        stressMax: number;
        hope: number;
        goldHandfuls: number;
        goldBags: number;
        goldChests: number;
        scars: number;
        armorConsumed: number;
    };
    equipment: {
        primaryWeapon?: WeaponData;
        secondaryWeapon?: WeaponData;
        armor?: ArmorData;
        inventoryWeapons: WeaponData[];
        inventoryItems: ItemData[];
    };
    experiences: Experiences;
    features: string[];
    modifiers: Record<string, Modifier>;
    ancestry?: string;
    secondaryAncestry?: string;
    community?: string;
    levelUpChoices: LevelUpChoice[][];
}
