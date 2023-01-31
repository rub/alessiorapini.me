import React from 'react';
import PropTypes from 'prop-types';
import ProjectTitle from './ProjectTitle';
import ProjectImage from './ProjectImage';
import { itemWrapper } from './ProjectItem.module.css';

function ProjectItemMobile({
  counter,
  title,
  url,
  alt,
  imageXPosition,
  imageYPosition,
  imageRef,
  titleClassName,
  imageWrapperClassName,
  itemClassName,
  imageSlicedClassName,
  projectCounterClassName,
}) {
  return (
    <div className={`${itemWrapper} ${itemClassName}`}>
      <ProjectTitle
        counter={counter}
        title={title}
        titleClassName={titleClassName}
        projectCounterClassName={projectCounterClassName}
      />
      <ProjectImage
        isMobile
        url={url}
        alt={alt}
        imageWrapperClassName={imageWrapperClassName}
        imageXPosition={imageXPosition}
        imageYPosition={imageYPosition}
        imageRef={imageRef}
        imageSlicedClassName={imageSlicedClassName}
      />
    </div>
  );
}

ProjectItemMobile.propTypes = {
  counter: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.instanceOf(Object).isRequired,
  alt: PropTypes.string.isRequired,
  titleClassName: PropTypes.string.isRequired,
  imageWrapperClassName: PropTypes.string.isRequired,
  imageSlicedClassName: PropTypes.string.isRequired,
  projectCounterClassName: PropTypes.string,
};

ProjectItemMobile.defaultProps = {
  projectCounterClassName: '',
};

export default ProjectItemMobile;
