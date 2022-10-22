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

  useEffect(() => {
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
      file(relativePath: { eq: "rub-picture.png" }) {
        childImageSharp {
          # Specify a fluid image and fragment
          # The default maxWidth is 800 pixels
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

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
      targetXRef.current = e.clientX / document.body.clientWidth
    })
    return () => window.removeEventListener("mousemove", eventListener)
  }, [])

  useAnimationFrame(deltaTime => {
    const deltaX = targetXRef.current - xRef.current
    xRef.current = xRef.current + deltaX / 16

    // The higher the X(px) value the higher the translation
    fixedRef.current.props.imgStyle.transform = `translateX(0%)`
    leftRef.current.props.imgStyle.transform = `translate3d(calc(-3% - ${xRef.current *
      16}px), 0, 0)`
    rightRef.current.props.imgStyle.transform = `translate3d(calc(3% + ${xRef.current *
      16}px), 0, 0)`

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
          fluid={data.file.childImageSharp.fluid}
          imgStyle={{
            height: "100vh",
            left: "auto",
            right: "0",
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
          fluid={data.file.childImageSharp.fluid}
          imgStyle={{
            height: "100vh",
            left: "auto",
            right: "0",
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
          fluid={data.file.childImageSharp.fluid}
          imgStyle={{
            height: "100vh",
            left: "auto",
            right: "0",
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
