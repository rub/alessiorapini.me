import React from "react"

import SplitLink from "../SplitLink/SplitLink"
import SplitIcon from "../SplitIcon/SplitIcon"
import Icon from "../Icon/Icon"

import styles from "./Footer.module.css"

const Footer = () => (
  <footer className={styles.Footer}>
    <div className={styles.emailText}>
      <SplitLink
        url="mailto:hello@alessiorapini.me"
        text="hello@alessiorapini.me"
      />
    </div>
    <ul className={styles.socialLinks}>
      <li className={styles.emailIcon}>
        <SplitIcon
          url="mailto:hello@alessiorapini.me"
          iconName="email"
          iconTitle="Email link"
          iconClassName={styles.socialIcons}
        />
      </li>
      <li>
        <SplitIcon
          url="https://www.behance.net/AlessioRapini"
          iconName="behance"
          iconTitle="Behance profile link"
          iconClassName={styles.socialIcons}
          newTab
        />
      </li>
      <li>
        <SplitIcon
          url="https://www.linkedin.com/in/alessiorapini/"
          iconName="linkedin"
          iconTitle="Linkedin profile link"
          iconClassName={styles.socialIcons}
          newTab
        />
      </li>
      <li>
        <SplitIcon
          url="https://github.com/rub"
          iconName="github"
          iconTitle="Github profile link"
          iconClassName={styles.socialIcons}
          newTab
        />
      </li>
    </ul>
  </footer>
)

export default Footer
