import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  projectImgWrapper,
  projectImgFixed,
  projectImgSlicedLeft,
  projectImgSlicedRight,
} from "./ProjectImage.module.css"

export default ProjectImage = ({
  url,
  alt,
  opacity,
  parallaxPosition,
  slicedLeftTranslation,
  slicedRightTranslation,
}) => {
  return (
    <div
      className={projectImgWrapper}
      style={{
        opacity,
        transform: `translate3d(${parallaxPosition.x}px, ${parallaxPosition.y}px, 0)`,
      }}
    >
      <GatsbyImage className={projectImgFixed} image={url} alt={alt} />
      <GatsbyImage
        className={projectImgSlicedLeft}
        image={url}
        alt={alt}
        style={{ transform: `translate3d(${slicedLeftTranslation}px, 0, 0)` }}
      />
      <GatsbyImage
        className={projectImgSlicedRight}
        image={url}
        alt={alt}
        style={{ transform: `translate3d(${slicedRightTranslation}px, 0, 0)` }}
      />
    </div>
  )
}
