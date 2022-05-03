import React from "react"
import styles from "./Info.module.css"

export function Info({ user }) {
	return (
		<div className={styles.wrapper}>
			<div>
				<img className={styles.avatar} src={user.avatar_url} alt="user pic" />
				<h2 className={styles.name}>{user.name}</h2>
				<p className={styles.username}><a href={user.html_url} target="_blank" rel="noreferrer">{user.login}</a></p>
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
