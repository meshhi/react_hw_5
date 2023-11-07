import React from 'react';
import { ClockList } from './ClockList/ClockList';
import InputForm from './InputForm/InputForm';
import { IClockItemProps } from './ClockList/ClockItem/ClockItem';

interface IWorldClockProps {

}

interface IWorldClockState {
    clockList: IClockItemProps[];
}

export class WorldClock extends React.Component<IWorldClockProps, IWorldClockState> {
    constructor(props: IWorldClockProps) {
        super(props);
        this.state = {
            clockList: []
        }
    };

    addNewClock = (clockConfig : IClockItemProps) => {
        console.log(clockConfig);
    }

    render() {
        return (
            <div className='world-clock'>
                <InputForm addNewClock={this.addNewClock}></InputForm>
                <ClockList></ClockList>
            </div>
        )
    }
}