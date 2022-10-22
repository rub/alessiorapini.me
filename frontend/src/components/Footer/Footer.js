import React from "react"

import SplitIcon from "../SplitIcon/SplitIcon"

import styles from "./Footer.module.css"

const Footer = ({ className }) => (
  <footer className={`${styles.Footer} ${className}`}>
    <ul className={styles.socialLinks}>
      <li className={styles.socialLink}>
        <SplitIcon
          className={styles.socialIcons}
          url="mailto:hello@alessiorapini.me"
          name="email"
          description="Send me an email"
        />
      </li>
      <li className={styles.socialLink}>
        <SplitIcon
          className={styles.socialIcons}
          url="https://www.behance.net/AlessioRapini"
          name="behance"
          description="View my Behance profile"
          newTab
        />
      </li>
      <li className={styles.socialLink}>
        <SplitIcon
          className={styles.socialIcons}
          url="https://www.linkedin.com/in/alessiorapini/"
          name="linkedin"
          description="View my Linkedin profile"
          newTab
        />
      </li>
      <li className={styles.socialLink}>
        <SplitIcon
          className={styles.socialIcons}
          url="https://github.com/rub"
          name="github"
          description="View my Github profile"
          newTab
        />
      </li>
    </ul>
    <p className={styles.copyright}>Designed and built by Alessio Rapini</p>
  </footer>
)

export default Footer
