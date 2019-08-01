import React, { useState } from 'react'
import { Container } from 'semantic-ui-react'
import { clone } from 'lodash'
import List from '../../components/List'
import SearchBar from '../../components/SearchBar'
import { categories } from '../../res/symbols.json'

const Main = () => {
  const [categoryList, setCategoryList] = useState(categories)

  const filterList = filter => {
    if (filter.length === 0) {
      setCategoryList(categories)
      return
    }
    const newCategoryList = clone(categoryList).map(category => {
      return {
        ...category,
        symbols: category.symbols.filter(symbol =>
          symbol.name.toUpperCase().includes(filter.toUpperCase())
        ),
      }
    })
    setCategoryList(newCategoryList)
  }

  return (
    <Container>
      <SearchBar filterList={filterList} />
      <List items={categoryList} />
    </Container>
  )
}
export default Main
