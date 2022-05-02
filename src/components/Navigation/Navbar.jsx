import React from "react"
import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"
import { Search } from "./Search/Search"
import Logo from "../../assets/github.png"

export function Navbar() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.section}>
				<Link to="/">
					<div className={styles.logo}>
						<img src={Logo} alt="github logo" />
					</div>
				</Link>
				<Search />
			</div>
		</div>
	)
}
