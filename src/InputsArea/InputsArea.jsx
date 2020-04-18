import React from 'react';
import style from './InputsArea.module.css';
import InputForSettings from "../InputForSettings/InputForSettings";


const InputsArea = () => {
    return (
        <div className={style.inputsArea}>
          <InputForSettings/>
          <InputForSettings/>
        </div>

    );
}

export default InputsArea;
