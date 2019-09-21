import React, { useEffect, useRef, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "./RubParallax.module.css"

const useAnimationFrame = callback => {
  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  const requestRef = React.useRef()
  const previousTimeRef = React.useRef()

  const animate = time => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current
      callback(deltaTime)
    }
    previousTimeRef.current = time
    requestRef.current = requestAnimationFrame(animate)
  }

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current)
  }, []) // Make sure the effect runs only once
}

/**
 * Mouse parallax scene on Rub's pictures
 */
const RubParallax = () => {
  // Remember normalized component X position (needed for smoothness)
  const xRef = useRef(0)

  // Remember normalized mouse X position
  const targetXRef = useRef(0.5)

  const leftRef = useRef()
  const rightRef = useRef()

  // Add event listener for mouse movement on ComponentDidMount
  useEffect(() => {
    const eventListener = window.addEventListener("mousemove", e => {
      targetXRef.current = e.clientX / document.body.clientWidth - 0.5
    })
    return () => window.removeEventListener("mousemove", eventListener)
  }, [])

  useAnimationFrame(deltaTime => {
    const deltaX = targetXRef.current - xRef.current
    xRef.current = xRef.current + deltaX / 16

    leftRef.current.props.imgStyle.transform = `translate3d(calc(-50% + ${xRef.current *
      40}px), 0, 0)`
    rightRef.current.props.imgStyle.transform = `translate3d(calc(-50% - ${xRef.current *
      40}px), 0, 0)`

    leftRef.current.forceUpdate()
    rightRef.current.forceUpdate()
  })

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
        draggable="false"
        fluid={images.fixedRub.childImageSharp.fluid}
        imgStyle={{
          left: "50%",
          transform: "translateX(-50%)",
          width: "auto",
        }}
      />
      <Img
        className={styles.parallaxedRubLeft}
        alt="Alessio Rapini's picture with parallax effect"
        draggable="false"
        fluid={images.fixedRub.childImageSharp.fluid}
        imgStyle={{
          left: "50%",
          transform: "translate3d(-50%, 0, 0)",
          width: "auto",
        }}
        ref={leftRef}
      />
      <Img
        className={styles.parallaxedRubRight}
        alt="Alessio Rapini's picture with parallax effect"
        draggable="false"
        fluid={images.fixedRub.childImageSharp.fluid}
        imgStyle={{
          left: "50%",
          transform: "translate3d(-50%, 0, 0)",
          width: "auto",
        }}
        ref={rightRef}
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
