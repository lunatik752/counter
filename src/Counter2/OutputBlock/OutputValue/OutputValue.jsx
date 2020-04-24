import React from 'react';
import style from './OutputValue.module.css';


const OutputValue = (props) => {

    let counterClass = props.state.currentValue === props.state.maxValue ? style.outputValueMax : style.outputValue;

    return (
        <div className={style.outputValueWrapper}>
            <span className={counterClass}>{props.state.currentValue}</span>
        </div>

    );
}

export default OutputValue;
