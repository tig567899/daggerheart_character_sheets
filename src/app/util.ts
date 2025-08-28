import { CharClass } from "@dh_sheets/app/types";

export function getBaseEvasionByClass(className: CharClass) {
    switch(className){
        case CharClass.BARD:
            return 10;
        case CharClass.DRUID:
            return 10;
        case CharClass.GUARDIAN:
            return 9;
        case CharClass.RANGER:
            return 12;
        case CharClass.ROGUE:
            return 12;
        case CharClass.SERAPH:
            return 9;
        case CharClass.SORCERER:
            return 10;
        case CharClass.WARRIOR:
            return 11;
        case CharClass.WIZARD:
            return 11;
    }
}

export function getBaseHpByClass(className: CharClass) {
    switch(className){
        case CharClass.BARD:
            return 5;
        case CharClass.DRUID:
            return 6;
        case CharClass.GUARDIAN:
            return 7;
        case CharClass.RANGER:
            return 6;
        case CharClass.ROGUE:
            return 6;
        case CharClass.SERAPH:
            return 7;
        case CharClass.SORCERER:
            return 6;
        case CharClass.WARRIOR:
            return 6;
        case CharClass.WIZARD:
            return 5;
    }
}
