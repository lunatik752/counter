import React from 'react';
import style from './ButtonsAreaSettingsBlock.module.css';
import Button from "../../../Button/Button";


const ButtonsAreaSettingsBlock = () => {
    return (
        <div className={style.buttonsArea}>
            <Button title={'set'}/>
        </div>

    );
}

export default ButtonsAreaSettingsBlock;
