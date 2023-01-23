import React from 'react';
import PropTypes from 'prop-types';
import {
  titleWrapper,
  projectCounter,
  heading,
} from './ProjectItemMobile.module.css';

function ProjectTitleMobile({
  counter,
  title,
  projectCounterClassName,
  titleClassName,
}) {
  return (
    <div className={titleWrapper}>
      <span className={`${projectCounterClassName} ${projectCounter}`}>
        0{counter}
      </span>
      <h1 className={`${titleClassName} ${heading}`}>{title}</h1>
    </div>
  );
}

ProjectTitleMobile.propTypes = {
  counter: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  projectCounterClassName: PropTypes.string.isRequired,
  titleClassName: PropTypes.string.isRequired,
};

export default ProjectTitleMobile;
