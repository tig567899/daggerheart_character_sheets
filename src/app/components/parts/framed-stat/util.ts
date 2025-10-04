import { ModifierKeyToDescripionMap } from "@dh_sheets/app/constants";
import { Modifier } from "@dh_sheets/app/types";

export function getModifierDescriptionList(modifiers?: Modifier[]) {
    return modifiers
        ?.map((modifier) => {
            if (typeof modifier.bonus !== "number") {
                return null;
            }
            return `${modifier.bonus > 0 ? "+" : ""}${modifier.bonus} from ${ModifierKeyToDescripionMap.get(modifier.modifierKey)}`;
        })
        .filter((modifier) => modifier !== null);
}
