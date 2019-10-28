import React from "react"

import styles from "./About.module.css"

const About = () => (
  <div className={styles.About}>
    <h2 className={styles.role}>UX DESIGNER, UI DELEVOPER</h2>
    <h1 className={styles.name}>Alessio Rapini</h1>
    <p className={styles.description}>
      I’m a UX designer who loves to code too.
      <br />I enjoy solving problems with a Human Centered Design approach and
      the Design Thinking methodology. I strongly believe in the importance of
      thinking in code when designing.
    </p>
  </div>
)

export default About
