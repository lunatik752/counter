import React from 'react';
import style from './InputForSettings.module.css';


const InputForSettings = () => {
    return (
        <div className={style.InputForSettings}>
            <span className={style.inputTitle}>title</span>
            <input type='number'/>
        </div>

    );
}

export default InputForSettings;
