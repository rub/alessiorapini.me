import React from "react"

import Works from "../Works/Works"
import About from "../About/About"

import styles from "./PortfolioWrapper.module.css"

const PortfolioWrapper = () => (
  <div className={styles.PortfolioWrapper}>
    <Works />
    <About />
  </div>
)

export default PortfolioWrapper
