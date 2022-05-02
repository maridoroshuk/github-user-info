import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import styles from "./Search.module.css"
import SearchIcon from "../../../assets/search-icon.png"
import { fetchRepos, fetchUserProfile } from "../../../store/features/user/userSlice"

export function Search() {
    const [userInut, setUserInput] = useState("")
    const dispatch = useDispatch()

    const navigate = useNavigate()
    const goProfile = () => navigate(`/user/${userInut}`, { replace: true })

    const userInputChangeHandler = (e) => {
        setUserInput(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(fetchUserProfile(userInut))
        dispatch(fetchRepos({ user: userInut }))
        goProfile()
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
				placeholder="Enter GitHub username"
			/>
		</form>
	</div>
    )
}
