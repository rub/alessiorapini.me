import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Works from "../components/PortfolioWrapper/PortfolioWrapper"
import PortfolioWrapper from "../components/PortfolioWrapper/PortfolioWrapper"

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <PortfolioWrapper />
  </Layout>
)

export default Portfolio
