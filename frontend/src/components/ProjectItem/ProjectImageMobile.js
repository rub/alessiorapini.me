import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import {
  imagesWrapper,
  imageFixed,
  imageSlicedLeft,
  imageSlicedRight,
} from './ProjectItemMobile.module.css';

function ProjectImageMobile({
  url,
  alt,
  imageWrapperClassName,
  imageXPosition,
  imageYPosition,
  imageRef,
  imageSlicedClassName,
}) {
  return (
    <div
      className={`${imagesWrapper} ${imageWrapperClassName}`}
      style={{
        top: `calc(50% + ${imageYPosition}px)`,
        left: `calc(50% + ${imageXPosition}px)`,
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
        className={`${imageSlicedLeft} ${imageSlicedClassName}`}
        image={url}
        alt={alt}
        objectFit="contain"
      />
      <GatsbyImage
        className={`${imageSlicedRight} ${imageSlicedClassName}`}
        image={url}
        alt={alt}
        objectFit="contain"
      />
    </div>
  );
}

ProjectImageMobile.propTypes = {
  url: PropTypes.instanceOf(Object).isRequired,
  alt: PropTypes.string.isRequired,
  imageWrapperClassName: PropTypes.string.isRequired,
  imageSlicedClassName: PropTypes.string.isRequired,
};

export default ProjectImageMobile;
