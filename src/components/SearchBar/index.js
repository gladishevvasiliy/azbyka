import React from 'react'
import { Container } from 'semantic-ui-react'
import './style.css'

const SearchBar = ({ filterList }) => {
  return (
    <Container className="searchBar">
      <input
        className="searchForm"
        type="text"
        onChange={e => filterList(e.target.value)}
      />
    </Container>
  )
}
export default SearchBar
