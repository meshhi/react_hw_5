import React, { Component, ReactElement } from 'react'
import s from './InputForm.module.css'
import { IClockItem } from '../ClockList/ClockItem/ClockItem';
import { v4 as uuidv4 } from "uuid";

interface IInputFormProps {
    addNewClock: (clockConfig : IClockItem) => void;
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
        const offset = Number(this.offsetRef.current?.value);
        if (!title) return;
        this.props.addNewClock({
            id: uuidv4(),
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
                    <input type="number" min="0" max="12" name="" id="clock-time-zone" ref={this.offsetRef}/>
                </label>
                <button type='submit'>Добавить</button>
            </form>
        )
    }
}
