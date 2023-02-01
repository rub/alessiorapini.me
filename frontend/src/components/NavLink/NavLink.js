import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { navLink, home, positionedFixed } from './NavLink.module.css';

function NavLink({ to, label, isHome, isPositionedFixed }) {
  return (
    <Link
      to={to}
      className={`${navLink} ${isHome ? home : ''} ${
        isPositionedFixed ? positionedFixed : ''
      }`}
    >
      {label}
    </Link>
  );
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isHome: PropTypes.bool,
  isPositionedFixed: PropTypes.bool,
};

NavLink.defaultProps = {
  isHome: false,
  isPositionedFixed: false,
};

export default NavLink;
