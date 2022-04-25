import React from 'react'
import Info from './Info/Info'
import styles from "./Profile.module.css"
import Repos from './Repos/Repos'

function Profile() {
    return (
        <div className={styles.wrapper}>
            <Info />
            <Repos />
        </div>
    )
}

export default Profile