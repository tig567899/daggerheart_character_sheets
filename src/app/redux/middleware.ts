import { COOKIE_KEY } from "@dh_sheets/app/constants";

export const saveData = (store: any) => (next: any) => (action: any) => {
    const result = next(action);
    // Save as cookie here;

    // Don't save cookies if we just loaded cookies
    if (action.type === "Load data from cookies") {
        return result;
    }

    const charData = store.getState().characterData;
    const dataStr = encodeURIComponent(JSON.stringify(charData));

    document.cookie = `${COOKIE_KEY}=${dataStr}`;

    return result;
};
