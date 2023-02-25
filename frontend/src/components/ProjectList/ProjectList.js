import React, { useEffect, useRef, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ProjectItem from '../ProjectItem/ProjectItem';
import {
  wrapper,
  listWrapper,
  list,
  projectCounterDefault,
  titleDefault,
} from './ProjectList.module.css';

function ProjectList() {
  const projectsQuery = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { frontmatter: { id: ASC } }) {
        nodes {
          frontmatter {
            link
            title
            featured_image_alt
            featured_image_large {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
            roles
          }
        }
      }
    }
  `);

  const menuItems = useRef(null);
  const itemsWrapper = useRef(null);
  const titleItem = useRef([]);

  // Move the project items to a state
  const [renderItems, setRenderItems] = useState(
    projectsQuery.allMarkdownRemark.nodes
  );

  useEffect(() => {
    const itemsWrapperRef = itemsWrapper.current;
    const menuItemsRef = menuItems.current;
    const titleItemRef = titleItem.current;
    let isScrolling;

    // Disable the image animation on scroll to prevent messing up the UI and
    // performance bottlenecks
    const disableAnimationonScroll = () => {
      if (itemsWrapperRef && titleItem.current) {
        window.clearTimeout(isScrolling);
        itemsWrapperRef.style.pointerEvents = 'none';
        renderItems.forEach((_, i) => {
          titleItem.current[i].style.pointerEvents = 'none';
        });

        isScrolling = setTimeout(() => {
          itemsWrapperRef.style.pointerEvents = 'all';
          renderItems.forEach((_, i) => {
            titleItemRef[i].style.pointerEvents = 'all';
          });
        }, 300);
      }
    };

    menuItemsRef.addEventListener('scroll', disableAnimationonScroll);
    return () => {
      menuItemsRef.removeEventListener('scroll', disableAnimationonScroll);
    };
  }, [renderItems]);

  const cloneItems = () => {
    // Get the height of the first item
    // const itemHeight = menuItems.current.childNodes[0].offsetHeight
    const itemHeight = itemsWrapper.current.childNodes[0].offsetHeight;
    // Calculate how many elements can fit into the viewport
    const fitMax = Math.ceil(window.innerHeight / itemHeight);

    // Duplicate the items
    const clonedItems = [...renderItems]
      .filter((_, index) => index < fitMax)
      .map((target) => target);

    // Add the cloned items to the original ones
    setRenderItems([...renderItems, ...clonedItems]);
    return clonedItems.length * itemHeight;
  };

  // Get the current scroll position
  const getScrollPosition = () => {
    return (
      (menuItems.current.pageYOffset || menuItems.current.scrollTop) -
      (menuItems.current.clientTop || 0)
    );
  };

  const setScrollPosition = (position) => {
    menuItems.current.scrollTop = position;
  };

  useEffect(() => {
    const clonesHeight = cloneItems();
    const menuItemsRef = menuItems.current;

    const initScroll = () => {
      const scrollPosition = getScrollPosition();
      if (scrollPosition <= 0) {
        setScrollPosition(1);
      }
    };
    initScroll();

    // Create the loop scroll effect
    const scrollUpdate = () => {
      const scrollPosition = getScrollPosition();
      // If the first element of the cloned items hits the top we will scroll
      // back to position 0 of the scroll
      if (clonesHeight + scrollPosition >= itemsWrapper.current.scrollHeight) {
        setScrollPosition(1);
        // If the first element of the cloned items hits point 0 we will scroll
        // to cloned items
      } else if (scrollPosition <= 0) {
        setScrollPosition(itemsWrapper.current.scrollHeight - clonesHeight);
      }
    };

    menuItemsRef.addEventListener('scroll', scrollUpdate);

    return () => {
      menuItemsRef.removeEventListener('scroll', scrollUpdate);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const originalItemsAmount = projectsQuery.allMarkdownRemark.nodes.length;

  return (
    <div className={wrapper}>
      <div className={listWrapper} ref={menuItems}>
        <ul className={list} ref={itemsWrapper}>
          {renderItems.map((project, index) => {
            return (
              <ProjectItem
                // We need to use the index otherwise we will get duplicated ids
                // because the original items are duplicated
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                link={project.frontmatter.link}
                counter={
                  index < originalItemsAmount
                    ? index + 1
                    : index + 1 - originalItemsAmount
                }
                title={project.frontmatter.title}
                url={
                  project.frontmatter.featured_image_large.childImageSharp
                    .gatsbyImageData
                }
                alt={project.frontmatter.title}
                roles={project.frontmatter.roles}
                titleRef={(ref) => {
                  titleItem.current[index] = ref;
                }}
                projectCounterClassName={projectCounterDefault}
                titleClassName={titleDefault}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProjectList;
