import React from 'react';
import style from './InputForSettings.module.css';


const InputForSettings = (props) => {

    let onValueChange = (e) => {
        let num = Number(e.currentTarget.value);
        props.onChange(num);
    };


    return (
        <div className={style.inputForSettings}>
            <span className={style.inputTitle}>{props.title}</span>
            <input type='number' onChange={onValueChange}  value={props.inputValue}/>
        </div>

    );
}

export default InputForSettings;
