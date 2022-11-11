import React, { useEffect, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, withArtDirection, getImage } from "gatsby-plugin-image"

import {
  rubParallax,
  fixedRubContainer,
  parallaxedRubContainer,
  fixedRub,
  parallaxedRubLeft,
  parallaxedRubRight,
} from "./RubParallax.module.css"

/**
 * Mouse parallax scene on Rub's pictures
 */
const RubParallax = () => {
  // Query images
  const images = useStaticQuery(graphql`
    {
      largeImage: file(relativePath: { eq: "rub-big.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            quality: 25
          )
        }
      }
      smallImage: file(relativePath: { eq: "rub-small.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            quality: 25
          )
        }
      }
    }
  `)

  // Art direction
  const imagesWithArtDirection = withArtDirection(getImage(images.largeImage), [
    {
      media: "(max-width: 760px)",
      image: getImage(images.smallImage),
    },
  ])

  const useAnimationFrame = (callback) => {
    // Use useRef for mutable variables that we want to persist
    // without triggering a re-render on their change
    const requestRef = React.useRef()
    const previousTimeRef = React.useRef()

    const animate = (time) => {
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

  // Remember normalized component X position (needed for smoothness)
  const xRef = useRef(0)

  // Remember normalized mouse X position
  const targetXRef = useRef(0.5)

  const leftRef = useRef()
  const rightRef = useRef()

  // Add event listener for mouse movement on ComponentDidMount
  useEffect(() => {
    const eventListener = window.addEventListener("mousemove", (e) => {
      targetXRef.current = e.clientX / document.body.clientWidth
    })
    return () => window.removeEventListener("mousemove", eventListener)
  }, [])

  useAnimationFrame((deltaTime) => {
    const deltaX = targetXRef.current - xRef.current
    xRef.current = xRef.current + deltaX / 16

    leftRef.current.style.transform = `translate3d(calc(-14px - ${
      xRef.current * 16
    }px), 0, 0)`
    rightRef.current.style.transform = `translate3d(calc(14px + ${
      xRef.current * 16
    }px), 0, 0)`
  })

  return (
    <div className={rubParallax}>
      <div className={fixedRubContainer}>
        <GatsbyImage
          image={imagesWithArtDirection}
          className={fixedRub}
          alt="Alessio Rapini"
          loading="eager"
          objectFit="contain"
          objectPosition="right"
          draggable={false}
          style={{
            height: "100%",
          }}
        />
      </div>
      <div className={parallaxedRubContainer} ref={leftRef}>
        <GatsbyImage
          image={imagesWithArtDirection}
          className={parallaxedRubLeft}
          alt="Alessio Rapini animated"
          loading="eager"
          objectFit="contain"
          objectPosition="right"
          draggable={false}
          style={{
            height: "100%",
          }}
        />
      </div>
      <div className={parallaxedRubContainer} ref={rightRef}>
        <GatsbyImage
          image={imagesWithArtDirection}
          className={parallaxedRubRight}
          alt="Alessio Rapini animated"
          loading="eager"
          objectFit="contain"
          objectPosition="right"
          draggable={false}
          style={{
            height: "100%",
          }}
        />
      </div>
    </div>
  )
}

export default RubParallax
