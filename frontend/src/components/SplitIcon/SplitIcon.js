import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import { splitIcon } from './SplitIcon.module.css';

function SplitIcon({ url, openInNewTab, name, description, className }) {
  return openInNewTab ? (
    <a
      href={url}
      className={splitIcon}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon icon={name} description={description} className={className} />
      <Icon icon={name} description={description} className={className} />
    </a>
  ) : (
    <a href={url} className={splitIcon}>
      <Icon icon={name} description={description} className={className} />
      <Icon icon={name} description={description} className={className} />
    </a>
  );
}

SplitIcon.propTypes = {
  url: PropTypes.string.isRequired,
  openInNewTab: PropTypes.bool,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
};

SplitIcon.defaultProps = {
  openInNewTab: false,
  className: '',
};

export default SplitIcon;
