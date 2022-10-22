import React from "react"

import Icon from "../Icon/Icon"

import styles from "./SplitIcon.module.css"

const SplitIcon = ({ url, openInNewTab, name, description, className }) =>
  openInNewTab ? (
    <a
      href={url}
      className={styles.SplitIcon}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon icon={name} description={description} className={className} />
      <Icon icon={name} description={description} className={className} />
    </a>
  ) : (
    <a href={url} className={styles.SplitIcon}>
      <Icon icon={name} description={description} className={className} />
      <Icon icon={name} description={description} className={className} />
    </a>
  )

export default SplitIcon
