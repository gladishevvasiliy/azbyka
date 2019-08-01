import React from 'react'
import Category from '../Category'
const List = ({ items }) => {
  return (
    <>
      {items.map(category => (
        <Category key={category.id} category={category} />
      ))}
    </>
  )
}
export default List
