import React from "react"

import styles from "./Header.module.css"

const Header = () => (
  <header className={styles.Header}>
    <div className={styles.Logo}>AR</div>
    <nav>
      <a
        className={styles.NavLink}
        href="https://www.behance.net/AlessioRapini"
        target="_blank"
        rel="noopener"
      >
        Selected works
      </a>
    </nav>
  </header>
)

export default Header
