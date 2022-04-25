import React, { useEffect, useState } from 'react'
import styles from "./Search.module.css"
import SearchIcon from "../../../assets/search-icon.png"
import { fetchRepos, fetchUserProfile } from '../../../store/features/user/userSlice'
import { useDispatch } from 'react-redux'

function Search() {
    const [userInut, setUserInput] = useState("")
    const dispatch = useDispatch()


    const userInputChangeHandler = (e) => {
        setUserInput(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(fetchUserProfile(userInut))
        setUserInput("")
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