import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { header, positionFixed, logo } from './Header.module.css';

function Header({ isFixed, navItems }) {
  return (
    <header className={`${header} ${isFixed ? positionFixed : ''}`}>
      <Link to="/" className={logo}>
        AR
      </Link>
      <nav>{navItems}</nav>
    </header>
  );
}

Header.propTypes = {
  isFixed: PropTypes.bool,
  navItems: PropTypes.instanceOf(Object).isRequired,
};

Header.defaultProps = {
  isFixed: false,
};

export default Header;
