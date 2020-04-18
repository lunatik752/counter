import React from 'react';
import style from './ButtonsArea.module.css';
import Button from "../Button/Button";


const ButtonsArea = () => {
    return (
        <div className={style.buttonsArea}>
            <Button title={'set'}/>
        </div>

    );
}

export default ButtonsArea;
