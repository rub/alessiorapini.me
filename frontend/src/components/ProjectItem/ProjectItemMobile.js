import React from 'react';
import PropTypes from 'prop-types';
import ProjectTitleMobile from './ProjectTitleMobile';
import ProjectImageMobile from './ProjectImageMobile';
import { itemWrapper } from './ProjectItemMobile.module.css';

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
      <ProjectTitleMobile
        counter={counter}
        title={title}
        titleClassName={titleClassName}
        projectCounterClassName={projectCounterClassName}
      />
      <ProjectImageMobile
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
  projectCounterClassName: PropTypes.string.isRequired,
};

export default ProjectItemMobile;
