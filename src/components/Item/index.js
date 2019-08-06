import React from 'react'
import { Table } from 'semantic-ui-react'
import Notes from '../MusicNotation'
import ZnamennyNotation from '../ZnamennyNotation'
import Transcript from '../Transcript'

const Item = ({ symbol }) => {
  return (
    <Table.Row>
      <Table.Cell>{symbol.id}</Table.Cell>
      <Table.Cell>
        <ZnamennyNotation value={symbol.value} />
      </Table.Cell>
      <Table.Cell>
        <Notes notes={symbol.notes} time={symbol.time} />
      </Table.Cell>
      <Table.Cell>{symbol.name}</Table.Cell>
      <Table.Cell>{symbol.meaning}</Table.Cell>
      <Table.Cell>
        <Transcript values={symbol.transcript} />
      </Table.Cell>
    </Table.Row>
  )
}
export default Item
