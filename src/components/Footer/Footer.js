import React from "react"

import Icon from "../Icon/Icon"

import styles from "./Footer.module.css"

const Footer = ({ authorMail, copyright }) => (
  <footer className={styles.Footer}>
    <p>
      <a href="mailto:hello@alessiorapini.me">hello@alessiorapini.me</a>
    </p>
    <p className={styles.copyright}>
      © {new Date().getFullYear()}. Made with{" "}
      <a
        href="https://www.gatsbyjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gatsby
      </a>
      . View{" "}
      <a
        href="https://github.com/rub/alessiorapini.me"
        target="_blank"
        rel="noopener noreferrer"
      >
        Source
      </a>
      .
    </p>
    <ul className={styles.socialLinks}>
      <li>
        <a
          href="https://www.behance.net/AlessioRapini"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            icon="behance"
            title="Behance social link"
            className={styles.socialIcons}
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/alessiorapini/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            icon="linkedin"
            title="Linkedin social link"
            className={styles.socialIcons}
          />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/rub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            icon="github"
            title="Github social link"
            className={styles.socialIcons}
          />
        </a>
      </li>
    </ul>
  </footer>
)

export default Footer
