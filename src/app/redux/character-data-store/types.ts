import { CharClass } from "@dh_sheets/app/constants";
import { ArmorData, Modifier, WeaponData } from "@dh_sheets/app/types";

export interface CharacterDataState {
    // Values which will very likely not change after character creation.
    headerData: {
        name: string;
        pronouns: string;
    };
    // Mostly fixed values, may change on level up.
    classData: {
        level: number;
        charClass: CharClass[]; // TODO Change this to an array of enums
        subclass: string;
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
        inventoryItems: string[];
    };
    experiences: string[];
    features: string[];
    modifiers: Record<string, Modifier>;
    ancestry?: string;
    secondaryAncestry?: string;
    community?: string;
}
