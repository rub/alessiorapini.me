import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "./RubParallax.module.css"

/**
 * Mouse parallax scene on Rub's pictures
 */
const RubParallax = () => {
  const images = useStaticQuery(graphql`
    query {
      fixedRub: file(relativePath: { eq: "rub-fixed.png" }) {
        ...imageFragment
      }
      parallaxedRubLeft: file(relativePath: { eq: "rub-sliced-one.png" }) {
        ...imageFragment
      }
      parallaxedRubRight: file(relativePath: { eq: "rub-sliced-two.png" }) {
        ...imageFragment
      }
    }
  `)

  return (
    <div className={styles.RubParallax}>
      <Img
        className={styles.fixedRub}
        alt="Alessio Rapini's picture"
        fluid={images.fixedRub.childImageSharp.fluid}
        imgStyle={{
          left: "50%",
          transform: "translateX(-50%)",
          width: "auto",
        }}
      />
      <Img
        className={styles.parallaxedRub}
        alt="Alessio Rapini's picture with parallax effect"
        fluid={images.parallaxedRubLeft.childImageSharp.fluid}
        imgStyle={{
          left: "50%",
          transform: "translateX(-50%)",
          width: "auto",
        }}
      />
      <Img
        className={styles.parallaxedRub}
        alt="Alessio Rapini's picture with parallax effect"
        fluid={images.parallaxedRubRight.childImageSharp.fluid}
        imgStyle={{
          left: "50%",
          transform: "translateX(-50%)",
          width: "auto",
        }}
      />
    </div>
  )
}

/**
 * Custom fragment used for querying multiple images respecting the DRY principle
 */
export const imageFragment = graphql`
  fragment imageFragment on File {
    childImageSharp {
      fluid(maxWidth: 1920) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

export default RubParallax
