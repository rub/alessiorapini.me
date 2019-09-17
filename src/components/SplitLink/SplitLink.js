import React from "react"
import PropTypes from "prop-types"

import styles from "./SplitLink.module.css"

/**
 * Creates a hyperlink to other URL. Link text is split when the hover event is
 * triggered.
 */
const SplitLink = ({ url, newTab, text }) =>
  newTab ? (
    <a
      href={url}
      className={styles.SplitLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>{text}</span>
      <span>{text}</span>
    </a>
  ) : (
    <a href={url} className={styles.SplitLink}>
      <span>{text}</span>
      <span>{text}</span>
    </a>
  )

SplitLink.propTypes = {
  /** Link url */
  url: PropTypes.string.isRequired,
  /** Link text content */
  text: PropTypes.string.isRequired,
  /** Whether the link opens a new tab */
  newTab: PropTypes.bool,
}

SplitLink.defaultProps = {
  newTab: false,
}

export default SplitLink
