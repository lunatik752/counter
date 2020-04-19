import React from 'react';
import style from './SettingsBlock.module.css';
import ButtonsAreaSettingsBlock from "./ButtonsAreaSettingsBlock/ButtonsAreaSettingsBlock";
import InputsAreaSettingsBlock from "./InputsAreaSettingsBlock/InputsAreaSettingsBlock";


const SettingsBlock = () => {
    return (
        <div className={style.settingsBlock}>
            <InputsAreaSettingsBlock/>
            <ButtonsAreaSettingsBlock/>
        </div>
    );
}

export default SettingsBlock;
