import React from "react"

import Layout from "../components/Layout"
import ButtonCursor from "../components/ButtonCursor/ButtonCursor"
import RubParallax from "../components/RubParallax/RubParallax"
import { SEO } from "../components/seo"

const IndexPage = () => (
  <Layout>
    <ButtonCursor />
    <RubParallax />
  </Layout>
)

export default IndexPage

export const Head = () => <SEO />
