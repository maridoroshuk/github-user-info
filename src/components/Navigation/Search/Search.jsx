import React, { useState } from 'react'
import styles from "./Search.module.css"
import SearchIcon from "../../../assets/search-icon.png"

function Search() {
    const [userInut, setUserInput] = useState("")

    const userInputChangeHandler = () => {

    }

    const submitHandler = () => {

    }
    return (
        <div className={styles.wrapper}>
            <form onSubmit={submitHandler}>
                <img src={SearchIcon} alt="search icon" />
                <label htmlFor="search" />
                <input
                    type="text"
                    value={userInut}
                    onChange={userInputChangeHandler}
                />
            </form>
        </div>
    )
}

export default Search