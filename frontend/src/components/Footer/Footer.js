import React from "react"
import PropTypes from "prop-types"

import SplitIcon from "../SplitIcon/SplitIcon"

import styles from "./Footer.module.css"

/**
 * Footer displays email and social links
 */
const Footer = ({ dark, className }) => (
  <footer
    className={`
    ${styles.Footer}
    ${dark ? styles.isDark : styles.isLight}
    ${className}
    `}
  >
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

Footer.propTypes = {
  /** Whether Footer style is dark */
  dark: PropTypes.bool,
  /** Footer optional classname */
  className: PropTypes.string,
}

Footer.defaultProps = {
  dark: false,
  className: "",
}

export default Footer
