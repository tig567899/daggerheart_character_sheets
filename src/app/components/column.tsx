import React, { ReactElement } from 'react';

export const LayoutColumn = (props: { children: React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | undefined}) => {
    return <div>{props.children}</div>;
};
