import React from "react"
import ProjectTitle from "./ProjectTitle"
import ProjectImage from "./ProjectImage"
import {
  projectItemWrapper,
  projectItemInfoBlock,
  projectItemInfoBlockHeader,
} from "./ProjectItem.module.css"

export default ProjectItem = ({
  clipElement,
  title,
  url,
  alt,
  itemIndex,
  roles,
}) => {
  return (
    // <li className={projectItemWrapper}>
    //   <h1
    //     className={projectTitle}
    //     style={{ clipPath: `url(#${clipElement})` }}
    //     data-scroll
    //     data-scroll-speed={-1}
    //   >
    //     <svg aria-hidden="true">
    //       <clipPath id={clipElement}>
    //         <text dominantBaseline="hanging" x="50%" y="0" textAnchor="middle">
    //           {title}
    //         </text>
    //       </clipPath>
    //     </svg>
    //   </h1>
    //   <div className={projectImageWrapper}>
    //     <GatsbyImage className={projectImage} image={image} alt={title} />
    //   </div>
    // </li>
    <li className={projectItemWrapper}>
      <ProjectTitle title={title} />
      <ProjectImage url={url} alt={alt} />
      <div className={projectItemInfoBlock}>
        <p className={projectItemInfoBlockHeader}>
          <span>0{itemIndex}</span>
        </p>
        {roles.map((element) => (
          <p key={element}>
            <span>{element}</span>
          </p>
        ))}
      </div>
    </li>
  )
}
