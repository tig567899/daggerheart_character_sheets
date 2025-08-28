'use client';

import { CharacterInfoHeader } from '@dh_sheets/app/components/header/character-info-header';
import { CharacterStatRow } from '@dh_sheets/app/components/stat-row/character-stat-row';

import styles from './page-layout.module.css';
import { LayoutColumn } from '@dh_sheets/app/components/column';
import { HealthBlock } from '@dh_sheets/app/components/health-block/health-block';

export default function Home() {
    return (
        <div>
            <CharacterInfoHeader />
            <CharacterStatRow />
            <div className={styles.columnLayout}>
                <LayoutColumn>
                    <HealthBlock />
                </LayoutColumn>
                <LayoutColumn ><div></div></LayoutColumn>
            </div>
        </div>
    );
}
