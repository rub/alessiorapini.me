import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Icon from '../Icon/Icon';
import { link, home, inline, linkIcon } from './LinkGlassEfx.module.css';

function LinkGlassEfx({
  to,
  label,
  newTab,
  email,
  isInline,
  isHome,
  hasIcon,
  iconName,
  iconDescription,
}) {
  return newTab || email ? (
    <a
      href={to}
      className={`${link} ${isInline ? inline : ''} ${isHome ? home : ''} `}
      target={newTab ? '_blank' : '_self'}
      rel={newTab ? 'noreferrer' : ''}
    >
      {label}
    </a>
  ) : (
    <Link
      to={to}
      className={`${link} ${isInline ? inline : ''} ${isHome ? home : ''} `}
    >
      {label}
      {hasIcon && (
        <Icon
          className={linkIcon}
          icon={iconName}
          description={iconDescription}
        />
      )}
    </Link>
  );
}

LinkGlassEfx.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  newTab: PropTypes.bool,
  email: PropTypes.bool,
  isInline: PropTypes.bool,
  isHome: PropTypes.bool,
  hasIcon: PropTypes.bool,
  iconName: PropTypes.string,
  iconDescription: PropTypes.string,
};

LinkGlassEfx.defaultProps = {
  newTab: false,
  email: false,
  isInline: false,
  isHome: false,
  hasIcon: false,
  iconName: '',
  iconDescription: '',
};

export default LinkGlassEfx;
