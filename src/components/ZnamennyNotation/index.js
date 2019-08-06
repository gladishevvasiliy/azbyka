import React from 'react'
import './style.css'
const ZnamennyNotation = ({ value }) => {
  return (
    <div
      className="znamennyNotation"
      dangerouslySetInnerHTML={{ __html: value }}
      data-html="true"
    />
  )
}
export default ZnamennyNotation
