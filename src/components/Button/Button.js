import React from "react"

import styles from "./Button.module.css"
import { className } from "postcss-selector-parser"

const Button = ({ link, text }) => (
  <a href={link} className={styles.Button}>
    {text}
  </a>
)

export default Button
