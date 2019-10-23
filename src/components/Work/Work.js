import React from "react"
import PropTypes from "prop-types"

import styles from "./Work.module.css"

const Work = ({ number, title, imageUrl, imageAlt, role, type }) => (
  <div className={styles.Work}>
    <h3 className={styles.title}>
      {number}
      <span className={styles.titleSeparator}>/</span>
      {title}
    </h3>
    <img className={styles.image} src={imageUrl} alt={imageAlt} />
    <div className={styles.info}>
      <div className={styles.infoRow}>
        <span className={styles.infoLine} />
        <p>{role}</p>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.infoLine} />
        <p>{type}</p>
      </div>
    </div>
  </div>
)

Work.propTypes = {
  /** Work number */
  number: PropTypes.string.isRequired,
  /** Work title */
  title: PropTypes.string.isRequired,
  /** Work image url */
  imageUrl: PropTypes.string.isRequired,
  /** Work image alt */
  imageAlt: PropTypes.string.isRequired,
  /** Work role */
  role: PropTypes.string.isRequired,
  /** Work type */
  type: PropTypes.string.isRequired,
}

Work.defaultProps = {
  number: "",
  title: "",
  imageUrl: "",
  imageAlt: "",
  role: "",
  type: "",
}

export default Work
