import React from 'react'
import './style.css'
const SearchByName = ({ filterList }) => {
  return (
    <input
      className="searchForm"
      type="text"
      onChange={e => filterList(e.target.value)}
      placeholder="Введите название..."
    />
  )
}
export default SearchByName
