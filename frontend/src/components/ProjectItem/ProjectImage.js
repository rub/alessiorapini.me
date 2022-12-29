import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  imagesWrapper,
  imageFixed,
  imageSlicedLeft,
  imageSlicedRight,
} from "./ProjectItem.module.css"

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
      className={imagesWrapper}
      style={{
        opacity,
        transform: `translate3d(${parallaxPosition.x}px, ${parallaxPosition.y}px, 0)`,
      }}
    >
      <GatsbyImage className={imageFixed} image={url} alt={alt} />
      <GatsbyImage
        className={imageSlicedLeft}
        image={url}
        alt={alt}
        style={{ transform: `translate3d(${slicedLeftTranslation}px, 0, 0)` }}
      />
      <GatsbyImage
        className={imageSlicedRight}
        image={url}
        alt={alt}
        style={{ transform: `translate3d(${slicedRightTranslation}px, 0, 0)` }}
      />
    </div>
  )
}
