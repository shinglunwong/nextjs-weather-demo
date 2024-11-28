import styles from "../styles/WeatherCard.module.css";

export default function WeatherCard({ title, value, unit }) {
    return (
        <div className={styles.card}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.value}>
                {value} {unit}
            </p>
        </div>
    );
}