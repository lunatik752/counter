import React from 'react';
import style from './OutputValue.module.css';


const OutputValue = (props) => {

    let counterClass = style.outputValue;

    switch (typeof(props.state.currentValue)) {
        case 'number':
            counterClass = counterClass + (props.state.currentValue === props.state.maxValue ?  ' ' + style.outputValueMax : '');
            break;
        case "string":
            counterClass = counterClass + ' ' + style.outputValueText;
            break;
        default:
            break
    }


    return (
        <div className={style.outputValueWrapper}>
            <span className={counterClass}>{props.state.currentValue}</span>
        </div>

    );
}

export default OutputValue;
