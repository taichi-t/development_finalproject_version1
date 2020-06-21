import { Link } from "gatsby"
import React, { Component } from "react"

import styles from "./header.module.scss"
import logo from "../../images/logo.png"

class Header extends Component {
  render() {
    const ListLink = props => (
      <li>
        <Link to={props.to} activeClassName={styles.activeLink}>
          {props.children}
        </Link>
      </li>
    )
    return (
      <header className={styles.siteHeader}>
        <nav>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
            }}
          >
            <ul style={{ alignSelf: "flex-start", textDecoration: "none" }}>
              <img src={logo} alt="logo" />
            </ul>
            <ul>
              <ListLink to={`/`}>home</ListLink>
              <ListLink to={`/blog/`}>blog</ListLink>
              <ListLink to={`/contact/`}>contact</ListLink>
            </ul>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
