import React from "react"
import ReactLoading from "react-loading"
import styles from "./Loading.module.css"

export function Loading() {
	return (
		<div className={styles.wrapper}>
			<ReactLoading type="spin" color="#0064EB" height={250} width={200} />
		</div>
	)
}
