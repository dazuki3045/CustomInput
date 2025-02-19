import React, { useState, useRef } from 'react';
import styles from "./CustomInput.module.css"

const CustomInput = () => {
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef(null);
    const handleFocus = () => {
        inputRef.current.focus();
    };
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            setInputValue("");
        }
    };
    return (
        <div className={styles.container}>
            <div className={styles.inputWrapper}>
                <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className={styles.input}
                />
                <button onClick={handleFocus} className={styles.button}>
                    Установить фокус
                </button>
                <div className={styles.text}>{inputValue}</div>
            </div>
        </div>
    );
};

export default CustomInput;
