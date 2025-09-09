import styles from "./labeled-display-box.module.css";

export interface BoxProps {
    label: string;
    contents: string;
}

export const LabeledDisplayBox = ({ label, contents }: BoxProps) => {
    return (
        <div className={styles.labeledBoxContainer}>
            <div className={styles.labeledBoxContents}>{contents}</div>
            <div className={styles.labeledBoxLabel}>{label}</div>
        </div>
    );
};
