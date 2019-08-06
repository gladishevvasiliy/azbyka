import Vex from 'vexflow'
import React, { Component } from 'react'

import './style.css'

const VF = Vex.Flow

export default class Notes extends Component {
  componentDidMount() {
    const svgContainer = document.createElement('div')
    const { notes, time } = this.props
    var vf = new VF.Factory({
      renderer: { elementId: svgContainer, width: 150, height: 120 },
    })
    var score = vf.EasyScore()
    var stave = vf.Stave()
    var voice = score.voice(score.notes(notes), { time: time })
    vf.Formatter()
      .joinVoices([voice])
      .formatToStave([voice], stave)

    vf.draw()
    this.refs.outer.appendChild(svgContainer)
  }

  render() {
    return <div className="notesWrapper" ref="outer"></div>
  }
}
