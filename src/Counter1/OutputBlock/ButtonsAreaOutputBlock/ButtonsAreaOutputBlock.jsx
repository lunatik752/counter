import React from 'react';
import style from './ButtonsAreaOutputBlock.module.css';
import Button from "../../../Button/Button";


const ButtonsAreaOutputBlock = () => {
    return (
        <div className={style.buttonsArea}>
            <Button title={'inc'}/>
            <Button title={'reset'}/>
        </div>

    );
}

export default ButtonsAreaOutputBlock;
