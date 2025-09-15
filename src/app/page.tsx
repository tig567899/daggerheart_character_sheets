"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useCookies } from "react-cookie";

import { ArmorBlock } from "@dh_sheets/app/components/armor-block/armor-block";
import { ClassFeatureBlock } from "@dh_sheets/app/components/class-feature-block/class-feature-block";
import { ExperiencesBlock } from "@dh_sheets/app/components/experiences-block/experiences-block";
import { GoldBlock } from "@dh_sheets/app/components/gold-block/gold-block";
import { CharacterInfoHeader } from "@dh_sheets/app/components/header/character-info-header";
import { HealthBlock } from "@dh_sheets/app/components/health-block/health-block";
import { AncestryBlock } from "@dh_sheets/app/components/heritage/ancestry-block/ancestry-block";
import { CommunityBlock } from "@dh_sheets/app/components/heritage/community-block/community-block";
import { HopeBlock } from "@dh_sheets/app/components/hope-block/hope-block";
import { InventoryBlock } from "@dh_sheets/app/components/inventory-block/inventory-block";
import { LayoutColumn } from "@dh_sheets/app/components/parts/framed-block/column";
import { CharacterStatRow } from "@dh_sheets/app/components/stat-block/character-stat-row";
import { SubclassBlock } from "@dh_sheets/app/components/subclass-block/subclass-block";
import { WeaponsBlock } from "@dh_sheets/app/components/weapons-block/weapons-block";
import { COOKIE_KEY } from "@dh_sheets/app/constants";
import { loadDataFromCookies } from "@dh_sheets/app/redux/character-data-store/actions";
import { CharacterDataState } from "@dh_sheets/app/redux/character-data-store/types";
import { useAppDispatch } from "@dh_sheets/app/redux/hooks";

import styles from "./page-layout.module.css";

interface CookieValues {
    charData?: CharacterDataState;
}

export default function Home() {
    const dispatch = useAppDispatch();
    const [windowWidth, setWindowWidth] = useState<number>(0);

    const [cookies] = useCookies<"charData", CookieValues>([COOKIE_KEY]);
    useEffect(() => {
        if (!cookies.charData || typeof cookies.charData === "string") {
            return;
        }
        dispatch(loadDataFromCookies(cookies.charData));
    }, [cookies.charData, dispatch]);

    const handleResize = useCallback(() => {
        setWindowWidth(window.innerWidth);
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        setWindowWidth(window.innerWidth);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const fullSizeLayout = useMemo(
        () => (
            <div className={styles.columnLayout}>
                <LayoutColumn>
                    <HealthBlock />
                    <HopeBlock />
                    <ExperiencesBlock />
                    <GoldBlock />
                    <ClassFeatureBlock />
                    <SubclassBlock />
                </LayoutColumn>
                <LayoutColumn>
                    <WeaponsBlock />
                    <ArmorBlock />
                    <InventoryBlock />
                    <AncestryBlock />
                    <CommunityBlock />
                </LayoutColumn>
            </div>
        ),
        [],
    );

    const limitedWidthLayout = useMemo(
        () => (
            <div className={styles.columnLayout}>
                <LayoutColumn fullWidth>
                    <HealthBlock />
                    <HopeBlock />
                    <ExperiencesBlock />
                    <GoldBlock />
                    <ClassFeatureBlock />
                    <SubclassBlock />
                    <WeaponsBlock />
                    <ArmorBlock />
                    <InventoryBlock />
                    <AncestryBlock />
                    <CommunityBlock />
                </LayoutColumn>
            </div>
        ),
        [],
    );

    return (
        <div className={styles.pageLayout}>
            <CharacterInfoHeader />
            <CharacterStatRow />
            {windowWidth > 600 ? fullSizeLayout : limitedWidthLayout}
        </div>
    );
}
