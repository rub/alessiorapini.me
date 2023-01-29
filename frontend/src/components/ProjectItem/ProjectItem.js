import React, { useEffect, useReducer, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ProjectTitle from './ProjectTitle';
import ProjectImage from './ProjectImage';
import {
  itemWrapper,
  infoWrapper,
  infoBlock,
  isActive,
  infoLine,
  infoLineText,
} from './ProjectItem.module.css';

// Initial image animation state
const initialState = {
  parallaxPosition: { x: 0, y: -20 },
  active: false,
};

const reducer = (state, action) => {
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
    case 'MOUSE/COORDINATES': {
      return {
        ...state,
        parallaxPosition: action.payload,
      };
    }
    default: {
      throw new Error();
    }
  }
};

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
  const imageRef = useRef();
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  function handleResize() {
    if (imageRef.current) {
      setDimensions({
        width: imageRef.current.clientWidth,
        height: imageRef.current.clientHeight,
      });
    }
  }

  // Calculate the dimensions of the images on initial render
  // and recalculate sizes on window resize
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const xDistanceFromBoundaries = window.innerWidth - dimensions.width - 50;
  const yDistanceFromBoundaries = window.innerHeight - dimensions.height - 50;

  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

  function randomImagePosition(min, max) {
    const minValue = Math.ceil(min);
    const maxValue = Math.floor(max);
    return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
  }

  // ANIMATION CODE STARTS HERE
  const listItem = useRef(null);
  // Use a reducer to handle multiple states for the images
  const [state, dispatch] = useReducer(reducer, initialState);
  const parallax = (event) => {
    const speed = -5;
    const x = (window.innerWidth - event.pageX * speed) / 100;
    const y = (window.innerHeight - event.pageY * speed) / 100;

    dispatch({ type: 'MOUSE/COORDINATES', payload: { x, y } });
  };

  const handleMouseEnter = () => {
    listItem.current.addEventListener('mousemove', parallax);
    dispatch({ type: 'MOUSE/ENTER' });

    setImagePosition({
      ...imagePosition,
      x: randomImagePosition(0, xDistanceFromBoundaries),
      y: randomImagePosition(0, yDistanceFromBoundaries),
    });
  };

  const handleMouseLeave = () => {
    listItem.current.removeEventListener('mousemove', parallax);
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
      <div className={infoWrapper}>
        <ProjectTitle
          counter={counter}
          title={title}
          titleRef={titleRef}
          projectCounterClassName={projectCounterClassName}
          headingClassName={headingClassName}
        />
        <div className={`${infoBlock} ${state.active ? isActive : ''}`}>
          {roles.map((element) => (
            <p key={element} className={infoLine}>
              <span className={infoLineText}>{element}</span>
            </p>
          ))}
        </div>
      </div>
      <ProjectImage
        url={url}
        alt={alt}
        imageXPosition={imagePosition.x}
        imageYPosition={imagePosition.y}
        imageRef={imageRef}
        wrapperClassName={`${state.active ? isActive : ''}`}
        parallaxPosition={state.parallaxPosition}
      />
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