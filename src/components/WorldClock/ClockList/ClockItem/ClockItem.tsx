import React, { Component } from 'react'
import s from './ClockItem.module.css';

export interface IClockItemProps {
    title: string,
    offset: number | string
}

interface IClockItemState {
    time: number,
    degrees: number
}

export default class ClockItem extends Component<IClockItemProps, IClockItemState> {
    initClockTimer: () => void;
    constructor(props: IClockItemProps) {
        super(props);
        this.state = {
            time: Number(new Date()),
            degrees: 0
        }
        this.initClockTimer = () => {
            setInterval(() => this.setState(prevState => {
                const newState = {...prevState};
                newState.time += 1000;
                newState.degrees += 1;
                return newState;
            }), 1000);
        }
    };

    componentDidMount(): void {
        this.initClockTimer();
    }

    componentWillUnmount(): void {
        
    }


    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <div>{this.state.time}</div>
                <div className={s.clock}>
                    <div className={s.clock_arrow} style={{transform: `rotate(${this.state.degrees}deg)`}}></div>
                </div>
            </div>
        )
    }
}
