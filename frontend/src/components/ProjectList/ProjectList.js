import React, { useEffect, useRef, useResizeObserver } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import LocomotiveScroll from "locomotive-scroll"
import ProjectItem from "../ProjectItem/ProjectItem"
import "../../../node_modules/locomotive-scroll/dist/locomotive-scroll.css"
import {
  projectListWrapper,
  projectListContent,
  projectListFixed,
  projectListSlicedLeft,
  projectListSlicedRight,
  projectListGrid,
  projectListSlicedGridLeft,
  projectListSlicedGridRight,
  projectSlicedImageLeft,
  projectSlicedImageRight,
} from "./ProjectList.module.css"

const clamp = (value, min, max) => {
  if (value <= min) {
    return min
  } else if (value >= max) {
    return max
  }
  return value
}

export default ProjectList = () => {
  const projectsQuery = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            featured_image_alt
            featured_image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `)

  const ref = useRef(null)
  const FixedgridRef = useRef(null)
  const SlicedLeftGridRef = useRef(null)
  const SlicedRightGridRef = useRef(null)
  const scroll = useRef({ cache: 0, current: 0 })

  useEffect(() => {
    const scrollElement = new LocomotiveScroll({
      el: ref.current,
      smooth: true,
      smartphone: {
        smooth: true,
      },
      direction: "horizontal",
      getDirection: true,
      getSpeed: true,
    })

    scrollElement.on("scroll", (obj) => {
      scroll.current.current = obj.scroll.x
      const distance = scroll.current.current - scroll.current.cache
      scroll.current.cache = scroll.current.current

      SlicedLeftGridRef.current.style.transform = `translate3d(${clamp(
        distance,
        -20,
        20
      )}px, 0, 0)`
      SlicedRightGridRef.current.style.transform = `translate3d(${clamp(
        -distance,
        -20,
        20
      )}px, 0, 0)`
      // SlicedLeftGridRef.current.style.transform = `translate3d(${distance}px, 0, 0)`
      // SlicedRightGridRef.current.style.transform = `translate3d(${-distance}px, 0, 0)`
    })
  })

  return (
    <div
      className={projectListWrapper}
      id="main-container"
      data-scroll-container
      ref={ref}
    >
      <div className={projectListContent}>
        <div className={projectListFixed} ref={FixedgridRef}>
          <div className={projectListGrid}>
            {projectsQuery.allMarkdownRemark.nodes.map((project, index) => (
              <ProjectItem
                key={index}
                clipElement={index}
                title={project.frontmatter.title}
                image={
                  project.frontmatter.featured_image.childImageSharp
                    .gatsbyImageData
                }
              />
            ))}
          </div>
        </div>
        <div className={projectListSlicedLeft} ref={SlicedLeftGridRef}>
          <div className={`${projectListGrid} ${projectListSlicedGridLeft}`}>
            {projectsQuery.allMarkdownRemark.nodes.map((project, index) => (
              <div className={projectSlicedImageLeft}>
                <GatsbyImage
                  key={index}
                  image={
                    project.frontmatter.featured_image.childImageSharp
                      .gatsbyImageData
                  }
                  alt={project.frontmatter.title}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={projectListSlicedRight} ref={SlicedRightGridRef}>
          <div className={`${projectListGrid} ${projectListSlicedGridRight}`}>
            {projectsQuery.allMarkdownRemark.nodes.map((project, index) => (
              <div className={projectSlicedImageRight}>
                <GatsbyImage
                  key={index}
                  image={
                    project.frontmatter.featured_image.childImageSharp
                      .gatsbyImageData
                  }
                  alt={project.frontmatter.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
