"use client";

import { useEffect } from "react";
import { useCookies } from "react-cookie";

import { ArmorBlock } from "@dh_sheets/app/components/armor-block/armor-block";
import { ClassFeatureBlock } from "@dh_sheets/app/components/class-feature-block/class-feature-block";
import { LayoutColumn } from "@dh_sheets/app/components/column";
import { ExperiencesBlock } from "@dh_sheets/app/components/experiences-block/experiences-block";
import { GoldBlock } from "@dh_sheets/app/components/gold-block/gold-block";
import { CharacterInfoHeader } from "@dh_sheets/app/components/header/character-info-header";
import { HealthBlock } from "@dh_sheets/app/components/health-block/health-block";
import { AncestryBlock } from "@dh_sheets/app/components/heritage/ancestry-block/ancestry-block";
import { CommunityBlock } from "@dh_sheets/app/components/heritage/community-block/community-block";
import { HopeBlock } from "@dh_sheets/app/components/hope-block/hope-block";
import { InventoryBlock } from "@dh_sheets/app/components/inventory-block/inventory-block";
import { CharacterStatRow } from "@dh_sheets/app/components/stat-row/character-stat-row";
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

    const [cookies] = useCookies<"charData", CookieValues>([COOKIE_KEY]);
    useEffect(() => {
        if (!cookies.charData || typeof cookies.charData === "string") {
            return;
        }
        dispatch(loadDataFromCookies(cookies.charData));
    }, []);
    return (
        <div className={styles.pageLayout}>
            <CharacterInfoHeader />
            <CharacterStatRow />
            <div className={styles.columnLayout}>
                <LayoutColumn>
                    <HealthBlock />
                    <HopeBlock />
                    <ExperiencesBlock />
                    <GoldBlock />
                    <ClassFeatureBlock />
                </LayoutColumn>
                <LayoutColumn>
                    <WeaponsBlock />
                    <ArmorBlock />
                    <InventoryBlock />
                    <AncestryBlock />
                    <CommunityBlock />
                </LayoutColumn>
            </div>
        </div>
    );
}
