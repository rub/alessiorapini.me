import React, { useEffect } from "react"

import useWindowSize from "../hooks/useWindowSize"

import Layout from "../components/Layout"
import ButtonCursor from "../components/ButtonCursor/ButtonCursor"
import RubParallax from "../components/RubParallax/RubParallax"
import { SEO } from "../components/seo"

const IndexPage = () => {
  // Hook to grab the window size
  const size = useWindowSize()

  // Set the height of the body.
  useEffect(() => {
    restoreBodyHeight()
  }, [size.height])

  const restoreBodyHeight = () => {
    document.body.style.height = null
  }
  return (
    <Layout fullScreen>
      <ButtonCursor />
      <RubParallax />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <SEO />
