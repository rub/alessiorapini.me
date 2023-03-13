import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { header, home, logo, nav } from './Header.module.css';

function Header({ isHome, navItems }) {
  return (
    <header className={header}>
      <Link to="/" className={`${logo} ${isHome ? home : ''}`}>
        AR
      </Link>
      <nav className={nav}>{navItems}</nav>
    </header>
  );
}

Header.propTypes = {
  isHome: PropTypes.bool,
  navItems: PropTypes.instanceOf(Object).isRequired,
};

Header.defaultProps = {
  isHome: false,
};

export default Header;
