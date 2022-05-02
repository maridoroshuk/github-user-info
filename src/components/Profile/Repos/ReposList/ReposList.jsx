import React from "react"
import styles from "./ReposList.module.css"

export function ReposList({ repos, user }) {
	return (
		<>
			<h2 className={styles.title}>
				Repositories (
				<span>{user.public_repos}</span>
				)
			</h2>
			<div className={styles.repos}>
				<ul >
					{repos.map((repo) => (
						<li key={repo.id}>
							<h3><a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a></h3>
							<p>{repo.description}</p>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}
