import React from "react"
import { Empty } from "../../shared/Empty"
import styles from "./Repos.module.css"
import ReposIcon from "../../../assets/repos.png"
import { Pages } from "./Pages/Pages"
import { ReposList } from "./ReposList/ReposList"
import { ReposCount } from "./ReposCount/ReposCount"

export function Repos({ repos, user, page }) {
	const isReposEmpty = repos.length === 0

	return (
		<div className={styles.wrapper}>
			{!isReposEmpty && (
				<div className={styles.container}>
					<div className={styles.repos}>
						<ReposList repos={repos} user={user} />
					</div>
					<div className={styles.pages}>
						<ReposCount user={user} page={page} repos={repos} />
						<Pages user={user} page={page} />
					</div>
				</div>
			)}
			{isReposEmpty
				&& <Empty img={ReposIcon} alt="no repositories found" text="Repository list is empty" />}
		</div>
	)
}
