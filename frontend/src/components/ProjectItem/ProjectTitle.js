import React from "react"
import { titleWrapper, projectCounter, heading } from "./ProjectItem.module.css"

export default ProjectTitle = ({
  counter,
  title,
  titleRef,
  projectCounterClassName,
  headingClassName,
}) => {
  return (
    <div className={titleWrapper} ref={titleRef}>
      <span className={`${projectCounterClassName} ${projectCounter}`}>
        0{counter}
      </span>
      <h1 className={`${headingClassName} ${heading}`}>{title}</h1>
    </div>
  )
}
