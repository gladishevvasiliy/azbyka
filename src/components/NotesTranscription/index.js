import React from 'react'
import { Stave } from '../MusicNotation'

const NotesTranscription = ({ notes }) => {
  console.log(notes)
  return (
    <Stave
      notes="f5/8, e5, d5, c5/16, c5, d5/8, e5, f5, f5/32, f5, f5, f5',
  'e4/4, e4, e4, d4/8, e4"
    />
  )
}

export default NotesTranscription
