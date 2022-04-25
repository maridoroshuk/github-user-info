import React from 'react'
import { useSelector } from 'react-redux'
import styles from "./Repos.module.css"

function Repos() {
    const { repos, user, isError, isSucces, isLoading } = useSelector(state => state.profile)
    console.log(repos)

    return (
        <div className={styles.wrapper}>
            <h2>Repositories (<span>{user.public_repos}</span>)</h2>
            <ul className={styles.repos}>
                {repos.map((repo) => (
                    <li>
                        <h3>{repo.name}</h3>
                        <p>{repo.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Repos