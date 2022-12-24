import React, { useReducer, useRef } from "react"
import ProjectTitle from "./ProjectTitle"
import ProjectImage from "./ProjectImage"
import {
  projectItemWrapper,
  projectItemInfoBlock,
  projectItemInfoBlockHeader,
} from "./ProjectItem.module.css"

const initialState = {
  opacity: 0,
  parallaxPosition: { x: 0, y: -20 },
}

// TODO: Transform to arrow function
function reducer(state, action) {
  switch (action.type) {
    case "CHANGE/OPACITY": {
      return {
        ...state,
        opacity: action.payload,
      }
    }
    case "MOUSE/COORDINATES": {
      return {
        ...state,
        parallaxPosition: action.payload,
      }
    }
    default: {
      throw new Error()
    }
  }
}

export default ProjectItem = ({
  clipElement,
  title,
  url,
  alt,
  itemIndex,
  roles,
}) => {
  const listItem = useRef(null)

  // Use a reducer to handle multiple states for the images
  const [state, dispatch] = useReducer(reducer, initialState)

  const parallax = (event) => {
    const speed = -5
    const x = (window.innerWidth - event.pageX * speed) / 100
    const y = (window.innerHeight - event.pageY * speed) / 100

    dispatch({ type: "MOUSE/COORDINATES", payload: { x, y } })
  }

  // TODO: Handle the sliced effect here
  const handleMouseEnter = () => {
    dispatch({ type: "CHANGE/OPACITY", payload: 1 })
    listItem.current.addEventListener("mousemove", parallax)
  }

  // TODO: Reset the sliced effect here
  const handleMouseLeave = () => {
    listItem.current.removeEventListener("mousemove", parallax)
    dispatch({ type: "CHANGE/OPACITY", payload: 0 })
    // Reset image position
    dispatch({
      type: "MOUSE/COORDINATES",
      payload: initialState.parallaxPosition,
    })
  }
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
    <li className={projectItemWrapper} ref={listItem}>
      <ProjectTitle
        title={title}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
      <ProjectImage
        url={url}
        alt={alt}
        opacity={state.opacity}
        parallaxPosition={state.parallaxPosition}
      />
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
