import React from "react"

import {
  hero,
  glassyHeadingFixed,
  glassyHeadingAnimated,
  headingAnimated,
  headingLetterAnimatedWrapper,
  headingLetterAnimated,
  description,
  descriptionFadeIn,
  role,
  roleLetterWrapper,
  roleLetter,
} from "./Hero.module.css"

const Hero = () => (
  <div className={hero}>
    <h1 className={glassyHeadingFixed}>
      <svg aria-hidden="true">
        <clipPath id="lockup-headline-mask-path">
          <text dominantBaseline="hanging" x="0" y="0" dy="0">
            ALESSIO RAPINI
          </text>
        </clipPath>
      </svg>
    </h1>
    <h1 className={glassyHeadingAnimated}>
      <span className={headingAnimated}>
        <span className={headingLetterAnimatedWrapper}>
          <span className={headingLetterAnimated}>A</span>
        </span>
        <span className={headingLetterAnimatedWrapper}>
          <span className={headingLetterAnimated}>L</span>
        </span>
        <span className={headingLetterAnimatedWrapper}>
          <span className={headingLetterAnimated}>E</span>
        </span>
        <span className={headingLetterAnimatedWrapper}>
          <span className={headingLetterAnimated}>S</span>
        </span>
        <span className={headingLetterAnimatedWrapper}>
          <span className={headingLetterAnimated}>S</span>
        </span>
        <span className={headingLetterAnimatedWrapper}>
          <span className={headingLetterAnimated}>I</span>
        </span>
        <span className={headingLetterAnimatedWrapper}>
          <span className={headingLetterAnimated}>O </span>
        </span>
        <span>&nbsp;</span>
        <span className={headingLetterAnimatedWrapper}>
          <span className={headingLetterAnimated}>R</span>
        </span>
        <span className={headingLetterAnimatedWrapper}>
          <span className={headingLetterAnimated}>A</span>
        </span>
        <span className={headingLetterAnimatedWrapper}>
          <span className={headingLetterAnimated}>P</span>
        </span>
        <span className={headingLetterAnimatedWrapper}>
          <span className={headingLetterAnimated}>I</span>
        </span>
        <span className={headingLetterAnimatedWrapper}>
          <span className={headingLetterAnimated}>N</span>
        </span>
        <span className={headingLetterAnimatedWrapper}>
          <span className={headingLetterAnimated}>I</span>
        </span>
      </span>
    </h1>
    <div className={description}>
      <p>
        <span className={descriptionFadeIn}>I am a&nbsp;</span>
        <span className={role}>
          <span className={roleLetterWrapper}>
            <span className={roleLetter}>U</span>
          </span>
          <span className={roleLetterWrapper}>
            <span className={roleLetter}>X</span>
          </span>{" "}
          <span className={roleLetterWrapper}>
            <span className={roleLetter}>D</span>
          </span>
          <span className={roleLetterWrapper}>
            <span className={roleLetter}>E</span>
          </span>
          <span className={roleLetterWrapper}>
            <span className={roleLetter}>S</span>
          </span>
          <span className={roleLetterWrapper}>
            <span className={roleLetter}>I</span>
          </span>
          <span className={roleLetterWrapper}>
            <span className={roleLetter}>G</span>
          </span>
          <span className={roleLetterWrapper}>
            <span className={roleLetter}>N</span>
          </span>
          <span className={roleLetterWrapper}>
            <span className={roleLetter}>E</span>
          </span>
          <span className={roleLetterWrapper}>
            <span className={roleLetter}>R</span>
          </span>
        </span>
      </p>
      <p className={descriptionFadeIn}>(who loves to code too)</p>
    </div>
  </div>
)

export default Hero
