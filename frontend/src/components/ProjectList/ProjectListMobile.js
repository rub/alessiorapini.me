import React, { useEffect, useState, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
import ProjectItemMobile from '../ProjectItem/ProjectItemMobile';
import {
  wrapper,
  listWrapper,
  isItemActive,
  projectCounterActive,
  titleActive,
  imageWrapperActive,
  imageSlicedActive,
} from './ProjectListMobile.module.css';

function ProjectListMobile() {
  const projectsQuery = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { frontmatter: { id: ASC } }) {
        nodes {
          frontmatter {
            title
            featured_image_alt
            featured_image_small {
              childImageSharp {
                gatsbyImageData
              }
            }
            roles
          }
        }
      }
    }
  `);

  const imageRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // TODO: z-index => it seems there's no solution

  function handleResize() {
    if (imageRef.current) {
      setDimensions({
        width: imageRef.current.clientWidth,
        height: imageRef.current.clientHeight,
      });
    }
  }

  useEffect(() => {
    handleResize();
  }, []);

  // We need to divide by 2
  // because the active slide is on the middle of the viewport
  const xDistanceFromBoundaries = (window.innerWidth - dimensions.width) / 2;
  const yDistanceFromBoundaries =
    (window.innerHeight - dimensions.height) / 2 - 20;

  const originalItemsAmount = projectsQuery.allMarkdownRemark.nodes.length;

  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

  function randomImagePosition(min, max) {
    const minValue = Math.ceil(min);
    const maxValue = Math.floor(max);
    return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
  }

  useEffect(() => {
    setImagePosition({
      x: randomImagePosition(-xDistanceFromBoundaries, xDistanceFromBoundaries),
      y: randomImagePosition(-yDistanceFromBoundaries, yDistanceFromBoundaries),
    });
  }, [xDistanceFromBoundaries, yDistanceFromBoundaries]);

  function recalculateImagePosition() {
    setImagePosition({
      x: randomImagePosition(-xDistanceFromBoundaries, xDistanceFromBoundaries),
      y: randomImagePosition(-yDistanceFromBoundaries, yDistanceFromBoundaries),
    });
  }

  return (
    <div className={wrapper}>
      <div className={listWrapper}>
        <Swiper
          direction="vertical"
          loop
          centeredSlides
          initialSlide={0}
          slidesPerView={4}
          onSlideChange={(swiper) => {
            // Whenever the loop restarts, Swiper automatically switches back
            // to using the original slide before going to the next one.
            // This intermediate step implies a recall of setImagePosition(),
            // and the same image is re-rendered in a different position.
            // To prevent this issue, we set a condition where Swiper
            // does not call this function whenever the loop restarts.
            if (swiper.activeIndex > swiper.previousIndex) {
              recalculateImagePosition();
            }
          }}
          onResize={() => {
            recalculateImagePosition();
          }}
        >
          {projectsQuery.allMarkdownRemark.nodes.map((project, index) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <ProjectItemMobile
                    counter={
                      index < originalItemsAmount
                        ? index + 1
                        : index + 1 - originalItemsAmount
                    }
                    title={project.frontmatter.title}
                    url={
                      project.frontmatter.featured_image_small.childImageSharp
                        .gatsbyImageData
                    }
                    alt={project.frontmatter.title}
                    itemClassName={isActive ? isItemActive : ''}
                    projectCounterClassName={projectCounterActive}
                    titleClassName={titleActive}
                    imageWrapperClassName={imageWrapperActive}
                    imageSlicedClassName={imageSlicedActive}
                    imageXPosition={imagePosition.x}
                    imageYPosition={imagePosition.y}
                    imageRef={imageRef}
                  />
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default ProjectListMobile;
