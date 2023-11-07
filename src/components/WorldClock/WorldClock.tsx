import React from 'react';
import { ClockList } from './ClockList/ClockList';
import InputForm from './InputForm/InputForm';
import { IClockItem } from './ClockList/ClockItem/ClockItem';

interface IWorldClockProps {

}

interface IWorldClockState {
    clockList: IClockItem[];
}

export class WorldClock extends React.Component<IWorldClockProps, IWorldClockState> {
    constructor(props: IWorldClockProps) {
        super(props);
        this.state = {
            clockList: []
        }
    };

    addNewClock = (clockConfig : IClockItem) => {
        this.setState({
            clockList: [...this.state.clockList, clockConfig]
        })
    }

    deleteClock = (clockId : string | number) => {
        this.setState({
            clockList: [...this.state.clockList].filter(clockItem => clockItem.id!== clockId)
        })
    }

    render() {
        return (
            <div className='world-clock'>
                <InputForm addNewClock={this.addNewClock}></InputForm>
                <ClockList clockList={this.state.clockList} deleteClock={this.deleteClock}></ClockList>
            </div>
        )
    }
}