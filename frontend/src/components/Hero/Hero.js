import React from 'react';

import {
  hero,
  glassyHeadingFixed,
  description,
  descriptionFadeIn,
  role,
} from './Hero.module.css';

// TODO: Try the new animation on Figma first
// TODO: Run loading screen only once => https://stackoverflow.com/questions/62456913/show-loading-screen-only-once-per-session
function Hero() {
  return (
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
      <div className={description}>
        <p>
          <span className={descriptionFadeIn}>I am a&nbsp;</span>
          <span className={role}>UX DESIGNER</span>
        </p>
        <p className={descriptionFadeIn}>(who enjoys coding too)</p>
      </div>
    </div>
  );
}

export default Hero;
