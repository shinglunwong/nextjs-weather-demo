import styles from "@/styles/Skeleton.module.css";

export default function Skeleton() {
    return (
        <div>
            <div className={styles.display} />
            <div className={styles.container}>
                <div className={styles.card} />
                <div className={styles.card} />
                <div className={styles.card} />
                <div className={styles.card} />
                <div className={styles.card} />
                <div className={styles.card} />
            </div>
        </div>
    );
}