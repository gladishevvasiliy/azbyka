import React from 'react'
import { isEmpty } from 'lodash'
import { Table, Header, Message } from 'semantic-ui-react'
import Item from '../Item'
import './style.css'
const Category = ({ category }) => {
  if (isEmpty(category.symbols)) return null
  return (
    <>
      <Header as="h2">{category.name}</Header>
      <Message>
        {category.description.map(description => (
          <>
            <span className="sourceDescription">{description.source}: </span>
            <span>{description.info}</span>
          </>
        ))}
      </Message>
      <Table key={category.id} celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>№</Table.HeaderCell>
            <Table.HeaderCell>Начертание</Table.HeaderCell>
            <Table.HeaderCell>Ноты</Table.HeaderCell>
            <Table.HeaderCell>Название</Table.HeaderCell>
            <Table.HeaderCell>Значение</Table.HeaderCell>
            <Table.HeaderCell>Развод</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {category.symbols.map(symbol => (
            <Item symbol={symbol} key={symbol.name} />
          ))}
        </Table.Body>
      </Table>
    </>
  )
}
export default Category
