import React from 'react';
import PropTypes from 'prop-types';
import {
  titleWrapper,
  projectCounter,
  heading,
} from './ProjectItem.module.css';

function ProjectTitle({
  counter,
  title,
  titleRef,
  projectCounterClassName,
  titleClassName,
}) {
  return (
    <div className={titleWrapper} ref={titleRef}>
      <span className={`${projectCounterClassName} ${projectCounter}`}>
        0{counter}
      </span>
      <h1 className={`${titleClassName} ${heading}`}>{title}</h1>
    </div>
  );
}

ProjectTitle.propTypes = {
  counter: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  titleRef: PropTypes.func,
  projectCounterClassName: PropTypes.string,
  titleClassName: PropTypes.string,
};

ProjectTitle.defaultProps = {
  titleRef: null,
  projectCounterClassName: '',
  titleClassName: '',
};

export default ProjectTitle;
