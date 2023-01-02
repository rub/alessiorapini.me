import React from 'react';
import PropTypes from 'prop-types';
import {
  titleWrapper,
  projectCounter,
  heading,
} from './ProjectItem.module.css';

// TODO: prevent hovering on roles
function ProjectTitle({
  counter,
  title,
  titleRef,
  projectCounterClassName,
  headingClassName,
}) {
  return (
    <div className={titleWrapper} ref={titleRef}>
      <span className={`${projectCounterClassName} ${projectCounter}`}>
        0{counter}
      </span>
      <h1 className={`${headingClassName} ${heading}`}>{title}</h1>
    </div>
  );
}

ProjectTitle.propTypes = {
  counter: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  titleRef: PropTypes.func.isRequired,
  projectCounterClassName: PropTypes.string.isRequired,
  headingClassName: PropTypes.string.isRequired,
};

export default ProjectTitle;
