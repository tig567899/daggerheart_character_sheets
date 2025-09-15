import styles from './framed-block.module.css'

export interface TitleProps {
    title: string;
}

export const BlockTitle = ({ title }: TitleProps) => {
    return <div className={styles.titleBlock}>{title}</div>
};
