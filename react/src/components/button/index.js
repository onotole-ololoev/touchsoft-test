import React, {memo} from "react";
import './button.css';

const Button = ({label, onClick, disabled}) => {
    console.log('render');

    return (
        <button
            disabled={disabled}
            className='btn'
            onClick={onClick}
        >{label}</button>
    )
}


export default Button;