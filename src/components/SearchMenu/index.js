import React from 'react'
import { Menu } from 'semantic-ui-react'
import { SEARCH_BY_NAME, SEARCH_BY_VIEW } from '../../res/constants'

const SearchMenu = ({ handleMenuItemClick, activeMenuItem }) => {
  return (
    <Menu secondary>
      <Menu.Item
        name={SEARCH_BY_NAME}
        onClick={handleMenuItemClick}
        active={activeMenuItem === SEARCH_BY_NAME}
      >
        Поиск по названию
      </Menu.Item>
      <Menu.Item
        name={SEARCH_BY_VIEW}
        onClick={handleMenuItemClick}
        active={activeMenuItem === SEARCH_BY_VIEW}
      >
        Поиск по начертанию
      </Menu.Item>
    </Menu>
  )
}

export default SearchMenu
