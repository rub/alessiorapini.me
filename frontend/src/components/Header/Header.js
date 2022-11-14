import React from "react"
import { Link } from "gatsby"

import { header, positionFixed, logo, navLink } from "./Header.module.css"

const Header = ({ isFixed }) => (
  <header className={`${header} ${isFixed ? positionFixed : ""}`}>
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
