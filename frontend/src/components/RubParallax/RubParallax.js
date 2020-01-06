import React, { useEffect, useRef, useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
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
  // Query Rub images
  const data = useStaticQuery(graphql`
    query {
      mobileImage: file(relativePath: { eq: "rub-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      desktopImage: file(relativePath: { eq: "rub-desktop.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  // Define which image to provide based on viewport width
  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(min-width: 800px)`,
    },
  ]

  // Remember normalized component X position (needed for smoothness)
  const xRef = useRef(0)

  // Remember normalized mouse X position
  const targetXRef = useRef(0.5)

  const fixedRef = useRef()
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

    fixedRef.current.props.imgStyle.transform = `perspective(20000px) translateX(-50%) rotate3d(0, 1, 0, calc(0deg + ${xRef.current *
      25}deg))`
    leftRef.current.props.imgStyle.transform = `perspective(20000px) translate3d(calc(-50% + ${xRef.current *
      34}px), 0, 0) rotate3d(0, 1, 0, calc(0deg + ${xRef.current * 25}deg))`
    rightRef.current.props.imgStyle.transform = `perspective(20000px) translate3d(calc(-50% - ${xRef.current *
      34}px), 0, 0) rotate3d(0, 1, 0, calc(0deg + ${xRef.current * 25}deg))`

    fixedRef.current.forceUpdate()
    leftRef.current.forceUpdate()
    rightRef.current.forceUpdate()
  })

  return (
    <div className={styles.RubParallax}>
      <div className={styles.fixedRubContainer}>
        <Img
          className={styles.fixedRub}
          alt="Alessio Rapini's picture"
          draggable={false}
          fluid={sources}
          imgStyle={{
            left: "50%",
            transform: "translateX(-50%)",
            width: "auto",
          }}
          ref={fixedRef}
          fadeIn={false}
        />
      </div>
      <div className={styles.parallaxedRubContainer}>
        <Img
          className={styles.parallaxedRubLeft}
          alt="Alessio Rapini's picture with parallax effect"
          draggable={false}
          fluid={sources}
          imgStyle={{
            left: "50%",
            transform: "translate3d(-50%, 0, 0)",
            width: "auto",
          }}
          ref={leftRef}
          fadeIn={false}
        />
      </div>
      <div className={styles.parallaxedRubContainer}>
        <Img
          className={styles.parallaxedRubRight}
          alt="Alessio Rapini's picture with parallax effect"
          draggable={false}
          fluid={sources}
          imgStyle={{
            left: "50%",
            transform: "translate3d(-50%, 0, 0)",
            width: "auto",
          }}
          ref={rightRef}
          fadeIn={false}
        />
      </div>
    </div>
  )
}

export default RubParallax
