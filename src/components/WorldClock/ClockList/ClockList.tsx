import React, { Component } from 'react'
import ClockItem from './ClockItem/ClockItem'
import { IClockItem } from './ClockItem/ClockItem'
import s from './ClockList.module.css'

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
      <div className={s.world_clock__clock_list}>
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