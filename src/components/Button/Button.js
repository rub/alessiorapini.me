import React from "react"
import PropTypes from "prop-types"

import styles from "./Button.module.css"

/**
 * Button allows users to take actions, and make choices, with a single tap.
 */
const Button = ({ url, newTab, text }) => (
  <Link url={url} newTab={newTab}>
    <svg>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E0EAFC" />
          <stop offset="100%" stopColor="#CFDEF3" />
        </linearGradient>
      </defs>
      <rect stroke="url(#gradient)" />
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
