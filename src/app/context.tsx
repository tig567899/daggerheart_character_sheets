import { createContext } from "react";

export const PageContext = createContext({
    theme: 'light',
    limitedWidth: false,
})