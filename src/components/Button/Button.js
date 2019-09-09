import React from "react"
import PropTypes from "prop-types"

import styles from "./Button.module.css"

/**
 * Button allows users to take actions, and make choices, with a single tap.
 */
const Button = ({ url, newTab, text }) => (
  <Link url={url} newTab={newTab}>
    <svg>
      <rect />
    </svg>
    <div className={styles.ButtonText}>
      <span>{text}</span>
      <span>{text}</span>
    </div>
  </Link>
)

const Link = ({ url, newTab, children }) =>
  newTab ? (
    <a
      href={url}
      className={styles.Button}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ) : (
    <a href={url} className={styles.Button}>
      {children}
    </a>
  )

Button.propTypes = {
  /** Button url */
  url: PropTypes.string.isRequired,
  /** Button text content */
  text: PropTypes.string.isRequired,
  /** Whether the button opens a new tab */
  newTab: PropTypes.bool,
}

Button.defaultProps = {
  newTab: false,
}

export default Button
