import React from "react"
import Layout from "../components/Layout"
import CustomCursor from "../components/CustomCursor/CustomCursor"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Footer from "../components/Footer/Footer.js"
import RubParallax from "../components/RubParallax/RubParallax"
import { SEO } from "../components/seo"

const IndexPage = () => (
  <Layout fullScreen>
    <CustomCursor>
      <Header />
      <Hero />
      <Footer />
    </CustomCursor>
    <RubParallax />
  </Layout>
)

export default IndexPage

export const Head = () => <SEO />
