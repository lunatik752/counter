import React from 'react';
import style from './SettingsBlock.module.css';
import ButtonsAreaSettingsBlock from "./ButtonsAreaSettingsBlock/ButtonsAreaSettingsBlock";
import InputsAreaSettingsBlock from "./InputsAreaSettingsBlock/InputsAreaSettingsBlock";


const SettingsBlock = (props) => {
    return (
        <div className={style.settingsBlock}>
            <InputsAreaSettingsBlock state={props.state}
                                     updateNewMaxValue={props.updateNewMaxValue}
                                     updateNewStartValue={props.updateNewStartValue}/>
            <ButtonsAreaSettingsBlock/>
        </div>
    );
}

export default SettingsBlock;
