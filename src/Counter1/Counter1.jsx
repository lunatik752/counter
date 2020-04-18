import React from 'react';
import style from './Counter1.module.css';
import SettingsBlock from "./SettingsBlock/SettingsBlock";
import OutputBlock from "./OutputBlock/OutputBlock";


const Counter1 = () => {
    return (
        <div className={style.counterWrapper}>
            <SettingsBlock/>
            <OutputBlock/>
        </div>
    );
};

export default Counter1;
