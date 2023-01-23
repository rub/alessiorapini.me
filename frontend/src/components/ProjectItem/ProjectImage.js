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
  opacity,
  parallaxPosition,
  imageXPosition,
  imageYPosition,
  imageRef,
  slicedLeftTranslation,
  slicedRightTranslation,
}) {
  return (
    <div
      className={imagesWrapper}
      style={{
        opacity,
        transform: `translate3d(${parallaxPosition.x}px, ${parallaxPosition.y}px, 0)`,
        top: `${imageYPosition}px`,
        left: `${imageXPosition}px`,
      }}
    >
      <div style={{ display: 'inline-block' }} ref={imageRef}>
        <GatsbyImage className={imageFixed} image={url} alt={alt} />
      </div>
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
  );
}

ProjectImage.propTypes = {
  url: PropTypes.instanceOf(Object).isRequired,
  alt: PropTypes.string.isRequired,
  opacity: PropTypes.number.isRequired,
  parallaxPosition: PropTypes.instanceOf(Object).isRequired,
  slicedLeftTranslation: PropTypes.number.isRequired,
  slicedRightTranslation: PropTypes.number.isRequired,
};

export default ProjectImage;
