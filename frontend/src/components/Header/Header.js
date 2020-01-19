import React from "react"
import PropTypes from "prop-types"

import styles from "./Header.module.css"

/**
 * Header displays information about the author
 */
const Header = ({ className, portfolio }) => (
  <header
    className={`
    ${styles.Header}
    ${portfolio && styles.portfolio}
    ${className}
  `}
  >
    <p className={styles.author}>Alessio Rapini</p>
    {!portfolio && (
      <p className={styles.role}>UX/UI design, Art direction, UI development</p>
    )}
    {portfolio && <div />}
  </header>
)

Header.propTypes = {
  /** Header optional classname */
  className: PropTypes.string,
  /** Whether Header is included in the portfolio page */
  portfolio: PropTypes.bool,
}

Header.defaultProps = {
  className: "",
  portfolio: false,
}

export default Header
