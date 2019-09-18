import React from "react"

import Icon from "../Icon/Icon"

import styles from "./SplitIcon.module.css"

const SplitIcon = ({ url, newTab, iconName, iconTitle, iconClassName }) =>
  newTab ? (
    <a
      href={url}
      className={styles.SplitIcon}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon icon={iconName} title={iconTitle} className={iconClassName} />
      <Icon icon={iconName} title={iconTitle} className={iconClassName} />
    </a>
  ) : (
    <a href={url} className={styles.SplitIcon}>
      <Icon icon={iconName} title={iconTitle} className={iconClassName} />
      <Icon icon={iconName} title={iconTitle} className={iconClassName} />
    </a>
  )

export default SplitIcon
