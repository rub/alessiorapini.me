import React from "react"

import Layout from "../components/Layout"
import Button from "../components/Button/Button"
import RubParallax from "../components/RubParallax/RubParallax"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <RubParallax />
    <Button text="Portfolio" />
  </Layout>
)

export default IndexPage
