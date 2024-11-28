"use client";

import { useState } from "react";
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
            <input
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                className={styles.input}
            />
            <button onClick={onSearch} className={styles.button}>
                Enter
            </button>
        </div>
    );
}