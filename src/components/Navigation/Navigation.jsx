import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => (
  <nav className={styles.nav}>
    <NavLink
      to="/"
      end
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Home
    </NavLink>
    <NavLink
      to="/contacts"
      end
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
