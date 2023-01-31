import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import {
  imagesWrapper,
  imageFixedWrapper,
  imageFixed,
  imageSlicedLeft,
  imageSlicedRight,
  isMobileVersion,
} from './ProjectItem.module.css';

function ProjectImage({
  isMobile,
  url,
  alt,
  parallaxPosition,
  imageXPosition,
  imageYPosition,
  imageRef,
  imageWrapperClassName,
  imageSlicedClassName,
}) {
  const imagesWrapperStyles = {
    transform: isMobile
      ? 'translate(-50%, -50%)'
      : `translate3d(${parallaxPosition.x}px, ${parallaxPosition.y}px, 0)`,
    top: isMobile ? `calc(50% + ${imageYPosition}px)` : `${imageYPosition}px`,
    left: isMobile ? `calc(50% + ${imageXPosition}px)` : `${imageXPosition}px`,
  };

  return (
    <div
      className={`${imagesWrapper} ${imageWrapperClassName} ${
        isMobile ? isMobileVersion : ''
      }`}
      style={imagesWrapperStyles}
    >
      <div className={imageFixedWrapper} ref={imageRef}>
        <GatsbyImage
          className={`${imageFixed} ${isMobile ? isMobileVersion : ''}`}
          image={url}
          alt={alt}
          objectFit="contain"
        />
      </div>
      <GatsbyImage
        className={`${imageSlicedLeft} ${isMobile ? isMobileVersion : ''} ${
          isMobile ? imageSlicedClassName : ''
        }`}
        image={url}
        alt={alt}
        objectFit="contain"
      />
      <GatsbyImage
        className={`${imageSlicedRight} ${isMobile ? isMobileVersion : ''} ${
          isMobile ? imageSlicedClassName : ''
        } `}
        image={url}
        alt={alt}
        objectFit="contain"
      />
    </div>
  );
}

ProjectImage.propTypes = {
  isMobile: PropTypes.bool,
  url: PropTypes.instanceOf(Object).isRequired,
  alt: PropTypes.string.isRequired,
  parallaxPosition: PropTypes.instanceOf(Object),
  imageXPosition: PropTypes.number.isRequired,
  imageYPosition: PropTypes.number.isRequired,
  imageRef: PropTypes.instanceOf(Object).isRequired,
  imageWrapperClassName: PropTypes.string,
  imageSlicedClassName: PropTypes.string,
};

ProjectImage.defaultProps = {
  isMobile: false,
  parallaxPosition: {},
  imageWrapperClassName: '',
  imageSlicedClassName: '',
};

export default ProjectImage;
