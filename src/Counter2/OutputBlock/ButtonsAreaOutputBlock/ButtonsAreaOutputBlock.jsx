import React from 'react';
import style from './ButtonsAreaOutputBlock.module.css';
import Button from "../../../Button/Button";


const ButtonsAreaOutputBlock = (props) => {


    return (
        <div className={style.buttonsArea}>
            <Button title={'inc'}
                    onClick={props.changeCounterValue}
                    disabled={props.state.disabledCountButton}
            />
            <Button title={'reset'}
                    onClick={props.reset}

            />
            <Button title={'set'}
                onClick={props.showSettingsBlock}
            />
        </div>

    );
}

export default ButtonsAreaOutputBlock;
