import React, { Component, ReactElement } from 'react'
import s from './InputForm.module.css'
import { IClockItemProps } from '../ClockList/ClockItem/ClockItem';

interface IInputFormProps {
    addNewClock: (clockConfig : IClockItemProps) => void;
}

interface IInputFormState {
    
}

export default class InputForm extends Component<IInputFormProps, IInputFormState> {
    titleRef: React.RefObject<HTMLInputElement>;
    offsetRef: React.RefObject<HTMLInputElement>;

    constructor(props : IInputFormProps) {
        super(props);
        this.titleRef = React.createRef();
        this.offsetRef = React.createRef();
    }

    handleSubmit = (e : React.SyntheticEvent) => {
        e.preventDefault();
        const title = this.titleRef.current?.value;
        const offset = this.offsetRef.current?.value;
        if (!title || !offset) return;
        this.props.addNewClock({
            title: title, 
            offset: offset
        });
        this.titleRef.current && (this.titleRef.current.value = '');
        this.offsetRef.current && (this.offsetRef.current.value = '');
    }

    render() {
        return (
            <form 
            className={s.world_clock__input_form}
            onSubmit={this.handleSubmit}
            >
                <label htmlFor="">
                    Название
                    <input type="text" name="" id="clock-title" ref={this.titleRef}/>
                </label>
                <label htmlFor="">
                    Временная зона
                    <input type="text" name="" id="clock-time-zone" ref={this.offsetRef}/>
                </label>
                <button type='submit'>Добавить</button>
            </form>
        )
    }
}
