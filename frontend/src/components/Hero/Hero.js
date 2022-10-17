import React from "react"

import blurryTextSVG from "../../images/alessio-rapini.svg"

import styles from "./Hero.module.css"

const Hero = () => (
  <div className={styles.Hero}>
    <div className={styles.blurryContainer}>
      <div className={styles.blurryEfx} />
      <svg viewBox="0 0 1110 183" className={styles.blurryText}>
        <defs>
          <filter id="textShadow" filterUnits="userSpaceOnUse">
            <feDropShadow
              dx="0"
              dy="10"
              stdDeviation="5"
              floodColor="#000"
              floodOpacity="0.2"
            />
            <feComposite operator="out" in2="SourceGraphic"></feComposite>
          </filter>
        </defs>
        <image
          filter="url(#textShadow)"
          x="0"
          y="0"
          width="100%"
          height="100%"
          href={blurryTextSVG}
        />
      </svg>
    </div>
    <p className={styles.description}>
      I am a <span className={styles.role}>UX Designer</span>
      <br /> (who loves to code too)
    </p>
  </div>
)

export default Hero
