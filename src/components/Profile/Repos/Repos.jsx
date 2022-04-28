import React from 'react'
import { useSelector } from 'react-redux'
import Empty from '../../shared/Empty'
import styles from "./Repos.module.css"
import ReposIcon from '../../../assets/repos.png'
import Pages from '../../Pages/Pages'
import ReposList from './ReposList'

function Repos() {
    const { repos, user } = useSelector(state => state.profile)

    const isReposEmpty = repos.length > 0 ? false : true


    return (
        <div className={styles.wrapper}>
            {!isReposEmpty && <>
                <div className={styles.repos}>
                    <ReposList repos={repos} user={user} />
                </div>
                <div className={styles.pages}>
                    <Pages />
                </div>
            </>
            }
            {isReposEmpty &&
                <Empty img={ReposIcon} alt="no repositories found" text="Repository list is empty" />}
        </div>
    )
}

export default Repos