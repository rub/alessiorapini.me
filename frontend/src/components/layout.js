import React from 'react';
import PropTypes from 'prop-types';
import '../css/main.css';
import {
  layoutWrapper,
  layoutFullScreen,
  layoutStandard,
} from './Layout.module.css';
function Layout({ children, fullScreen }) {
  return (
    <div
      className={`${layoutWrapper} ${
        fullScreen ? layoutFullScreen : layoutStandard
      }`}
    >
      <main>{children}</main>
    </div>
  );
}

Layout.propTypes = {
  fullScreen: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  fullScreen: false,
};

export default Layout;
