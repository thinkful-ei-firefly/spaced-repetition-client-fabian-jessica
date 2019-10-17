import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'

class LoginRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  render() {
    return (
      <section className="login-register-section">
        <div className="login-register-card">
          <h2 className="login-register-header">Login</h2>
          <LoginForm
            onLoginSuccess={this.handleLoginSuccess}
          />
        </div>
      </section>
    );
  }
}

export default LoginRoute
