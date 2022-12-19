import React from "react"
import { titleItem, navTitle } from "./ProjectTitle.module.css"

export default ProjectTitle = ({ title }) => {
  return (
    <div className={titleItem}>
      <h1 className={navTitle}>{title}</h1>
    </div>
  )
}
