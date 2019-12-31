import React from "react"
import PropTypes from "prop-types"

import styles from "./Header.module.css"

/**
 * Header displays information relating to the website
 */
const Header = ({ authorName, authorRole }) => (
  <header className={styles.Header}>
    <p className={styles.author}>{authorName}</p>
    <p className={styles.role}>{authorRole}</p>
  </header>
)

Header.propTypes = {
  /** Author name */
  authorName: PropTypes.string.isRequired,
  /** Authore role */
  authorRole: PropTypes.string.isRequired,
}

export default Header
