import React from "react"
import "./navbar.styles.scss"
import logo from "../../assets/images/logo.png"

export default function Navbar() {
  return (
    <div className="Navbar">
      <a href="/">
        <img src={logo} className="Navbar__logo" alt="logo" />
      </a>
      <p className="Navbar__description">
        See real-time price predictions for Bitcoin.
      </p>
    </div>
  )
}
