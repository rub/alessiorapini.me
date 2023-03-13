import React from 'react';
import Icon from '../Icon/Icon';
import {
  hero,
  glassyHeadingFixed,
  description,
  descriptionFadeIn,
  role,
  bioSignifier,
  scrollDown,
  arrowIcon,
  line,
  arrow,
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
        <p className={descriptionFadeIn}>(who loves to code too)</p>
        <div className={bioSignifier}>
          <div className={scrollDown}>
            Alessio who?
            <div className={arrowIcon}>
              <div className={line} />
              <Icon
                className={arrow}
                icon="chevronDown"
                description="Scroll down for bio"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
