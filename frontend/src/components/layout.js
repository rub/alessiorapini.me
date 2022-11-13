import React from "react"
import PropTypes from "prop-types"

import "../css/main.css"
import {
  layoutWrapper,
  layoutFullScreen,
  layoutStandard,
} from "./layout.module.css"

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
const Layout = ({ children, fullScreen }) => (
  <div
    className={`${layoutWrapper} ${
      fullScreen ? layoutFullScreen : layoutStandard
    }`}
  >
    <main>{children}</main>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
