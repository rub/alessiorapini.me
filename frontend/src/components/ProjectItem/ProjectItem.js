import React, { useReducer, useRef } from 'react';
import PropTypes from 'prop-types';
import ProjectTitle from './ProjectTitle';
import ProjectImage from './ProjectImage';
import {
  itemWrapper,
  infoBlock,
  isActive,
  infoLine,
  infoLineText,
} from './ProjectItem.module.css';
import animate from './animate';

// Initial animations state
const initialState = {
  opacity: 0,
  parallaxPosition: { x: 0, y: -20 },
  leftTranslation: -50,
  rightTranslation: 50,
  active: false,
};

// TODO: Transform to arrow function
function reducer(state, action) {
  switch (action.type) {
    case 'MOUSE/ENTER': {
      return {
        ...state,
        active: true,
      };
    }
    case 'MOUSE/LEAVE': {
      return {
        ...state,
        active: false,
      };
    }
    case 'CHANGE/OPACITY': {
      return {
        ...state,
        opacity: action.payload,
      };
    }
    case 'MOUSE/COORDINATES': {
      return {
        ...state,
        parallaxPosition: action.payload,
      };
    }
    case 'CHANGE/TRANSITIONLEFT': {
      return {
        ...state,
        leftTranslation: action.payload,
      };
    }
    case 'CHANGE/TRANSITIONRIGHT': {
      return {
        ...state,
        rightTranslation: action.payload,
      };
    }
    default: {
      throw new Error();
    }
  }
}

function ProjectItem({
  // clipElement,
  counter,
  title,
  titleRef,
  url,
  alt,
  roles,
  projectCounterClassName,
  headingClassName,
}) {
  const listItem = useRef(null);
  // Use a reducer to handle multiple states for the images
  const [state, dispatch] = useReducer(reducer, initialState);
  const easeMethod = 'easeInOutCubic';
  const parallax = (event) => {
    const speed = -5;
    const x = (window.innerWidth - event.pageX * speed) / 100;
    const y = (window.innerHeight - event.pageY * speed) / 100;

    dispatch({ type: 'MOUSE/COORDINATES', payload: { x, y } });
  };

  const handleOpacity = (initialOpacity, newOpacity, duration) => {
    animate({
      fromValue: initialOpacity,
      toValue: newOpacity,
      onUpdate: (updatedOpacity, callback) => {
        dispatch({ type: 'CHANGE/OPACITY', payload: updatedOpacity });
        callback();
      },
      onComplete: () => {},
      duration,
      easeMethod,
    });
  };

  const handleSlicedLeftTranslation = (
    initialTransitionLeft,
    newTransitionLeft,
    duration
  ) => {
    animate({
      fromValue: initialTransitionLeft,
      toValue: newTransitionLeft,
      onUpdate: (updatedTransitionLeft, callback) => {
        dispatch({
          type: 'CHANGE/TRANSITIONLEFT',
          payload: updatedTransitionLeft,
        });
        callback();
      },
      onComplete: () => {},
      duration,
      easeMethod: 'easeOutCubic',
    });
  };

  const handleSlicedRightTranslation = (
    initialTransitionRight,
    newTransitionRight,
    duration
  ) => {
    animate({
      fromValue: initialTransitionRight,
      toValue: newTransitionRight,
      onUpdate: (updatedTransitionRight, callback) => {
        dispatch({
          type: 'CHANGE/TRANSITIONRIGHT',
          payload: updatedTransitionRight,
        });
        callback();
      },
      onComplete: () => {},
      duration,
      easeMethod: 'easeOutCubic',
    });
  };

  const handleMouseEnter = () => {
    handleOpacity(0, 1, 500);
    handleSlicedLeftTranslation(-50, 0, 800);
    handleSlicedRightTranslation(50, 0, 800);
    listItem.current.addEventListener('mousemove', parallax);
    dispatch({ type: 'MOUSE/ENTER' });
  };

  const handleMouseLeave = () => {
    listItem.current.removeEventListener('mousemove', parallax);
    handleOpacity(1, 0, 800);
    // TODO: Change px to vw in ProjectImage translate CSS rule
    handleSlicedLeftTranslation(
      state.leftTranslation,
      initialState.leftTranslation,
      800
    );
    handleSlicedRightTranslation(
      state.rightTranslation,
      initialState.rightTranslation,
      800
    );
    // Reset image position
    dispatch({
      type: 'MOUSE/COORDINATES',
      payload: initialState.parallaxPosition,
    });
    dispatch({ type: 'MOUSE/LEAVE' });
  };
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
    // eslint-disable-next-line max-len
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
    <li
      className={itemWrapper}
      ref={listItem}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ProjectTitle
        counter={counter}
        title={title}
        titleRef={titleRef}
        projectCounterClassName={projectCounterClassName}
        headingClassName={headingClassName}
      />
      <ProjectImage
        url={url}
        alt={alt}
        opacity={state.opacity}
        parallaxPosition={state.parallaxPosition}
        slicedLeftTranslation={state.leftTranslation}
        slicedRightTranslation={state.rightTranslation}
      />
      <div className={`${infoBlock} ${state.active ? isActive : ''}`}>
        {roles.map((element) => (
          <p key={element} className={infoLine}>
            <span className={infoLineText}>{element}</span>
          </p>
        ))}
      </div>
    </li>
  );
}

ProjectItem.propTypes = {
  counter: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  titleRef: PropTypes.func.isRequired,
  url: PropTypes.instanceOf(Object).isRequired,
  alt: PropTypes.string.isRequired,
  roles: PropTypes.instanceOf(Object).isRequired,
  projectCounterClassName: PropTypes.string.isRequired,
  headingClassName: PropTypes.string.isRequired,
};

export default ProjectItem;
