import React from 'react'
import styles from './ReposList.module.css'

function ReposList({ repos, user }) {
    return (
        <>
            <h2>Repositories (<span>{user.public_repos}</span>)</h2>
            <ul className={styles.repos}>
                {repos.map((repo) => (
                    <li key={repo.id}>
                        <h3><a href={`https://github.com/${repo.full_name}`} target='_blank'>{repo.name}</a></h3>
                        <p>{repo.description}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ReposList