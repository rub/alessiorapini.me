import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { link, home, inline } from './LinkGlassEfx.module.css';

function LinkGlassEfx({ to, label, newTab, email, isInline, isHome }) {
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
};

LinkGlassEfx.defaultProps = {
  newTab: false,
  email: false,
  isInline: false,
  isHome: false,
};

export default LinkGlassEfx;
