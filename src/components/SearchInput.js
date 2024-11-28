"use client";

import styles from "../styles/SearchInput.module.css";

export default function SearchInput({ city, setCity, onSearch }) {
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            onSearch();
        }
    };

    const handleChange = (e) => {
        setCity(e.target.value);
    };

    return (
        <div className={styles.container}>
            <label htmlFor="city-search" className={styles.label}>
                City Search
            </label>
            <div className={styles.inputGroup}>
                <input
                    id="city-search"
                    type="text"
                    placeholder="Enter city"
                    value={city}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    className={styles.input}
                    aria-label="City search"
                />
                <button onClick={onSearch} className={styles.button}>
                    Enter
                </button>
            </div>
        </div>
    );
}