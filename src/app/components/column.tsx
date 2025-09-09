import React, { ReactElement } from 'react';
import styles from './framed-block.module.css'

export const LayoutColumn = (props: { children: React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | undefined}) => {
    return <div className={styles.columnStyling}>{props.children}</div>;
};
