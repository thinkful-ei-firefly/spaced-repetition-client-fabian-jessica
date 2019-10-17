import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import './Header.css'

class Header extends Component {
  static contextType = UserContext

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  renderLogoutLink() {
    return (
      <div>
        <span className="login-logout-user-welcome">
          Welcome, {this.context.user.name}
        </span>
        <nav>
          <Link
            onClick={this.handleLogoutClick}
            className="login-logout-header"
            to='/login'>
            Logout
          </Link>
        </nav>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <nav>
        <Link to='/login' className="login-logout-header">Login</Link>
        {'    '}
        <Link to='/register' className="login-logout-header">Sign up</Link>
      </nav>
    )
  }

  render() {
    return (
      <header>
        <h1 className="site-title-header">
          <Link to='/' className="site-title-header">
            Easy Italian <br/> Learn vocabulary with Spaced repetition
          </Link>
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </header>
    );
  }
}

export default Header
