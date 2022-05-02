import React from "react"
import { useSelector } from "react-redux"
import styles from "./Info.module.css"

export function Info() {
    const { user } = useSelector(state => state.profile)

    return (
	<div className={styles.wrapper}>
		<div className={styles.name}>
			<img src={user.avatar_url} alt="user pic" />
			<h2>{user.name}</h2>
			<p><a href={user.html_url} target="_blank" rel="noreferrer">{user.login}</a></p>
		</div>
		<div className={styles.followers}>
			<p className={styles.followersNum}>
				{user.followers}
				{" "}
				followers
			</p>
			<p className={styles.followingNum}>
				{user.following}
				{" "}
				following
			</p>
		</div>
	</div>
    )
}
