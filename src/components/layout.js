import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header/Header.js"
import Footer from "./Footer/Footer.js"

import "../css/main.css"
import styles from "./Layout.module.css"

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={styles.Layout}>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <Header
        authorName="Alessio Rapini"
        authorRole="UX Designer / UI Developer"
      />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
