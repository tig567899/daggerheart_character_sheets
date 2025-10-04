import { getSubclassesByClass } from "@dh_sheets/app/char-class-util";
import { CharClass } from "@dh_sheets/app/constants";

export function getSubclassBlockForCharacter(charClass?: CharClass, subclass?: number) {
    if (subclass === undefined || !charClass) {
        return undefined;
    }
    return getSubclassesByClass(charClass)[subclass];
}
