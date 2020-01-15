import React from "react"
import { StaticQuery, graphql } from "gatsby"
import ReactMarkdown from "react-markdown"

import styles from "./About.module.css"

const About = () => (
  <StaticQuery
    query={graphql`
      {
        allStrapiAbout {
          edges {
            node {
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className={styles.About}>
        <h1 className={styles.name}>Alessio Rapini</h1>
        <h2 className={styles.role}>
          UX/UI DESIGN, ART DIRECTION, UI DELEVOPMENT
        </h2>
        {data.allStrapiAbout.edges.map(document => (
          <div className={styles.description}>
            <ReactMarkdown source={document.node.description} />
          </div>
        ))}
      </div>
    )}
  ></StaticQuery>
)

export default About
