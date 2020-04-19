import React from 'react';
import style from './OutputBlock.module.css';
import ButtonsAreaOutputBlock from "./ButtonsAreaOutputBlock/ButtonsAreaOutputBlock";
import OutputValue from "./OutputValue/OutputValue";


const OutputBlock = () => {
    return (
        <div className={style.outputBlock}>
            <OutputValue/>
            <ButtonsAreaOutputBlock />
        </div>
    );
}

export default OutputBlock;
