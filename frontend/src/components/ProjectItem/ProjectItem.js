import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  projectItemWrapper,
  projectTitle,
  projectImageWrapper,
  projectImage,
} from "./ProjectItem.module.css"

export default ProjectItem = ({ clipElement, title, image }) => {
  return (
    <li className={projectItemWrapper}>
      <h1
        className={projectTitle}
        style={{ clipPath: `url(#${clipElement})` }}
        data-scroll
        data-scroll-speed={-1}
      >
        <svg aria-hidden="true">
          <clipPath id={clipElement}>
            <text dominantBaseline="hanging" x="50%" y="0" textAnchor="middle">
              {title}
            </text>
          </clipPath>
        </svg>
      </h1>
      <div className={projectImageWrapper}>
        <GatsbyImage className={projectImage} image={image} alt={title} />
      </div>
      {/* TODO: To add info data view video Part 1 at 13:00 */}
    </li>
  )
}
