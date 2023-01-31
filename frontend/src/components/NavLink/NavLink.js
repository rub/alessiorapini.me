import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { navLink, positionedFixed } from './NavLink.module.css';

// TODO: Add the prop Home to add a class that handles the rules at 50 and 51
// TODO: And do this also for the Header
function NavLink({ to, label, isPositionedFixed }) {
  return (
    <Link
      to={to}
      className={`${navLink} ${isPositionedFixed ? positionedFixed : ''}`}
    >
      {label}
    </Link>
  );
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isPositionedFixed: PropTypes.bool,
};

NavLink.defaultProps = {
  isPositionedFixed: false,
};

export default NavLink;
