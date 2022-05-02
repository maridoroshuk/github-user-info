import React from "react"
import styles from "./Profile.module.css"
import { Info } from "./Info/Info"
import { Repos } from "./Repos/Repos"

export function Profile() {
	return (
		<div className={styles.wrapper}>
			<Info />
			<Repos />
		</div>
	)
}
