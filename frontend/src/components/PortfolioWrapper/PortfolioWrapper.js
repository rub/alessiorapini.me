import React from "react"

import About from "../About/About"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Works from "../Works/Works"

import styles from "./PortfolioWrapper.module.css"

const PortfolioWrapper = () => (
  <div className={styles.PortfolioWrapper}>
    <Header dark portfolio />
    <Works />
    <About className={styles.PortfolioAbout} />
    <Footer className={styles.PortfolioFooter} dark />
  </div>
)

export default PortfolioWrapper
