import React from 'react';
import style from './Button.module.css';


const Button = (props) => {

   let onButtonClick =  () => {
       props.onClick();
   }

    return (
        <div>
            <button className={style.button}
                onClick={onButtonClick}
                disabled={props.disabled}
            >{props.title}</button>
        </div>
    );
};

export default Button;
