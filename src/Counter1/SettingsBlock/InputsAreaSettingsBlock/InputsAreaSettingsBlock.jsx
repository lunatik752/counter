import React from 'react';
import style from './InputsAreaSettingsBlock.module.css';
import InputForSettings from "./InputForSettings/InputForSettings";


const InputsAreaSettingsBlock = (props) => {

    return (
        <div className={style.inputsArea}>
          <InputForSettings title={'max value'} inputValue={props.state.maxValue} onChange={props.updateNewMaxValue} classNameInput={classNameInput}/>
          <InputForSettings title={'start value'} inputValue={props.state.startValue} onChange={props.updateNewStartValue} classNameInput={classNameInput}/>
        </div>

    );
}

export default InputsAreaSettingsBlock;
