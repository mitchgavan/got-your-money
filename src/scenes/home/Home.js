import React from 'react'
import { map } from 'ramda'
import { Flex } from 'grid-styled'
import { startOfWeek } from 'date-fns/esm'
import WeeklySummary from './WeeklySummary'
import ExpenseItem from '../../components/ExpenseItem'
import ButtonLink from '../../components/ButtonLink'
import Container from '../../components/Container'
import ExpenseTotal from './ExpenseTotal'
import { getTotalCost } from '../../utilities/calculations'

export default class Home extends React.Component {

  componentDidMount() {
    this.props.setWeek({
      startOfWeek: startOfWeek(new Date(), { weekStartsOn: 1 })
    })
  }

  handleRemoveClick = id => this.props.removeItem({ id })

  render() {
    return (
        <div>
          <ExpenseTotal
            total={getTotalCost(this.props.items)} 
          />
          <Container>
            <WeeklySummary
              onAddClick={this.props.addItem}
              onRemoveClick={this.props.removeItem}
              startOfWeek={this.props.date.startOfWeek}
            />
            <Flex p={3} justifyContent='center'>
              <ButtonLink onClick={this.props.goToAddItem}>
                Add a new expense
              </ButtonLink>
            </Flex>
            <Flex wrap="wrap">
              {map(item => (
                <ExpenseItem
                  key={item.id}
                  onRemoveClick={() => this.handleRemoveClick(item.id)}
                  {...item}
                />
              ), this.props.items)}
            </Flex>
          </Container>
        </div>
    )
  }
}
