'use client'

import { dataStore } from "@dh_sheets/app/redux/store";
import { Provider } from "react-redux";
import "./globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Provider store={dataStore}>
            <html lang="en">
                <body>{children}</body>
            </html>
        </Provider>
    );
}
