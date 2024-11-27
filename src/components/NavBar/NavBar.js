import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
const NavBar = () => {

    return(
        <div className={styles.navWrapper}>
         <div className={styles.nav}>
            <Link to="/"> User Management</Link>
        </div>
        <div className={styles.user} >
            <Link to="/user"> Create User</Link>
        
        </div>
        </div>
    )
}
export default NavBar;