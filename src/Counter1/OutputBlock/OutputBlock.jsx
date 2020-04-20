import React from 'react';
import style from './OutputBlock.module.css';
import ButtonsAreaOutputBlock from "./ButtonsAreaOutputBlock/ButtonsAreaOutputBlock";
import OutputValue from "./OutputValue/OutputValue";


const OutputBlock = (props) => {
    return (
        <div className={style.outputBlock}>
            <OutputValue state={props.state}/>
            <ButtonsAreaOutputBlock state={props.state}
                                    reset={props.reset}
                                    changeCounterValue={props.changeCounterValue}/>
        </div>
    );
}

export default OutputBlock;
