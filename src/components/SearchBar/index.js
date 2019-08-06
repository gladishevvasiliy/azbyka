import React, { useState } from 'react'
import { Container } from 'semantic-ui-react'
import SearchMenu from '../SearchMenu'
import SearchByName from '../SearchByName'
import SearchByView from '../SearchByView'

import './style.css'
import { SEARCH_BY_NAME, SEARCH_BY_VIEW } from '../../res/constants'

const SearchBar = ({ filterList }) => {
  const [activeMenuItem, setActiveMenuItem] = useState(SEARCH_BY_NAME)

  const handleMenuItemClick = (e, { name }) => {
    setActiveMenuItem(name)
  }

  const switchSearch = () => {
    switch (activeMenuItem) {
      case SEARCH_BY_NAME:
        return <SearchByName filterList={filterList} />
      case SEARCH_BY_VIEW:
        return <SearchByView filterList={filterList} />
      default:
        return null
    }
  }

  return (
    <Container className="searchBar">
      <SearchMenu
        handleMenuItemClick={handleMenuItemClick}
        activeMenuItem={activeMenuItem}
      />
      {switchSearch()}
    </Container>
  )
}
export default SearchBar
