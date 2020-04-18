import React from 'react';
import style from './OutputBlock.module.css';
import ButtonsArea from "../../ButtonsArea/ButtonsArea";
import InputsArea from "../../InputsArea/InputsArea";


const OutputBlock = () => {
    return (
        <div className={style.outputBlock}>
            <InputsArea/>
            <ButtonsArea />
        </div>
    );
}

export default OutputBlock;
