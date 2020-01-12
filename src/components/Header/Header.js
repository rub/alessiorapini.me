import React from "react"

import styles from "./Header.module.css"

/**
 * Header displays information about the author
 */
const Header = () => (
  <header className={styles.Header}>
    <p className={styles.author}>Alessio Rapini</p>
    <p className={styles.role}>UX/UI design, Art direction, UI development</p>
  </header>
)

export default Header
