import React, { useReducer, useRef } from "react"
import ProjectTitle from "./ProjectTitle"
import ProjectImage from "./ProjectImage"
import {
  wrapper,
  infoBlock,
  infoBlockHeader,
  isActive,
} from "./ProjectItem.module.css"
import animate from "./animate"

// Initial animations state
const initialState = {
  opacity: 0,
  parallaxPosition: { x: 0, y: -20 },
  leftTranslation: -50,
  rightTranslation: 50,
  active: false,
}

// TODO: Transform to arrow function
function reducer(state, action) {
  switch (action.type) {
    case "MOUSE/ENTER": {
      return {
        ...state,
        active: true,
      }
    }
    case "MOUSE/LEAVE": {
      return {
        ...state,
        active: false,
      }
    }
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
    case "CHANGE/TRANSITIONLEFT": {
      return {
        ...state,
        leftTranslation: action.payload,
      }
    }
    case "CHANGE/TRANSITIONRIGHT": {
      return {
        ...state,
        rightTranslation: action.payload,
      }
    }
    default: {
      throw new Error()
    }
  }
}

export default ProjectItem = ({
  clipElement,
  counter,
  title,
  titleRef,
  url,
  alt,
  roles,
}) => {
  const listItem = useRef(null)
  // Use a reducer to handle multiple states for the images
  const [state, dispatch] = useReducer(reducer, initialState)
  const easeMethod = "easeInOutCubic"
  const parallax = (event) => {
    const speed = -5
    const x = (window.innerWidth - event.pageX * speed) / 100
    const y = (window.innerHeight - event.pageY * speed) / 100

    dispatch({ type: "MOUSE/COORDINATES", payload: { x, y } })
  }

  const handleOpacity = (initialOpacity, newOpacity, duration) => {
    animate({
      fromValue: initialOpacity,
      toValue: newOpacity,
      onUpdate: (newOpacity, callback) => {
        dispatch({ type: "CHANGE/OPACITY", payload: newOpacity })
        callback()
      },
      onComplete: () => {},
      duration: duration,
      easeMethod: easeMethod,
    })
  }

  const handleSlicedLeftTranslation = (
    initialTransitionLeft,
    newTransitionLeft,
    duration
  ) => {
    animate({
      fromValue: initialTransitionLeft,
      toValue: newTransitionLeft,
      onUpdate: (newTransitionLeft, callback) => {
        dispatch({ type: "CHANGE/TRANSITIONLEFT", payload: newTransitionLeft })
        callback()
      },
      onComplete: () => {},
      duration: duration,
      easeMethod: "easeOutCubic",
    })
  }

  const handleSlicedRightTranslation = (
    initialTransitionRight,
    newTransitionRight,
    duration
  ) => {
    animate({
      fromValue: initialTransitionRight,
      toValue: newTransitionRight,
      onUpdate: (newTransitionRight, callback) => {
        dispatch({
          type: "CHANGE/TRANSITIONRIGHT",
          payload: newTransitionRight,
        })
        callback()
      },
      onComplete: () => {},
      duration: duration,
      easeMethod: "easeOutCubic",
    })
  }

  const handleMouseEnter = () => {
    handleOpacity(0, 1, 500)
    handleSlicedLeftTranslation(-50, 0, 800)
    handleSlicedRightTranslation(50, 0, 800)
    listItem.current.addEventListener("mousemove", parallax)
    dispatch({ type: "MOUSE/ENTER" })
  }

  const handleMouseLeave = () => {
    listItem.current.removeEventListener("mousemove", parallax)
    handleOpacity(1, 0, 800)
    // TODO: Change px to vw in ProjectImage translate CSS rule
    handleSlicedLeftTranslation(
      state.leftTranslation,
      initialState.leftTranslation,
      800
    )
    handleSlicedRightTranslation(
      state.rightTranslation,
      initialState.rightTranslation,
      800
    )
    // Reset image position
    dispatch({
      type: "MOUSE/COORDINATES",
      payload: initialState.parallaxPosition,
    })
    dispatch({ type: "MOUSE/LEAVE" })
  }
  return (
    // <li className={wrapper}>
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
    <li className={wrapper} ref={listItem}>
      <ProjectTitle
        counter={counter}
        title={title}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        titleRef={titleRef}
      />
      <ProjectImage
        url={url}
        alt={alt}
        opacity={state.opacity}
        parallaxPosition={state.parallaxPosition}
        slicedLeftTranslation={state.leftTranslation}
        slicedRightTranslation={state.rightTranslation}
      />
      <div className={`${infoBlock} ${state.active ? isActive : ""}`}>
        {roles.map((element) => (
          <p key={element}>
            <span>{element}</span>
          </p>
        ))}
      </div>
    </li>
  )
}
