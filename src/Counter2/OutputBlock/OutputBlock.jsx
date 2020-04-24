import React from 'react';
import style from './OutputBlock.module.css';
import OutputValue from "./OutputValue/OutputValue";
import ButtonsAreaOutputBlock from "./ButtonsAreaOutputBlock/ButtonsAreaOutputBlock";



const OutputBlock = (props) => {
    return (
        <div className={style.outputBlock}>
            <OutputValue showSettingsBlock={props.showSettingsBlock}
                         state={props.state}/>
            <ButtonsAreaOutputBlock showSettingsBlock={props.showSettingsBlock}
                                    reset={props.reset}
                                    changeCounterValue={props.changeCounterValue}
                                    state={props.state}
            />
        </div>
    );
}

export default OutputBlock;
