import React from "react"

import styles from "./Copyright.module.css"

const Copyright = () => (
  <p className={styles.Copyright}>
    © Alessio Rapini {new Date().getFullYear()}. Made with{" "}
    <a
      href="https://www.gatsbyjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Gatsby
    </a>
    . View{" "}
    <a
      href="https://github.com/rub/alessiorapini.me"
      target="_blank"
      rel="noopener noreferrer"
    >
      Source
    </a>
    .
  </p>
)

export default Copyright
