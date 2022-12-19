import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { projectImg } from "./ProjectImage.module.css"

export default ProjectImage = ({ url, alt }) => {
  return <GatsbyImage className={projectImg} image={url} alt={alt} />
}
