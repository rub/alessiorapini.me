import React from "react"

import Icon from "../Icon/Icon"

import { splitIcon } from "./SplitIcon.module.css"

const SplitIcon = ({ url, openInNewTab, name, description, className }) =>
  openInNewTab ? (
    <a
      href={url}
      className={splitIcon}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon icon={name} description={description} className={className} />
      <Icon icon={name} description={description} className={className} />
    </a>
  ) : (
    <a href={url} className={splitIcon}>
      <Icon icon={name} description={description} className={className} />
      <Icon icon={name} description={description} className={className} />
    </a>
  )

export default SplitIcon
