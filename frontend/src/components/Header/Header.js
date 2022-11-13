import React from "react"
import { Link } from "gatsby"

import { header, logo, navLink } from "./Header.module.css"

const Header = () => (
  <header className={header}>
    <Link to="/" className={logo}>
      AR
    </Link>
    <nav>
      <Link to="/works" className={navLink}>
        Selected works
      </Link>
    </nav>
  </header>
)

export default Header
