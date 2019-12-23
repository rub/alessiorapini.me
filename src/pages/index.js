import React from "react"

import Layout from "../components/Layout"
import ButtonCursor from "../components/ButtonCursor/ButtonCursor"
import Button from "../components/Button/Button"
import RubParallax from "../components/RubParallax/RubParallax"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Alessio Rapini ☞ UX Designer / UI Developer" />
    <RubParallax />
    <ButtonCursor />
    <Button
      url="https://www.behance.net/AlessioRapini"
      text="Portfolio"
      newTab
    />
  </Layout>
)

export default IndexPage
