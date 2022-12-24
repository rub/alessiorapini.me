import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { projectImg } from "./ProjectImage.module.css"

export default ProjectImage = ({ url, alt, opacity, parallaxPosition }) => {
  return (
    <GatsbyImage
      className={projectImg}
      image={url}
      alt={alt}
      style={{
        opacity,
        transform: `translate3d(${parallaxPosition.x}px, ${parallaxPosition.y}px, 0)`,
      }}
    />
  )
}
