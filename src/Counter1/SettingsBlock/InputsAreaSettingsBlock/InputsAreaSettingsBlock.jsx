import React from 'react';
import style from './InputsAreaSettingsBlock.module.css';
import InputForSettings from "./InputForSettings/InputForSettings";


const InputsAreaSettingsBlock = () => {
    return (
        <div className={style.inputsArea}>
          <InputForSettings title={'max value'}/>
          <InputForSettings title={'start value'}/>
        </div>

    );
}

export default InputsAreaSettingsBlock;
