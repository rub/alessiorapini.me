import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Work from "../Work/Work"

import styles from "./Works.module.css"

const Works = () => (
  <StaticQuery
    query={graphql`
      {
        allStrapiWork {
          edges {
            node {
              Number
              id
              role
              title
              type
              image {
                childImageSharp {
                  fluid(maxWidth: 600, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className={styles.Works}>
        {data.allStrapiWork.edges.map(document => (
          <Work
            key={document.node.id}
            number={document.node.Number}
            title={document.node.title}
            imageUrl={document.node.image.childImageSharp.fluid}
            // imageAlt={document.node.image.absolutePath}
            role={document.node.role}
            type={document.node.type}
          />
        ))}
      </div>
    )}
  ></StaticQuery>
  // <div className={styles.Works}>
  //   {data.allStrapiWork.edges.map(document => (
  //     <Work
  //       key={document.node.id}
  //       number={document.node.Number}
  //       title={document.node.title}
  //       imageUrl={document.node.image.childImageSharp.fixed}
  //       // imageAlt={document.node.image.absolutePath}
  //       role={document.node.role}
  //       type={document.node.type}
  //     />
  //   ))}
  //   {/* <Work
  //     number="06"
  //     title="Chubby Bird"
  //     imageUrl="https://picsum.photos/id/1021/2048/1206"
  //     imageAlt="Chubby Bird"
  //     role="UX/UI DESIGN, UI DEVELOPMENT"
  //     type="WEB APP. 2019"
  //   />
  //   <Work
  //     number="06"
  //     title="Chubby Bird"
  //     imageUrl="https://picsum.photos/id/1021/2048/1206"
  //     imageAlt="Chubby Bird"
  //     role="UX/UI DESIGN, UI DEVELOPMENT"
  //     type="WEB APP. 2019"
  //   />
  //   <Work
  //     number="06"
  //     title="Chubby Bird"
  //     imageUrl="https://picsum.photos/id/1021/2048/1206"
  //     imageAlt="Chubby Bird"
  //     role="UX/UI DESIGN, UI DEVELOPMENT"
  //     type="WEB APP. 2019"
  //   />
  //   <Work
  //     number="06"
  //     title="Chubby Bird"
  //     imageUrl="https://picsum.photos/id/1021/2048/1206"
  //     imageAlt="Chubby Bird"
  //     role="UX/UI DESIGN, UI DEVELOPMENT"
  //     type="WEB APP. 2019"
  //   />
  //   <Work
  //     number="06"
  //     title="Chubby Bird"
  //     imageUrl="https://picsum.photos/id/1021/2048/1206"
  //     imageAlt="Chubby Bird"
  //     role="UX/UI DESIGN, UI DEVELOPMENT"
  //     type="WEB APP. 2019"
  //   />
  //   <Work
  //     number="06"
  //     title="Chubby Bird"
  //     imageUrl="https://picsum.photos/id/1021/2048/1206"
  //     imageAlt="Chubby Bird"
  //     role="UX/UI DESIGN, UI DEVELOPMENT"
  //     type="WEB APP. 2019"
  //   /> */}
  // </div>
)

export default Works

// export const pageQuery = graphql`
//   query IndexQuery {
//     allStrapiWork {
//       edges {
//         node {
//           Number
//           id
//           role
//           title
//           type
//           image {
//             childImageSharp {
//               fixed(width: 200, height: 125) {
//                 ...GatsbyImageSharpFixed
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `