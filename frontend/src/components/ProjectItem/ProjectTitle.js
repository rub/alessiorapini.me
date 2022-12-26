import React from "react"
import { wrapper, projectCounter, titleItem } from "./ProjectTitle.module.css"

export default ProjectTitle = ({
  counter,
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
      <span className={projectCounter}>0{counter}</span>
      <h1 className={titleItem}>{title}</h1>
    </div>
  )
}
