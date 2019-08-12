import React from "react"

import Layout from "../components/Layout"
import RubParallax from "../components/RubParallax/RubParallax"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <RubParallax />
  </Layout>
)

export default IndexPage
