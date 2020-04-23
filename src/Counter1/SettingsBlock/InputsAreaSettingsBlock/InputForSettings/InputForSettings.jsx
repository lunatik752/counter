import React from 'react';
import style from './InputForSettings.module.css';


const InputForSettings = (props) => {
debugger
    let onValueChange = (e) => {
        let value = Number(e.currentTarget.value);
        props.onChange(value);
    };
    let classNameInput = props.inputErrorClass ? style.input + ' ' + style.error : style.input;

    return (
        <div className={style.inputForSettings}>
            <span className={style.inputTitle}>{props.title}</span>
            <input className={classNameInput} type='number' onChange={onValueChange}  value={props.inputValue}/>
        </div>

    );
}

export default InputForSettings;
