import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Required, Label } from '../Form/Form'
import AuthApiService from '../../services/auth-api-service'
import Button from '../Button/Button'
import './RegistrationForm.css'

class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => { }
  }

  state = { error: null }

  firstInput = React.createRef()

  handleSubmit = ev => {
    ev.preventDefault()
    const { name, username, password } = ev.target
    AuthApiService.postUser({
      name: name.value,
      username: username.value,
      password: password.value,
    })
      .then(user => {
        name.value = ''
        username.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  componentDidMount() {
    this.firstInput.current.focus()
  }

  render() {
    const { error } = this.state
    return (
      <form className="form-login-register"
        onSubmit={this.handleSubmit}
      >
        <div role='alert' className="error-bar">
          {error && <p>{error}</p>}
        </div>
        <div className="form-entry">
          <Label htmlFor='registration-name-input' className="form-label-input">
            Enter your name<Required />
          </Label>
          <Input
            ref={this.firstInput}
            className="form-input"
            id='registration-name-input'
            name='name'
            maxlength="20"
            required
          />
        </div>
        <div className="form-entry">
          <Label htmlFor='registration-username-input' className="form-label-input">
            Choose a username<Required />
          </Label>
          <Input
            className="form-input"
            id='registration-username-input'
            name='username'
            maxlength="20"
            required
          />
        </div>
        <div className="form-entry">
          <Label htmlFor='registration-password-input' className="form-label-input">
            Choose a password<Required />
          </Label>
          <Input
            className="form-input"
            id='registration-password-input'
            name='password'
            type='password'
            maxlength="20"
            required
          />
        </div>
        <footer>
          <Button type='submit' className="button-form-submit">
            Sign up
          </Button>
          {' '}
          <Link to='/login'>Already have an account?</Link>
        </footer>
      </form>
    )
  }
}

export default RegistrationForm
