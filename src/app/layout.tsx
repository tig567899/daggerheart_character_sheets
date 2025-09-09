"use client";

import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";

import { dataStore } from "@dh_sheets/app/redux/store";

import "./globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <CookiesProvider>
            <Provider store={dataStore}>
                <html lang="en">
                    <body>{children}</body>
                </html>
            </Provider>
        </CookiesProvider>
    );
}
