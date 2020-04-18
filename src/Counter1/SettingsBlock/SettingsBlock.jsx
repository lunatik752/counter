import React from 'react';
import style from './SettingsBlock.module.css';
import ButtonsArea from "../../ButtonsArea/ButtonsArea";
import InputsArea from "../../InputsArea/InputsArea";


const SettingsBlock = () => {
    return (
        <div className={style.settingsBlock}>
            <InputsArea/>
            <ButtonsArea/>
        </div>
    );
}

export default SettingsBlock;
