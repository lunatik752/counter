import React from 'react';
import style from './Counter1.module.css';
import SettingsBlock from "./SettingsBlock/SettingsBlock";
import OutputBlock from "./OutputBlock/OutputBlock";


const Counter1 = (props) => {

    return (
        <div className={style.counterWrapper}>
            <SettingsBlock state={props.state}
                           updateNewMaxValue={props.updateNewMaxValue}
                           updateNewStartValue={props.updateNewStartValue}
                           onButtonSetClick={props.onButtonSetClick}
            />
            <OutputBlock state={props.state}
                         changeCounterValue={props.changeCounterValue}
                         reset={props.reset}/>
        </div>
    );
};

export default Counter1;
