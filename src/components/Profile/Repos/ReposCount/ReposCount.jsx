import React from "react"
import styles from "./ReposCount.module.css"

export function ReposCount({ user, page, repos }) {
	const reposTotal = user.public_repos
	const reposQtyMoreFour = reposTotal > 4

	const upper = (page * 4) > reposTotal ? reposTotal : (page * 4)
	const lower = upper - repos.length + 1

	return (
		<>
			{reposQtyMoreFour && <div className={styles.wrapper}>{`${lower}-${upper} of ${reposTotal} items`}</div>}
			{!reposQtyMoreFour && <div className={styles.wrapper}>{`${reposTotal} of ${reposTotal} items`}</div>}
		</>
	)
}