import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { format, parse } from 'date-fns'
import TextInput from '../../components/TextInput'
import Button from '../../components/Button'

class ExpenseForm extends Component {
  state = {
    submitted: false,
    title: '',
    cost: '',
    date: format(new Date(), 'dd/MM/yyyy')
  }

  handleSubmit = e => {
    e.preventDefault()

    const parsedDate = parse(
      this.state.date,
      'dd/MM/yyyy',
      new Date()
    )

    this.props.onSubmit({
      title: this.state.title,
      cost: this.state.cost,
      date: parsedDate
    })

    this.setState({ submitted: true })
  }

  handleChange = e => {
    this.setState({ 
      [e.target.name]: e.target.value
    })
  }

  render() {

    if (this.state.submitted && !this.props.isPosting) {
      return <Redirect to="/"/>
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <TextInput 
            name="title" 
            displayName="Title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <TextInput 
            name="cost" 
            displayName="Cost"
            value={this.state.cost}
            onChange={this.handleChange}
          />
          <TextInput 
            name="date" 
            displayName="Date"
            value={this.state.date}
            onChange={this.handleChange}
          />
          <Button type="submit">
            {this.props.isPosting ? 'submitting': 'submit'}
          </Button>
        </div>
      </form>
    )
  }
}

export default ExpenseForm
