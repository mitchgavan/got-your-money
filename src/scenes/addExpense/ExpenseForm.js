import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { reduxForm } from 'redux-form'
import uuidv1 from 'uuid/v1'
import { format } from 'date-fns'
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

  componentWillMount() {
    this.props.initialize({ 
      id: uuidv1(),
      date: format(new Date(), 'dd/MM/yyyy')
    })
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
          <TextInput name="date" displayName="Date" />
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
