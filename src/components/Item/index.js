import React from 'react'
import { Table } from 'semantic-ui-react'
import NotesTranscription from '../NotesTranscription'
const Item = ({ symbol }) => {
  return (
    <Table.Row>
      <Table.Cell>{symbol.id}</Table.Cell>
      <Table.Cell>{symbol.value}</Table.Cell>
      <Table.Cell>
        <NotesTranscription notes={symbol.notes} />
      </Table.Cell>
      <Table.Cell>{symbol.name}</Table.Cell>
      <Table.Cell>{symbol.meaning}</Table.Cell>
      <Table.Cell>{symbol.transcript}</Table.Cell>
    </Table.Row>
  )
}
export default Item
