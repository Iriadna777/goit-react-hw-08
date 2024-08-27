import React from "react";
import { NavLink } from "react-router-dom";
// import { AuthNav } from "./AuthNav";
import styles from "./AuthNav.module.css";

const Navigation = () => (
  <nav className={styles.nav}>
    <NavLink
      to="/"
      end
      className={({ isActive }) =>
        isActive ? `${styles.link} ${styles.activeLink}` : styles.link
      }
    >
      Home
    </NavLink>
    <NavLink
      to="/contacts"
      end
      className={({ isActive }) =>
        isActive ? `${styles.link} ${styles.activeLink}` : styles.link
      }
    >
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;

// const AuthNav = () => (
//   <nav className={styles.authNav}>
//     <NavLink to="/register" className={styles.link} activeClassName={styles.activeLink}>
//       Register
//     </NavLink>
//     <NavLink to="/login" className={styles.link} activeClassName={styles.activeLink}>
//       Login
//     </NavLink>
//   </nav>
// );
