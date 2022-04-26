import React from "react"
import styles from "./Navbar.module.css"
import Search from "./Search/Search"
import Logo from "../../assets/github.png"

function Navbar() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.section}>
                <div className={styles.logo}>
                    <img src={Logo} alt="github logo" />
                </div>
                <Search />
            </div>

        </div>
    );
}

export default Navbar;
