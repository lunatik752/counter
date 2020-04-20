import React from 'react';
import style from './OutputValue.module.css';


const OutputValue = (props) => {

    let counterClass = props.state.initialValue === props.state.counterValueMax ? style.outputValueMax : style.outputValue;

    return (
        <div className={style.outputValueWrapper}>
            <span className={counterClass}>{props.state.initialValue}</span>
        </div>

    );
}

export default OutputValue;
