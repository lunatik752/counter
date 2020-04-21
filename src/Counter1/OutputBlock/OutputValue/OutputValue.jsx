import React from 'react';
import style from './OutputValue.module.css';


const OutputValue = (props) => {

    return (
        <div className={style.outputValueWrapper}>
            <span className={props.state.counterClass}>{props.state.currentValue}</span>
        </div>

    );
}

export default OutputValue;
