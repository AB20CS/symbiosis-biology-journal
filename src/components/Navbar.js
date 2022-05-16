import React from 'react'
import { Link } from 'gatsby'
import GitHubButton from 'react-github-btn'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container flex-around">
          <div className="navbar-brand logo">
            <Link to="/" className="navbar-item" title="Logo">
              <h1>Symbiosis Biology Journal</h1>
            </Link>
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
              onKeyDown={() => this.toggleHamburger()}
              role="button" tabIndex="0"
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">            
            <Link className="navbar-item" to="/blog">
                Articles
              </Link>
              <Link className="navbar-item" to="/about">
                About
              </Link>              
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </div>           
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
