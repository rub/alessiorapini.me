import React from "react"

import styles from "./Hero.module.css"

const Hero = () => {
  // Detect Safari browser
  const isSafari =
    /constructor/i.test(window.HTMLElement) ||
    (function(p) {
      return p.toString() === "[object SafariRemoteNotification]"
    })(
      !window["safari"] ||
        (typeof safari !== "undefined" && safari.pushNotification)
    )
  // Detect Firefox browser
  const isFirefox = typeof InstallTrigger !== "undefined"

  const stylesForFirefox = isFirefox ? styles.glassyHeadingFirefox : ""
  const stylesForSafari = isSafari ? styles.glassyHeadingSafari : ""

  return (
    <div className={styles.Hero}>
      <h1
        className={`${styles.glassyHeadingFixed} ${stylesForFirefox} ${stylesForSafari}`}
      >
        <svg aria-hidden="true">
          <clipPath id="lockup-headline-mask-path">
            <text dominantBaseline="hanging" x="0" y="0" dy="0">
              ALESSIO RAPINI
            </text>
          </clipPath>
        </svg>
      </h1>
      <h1
        className={`${styles.glassyHeadingAnimated} ${stylesForFirefox} ${stylesForSafari} `}
      >
        <span className={styles.headingAnimated}>
          <span className={styles.headingLetterAnimatedWrapper}>
            <span className={styles.headingLetterAnimated}>A</span>
          </span>
          <span className={styles.headingLetterAnimatedWrapper}>
            <span className={styles.headingLetterAnimated}>L</span>
          </span>
          <span className={styles.headingLetterAnimatedWrapper}>
            <span className={styles.headingLetterAnimated}>E</span>
          </span>
          <span className={styles.headingLetterAnimatedWrapper}>
            <span className={styles.headingLetterAnimated}>S</span>
          </span>
          <span className={styles.headingLetterAnimatedWrapper}>
            <span className={styles.headingLetterAnimated}>S</span>
          </span>
          <span className={styles.headingLetterAnimatedWrapper}>
            <span className={styles.headingLetterAnimated}>I</span>
          </span>
          <span className={styles.headingLetterAnimatedWrapper}>
            <span className={styles.headingLetterAnimated}>O </span>
          </span>
          {isSafari ? <span> </span> : <span>&nbsp;</span>}
          <span className={styles.headingLetterAnimatedWrapper}>
            <span className={styles.headingLetterAnimated}>R</span>
          </span>
          <span className={styles.headingLetterAnimatedWrapper}>
            <span className={styles.headingLetterAnimated}>A</span>
          </span>
          <span className={styles.headingLetterAnimatedWrapper}>
            <span className={styles.headingLetterAnimated}>P</span>
          </span>
          <span className={styles.headingLetterAnimatedWrapper}>
            <span className={styles.headingLetterAnimated}>I</span>
          </span>
          <span className={styles.headingLetterAnimatedWrapper}>
            <span className={styles.headingLetterAnimated}>N</span>
          </span>
          <span className={styles.headingLetterAnimatedWrapper}>
            <span className={styles.headingLetterAnimated}>I</span>
          </span>
        </span>
      </h1>
      <div className={styles.description}>
        <p className={styles.descriptionLine}>
          <span className={styles.descriptionFadeIn}>I am a&nbsp;</span>
          <span className={styles.role}>
            <span className={styles.roleLetterWrapper}>
              <span className={styles.roleLetter}>U</span>
            </span>
            <span className={styles.roleLetterWrapper}>
              <span className={styles.roleLetter}>X</span>
            </span>{" "}
            <span className={styles.roleLetterWrapper}>
              <span className={styles.roleLetter}>D</span>
            </span>
            <span className={styles.roleLetterWrapper}>
              <span className={styles.roleLetter}>E</span>
            </span>
            <span className={styles.roleLetterWrapper}>
              <span className={styles.roleLetter}>S</span>
            </span>
            <span className={styles.roleLetterWrapper}>
              <span className={styles.roleLetter}>I</span>
            </span>
            <span className={styles.roleLetterWrapper}>
              <span className={styles.roleLetter}>G</span>
            </span>
            <span className={styles.roleLetterWrapper}>
              <span className={styles.roleLetter}>N</span>
            </span>
            <span className={styles.roleLetterWrapper}>
              <span className={styles.roleLetter}>E</span>
            </span>
            <span className={styles.roleLetterWrapper}>
              <span className={styles.roleLetter}>R</span>
            </span>
          </span>
        </p>
        <p className={styles.descriptionFadeIn}>(who loves to code too)</p>
      </div>
    </div>
  )
}

export default Hero
