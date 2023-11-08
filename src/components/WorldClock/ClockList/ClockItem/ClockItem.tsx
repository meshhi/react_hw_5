import React, { Component } from 'react'
import s from './ClockItem.module.css';
import moment, * as moments from 'moment';

export interface IClockItem {
    id: number | string,
    title: string,
    offset: number
}

interface IClockItemProps {
    clockItem: IClockItem,
    deleteClockItem: (clockId: number | string) => void
}

interface IClockItemState {
    time: moments.Moment,
}

export default class ClockItem extends Component<IClockItemProps, IClockItemState> {
    initClockTimer: () => void;
    timerID?: number | null;
    constructor(props: IClockItemProps) {
        super(props);
        this.timerID = null;
        this.state = {
            time: moment().utcOffset('GMT-00:00').add(this.props.clockItem.offset, 'hours'),
        }
        this.initClockTimer = () => {
            this.timerID = setInterval(() => this.setState(prevState => {
                const newState = {...prevState};
                newState.time.add(1, 'seconds');
                return newState;
            }), 1000);
        }
    };

    componentDidMount(): void {
        this.initClockTimer();
    }

    componentWillUnmount(): void {
        this.timerID = null;
    }

    render() {
        return (
            <div className={s.clock_item}>
                <h2>{this.props.clockItem.title}</h2>
                <button className={s.clock_item__close_btn} onClick={() => this.props.deleteClockItem(this.props.clockItem.id)}>X</button>
                <div>{this.state.time.format()}</div>
                <div className={s.clock}>
                    <div className={s.clock_arrow__seconds} style={{transform: `rotate(${this.state.time.seconds()/60*360}deg)`}}></div>
                    <div className={s.clock_arrow__minutes} style={{transform: `rotate(${this.state.time.minutes()/60*360}deg)`}}></div>
                    <div className={s.clock_arrow__hours} style={{transform: `rotate(${this.state.time.hours()/24*360}deg)`}}></div>
                </div>
            </div>
        )
    }
}
