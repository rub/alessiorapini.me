import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { header, home, positionFixed, logo } from './Header.module.css';

function Header({ isHome, isPositionFixed, navItems }) {
  return (
    <header className={`${header} ${isPositionFixed ? positionFixed : ''}`}>
      <Link to="/" className={`${logo} ${isHome ? home : ''}`}>
        AR
      </Link>
      <nav>{navItems}</nav>
    </header>
  );
}

Header.propTypes = {
  isHome: PropTypes.bool,
  isPositionFixed: PropTypes.bool,
  navItems: PropTypes.instanceOf(Object).isRequired,
};

Header.defaultProps = {
  isHome: false,
  isPositionFixed: false,
};

export default Header;
