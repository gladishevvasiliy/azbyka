import React from 'react'
import { Button, Container, Header } from 'semantic-ui-react'

import './style.css'
const SearchByView = ({ filterList }) => {
  return (
    <>
      <input
        className="searchByViewForm"
        type="text"
        onChange={e => filterList(e.target.value)}
        placeholder=""
      />
      <Container className="symbolsButtons">
        <Header as="h3">Выберите символы</Header>
        <Button basic className="symbolButton">
          p
        </Button>
      </Container>
    </>
  )
}
export default SearchByView
