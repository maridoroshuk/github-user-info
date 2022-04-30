import React from "react"
import styles from "./Navbar.module.css"
import Search from "./Search/Search"
import Logo from "../../assets/github.png"
import { Link } from "react-router-dom";

function Navbar() {
    return (

        <div className={styles.wrapper}>
            <div className={styles.section}>
                <Link to={"/"}>
                    <div className={styles.logo}>
                        <img src={Logo} alt="github logo" />
                    </div>
                </Link>
                <Search />
            </div>
        </div>

    );
}

export default Navbar;
