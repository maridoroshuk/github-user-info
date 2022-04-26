import React from 'react'
import styles from "./Info.module.css"
import { useSelector } from "react-redux"

function Info() {
    const { user, isError, isSucces, isLoading } = useSelector(state => state.profile)




    return <div className={styles.wrapper}>
        <div className={styles.name}>
            <img src={user.avatar_url} alt="user pic" />
            <h2>{user.name}</h2>
            <p><a href={`https://github.com/${user.login}`} target="_blank">{user.login}</a></p>
        </div>
        <div className={styles.followers}>
            <p className={styles.followersNum}>{user.followers} followers</p>
            <p className={styles.followingNum}>{user.following} following</p>
        </div>
    </div>
}


export default Info