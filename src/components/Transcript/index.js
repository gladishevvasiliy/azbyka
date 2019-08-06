import React from 'react'
import './style.css'
import ZnamennyNotation from '../ZnamennyNotation'

const Transcript = ({ values }) => {
  return (
    <div className="transcript">
      {values.length === 0
        ? '—'
        : values.map(value => <ZnamennyNotation value={value} />)}
    </div>
  )
}

export default Transcript
