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
  isMobileVersion,
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
  isMobile,
  link,
  counter,
  title,
  titleRef,
  url,
  alt,
  roles,
  projectCounterClassName,
  titleClassName,
}) {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef();
  const listItem = useRef(null);
  // Use a reducer to handle multiple states for the images
  const [state, dispatch] = useReducer(reducer, initialState);

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

  if (typeof document === 'undefined') {
    return null;
  }

  const xDistanceFromBoundaries =
    document.body.clientWidth - dimensions.width - 50;
  const yDistanceFromBoundaries =
    document.body.clientHeight - dimensions.height - 50;

  function randomImagePosition(min, max) {
    const minValue = Math.ceil(min);
    const maxValue = Math.floor(max);
    return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
  }

  // ANIMATION CODE STARTS HERE
  const parallax = (event) => {
    const speed = -5;
    const x = (document.body.clientWidth - event.pageX * speed) / 100;
    const y = (document.body.clientHeight - event.pageY * speed) / 100;

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
    <a
      className={`${itemWrapper} ${isMobile ? isMobileVersion : ''}`}
      href={link}
      target="_blank"
      rel="noreferrer"
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
          titleClassName={titleClassName}
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
        isMobile={isMobile}
        url={url}
        alt={alt}
        imageXPosition={imagePosition.x}
        imageYPosition={imagePosition.y}
        imageRef={imageRef}
        imageWrapperClassName={`${state.active ? isActive : ''}`}
        parallaxPosition={state.parallaxPosition}
      />
    </a>
  );
}

ProjectItem.propTypes = {
  isMobile: PropTypes.bool,
  link: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  titleRef: PropTypes.func.isRequired,
  url: PropTypes.instanceOf(Object).isRequired,
  alt: PropTypes.string.isRequired,
  roles: PropTypes.instanceOf(Object).isRequired,
  projectCounterClassName: PropTypes.string.isRequired,
  titleClassName: PropTypes.string.isRequired,
};

ProjectItem.defaultProps = {
  isMobile: false,
};

export default ProjectItem;
