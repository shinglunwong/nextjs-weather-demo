"use client";

import { useState } from "react";
import styles from "../styles/SearchInput.module.css";

export default function SearchInput({ city, setCity, onSearch }) {
    const [inputValue, setInputValue] = useState(city);

    const handleChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        setCity(value)
    };

    return (
        <div className={styles.container}>
            <input
                type="text"
                placeholder="Enter city"
                value={inputValue}
                onChange={handleChange}
                className={styles.input}
            />
            <button onClick={onSearch} className={styles.button}>
                Search
            </button>
        </div>
    );
}