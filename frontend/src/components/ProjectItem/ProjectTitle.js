import React from "react"
import { titleItem, navTitle } from "./ProjectTitle.module.css"

export default ProjectTitle = ({
  title,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  return (
    <div
      className={titleItem}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1 className={navTitle}>{title}</h1>
    </div>
  )
}
