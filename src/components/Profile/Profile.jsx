import React from "react"
import { useSelector } from "react-redux"
import styles from "./Profile.module.css"
import { Info } from "./Info/Info"
import { Repos } from "./Repos/Repos"

export function Profile() {
	const { repos, user, page } = useSelector(state => state.profile)

	return (
		<div className={styles.wrapper}>
			<Info user={user} />
			<Repos user={user} repos={repos} page={page} />
		</div>
	)
}
