import React, { Component } from 'react'
import ClockItem from './ClockItem/ClockItem'
import { IClockItem } from './ClockItem/ClockItem'

interface IClockListProps {
  clockList: IClockItem[],
  deleteClock: (clockId : string | number) => void;
}

export class ClockList extends Component<IClockListProps> {
  constructor(props: IClockListProps) {
    super(props);
  }
  render() {
    return (
      <div className='world-clock__clock-list'>
        {this.props.clockList.map(clockItem =>
          <ClockItem
            key={clockItem.id}
            clockItem={clockItem}
            deleteClockItem={this.props.deleteClock}
          ></ClockItem>)}
      </div>
    )
  }
}