import React from "react"
import { wrapper, titleItem } from "./ProjectTitle.module.css"

export default ProjectTitle = ({
  title,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  return (
    <div
      className={wrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1 className={titleItem}>{title}</h1>
    </div>
  )
}
