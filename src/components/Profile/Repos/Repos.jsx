import React from 'react'
import { useSelector } from 'react-redux'
import Empty from '../../shared/Empty'
import styles from "./Repos.module.css"
import ReposIcon from '../../../assets/repos.png'
import Pages from '../../Pages/Pages'

function Repos() {
    const { repos, user, isError, isSucces, isLoading } = useSelector(state => state.profile)

    const isReposEmpty = repos.length > 0 ? false : true

    return (
        <div className={styles.wrapper}>
            {!isReposEmpty && <>
                <h2>Repositories (<span>{user.public_repos}</span>)</h2>
                <ul className={styles.repos}>
                    {repos.map((repo) => (
                        <li key={repo.id}>
                            <h3><a href={`https://github.com/${repo.full_name}`} target='_blank'>{repo.name}</a></h3>
                            <p>{repo.description}</p>
                        </li>
                    ))}
                </ul>
                <Pages />
            </>
            }
            {isReposEmpty &&
                <Empty img={ReposIcon} alt="no repositories found" text="Repository list is empty" />}
        </div>
    )
}

export default Repos