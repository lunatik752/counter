import React from 'react';
import style from './Button.module.css';


const Button = (props) => {

    return (
        <div>
            <button className={style.button}
                onClick={props.onClick}
                disabled={props.disabled}
            >{props.title}</button>
        </div>
    );
};

export default Button;
