import React from "react"

import styles from "./styles.css"

const Header = ({ authorName, authorRole }) => (
  <header className={styles.header}>
    <p>{authorName}</p>
    <p>{authorRole}</p>
  </header>
)

export default Header
