import React from "react"

import SplitIcon from "../SplitIcon/SplitIcon"

import {
  footer,
  socialLinks,
  socialLink,
  socialIcon,
  copyright,
} from "./Footer.module.css"

const Footer = ({ className }) => (
  <footer className={`${footer} ${className}`}>
    <ul className={socialLinks}>
      <li className={socialLink}>
        <SplitIcon
          className={socialIcon}
          url="mailto:hello@alessiorapini.me"
          name="email"
          description="Send me an email"
        />
      </li>
      <li className={socialLink}>
        <SplitIcon
          className={socialIcon}
          url="https://www.behance.net/AlessioRapini"
          name="behance"
          description="View my Behance profile"
          openInNewTab
        />
      </li>
      <li className={socialLink}>
        <SplitIcon
          className={socialIcon}
          url="https://www.linkedin.com/in/alessiorapini/"
          name="linkedin"
          description="View my Linkedin profile"
          openInNewTab
        />
      </li>
      <li className={socialLink}>
        <SplitIcon
          className={socialIcon}
          url="https://github.com/rub"
          name="github"
          description="View my Github profile"
          openInNewTab
        />
      </li>
    </ul>
    <p className={copyright}>Designed and built by Alessio Rapini</p>
  </footer>
)

export default Footer
