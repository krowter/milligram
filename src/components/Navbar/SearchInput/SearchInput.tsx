import { useState } from 'react'
import styles from './searchInput.module.css'

export const SearchInput = () => {
    const [value, setValue] = useState('')

    return (
        <form role="search" className={styles.searchInputWrapper}>
            <input
                type="search"
                placeholder="Search"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={styles.searchInput}
            />
            <button
                aria-label="Clear the search box"
                className={styles.clearButton}
                onClick={() => setValue('')}
                type="button"
            >
                &times;
            </button>
        </form>
    )
}
