import React from 'react'
import { Redirect } from 'react-router-dom'
import TextInput from '../../components/TextInput'
import Button from '../../components/Button'

class LoginForm extends React.Component {
  state = {
    username: '',
    password: '',
  }

  componentDidMount() {
    this.props.getCurrentSession()
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
    // TODO handle error state
    if (this.props.authentication.isAuthenticated) {
      return <Redirect to={'/'} />
    }

    return (
      <div>
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
          <Button type="submit">Submit</Button>
        </form>
      </div>
    )
  }
}

export default LoginForm
