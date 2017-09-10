import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import uuid from 'uuid/v1'

class ExpenseForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      submitted: false
    }
  }

  submit = (values) => {
    this.props.handleSubmit(values, uuid())
    this.setState({ submitted: true})
  }

  render() {

    if (this.state.submitted) {
      return <Redirect to="/"/>
    }

    return (
      <form onSubmit={this.submit}>
        <div>
          <label htmlFor="title">Name</label>
          <Field name="title" component="input" type="text" />
          <label htmlFor="cost">Cost</label>
          <Field name="cost" component="input" type="text" />
          <button type="submit">submit</button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  // a unique name for the form
  form: 'expense'
})(ExpenseForm)
