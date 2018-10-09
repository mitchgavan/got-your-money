import React from 'react'
import { Redirect } from 'react-router-dom'
import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import Container from '../../components/Container'

class LoginForm extends React.Component {
  state = {
    username: '',
    password: '',
  }

  componentDidMount() {
    this.props.getCurrentUser()
  }

  handleSubmit = e => {
    e.preventDefault()

    const { username, password } = this.state

    this.props.signIn({
      username,
      password,
    })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    if (this.props.authentication.isAuthenticated) {
      return <Redirect to={'/'} />
    }

    return (
      <Container p={2}>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <TextInput
            name="username"
            displayName="Username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <TextInput
            name="password"
            displayName="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <Button type="submit">
            {this.props.isSigningIn ? 'Signing in...' : 'Sign in'}
          </Button>
        </form>
        {this.props.signInError && <div>Credentials are wrong</div>}
      </Container>
    )
  }
}

export default LoginForm
