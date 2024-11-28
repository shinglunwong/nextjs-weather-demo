import "../styles/globals.css";
import styles from '../styles/layout.module.css';

export const metadata = {
  title: "Nextjs Weather App",
  description: "City current weather report in Celsius",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <h1>Instant Weather Report</h1>
        </header>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          <p>A technical demonstration by Shing Lun Wong</p>
        </footer>
      </body>
    </html>
  );
}