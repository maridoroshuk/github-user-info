import React from "react"
import styles from "./Empty.module.css"

export function Empty({ img, alt, text }) {
	return (
		<div className={styles.wrapper}>
			<div>
				<img src={img} alt={alt} />
			</div>
			<div className={styles.text}>
				<p>{text}</p>
			</div>
		</div>
	)
}
