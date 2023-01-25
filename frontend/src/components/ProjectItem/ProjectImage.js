import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import {
  imagesWrapper,
  imageFixed,
  imageSlicedLeft,
  imageSlicedRight,
} from './ProjectItem.module.css';

function ProjectImage({
  url,
  alt,
  parallaxPosition,
  imageXPosition,
  imageYPosition,
  imageRef,
  wrapperClassName,
}) {
  return (
    <div
      className={`${imagesWrapper} ${wrapperClassName}`}
      style={{
        transform: `translate3d(${parallaxPosition.x}px, ${parallaxPosition.y}px, 0)`,
        top: `${imageYPosition}px`,
        left: `${imageXPosition}px`,
      }}
    >
      <div style={{ display: 'inline-block' }} ref={imageRef}>
        <GatsbyImage
          className={imageFixed}
          image={url}
          alt={alt}
          objectFit="contain"
        />
      </div>
      <GatsbyImage
        className={imageSlicedLeft}
        image={url}
        alt={alt}
        objectFit="contain"
      />
      <GatsbyImage
        className={imageSlicedRight}
        image={url}
        alt={alt}
        objectFit="contain"
      />
    </div>
  );
}

ProjectImage.propTypes = {
  url: PropTypes.instanceOf(Object).isRequired,
  alt: PropTypes.string.isRequired,
  parallaxPosition: PropTypes.instanceOf(Object).isRequired,
  imageXPosition: PropTypes.number.isRequired,
  imageYPosition: PropTypes.number.isRequired,
  imageRef: PropTypes.instanceOf(Object).isRequired,
  wrapperClassName: PropTypes.string.isRequired,
};

export default ProjectImage;
