import React from "react"

import { header, logo, navLink } from "./Header.module.css"

const Header = () => (
  <header className={header}>
    <div className={logo}>AR</div>
    <nav>
      <a
        className={navLink}
        href="https://www.behance.net/AlessioRapini"
        target="_blank"
        rel="noopener"
      >
        Selected works
      </a>
    </nav>
  </header>
)

export default Header
