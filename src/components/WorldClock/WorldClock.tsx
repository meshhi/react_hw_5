import React from 'react';
import { ClockList } from './ClockList/ClockList';

interface IWorldClockProps {

}

interface IWorldClockState {

}

export class WorldClock extends React.Component<IWorldClockProps, IWorldClockState> {
    state: IWorldClockState = {

    };

    constructor(props: IWorldClockProps) {
        super(props);
    };

    render() {
        return (
            <div className='world-clock'>
                <div className='world-clock__input-form'></div>
                <ClockList></ClockList>
            </div>
        )
    }
}