import classNames from "classnames";
import { PropsWithChildren } from "react";

import styles from "./framed-block.module.css";

interface BlocKProps extends PropsWithChildren {
    className?: string;
}

export const FramedBlock = ({ className, children }: BlocKProps) => {
    return (
        <div className={classNames(styles.framedBlock, className)}>
            {children}
        </div>
    );
};
