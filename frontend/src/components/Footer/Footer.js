import React from "react"

import SplitIcon from "../SplitIcon/SplitIcon"

import styles from "./Footer.module.css"

const Footer = ({ className }) => (
  <footer className={`${styles.Footer} ${className}`}>
    <ul className={styles.socialLinks}>
      <li className={styles.socialLink}>
        <SplitIcon
          iconClassName={styles.socialIcons}
          url="mailto:hello@alessiorapini.me"
          iconName="email"
          iconTitle="Email link"
        />
      </li>
      <li className={styles.socialLink}>
        <SplitIcon
          iconClassName={styles.socialIcons}
          url="https://www.behance.net/AlessioRapini"
          iconName="behance"
          iconTitle="Behance profile link"
          newTab
        />
      </li>
      <li className={styles.socialLink}>
        <SplitIcon
          iconClassName={styles.socialIcons}
          url="https://www.linkedin.com/in/alessiorapini/"
          iconName="linkedin"
          iconTitle="Linkedin profile link"
          newTab
        />
      </li>
      <li className={styles.socialLink}>
        <SplitIcon
          iconClassName={styles.socialIcons}
          url="https://github.com/rub"
          iconName="github"
          iconTitle="Github profile link"
          newTab
        />
      </li>
    </ul>
    <p className={styles.copyright}>Designed and built by Alessio Rapini</p>
  </footer>
)

export default Footer
