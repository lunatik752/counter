import React from 'react';
import style from './InputForSettings.module.css';


const InputForSettings = (props) => {
    return (
        <div className={style.inputForSettings}>
            <span className={style.inputTitle}>{props.title}</span>
            <input type='number'/>
        </div>

    );
}

export default InputForSettings;
