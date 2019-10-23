import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Works from "../components/Works/Works"
import About from "../components/About/About"

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Works />
    <About />
  </Layout>
)

export default Portfolio
