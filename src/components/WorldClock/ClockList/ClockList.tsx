import React, { Component } from 'react'
import ClockItem from './ClockItem/ClockItem'

export class ClockList extends Component {
  render() {
    return (
      <div className='world-clock__clock-list'>
        <ClockItem
            title="test"
            offset={0}
        ></ClockItem>
      </div>
    )
  }
}