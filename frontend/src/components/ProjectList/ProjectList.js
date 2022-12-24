import React, { useEffect, useRef, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProjectItem from "../ProjectItem/ProjectItem"
import { projectListWrapper } from "./ProjectList.module.css"

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
            roles
          }
        }
      }
    }
  `)

  const menuItems = useRef(null)
  // Move the project items to a state to duplicate them
  const [renderItems, setRenderItems] = useState(
    projectsQuery.allMarkdownRemark.nodes
  )

  const cloneItems = () => {
    // Get the height of the first item
    const itemHeight = menuItems.current.childNodes[0].offsetHeight
    // Calculate how many elements can fit into the viewport
    const fitMax = Math.ceil(window.innerHeight / itemHeight)

    // Duplicate the items
    const clonedItems = [...renderItems]
      .filter((_, index) => index < fitMax)
      .map((target) => target)

    // Add the cloned items to the original ones
    setRenderItems([...renderItems, ...clonedItems])
    return clonedItems.length * itemHeight
  }

  // Get the current scroll position
  const getScrollPosition = () => {
    return (
      (menuItems.current.pageYOffset || menuItems.current.scrollTop) -
      (menuItems.current.clientTop || 0)
    )
  }

  const setScrollPosition = (position) => {
    menuItems.current.scrollTop = position
  }

  const initScroll = () => {
    const scrollPosition = getScrollPosition()
    if (scrollPosition <= 0) {
      setScrollPosition(1)
    }
  }

  useEffect(() => {
    const clonesHeight = cloneItems()
    initScroll()

    // Create the loop scroll effect
    const scrollUpdate = () => {
      const scrollPosition = getScrollPosition()
      // If the first element of the cloned items hits the top we will scroll back to position 0 of the scroll
      if (clonesHeight + scrollPosition >= menuItems.current.scrollHeight) {
        setScrollPosition(1)
        // If the first element of the cloned items hits point 0 we will scroll to cloned items
      } else if (scrollPosition <= 0) {
        setScrollPosition(menuItems.current.scrollHeight - clonesHeight)
      }
    }

    menuItems.current.addEventListener("scroll", scrollUpdate)

    return () => {
      menuItems.current.removeEventListener("scroll", scrollUpdate)
    }
  }, [])

  return (
    <div className={projectListWrapper}>
      <ul ref={menuItems}>
        {renderItems.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.frontmatter.title}
            url={
              project.frontmatter.featured_image.childImageSharp.gatsbyImageData
            }
            alt={project.frontmatter.title}
            itemIndex={index}
            roles={project.frontmatter.roles}
          />
        ))}
      </ul>
    </div>
  )
}
