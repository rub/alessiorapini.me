import React from "react"

import Layout from "../components/Layout"
import ButtonCursor from "../components/ButtonCursor/ButtonCursor"
import RubParallax from "../components/RubParallax/RubParallax"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Alessio Rapini | UX Designer" />
    <ButtonCursor />
    <RubParallax />
  </Layout>
)

export default IndexPage
