import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { reduxForm } from 'redux-form'
import TextInput from '../../components/TextInput'
import Button from '../../components/Button'

class ExpenseForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      submitted: false
    }
  }

  submit = (values) => {
    this.props.handleSubmit(values)
    this.setState({ submitted: true })
  }

  render() {

    if (this.state.submitted) {
      return <Redirect to="/"/>
    }

    return (
      <form onSubmit={this.submit}>
        <div>
          <TextInput name="title" displayName="Title" />
          <TextInput name="cost" displayName="Cost" />
          <Button type="submit">submit</Button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  // a unique name for the form
  form: 'expense'
})(ExpenseForm)
