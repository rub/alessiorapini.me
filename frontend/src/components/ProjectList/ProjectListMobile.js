import React, { useEffect, useState, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
import ProjectItemMobile from '../ProjectItem/ProjectItemMobile';
import {
  wrapper,
  listWrapper,
  itemActive,
  projectCounterActive,
  titleActive,
  imageWrapperActive,
  imageSlicedActive,
} from './ProjectListMobile.module.css';

function ProjectListMobile() {
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
  `);

  const imageRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (imageRef.current) {
      setDimensions({
        width: imageRef.current.clientWidth,
        height: imageRef.current.clientHeight,
      });
    }
  }, []);

  const xDistanceFromBoundaries = (window.innerWidth - dimensions.width) / 2;
  const yDistanceFromBoundaries = (window.innerHeight - dimensions.height) / 2;

  const originalItemsAmount = projectsQuery.allMarkdownRemark.nodes.length;

  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

  function randomImagePosition(min, max) {
    // min = Math.ceil(min);
    // max = Math.floor(max);
    const foo = Math.ceil(min);
    const bar = Math.floor(max);
    return Math.floor(Math.random() * (bar - foo + 1) + foo);
    // return Math.floor(Math.random() * (max - min + 1) + min);
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
          onSlideChange={() =>
            setImagePosition({
              ...imagePosition,
              x: randomImagePosition(
                -xDistanceFromBoundaries,
                xDistanceFromBoundaries
              ),
              y: randomImagePosition(
                -yDistanceFromBoundaries,
                yDistanceFromBoundaries
              ),
            })
          }
        >
          {projectsQuery.allMarkdownRemark.nodes.map((project, index) => {
            return (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <ProjectItemMobile
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    counter={
                      index < originalItemsAmount
                        ? index + 1
                        : index + 1 - originalItemsAmount
                    }
                    title={project.frontmatter.title}
                    url={
                      project.frontmatter.featured_image.childImageSharp
                        .gatsbyImageData
                    }
                    alt={project.frontmatter.title}
                    itemClassName={isActive ? itemActive : ''}
                    projectCounterClassName={
                      isActive ? projectCounterActive : ''
                    }
                    titleClassName={isActive ? titleActive : ''}
                    imageWrapperClassName={isActive ? imageWrapperActive : ''}
                    imageSlicedClassName={isActive ? imageSlicedActive : ''}
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
